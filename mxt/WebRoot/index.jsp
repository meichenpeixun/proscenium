<%@page import="com.mxt.entity.Video"%>
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
    
    <title>美享厅</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="" />
<meta name="keywords" content="" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="css/atip.css" />
<link href="css/default.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="css/zzsc.css" type="text/css">
<link rel="stylesheet" href="css/dl.css" type="text/css">
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/zzsc.js"></script>
<script src="js/slider.js"></script>
<style type="text/css">
.f_l{float:left;}
.qqborder{cursor:pointer;}
.search_bg {
    background: none;
    border: none;
    margin-left: 10px;
    font-size: 14px;
    width: 336px;
    height: 40px;
    padding: 0px 2px;
    color: #ccc;
}
</style>
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
	}	
	
     return true;
  }
  /* function play(counseId){
	  $("#counseId").val(counseId);
	  $("#tocourse").submit();
  } */
 </script>
<script type="text/javascript">
function kc_first(){
				
				/*	<li class="mod-nav__li js-mod-category">
			<div class="mod-nav__wrap-nav-first" >
			<div class="mainProNav" style="background:#83888c;">
			
			<!-- <i class="icon-nav-arrow-right"> </i> -->
				<dl class="navM1">
					<dd class="l_1">
						<div class="jj">
							<div class="l1_1"><h3 class="STYLE4">服务器</h3></div>
							<ul class="jjz">
								<li><a href="/">linux</a><span class="ml10 mr10">/</span></li>
							</ul>
						</div>
					</dd>
					<dt><a href="/">Web开发 · 编程语言</a></dt>
					<ul class="a">
						<li><a href="">移动开发</a></li>
						<li><a href="">前端开发</a></li>
						<li><a href="">后端开发</a></li>
					</ul>
				</dl>
			</div>
			</div>
			</li>	 */
    //查询所有菜单

    	 $.ajax({  
                        type: "POST",  
                        url: "<%=basePath%>/video/findMenus.do",  
                        data: {},  
                        dataType: "json",  
                        success:function(data){
                        	var i=1;
                       	   jQuery.each(data,function(key,value){
                             $("#ke_first").append(
                             "<li class='mod-nav__li js-mod-category'>"+
							 "<div class='mod-nav__wrap-nav-first' >"+
							 "<div class='mainProNav' style='background:#83888c;'>"+
				             "<dl class='navM1'>"+
					         "<dd  class='l_"+i+"' id='kc_second"+value.menuid+"'>"+
					        "</dd>"+
					        "<dt><a href='video/head_pub.do?menuid="+value.menuid+"\'>"+value.menuname +"</a></dt>"+
					        "<ul class='a' id='pkc_second"+value.menuid+"'>"+
						    "</ul>"+
				            "</dl>"+
			                "</div>"+
							"</div>"+
							"</li>"); 
                             i++;
                           });
                           kc_second();
                        
             			}
             		});  
             };
             /*
             
           			    <div class="jj">
							<div class="l1_1"><h3 class="STYLE4">服务器</h3></div>
							<ul class="jjz">
							</ul>
						</div>
             
               */
             function kc_second(){
             		 $.ajax({  
                        type: "POST",  
                        url: "<%=basePath%>/video/findFuns.do",  
                        data: {},  
                        dataType: "json",  
                        success:function(data){
                       // alert("1");
                         //   for(var i=1;i<4;i++){
                          //  alert(i);
                          //  $("#pkc_second"+i).append("<li><a href=''>"+eval(data[i].funname)+"</a></li>");
                          //alert(data[i]);
                           // }
                           var i = 1;
                           var j = 1;
                           var k = 1;
                           var l = 1;
                           var m = 1;
                       	   jQuery.each(data,function(key,value){
                       	   var menuid = value.menuid;
                       	     $("#kc_second"+menuid).append("<div class='jj'><div class='l1_1 jj'><h3 class='STYLE4'>"+value.funname+"</h3></div>"+
						    "<ul class='jjz' id='kc_three"+value.funid+"'></ul></div>");
                             // 添加推荐二级分类
                              switch (menuid) {
								    case 1:
								       if(i<4){
								       $("#pkc_second1").append("<li><a href='video/head_pub.do?menuid="+value.menuid+"&funid="+value.funid+"\'>"+value.funname+"</a></li>");
                             		   i++;
                             		   }
								        break;
								    case 2:
								    if(j<4){
								         $("#pkc_second2").append("<li><a href='video/head_pub.do?menuid="+value.menuid+"&funid="+value.funid+"\'>"+value.funname+"</a></li>");
                             		   j++;
                             		   }
								        break;
								    case 3:
								    if(k<4){
								         $("#pkc_second3").append("<li><a href='video/head_pub.do?menuid="+value.menuid+"&funid="+value.funid+"\'>"+value.funname+"</a></li>");
                             		   k++;
                             		   }
								        break;
								    case 4:
								    if(l<4){
								        $("#pkc_second4").append("<li><a href='video/head_pub.do?menuid="+value.menuid+"&funid="+value.funid+"\'>"+value.funname+"</a></li>");
                             		   l++;
                             		   }
								        break;
								    case 5:
								      if(m<4){
								         $("#pkc_second5").append("<li><a href='video/head_pub.do?menuid="+value.menuid+"&funid="+value.funid+"\'>"+value.funname+"</a></li>");
                             		   m++;
                             		   }
								        break;
								   
								}
                           });
                           kc_three();
             			}
             		});  
             }
             /*
			<li><a href="/">linux</a><span class="ml10 mr10">/</span></li>
			
			  */
             //第三级分类查询
             function kc_three(){
             			 $.ajax({  
                        type: "POST",  
                        url: "<%=basePath%>/video/findColumns.do",  
                        data: {},  
                        dataType: "json",  
                        success:function(data){
                       	   jQuery.each(data,function(key,value){
                       	   $("#kc_three"+value.funid).append(
							"<li><a href='video/head_pub.do?columnid="+value.columnid+"&funid="+value.funid+"\'>"+value.columnname +"</a><span class='ml10 mr10'>/</span></li>");
                           });
                           queryAll();
                           mouse_o();
             			}
             		});
             }
             
   //移动鼠标显示二级分类事件
