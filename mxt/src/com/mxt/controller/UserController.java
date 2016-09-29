package com.mxt.controller;
import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Date;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import com.mxt.entity.Consume;
import com.mxt.entity.User;
import com.mxt.util.Md5Util;
import com.mxt.biz.UserBiz;

import org.springframework.beans.factory.annotation.Qualifier;

/**
*
* @author：wubiao
* @date：2016年7月10日 下午3:27:25
*/
@Controller("userController")
@RequestMapping("/user")
public class UserController extends BaseController {
   @Autowired
   @Qualifier("userBizImpl")
   private UserBiz<User> biz;
   //登录前ajax校验
   @RequestMapping(value="/userLoginCheck")
   public void userCheck(String username, String password, Model model) throws IOException{
	   password = Md5Util.strToMD5(password);
	   User u =new User();
	   u=biz.getUser(username);
	   if(u==null){
		   response.getWriter().write("用户或手机号不存在");
		   response.getWriter().flush();
		   response.getWriter().close();
	   }else if(!u.getPassword().equals(password)){
		   response.getWriter().write("密码错误");
		   response.getWriter().flush();
		   response.getWriter().close();
	   }else{
		   request.getSession().setAttribute("user", biz.getUser(username));
		   model.addAttribute(biz.getUser(username));
		   Date date = new Date();
		   String ip = InetAddress.getLocalHost().getHostAddress();
		   u.setLastlogintime(date);
		   u.setIp(ip);
		   biz.updateLoginInfo(u);
		   response.getWriter().write("");
		   response.getWriter().flush();
		   response.getWriter().close();
	   }
  
	}
   //登录动作
   @RequestMapping("/get")
   public String get(String username,String password,Model model)
   {   
	   String pageurl =request.getHeader("referer");
	   String ret ="";

	   String str=request.getParameter("counseId");
	   String videoid=request.getParameter("videoid");
	   if(str!=null&&videoid!=null){
		   ret="forward:/video/playV.do";  
	   }else if(str!=null){
		   ret="forward:/video/tocou.do";  
	   }else{
		   ret="redirect:"+pageurl;  
	   }
	   return ret;   
   }
   //退出动作
   @RequestMapping("/exit")
   public String exit(String username,String password,Model model)
   {   
	   request.getSession().invalidate();
	   return "redirect:/"+"";   
   }
   
   //注册前ajax校验用户唯一性
   @RequestMapping("/userRegister")
   public void userRegister(String phone ,String pwd ,String pwd2,String yzcode) throws IOException {

	   User u =new User();
	   u = biz.findUserByPhone(phone);
	   System.out.println(yzcode);
	   System.out.println("code**:"+request.getSession().getAttribute(phone));
	   if(u!=null){
		   response.setContentType("text/html;charset=UTF-8");
		   response.getWriter().write("该手机号已经被注册！");
		   response.getWriter().flush();
		   response.getWriter().close();
	   }else if(!yzcode.equalsIgnoreCase((String)request.getSession().getAttribute(phone))){
		   response.setContentType("text/html;charset=UTF-8");
		   response.getWriter().write("验证码错误！");
		   response.getWriter().flush();
		   response.getWriter().close();
	   }else{
		   response.setContentType("text/html;charset=UTF-8");
		   response.getWriter().write("");
		   response.getWriter().flush();
		   response.getWriter().close();
	   }
   }
   
   //完成注册
   @RequestMapping("/okRegister")
   public String okRegister(String phone ,String pwd ) throws UnknownHostException 
   {   
	   pwd = Md5Util.strToMD5(pwd);
	   User user=new User();
	   user.setPhone(phone);
	   user.setPassword(pwd);
	   String username = "用户"+new Date().getTime();
	   Date date = new Date();
	   String ip = InetAddress.getLocalHost().getHostAddress();
	   user.setCreateTime(date);
	   user.setUsername(username);
	   user.setCreateIp(ip);
	   biz.appendUser(user);
	   user=biz.findUserByPhone(phone);
	   Consume co = new Consume(user.getUserid());
	   biz.addconsume(co);
	   request.getSession().setAttribute("user",user);
	   return "redirect:/index.jsp";
   }
   
   //进入个人中心
   @RequestMapping("/pcenter")
   public String pcenter(Integer userid,String username)
   {  
	   User user=(User)request.getSession().getAttribute("user");
	   String restr="forward:/";
	   System.out.println(username!=null&&username.equals(user.getUsername()));
	   if(username!=null&&username.equals(user.getUsername())){
	   //消费记录
	   Consume co = new Consume();
	   co = biz.getConsume(userid);
	   System.out.println("userid:"+userid);
	   System.out.println(co.toString());
	   int counts10 = biz.getCountsToUid(userid,Integer.parseInt("10"));
  	   int counts1 = biz.getCountsToUid(userid,Integer.parseInt("1"));
  	   int counts26 = biz.getCountsToUid(userid,Integer.parseInt("26"));
  	   int counts0 = biz.getCountsToUid(userid,Integer.parseInt("0"));
  	   int counts11 = biz.getCountsToUid(userid,Integer.parseInt("11"));
  	   int i[]={counts10,counts1,counts26,counts0,counts11};
  	   request.getSession().setAttribute("count_videos", i);
  	   request.getSession().setAttribute("co",co);
	   request.setAttribute("userid", userid);
	   restr="forward:/pcenter.jsp";
	   }
	   System.out.println(restr);
	   return restr;   
   }
   
   @RequestMapping("/verify")
   public void verify(String phone,String yzcode,Model model) throws IOException{
	   User user = biz.findUserByPhone(phone);
	   if(user == null){
		   response.setContentType("text/html;charset=UTF-8");
		   response.getWriter().write("该手机号未被注册");
		   response.getWriter().flush();
		   response.getWriter().close();
	   }
	   if(!yzcode.equalsIgnoreCase((String)request.getSession().getAttribute("code"))){
		   response.setContentType("text/html;charset=UTF-8");
		   response.getWriter().write("验证码不正确");
		   response.getWriter().flush();
		   response.getWriter().close();
	   }
	   else{
		   response.setContentType("text/html;charset=UTF-8");
		   response.getWriter().write("");
		   response.getWriter().flush();
		   response.getWriter().close();
	   }
   }
   
   @RequestMapping("/verifyPhone")
   public void verifyPhone(String phone,String yzcode,Model model) throws IOException{
	   if(!yzcode.equalsIgnoreCase((String)request.getSession().getAttribute(phone))){
		   response.setContentType("text/html;charset=UTF-8");
		   response.getWriter().write("验证码不正确");
		   response.getWriter().flush();
		   response.getWriter().close();
	   }
	   else{
		   response.setContentType("text/html;charset=UTF-8");
		   response.getWriter().write("");
		   response.getWriter().flush();
		   response.getWriter().close();
	   }
   }
   
   @RequestMapping("/updatePassword")
   public void updatePassword(String phone,String pwd,Model model) throws IOException{
	   User user = biz.findUserByPhone(phone);
	   String password = Md5Util.strToMD5(pwd);
	   user.setPassword(password);
	   Date date = new Date();
	   user.setLastUpdateTime(date);
	   user.setPhone(phone);
	   biz.updatePassword(user);
   }
   
   @ExceptionHandler(Exception.class)
   public String exception(Exception e,HttpServletRequest request)
   {	
	   System.out.println(e);
	   request.setAttribute("exception", e);
	   return  "/500"; 
   }
   
   
  
}
