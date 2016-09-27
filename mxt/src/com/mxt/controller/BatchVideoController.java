package com.mxt.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.net.URLConnection;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.ProgressListener;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.support.DaoSupport;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.mxt.dao.VideoDao;
import com.mxt.entity.Chaptertable;
import com.mxt.entity.CodesTable;
import com.mxt.entity.CodesTablemp4;
import com.mxt.entity.Columns;
import com.mxt.entity.CounseTable;
import com.mxt.entity.Funs;
import com.mxt.entity.Menus;
import com.mxt.entity.ProcessInfo;
import com.mxt.entity.Video;
import com.mxt.util.DateTimeUtil;
import com.mxt.util.StringUtils;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016-7-12 下午2:47:31
 */
@Controller
@RequestMapping("/batchvideo")
public class BatchVideoController extends BaseController {
	@Autowired
	@Qualifier("VideoDaoImpl")
	private VideoDao videoDao;
	
	 //上传视频和视频的转码
    @RequestMapping("/preloadFile")
    public void preloadFile() throws Exception{
    	System.out.println("222s");
   	// final HttpSession hs = request.getSession();  
    	 final HttpSession hs = request.getSession();  
        //提供解析时的一些缺省配置
        DiskFileItemFactory factory = new DiskFileItemFactory();
        
        //创建一个解析器,分析InputStream,该解析器会将分析的结果封装成一个FileItem对象的集合
        //一个FileItem对象对应一个表单域
        factory.setSizeThreshold(2048);
        ServletFileUpload sfu = new ServletFileUpload(factory);
        sfu.setProgressListener(new ProgressListener(){  
            public void update(long pBytesRead, long pContentLength, int pItems) {  
                ProcessInfo pri = new ProcessInfo();  
                pri.itemNum = pItems;  
                pri.readSize = pBytesRead;  
                pri.totalSize = pContentLength;  
                pri.show = pBytesRead+"/"+pContentLength+" byte";  
                pri.rate = Math.round(new Float(pBytesRead) / new Float(pContentLength)*100);  
                hs.setAttribute("proInfo", pri);  
            }  
         });  
     
            Video video = new Video();
            List<FileItem> items = sfu.parseRequest(request);
            boolean flagflv = false;    //转码成功与否的标记
            String ffmpegpath=session.getServletContext().getRealPath("/tools/ffmpeg.exe") ;//"/usr/local/ffmpeg/bin/./ffmpeg"  session.getServletContext().getRealPath("/tools/ffmpeg.exe")   //转码工具路径
            String uploadFilepath=null; //源文件存放路径
            String codcFilePath=null; //转吗flv文件存放路径
            String videoPicPath=null;//截图存放路径
            String MP4FilePath=null; //转mp4后存放路径
            for(int i=0; i<items.size(); i++){
                FileItem item = items.get(i);
                //要区分是上传文件还是普通的表单域
                if(item.isFormField()){//isFormField()为true,表示这不是文件上传表单域
                    //普通表单域
                    String paramName = item.getFieldName();
                    String paramValue = item.getString();
                    System.out.println("参数名称为:" + paramName + ", 对应的参数值为: " + paramValue);
                    if(paramName.equals("userid")){
                   	//userid上传者id
                        video.setUserid(Integer.valueOf(paramValue));
                    }
                }else{
               	
                    //上传文件
                    System.out.println("$$$上传文件" + item.getName());
                    ServletContext sctx =session.getServletContext() ;
                    //获得保存文件的路径
                    String basePath =sctx.getRealPath("/videos");//"/mnt/local/tomcat-proscenium/webapps/mxt/videos";            //sctx.getRealPath("/videos");
                    //获得文件名
                    String fileUrl= item.getName();
                    //在某些操作系统上,item.getName()方法会返回文件的完整名称,即包括路径
                    String fileType = fileUrl.substring(fileUrl.lastIndexOf(".")); //截取文件格式
                    //自定义方式产生文件名
                    String serialName = String.valueOf(System.currentTimeMillis());
                    //待转码的文件
                    File uploadFile = new File(basePath+"/temp/"+serialName + fileType);
                    System.out.println(item.getSize());
                    if(item.getSize()>600*1024*1024){
                    	response.setContentType("text/html;charset=UTF-8");
                    	response.getWriter().write("上传失败！您上传的文件太大,系统允许最大文件600M");
                    	response.getWriter().flush();
                    	response.getWriter().close();
                    }
                    item.write(uploadFile);
                    codcFilePath = basePath+"/" + serialName + ".flv";    //设置转换为flv格式后文件的保存路径
                   // System.out.println("文件保存路径："+codcFilePath);
                    videoPicPath = basePath + "/images" +File.separator+ serialName + ".jpg";    //设置上传视频截图的保存路径
                    //String mp4Path = basePath+"/videos_MP4/" + serialName + ".mp4";    //设置转换为flv格式后文件的保存路径
                    MP4FilePath="/mnt/local/tomcat-proscenium/webapps/mxt/videos_MP4/videos/"+ serialName + ".mp4";
                  //  System.out.println("mp4文件保存路径："+MP4FilePath);
                    // 获取配置的转换工具（ffmpeg.exe）的存放路径
                    //String ffmpegPath = session.getServletContext().getRealPath("/tools/ffmpeg.exe");
                    //封装video Videopath视频存放绝对路径  title视频标题默认为原文件名称  filename自动生成文件名称  Screenshotpath截图存放路径 uptime视频上传时间
                    video.setVideopath(codcFilePath);
                    video.setTitle(item.getName());
                    video.setFilename("videos/" + serialName + ".flv");
                    video.setScreenshotpath("videos/images/" +serialName + ".jpg");
                    video.setUptime(DateTimeUtil.getStringDate(new Date(), 2));
                    uploadFilepath = uploadFile.getAbsolutePath();
                    //转码
                    videoDao.saveVideo(video);
                    System.out.println("vvvvvvusridv:"+video.getUserid());
                    System.out.println("baocunshi");
                    System.out.println("wancheng ,kaishizhuanma ");
                    System.out.println("yuwenjian:"+uploadFile.getAbsolutePath());
                    System.out.println("codcFilePath:"+codcFilePath);
                    System.out.println("videoPicPath:"+videoPicPath);
                    ///usr/local/ffmpeg/bin/./ffmpeg   "/usr/local/tomcat-proscenium/webapps/mxt/videos_MP4/videos/"+ serialName + ".mp4"
                    StringBuffer vstr = videoDao.executeCodecs(ffmpegpath, uploadFilepath, codcFilePath, videoPicPath);
                    CodesTable c =new CodesTable();
                    c.setCodeStrflv(vstr+"");
                    videoDao.addCodeStrFlv(c);
                    
                    //转码成功,向数据表中添加该视频信息
               	 videoDao.updateVCodeByName(video.getFilename());
               	 StringBuffer strMP4 = videoDao.executeCodecMP4(ffmpegpath, codcFilePath,MP4FilePath);
               	 CodesTablemp4 M =new CodesTablemp4();
                    M.setCodeStrmp4(strMP4+"");
                    videoDao.addCodeStrMP4(M);
                }
            }
           
                
            
      

    }
	    //上传视频的进度条
	    @RequestMapping(value = "/batchprocess", method = RequestMethod.GET)  
	    @ResponseBody
	    public Object batchprocess()  throws Exception {  
	   	 ProcessInfo p=new ProcessInfo();
	   	 p= (ProcessInfo)session.getAttribute("proInfo");
	   	 JSONObject json = JSONObject.fromObject(p);
	   	 System.out.println(json.toString());
	        return json.toString();
	    }
	    
	  //用来隐藏表头信息，传递filename和id
	    @RequestMapping("/batchmyloadFile")
	    public String myloadFile(Integer userid,Integer filesize) throws Exception{
	   	List<CounseTable> counses=videoDao.getCounseByUid(userid);
	    List<Chaptertable> chpters =videoDao.findChaptersById(Integer.valueOf(counses.get(0).getCoursedId()));
	   	request.setAttribute("counses", counses);
	   	request.setAttribute("chpters", chpters);
	   	//List<Video> videos =videoDao. 
	   	 return "forward:/editvideo.jsp";
	    }
    
     @ExceptionHandler(Exception.class)
     public String exception(Exception e,HttpServletRequest request)
     {
    	 e.printStackTrace();
  	   request.setAttribute("exception", e);
  	   return "/500";
     }
}
