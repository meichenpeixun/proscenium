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
@RequestMapping("/video")
public class VideoController extends BaseController {
	@Autowired
	@Qualifier("VideoDaoImpl")
	private VideoDao videoDao;
	
	
	/* PrintWriter out = response.getWriter();
     String message = "";*/
     
     /*String uri = request.getRequestURI();
     String path = uri.substring(uri.lastIndexOf("/"), uri.lastIndexOf("."));
     */
	 //视频信息编辑
     @RequestMapping("/uploadFile")
     public String uploadFile() throws Exception{
    	
    	 final HttpSession hs = request.getSession();  
    	
    	System.out.println("####"+request.getAttribute("title")); 
         //提供解析时的一些缺省配置
         DiskFileItemFactory factory = new DiskFileItemFactory();
         
         //创建一个解析器,分析InputStream,该解析器会将分析的结果封装成一个FileItem对象的集合
         //一个FileItem对象对应一个表单域
         ServletFileUpload sfu = new ServletFileUpload(factory);
          
         
             Video video = new Video();
             CounseTable counse = new CounseTable();
             Chaptertable chapter = new Chaptertable();
             List<FileItem> items = sfu.parseRequest(request);
             String counseImg =null;
             boolean flag = false;    //转码成功与否的标记
             System.out.println(items.size()+"***********");
             for(int i=0; i<items.size(); i++){
                 FileItem item = items.get(i);
                 //要区分是上传文件还是普通的表单域
                 if(item.isFormField()){//isFormField()为true,表示这不是文件上传表单域
                     	 //普通表单域
                	 	 String paramName = item.getFieldName();
                         String paramValue = item.getString();
                         System.out.println("参数名称为:" + paramName + ", 对应的参数值为: " + paramValue);
                     
                     if(paramName.equals("title")){
                         video.setTitle(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                         System.out.println(video.getFilename());
                     }
                     if(paramName.equals("filename")){
                         video.setFilename(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                     }
                     if(paramName.equals("userid")){
                    	 counse.setUserid(Integer.valueOf(item.getString()));
                         video.setUserid(Integer.valueOf(item.getString()));
                     }
                     if(paramName.equals("categorys")){
                         video.setCategorys(Integer.valueOf(item.getString()));
                     }
                     if(paramName.equals("descript")){
                         video.setDescript(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                         System.out.println(video.getDescript());
                     }
                     if(paramName.equals("tags")){
                         video.setTags(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                         System.out.println(video.getTags());
                     }
                     if(paramName.equals("coursename")){
                    	 String coursename ="";
                    	 System.out.println(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                    	 if(item.getString().contains("m-x-t")){
                    	 String[] str = item.getString().split("m-x-t");
                    	 coursename=str[0];
                    	 counse.setCoursedId(Integer.valueOf(str[1]));
                    	 chapter.setCouseId(Integer.valueOf(str[1]));
                    	 }else{
                    	 coursename =item.getString();
                    	 }
                    	 video.setCoursename(new String(coursename.getBytes("ISO8859-1"),"UTF-8"));
                    	 counse.setCouseTitle(new String(coursename.getBytes("ISO8859-1"),"UTF-8"));
                     }
                     if(paramName.equals("chapterName")){
                    	 
                    	 String chapterName ="";
                    	 if(item.getString().contains("m-x-t")){
                    	 String[] str = item.getString().split("m-x-t");
                    	 chapterName=str[0];
                    	 chapter.setChapterId(Integer.valueOf(str[1]));
                    	 video.setChapterId(Integer.valueOf(str[1]));
                    	 }else{
                    		 chapterName =item.getString();
                    	 }
                    	 chapter.setChapterName(new String(chapterName.getBytes("ISO8859-1"),"UTF-8"));
                     }
                     if(paramName.equals("funid")){
                         System.out.println(item.getString());
                     }
                     if(paramName.equals("video_props")){
                    	 video.setVtypes(Integer.parseInt(item.getString()));
                    	 System.out.println(Integer.parseInt(item.getString()));
                     }
                     if(paramName.equals("jd")){
                    	 counse.setLevel(Integer.parseInt(item.getString()));
                     }
                    
                     
                 }else{
                	 //字节图片信息
                	 String str = new String(item.getName().getBytes("gbk"),"utf-8");
                	 if("".equals(str)||str==null){
                     }else{
     					InputStream is = item.getInputStream();
    	 				byte[] arr = new byte[is.available()];
    	 				ServletContext sctx =session.getServletContext() ;
                        //获得保存文件的路径
                        String basePath = "/mnt/local/tomcat-proscenium/webapps/mxt/videos";//sctx.getRealPath("/videos");
                        String videoPicPath = basePath + "/images"; 
    	 				String fileName = new Date().getTime()+".jpg";
    	 				File file = new File(videoPicPath,fileName);
    	 				OutputStream os = new FileOutputStream(file);
    	 				is.read(arr);
    	 				os.write(arr);
    	 				os.flush();
    	 				os.close();
    	 				is.close();
                        video.setScreenshotpath("videos/images/"+fileName);	 
                        counseImg="videos/images/"+fileName;
                     }
 			
                 }
             }
             if(counse.getCoursedId()==0){
             	String date =DateTimeUtil.getStringDate(new Date(), 2);
             	counse.setCreateTime(DateTimeUtil.getDate(date, "yyyy/MM/dd HH:mm:ss"));
             	counse.setCouseCoverPath(counseImg);
             	videoDao.addCounse(counse);
             	chapter.setCouseId(videoDao.findCouIdTime(counse));
             	System.out.println(chapter.getChapterName()+"#$#"+chapter.getCouseId());
             	videoDao.addChapter(chapter);
             	System.out.println("IID"+videoDao.findChaoterId(chapter));
             	video.setChapterId(videoDao.findChaoterId(chapter));
             	System.out.println(video.getChapterId());
             }else{
             	if(chapter.getChapterId()==0){
             	videoDao.addChapter(chapter);	
             	video.setChapterId(videoDao.findChaoterId(chapter));
             	}
             	//更新课程等级level
             	videoDao.updateCounse(counse);
             }
            if(video.getScreenshotpath()==null||""==video.getScreenshotpath()){
            	System.out.println(video.getVtypes());
            	videoDao.updateVideo2(video);
            }else{
                 videoDao.updateVideo(video);
                 /*response.getWriter().write("上传成功!");
      		     response.getWriter().flush();*/
            }
            
          
            request.setAttribute("msg", "ok");  
            request.setAttribute("userid", video.getUserid());
            request.setAttribute("audit", 10);
			 return "forward:/per_cen/up_zsplb.do";
     }
    //取消上传
     @RequestMapping("/deletevideo")
     public String deletevideo() throws Exception{
    	 System.out.println("###userid##"+request.getParameter("userid")+"###filename##"+request.getParameter("filename"));
    	 videoDao.deletevideo(Integer.valueOf(request.getParameter("userid")),request.getParameter("filename"));
    	 return "/upload.jsp";
     }
     
     //用来隐藏表头信息，传递filename和id
     @RequestMapping("/myloadFile")
     public String myloadFile(Integer userid) throws Exception{
    	List<Funs> funs = videoDao.getAllFuns();
    	List<Menus> menus=videoDao.getAllMenus();
    	List<CounseTable> counses=videoDao.getCounseByUid(userid);
    	request.setAttribute("menus", menus);
    	request.setAttribute("funs", funs);
    	request.setAttribute("counses", counses);
    	 return "forward:/editvideo.jsp";
     }
     //上传视频和视频的转码
     @RequestMapping("/preloadFile")
     public String preloadFile() throws Exception{

    	 final HttpSession hs = request.getSession();  
    	
         //提供解析时的一些缺省配置
         DiskFileItemFactory factory = new DiskFileItemFactory();
         
         //创建一个解析器,分析InputStream,该解析器会将分析的结果封装成一个FileItem对象的集合
         //一个FileItem对象对应一个表单域
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
             String ffmpegpath="/usr/local/ffmpeg/bin/./ffmpeg" ;// session.getServletContext().getRealPath("/tools/ffmpeg.exe")   //转码工具路径
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
                     String basePath ="/mnt/local/tomcat-proscenium/webapps/mxt/videos";            //sctx.getRealPath("/videos");
                     //获得文件名
                     String fileUrl= item.getName();
                     //在某些操作系统上,item.getName()方法会返回文件的完整名称,即包括路径
                     String fileType = fileUrl.substring(fileUrl.lastIndexOf(".")); //截取文件格式
                     //自定义方式产生文件名
                     String serialName = String.valueOf(System.currentTimeMillis());
                     //待转码的文件
                     File uploadFile = new File(basePath+"/temp/"+serialName + fileType);
                     if(item.getSize()>1526*1024*1024){
                    	 response.setContentType("text/html;charset=UTF-8");
                    	 response.getWriter().write("上传失败！您上传的文件太大,系统允许最大文件500M");
                    	 response.getWriter().flush();
                    	 response.getWriter().close();
                     }
                     item.write(uploadFile);
                     codcFilePath = basePath+"/" + serialName + ".flv";    //设置转换为flv格式后文件的保存路径
                     System.out.println("文件保存路径："+codcFilePath);
                     videoPicPath = basePath + "/images" +File.separator+ serialName + ".jpg";    //设置上传视频截图的保存路径
                     //String mp4Path = basePath+"/videos_MP4/" + serialName + ".mp4";    //设置转换为flv格式后文件的保存路径
                     MP4FilePath="/mnt/local/tomcat-proscenium/webapps/mxt/videos_MP4/videos/"+ serialName + ".mp4";
                     System.out.println("mp4文件保存路径："+MP4FilePath);
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
            
                 
             
       

         

    	 return "";
     }
     //首页推荐视频查询
     @RequestMapping(value = "/queryAll", method = RequestMethod.GET)  
     @ResponseBody
     public Object queryAll() throws Exception{
         System.out.println("kais");
    	 List<Video> videos = videoDao.queryALlVideo(0,8);
    	 System.out.println("jieshu");
    	 JSONArray json = JSONArray.fromObject(videos);
    	 response.setContentType("text/html;charset=UTF-8"); 
    	 response.getWriter().print(json.toString());
    	 response.getWriter().flush();
    	 response.getWriter().close();
         return null;
     }
    //首页推荐课程
     @RequestMapping(value = "/queryAllCounse", method = RequestMethod.GET)  
     @ResponseBody
     public Object queryAllCounse(int COLUMNID) throws Exception{
         System.out.println("kais");
    	 List<CounseTable> Counses = videoDao.queryALlVideoCounse(0,8);// List<CounseTable> Counses = videoDao.queryALlVideoCounse(0,8,COLUMNID);
    	 /*for(int i=0;i<Counses.size();i++){
    		  int allvideoClick=0;
    	      List<Chaptertable> chap =videoDao.findChaptersById(Counses.get(i).getCoursedId());
	    	      	for(int j =0;j<chap.size();j++){
	    	      		int chapClick =0;
	    	      		List<Video> videos= videoDao.getVideosBychapterId(chap.get(j).getChapterId());
		    	      			for(int k=0;k<videos.size();k++){
		    	      				chapClick+=videos.get(k).getClicknumber();
		    	      			}
	    	      	 allvideoClick+=chapClick;
	    	      	}
	    	      Counses.get(i).setClickNum(allvideoClick);	
    	    }*/
    	 System.out.println("jieshu");
    	 JSONArray json = JSONArray.fromObject(Counses);
    	 response.setContentType("text/html;charset=UTF-8"); 
    	 response.getWriter().print(json.toString());
    	 response.getWriter().flush();
    	 response.getWriter().close();
         return null;
     }
     //统计播放量
     @RequestMapping("/playtime")
     public String playtime() throws Exception{ 
         String timeSpent = request.getParameter("timeSpent");
         //如果播放时间大于一分钟
         if(Integer.valueOf(timeSpent)>=60000){
        	     //获取访问真实IP  拼接访问记录的字符串
		         String videoid = request.getParameter("videoid");
		         String ip = request.getHeader("x-forwarded-for");
		         if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)){
		             ip = request.getHeader("Proxy-Client-IP");
		         }
		         if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)){
		             ip = request.getHeader("WL-Proxy-Client-IP");
		         }
		         if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)){
		             ip = request.getRemoteAddr();
		         }
		         ip =ip.equals("0:0:0:0:0:0:0:1")?"127.0.0.1":ip;
		         
		         //读取配置文件信息，其中配置文件为Properties 
		        /* InputStream propertiesUrl = this.getClass().getClassLoader().getResourceAsStream("playtime.properties");
		         System.out.println(propertiesUrl);
		         InputStream in = request.getServletContext().getResourceAsStream("playtime.properties");
		         Properties pro = new Properties();  
		         pro.load(in);  */
		         Properties pro = new Properties();//p 操作properties文件的对象
		         //通过i/o流的方式来加载properties文件
		         ///mxt/WebRoot/playtime.properties
		         pro.load(new FileReader("//usr//local//tomcat-proscenium//webapps//mxt//playtime.properties"));
		        
		         //获取当天 天的时间毫秒数 
		         URL url=new URL("http://www.bjtime.cn");//取得资源对象
		         URLConnection uc=url.openConnection();//生成连接对象
		         uc.connect(); //发出连接
		         long ld=uc.getDate(); //取得网站日期时间
		         Date realdate=new Date(ld); //转换为标准时间对象
		         String dateStr = DateTimeUtil.getStringDate(realdate, 1);
		         SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
		     	 Date date = sdf.parse(dateStr);
		     	 System.out.println(date.getTime());
		     	 
		     	 //查询是否当天有效播放过
		         String userplay = videoid+"*"+ip+"*"+date.getTime();
		         String playstr = pro.getProperty(videoid);
		         System.out.println("playstr:"+playstr);
		         System.out.println("userplay:"+userplay);
		         //如果为空则证明这个视频没有被播放过
		         System.out.println(playstr);
		         if(playstr==null){
		        	pro.setProperty(videoid,userplay+"|");
		        	//  F:\\myWork7\\tomcat8\\webapps\\mxt\\playtime.properties
		        	FileWriter fw = new FileWriter("//usr//local//tomcat-proscenium//webapps//mxt//playtime.properties");
		        	pro.store(fw, "playrecords");    //key-value：对属性文件的描述
		        	fw.close();
		        	//播放量加1
	        		videoDao.updatePlaynum(Integer.parseInt(videoid));
		         //这个视频被播放过
		         }else{
		        	 //如果videoid的value里不包含这条记录播放+1 并将这条数据写到记录表里
		        	 if(!playstr.contains(userplay)){
		        		  pro.setProperty(videoid,playstr+userplay+"|"); 
			        	  FileWriter fw = new FileWriter("//usr//local//tomcat-proscenium//webapps//mxt//playtime.properties");
				          pro.store(fw, "playrecords");    //key-value：对属性文件的描述
				          fw.close();
		        		 //播放量加1
		        		 videoDao.updatePlaynum(Integer.parseInt(videoid));
		        	 }
		         }
         }else{
        	 
         }
         System.out.println("#timeSpent:"+timeSpent);
         return null;
     }
     //播放视频
     @RequestMapping("/play")
     public String play() throws Exception{ 
         String idstr = request.getParameter("id");
         System.out.println("#id:"+idstr);
         int videoId = -1;
         Video video = null;
         List<Video> videos=new ArrayList<Video>();
         if(null!=idstr){
             videoId = Integer.parseInt(idstr);
         }
         video = videoDao.queryVideoById(videoId);
         System.out.println(video.getCoursename()+video.getUserid());
         System.out.println(video!=null&&video.getCoursename()!=null);
         if(video!=null&&video.getCoursename()!=null){
        	 videos = videoDao.findVideosByCourse(video.getCoursename(),video.getUserid()); 
         }
         System.out.println("&&"+videos.size()+"&&");
         System.out.println("**"+video.toString()+"**");
         request.setAttribute("videos", videos);
         request.setAttribute("video", video);
         /*request.getRequestDispatcher("video_player.jsp").forward(request, response);*/
         return "forward:/video_play.jsp";
     }
     
   //播放视频
     @RequestMapping("/playV")
     public String playV(Integer videoid, Integer counseId) throws Exception{ 
    	 videoDao.updateClicknum(videoid);
         Video video = null;
         video = videoDao.queryVideoById(videoid);
         CounseTable counse =videoDao.findCounseBycounseId(counseId);
         List<Video> videos=new ArrayList<Video>();
         List<Chaptertable> chapters = videoDao.findChaptersById(counseId);
         
         for(int i =0;i<chapters.size();i++){
        	 List<Video> vs = videoDao.getVideosBychapterId(chapters.get(i).getChapterId()); 
        	 	for(int j=0;j<vs.size();j++){
        	 		videos.add(vs.get(j));
        	 	}
         }
         request.setAttribute("counse",counse);
         request.setAttribute("video", video);
         request.setAttribute("chapters", chapters);
         request.setAttribute("videos", videos);
         /*request.getRequestDispatcher("video_player.jsp").forward(request, response);*/
         return "forward:/video_play.jsp";
     }
     
     //上传视频的进度条
     @RequestMapping(value = "/process", method = RequestMethod.GET)  
     @ResponseBody
     public Object process()  throws Exception {  
    	 ProcessInfo p=new ProcessInfo();
    	 p= (ProcessInfo)session.getAttribute("proInfo");
    	 JSONObject json = JSONObject.fromObject(p);
    	 System.out.println(json.toString());
         return json.toString();
     }
     //查询菜单
     @RequestMapping("/head_pub")
     public String head_pub()  throws Exception {  
    	 String menuid =(String) request.getParameter("menuid");
    	 String columnid = (String) request.getParameter("columnid");
    	 String funid = (String) request.getParameter("funid");
    		 
    	 if(funid!=null &&columnid!=null){
	   	      funid = (String) request.getParameter("funid");
	   	      menuid = videoDao.getMenuIDByFunID(Integer.valueOf(funid));
	   	      request.setAttribute("menuid", menuid);
    	 }
    	     
    	 
    	 
    	 
         return "forward:/pub_course.jsp";
     }  
     
     @RequestMapping(value = "/findColumnsById", method = RequestMethod.POST )  
     @ResponseBody
     public Object findColumnsById(Integer funid)  throws Exception {
    	 List<Columns> columns =videoDao.findColumnsById(funid);
    	 JSONArray json = JSONArray.fromObject(columns);
    	 response.setContentType("text/html;charset=UTF-8"); 
    	 response.getWriter().print(json.toString());
    	 response.getWriter().flush();
    	 response.getWriter().close();
    	 return null;
     }  
     @RequestMapping(value = "/findChapterById", method = RequestMethod.POST )  
     @ResponseBody
     public Object findChapterById(Integer counseId)  throws Exception {
    	 List<Chaptertable> chapters =videoDao.findChaptersById(counseId);
    	 JSONArray json = JSONArray.fromObject(chapters);
    	 response.setContentType("text/html;charset=UTF-8"); 
    	 response.getWriter().print(json.toString());
    	 response.getWriter().flush();
    	 response.getWriter().close();
    	 return null;
     }  
     @RequestMapping(value = "/delCouAndChaById", method = RequestMethod.POST )  
     @ResponseBody
     public Object delCouAndChaById(Integer counseId)  throws Exception {
    	 videoDao.delCouseById(counseId);
    	 videoDao.delChapterById(counseId);
    	 return null;
     } 
     @RequestMapping(value = "/delChaById", method = RequestMethod.POST )  
     @ResponseBody
     public Object delChaById(Integer chapterId)  throws Exception {
    	 videoDao.delChapterByChapId(chapterId);
    	 return null;
     } 
     @RequestMapping(value = "/findMenus", method = RequestMethod.POST )  
     @ResponseBody
     public Object findMenus()  throws Exception {
    	 List<Menus> menus =videoDao.getAllMenus();
    	 JSONArray json = JSONArray.fromObject(menus);
    	 response.setContentType("text/html;charset=UTF-8"); 
    	 response.getWriter().print(json.toString());
    	 response.getWriter().flush();
    	 response.getWriter().close();
    	 return null;
     }  
     @RequestMapping(value = "/findFuns", method = RequestMethod.POST )  
     @ResponseBody
     public Object findFuns()  throws Exception {
    	 List<Funs> funs =videoDao.getAllFuns();
    	 JSONArray json = JSONArray.fromObject(funs);
    	 response.setContentType("text/html;charset=UTF-8"); 
    	 response.getWriter().print(json.toString());
    	 response.getWriter().flush();
    	 response.getWriter().close();
    	 return null;
     }
     @RequestMapping(value = "/findColumns", method = RequestMethod.POST )  
     @ResponseBody
     public Object findColumns()  throws Exception {
    	 List<Columns> columns =videoDao.getAllColumns();
    	 JSONArray json = JSONArray.fromObject(columns);
    	 response.setContentType("text/html;charset=UTF-8"); 
    	 response.getWriter().print(json.toString());
    	 response.getWriter().flush();
    	 response.getWriter().close();
    	 return null;
     }  
