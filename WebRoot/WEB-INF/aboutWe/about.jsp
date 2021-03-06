<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
	 <base href="<%=basePath%>">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<meta http-equiv="x-dns-prefetch-control" content="on">
<title>关于我们</title>
<meta http-equiv="Pragma" content="no-cache">
 <meta http-equiv="Expires" content="0">
 <meta name="author" content="Netease">
 <meta name="version" content="1.0"> 
 <meta name="keywords" content="美学堂">
 <meta name="description" content="美学堂">
 <!--[if lt IE 9]> 
 <script>    
 (function(){ var _test = function(){  
 var _de = document.documentElement,  
 _db = document.body,_w = window.innerWidth || _de.clientWidth || _db.clientWidth, _clazz = 'g-ie-body',_reg = new RegExp('\\s*'+_clazz+'\\s*'),_cl = _db.className;
 if(_w < 1210){ 
 _db.className = _cl.replace(_reg,'');
 }else{
 if(_cl.indexOf(_clazz) >= 0){
 return;
 }; 
 _db.className = _db.className + ' ' + _clazz;     
 };  
 };          
 window.attachEvent('onload',_test);
 window.attachEvent('onresize',_test);
 })();
 </script>
 <![endif]--> 
 <link rel="stylesheet" href="css/a.css" type="text/css">
 <link href="list/style/core.css" type="text/css" rel="stylesheet">
 <link href="css/art_bf.css" type="text/css" rel="stylesheet">
 <link href="css/default.css" type="text/css" rel="stylesheet">
 <link href="list/style/cores.css" type="text/css" rel="stylesheet">
 <script type="text/javascript" src="js/jquery.min.js"></script>
 <!--上传视频按钮权限检测  -->
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
 
 </script>
<!-- 验证码 -->
<script type="text/javascript">
  function changeImg() {
    var imgSrc = $("#imgObj");
    var src = imgSrc.attr("src");
    imgSrc.attr("src", chgUrl(src));
  }
  //时间戳   
  //为了使每次生成图片不一致，即不让浏览器读缓存，所以需要加上时间戳   
  function chgUrl(url) {
    var timestamp = (new Date()).valueOf();
    url = url.substring(0, 37);
    if ((url.indexOf("&") >= 0)) {
      url = url + "×tamp=" + timestamp;
    } else {
      url = url + "?timestamp=" + timestamp;
    }
    return url;
  }
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
 <script type="text/javascript">
$(function(){
$(".qqkediv").hover(
	function(){
		$(".qqkediv").animate({
			right:"0"
		},200);
	},
	function(){
		$(".qqkediv").animate({
			right:"-80px"
		},200);
	}
);

})
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
	$('#bg').click(function(){
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
	$('#bg').click(function(){
			$('.theme-popover-mask2').fadeOut(100);
			$('.theme-popover2').slideUp(200);
			$("#bg").css("display","none");
		})
})
function TestBlack(TagName){
			 var obj = document.getElementById(TagName);
			 if(obj.style.display=="block"){
			  obj.style.display = "none";
			 }else{
			  obj.style.display = "block";
			 }
			}
</SCRIPT>
<style type="text/css">
#bg{ display: none;  position: fixed;  top: 0%;  left: 0%;  width: 100%;  height: 100%;  background-color: black;  z-index:1001;  -moz-opacity: 0.7;  opacity:.70;  filter: alpha(opacity=70);}
	body{
		background:#edeff0;	
	}
	.cen_lx{
		width:1200px;
		height:auto;
		margin:0 auto;
		background:#FF0000;
	}
</style>
 </head>  
 <body class="auto-1467597023195-parent">
  <div class="theme-popover">
     <div class="theme-poptit">
          <a href="javascript:;" title="关闭" class="close">×</a>
          <h3>登录	/ <a style="color:black;" class="reg" href="javascript:;">没有帐号去注册</a></h3>
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
     <div class="theme-poptit2">
          <a href="javascript:;" title="关闭" class="close2">×</a>
          <h3>注册	/ <a style="color:black;" class="theme-login" href="javascript:;">已有账号去登录</a></h3>
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