function mouse_o(){
			$(".mainProNav dl dt").mouseover(function() {
			$(".mainProNav dl").removeClass("dlHover");
			$(this).parent().addClass("dlHover");
			})
			$(".mainProNav").hover(function() {
				$(this).addClass("mainProNavHover");
			},function() {
			$(this).removeClass("mainProNavHover");
			$(".mainProNav dl").removeClass("dlHover");
			})
		}
 
function queryAll(){
	var COLUMNID =41;
//查询推荐视频
$.ajax({  
            type: "GET",  
            url: "<%=basePath%>/video/queryAllCounse.do",  
            data: {COLUMNID:COLUMNID},  
            dataType: "json",  
            success:function(data){
            if(data==null){
            
            $("#index_video").empty();
            }else{
            $("#index_video").empty();
                   	 jQuery.each(data,function(key,value){
                 	if((value.couseTitle).length>15){
               	    $("#index_video").append("<li class='ml0'><a target='_blank' href='video/tocou.do?counseId="+value.coursedId+"'  class=\'imgwrap avatar\'><img style='width:223px;height:135px;' src='"+value.couseCoverPath +"'></a><p class='mt10'> <a target='_blank' href='video/tocou.do?counseId="+value.coursedId+"' >"+(value.couseTitle).substring(0,15)+"...</a></p><p class='pb10' style='width:200px;'>讲师："+value.username+" <span style='float:right;' id='"+value.coursedId+"'>点击量：0</span></p><div class='clicknum'  style='display:none;'>"+value.coursedId+"</div></li>"); 
                 	}else{
                 		 $("#index_video").append("<li class='ml0'><a target='_blank' href='video/tocou.do?counseId="+value.coursedId+"'  class=\'imgwrap avatar\'><img style='width:223px;height:135px;' src='"+value.couseCoverPath +"'></a><p class='mt10'> <a target='_blank' href='video/tocou.do?counseId="+value.coursedId+"' >"+value.couseTitle+"</a></p><p class='pb10' style='width:200px;'>讲师："+value.username+" <span style='float:right;' id='"+value.coursedId+"'>点击量：0</span></p><div class='clicknum' style='display:none;'>"+value.coursedId+"</div></li>"); 
                 	}
         			  });
 			  }
            clickNum();
             //点击量
            
           	},	
    }); 
    
}
    function clickNum(){
    	$(".clicknum").each(function(){
    		var counseid=$(this).text();
    		$.ajax({  
                type: "GET",  
                url: "<%=basePath%>/video/clicknum.do",  
                data: {counseid:counseid},  
                dataType: "html", 
                async : false,
                success:function(data){
                	if(data!=null&&data.length<30){
                	$("#"+counseid).text(data)
                	}
               	},	
        }); 
    				
    		});
    	
    }
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
//开启菜单
kc_first();
})
$(function() {
	var bannerSlider = new Slider($('#banner_tabs'), {
		time: 5000,
		delay: 400,
		event: 'hover',
		auto: true,
		mode: 'fade',
		controller: $('#bannerCtrl'),
		activeControllerCls: 'active'
	});
	$('#banner_tabs .flex-prev').click(function() {
		bannerSlider.prev()
	});
	$('#banner_tabs .flex-next').click(function() {
		bannerSlider.next()
	});
})

		$(document).ready(function() {
			var OLeft = $(".searchBar").offset().left;
			var Otop = $(".searchBar").offset().top + $(".searchBar").height() - 3;
			$("#KsmanDisp").css({left: OLeft,top: Otop});//搜索联想的DIV被幻灯片图片盖住。
			$("#cardname").addClass("cardnameV");
			$("#cardname").focus(function() {
				if ($(this).val() != "") {
					$(this).removeClass("cardnameV");
				} else {
					$(this).addClass("cardnameV");
				}
			})
			$("#cardname").keyup(function() {
				$(this).removeClass("cardnameV");
			})
			$("#cardname").blur(function() {
				if ($(this).val() != "") {
					$(this).removeClass("cardnameV");
				} else {
					$(this).addClass("cardnameV");
				}
			})
			
		});
		//跳转个人中心
		function gerenzhongxin(){
			$("#zhongxin").submit();
		}
