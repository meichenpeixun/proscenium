<%@page import="com.mxt.entity.Video"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html>
  <head>
    <base href="<%=basePath%>">
<title> ${counse.couseTitle}</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<meta name="Keywords" content="">
<meta name="description" content="">
<link rel="stylesheet" href="css/moco.css" type="text/css">
<link rel="stylesheet" href="css/ast.css" type="text/css">
<link href="list/style/core.css" type="text/css" rel="stylesheet">
 <link href="list/style/cores.css" type="text/css" rel="stylesheet">
<script type="text/javascript" src="js/jquery.min.js"></script>
<<<<<<< HEAD
<!-- <script type="text/javascript">
	$(document).ready(function(){
	  $(".chapter-info").hover(function(){
	   alert('x');
		});
	 }); -->

 <script language='javascript'>
 $('#searchLecSubmit').bind('click',checkLecform);
	function checkLecform(){
		if ($("#searchLec").val()=="" || $("#searchLec").val()=="在这里搜索..."){
			$("#searchLec").val("在这里搜索...");
			return false;
		} else {
			
			return false;
		}
		return false;
	};
	$("#searchLec").live("click",function(){
		if ($("#searchLec").val()=="" || $("#searchLec").val()=="在这里搜索..."){
			$("#searchLec").val("");
		}
	$("#searchLec").attr("style","color:#000000;background:white;");
	});
	$("#searchLec").live("blur",function(){
		if ($("#searchLec").val()==""){
			$("#searchLec").val("在这里搜索...");
			$("#searchLec").attr("style","color:#c9c9c9;"); 
		}
	});
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
 <!-- jquery登录 -->
 <script language='javascript'>
//跳转个人中心
	function gerenzhongxin(){
		$("#zhongxin").submit();
	}

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
  function paly(counseId){
	  $("#counseId").val(counseId);
	  $("#tocourse").submit();
  }
 </script>