<div class="top_bg">
  <div class="top">
    <div class="top_left">
      <ul>
        <li><a href="/member" rel="nofollow">网站地图</a></li>
        <li><a target="_self" href="javascript:void(0)" onClick="window.external.addFavorite(location.href,document.title)" rel="nofollow">收藏</a></li>
      </ul>
    </div>
    <div class="top_right">
      <ul>
     
        <li>咨询电话：<span style="color:red;">400-859-9335</span></li>
		 <c:choose>
		 <c:when test="${!empty user}">
		 <li style="background:url(u/images/head.png) no-repeat 0px 0px;"><a title="个人中心" href="<%=basePath%>user/pcenter.do?userid=${user.userid}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${user.username}</a></li>
		 <li><a href="">播放记录</a></li>
		 <li style="background:url(u/images/exit.png) no-repeat 1px -1px;" ><a title="退出" href="<%=basePath%>user/exit.do" onclick="javascript:return confirm('您确定要退出吗？')">&nbsp;&nbsp;&nbsp;</a></li>
		</c:when>
		<c:otherwise>
		<li><a class="theme-login" href="javascript:;">登录${msg}</a></li>
		<li><a class="reg" href="javascript:;">注册</a></li>
		</c:otherwise>
		</c:choose>
        <li><a class="up_btn" onclick="user_power()">上传视频</a></li>
      </ul>
    </div>
  </div>
</div>

<div id="bg"></div>
 <div class="g-headwrap">  
	 <div class="g-hd f-bg1 m-yktNav " id="j-topnav"> 
		 <div class="g-flow"> 
			 <div class="f-pr f-cb">
			 <div class="m-logo f-cb">
				 <a class="f-fl" href="/" target="_self"> 
					<img class="f-fl img" src="list/images/logo3.png" title="美学堂" height="47" width="174">
				 </a>
			 </div> 
			 <div class="u-navcatebtn"> <a href="/" target="_blank" class="cbtn" id="j-nav-catebtn"></a> </div> 
			 <div class="f-fr" style="margin-top:25px;"> 
				 <div class="search">
				  <form  method="post" target="_blank" name="formsearch" action="/">
					<div class="search_box">
					  <input type="hidden" name="kwtype" value="0" class="search_bg">
					  <input name="q" id="search-keyword" value="在这里搜索..." onFocus="if(this.value=='在这里搜索...'){this.value='';}"  onblur="if(this.value==''){this.value='在这里搜索...';}" class="search_bg" >
					  <button type="submit" class="search_button">搜 索</button>
					</div>
				  </form>
				</div>
			 </div>
			 <div class="m-nav f-cb j-navFind" style="margin-top:25px;"> 
			  <a class="nitem"  href="<%=basePath%>">首页</a>
		      <a class="nitem"  href="<%=basePath%>pub_course.jsp">公开课</a>
		      <a class="nitem" href="javascript:;">合作伙伴</a><!--<span class="livehot"></span>-->
		      <a class="nitem" href="javascript:;">资讯</a>
			  <a class="nitem"  href="javascript:;">论坛</a>
			  <a class="nitem"  href="<%=basePath%>AboutWe/about.do">关于我们</a>
			</div>
			 </div>
		 </div> 
	 </div> 
 </div>
 
 <div id="advertisement_box" class="advertisement_box f-pf" style="display:none;"></div>
	<div id="main">
<div class="container clearfix">
<div style="margin-bottom:20px;">
		您的当前位置：<a href="/">首页</a> > 关于我们
	 </div>
    <ul class="other-left l">
      <li class="selected">
        <a href="<%=basePath%>AboutWe/about.do"><span>关于我们</span></a>
      </li>
      <li>
         <a href="<%=basePath%>AboutWe/contact.do"><span>联系我们</span></a>
      </li>
      <li>
        <a href="<%=basePath%>AboutWe/mzsm.do"><span>免责申明</span></a>
      </li>
    </ul>
    <div class="other-right">
        <div class="other-right-wrap">
          <div id="pjax-container">
			<div class="us others">
			  <h1>关于我们</h1>
				<dl>
					<dt style="font-size:16px;margin-bottom: 20px;">北京美晨科技有限公司</dt>
					<dd style="line-height:40px; text-indent:2em;">
