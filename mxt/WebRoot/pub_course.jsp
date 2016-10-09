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
    
    <title>公共课</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<script src="list/js/ga.js" type="text/javascript"></script>
 <script type="text/javascript" src="list/js/json3.js"></script> 
 <script type="text/javascript" src="list/js/message.js"></script>  
 <link href="list/style/core.css" type="text/css" rel="stylesheet">
 <link href="css/default.css" type="text/css" rel="stylesheet">
 <link href="list/style/cores.css" type="text/css" rel="stylesheet">
 <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/zzsc.js"></script>
<link rel="stylesheet" href="css/dl2.css" type="text/css">
 <!-- 验证码 -->
<script type="text/javascript">
/* function play(counseId){
	  $("#counseId").val(counseId);
	  $("#tocourse").submit();
} */
	//跳转个人中心
	function gerenzhongxin(){
		$("#zhongxin").submit();
	}

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
  //按钮事件
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
            //加载所有视频  
           findVByPage(9999,1);
		   //加载菜单
           $.ajax({  
                        type: "POST",  
                        url: "<%=basePath%>/video/findMenus.do",  
                        data: {},  
                        dataType: "json",  
                        success:function(data){
                       	   jQuery.each(data,function(key,value){
                             $("#ke_first").append("<li><a href='javascript:;' onclick='secondhide("+ value.menuid+")'><font id='color_first"+ value.menuid+"'>"+value.menuname+"<font></a></li>"); 
                           });
                           kc_second();
                        
             			}
             		});  
})
                 
                 //二级菜单
                 function kc_second(){
             		 $.ajax({  
                        type: "POST",  
                        url: "<%=basePath%>/video/findFuns.do",  
                        data: {},  
                        dataType: "json",  
                        success:function(data){
                       	   jQuery.each(data,function(key,value){
                       	    $("#kc_second"+value.menuid).append("<li> <span>/&nbsp;&nbsp;</span><a href='javascript:;' onclick='threehide("+ value.funid+")'><font class='color_second' id='color_second"+ value.funid+"'>"+ value.funname+"</font></a> </li>");
                            $("#ffe").append("<ul  style='display: none;' class='kc_three' id='kc_three"+value.funid+"'></ul>");
                           });
                           kc_three();
             			}
             		});  
             }
            	 //三级菜单
            	 function kc_three(){
             		 $.ajax({  
                        type: "POST",  
                        url: "<%=basePath%>/video/findColumns.do",  
                        data: {},  
                        dataType: "json",  
                        success:function(data){
                       	   jQuery.each(data,function(key,value){
                       	    $("#kc_three"+value.funid).append("<li> <a  onclick='findVByColumnID("+value.columnid+")'  href='javascript:;'><font class='color_three'  id='color_three"+value.columnid+"'>"+value.columnname+"</a></li> ");
                           });
             			}
             		}); 
             		<%
             		String menuid2 = request.getParameter("menuid");
             		String funid = request.getParameter("funid");
             		String columnid = request.getParameter("columnid");
             		String menuid = (String)request.getAttribute("menuid");
             		System.out.print("^^menuid^:"+menuid);
             		%>
             		var menuid2 = <%=menuid2%>;
					var menuid = <%=menuid%>;
					if(menuid2==null){
					    if(menuid==null){
					       
					    secondhide(null);
					         }else{
					    secondhide("<%=menuid%>");
							 }
					 }else{
					 secondhide("<%=menuid2%>");
					 }   
					         
             }
             //隐藏和显示二级菜单
             function secondhide(menuid){	
                 for(var i=0;i<6;i++){
                 if(i==menuid){
             				var obj=document.getElementById("kc_second"+menuid);
							var color_first=document.getElementById("color_first"+menuid);
							if(obj.style.display=='none'){
							obj.style.display='block';
							color_first.style.color='red'
							}else{
							obj.style.display='none';
							color_first.style.color='#333';
							}
					}else{  
							var obj=document.getElementById("kc_second"+i);
							obj.style.display='none';
							var color_first=document.getElementById("color_first"+i);
							color_first.style.color='#333';
					}		
				}	
				var funid = <%=funid%>;
				if(funid==null){ threehide(0);}else{threehide("<%=funid%>");}            
             	setTimeout("findVByColumnID(<%=columnid%>)",1000);
             	
             	
             }
             
            
             //隐藏和显示三级菜单
             function threehide(funid){	
                 var arrayObj = new Array();
             		 arrayObj =$(".kc_three");
             	 var  secondcolor= new Array();
             	      secondcolor=$(".color_second");
                for(var i=0;i<arrayObj.length;i++){
                  	arrayObj[i].style.display='none';
					}
				 for(var i=0;i<secondcolor.length;i++){
                  	secondcolor[i].style.color='#333';
					}
				var obj=document.getElementById("kc_three"+funid);
				var second =document.getElementById("color_second"+funid);
				if(obj.style.display=='none'){
				obj.style.display='block';
				second.style.color='red';
				}else{
				obj.style.display='none';
				second.style.color='#333';
				}
				}	     
             		
				function findVByColumnID(columnsID){
				    var columnid = columnsID;
				    var  threecolor= new Array();
             	    threecolor=$(".color_three");
             	    for(var i=0;i<threecolor.length;i++){
                  	threecolor[i].style.color='#333';
					}
					var three =document.getElementById("color_three"+columnid);
					if(three.style.color=='red'){
					three.style.color='#333';
					}else{
					three.style.color='red';
					}
					
					 findVByPage(columnid,1);
				
				}     
				 function findVByPage(columnid,page){
					 window.scrollTo(0,0);
				     $.ajax({  
                        type: "POST",  
                        url: "<%=basePath%>/video/findCounseByCoId.do",  
                        data: {columnid:columnid,page:page},
                        async:false,
                        dataType: "html",  
                        success:function(data){
                             $("#g-mn2").html(data);
             			}
             		}); 
				  
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
</SCRIPT>
<style type="text/css">
.f_l{float:left;}
.qqborder{cursor:pointer;}
#bg{ display: none;  position: fixed;  top: 0%;  left: 0%;  width: 100%;  height: 100%;  background-color: black;  z-index:1001;  -moz-opacity: 0.7;  opacity:.70;  filter: alpha(opacity=70);}
</style>
 </head> 
 <div id="bg"></div> 
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
						 <input class="ipt" style="margin-left:13px;width: 150px;height: 39px;border: 0;font-size:12px;background:rgb(240,240,240);" id="sends" onclick="send()" value="获取验证码" type="button">
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
		</c:when>
		<c:otherwise>
		<li><a class="theme-login" href="javascript:;">登录${msg}</a></li>
		<li><a class="reg" href="javascript:;">注册</a></li>
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
					  <input name="q" id="search-keyword" value="在这里搜索..." onfocus="if(this.value=='在这里搜索...'){this.value='';}"  onblur="if(this.value==''){this.value='在这里搜索...';}" class="search_bg" >
					  <button type="submit" class="search_button">搜 索</button>
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

 <div id="advertisement_box" class="advertisement_box f-pf" style="display:none;"></div>

 <div id="auto-id-1467597023430" class="g-flow f-cb">
 <div style="margin-top:20px;">
		您的当前位置：<a href="/">首页</a> > 公开课
 </div>
 <div id="j-catbox" class="m-catebox f-pr f-cb"> 
 <ul id="ke_first" class="level-1">
	 <li><a href="javascript:;" onclick="secondhide(0)">全部课程</a></li>
	 <!-- <li><a href="/">IT互联网</a></li>
	 <li><a href="/">职场技能</a> </li>
	 <li><a href="/">外语学习</a></li> 
	 <li><a href="/"> 兴趣爱好</a></li>
	 <li><a href="/"> 更多分类</a></li>  -->
 </ul>
 <ul class="level-2" id="kc_second0" style="display: '';">
   <li> <a href="javascript:;"><font id="color_first0">请选择分类</font></a> </li>
 </ul>
 <ul class="level-2" id="kc_second1" style="display: none;">
 <li><a href="javascript:;" ><font  class="color_second"  color="red">全部</font></a></li>
 </ul>
 <ul class="level-2" id="kc_second2" style="display: none;">
 <li><a href="javascript:;"><font class="color_second" color="red">全部</font></a></li>
 </ul>
 <ul class="level-2" id="kc_second3" style="display: none;">
 <li><a href="javascript:;"><font class="color_second" color="red">全部</font></a></li> 
 </ul>
 <ul class="level-2" id="kc_second4" style="display: none;"> 
 <li><a href="javascript:;"><font class="color_second" color="red">全部</font></a></li>
 </ul>
 <ul class="level-2" id="kc_second5" style="display: none;"> 
 <li><a href="javascript:;"><font class="color_second" color="red">全部</font></a></li>
 </ul>
 </div>
 <div class="fe" id="ffe">
	<ul class="kc_three" id="kc_three0" style="display: block;">
<!-- 		 <li> <a href="/">移动开发</a> </li> 
		 <li> <a href="/">Web开发</a> </li>
		 <li> <a href="/">设计制作</a> </li>
		 <li> <a href="/">网络营销</a> </li>  
		 <li> <a href="/">数据库</a> </li>
		 <li> <a href="/">移动开发</a> </li> 
		 <li> <a href="/">Web开发</a> </li>
		 <li> <a href="/">设计制作</a> </li>
 -->		 
	</ul>
 </div>
 <div class="b-20"></div> 
 <div class="g-mn2" id="g-mn2" >
 </div>
 <div class="g-sd2"> 
	<div>
		<div class="u-topTit">最受欢迎讲师</div> 
		<div class="u-sideGray1"> 
			<ul>
				<li>
					<a href="/"><img title="Python 高级工程师，通晓程序语言" src="list/images/6631440500142133834.jpg" alt="Python 高级工程师，通晓程序语言" height="40" width="55">
					<div style="text-align:center;">麻瓜编程</div></a>
				</li>
				<li>
					<a href="/"><img title="Python 高级工程师，通晓程序语言" src="list/images/6631440500142133834.jpg" alt="Python 高级工程师，通晓程序语言" height="40" width="55">
					<div style="text-align:center;">麻瓜编程</div></a>
				</li>
				<li>
					<a href="/"><img title="Python 高级工程师，通晓程序语言" src="list/images/6631440500142133834.jpg" alt="Python 高级工程师，通晓程序语言" height="40" width="55">
					<div style="text-align:center;">麻瓜编程</div></a>
				</li>
				<li>
					<a href="/"><img title="Python 高级工程师，通晓程序语言" src="list/images/6631440500142133834.jpg" alt="Python 高级工程师，通晓程序语言" height="40" width="55">
					<div style="text-align:center;">麻瓜编程</div></a>
				</li>
				<li>
					<a href="/"><img title="Python 高级工程师，通晓程序语言" src="list/images/6631440500142133834.jpg" alt="Python 高级工程师，通晓程序语言" height="40" width="55">
					<div style="text-align:center;">麻瓜编程</div></a>
				</li>
				<li>
					<a href="/"><img title="Python 高级工程师，通晓程序语言" src="list/images/6631440500142133834.jpg" alt="Python 高级工程师，通晓程序语言" height="40" width="55">
					<div style="text-align:center;">麻瓜编程</div></a>
				</li>
			</ul>
			</div> 
	</div> 
	<div class="b-20"></div> 
	<div id="j-rankbox"> 
			<div class="u-topTit"> 
				热门视频排行
			</div>
		<div id="auto-id-1467597023250" class="u-sideGray j-ranklist">
			<div class="u-rankItm f-cb">
				<div class="f-fl"><a href="/" target="_blank" title="和秋叶一起学PPT"><img src="list/images/a_014.jpg" width="80" height="80px"></a> </div>
				<div class="f-fr" style="width:120px;">
					<h3><a href="/">php编程教学</a></h3>
					<p style="margin-top:10px;"><a href="/">视频介绍视频介绍视频介绍介绍视频介绍视频介绍视...</p>
				</div>
			</div> 
			<div class="u-rankItm f-cb"> 
				<a class="f-fl" href="/" target="_blank" title="和阿美一起学信息图表">和阿美一起学信息图表</a>
			</div> 
			<div class="u-rankItm f-cb"> 
				<a class="f-fl" href="/" target="_blank" title="职场精英都在学的手账术">职场精英都在学的手账术</a>
			</div> 
			<div class="u-rankItm f-cb"> 
				<a class="f-fl" href="/" target="_blank" title="英语口语革命">英语口语革命</a>
			</div> 
			<div class="u-rankItm f-cb"> 
				<a class="f-fl" href="/" target="_blank" title="手机摄影达人速成">手机摄影达人速成</a>
			</div> 
			<div class="u-rankItm f-cb">
				<a class="f-fl" href="/" target="_blank" title="和秋叶一起学职场技能">和秋叶一起学职场技能</a>
			</div>
			<div class="u-rankItm f-cb">
				<a class="f-fl" href="/" target="_blank" title="法律检索">法律检索</a> 
			</div>
			<div class="u-rankItm f-cb">
				<a class="f-fl" href="/" target="_blank" title="让你的表格会说话！">让你的表格会说话！</a> 
			</div>   
		</div>
	</div>
	<div id="j-rankbox">
		<img src="images/gge.jpg">
	</div>
	<div id="j-rankbox"> 
			<div class="u-topTit"> 
				常见问题帮助
			</div>
		<div id="auto-id-1467597023250" class="u-sideGray j-ranklist">
			<div class="u-rankItm f-cb"> 
				<a class="f-fl" href="/" target="_blank" title="和阿美一起学信息图表">和阿美一起学信息图表</a>
			</div> 
			<div class="u-rankItm f-cb"> 
				<a class="f-fl" href="/" target="_blank" title="职场精英都在学的手账术">职场精英都在学的手账术</a>
			</div> 
			<div class="u-rankItm f-cb"> 
				<a class="f-fl" href="/" target="_blank" title="英语口语革命">英语口语革命</a>
			</div> 
			<div class="u-rankItm f-cb"> 
				<a class="f-fl" href="/" target="_blank" title="手机摄影达人速成">手机摄影达人速成</a>
			</div> 
			<div class="u-rankItm f-cb">
				<a class="f-fl" href="/" target="_blank" title="和秋叶一起学职场技能">和秋叶一起学职场技能</a>
			</div>
			<div class="u-rankItm f-cb">
				<a class="f-fl" href="/" target="_blank" title="法律检索">法律检索</a> 
			</div>
			<div class="u-rankItm f-cb">
				<a class="f-fl" href="/" target="_blank" title="让你的表格会说话！">让你的表格会说话！</a> 
			</div>   
		</div>
	</div>
		<!--<div class="b-40"></div>
		<a id="j-rightAd" href="/client/download.htm" target="_blank">
			<img src="list/images/6630310202187485145.jpg">
		</a>-->
		<!--右下图片操作-->	
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
				北京美晨科技有限公司/ 北京丰台区马家堡东路立业大厦1406室（地铁角门东站下车300米即到） / 京ICP备16037877号
				
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