<script type="text/javascript">
 		/* function playVe(videoid){
 			onclick="javascript:window.open('video/playV.do?counseId='${counse.coursedId}+'&videoid='+videoid')"windows.open("video/playV.do?counseId="${counse.coursedId}+"&videoid="+videoid); 
 		} */
 		function playVedo(){
 		 videoid =$("#div1 div:first-child").text();
 		if(videoid==""){
 			videoid =$("#div2 div:first-child").text()
 			 if(videoid==""){
 				videoid =$("#div3 div:first-child").text()
 				 if(videoid==""){
 	 				videoid =$("#div4 div:first-child").text()
 	 			 }
 			 }
 		}
 		if(videoid!=""){
 			window.open("video/playV.do?counseId="+${counse.coursedId}+"&videoid="+videoid);
 		/* $("#videoid").val(videoid)
 		$("#playV").submit(); */
 		}else{
 			alert("此课程下暂无视频！");
 		}
 		}
 		
		$(document).ready(function(){
			$(".video").css('display','block'); 
		})
		function TestBlack(TagName){
			 var obj = document.getElementById(TagName);
			 if(obj.style.display=="block"){
			  obj.style.display = "none";
			 }else{
			  obj.style.display = "block";
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
</script>
<style type="text/css">
	body {
    min-width: 960px;
    padding: 0px 0 0px 0;
    position: relative;
    height: auto;
    min-height: 100%;
	background-color: white;
}#canvas{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
.blur {
		-webkit-filter: blur(10px);
		-moz-filter: blur(10px);
		-ms-filter: blur(10px);    
        filter: blur(10px);
		filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=0, MakeShadow=false); 
}#bg{ display: none;  position: fixed;  top: 0%;  left: 0%;  width: 100%;  height: 100%;  background-color: black;  z-index:1001;  -moz-opacity: 0.7;  opacity:.70;  filter: alpha(opacity=70);}
.bfrs div{float:left;margin-right:20px;}
.bm{background:url(images/img.png) no-repeat -58px -171px;height:82px;width:54px;}
.sqfq{background:url(images/img.png) no-repeat -57px -87px;height:82px;width:54px;}
.zxjy{background:url(images/img.png) no-repeat -59px -2px;height:82px;width:54px;}
.bm:hover{background:url(images/img.png) no-repeat 0 -169px;height:82px;width:54px;}
.sqfq:hover{background:url(images/img.png) no-repeat 0 -84px;height:82px;width:54px;}
.zxjy:hover{background:url(images/img.png) no-repeat 0 0;height:82px;width:54px;}

</style>
</head>
<body>
<div id="bg"></div>
<div id="main">
 <div class="theme-popover">
     <div class="theme-poptit">
          <a href="javascript:;" title="关闭" class="close">×</a>
          <h3>登录	/ <a style="color:black;" class="reg" href="javascript:;">没有帐号去注册</a></h3>
     </div>
     <div class="theme-popbod dform">
           <form class="theme-signin" id="formid" name="loginform" action="user/get.do" method="post">
                <ol>
                     <li><h4><font id="msg1" color="red">你必须先登录！</font></h4></li>
                     <input type="hidden" name="counseId" id="counseID" value="${counse.coursedId}"/>
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
=======
<script type="text/javascript" src="js/zzsc.js"></script>
<link rel="stylesheet" href="css/dl2.css" type="text/css">
<!-- <script type="text/javascript">
	$(document).ready(function(){
	  $(".chapter-info").hover(function(){
	   alert('x');
		});
	 }); -->

 <script language='javascript'>
 
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
 
 $('#searchLecSubmit').bind('click',checkLecform);
	function checkLecform(){
		if ($("#searchLec").val()=="" || $("#searchLec").val()=="在这里搜索..."){
			$("#searchLec").val("在这里搜索...");
			return false;
		} else {
			
			return false;
		}
		return false;
	};
	$("#searchLec").live("click",function(){
		if ($("#searchLec").val()=="" || $("#searchLec").val()=="在这里搜索..."){
			$("#searchLec").val("");
		}
	$("#searchLec").attr("style","color:#000000;background:white;");
	});
	$("#searchLec").live("blur",function(){
		if ($("#searchLec").val()==""){
			$("#searchLec").val("在这里搜索...");
			$("#searchLec").attr("style","color:#c9c9c9;"); 
		}
	});
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
 <!-- jquery登录 -->
 <script language='javascript'>
//跳转个人中心
	function gerenzhongxin(){
		$("#zhongxin").submit();
	}
	
	
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
  
  function paly(counseId){
	  $("#counseId").val(counseId);
	  $("#tocourse").submit();
  }
 </script>
<script type="text/javascript">
 		/* function playVe(videoid){
 			onclick="javascript:window.open('video/playV.do?counseId='${counse.coursedId}+'&videoid='+videoid')"windows.open("video/playV.do?counseId="${counse.coursedId}+"&videoid="+videoid); 
 		} */
 		function playVedo(){
 		 videoid =$("#div1 div:first-child").text();
 		if(videoid==""){
 			videoid =$("#div2 div:first-child").text()
 			 if(videoid==""){
 				videoid =$("#div3 div:first-child").text()
 				 if(videoid==""){
 	 				videoid =$("#div4 div:first-child").text()
 	 			 }
 			 }
 		}
 		if(videoid!=""){
 			window.open("video/playV.do?counseId="+${counse.coursedId}+"&videoid="+videoid);
 		/* $("#videoid").val(videoid)
 		$("#playV").submit(); */
 		}else{
 			alert("此课程下暂无视频！");
 		}
 		}
 		
		$(document).ready(function(){
			$(".video").css('display','block'); 
		})
		function TestBlack(TagName){
			 var obj = document.getElementById(TagName);
			 if(obj.style.display=="block"){
			  obj.style.display = "none";
			 }else{
			  obj.style.display = "block";
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
</script>
<style type="text/css">
	body {
    min-width: 960px;
    padding: 0px 0 0px 0;
    position: relative;
    height: auto;
    min-height: 100%;
	background-color: white;
}#canvas{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
.blur {
		-webkit-filter: blur(10px);
		-moz-filter: blur(10px);
		-ms-filter: blur(10px);    
        filter: blur(10px);
		filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=0, MakeShadow=false); 
}#bg{ display: none;  position: fixed;  top: 0%;  left: 0%;  width: 100%;  height: 100%;  background-color: black;  z-index:1001;  -moz-opacity: 0.7;  opacity:.70;  filter: alpha(opacity=70);}
.bfrs div{float:left;margin-right:20px;}
.bm{background:url(images/img.png) no-repeat -58px -171px;height:82px;width:54px;}
.sqfq{background:url(images/img.png) no-repeat -57px -87px;height:82px;width:54px;}
.zxjy{background:url(images/img.png) no-repeat -59px -2px;height:82px;width:54px;}
.bm:hover{background:url(images/img.png) no-repeat 0 -169px;height:82px;width:54px;}
.sqfq:hover{background:url(images/img.png) no-repeat 0 -84px;height:82px;width:54px;}
.zxjy:hover{background:url(images/img.png) no-repeat 0 0;height:82px;width:54px;}

</style>
</head>
<body>
<div id="bg"></div>
<div id="main">
 <%-- <div class="theme-popover">
     <div class="theme-poptit">
          <a href="javascript:;" title="关闭" class="close">×</a>
          <h3>登录	/ <a style="color:black;" class="reg" href="javascript:;">没有帐号去注册</a></h3>
     </div>
     <div class="theme-popbod dform">
           <form class="theme-signin" id="formid" name="loginform" action="user/get.do" method="post">
                <ol>
                     <li><h4><font id="msg1" color="red">你必须先登录！</font></h4></li>
                     <input type="hidden" name="counseId" id="counseID" value="${counse.coursedId}"/>
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
</div> --%>

<div class="theme-popover">
     <div class="theme-poptit">
          <a href="javascript:;" title="关闭" class="close">×</a>
          <h3 style="font: 12px/1 瀹嬩綋,Microsoft Yahei,arial,simhei;">登录	/ <a style="color:black;" class="reg" href="javascript:;">没有帐号去注册</a></h3>
     </div>
     <div class="theme-popbod dform">
           <form class="theme-signin" name="loginform" id="formid" action="user/get.do" method="post">
                <ol>
                     <li>
						<input class="ipt"  name="username" type="text" maxlength="37" id="username" placeholder="请输入登录用户名/手机号" name="log" value="" size="20" />
						<p style="color:red;display: none" id="msg1"  class="psj">请输入正确的邮箱或手机号</p>
					 </li>
                     <li>
						<input class="ipt" id="pass" maxlength="16" name="password"  type="password" placeholder="6-16位密码，区分大小写，不能用空格" value="" size="20" />
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
						<input class="ipt" type="text" onblur="ss()" id="phone" maxlength="37" placeholder="请输入注册手机号" name="phone" value="" size="20" />
						<p style="color:red;display: none" class="psj3" id="msg2">请输入正确的邮箱或手机号</p>
					 </li>
                     <li>
						<input class="ipt" onblur="ss1()" id="pwd" type="password" maxlength="16" placeholder="6-16位密码，区分大小写" name="pwd" value="" size="20" />
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

>>>>>>> refs/remotes/origin/master
<!--  <div class="top_bg">
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
		<li><a class="theme-login" href="javascript:;">登录</a></li>
		<li><a href="">登录</a></li>
		<li><a class="reg" href="javascript:;">注册</a></li>
		<li><a href="">播放记录</a></li>
        <li><a class="up_btn" href="">上传视频</a></li>
      </ul>
    </div>
  </div>
</div> -->
  <div class="top_bg">
  <div class="top">
    <div class="top_left">
      <ul>
        <li><a href="/member" rel="nofollow">网站地图</a></li>
        <li><a target="_self" href="javascript:void(0)" onclick="window.external.addFavorite(location.href,document.title)" rel="nofollow">收藏</a></li>
      </ul>
    </div>
    <div class="top_right">
      <ul>
        <li>咨询电话：<span style="color:red;">400-859-9335</span></li>
		 <c:choose>
		 <c:when test="${!empty user}">
		 <li style="background:url(u/images/head.png) no-repeat 0px 0px;"><a title="个人中心" href="javascript:;" onclick="gerenzhongxin()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${user.username}</a></li>
		 <li><a href="">播放记录</a></li>
		 <li style="background:url(u/images/exit.png) no-repeat 1px -1px;"><a href="<%=basePath%>user/exit.do" >&nbsp;&nbsp;&nbsp;</a></li>
		<li><a class="up_btn" href="javascript:;"  onclick="user_power()">上传视频</a></li>
		</c:when>
		<c:otherwise>
		<li><a class="theme-login" href="javascript:;">登录${msg}</a></li>
		<li><a class="reg" href="javascript:;">注册</a></li>
		<li><a class="up_btn" href="javascript:;"  onclick="user_power()">上传视频</a></li>
		</c:otherwise>
		</c:choose>
      </ul>
        <form  method="post" id="zhongxin" action="user/pcenter.do">
		<input type="hidden" name="userid" value="${user.userid}"/>
		<input type="hidden" name="username" value="${user.username}"/>
		</form>
    </div>
  </div>
</div>
 
<div class="g-headwrap">  
	 <div class="g-hd f-bg1 m-yktNav " id="j-topnav"> 
		 <div class="g-flow"> 
			 <div class="f-pr f-cb">
			 <div class="m-logo f-cb">
				 <a class="f-fl" href="/" target="_self" > 
					<img class="f-fl img" src="list/images/logo3.png" title="美享厅" height="47" width="174">
				 </a>
			 </div> 
			 <div class="u-navcatebtn"> <a href="/" target="_blank" class="cbtn" id="j-nav-catebtn"></a> </div> 
			 <div class="f-fr" style="margin-top:25px;"> 
				 <div class="search">
				  <form  method="post" target="_blank" name="formsearch" action="/">
					<div class="search_box">
					  <input type="hidden" name="kwtype" value="0" class="search_bg">
					  <input name="q" id="searchLec" value="在这里搜索..." onfocus="if(this.value=='在这里搜索...'){this.value='';}"  onblur="if(this.value==''){this.value='在这里搜索...';}" class="search_bg" >
					  <button id="searchLecSubmit" type="submit" class="search_button">搜 索</button>
					</div>
				  </form>
				</div>
			 </div>
			 <div class="m-nav f-cb j-navFind" style="margin-top:25px;"> 
				 <a class="nitem" href="<%=basePath%>">首页</a>
      			 <a class="nitem" href="<%=basePath%>pub_course.jsp">公开课</a>
				 <a class="nitem" href="javascript:;">合作伙伴</a>
				 <a class="nitem" href="javascript:;">资讯</a>
				 <a class="nitem" href="javascript:;">论坛</a>
				 <a class="nitem" href="<%=basePath%>AboutWe/about.do">关于我们</a>
			</div>
			 </div>
		 </div> 
	 </div> 
 </div>
<div class="course-infos">
    <div class="w pr">
        <div class="path" >  
            <a href="javascript:;">课程</a>
                        <i class="path-split">\</i><a href="javascript:;">${fun.funname}</a>
                                    <i class="path-split">\</i><a href="javascript:;">${columns.columnname}</a>
                        <i class="path-split">\</i><a href="javascript:;"><span>${counse.couseTitle}</span></a>
        </div>
        <div class="hd clearfix">
            <h2 class="l" style="display: block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 400px;font-size: 30px;">${counse.couseTitle}</h2>
                    </div>

        <div class="statics clearfix">
            
                        <a href="javascript:;" class="J-learn-course"><button class="moco-btn l learn-btn green-btn red-btn" onclick="playVedo()">开始学习</button></a>
                        
            
                        
            <div class="static-item l">
                <span class="meta">学习人数</span>
                <span class="meta-value js-learn-num">${allvideoClick}</span>
                            </div>
            <div class="static-item l">
                <span class="meta">难度级别</span>
                <c:choose>
                <c:when test="${counse.level==1}">
                <span class="meta-value">中级</span>
                </c:when>
                <c:when test="${counse.level==2}">
                <span class="meta-value">高级</span>
                </c:when>
                <c:otherwise>
                <span class="meta-value">初级</span>
                </c:otherwise>
                </c:choose>
                <em></em>
            </div>
            <div class="static-item l">
                <span class="meta">视频总数</span>
                <span class="meta-value"> ${videocount}</span>
                <em></em>
            </div>
       
            
        </div>
<script>
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"2","bdSize":"32"},"share":{},
"image":{"viewList":["weixin","qzone","tsina"],"viewText":"分享到：","viewSize":"16"}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>

        <div class="extra">
            <div class="share-action r bdsharebuttonbox bdshare-button-style0-16">
                <a title="分享到微信" href="javascript:;" style="text-indent: 0em;" data-cmd="weixin" class="share wx js-share icon-share-weichat"></a>
                <a title="分享到QQ空间" href="#" data-cmd="qzone" style="text-indent: 0em;" class="share qq js-share icon-share-qq"></a>
                <a title="分享到新浪微博" href="#" data-cmd="tsina" style="text-indent: 0em;" class="share sina js-share icon-share-weibo"></a>
            </div>
        </div>
    </div>
    <div class="info-bg" id="js-info-bg">
		 <canvas class="blur" id="canvas" height="212" width="1349"></canvas>
			<script>  
				var canvas = document.getElementById("canvas"),  
					r = 10,  
					ctx = canvas.getContext("2d"),  
					img = new Image();  
					img.src = "images/kclb_top.png";  
					img.onload = function() {  
					  ctx.drawImage(img, 0,-80,1349,412);  
					}  
			</script>  
	</div> 
</div>


<div class="course-info-main clearfix w">
    <div class="content-wrap">
        <div class="content">
                        <!-- 课程简介 -->
            <div class="course-brief">
                <p class="auto-wrap">${counse.couseDes}</p>
            </div>
            <!-- 课程简介 end -->
            <div class="mod-tab-menu ">
	<ul class="course-menu clearfix">
		<li><a class="ui-tabs-active active" id="learnOn" href="javascript:;"><span>课程章节</span></a></li>
	<!--	<li><a id="commentOn" class="" href="javascript:;"><span>评论</span></a></li>
	 	<li><a id="qaOn" class="" href="javascript:;"><span>问答</span></a></li>
		<li><a id="noteOn" class="" href="javascript:;"><span>笔记</span></a></li> -->
	    <!--
        <li><a id="wikiOn" class="" href="/wiki/22">WIKI</a></li>
        -->
	</ul>
	</div><!-- 课程面板 -->
            <!-- 课程章节 -->
            <div class="mod-chapters">
      <!-- -----------********--------------------- --> 
              <%int i=1; %>                                
             <c:forEach items="${chapters}" var="chapter">                         
            <div class="chapter  chapter-active">
                    <!-- 章节标题 -->
                    <h3 onclick="TestBlack('div<%=i%>');">
                        <span class="icon-drop_down js-close js-open"></span>
                        <strong>
                            <i class="icon-chapter"></i>
                          ${chapter.chapterName}
                            <!-- <div class="icon-info chapter-info">
                                <i class="icon-drop_up triangle">
                                    <div class="chapter-introubox">
                                        <div class="chapter-content">掌握右下角广告原理，如何定位及多媒体文件的使用。</div>
                                    </div>
                                </i>
                            </div> -->
                        </strong>
                        
                    </h3>
                    <!-- 章节标题 end -->
                    <!-- 章节小节 -->       
                                        <ul id="div<%=i %>" class="video">
                                             <%i++; %>   
                                              
                                             <c:forEach items="${videos}" var="video"> 
                                             <c:choose>
                                             <c:when test="${video.chapterId==chapter.chapterId}">
                                             <div style="display: none;">${video.videoid}</div>
                                             <li>
                                             <a href="javascript:;" class="J-media-item">
		                                     <i class="icon-video type" ></i>
		                                     ${video.title}
			                                 <button class="r moco-btn moco-btn-red preview-btn" onclick="javascript:window.open('video/playV.do?counseId=${counse.coursedId}&videoid=${video.videoid}')">开始学习</button>
			                                 </a>
			                                 </li>
			                                 </c:when>
			                                 </c:choose>
                                             </c:forEach>
                                            </ul>
                                        <!-- 章节小节 end -->
                </div>                            
                                       
                </c:forEach>                    
                
                
           <!-- ----------*******-------------- -->     
   
             </div>
<!--             课程章节 end -->
        </div><!--content end-->
        <div class="aside r">
            <div class="bd">
        <div class="box mb40">
        <h4>课程讲师</h4>
                        <div class="teacher-info">
							<a href="javascript:;" target="_blank">
								<img userid="100329" class="js-dialog" src="images/528abd50000195b120422848-80-80.jpg" height="80" width="80">
							</a>
							<span class="tit">
								<a href="javascript:;" target="_blank">vivian</a>
							</span>
							<span class="job">Web前端工程师</span>
						</div>
						<div class="bfrs">
								<a href="javascript:;"><div class="bm"></div></a>
								<a href="javascript:;"><div class="sqfq"></div></a>
								<a href="javascript:;"><div class="zxjy"></div></a>
							</div>
							<div class="clear"></div>
						
                <!--         <div class="course-info-tip">
                        								<dl class="first">
                        									<dt>课程须知</dt>
                        									<dd class="autowrap">您至少具备HTML/CCS、JavaScript基础知识。</dd>
                        								</dl>
                        								<dl>
                        									<dt>老师告诉你能学到什么？</dt>
                        									<dd class="autowrap">1. 掌握广告特效原理；
                        									2. 学会根据需要进行广告定位；
                        									3. 学会添加不同素材文件；
                        									4. 学会广告伸缩效果</dd>
                        								</dl>
                                            </div> -->
            </div>
    
<div class="box  mb40">
    <h4>相关学习路径</h4>
    <ul class="other-list">
                <li>
            <a href="javascript:;" target="_blank">
                <span class="name autowrap">前端经典案例集萃之 &amp;quot;网页常用特效&amp;quot;</span>
            </a>
        </li>
            </ul>
</div>

<div class="box  mb40">
    <h4>推荐课程</h4>
    <ul class="other-list">
                <li>
            <a href="javascript:;" target="_blank">
                <span class="name autowrap">JavaScript入门篇</span>
            </a>
        </li>
                <li>
            <a href="javascript:;" target="_blank">
                <span class="name autowrap">JavaScript进阶篇</span>
            </a>
        </li>
                <li>
            <a href="javascript:;" target="_blank">
                <span class="name autowrap">JavaScript深入浅出</span>
            </a>
        </li>
                <li>
            <a href="javascript:;" target="_blank">
                <span class="name autowrap">形形色色的下拉菜单</span>
            </a>
        </li>
                <li>
            <a href="javascript:;" target="_blank">
                <span class="name autowrap">JS动画效果</span>
            </a>
        </li>
            </ul>
</div>

</div>        </div>
    </div>
    <div class="clear"></div>

</div>
<!-- 视频介绍 -->

</div>

<div id="footer">
    <div class="waper">
        <div class="footerwaper clearfix">
            <div class="followus r">
                <a class="followus-weixin" href="#" title="微信">
                    <div class="flw-weixin-box"></div>
                </a>
                <a class="followus-weibo" href="http://www.weibo.com/meixt16" target="_blank" title="新浪微博"></a>
                <a class="followus-qzone" href="#" title="QQ空间"></a>
            </div>
            <div class="footer_intro l">
                <div class="footer_link">
                    <ul>
                        <li><a href="http://www.meixt.cn" target="_blank">网站首页</a></li>
                        <li><a href="javascript:;" target="_blank">人才招聘</a></li>
                        <li><a href="javascript:;" target="_blank">联系我们</a></li>
                        <li><a href="javascript:;" target="_blank">合作专区</a></li>
                        <li><a href="javascript:;" target="_blank">关于我们</a></li>
                        <li> <a href="javascript:;" target="_blank">讲师招募</a></li>
                        <li> <a href="javascript:;" target="_blank">意见反馈</a></li>
                        <li> <a href="javascript:;" target="_blank">友情链接</a></li>
                    </ul>
                </div>
                <p>Copyright © 2016 meixt.cn All Rights Reserved | 京ICP备16037877号</p>
            </div>
        </div>
    </div>
</div>


<!-- <div id="J_GotoTop" class="elevator">

    <a href="" class="elevator-msg" title="意见反馈"><i class="icon-feedback"></i></a>
    <a href="javascript:" class="elevator-weixin" id="js-elevator-weixin" title="官方微信">
      <i class="icon-wxgzh"></i>
      <div class="elevator-weixin-box"></div>
    </a>
    <a href="javascript:void(0)" class="elevator-top no-goto" style="" title="返回顶部" id="backTop"><i class="icon-up2"></i></a>
</div> -->
<%-- <form action="video/playV.do" method="post" target="_blank" id="playV">
<input type="hidden" name="counseId" id="counseId" value="${counse.coursedId}"/>
<input type="hidden" name="videoid" id="videoid" value=""/>
</form> --%>
</body>
</html>
