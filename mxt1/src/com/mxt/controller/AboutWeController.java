package com.mxt.controller;

import javax.servlet.http.HttpServletRequest;

import org.mybatis.spring.annotation.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mxt.dao.FunDao;
import com.mxt.entity.Funs;
import com.mxt.util.VideoCode;

/**
 *
 * @author：wubiao
 * E-mail: 892591048@qq.com
 * @date：2016-7-21 下午1:52:21
 */
@Controller
@RequestMapping("/AboutWe")
public class AboutWeController extends BaseController {
	
	//关于我们
    @RequestMapping("/about")
    public String about() throws Exception{
    	
   	 return "forward:/WEB-INF/aboutWe/about.jsp";
    }
    //关于我们
    @RequestMapping("/contact")
    public String contact() throws Exception{
    	
	   	
   	 return "forward:/WEB-INF/aboutWe/contact.jsp";
    }
    //关于我们
    @RequestMapping("/mzsm")
    public String mzsm() throws Exception{
    	
	   	
   	 return "forward:/WEB-INF/aboutWe/mzsm.jsp";
    }
    @RequestMapping({"/codeforall"})
    public String codeforall(int namber) throws Exception {
      System.out.println("kkkkkkkkkkkkkk");
      VideoCode v =new VideoCode();
      String[] str =new String[]{"1472613471034","1472615218496","1472615724339","1472638754148","1472639468956","1472640076669","1472640401174","1472640711165","1472696325302","1472697000441","1472697967247","1472699517787","1472706623384","1472709786285","1472710066578","1472711482961","1472715201191","1472716760878","1472718003671","1472726123059","1472728491714","1472697287350","1472697397521","1472697789084","1472698256002","1472698498342","1472699968441","1472613973544","1472614046797","1472614363065","1472614439243","1472803303796","1472803122384","1472802996169","1472802875267"};
      for (int i = 0; i <= str.length; i++) {
        System.out.println("i:" + i);
    		 v.executeCodecsMP4("/usr/local/ffmpeg/bin/./ffmpeg", "/usr/local/tomcat-proscenium/webapps/mxt/videos/"+str[i]+".flv", "/usr/local/tomcat-proscenium/webapps/mxt/videos_MP4/videos/"+str[i]+".mp4");
      }
      return "";
    }
    @ExceptionHandler(Exception.class)
    public String exception(Exception e,HttpServletRequest request)
    {
 	   request.setAttribute("exception", e);
 	   return  "/500"; 
    }

}