//menu
$(document).ready(function(){
 
  $('.xy>li').mousemove(function(){
  $(this).find('.hd').slideDown("5000");//可以自己修改速度
  });
  $('.xy>li').mouseleave(function(){
  $(this).find('.hd').slideUp("fast");
  });
$('.wx').mousemove(function(){
  $('.wx1').show();
  });
  $('.wx').mouseleave(function(){
  $('.wx1').hide();
  });
});
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
</SCRIPT>
<style type="text/css">
<!--
.STYLE1 {
	font-size: large;
	font-weight: bold;
	color: #000000;
}
.STYLE2 {
	font-size: large;
	color: #FFFFFF;
	background:#27272f;
	width:372px;
	height:30px;
	line-height:30px;
}
.STYLE3 {
	font-size: medium;
	color: #000000;
	font-family: "宋体";
}
.STYLE4 {font-size: 15px;color:#f60}
-->
body, button, select, textarea, h1, h2, h3, h4, h5, h6 {
    font: 12px/1 "微软雅黑","Microsoft Yahei",arial,simhei;
}

#bg{ display: none;  position: fixed;  top: 0%;  left: 0%;  width: 100%;  height: 100%;  background-color: black;  z-index:1001;  -moz-opacity: 0.7;  opacity:.70;  filter: alpha(opacity=70);}
 .mainProNav dl.navM1 ul {
    padding: 0;
    width: 610px;
}
.mainProNav dl.navM1 ul.a{
    margin-left:17px;
	width:205px;
}
a:hover {
    text-decoration: none;
}
.mod-nav__li:hover{
	background:none;
}
.mod-nav__li {
    position: relative;
    height: 84px;
    width: 220px;
    background: #83888c;
    border-bottom: 1px solid #9d9d9d;
    transition: .3s;
}
.mainProNav dl dd a {
    transition: background-color 0.1s linear 0s, color 0.1s linear 0s;
    color: #14191e;
    line-height: 10px;
}
.psj,.psj3,.psj2{font-size: 12px;display:none;}
</style>

</head>
<body>
<!-- <form action="video/tocou.do" id="tocourse" method="post"  target="_blank">
<input type="hidden" name="counseId" id="counseId"/>
</form> -->
<div id="bg"></div>
<%-- <div class="theme-popover">
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
                     <li><strong>手机号：</strong><input onblur="ss()" class="ipt" maxlength="20" size="20" placeholder="11位手机号" id="phone" name="phone" type="text"/></li>
                    <!-- <li><strong>用户名：</strong><input class="ipt" type="text" id="username2" name="username2" value="" size="20" /></li> -->
                     <li><strong>密码：</strong><input onblur="ss1()" id="password" class="ipt" placeholder="6-16位密码，区分大小写" size="20" id="inpt-pw" name="pwd" type="password"/></li>
                     <!-- <li><strong>密码：</strong><input class="ipt" type="password" id="pwd" name="pwd" value="" size="20" /></li> -->
                     <!-- <li><strong>重复密码：</strong><input class="ipt" type="password" id="pwd2" name="pwd2" value="" size="20" /></li> -->
                     <li>
                     	<strong>验证码：</strong><input class="ipt" maxlength="6" placeholder="输入短信验证码" style="width: 85px" id="index_code" name="code" type="text" style="width: 149px"/>
						<!--  <strong>验证码：</strong><input class="ipt" id="index_code" style="width: 85px" name="code" type="text" /> -->
						 <!-- <img src="images/verifycode.png" style="vertical-align:middle;"> -->
						<input type="button" id="sends" onclick="send()" value="获取验证码"/>
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
          <h3>登录	/ <a style="color:black;" class="reg" href="javascript:;">没有帐号去注册</a></h3>
     </div>
     <div class="theme-popbod dform">
           <form class="theme-signin" name="loginform" id="formid" action="user/get.do" method="post">
                <ol>
                     <li>
						<input id="username" class="ipt" type="text" placeholder="请输入登录用户名/手机号" name="username" value="" size="20" />
						<p style="color:red;margin: 10px 0" id="msg1" class="psj">请输入正确的用户名或手机号</p>
					 </li>
                     <li>
						<input class="ipt" type="password" id="pass" name="password" placeholder="6-16位密码，区分大小写，不能用空格" value="" size="20" />
						<p style="color:red; margin: 10px 0" class="psj2" id="msg3">密码错误请重新输入</p>
					 </li>
					 <li>
						<label style="color: #787d82;"><input checked="checked" type="checkbox" class="fe"/>下次自动登录</label>
						<a href="javascript:;" class="fog" target="_blank">忘记密码 </a>
					 </li>
                     <li><input id="loginButton" class="btn btn-primary" type="button" name="button" value=" 登 录 " /></li>
					 <li>
						<p>
							<span class="l " style="color:#666">其他方式登录</span>
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
          <h3>注册	/ <a style="color:black;" class="theme-login" href="javascript:;">已有账号去登录</a></h3>
     </div>
     <div class="theme-popbod dform">
           <form class="theme-signin" id="registerform" name="registerform" action="user/okRegister.do" method="post">
                <ol>
                     <li>
						<input class="ipt" type="text" placeholder="请输入注册手机号"  onblur="ss()" id="phone" name="phone" value="" size="20" />
						<p style="color:red; margin: 10px 0" class="psj3" id="msg2">请输入正确的手机号</p>
					 </li>
                     <li>
						<input class="ipt" onblur="ss1()" id="pwd" name="pwd" type="password" placeholder="6-16位密码，区分大小写" name="pwd" value="" size="20" />
						<a id="sf"  style="color: #787d82;float:right;margin-top:5px;" href="javascript:op();">显示密码</a>
						<a id="sf2" href="javascript:ops();"  style="color: #787d82;float:right;margin-top:5px;display:none;">隐藏密码</a>
						<div style="clear:both;"></div>
						<p id="msg4" style="color:red;margin: -10px 0" class="psj3">请重新输入</p>
					</li>
                     <li>
						<input class="ipt" placeholder="手机动态码" type="" maxlength="6" name="code" style="width: 130px;" size="7" id="index_code"/>
						<input style="width: 131px;height: 39px;border: 0;" id="sends" onclick="send()" value="获取验证码" type="button">
						<div style="clear:both;"></div>
						<p id="msg5" style="color:red;margin: 10px 0" class="psj3">请重新输入</p>
					 </li>
                     <li><input class="btn btn-primary" id="registerButton" type="button" name="button" value=" 注 册 " /></li>
                </ol>
           </form>
     </div>
</div>
<div class="searchBar">
</div><!--leftrig-->
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
		 <li style="background:url(u/images/exit.png) no-repeat 1px -1px;" ><a title="退出" href="<%=basePath%>user/exit.do" onclick="javascript:return confirm('您确定要退出吗？')">&nbsp;&nbsp;&nbsp;</a></li>
		</c:when>
		<c:otherwise>
		<li><a class="theme-login" href="javascript:;">登录${msg}</a></li>
		<li><a class="reg" href="javascript:;">注册</a></li>
		</c:otherwise>
		</c:choose>
		<form  method="post" id="zhongxin" action="user/pcenter.do">
		<input type="hidden" name="userid" value="${user.userid}"/>
		<input type="hidden" name="username" value="${user.username}"/>
		</form>
        <!--<li><a class="up_btn" href="">上传视频</a></li>-->
      </ul>
    </div>
  </div>
</div>
<div class="header_bg">
  <div class="header">
    <div class="logo"><a href="/" title=""></a></div>
    <div class="search">
      <form  method="post" target="_blank" name="formsearch" action="/mxt/search.php">
        <div class="search_box">
          <input type="hidden" name="kwtype" value="0" class="search_bg">
          <input name="q" type="text" id="search-keyword" value="在这里搜索..." onfocus="if(this.value=='在这里搜索...'){this.value='';}"  onblur="if(this.value==''){this.value='在这里搜索...';}" class="search_bg" >
          <button type="submit" class="search_button"> </button>
        </div>
      </form>
    </div>	
	<div style="clear:both;float:right; margin-top:-78px; height:42px;">
	<!--<input type="button" value="上传视频">-->
	<a href="javascript:;"  onclick="user_power()" ><img src="images/upload.png" width="80px;"></a>
	</div>
	</div>
</div>
<div class="nav_bg">
  <div class="nav">
    <ul>
      <li class="navon"></li>
      <li><a href="<%=basePath%>">首页</a></li>
      <li><a href="<%=basePath%>pub_course.jsp">公开课</a></li>
      <li><a href="javascript:;">合作伙伴</a><!--<span class="livehot"></span>--></li>
      <li><a href="javascript:;">资讯</a></li>
	  <li><a href="javascript:;">论坛</a></li>
	  <li><a href="<%=basePath%>AboutWe/about.do">关于我们</a></li>
    </ul>
  </div>
</div>
<!--banner开始-->
<div class="wrap-banner">
  <div class="wrap-banner-bg" id="js-wrap-banner-bg">
    <div class="wrap-banner-core clearfix">
      <div class="wrap-nav" style="background: rgb(109, 110, 114) none repeat scroll 0% 0%;
height: 476px;">
        <div class="mod-nav">
          <ul class="mod-nav__list" id="ke_first">
            <li class="mod-nav__li-first">
			<a id="js-course-list" href="<%=basePath%>pub_course.jsp" class="mod-nav__course-all" >
				<i class="icon-hamburg"> </i>
				<span>全部课程</span>
			</a>
			</li>
          
		 <!-- <li class="mod-nav__li js-mod-category" data-index="1">
              <div class="mod-nav__wrap-nav-first"> <i class="icon-nav-arrow-right"> </i> <a href="/a/kaidianjichu/" class="mod-nav__link-nav-first" target="_blank">软件测试</a> </div>
              <div class="mod-nav__wrap-nav-hot"> <a href="/a/kaidianliucheng/" class="mod-nav__link-nav-hot" target="_blank">功能测试</a>
                <a href="/a/dianpujianshe/" class="mod-nav__link-nav-hot" target="_blank">性能测试</a>
                <a href="/a/xuankuanhuoyuan/" class="mod-nav__link-nav-hot" target="_blank">自动化</a>
			  </div>
            </li>-->
	
	
          </ul>
          <div class="category-snow"> </div>
        </div>
      </div>
	  <div id="banner_tabs" class="flexslider">
	<ul class="slides">
		<li>
			<a title="" target="_blank" href="Adver/head_ad.do">
				<img width="1920" height="482" alt="" style="background: url(images/banner001.jpg) no-repeat center;" src="images/alpha.png">
			</a>
		</li>
		<li>
			<a title="" href="list_article.htm">
				<img width="1920" height="482" alt="" style="background: url(images/banner1.jpg) no-repeat center;" src="images/alpha.png">
			</a>
		</li>
		<li>
			<a title="" href="list_article.htm">
				<img width="1920" height="482" alt="" style="background: url(images/banner3.jpg) no-repeat center;" src="images/alpha.png">
			</a>
		</li>
	</ul>
	<ul class="flex-direction-nav">
		<li><a class="flex-prev" href="javascript:;">Previous</a></li>
		<li><a class="flex-next" href="javascript:;">Next</a></li>
	</ul>
	<ol id="bannerCtrl" class="flex-control-nav flex-control-paging">
		<li><a>1</a></li>
		<li><a>2</a></li>
		<li><a>2</a></li>
	</ol>
</div>
    </div>
  </div>
</div>
<div class="case">
    <div class="title cf">
	<h2 class="fl">热门课程</h2>
      <ul class="title-list fl cf ">
        <li>软件开发</li>
        <!-- <li class="on">软件测试</li>
        <li>软件设计</li>
        <li>Android</li>
        <li>IOS</li> -->
        <p><b></b></p>
      </ul>
    </div>
    <div class="product-wrap">
     <!--案例1--> 
   <div class="tv_hot product show">
        <ul class="cf" id="index_video" >
		  <%-- <li class="ml0">
          <a href="video/play.do?id=${video.videoid}" target="_blank" class="imgwrap avatar">
          <img src="${video.screenshotpath}"  /> 
          </a>
            <p class="mt10"> <a href="/" target="_blank">讲师：乐山大佛... </a></p>
            <p class="pb10">播放量：88</p>
          </li> --%>
		  
        </ul>
      </div> 
      <!--案例2
       <div class="tv_hot product">
        <ul class="cf" id="index_video2">
        </ul>
      </div>
      -->
      <!--案例3
       <div class="tv_hot product">
        <ul class="cf"  id="index_video3">
        </ul>
      </div>
      -->
      <!--案例4
      <div class="tv_hot product">
        <ul class="cf"  id="index_video4">
        </ul>
      </div>
	-->
    <!--案例5
       <div class="tv_hot product">
        <ul class="cf"  id="index_video5">
        </ul>
      </div>  
    -->    
    </div>
	<a href="<%=basePath%>pub_course.jsp" target="_blank"><img src="images/qbkc.jpg"></a>
  </div>
	<div class="mar vipkc">
  <p class="contit"><img src="picture/zhxst.jpg"></p>
  <ul class="xy" style="width:1210px;margin: 20px auto 0px;">
    <li><img src="picture/1_1.jpg">
      <div>
        <p><span class="fl">高级讲师</span><span class="rl">张汝辉</span></p>
        <p class="nl"></p>
        <p class="fontc">教育理念：授人以鱼，不如授人以渔！</p>
        <p class="hd" style="display:none;" ><a href="javascript:;" target="_blank">
		9年的软件测试及项目管理经验，精通多种自动化/性能测试工具，熟练使用Mysql/Sybase/Oracle等数据库应用；成功领导过多个大型中心的项目测试工作；在测试技术领域拥有丰富的教学及管理经验；擅长“鱼”“渔”教学法、分析教学法..</a> </p>
      </div>
    </li>
    <li><img src="picture/2_1.jpg">
      <div>
        <p><span class="fl">资深讲师</span><span class="rl">迟恒</span></p>
        <p class="nl"></p>
        <p class="fontc">教育理念：态度决定成败，思维掌控未来！</p>
        <p class="hd" style="display:none;" ><a href="javascript:;" target="_blank">
		10年的软件测试及项目管理经验，精通白盒测试方法，精通多种web/app自动化测试工具；成功参与过多个大型中心的项目测试工作...</a> </p>
      </div>
    </li>
    <li><img src="picture/3_1.jpg">
      <div>
        <p><span class="fl">高级讲师</span><span class="rl">苏静</span></p>
        <p class="nl"></p>
        <p>教育理念：业精于勤而荒于嬉，行成于思而毁于随。</p>
        <p class="hd" style="display:none;" >
		<a href="javascript:;" target="_blank">5年的软件测试及项目管理经验，擅长自动化测试领域；成功参与过多个大型中心的项目测试工作；教学过程中细致认真；能够抓住项目关键难点，深入浅出解析。 </a>
		</p>
      </div>
    </li>
    <li><img src="picture/4_1.jpg">
      <div>
        <p><span class="fl">资深讲师</span><span class="rl">王洋</span></p>
        <p class="nl"></p>
        <p>教育理念：用心做教育，培养测试人！</p>
        <p class="hd" style="display:none;" >
		<a href="javascript:;" target="_blank">7年的软件测试及项目管理经验，曾在多家大型互联网中心任职，对于测试行业有自己独到的见解，善于将复杂的问题简单化并进行详细解析。 </a>
		</p>
      </div>
    </li>
    <li><img src="picture/5_1.jpg">
      <div>
        <p><span class="fl">高级讲师</span><span class="rl">曾敏</span></p>
        <p class="nl"></p>
        <p>教育理念：用最好的心情，做最棒的自己！</p>
        <p class="hd" style="display:none;" >
		<a href="javascript:;" target="_blank">7年的软件测试及项目管理经验，擅长性能测试领域，专长银行项目的性能测试工作，对服务器/数据库调优方面有很深的研究。 </a>
		</p>
      </div>
    </li>
	  <a href="#" target="_blank"><img src="images/qbjs.jpg"></a>
  </ul>
</div>
<!--可固定-->
	<div class="case2">
		<p class="contit"><img src="picture/xyfc.jpg"></p>
		<p class="contit">&nbsp;</p>
		<div style="border:1px solid #ccc; width:590px; height:220px;">
		<div class="fl" style="margin:15px;">
			<img src="picture/1.jpg">		
		</div>
		<div class="nmd">
			<ul>
				<li>姓名：梁凤英</li>
		        <li>职业：Android</li>
		        <li>薪资：12000元/月</li>
				<li>感言：美晨老师一丝不苟的悉心教导带给我很多感动，课堂的理论<br/><br/>讲授、实际项目的操作演练... </li>
		 	 </ul>
		  </div>
	  </div>
	  <div class="fr" style="border:1px solid #ccc; width:590px; height:220px;margin-top:-222px;">
		<div class="fl" style="margin:15px;">
			<img src="picture/sy_jymx_04.jpg">		
		</div>
		<div class="nmd">
			<ul>
				<li>姓名：孟祥超</li>
		        <li>职业：Android</li>
		        <li>薪资：12000元/月</li>
				<li>感言：2016年大专毕业后，怀揣着梦想来到了美晨培训，毕业后我<br/><br/>用美晨授于我的知识我进入了全球最大的IT服务中心IBM... </li>
		 	 </ul>
		  </div>
	  </div>
	</div><!--可固定-->
	<div class="case2">
		<!--<p class="contit">&nbsp;</p>-->
		<div style="border:1px solid #ccc; width:370px; height:300px;">
		<div class="STYLE2">&nbsp;&nbsp;精彩资讯</div>
		<div class="fl" style="margin:10px;">
			<img src="images/6.jpg" class="zx">		
		</div>
		<div class="zxb">
			<ul>
				<span class="STYLE1"><a href="">MIT基于深度学习的新算法给视频配音</a></span>
		        <p>
					蚂蚁金服推人脸识别机器人：满屏网红脸也不晕
				</p>
	 	  </ul>
		  </div>
		  <div class="clear asx">
			<ul>
				<li><a href="/">日本考试信息系统被“秒破”，21万份资料被盗..</a></li>
				<li><a href="/">美国队长被黑化真相揭晓：还是漫威套路深..</a></li>
				<li><a href="/">扎克伯格在夏威夷岛屿私有度假村砌墙：民众不满..</a></li>
				<li><a href="/">北京打造世界首个3D整体打印别墅，45天完成可抗8级地震..</a></li>
			</ul>
	  </div>
	  </div>
	  	<div class="zxx fr">
		<div class="STYLE2">&nbsp;&nbsp;论坛</div>
		<div class="fl" style="margin:10px;">
			<img src="picture/3_1.jpg" class="zx">		
		</div>
		<div class="zxb">
			<ul>
				<span class="STYLE1"><a href="">如何实现饿了吗发布订..</a></span>
		        <p>
					 如何实现饿了吗发布订单以后几分钟商家未接单子，会反馈给用户
				</p>
	 	  </ul>
		  </div>
		  <div class="clear asx">
			<ul>
				<li><a href="/">请问cookie里面通常会放帐号密码吗？..</a></li>
				<li><a href="/">thinkphp，修改编辑文章打了个隔行Enter提交保存出现如下错误..</a></li>
				<li><a href="/">JS怎么去控制ID的出现和消失啊..</a></li>
				<li><a href="/">studio导入eclipse中的项目后，R文件丢失..</a></li>
			</ul>
	  </div>
	  </div>
	  	  	<div class="zxx fr">
		<div class="STYLE2">&nbsp;&nbsp;帮助</div>
		<div class="fl" style="margin:10px;">
			<img src="images/0.jpg" class="zx">		
		</div>
		<div class="zxb">
			<ul>
				<span class="STYLE1"><a href="">EMW3162 WIFI 无线模块</a></span>
		        <p>
					本人是初接触WiFi模块的菜鸟，操作系统都没怎么搞过，现在想把EMW3162模块连接到..
				</p>
	 	  </ul>
		  </div>
		  <div class="clear asx">
			<ul>
				<li><a href="/">QT窗口关闭进程不退出问题..</a></li>
				<li><a href="/">VB函数不定义返回值，是不是就可以返回任意返回值类型了？..</a></li>
				<li><a href="/">directshow 同时打开两个摄像头失败..</a></li>
				<li><a href="/">FTPClient的retrieveFileStream方法参数..</a></li>
			</ul>
	  </div>
	  </div>
	</div>
	<div class="case3">
		<div class="yl">
			<p align="left" class="STYLE3">友</p>
			<p align="left" class="STYLE3">情</p>
			<p align="left" class="STYLE3">链</p>
			<p align="left" class="STYLE3">接 </p>
		</div>
		<div class="ylxx fl">
			<ul>
				<li><a href="http://www.lampbrother.net/" target="_blank">兄弟连IT教育</a></li>
				<li><a href="http://www.cocoatest.com/" target="_blank">测试新理念</a></li>
				<li><a href="http://www.oldboyedu.com/" target="_blank">北京老男孩IT教育</a></li>
				<li><a href="http://www.shanghaixdl.com/" target="_blank">html5培训</a></li>
			</ul>
		</div>
	</div>
<div class="foot">
  <div class="wid">
    <div class="fl">
      <ul>
        <li>
          <font size="3" color="white"><b><a href="<%=basePath%>AboutWe/about.do"><span>关于我们</span></a></b></font>
          <ul>
            <li><a href="<%=basePath%>AboutWe/contact.do" target="_blank">联系我们</a></li>
            <li><a href="javascript:;" target="_blank">高薪诚聘</a></li>
          </ul>
        </li>
        <li>
          <font size="3" color="white">帮助中心</font>
          <ul>
            <li><a href="javascript:;" target="_blank">我是教师</a></li>
            <li><a href="javascript:;" target="_blank">我是学员</a></li>
			<li><a href="<%=basePath%>AboutWe/mzsm.do" target="_blank">免责声明</a></li>
          </ul>
        </li>
        <li>
          <font size="3" color="white">网站地图</font>
          <ul>
            <li><a href="javascript:;" target="_blank">网站地图</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="rl">
      <p>
		  <a href="javascript:;" target="_blank" class="qq"></a>
		  <a target="_blank" class="wx"></a>
		  <a href="javascript:;" target="_blank" class="wb"></a>
	  </p>
	<p style="display:none;position: absolute;margin-top:-190px; z-index:99999;" class="wx1"><img src="picture/wx.jpg"></p>
	<h1>400-859-9335</h1><br/>
	<div>友情链接：QQ1132188634</div>
    </div>
    <p class="nl">北京美晨科技有限公司/ 北京丰台区马家堡东路立业大厦1406室（地铁角门东站下车300米即到） / 京ICP备16037877号</p>
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