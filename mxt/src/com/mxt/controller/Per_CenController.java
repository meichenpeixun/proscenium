package com.mxt.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.mxt.biz.CenBiz;
import com.mxt.dao.VideoDao;
import com.mxt.entity.Chaptertable;
import com.mxt.entity.CounseTable;
import com.mxt.entity.Funs;
import com.mxt.entity.Menus;
import com.mxt.entity.User;
import com.mxt.entity.Video;
import com.mxt.util.DateTimeUtil;
import com.mxt.util.Md5Util;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：Aug 8, 2016 10:28:18 AM
 */
@Controller
@RequestMapping("/per_cen")//个人中心
public class Per_CenController extends BaseController {
	@Autowired
	@Qualifier("CenBizImpl")
	private CenBiz<?> CenBiz;
	    
		//全部视频
		@RequestMapping("/up_zsplb")
		public String up_zsplb(Integer userid,Integer audit) throws Exception{
			
			 User user=(User)request.getSession().getAttribute("user");
			 if(userid==null||userid==0){
				 userid=Integer.valueOf(request.getAttribute("userid")+"");
				 audit =10;
			 }
			 System.out.println("uuuus:"+userid+"audit:"+audit);
			 
			   String restr="forward:/";
			   System.out.println("userid!=null&&userid==user.getUserid():"+userid!=null);
	    if(userid!=null&&userid==Integer.valueOf(user.getUserid())){
	        List<Video> videos = new ArrayList<Video>();
	        System.out.println("userid##:"+userid);
	        videos = CenBiz.getVideo(userid,Integer.parseInt("0"),Integer.parseInt("4"),audit);
	         request.setAttribute("userid", userid);
	 		 String	page = "1";
	 		
	    	 int pageSize = 4;
	    	 int maxPage = 0;
	    	 //查找用户已上传全部视频
	    	 int counts10 = CenBiz.getCountsToUid(userid,Integer.parseInt("10"));
	    	 int counts1 = CenBiz.getCountsToUid(userid,Integer.parseInt("1"));
	    	 int counts26 = CenBiz.getCountsToUid(userid,Integer.parseInt("26"));
	    	 int counts0 = CenBiz.getCountsToUid(userid,Integer.parseInt("0"));
	    	 int counts11 = CenBiz.getCountsToUid(userid,Integer.parseInt("11"));
	    	 int i[]={counts10,counts1,counts26,counts0,counts11};
	    	 request.getSession().setAttribute("count_videos", i);
	    	 if(counts10%pageSize == 0){
		 		 maxPage = counts10/pageSize;
		 	 }else {
		 		 maxPage = counts10/pageSize+1;
		 	 }
		 	 if(videos==null || videos.size()==0){
		 		request.setAttribute("msg", "对不起,您尚未上传视频!"); 
		 	 }else{
		 		request.setAttribute("videos", videos);
		 		request.setAttribute("page", page);
		 		request.setAttribute("maxPage", maxPage);
		 	 }
		 	 String msg =(String) request.getAttribute("msg");
		 	 System.out.println("msg:"+msg);
		     restr="forward:/WEB-INF/up_page/up_zsplb.jsp";
			  }
			return restr;
		}
		 //我的视频
		@RequestMapping("/up_cg")
		public String up_cg() throws Exception{
			Integer userid = Integer.valueOf(request.getParameter("userid"));
			Integer audit = Integer.valueOf(request.getParameter("audit"));
	        List<Video> videos = new ArrayList<Video>();
	        videos = CenBiz.getVideo(userid,Integer.parseInt("0"),Integer.parseInt("4"),audit);
	         request.setAttribute("userid", userid);
	 		 String	page = "1";
	 		
	    	 int pageSize = 4;
	    	 int maxPage = 0;
	    	 int counts = CenBiz.getCountsToUid(userid,audit);
		 	 if(counts%pageSize == 0){
		 		 maxPage = counts/pageSize;
		 	 }else {
		 		 maxPage = counts/pageSize+1;
		 	 }
		 	 if(videos==null || videos.size()==0){
		 		request.setAttribute("msg", "对不起,暂无此类视频!"); 
		 	 }else{
		 		request.setAttribute("videos", videos);
		 		request.setAttribute("page", page);
		 		request.setAttribute("maxPage", maxPage);
		 		request.setAttribute("counts", counts); 
		 	 }
		
	        
			return "forward:/WEB-INF/up_page/up_cg.jsp";
		}
		
	   
		//未完成视频
		@RequestMapping("/up_sb")
		public String up_sb() throws Exception{

			return "forward:/WEB-INF/up_page/up_sb.jsp";
		}
		//未审核视频
		@RequestMapping("/up_shz")
		public String up_shz() throws Exception{

			return "forward:/WEB-INF/up_page/up_shz.jsp";
		}
		//我的课程
		@RequestMapping(value = "/up_kcj", method = RequestMethod.POST )
		public ModelAndView up_kcj(Integer userid,String page) throws IOException{
				 ModelAndView mav =new ModelAndView();
				 if(page != null && page != ""){
		    		 mav.addObject("page", page);
		 		}else {
		 			page = "1";
		 		}
		    	 System.out.println("page:"+page);
		    	 int pageSize = 5;
		    	 int maxPage = 0;
		    	 Integer begin =(Integer.valueOf(page) - 1)*pageSize;
				 int CounseCounts = CenBiz.getCounseCountsByUid(userid);
				 if(CounseCounts%pageSize == 0){
					 maxPage = CounseCounts/pageSize;
				 }else {
					 maxPage = CounseCounts/pageSize+1;
				 }
				 List<CounseTable> counses=CenBiz.getCounseByUid(userid,begin,pageSize);
				 System.out.println("userid:"+userid+"begin:"+begin+"pageSize:"+pageSize);
		    	 mav.addObject("counses", counses); 
				 mav.addObject("userid", userid);
				 mav.addObject("page", page);
		    	 mav.addObject("maxPage", maxPage);
		    	 mav.addObject("counts", CounseCounts); 
				 mav.setViewName("/part_kcj");
				 System.out.println("page:"+page+"maxPage:"+maxPage+"counts:"+CounseCounts+"counses:"+counses.size());
				 return mav;
		}
		//创建课程
			 @RequestMapping(value = "/up_xjkc", method = RequestMethod.POST )
		public ModelAndView up_xjkc(Integer userid) throws Exception{
			 ModelAndView mav =new ModelAndView();
			 mav.addObject("userid", userid);
			 List<Menus> menus =CenBiz.getAllMenus();
			 List<Funs> funs =CenBiz.getAllFuns();
			 mav.addObject("menus", menus); 
			 mav.addObject("funs", funs);
			 mav.setViewName("/part_xjkc");
			return mav;
		}
		//修改课程
		 @RequestMapping(value = "/editkc", method = RequestMethod.POST )
		public ModelAndView editkc(Integer userid,Integer coursedId) throws Exception{
			 ModelAndView mav =new ModelAndView();
			 List<Chaptertable> Chaptertables = CenBiz.getChaptersBycoursedId(coursedId);
			 CounseTable counse = new CounseTable();
			 counse=CenBiz.getCounseBycoursedId(coursedId);
			 mav.addObject("userid", userid);
			 List<Menus> menus =CenBiz.getAllMenus();
			 List<Funs> funs =CenBiz.getAllFuns();
			 mav.addObject("coursedId", coursedId); 
			 mav.addObject("counse", counse); 
			 mav.addObject("menus", menus); 
			 mav.addObject("Chaptertables",Chaptertables);
			 mav.addObject("funs", funs);
			 mav.setViewName("/part_editkc");
			return mav;
		}	 
		//修改课程
		 @RequestMapping(value = "/bc_editkc", method = RequestMethod.POST )
		public String bc_editkc() throws Exception{
			 CounseTable counse = new CounseTable();
             String chapterNames =null;
			//提供解析时的一些缺省配置
	         DiskFileItemFactory factory = new DiskFileItemFactory();
	         
	         //创建一个解析器,分析InputStream,该解析器会将分析的结果封装成一个FileItem对象的集合
	         //一个FileItem对象对应一个表单域
	         ServletFileUpload sfu = new ServletFileUpload(factory);
             List<FileItem> items = sfu.parseRequest(request);
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
                     
                         if(paramName.equals("kc_title")){
                             //video.setTitle(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                        	 counse.setCouseTitle(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                         }
                         if(paramName.equals("dj")){
                        	 counse.setLevel(Integer.parseInt(item.getString()));
                         }
                         if(paramName.equals("userid")){
                        	 counse.setUserid(Integer.valueOf(item.getString()));
                         }
                         if(paramName.equals("coursedId")){
                        	 counse.setCoursedId(Integer.valueOf(item.getString()));
                         }
                         if(paramName.equals("kc_tags")){
                        	 counse.setCouseTag(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                         }
                         if(paramName.equals("categorys")){
                        	 counse.setCOLUMNID(Integer.valueOf(item.getString()));
                         }
                         if(paramName.equals("kc_descript")){
                        	 counse.setCouseDes(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                         }
                        /* if(paramName.equals("chapterName")){
                        	 chapter.setChapterName(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                         }*/
                         if(paramName.equals("chapterNames")){
                        	 chapterNames=new String(item.getString().getBytes("ISO8859-1"),"UTF-8");
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
                        String basePath ="/mnt/local/tomcat-proscenium/webapps/mxt/videos";  // sctx.getRealPath("/videos");
                        String videoPicPath = basePath + "/images/counrseIMG"; 
    	 				String fileName = new Date().getTime()+".jpg";
    	 				File file = new File(videoPicPath,fileName);
    	 				OutputStream os = new FileOutputStream(file);
    	 				is.read(arr);
    	 				os.write(arr);
    	 				os.flush();
    	 				os.close();
    	 				is.close();
    	 				counse.setCouseCoverPath("videos/images/counrseIMG/"+fileName);	 
                     }
 			
                 }
             }	 
			 	//操作到数据库
	           	CenBiz.updateCounse(counse);
	           	System.out.println(counse.getUpdateTime());
              	/*if(chapter.getChapterName()!=null&&chapter.getChapterName()!=""){
              	chapter.setCouseId(counse.getCoursedId());
              	CenBiz.addChapter(chapter);
              	}*/
              	if(chapterNames!=null&&chapterNames!=""){
              		String[] str =chapterNames.split("#");
              		Chaptertable chapter = new Chaptertable();
              		for(int i=1;i<str.length;i++){
              			chapter.setCouseId(counse.getCoursedId());
              			chapter.setChapterName(str[i]);
              			CenBiz.addChapter(chapter);
              		}
              	}
		 
		         String page ="1";
		         //创建完成跳转到课程页
		         if(page != null && page != ""){
		        	 request.setAttribute("page", page);
		 		}else {
		 			page = "1";
		 		}
		    	 System.out.println("page:"+page);
		    	 int pageSize = 5;
		    	 int maxPage = 0;
		    	 Integer begin =(Integer.valueOf(page) - 1)*pageSize;
				 int CounseCounts = CenBiz.getCounseCountsByUid(counse.getUserid());
				 if(CounseCounts%pageSize == 0){
					 maxPage = CounseCounts/pageSize;
				 }else {
					 maxPage = CounseCounts/pageSize+1;
				 }
				 List<CounseTable> counses=CenBiz.getCounseByUid(counse.getUserid(),begin,pageSize);
				 request.setAttribute("counses", counses); 
				 request.setAttribute("userid", counse.getUserid());
				 request.setAttribute("page", page);
				 request.setAttribute("maxPage", maxPage);
				 request.setAttribute("counts", CounseCounts); 
				return "forward:/WEB-INF/up_page/up_kcgl.jsp";
		}	 
		 
	    //保存创建课程
	    @RequestMapping(value = "/bc_xjkc", method = RequestMethod.POST )
		public String bc_xjkc() throws Exception{
			 
				 
				 CounseTable counse = new CounseTable();
				 String chapterNames =null;
				//提供解析时的一些缺省配置
		         DiskFileItemFactory factory = new DiskFileItemFactory();
		         
		         //创建一个解析器,分析InputStream,该解析器会将分析的结果封装成一个FileItem对象的集合
		         //一个FileItem对象对应一个表单域
		         ServletFileUpload sfu = new ServletFileUpload(factory);
	             List<FileItem> items = sfu.parseRequest(request);
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
	                     
	                         if(paramName.equals("kc_title")){
	                             //video.setTitle(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
	                        	 counse.setCouseTitle(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
	                         }
	                         if(paramName.equals("dj")){
	                        	 counse.setLevel(Integer.parseInt(item.getString()));
	                         }
	                         if(paramName.equals("userid")){
	                        	 counse.setUserid(Integer.valueOf(item.getString()));
	                         }
	                         if(paramName.equals("kc_tags")){
	                        	 counse.setCouseTag(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
	                         }
	                         if(paramName.equals("categorys")){
	                        	 counse.setCOLUMNID(Integer.valueOf(item.getString()));
	                         }
	                         if(paramName.equals("kc_descript")){
	                        	 counse.setCouseDes(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
	                         }
	                        /* if(paramName.equals("chapterName")){
	                        	 chapter.setChapterName(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
	                         }*/
	                         if(paramName.equals("chapterNames")){
	                        	 chapterNames=new String(item.getString().getBytes("ISO8859-1"),"UTF-8");
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
	                        String basePath = "/mnt/local/tomcat-proscenium/webapps/mxt/videos";// sctx.getRealPath("/videos");
	                        String videoPicPath = basePath + "/images/counrseIMG"; 
	    	 				String fileName = new Date().getTime()+".jpg";
	    	 				File file = new File(videoPicPath,fileName);
	    	 				OutputStream os = new FileOutputStream(file);
	    	 				is.read(arr);
	    	 				os.write(arr);
	    	 				os.flush();
	    	 				os.close();
	    	 				is.close();
	    	 				counse.setCouseCoverPath("videos/images/counrseIMG/"+fileName);	 
	                     }
	 			
	                 }
	             }	 
	             
	             //做课程名唯一性判断
	             CounseTable coun =new CounseTable();
	             coun =CenBiz.getCounseByCounse(counse);
	             if(coun==null){
	              	CenBiz.addCounse(counse);
	              	int couseId =CenBiz.findCouIdTime(counse);
	              	/*chapter.setCouseId(CenBiz.findCouIdTime(counse));
	              	CenBiz.addChapter(chapter);*/
	              	if(chapterNames!=null&&chapterNames!=""){
	              		String[] str =chapterNames.split("#");
	              		Chaptertable chapter = new Chaptertable();
	              		for(int i=1;i<str.length;i++){
	              			chapter.setCouseId(couseId);
	              			chapter.setChapterName(str[i]);
	              			CenBiz.addChapter(chapter);
	              		}
	              	}
	             }
			 request.setAttribute("counse", counse); 
			return "forward:/per_cen/bc_xjkc_temp.do";
		}
	    //多一步跳转 防止表单重复提交
	    @RequestMapping(value = "/bc_xjkc_temp", method = RequestMethod.POST )
		public String bc_xjkc_temp() throws Exception{
	    	CounseTable counse =(CounseTable) request.getAttribute("counse");
	    	String page ="1";
	         //创建完成跳转到课程页
	         if(page != null && page != ""){
	        	 request.setAttribute("page", page);
	 		}else {
	 			page = "1";
	 		}
	    	 System.out.println("page:"+page);
	    	 int pageSize = 5;
	    	 int maxPage = 0;
	    	 Integer begin =(Integer.valueOf(page) - 1)*pageSize;
			 int CounseCounts = CenBiz.getCounseCountsByUid(counse.getUserid());
			 if(CounseCounts%pageSize == 0){
				 maxPage = CounseCounts/pageSize;
			 }else {
				 maxPage = CounseCounts/pageSize+1;
			 }
			 List<CounseTable> counses=CenBiz.getCounseByUid(counse.getUserid(),begin,pageSize);
			 request.setAttribute("counses", counses); 
			 request.setAttribute("userid", counse.getUserid());
			 request.setAttribute("page", page);
			 request.setAttribute("maxPage", maxPage);
			 request.setAttribute("counts", CounseCounts); 
	    	return "forward:/WEB-INF/up_page/up_kcgl.jsp";
	    }
	    
		//个人信息完善
		@RequestMapping("/per_zlws")
		public String per_zlws() throws Exception{

			return "forward:/WEB-INF/per_center/cen_zlws.jsp";
		}	
		//分页查询上传完成视频
		@RequestMapping(value = "/findViByUId", method = RequestMethod.POST )  
	    public ModelAndView  findViByUId(Integer userid,String page,Integer audit)  throws Exception {
			 System.out.println(audit);
	    	 ModelAndView mav=new ModelAndView();
	    	 if(page != null && page != ""){
	    		 mav.addObject("page", page);
	 		}else {
	 			page = "1";
	 		}
	    	 System.out.println("page:"+page);
	    	 int pageSize = 4;
	    	 int maxPage = 0;
	    	 Integer begin =(Integer.valueOf(page) - 1)*pageSize;
	    	 List<Video> videos = new ArrayList<Video>();
	    	 videos = CenBiz.getVideo(userid,begin,pageSize,audit);
	    	 int counts = CenBiz.getCountsToUid(userid, audit);
		 	 if(counts%pageSize == 0){
		 		 maxPage = counts/pageSize;
		 	 }else {
		 		 maxPage = counts/pageSize+1;
		 	 }
		 	 if(videos==null || videos.size()==0){
		 		 mav.addObject("msg", "对不起,暂无此类视频!"); 
		 	 }else{
		 		 mav.addObject("userid", userid);
		    	 mav.addObject("videos", videos);
		    	 mav.addObject("page", page);
		    	 mav.addObject("maxPage", maxPage);
		    	 mav.addObject("counts", counts); 
		 	 }
		 	switch (audit) {
		 	//全部
			case 10:
				mav.setViewName("/part_zsplb");
				break;
			//通过审核视频
			case 1:
				mav.setViewName("/part_okv");
				break;
			//未通过审核视频
			case 26:
				mav.setViewName("/part_sb");
				break;
			//未审核视频
			case 0:
				mav.setViewName("/part_shz");
				break;
			//趋势资料
			case 11:
				mav.setViewName("/part_qszl");
				break;
			default:
				break;
			}
	    	 System.out.println("%%columnid:%"+userid+"%%");
	    	return mav;
	     }  
		//ajax删除单个视频
		 @RequestMapping(value = "/deleteVideoByVID", method = RequestMethod.POST )
		public ModelAndView deleteVideoByVID(Integer videoid,Integer userid,String page,Integer audit,Integer realaudit,Integer rraudit) throws IOException{
			 //各视频条数统计
			 int[] i =(int[])request.getSession().getAttribute("count_videos");
			 
			 	CenBiz.deleteVideoByVID(videoid);
			   	ModelAndView mav=new ModelAndView();
		    	 if(page != null && page != ""){
		    		 mav.addObject("page", page);
		 		}else {
		 			page = "1";
		 		}
		    	 System.out.println("page:"+page);
		    	 int pageSize = 4;
		    	 int maxPage = 0;
		    	 Integer begin =(Integer.valueOf(page) - 1)*pageSize;
		    	 List<Video> videos = new ArrayList<Video>();
		    	 videos = CenBiz.getVideo(userid,begin,pageSize,audit);
		    	 int counts = CenBiz.getCountsToUid(userid, audit);
			 	 if(counts%pageSize == 0){
			 		 maxPage = counts/pageSize;
			 	 }else {
			 		 maxPage = counts/pageSize+1;
			 	 }
			 	 
			 		 mav.addObject("del_msg", "操失成功!"); 
			 		 mav.addObject("userid", userid);
			    	 mav.addObject("videos", videos);
			    	 mav.addObject("page", page);
			    	 mav.addObject("maxPage", maxPage);
			    	 mav.addObject("counts", counts); 
			 	//判断跳转到那个页面 10 为全部视频  11为资料不完整 
			    switch (audit) {
			 	//全部
				case 10:
					i[0]=i[0]-1;
					//这里判断这个视频是视频列表中的那种
					switch (realaudit) {
					case 0:
						i[3]=i[3]-1;
						break;
					case 1:
						i[1]=i[1]-1;	
						break;
					case 2:
						i[2]=i[2]-1;
						break;
					case 3:
						i[2]=i[2]-1;
						break;
					case 4:
						i[2]=i[2]-1;
						break;
					case 5:
						i[2]=i[2]-1;
						break;
					case 6:
						i[2]=i[2]-1;
						break;
					case 11:
						i[4]=i[4]-1;
						switch (rraudit) {
							case 0:
								i[3]=i[3]-1;
								break;
							case 1:
								i[1]=i[1]-1;	
								break;
							case 2:
								i[2]=i[2]-1;
								break;
							case 3:
								i[2]=i[2]-1;
								break;
							case 4:
								i[2]=i[2]-1;
								break;
							case 5:
								i[2]=i[2]-1;
								break;
							case 6:
								i[2]=i[2]-1;
								break;
						}
						break;
					default:
						break;
					}
					request.getSession().setAttribute("count_videos", i);
					mav.setViewName("/part_zsplb");
					break;
				//通过审核视频
				case 1:
					i[0]=i[0]-1;
					i[1]=i[1]-1;
					switch (realaudit) {
					case 11:
					  i[4]=i[4]-1;
						break;
					default:
						break;
							}
					request.getSession().setAttribute("count_videos", i);
					mav.setViewName("/part_okv");
					break;
				//未通过审核视频
				case 26:
					i[0]=i[0]-1;
					i[2]=i[2]-1;
					switch (realaudit) {
					case 11:
					  i[4]=i[4]-1;
						break;
					default:
						break;
							}
					request.getSession().setAttribute("count_videos", i);
					mav.setViewName("/part_sb");
					break;
				//未审核视频
				case 0:
					i[0]=i[0]-1;
					i[3]=i[3]-1;
					switch (realaudit) {
					case 11:
					  i[4]=i[4]-1;
						break;
					default:
						break;
							}
					request.getSession().setAttribute("count_videos", i);
					mav.setViewName("/part_shz");
					break;
				//缺失资料
				case 11:
					i[0]=i[0]-1;
					i[4]=i[4]-1;
					switch (realaudit) {
					case 0:
						i[3]=i[3]-1;
						break;
					case 1:
						i[1]=i[1]-1;	
						break;
					case 2:
						i[2]=i[2]-1;
						break;
					case 3:
						i[2]=i[2]-1;
						break;
					case 4:
						i[2]=i[2]-1;
						break;
					case 5:
						i[2]=i[2]-1;
						break;
					case 6:
						i[2]=i[2]-1;
						break;
					case 11:
						i[4]=i[4]-1;
						break;
					default:
						break;
					}
					request.getSession().setAttribute("count_videos", i);
					mav.setViewName("/part_qszl");
					break;
				default:
					break;
				}
		    	 System.out.println("%%columnid:%"+userid+"%%");
		    	return mav;
			   
		  
			}
		//ajax批量删除视频
		 @RequestMapping(value = "/deleteAllVideoByVID", method = RequestMethod.POST )
		public ModelAndView deleteAllVideoByVID(String videoIds,Integer userid,String page,Integer audit) throws IOException{
			 //获取视频id和真实realaudit
			 int[] videoids= null;
			 int[] realaudits = null;
			 int[] rraudits =null;
			 String[] checkboxs =videoIds.split("&");
			 videoids = new int[checkboxs.length]; 
			 realaudits=  new int[checkboxs.length]; 
			 rraudits = new int[checkboxs.length]; 
			 for(int i=0;i<checkboxs.length;i++){
			 String values[] =checkboxs[i].split("=");
					 String ids[] =values[1].split("\\.");
					 videoids[i] =Integer.valueOf(ids[0]);
					 realaudits[i]=Integer.valueOf(ids[1]);
					 rraudits[i]=Integer.valueOf(ids[2]);
			 }
			 //各视频条数统计
			 int[] i =(int[])request.getSession().getAttribute("count_videos");
			 	
			 	for(int k=0;k<videoids.length;k++){
			 		CenBiz.deleteVideoByVID(videoids[k]);
			 	}
			 	
			   	ModelAndView mav=new ModelAndView();
		    	 if(page != null && page != ""){
		    		 mav.addObject("page", page);
		 		}else {
		 			page = "1";
		 		}
		    	 System.out.println("page:"+page);
		    	 int pageSize = 4;
		    	 int maxPage = 0;
		    	 Integer begin =(Integer.valueOf(page) - 1)*pageSize;
		    	 List<Video> videos = new ArrayList<Video>();
		    	 videos = CenBiz.getVideo(userid,begin,pageSize,audit);
		    	 int counts = CenBiz.getCountsToUid(userid, audit);
			 	 if(counts%pageSize == 0){
			 		 maxPage = counts/pageSize;
			 	 }else {
			 		 maxPage = counts/pageSize+1;
			 	 }
			 	 
			 		 mav.addObject("del_msg", "操失成功!"); 
			 		 mav.addObject("userid", userid);
			    	 mav.addObject("videos", videos);
			    	 mav.addObject("page", page);
			    	 mav.addObject("maxPage", maxPage);
			    	 mav.addObject("counts", counts); 
			  
			    	//判断跳转到那个页面 10 为全部视频  11为资料不完整 
					    switch (audit) {
					 	//全部
						case 10:
							i[0]=i[0]-videoids.length;
							//这里判断这个视频是视频列表中的那种
							for(int j=0;j<realaudits.length;j++){
							switch (realaudits[j]) {
							case 0:
								i[3]=i[3]-1;
								break;
							case 1:
								i[1]=i[1]-1;	
								break;
							case 2:
								i[2]=i[2]-1;
								break;
							case 3:
								i[2]=i[2]-1;
								break;
							case 4:
								i[2]=i[2]-1;
								break;
							case 5:
								i[2]=i[2]-1;
								break;
							case 6:
								i[2]=i[2]-1;
								break;
							case 11:
								i[4]=i[4]-1;
								switch (rraudits[j]) {
								case 0:
									i[3]=i[3]-1;
									break;
								case 1:
									i[1]=i[1]-1;	
									break;
								case 2:
									i[2]=i[2]-1;
									break;
								case 3:
									i[2]=i[2]-1;
									break;
								case 4:
									i[2]=i[2]-1;
									break;
								case 5:
									i[2]=i[2]-1;
									break;
								case 6:
									i[2]=i[2]-1;
									break;
								default:
									break;
								}
								break;
							default:
								break;
							}
							}
							request.getSession().setAttribute("count_videos", i);
							mav.setViewName("/part_zsplb");
							break;
						//通过审核视频
						case 1:
							i[0]=i[0]-videoids.length;
							i[1]=i[1]-videoids.length;
							for(int j=0;j<realaudits.length;j++){
							switch (realaudits[j]) {
							case 11:
							  i[4]=i[4]-1;
								break;
							default:
								break;
									}
							}
							request.getSession().setAttribute("count_videos", i);
							mav.setViewName("/part_okv");
							break;
						//未通过审核视频
						case 26:
							i[0]=i[0]-videoids.length;
							i[2]=i[2]-videoids.length;
							for(int j=0;j<realaudits.length;j++){
								switch (realaudits[j]) {
								case 11:
								  i[4]=i[4]-1;
									break;
								default:
									break;
										}
								}
							request.getSession().setAttribute("count_videos", i);
							mav.setViewName("/part_sb");
							break;
						//未审核视频
						case 0:
							i[0]=i[0]-videoids.length;
							i[3]=i[3]-videoids.length;
							for(int j=0;j<realaudits.length;j++){
								switch (realaudits[j]) {
								case 11:
								  i[4]=i[4]-1;
									break;
								default:
									break;
										}
								}
							request.getSession().setAttribute("count_videos", i);
							mav.setViewName("/part_shz");
							break;
						//缺失资料
						case 11:
							i[0]=i[0]-videoids.length;
							i[4]=i[4]-videoids.length;
							for(int j=0;j<realaudits.length;j++){
							switch (realaudits[j]) {
							case 0:
								i[3]=i[3]-1;
								break;
							case 1:
								i[1]=i[1]-1;	
								break;
							case 2:
								i[2]=i[2]-1;
								break;
							case 3:
								i[2]=i[2]-1;
								break;
							case 4:
								i[2]=i[2]-1;
								break;
							case 5:
								i[2]=i[2]-1;
								break;
							case 6:
								i[2]=i[2]-1;
								break;
							case 11:
								i[4]=i[4]-1;
								break;
							default:
								break;
							}
							}
							request.getSession().setAttribute("count_videos", i);
							mav.setViewName("/part_qszl");
							break;
						default:
							break;
						}
				    	return mav;
					   
		 }
		//进入编辑页
		 @RequestMapping(value = "/editVideoByVID", method = RequestMethod.POST )
		public ModelAndView editVideoByVID(Integer videoid,Integer userid,Integer audit) throws IOException{
			 List<CounseTable> counses=CenBiz.getCounseByUid(userid);
			 List<Menus> menus =CenBiz.getAllMenus();
			 List<Funs> funs =CenBiz.getAllFuns();
			 Video video = CenBiz.getVideoByID(videoid);
			 Chaptertable chapter =CenBiz.getchapterBychapterID(video.getChapterId());
			 ModelAndView mav =new ModelAndView();
			 mav.addObject("chapter", chapter); 
			 mav.addObject("menus", menus); 
			 mav.addObject("funs", funs);
			 mav.addObject("counses", counses); 
/*			 mav.addObject("video", video);
*/			 mav.addObject("video", video);
			 mav.addObject("userid", userid);
			 mav.addObject("audit", audit);
			 mav.setViewName("/part_editV");
			 return mav;
		 }
		 //从课程列表页进入视频编辑页
		 @RequestMapping(value = "/editVideoByInKc", method = RequestMethod.POST )
			public ModelAndView editVideoByInKc(Integer videoid,Integer userid,Integer coursedId) throws IOException{
				 List<CounseTable> counses=CenBiz.getCounseByUid(userid);
				 List<Menus> menus =CenBiz.getAllMenus();
				 List<Funs> funs =CenBiz.getAllFuns();
				 Video video = CenBiz.getVideoByID(videoid);
				 Chaptertable chapter =CenBiz.getchapterBychapterID(video.getChapterId());
				 ModelAndView mav =new ModelAndView();
				 mav.addObject("chapter", chapter); 
				 mav.addObject("menus", menus); 
				 mav.addObject("funs", funs);
				 mav.addObject("counses", counses); 
				 mav.addObject("video", video);
				 mav.addObject("userid", userid);
				 mav.addObject("coursedId", coursedId);
				 mav.setViewName("/part_editV_kc");
				 return mav;
			 }
		//进入编辑页
		 @RequestMapping(value = "/editKC", method = RequestMethod.POST )
		public ModelAndView editKC(Integer videoid,Integer userid) throws IOException{
			 Video video = CenBiz.getVideoByID(videoid);
			 List<Menus> menus =CenBiz.getAllMenus();
			 List<Funs> funs =CenBiz.getAllFuns();
			 ModelAndView mav =new ModelAndView();
			 mav.addObject("userid", userid);
			 mav.addObject("menus", menus); 
			 mav.addObject("funs", funs);
			 mav.setViewName("/part_xjkc");
			 System.out.println("menus:"+menus.size()+"funs:"+funs.size());
			 return mav;
		 }
		//修改视频信息
		 @RequestMapping("/updateVideoByVID")
		public String updateVideoByVID() throws Exception{
			 CounseTable counse = new CounseTable();
             Chaptertable chapter = new Chaptertable();
			 Video video = new Video();
			 Integer userid =null;
			 Integer audit = null;
			 String counseImg="";
			 //提供解析时的一些缺省配置
	         DiskFileItemFactory factory = new DiskFileItemFactory();
	         
	         //创建一个解析器,分析InputStream,该解析器会将分析的结果封装成一个FileItem对象的集合
	         //一个FileItem对象对应一个表单域
	         ServletFileUpload sfu = new ServletFileUpload(factory);
             List<FileItem> items = sfu.parseRequest(request);
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
                     
                     /*if(paramName.equals("title")){
                         video.setTitle(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                     }
                     if(paramName.equals("audit")){
                    	 video.setAudit(0);
                    	 audit=Integer.valueOf("10");
                     }
                     if(paramName.equals("userid")){
                    	 userid = Integer.valueOf(item.getString());
                         video.setUserid(Integer.valueOf(item.getString()));
                     }
                     if(paramName.equals("videoid")){
                         video.setVideoid(Integer.valueOf(item.getString()));
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
                         video.setCoursename(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                         System.out.println(video.getCoursename());
                     }
                     if(paramName.equals("funid")){
                         System.out.println(item.getString());
                     }
                     if(paramName.equals("video_props")){
                    	video.setVtypes(Integer.parseInt(item.getString()));
                     }*/
                         if(paramName.equals("title")){
                             video.setTitle(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                         }
                         if(paramName.equals("audit")){
                        	 video.setAudit(0);
                        	 audit=Integer.valueOf("10");
                         }
                         if(paramName.equals("userid")){
                        	 counse.setUserid(Integer.valueOf(item.getString()));
                             video.setUserid(Integer.valueOf(item.getString()));
                         }
                         if(paramName.equals("videoid")){
                             video.setVideoid(Integer.valueOf(item.getString()));
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
                        String basePath ="/mnt/local/tomcat-proscenium/webapps/mxt/videos"; //sctx.getRealPath("/videos");
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
                        counseImg="videos/images/counrseIMG/"+fileName;
                     }
 			
                 }
             }
             if(counse.getCoursedId()==0){
              	String date =DateTimeUtil.getStringDate(new Date(), 2);
              	counse.setCreateTime(DateTimeUtil.getDate(date, "yyyy/MM/dd HH:mm:ss"));
              	counse.setCouseCoverPath(counseImg);
              	CenBiz.addCounse(counse);
              	chapter.setCouseId(CenBiz.findCouIdTime(counse));
              	CenBiz.addChapter(chapter);
              	video.setChapterId(CenBiz.findChaoterId(chapter));
              }else{
              	if(chapter.getChapterId()==0){
              		CenBiz.addChapter(chapter);	
              		System.out.println(chapter.getChapterName());
              		System.out.println(chapter.getCouseId());
              	video.setChapterId(CenBiz.findChaoterId(chapter));
              	}
              	//更新课程等级level
              	CenBiz.updateCounse(counse);
              }
            	CenBiz.updateVideo(video);
            	System.out.println("############################################");
             request.setAttribute("msg", "ok");  
			 return "forward:/per_cen/up_zsplb.do?userid="+video.getUserid()+"&audit="+audit;
		 }
		//保存修改视频信息
		 @RequestMapping("/updateVideoByKcnl")
		public String updateVideoByKcnl() throws Exception{
			 CounseTable counse = new CounseTable();
             Chaptertable chapter = new Chaptertable();
			 Video video = new Video();
			 Integer userid =null;
			 //提供解析时的一些缺省配置
	         DiskFileItemFactory factory = new DiskFileItemFactory();
	         
	         //创建一个解析器,分析InputStream,该解析器会将分析的结果封装成一个FileItem对象的集合
	         //一个FileItem对象对应一个表单域
	         ServletFileUpload sfu = new ServletFileUpload(factory);
             List<FileItem> items = sfu.parseRequest(request);
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
                     
                     /*if(paramName.equals("title")){
                         video.setTitle(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                     }
                     if(paramName.equals("audit")){
                    	 video.setAudit(0);
                    	 audit=Integer.valueOf("10");
                     }
                     if(paramName.equals("userid")){
                    	 userid = Integer.valueOf(item.getString());
                         video.setUserid(Integer.valueOf(item.getString()));
                     }
                     if(paramName.equals("videoid")){
                         video.setVideoid(Integer.valueOf(item.getString()));
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
                         video.setCoursename(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                         System.out.println(video.getCoursename());
                     }
                     if(paramName.equals("funid")){
                         System.out.println(item.getString());
                     }
                     if(paramName.equals("video_props")){
                    	video.setVtypes(Integer.parseInt(item.getString()));
                     }*/
                        
                         if(paramName.equals("title")){
                             video.setTitle(new String(item.getString().getBytes("ISO8859-1"),"UTF-8"));
                         }
                         if(paramName.equals("coursedId")){
                        	 video.setAudit(0);
                        	 counse.setCoursedId(Integer.valueOf(item.getString()));
                         }
                         if(paramName.equals("userid")){
                        	 counse.setUserid(Integer.valueOf(item.getString()));
                             video.setUserid(Integer.valueOf(item.getString()));
                         }
                         if(paramName.equals("videoid")){
                             video.setVideoid(Integer.valueOf(item.getString()));
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
                        String basePath ="/mnt/local/tomcat-proscenium/webapps/mxt/videos";// sctx.getRealPath("/videos");
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
                     }
 			
                 }
             }
             if(counse.getCoursedId()==0){
              	String date =DateTimeUtil.getStringDate(new Date(), 2);
              	counse.setCreateTime(DateTimeUtil.getDate(date, "yyyy/MM/dd HH:mm:ss"));
              	CenBiz.addCounse(counse);
              	chapter.setCouseId(CenBiz.findCouIdTime(counse));
              	CenBiz.addChapter(chapter);
              	video.setChapterId(CenBiz.findChaoterId(chapter));
              }else{
              	if(chapter.getChapterId()==0){
              		CenBiz.addChapter(chapter);	
              		System.out.println(chapter.getChapterName());
              		System.out.println(chapter.getCouseId());
              		System.out.println("chaptername:"+chapter.getChapterName()+"chouseid:"+chapter.getCouseId());
              	video.setChapterId(CenBiz.findChaoterId(chapter));
              	}
              	//更新课程等级level
              	CenBiz.updateCounse(counse);
              }
            	CenBiz.updateVideo(video);
            	
            	
	             List<Chaptertable> chapters = CenBiz.getChaptersBycoursedId(counse.getCoursedId());
				    String page ="1";
			         //创建完成跳转到课程页
			         if(page != null && page != ""){
			        	 request.setAttribute("page", page);
			 		}else {
			 			page = "1";
			 		}
			    	 System.out.println("page:"+page);
			    	 int pageSize = 5;
			    	 int maxPage = 0;
			    	 Integer begin =(Integer.valueOf(page) - 1)*pageSize;
					 int videoCounts = CenBiz.getVCountsToChapterId(chapters.get(0).getChapterId());
					 if(videoCounts%pageSize == 0){
						 maxPage = videoCounts/pageSize;
					 }else {
						 maxPage = videoCounts/pageSize+1;
					 }
	             List<Video>  videos =CenBiz.getVideoBychapterIdAndPage(userid,chapters.get(0).getChapterId(),begin,pageSize);
				 
