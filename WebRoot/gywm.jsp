﻿<%@page import="com.mxt.entity.Video"%>
<%@page import="com.mxt.dao.impl.VideoDaoImpl"%>
<%@page import="com.mxt.dao.VideoDao"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>美享厅介绍</title>
    <link rel="stylesheet" type="text/css" href="gywm/base.css">
    <link rel="stylesheet" type="text/css" href="gywm/common.css">
    <link rel="stylesheet" type="text/css" href="gywm/coursehome.css">
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <link rel="stylesheet" href="css/dl.css" type="text/css">

	<script type="text/javascript">
  function  user_power(){
  
  	//判断用户有没有登录
		    		 var bool = ${user.username==null||user.username==""};
				     if(bool)
				     {
				     alert("没有登录或者账户已经失效，请您先登录！");
				   
						$('.theme-popover-mask').fadeIn(100);
						$('.theme-popover').slideDown(200);
						$('.theme-popover-mask2').fadeOut(100);
						$('.theme-popover2').slideUp(200);
						$("#bg").css("display","block");
					
					$('.theme-poptit .close').click(function(){
						$('.theme-popover-mask').fadeOut(100);
						$('.theme-popover').slideUp(200);
						$("#bg").css("display","none");
					})
				     }
				     else
				     {
				     
				      window.location="<%=basePath%>/upload.jsp";
				     }
  
  }
  jQuery(document).ready(function($) {
		$('.theme-login').click(function(){
			$('.theme-popover-mask').fadeIn(100);
			$('.theme-popover').slideDown(200);
			$('.theme-popover-mask2').fadeOut(100);
			$('.theme-popover2').slideUp(200);
			$("#bg").css("display","block");
		})
		$('.theme-poptit .close').click(function(){
			$('.theme-popover-mask').fadeOut(100);
			$('.theme-popover').slideUp(200);
			$("#bg").css("display","none");
		})

	});
	jQuery(document).ready(function($) {
		$('.reg').click(function(){
			$('.theme-popover-mask2').fadeIn(100);
			$('.theme-popover2').slideDown(200);
			$('.theme-popover-mask').fadeOut(100);
			$('.theme-popover').slideUp(200);
			$("#bg").css("display","block");
		})
		$('.theme-poptit2 .close2').click(function(){
			$('.theme-popover-mask2').fadeOut(100);
			$('.theme-popover2').slideUp(200);
			$("#bg").css("display","none");
		})

	})
 
 </script>
 </script>
<!-- jquery登录 -->
 <script language='javascript'>
  //按钮事件
  $(document).ready(function(){
      $("#loginButton").click(function(){
          Login();
      });
  });
  //登录处理
  function Login(){
      if(Check()){
         LoginSuccess();
         //alert('成功');
      }
  }
  //登录成功处理
  function LoginSuccess(){
        $.ajax({
            type:"POST",
            url:"<%=basePath%>/user/userLoginCheck.do",
            data:{username:$("#username").val(),password:$("#pass").val()},
            beforeSend:function(){$("#msg1").html("loading...");},            
            success:function(data){
            //判断输入是否成功，成功则跳转
            if(""==data) {
            $("#formid").submit();
            } else {
             $("#msg1").html(decodeURI(data));            
            }
           
            }           
         });
     }
  
  //初期检查 
  function Check(){
   var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      if($("#username").val()==""){
          //alert("用户名不能为空");
          $("#msg1").html("用户名不能为空");
          $("#username").focus();
          return false;
      }
      if($("#pass").val()=="")
      {
          //alert("密码不能为空");
          $("#msg1").html("密码不能为空");
          $("#pass").focus();
          return false;
      }
     return true;
  }
  
 </script>