北京美晨科技有限公司，是国内一家为用户提供在线教育、多元社交的综合性服务提供商，通过搭建在线分享生态链，打造一个以原创视频为核心的社交网络。 美晨人以服务社会、振兴中国软件产业为己任，励精图治，改革创新，开拓进取，经过努力拼搏，取得了令人瞩目的业绩。展望未来，公司将抓住机遇，加大自主产品创新，加快国际化进程，实现规模经济和跨越式发展，成为具有国际竞争力、国际知名度的中国软件旗舰企业，跻身世界软件企业百强，实现“中国教育超级品牌，世界企业一流品质”。
</dd>
				</dl>
				<dl>
					<dt style="font-size:16px;margin-bottom: 20px;">美享厅</dt>
					<dd style="line-height:40px; text-indent:2em;">
美享厅是北京美晨科技有限公司打造的一款金牌项目。上游用户可以在本平台通过上传视频， 用户展示，进行视频分享互动，根据用户播放量进行分红，下游用户可以在本平台通过视频播放，评论探讨，建立用户圈子，美享厅为每一位想真真正正学到些实用知识、技能的学习者，提供贴心的一站式学习服务。 
</dd>
				</dl>
			</div>
          </div>
        </div>
    </div>
</div>
</div>
  <div class="g-ft"> 
		<div class="foot">
		  <div class="wid">
			<div class="fl">
			  <ul>
				<li>
				  <font size="3" color="white"><b><a href="<%=basePath%>AboutWe/about.do">关于我们</a></b></font>
				  <ul>
					<li><a href="<%=basePath%>AboutWe/contact.do" target="_blank">联系我们</a></li>
					<li><a href="/" target="_blank">高薪诚聘</a></li>
				  </ul>
				</li>
				<li>
				  <font size="3" color="white">帮助中心</font>
				  <ul>
					<li><a href="/" target="_blank">我是教师</a></li>
					<li><a href="/" target="_blank">我是学员</a></li>
					<li><a href="<%=basePath%>AboutWe/mzsm.do" target="_blank">免责声明</a></li>
				  </ul>
				</li>
				<li>
				  <font size="3" color="white">网站地图</font>
				  <ul>
					<li><a href="" target="_blank">网站地图</a></li>
				  </ul>
				</li>
			  </ul>
			</div>
			<div class="rl">
				  <p>
					  <a href="/" target="_blank" class="qq"></a>
					  <a target="_blank" class="wx"></a>
					  <a href="/" target="_blank" class="wb"></a>
				  </p>
				<p style="display:none;position: absolute;margin-top:-190px; z-index:99999;" class="wx1"><img src="picture/wx.jpg"></p>
				<h1>400-859-9335</h1>
				<p>友情链接：QQ1132188634</p>
			</div>
			<p class="nl">
				北京美晨科技有限公司/ 北京丰台区马家堡东路立业大厦1406室（地铁角门东站下车300米即到） / 京ICP备16024084号
				<span style="margin-left:220px;"><img src="images/u955.png">&nbsp;<img src="images/u957.jpg"></span>
			</p>
		  </div>
	</div>
 </div>
 <div style="height: auto; position: fixed; z-index: 9999; top: 250px; right: -80px; overflow:hidden;" class="qqkediv">
	<p class=""><img width="105px" title="美晨二维码" alt="美晨二维码" src="picture/hxck.bmp.png" /></p>
	<p class="qqborder f_l"><img title="在线客服" alt="在线客服" src="picture/qqborder.png" /></p>
	<p class="qqke f_l">
	<a target="_blank" title="QQ在线客服" href="tencent://message/?uin=1287402350&Site=&Menu=yes" rel="nofollow">
	<img title="QQ在线客服" alt="QQ在线客服" src="picture/qqke.png" />
	</a>
	</p>
 </div>
 </body>
 </html>