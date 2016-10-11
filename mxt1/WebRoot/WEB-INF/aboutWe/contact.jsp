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
<title>联系我们</title>
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
 <script type="text/javascript" src="js/zzsc.js"></script>
<link rel="stylesheet" href="css/dl2.css" type="text/css">
 <script type="text/javascript">
 
 function op(){
		var se=document.getElementById("pwd")
		var sf=document.getElementById("sf")
		var sf2=document.getElementById("sf2")
		sf2.style.display="block";
		sf.style.display="none";
		se.type="text";
	}function ops(){
		var se=document.getElementById("pwd")
		var sf2=document.getElementById("sf")
		var sf2=document.getElementById("sf2")
		sf.style.display="block";
		sf2.style.display="none";
		se.type="password";
	}
 
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
 function ss(){
		var phone = $("#phone").val();
		if(phone==""){
			$("#msg2").html("手机号不能为空");
			$("#msg2").show();
		/* $("#auto-id-1474190060396").html("<img src='images/false.png' style='margin-right: 10px; vertical-align: middle;' />手机号不能为空"); */
		return;
		}
		if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
		$("#msg2").html("手机号码不正确");
		$("#msg2").show();
		}		
		else{
		$("#msg2").hide();
		}
	}
	
function ss1(){
		var password = $("#pwd").val();
		if(password==""){
		$("#msg4").html("密码不能为空");
		$("#msg4").show();
		return;
		}
		if(password.length<6){
				$("#msg4").html("密码为6-16位");
				$("#msg4").show();
				return;
		}
		if(password.length>16){
			$("#msg4").html("密码为6-16位");
			$("#msg4").show();
				return;
		}
		else{
			$("#msg4").hide();
		}
	}
	
function SetRemainTime() {
		if (curCount == 0) {                
			window.clearInterval(InterValObj);// 停止计时器
			$("#sends").removeAttr("disabled");// 启用按钮
			$("#sends").css("background-color","rgb(240,240,240)");
			$("#sends").val("重新发送验证码");
		}else {
			curCount--;
			$("#sends").val("剩余" + curCount + "秒");
		}
	}	
	
var InterValObj; //timer变量，控制时间
	var count = 120; //间隔函数，1秒执行
	var curCount;//当前剩余秒数
	