<!-- jquery注册 -->
<script language='javascript'>
  //按钮事件
  $(document).ready(function(){
      $("#registerButton").click(function(){
          Register();
      });
  });
  //注册处理
  function Register(){
      if(Check2()){
         RegisterSuccess();
      }
  }
  //注册成功处理
  function RegisterSuccess(){
        $.ajax({
            type:"POST",
            url:"<%=basePath%>/user/userRegister.do",
            data:{username2:$("#username2").val(),pwd:$("#pwd").val(),pwd2:$("#pwd2").val(),code:$("#index_code").val()},
            beforeSend:function(){$("#msg2").html("loading...");},            
            success:function(data){
            //判断输入是否成功，成功则跳转
            if("" == data) {
            $("#registerform").submit();
            $("#msg2").html("注册成功！");
            } else {
             $("#msg2").html(decodeURI(data));            
            }
           
            }           
         });
     }
  
  //注册初期检查 
  function Check2(){
   var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      if($("#username2").val()==""){
          //alert("用户名不能为空");
          $("#msg2").html("用户名不能为空");
          $("#username2").focus();
          return false;
      }
    /*   if(! reg.test($("#username").val())){
          //alert("请输入正确的用户名格式，为邮件地址");
          $("#msg").html("请输入正确的用户名格式，为邮件地址");
          $("#username").focus();
          return false;
      }
      */
      if($("#pwd").val()=="")
      {
          //alert("密码不能为空");
          $("#msg2").html("密码不能为空");
          $("#pwd").focus();
          return false;
      }
      if($("#pwd").val()!=$("#pwd2").val())
      {
          $("#msg2").html("两次密码输入不一致");
          $("#pwd2").focus();
          return false;
      }
     return true;
  }
  
 </script>
 	</head>
<body>
<div id="bg"></div>
<div class="theme-popover">
     <div class="theme-poptit" style="height: 50px;">
          <a href="javascript:;" title="关闭" class="close">×</a>
          <h3 style="font-size: 15px;">登录	/ <a style="color:black;font-size: 15px;" class="reg" href="javascript:;">没有帐号去注册</a></h3>
     </div>
     <div class="theme-popbod dform">
           <form class="theme-signin" id="formid" name="loginform" action="user/get.do" method="post">
                <ol>
                     <li><h4><font id="msg1" color="red">你必须先登录！</font></h4></li>
                     <li><strong>用户名：</strong><input class="ipt" type="text" id="username" name="username" value="" size="20" /></li>
                     <li><strong>密码：</strong><input class="ipt" type="password" id="pass" name="password" value="" size="20" /></li>
                     <li><input class="btn btn-primary" id="loginButton"  type="button" name="button" value=" 登 录 " /></li>
                </ol>
           </form>
     </div>
</div>
<div class="theme-popover2">
     <div class="theme-poptit2" style="height: 50px;">
          <a href="javascript:;" title="关闭" class="close2">×</a>
          <h3 style="font-size: 15px;">注册	/ <a style="color:black;font-size: 15px;" class="theme-login" href="javascript:;">已有账号去登录</a></h3>
     </div>
     <div class="theme-popbod dform">
           <form class="theme-signin" id="registerform" name="registerform" action="user/okRegister.do" method="post">
                <ol>
                     <li><h4  ><font id="msg2" color="red">你必须先注册！</font></h4></li>
                     <li><strong>用户名：</strong><input class="ipt" type="text" id="username2" name="username2" value="" size="20" /></li>
                     <li><strong>密码：</strong><input class="ipt" type="password" id="pwd" name="pwd" value="" size="20" /></li>
                     <li><strong>重复密码：</strong><input class="ipt" type="password" id="pwd2" name="pwd2" value="" size="20" /></li>
                     <li>
						 <strong>验证码：</strong><input class="ipt" id="index_code" style="width: 85px" name="code" type="text" />
						 <!-- <img src="images/verifycode.png" style="vertical-align:middle;"> -->
						  <img id="imgObj" alt="" src="<%=basePath%>code.do" onclick="changeImg()" style="vertical-align:middle;"/>
					 </li>
                     <li><input class="btn btn-primary"  id="registerButton" type="button" name="button" value=" 注 册 " /></li>
                </ol>
           </form>
     </div>
</div>
<div class="etutor_header">
    <div id="header">
        <h1 class="fn-left"><a href="http://www.meixt.cn"><img src="images/logo4.png"></a></h1>
        <a class="fn-right etutor_backhome" href="http://www.meixt.cn/" target="_blank">返回首页</a>
    </div>
</div>
<div class="etu_banner etu_banner01">
   <div style="height: 657px;" class="container fn-relative">
       <a href="javascript:;" onclick="user_power()">立即约课</a>
   </div>
</div>
<div class="linklist_zone">
    <div class="container etutor_introduce_con" id="floor_one">
        <div class="etu_introduce_title"><h2><span>项目简介</span></h2></div>
        <p class="etu_title_s">what&nbsp;is&nbsp;the&nbsp;meixt</p>
    </div>
    <div class="container vedio_text" style="text-indent:2em;">
	美享厅是国内一家为用户提供在线教育、多元社交的综合性服务提供商，通过搭建在线分享生态链，打造一个以原创视频为核心的社交网络。上游用户通过上传视频，