	             int videosofAll=0;
	             for(int i=0;i<chapters.size();i++){
	            	 int num = CenBiz.getVCountsToChapterId(chapters.get(0).getChapterId());
	            	 videosofAll+=num;
	             }
	             System.out.println("videosofAll:"+videosofAll);
	             request.setAttribute("videosofAll", videosofAll); 
	             request.setAttribute("counse", counse); 
	             request.setAttribute("chapters", chapters); 
				 request.setAttribute("userid", counse.getUserid());
				 request.setAttribute("page", page);
				 request.setAttribute("maxPage", maxPage);
				 request.setAttribute("counts", videoCounts); 
				 request.setAttribute("videos", videos);
	             
				return "forward:/WEB-INF/up_page/up_kcnl.jsp";
		 }
		 @RequestMapping(value = "/delCouAndCha_check", method = RequestMethod.POST )  
	     @ResponseBody
	     public String delCouAndCha_check(Integer userid,Integer counseId)  throws Exception {
			   List<Chaptertable> Chapters = CenBiz.getChaptersBycoursedId(counseId);
			   int num=0;
			   for(int i=0;i<Chapters.size();i++){
				 int size =CenBiz.getVCountsToChapterId(Chapters.get(i).getChapterId());
				 num+=size;
				 System.out.println("#"+Chapters.get(i).getChapterId());
			   }
			   System.out.println("num:"+num);
			   if(num>0){
				   response.getWriter().write("false");
				   response.getWriter().flush();
				   response.getWriter().close();
			   }else{
				   response.getWriter().write("true");
				   response.getWriter().flush();
				   response.getWriter().close();
			   }
				 
			 return null;
		 }
		 @RequestMapping(value = "/delCouAndCha_check_chap", method = RequestMethod.POST )  
	     @ResponseBody
	     public String delCouAndCha_check_chap(Integer userid,Integer chapterId)  throws Exception {
			   int num =CenBiz.getVCountsToChapterId(chapterId);
			   if(num>0){
				   response.getWriter().write("false");
				   response.getWriter().flush();
				   response.getWriter().close();
			   }else{
				   response.getWriter().write("true");
				   response.getWriter().flush();
				   response.getWriter().close();
			   }
				 
			 return null;
		 }
		 @RequestMapping(value = "/delCouAndCha_check_chap_Byname", method = RequestMethod.POST )  
	     @ResponseBody
	     public String delCouAndCha_check_chap_Byname(Integer counseId,String chapterName)  throws Exception {
			 Chaptertable ch =new Chaptertable();
			 ch.setChapterName(chapterName);
			 ch.setCouseId(counseId);
			 Chaptertable chapter =CenBiz.getchapterBychapter(ch);
			 System.out.println("counseId:"+counseId+"chapterName:"+chapterName);
			 if(chapter==null){
				   response.getWriter().write("true");
				   response.getWriter().flush();
				   response.getWriter().close(); 
			 }else{
			   int num =CenBiz.getVCountsToChapterId(chapter.getChapterId());
			   if(num>0){
				   response.getWriter().write("false");
				   response.getWriter().flush();
				   response.getWriter().close();
			   }else{
				   response.getWriter().write("true");
				   response.getWriter().flush();
				   response.getWriter().close();
			   }
			 }
				 
			 return null;
		 }
		   @RequestMapping(value = "/delCouAndChaById", method = RequestMethod.POST )  
		     public ModelAndView delCouAndChaById(Integer userid,Integer counseId)  throws Exception {
			   ModelAndView mav=new ModelAndView();
				//删除课程和章节   
			   CenBiz.delCouseById(counseId);
			   CenBiz.delChapterById(counseId);
			  
			   
			   String page ="1";
		         //创建完成跳转到课程页
		         if(page != null && page != ""){
		        	 mav.addObject("page", page);
		 		}else {
		 			page = "1";
		 		}
		    	 System.out.println("page:"+page);
		    	 int pageSize = 5;
		    	 int maxPage = 0;
		    	 Integer begin =(Integer.valueOf(page) - 1)*pageSize;
				 int CounseCounts = CenBiz.getCounseCountsByUid(userid);
				 if(CounseCounts%pageSize == 0){
					 maxPage = CounseCounts/pageSize;
				 }else {
					 maxPage = CounseCounts/pageSize+1;
				 }
				 List<CounseTable> counses=CenBiz.getCounseByUid(userid,begin,pageSize);
				 mav.addObject("counses", counses); 
				 mav.addObject("userid", userid);
				 mav.addObject("page", page);
				 mav.addObject("maxPage", maxPage);
				 mav.addObject("counts", CounseCounts); 
				 mav.setViewName("/part_kcj");
		    	 return mav;
		     }
		 //进入课程内容页
			 @RequestMapping("/up_kcnl")
			public String up_kcnl(Integer userid,Integer coursedId) throws Exception{
				 System.out.println("userid:"+userid+"counseId:"+coursedId);
				 CounseTable counse = CenBiz.getCounseBycoursedId(coursedId);
	             List<Chaptertable> chapters = CenBiz.getChaptersBycoursedId(coursedId);
	             

				    String page ="1";
			         //创建完成跳转到课程页
			         if(page != null && page != ""){
			        	 request.setAttribute("page", page);
			 		}else {
			 			page = "1";
			 		}
			    	 System.out.println("page:"+page);
			    	 int pageSize = 5;
			    	 int maxPage = 0;
			    	 Integer begin =(Integer.valueOf(page) - 1)*pageSize;
			    	 int videoCounts =0;
			    	 if(chapters!=null&&chapters.size()>0){
					    videoCounts = CenBiz.getVCountsToChapterId(chapters.get(0).getChapterId());
			    	 }
					 if(videoCounts%pageSize == 0){
						 maxPage = videoCounts/pageSize;
					 }else {
						 maxPage = videoCounts/pageSize+1;
					 }
					 List<Video>  videos =new ArrayList<Video>();
					 if(chapters!=null&&chapters.size()>0){
	                   videos =CenBiz.getVideoBychapterIdAndPage(userid,chapters.get(0).getChapterId(),begin,pageSize);
					 }
				 List<Video> Allvideos =CenBiz.getVideoByUid(userid,chapters);
				 List<CounseTable> counses=CenBiz.getCounseByUid(userid);
				 
				 int videosofAll=0;
	             for(int i=0;i<chapters.size();i++){
	            	 int num = CenBiz.getVCountsToChapterId(chapters.get(0).getChapterId());
	            	 videosofAll+=num;
	             }
	             request.setAttribute("videosofAll", videosofAll);
				 request.setAttribute("counses", counses);
				 request.setAttribute("counse", counse); 
	             request.setAttribute("chapters", chapters); 
				 request.setAttribute("userid", userid);
				 request.setAttribute("page", page);
				 request.setAttribute("maxPage", maxPage);
				 request.setAttribute("counts", videoCounts); 
				 request.setAttribute("videos", videos);
				 request.setAttribute("Allvideos", Allvideos);
	             
				return "forward:/WEB-INF/up_page/up_kcnl.jsp";
			}	 
			 
			//添加视频
			 @RequestMapping("/addvideo")
			public String addvideo(Integer userid,Integer coursedId,String videosStr,Integer chapterId) throws Exception{
				
				 System.out.println(videosStr);
				 //将视频更改chapterid章节
				 List<Video> videosIds= new ArrayList<Video>();
				 String[] str=videosStr.split("##");
				 for(int i=0;i<str.length;i++){
					 Video v =new Video();
					 v.setVideoid(Integer.valueOf(str[i]));
					 videosIds.add(v);
				 }
				 CenBiz.updateVChapterByID(chapterId,videosIds);
				 
				 //跳转
				 CounseTable counse = CenBiz.getCounseBycoursedId(coursedId);
	             List<Chaptertable> chapters = CenBiz.getChaptersBycoursedId(coursedId);

				    String page ="1";
			         //创建完成跳转到课程页
			         if(page != null && page != ""){
			        	 request.setAttribute("page", page);
			 		}else {
			 			page = "1";
			 		}
			    	 System.out.println("page:"+page);
			    	 int pageSize = 4;
			    	 int maxPage = 0;
			    	 Integer begin =(Integer.valueOf(page) - 1)*pageSize;
					 int videoCounts = CenBiz.getVCountsToChapterId(chapters.get(0).getChapterId());
					 if(videoCounts%pageSize == 0){
						 maxPage = videoCounts/pageSize;
					 }else {
						 maxPage = videoCounts/pageSize+1;
					 }
					 
	             List<Video>  videos =CenBiz.getVideoBychapterIdAndPage(userid,chapters.get(0).getChapterId(),begin,pageSize);
				 List<Video> Allvideos =CenBiz.getVideoByUid(userid,chapters);
				 List<CounseTable> counses=CenBiz.getCounseByUid(userid);
				 int videosofAll=0;
	             for(int i=0;i<chapters.size();i++){
	            	 int num = CenBiz.getVCountsToChapterId(chapters.get(0).getChapterId());
	            	 videosofAll+=num;
	             }
	             request.setAttribute("videosofAll", videosofAll);
				 request.setAttribute("counses", counses);
				 request.setAttribute("counse", counse); 
	             request.setAttribute("chapters", chapters); 
				 request.setAttribute("userid", counse.getUserid());
				 request.setAttribute("page", page);
				 request.setAttribute("maxPage", maxPage);
				 request.setAttribute("counts", videoCounts); 
				 request.setAttribute("videos", videos);
				 request.setAttribute("Allvideos", Allvideos);
	             
				return "forward:/WEB-INF/up_page/up_kcnl.jsp";
			}	 
			 
			//添加视频
			 @RequestMapping("/sub_addKc")
			public String sub_addKc(Integer userid,Integer coursedId,Integer videoid,Integer chapterId) throws Exception{
				System.out.println("userid:"+userid+"courseId:"+coursedId+"videoid:"+videoid+"chapterId:"+chapterId);
				 List<Video> videosIds= new ArrayList<Video>();
					 Video v =new Video();
					 v.setVideoid(videoid);
					 videosIds.add(v);
				 CenBiz.updateVChapterByID(chapterId,videosIds);
				 
				 //跳转
				 CounseTable counse = CenBiz.getCounseBycoursedId(coursedId);
	             List<Chaptertable> chapters = CenBiz.getChaptersBycoursedId(coursedId);

				    String page ="1";
			         //创建完成跳转到课程页
			         if(page != null && page != ""){
			        	 request.setAttribute("page", page);
			 		}else {
			 			page = "1";
			 		}
			    	 System.out.println("page:"+page);
			    	 int pageSize = 4;
			    	 int maxPage = 0;
			    	 Integer begin =(Integer.valueOf(page) - 1)*pageSize;
					 int videoCounts = CenBiz.getVCountsToChapterId(chapters.get(0).getChapterId());
					 if(videoCounts%pageSize == 0){
						 maxPage = videoCounts/pageSize;
					 }else {
						 maxPage = videoCounts/pageSize+1;
					 }
					 
	             List<Video>  videos =CenBiz.getVideoBychapterIdAndPage(userid,chapters.get(0).getChapterId(),begin,pageSize);
				 List<Video> Allvideos =CenBiz.getVideoByUid(userid,chapters);
				 List<CounseTable> counses=CenBiz.getCounseByUid(userid);
				 int videosofAll=0;
	             for(int i=0;i<chapters.size();i++){
	            	 int num = CenBiz.getVCountsToChapterId(chapters.get(0).getChapterId());
	            	 videosofAll+=num;
	             }
	             request.setAttribute("videosofAll", videosofAll);
				 request.setAttribute("counses", counses);
				 request.setAttribute("counse", counse); 
	             request.setAttribute("chapters", chapters); 
				 request.setAttribute("userid", counse.getUserid());
				 request.setAttribute("page", page);
				 request.setAttribute("maxPage", maxPage);
				 request.setAttribute("counts", videoCounts); 
				 request.setAttribute("videos", videos);
				 request.setAttribute("Allvideos", Allvideos);
	             
				return "forward:/WEB-INF/up_page/up_kcnl.jsp";
			}	 
		 @RequestMapping(value = "/chapterVideo", method = RequestMethod.POST )  
			  public ModelAndView  chapterVideo(Integer chapterId,String page,Integer userid,Integer coursedId)  throws Exception {
			    	 ModelAndView mav=new ModelAndView();
			    	 
				         //创建完成跳转到课程页
				         if(page != null && page != ""){
				        	 mav.addObject("page", page);
				 		}else {
				 			page = "1";
				 		}
				    	 System.out.println("page:"+page);
				    	 int pageSize = 4;
				    	 int maxPage = 0;
				    	 Integer begin =(Integer.valueOf(page) - 1)*pageSize;
						 int videoCounts = CenBiz.getVCountsToChapterId(chapterId);
						 if(videoCounts%pageSize == 0){
							 maxPage = videoCounts/pageSize;
						 }else {
							 maxPage = videoCounts/pageSize+1;
						 }
		             List<Video>  videos =CenBiz.getVideoBychapterIdAndPage(userid,chapterId,begin,pageSize);
					 
		             mav.addObject("coursedId",coursedId);
		             mav.addObject("userid", userid);
		             mav.addObject("page", page);
		             mav.addObject("maxPage", maxPage);
		             mav.addObject("counts", videoCounts); 
		             mav.addObject("videos", videos);
		             mav.setViewName("/part_video");
			  return mav;
			 }
		 // 从课程内容页 删除视频
		 @RequestMapping(value = "/deletVideoByInKc", method = RequestMethod.POST )  
		  public ModelAndView  deletVideoByInKc(Integer chapterId,Integer userid,Integer videoid,Integer coursedId)  throws Exception {
		    	 
			 CenBiz.deleteVideoByVID(videoid);
			 
			 ModelAndView mav=new ModelAndView();
		    	    
		    	     String page="1";
			         //创建完成跳转到课程页
			         if(page != null && page != ""){
			        	 mav.addObject("page", page);
			 		}else {
			 			page = "1";
			 		}
			    	 System.out.println("page:"+page);
			    	 int pageSize = 4;
			    	 int maxPage = 0;
			    	 Integer begin =(Integer.valueOf(page) - 1)*pageSize;
					 int videoCounts = CenBiz.getVCountsToChapterId(chapterId);
					 if(videoCounts%pageSize == 0){
						 maxPage = videoCounts/pageSize;
					 }else {
						 maxPage = videoCounts/pageSize+1;
					 }
	             List<Video>  videos =CenBiz.getVideoBychapterIdAndPage(userid,chapterId,begin,pageSize);
				 
	             mav.addObject("coursedId",coursedId);
	             mav.addObject("userid", userid);
	             mav.addObject("page", page);
	             mav.addObject("maxPage", maxPage);
	             mav.addObject("counts", videoCounts); 
	             mav.addObject("videos", videos);
	             mav.setViewName("/part_video");
		  return mav;
		 }
		 
		 @RequestMapping(value = "/findchaByCid", method = RequestMethod.POST )  
	     @ResponseBody
	     public Object findchaByCid(Integer coursedId)  throws Exception {
			 System.out.println(coursedId);
			 List<Chaptertable> chapters = CenBiz.getChaptersBycoursedId(coursedId);
	    	 JSONArray json = JSONArray.fromObject(chapters);
	    	 response.setContentType("text/html;charset=UTF-8"); 
	    	 response.getWriter().print(json.toString());
	    	 response.getWriter().flush();
	    	 response.getWriter().close();
	    	 return null;
	     } 
		 //课程唯一性校验
		 @RequestMapping(value="/couseCheck")
		   public void couseCheck(String couseTitle, Integer userid) throws IOException{
			 System.out.println("couseTitle:"+couseTitle+"userid:"+userid);
			 //做课程名唯一性判断
			 CounseTable coun =null;
             CounseTable counse =new CounseTable();
             counse.setUserid(userid);
             counse.setCouseTitle(couseTitle);
             coun =CenBiz.getCounseByCounse(counse);
             System.out.println(coun);
			   if(coun!=null){
				   response.getWriter().write("已有此课程！");
				   response.getWriter().flush();
				   response.getWriter().close();
			   }else{
				   response.getWriter().write("此标题可用！");
				   response.getWriter().flush();
				   response.getWriter().close();
			   }
		  
			}
		 @RequestMapping(value = "/delChaByIdByName", method = RequestMethod.POST )  
	     @ResponseBody
	     public Object delChaByIdByName(Integer counseId,String chapterName)  throws Exception {
			 Chaptertable ch =new Chaptertable();
			 ch.setChapterName(chapterName);
			 ch.setCouseId(counseId);
			 Chaptertable c =CenBiz.getchapterBychapter(ch);
			 System.out.println("ChapteID"+c.getChapterId());
			 CenBiz.delChapterById(c.getChapterId());
	    	 return null;
	     } 
		 @ExceptionHandler(Exception.class)
	    public String exception(Exception e,HttpServletRequest request)
		{
		 	request.setAttribute("exception", e);
		 	e.printStackTrace();
		 	return  "/500"; 
		}
		 
}