/*     @RequestMapping(value = "/findViByCoId", method = RequestMethod.POST )  
     public ModelAndView  findViByCoId(Integer columnid,String page)  throws Exception {
    	 ModelAndView mav=new ModelAndView();
    	 if(page != null && page != ""){
    		 mav.addObject("page", page);
 		}else {
 			page = "1";
 		}
    	 System.out.println("page:"+page);
    	 int pageSize = 20;
    	 int maxPage = 0;
    	 Integer begin =(Integer.valueOf(page) - 1)*pageSize;
    	 List<Video> videos = new ArrayList<Video>();
    	 videos = videoDao.getVByCidandPage(columnid,begin,pageSize);
    	 int counts = videoDao.getCountsToCid(columnid);
	 	 if(counts%pageSize == 0){
	 		 maxPage = counts/pageSize;
	 	 }else {
	 		 maxPage = counts/pageSize+1;
	 	 }
	 	 if(videos==null || videos.size()==0){
	 		 mav.addObject("msg", "对不起,暂无此类视频!"); 
	 	 }else{
	 		 mav.addObject("columnid", columnid);
	    	 mav.addObject("videos", videos);
	    	 mav.addObject("page", page);
	    	 mav.addObject("maxPage", maxPage);
	    	 mav.addObject("counts", counts); 
	 	 }
	 	
    	 mav.setViewName("/part_pub");
    	 System.out.println("%%columnid:%"+columnid+"%%");
    	return mav;
     }  */
     
     @RequestMapping(value = "/findCounseByCoId", method = RequestMethod.POST )  
     public ModelAndView  findCounseByCoId(Integer columnid,String page)  throws Exception {
    	 ModelAndView mav=new ModelAndView();
    	 if(page != null && page != ""){
    		 mav.addObject("page", page);
 		}else {
 			page = "1";
 		}
    	 System.out.println("page:"+page);
    	 int pageSize = 20;
    	 int maxPage = 0;
    	 Integer begin =(Integer.valueOf(page) - 1)*pageSize;
    	 List<CounseTable> counses = new ArrayList<CounseTable>();
    	 counses = videoDao.getCounsesByCidandPage(columnid,begin,pageSize);
    	 int counts = videoDao.getCoursesCountsToCid(columnid);
	 	 if(counts%pageSize == 0){
	 		 maxPage = counts/pageSize;
	 	 }else {
	 		 maxPage = counts/pageSize+1;
	 	 }
	 	 if(counses==null || counses.size()==0){
	 		 mav.addObject("msg", "对不起,暂无此类课程!"); 
	 	 }else{
	 		 
	 		 for(int i=0;i<counses.size();i++){
	    		  int allvideoClick=0;
	    	  if(counses.get(i)!=null){
	    	      List<Chaptertable> chap =videoDao.findChaptersById(counses.get(i).getCoursedId());
		    	      	for(int j =0;j<chap.size();j++){
		    	      		int chapClick =0;
		    	      		if(chap.get(j)!=null){
		    	      		List<Video> videos= videoDao.getVideosBychapterId(chap.get(j).getChapterId());
			    	      			for(int k=0;k<videos.size();k++){
			    	      				chapClick+=videos.get(k).getClicknumber();
			    	      			}
		    	      	 allvideoClick+=chapClick;
		    	      		}
		    	      	}
		    	      	counses.get(i).setClickNum(allvideoClick);	
	    		} 
	    	 }
	 		 
	 		 mav.addObject("columnid", columnid);
	    	 mav.addObject("counses", counses);
	    	 mav.addObject("page", page);
	    	 mav.addObject("maxPage", maxPage);
	    	 mav.addObject("counts", counts); 
	 	 }
	 	
	 	 
    	 mav.setViewName("/part_pub");
    	 System.out.println("%%columnid:%"+columnid+"%%");
    	return mav;
     }  
     
     @RequestMapping("/clicknum")  
     public void  clicknum(int counseid)  throws Exception {
    	 int allvideoClick=0;
   	  if(counseid!=0){
   	      List<Chaptertable> chap =videoDao.findChaptersById(counseid);
	    	      	for(int j =0;j<chap.size();j++){
	    	      		int chapClick =0;
	    	      		if(chap.get(j)!=null){
	    	      		List<Video> videos= videoDao.getVideosBychapterId(chap.get(j).getChapterId());
		    	      			for(int k=0;k<videos.size();k++){
		    	      				chapClick+=videos.get(k).getClicknumber();
		    	      			}
	    	      	 allvideoClick+=chapClick;
	    	      		}
	    	      	}
   		} 
   	   response.getWriter().print("点击量："+allvideoClick);
	   response.getWriter().flush();
	   response.getWriter().close();
     }
     //tocou 进入课时页
     @RequestMapping("/tocou")
     public String tocou(int counseId) throws Exception{ 
         CounseTable counse =  videoDao.findCounseBycounseId(counseId);
         List<Chaptertable> chapters =videoDao.findChaptersById(counseId);
         List<Video> videos =new ArrayList<Video>();
         int allvideoClick=0;
   	      	for(int j =0;j<chapters.size();j++){
   	      		int chapClick =0;
   	      	List<Video> vs= videoDao.getVideosBychapterId(chapters.get(j).getChapterId());
	    	      			for(int k=0;k<vs.size();k++){
	    	      				chapClick+=vs.get(k).getClicknumber();
	    	      				videos.add(vs.get(k));
	    	      			 }
   	      	 allvideoClick+=chapClick;
   	      	}
   	     Columns columns  = new Columns();
   	      Funs fun =new Funs();
   	      if(counse!=null){
   	             columns = videoDao.getcolumnBycolumnId(counse.getCOLUMNID());
		   	     if(columns!=null){
		   	      fun =videoDao.getfunByFunId(columns.getFunid());
		   	     }
   	     }
         request.setAttribute("counse", counse);
         request.setAttribute("chapters", chapters);
         request.setAttribute("videos", videos);
         request.setAttribute("videocount", videos.size());
   	     request.setAttribute("allvideoClick", allvideoClick);
   	     request.setAttribute("fun", fun);
   	     request.setAttribute("columns", columns);
         /*request.getRequestDispatcher("video_player.jsp").forward(request, response);*/
         return "forward:/course.jsp";
     }
   //ajax删除单个视频
	 @RequestMapping(value = "/addCommonts", method = RequestMethod.POST )
	public ModelAndView addCommonts(Integer videoid,Integer userid) throws IOException{
		   	ModelAndView mav=new ModelAndView();
		   	mav.addObject("ss", 2);
	    	return mav;
		   
	  
		}
     
     @ExceptionHandler(Exception.class)
     public String exception(Exception e,HttpServletRequest request)
     {
    	 e.printStackTrace();
  	   request.setAttribute("exception", e);
  	   return "/500";
     }
}