用户展示，进行视频分享互动，根据用户播放量进行分红，下游用户可以通过视频播放，评论探讨，建立用户圈子，为每一位想真真正正学到些实用知识、技能的学习者，提供贴心的一站式学习服务。

    </div>
	<div style="margin:0 auto;width:988px;">
		<img src="images/lct.png" alt="" />
	</div>
    <dl class="container etutor_introduce_one mt20">
        <dt>与我们合作可以干什么</dt><br/>
    <dd>
    	<p style="background:#72d0eb;">（1）合作者可以上传视频，分享视频，然后根据视频播放量多少网站对原创视频进行分红，合作者账户余额到一定数量，便可进行提现操作。</p>
		<p style="background:orange;">（2）合作者可以对自己的培训机构或自己进行宣传展示，合作者需上传视频后对资料进行完善，网站平台会在合作伙伴页面以及适当的广告页面进行宣传，提高自身知名度以及品牌度。</p>
		<p style="background:#ECFA11;">（3）可以随时随地帮助用户学习专业技能，有效的提高教学质量及学员水平，从而帮助他们更好的就业。</p>
		
        </dd><!--<dd><strong>拉斯加代理费</strong><p>拉斯加代理费拉斯加代理费拉斯加代理费拉斯加代理费拉斯加代理费拉斯加代理费拉斯加代理费拉斯加代理费拉斯加代理费</p>
            拉斯加代理费拉斯加代理费拉斯加代理费拉斯加代理费<br>
            拉斯加代理费拉斯加代理费拉斯加代理费
        </dd>-->
    </dl>
    <dl class="container etutor_introduce_one">
        <dt>合作注意规则事项：</dt>
        <dd>
			<p><strong>上传方法：</strong>合作者需注册完成后进行视频上传，上传完成后，网站工作人员会在一两个工作日内进行审核，审核完成后视频即可在网站进行显示。</p>
			<p><strong>上传规则：</strong>合作者可上传现主流媒体的任意格式视频，文件大小在1M到900M之间，播放时间在60秒到1小时之间。如果超出限制，则不予通过审核 。</p>
			
			<p><strong>分红规则：</strong>网站会对合作者上传的原创视频播放量进行分红，每个用户点开1分钟以后算作1次播放，同一天里同一用户不进行重复统计，每个视频1次播放会得到2-3分人民币的分红 。</p>
			<p><strong>提现规则：</strong>如果合作者帐户余额大于100元即可进行提现操作，每笔提现金额不少于100元，每笔提现网站将会收取2元作为平台服务费用 。</p>
		</dd>
    </dl>
</div>

<div class="linklist_zone">
    <div class="blue_zone">
        <div class="container etutor_introduce_serviceTips">
            <h3><span>北京美晨科技有限公司</span> </h3>
            </p><p class="f14px mt10">

    北京美晨科技有限公司，是国内一家为用户提供在线教育、多元社交的综合性服务提供商，通过搭建在线分享生态链，打造一个以原创视频为核心的社交网络。
   美晨人以服务社会、振兴中国软件产业为己任，励精图治，改革创新，开拓进取，经过努力拼搏，取得了令人瞩目的业绩。展望未来，公司将抓住机遇，加大自主产品创新，加快国际化进程，实现规模经济和跨越式发展，成为具有国际竞争力、国际知名度的中国软件旗舰企业，跻身世界软件企业百强，实现“中国教育超级品牌，世界企业一流品质”。
</p>
        </div>
    </div>
</div>
<div id="footer">
    <div class="footer-wrap">
        <ul class="footer-list">
            <li><a href="<%=basePath%>AboutWe/about.do" rel="nofollow">关于我们</a><span>|</span></li>
            <li><a href="<%=basePath%>AboutWe/contact.do" rel="nofollow">联系我们</a><span>|</span></li>
            <li><a href="" rel="nofollow">友情链接</a><span>|</span></li>
            <li><a href="" rel="nofollow">诚募英才</a><span>|</span></li>
            <li><a href="">网站地图</a><span>|</span></li>
            <li><a href="" target="_blank" rel="nofollow">帮助中心</a></li>
        </ul>
        <p>北京美晨科技有限公司&nbsp;<a href="http://www.meixt.cn/">美享厅</a><span style="color:red; font-weight:bold;">投诉与建议信箱：</span><a href="mailto:kefu@meiyx.cn" style="color:red; font-weight:bold;">kefu@meiyx.cn</a><br>copyright&nbsp;&nbsp;2016&nbsp;meixt.cn,All&nbsp;Rights&nbsp;Reserved&nbsp;</p>
    </div>
</div>
</body>
</html>