function send(){
		var phone = $("#phone").val();
		if(phone==""){
		$("#msg2").html("手机号不能为空");
		$("#msg2").show();
		return;
		}
		if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
			$("#msg2").html("手机号输入不正确");
			$("#msg2").show();
				return;
		}
		curCount = count;
		$("#sends").attr("disabled","true");
		$("#sends").css("background-color","gray");
		$("#sends").val("剩余" + curCount + "秒");
		InterValObj = window.setInterval(SetRemainTime, 1000); // 启动计时器，1秒执行一次
		$.ajax({
			type:"POST",
			url:"<%=basePath%>note/getCode.do?phone="+phone,
			success:function(data){
			}
		})
	}	
	
  $(document).ready(function(){
      $("#loginButton").click(function(){
     	$("#msg1").hide();
      	$("#msg3").hide();
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
           /*  beforeSend:function(){$("#msg1").html("loading...");},    */         
            success:function(data){
            //判断输入是否成功，成功则跳转
            if(""==data) {
            $("#formid").submit();
            } 
            if(data=="用户或手机号不存在"){
             $("#msg1").html(decodeURI(data));  
             $("#msg1").show();          
            }
           	if(data=="密码错误"){
           	$("#msg3").html(decodeURI(data));  
             $("#msg3").show();
          	}
            }           
         });
     }
  
  //初期检查 
  function Check(){
   	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      if($("#username").val()==""){
          //alert("用户名不能为空");
          $("#msg1").html("用户名或手机号不能为空");
          $("#msg1").show();
          $("#username").focus();
          return false;
      }
      if($("#pass").val()=="")
      {
          //alert("密码不能为空");
          $("#msg3").html("密码不能为空");
          $("#msg3").show();
          $("#pass").focus();
          return false;
      }
     return true;
  }
  
 </script>
<!-- jquery注册 -->
<script language='javascript'>
  $(document).ready(function(){
      $("#registerButton").click(function(){
      	$("#msg2").hide();
      	$("#msg4").hide();
      	$("#msg5").hide();
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
  		var yzcode = $("#index_code").val();
  		var phone = $("#phone").val();
        $.ajax({
            type:"POST",
            url:"<%=basePath%>/user/userRegister.do",
            data:{phone:$("#phone").val(),pwd:$("#pwd").val(),yzcode:yzcode},
            /* beforeSend:function(){$("#msg2").html("loading...");},      */       
            success:function(data){
            //判断输入是否成功，成功则跳转
            if("" == data) {
            $("#registerform").submit();
           /*  $("#msg2").html("注册成功！"); */
            } 
            if(decodeURI(data)=="该手机号已经被注册！"){
             $("#msg2").html(decodeURI(data)); 
             $("#msg2").show();         
            }
            if(decodeURI(data)=="验证码错误！"){
            $("#msg5").html(decodeURI(data)); 
             $("#msg5").show(); 
            }
            }           
         });
     }
  
  //注册初期检查 
  function Check2(){
  var yzcode = $("#index_code").val();
  var phone = $("#phone").val();
   var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      if($("#phone").val()==""){
          //alert("用户名不能为空");
          $("#msg2").html("手机号不能为空");
          $("#msg2").show();
          $("#phone").focus();
          return false;
      }
      if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
				$("#msg2").html("手机号码不正确");
				 $("#msg2").show();
				return;
	  }
      if($("#pwd").val()=="")
      {
          //alert("密码不能为空");
          $("#msg4").html("密码不能为空");
          $("#msg4").show();
          $("#pwd").focus();
          return false;
      }
      if($("#pwd").val().length<6){
			$("#msg4").html("密码为6-16位");
			$("#msg4").show();
				return;
		}
	  if($("#pwd").val().length>16){
			$("#msg4").html("密码为6-16位");
			$("#msg4").show();
				return;
		}
		
	if(yzcode==""){
		$("#msg5").html("验证码不能为空");
		$("#msg5").show();
			return;
		}
		if(yzcode.length<6){
			$("#msg5").html("验证码格式不正确");
			$("#msg5").show();
			return;
		}
			
	if($("#sends").val()=="重新发送验证码"){
		$("#msg5").html("验证码过期，请重新发送");
		$("#msg5").show();
		return;
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
          <h3 style="font: 12px/1 瀹嬩綋,Microsoft Yahei,arial,simhei;">登录	/ <a style="color:black;" class="reg" href="javascript:;">没有帐号去注册</a></h3>
     </div>
     <div class="theme-popbod dform">
           <form class="theme-signin" name="loginform" id="formid" action="user/get.do" method="post">
                <ol>
                     <li>
						<input class="ipt"  style="width: 300px;" name="username" type="text" maxlength="37" id="username" placeholder="请输入登录用户名/手机号" name="log" value="" size="20" />
						<p style="color:red;display: none" id="msg1"  class="psj">请输入正确的邮箱或手机号</p>
					 </li>
                     <li>
						<input class="ipt" style="width: 300px;" id="pass" maxlength="16" name="password"  type="password" placeholder="6-16位密码，区分大小写，不能用空格" value="" size="20" />
						<p style="color:red;display: none" id="msg3" class="psj2">密码错误请重新输入</p>
					 </li>
					 <li>
						<label style="color: #787d82;"><input checked="checked" type="checkbox" class="fe"/>下次自动登录</label>
						<a href="fog/index.jsp" class="fog" target="_blank">忘记密码 </a>
					 </li>
                     <li><input id="loginButton" class="btn btn-primary" type="button" name="button" value=" 登 录 " /></li>
					 <li>
						<p>
							<span class="" style="color:#666">其他方式登录</span>
							<div class="dsl">
								<a class="j-wx" target="_self"></a>
								<a class="j-wb" target="_self"></a>
								<a class="j-qq" target="_self"></a>
							</div>
						</p>
					 </li>
                </ol>
           </form>
     </div>
</div>
<div class="theme-popover2">
     <div class="theme-poptit2">
          <a href="javascript:;" title="关闭" class="close2">×</a>
          <h3 style="font: 12px/1 瀹嬩綋,Microsoft Yahei,arial,simhei;">注册	/ <a style="color:black;" class="theme-login" href="javascript:;">已有账号去登录</a></h3>
     </div>
     <div class="theme-popbod dform">
           <form class="theme-signin" id="registerform" name="registerform" action="user/okRegister.do"  method="post">
                <ol>
                     <li>
						<input class="ipt" style="width: 300px;" type="text" onblur="ss()" id="phone" maxlength="37" placeholder="请输入注册手机号" name="phone" value="" size="20" />
						<p style="color:red;display: none" class="psj3" id="msg2">请输入正确的邮箱或手机号</p>
					 </li>
                     <li>
						<input class="ipt" style="width: 300px;" onblur="ss1()" id="pwd" type="password" maxlength="16" placeholder="6-16位密码，区分大小写" name="pwd" value="" size="20" />
						<a id="sf" style="color: #787d82;float:right;margin-top:5px;" href="javascript:op();">显示密码</a>
						<a id="sf2" href="javascript:ops();"  style="color: #787d82;float:right;margin-top:5px;display:none;">隐藏密码</a>
						<div style="clear:both;"></div>
						<p style="color:red;margin-top: -25px;display: none" class="psj3" id="msg4">请重新输入</p>
					</li>
                     <li>
						<input class="ipt" placeholder="手机动态码" id="index_code" type="" style="width: 130px;" size="7" />
						 <input class="ipt" style="margin-left:13px;width: 131px;height: 39px;border: 0;font-size:12px;background:rgb(240,240,240);" id="sends" onclick="send()" value="获取验证码" type="button">
						 <p style="color:red;margin-top: 0px;display: none" class="psj3" id="msg5">请重新输入</p>
					 </li>
                     <li><input class="btn btn-primary" id="registerButton" type="button" name="button" value=" 注 册 " /></li>
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
		您的当前位置：<a href="/">首页</a> > 联系我们
	 </div>
    <ul class="other-left l">
      <li>
        <a href="<%=basePath%>AboutWe/about.do"><span>关于我们</span></a>
      </li>
      <li class="selected">
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
			  <h1>联系我们</h1>
					<h2>市场合作:</h2>
					<p>接受企业战略合作、商务合作及课程合作，媒体采访沟通。</p>
					
					<p>招商电话：18210195948</p>

					<p>商务渠道合作：zhangruhui@meiyx.cn</p>
					
					<h2>产品中心:</h2>
					
					<p>接受用户对产品的核心需求和反馈建议，期待提供最棒的用户体验给大家。</p>

					<p>产品需求建议：changjinhui@meiyx.cn</p>
			
					<h2>客户服务:</h2>

					<p>受理美享厅客户问题，包括产品咨询、投诉受理、建议反馈，以及购买帮助等。</p>

					<p>Email：kefu@meiyx.cn</p>

					<p>联系方式：400-8599-335 </p>
	
					<h2>美享厅公众平台：</h2>

					<p>关注官方平台，第一时间获取最新最实战的开发课程和优惠活动哦！</p>

					<p>扫一扫，立刻关注微信：</p>
					
					<p><img src="images/wx.jpg" alt="" /></p>
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
				  <font size="3" color="white"><b><a href="<%=basePath%>AboutWe/about.do"><span>关于我们</span></a></b></font>
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