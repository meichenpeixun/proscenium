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
    
    <title>视频播放</title>
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
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
 <link href="list/style/core.css" type="text/css" rel="stylesheet">
 <link href="css/art_bf.css" type="text/css" rel="stylesheet">
 <link href="css/default.css" type="text/css" rel="stylesheet">
 <link href="list/style/cores.css" type="text/css" rel="stylesheet">
 <script type="text/javascript" src="js/jquery.min.js"></script>
 <!-- <style type="text/css">
	.bfr2 li{
		width:90%;
		height:30px;
		line-height:30px;
		float:left;
		color:#cccccc;
	} .bfr2 li a{color:#cccccc;}
	.bfr2 li i {
    background: rgba(0, 0, 0, 0) url("images/player.png") repeat scroll 0 0;
    display: block;
    float: left;
    height: 14px;
    margin: 8px 10px 0 0;
    width: 14px;
}
 </style> -->
 <!-- //播放量统计 -->
 <script type="text/javascript">
 function tocommont(){
	 var userid=${user.userid};
	 var videoid=${video.videoid};
	 $.ajax({  
         type: "POST",  
         url: "<%=basePath%>/video/addCommonts.do",  
         data: {videoid:videoid,userid:userid},
         async:false,
         dataType: "html",  
         beforeSend:function(){
         $("#pl").html("<div style='height: 20px; width: 45px;text-align:center;padding-bottom:0px;' class='asx fr' ><img src='images/5-121204194026.gif' style='height:20px;width: 100px;'/></div>");
			//setTimeout("$('.del_msg').fadeOut()",2000)
			},  
         success:function(data){
        	 $("#pl").html("<input class='asx fr' type='button'  value='发表评论' onclick='tocommont()'>")
		}
	}); 
	 
 } 
 </script>
 <script type="text/javascript">
 
 function denglu(){
	 $('.theme-popover-mask').fadeIn(100);
		$('.theme-popover').slideDown(200);
		$('.theme-popover-mask2').fadeOut(100);
		$('.theme-popover2').slideUp(200);
		$("#bg").css("display","block");
	
	$('.theme-poptit .close').click(function(){
		$('.theme-popover-mask').fadeOut(100);
		$('.theme-popover').slideUp(200);
		$("#bg").css("display","none");
	});
 }
function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
  		return "Chrome";
 	}
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}
	var start;
	$(document).ready(function() {
		var mb = myBrowser();
			
					  var myDate=new Date();
					start = myDate.getTime();
					
					
					setTimeout(function(){temptime()},60000)
					
					function temptime(){
							    var endDate=new Date();
							    end = endDate.getTime();
							    var videoid =${video.videoid};
					
							   $.ajax({
					            type:"POST",
					            url:"<%=basePath%>/video/playtime.do",
					            data:{timeSpent:end-start,videoid:videoid},
					            async: true
					         });
					}
				
			
		
	  });

</script> 
 <!--上传视频按钮权限检测  -->
 <script type="text/javascript">
 jQuery(document).ready(function($) {
	 window.scrollTo(0,136);
	 });
  function  user_power(){
  
  	//判断用户有没有登录
		    		 var bool = ${user.username==null||user.username==""};
				     if(bool)
				     {
				     alert("没有登录或者账户已经失效，请您先登录！");
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
        /* function playVe(videoid){
	  $("#videoid2").val(videoid); 		
		$("#playV").submit();
		} */
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
	.g-sd2 {
    position: relative;
    float: right;
    width: 310px;
	margin:-20px 0 0 -225px;
}
.u-sideGray1 ul li {
    float: left;
    margin: 10px 0 0 26px;
    background: #f9f9f9;
}.u-sideGray1 {
    background: #f9f9f9;
    padding: 10px;
    height: 270px;
}.asx{
    border: 1px solid #d1d1d1;
    padding: 5px 20px;
}.asx:hover{
	background:#f2f2f2;
}
#bg{ display: none;  position: fixed;  top: 0%;  left: 0%;  width: 100%;  height: 100%;  background-color: black;  z-index:1001;  -moz-opacity: 0.7;  opacity:.70;  filter: alpha(opacity=70);}
</style>
 </head> 
  <% 
		 Video video =new Video();
		 video=(Video)request.getAttribute("video");
		 if(null!=video&&video.getTitle()!=null){
			 String[] str=video.getFilename().split("[.]");
	           String filename=str[0];
		 %> 
 <div id="bg"></div> 
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
                     <input type="hidden" name="videoid" value="${video.videoid}"/>
                     <input type="hidden" name="counseId" value="${counse.coursedId}"/>
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
		 <li style="background:url(u/images/head.png) no-repeat 0px 0px;"><a href="<%=basePath%>pcenter.jsp">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${user.username}</a></li>
		 <li><a href="">播放记录</a></li>
		 <li style="background:url(u/images/exit.png) no-repeat 1px -1px;"><a href="<%=basePath%>user/exit.do" >&nbsp;&nbsp;&nbsp;</a></li>
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
				 <a class="nitem" href="<%=basePath%>index.jsp">首页</a>
      			 <a class="nitem" href="<%=basePath%>pub_course.jsp">公开课</a>
				 <a class="nitem" href="JavaScript:;">合作伙伴</a>
				 <a class="nitem" href="javascript:;">资讯</a>
				 <a class="nitem" href="javascript:;">论坛</a>
				 <a class="nitem" href="<%=basePath%>AboutWe/about.do">关于我们</a>
			</div>
			 </div>
		 </div> 
	 </div> 
 </div>
 <div id="advertisement_box" class="advertisement_box f-pf" style="display:none;"></div>
<div style="width:100%;background:#1e1e1e;">
 <div id="auto-id-1467597023430" class="g-flow f-cb">
 <!--<div style="float:right;">
	<img src="images/logo.png">
 </div>--><!--位置右侧-->
	 <!-- <div class="powz">
	 			当前位置：<a href="javascript:;">首页</a> > <a href="javascript:;">公开课</a>> Android开发
	 </div> -->
	 <!--视频标题-->
	 <div style="margin:0 0 10px 0;width:100%;">
		 <div style="width:70%; padding:15px 0;color:#ccc;">
			<h1><%=video.getTitle()%></h1><span class="jb"><a style="color:#ccc;" href="">举报</a></span>
		 </div>
	 </div>
	 <div style="width:100%; height:487px;">
		<div style="width:70%;height:487px;" class="fl">
		<div id="a1" style="width:100%;height:487px;"></div>
<!--
上面一行是播放器所在的容器名称，如果只调用flash播放器，可以只用<div id="a1"></div>
-->
<!-- <textarea name="statusvalue" rows="15" id="statusvalue" style="width:200px;height:400px;">该处是用来监听播放器实时返回的各种状态，可以根据这里的状态实时的控制播放器</textarea> -->
<script type="text/javascript" src="ckplayer/ckplayer.js" charset="utf-8"></script>
<script type="text/javascript">
	var _nn=0;
	function ckplayer_status(str){
		_nn+=1;
		if(_nn>100){
			_nn=0;
			document.getElementById('statusvalue').value='';
		}
		document.getElementById('statusvalue').value=str+'\n'+document.getElementById('statusvalue').value;
	}
	
	var flashvars={
		f:'<%=basePath%><%=video.getFilename()%>',
		a:'',//调用时的参数，只有当s>0的时候有效
		s:'0',//调用方式，0=普通方法（f=视频地址），1=网址形式,2=xml形式，3=swf形式(s>0时f=网址，配合a来完成对地址的组装)
		c:'0',//是否读取文本配置,0不是，1是
		x:'',//调用配置文件路径，只有在c=1时使用。默认为空调用的是ckplayer.xml
		//i:'http://www.ckplayer.com/images/loadimg3.jpg',//初始图片地址
		//d:'http://www.ckplayer.com/down/pause6.1_1.swf|http://www.ckplayer.com/down/pause6.1_2.swf',//暂停时播放的广告，swf/图片,多个用竖线隔开，图片要加链接地址，没有的时候留空就行
		//u:'',//暂停时如果是图片的话，加个链接地址
		//l:'http://www.ckplayer.com/down/adv6.1_1.swf|http://www.ckplayer.com/down/adv6.1_2.swf',//前置广告，swf/图片/视频，多个用竖线隔开，图片和视频要加链接地址
		//r:'',//前置广告的链接地址，多个用竖线隔开，没有的留空
		//t:'10|10',//视频开始前播放swf/图片时的时间，多个用竖线隔开
		//y:'',//这里是使用网址形式调用广告地址时使用，前提是要设置l的值为空
		//z:'http://www.ckplayer.com/down/buffer.swf',//缓冲广告，只能放一个，swf格式
		e:'2',//视频结束后的动作，0是调用js函数，1是循环播放，2是暂停播放并且不调用广告，3是调用视频推荐列表的插件，4是清除视频流并调用js功能和1差不多，5是暂停播放并且调用暂停广告
		v:'80',//默认音量，0-100之间
		p:'1',//视频默认0是暂停，1是播放，2是不加载视频
		h:'3',//播放http视频流时采用何种拖动方法，=0不使用任意拖动，=1是使用按关键帧，=2是按时间点，=3是自动判断按什么(如果视频格式是.mp4就按关键帧，.flv就按关键时间)，=4也是自动判断(只要包含字符mp4就按mp4来，只要包含字符flv就按flv来)
		q:'',//视频流拖动时参考函数，默认是start
		m:'',//让该参数为一个链接地址时，单击播放器将跳转到该地址
	//	o:'',//当p=2时，可以设置视频的时间，单位，秒
		w:'',//当p=2时，可以设置视频的总字节数
		g:'',//视频直接g秒开始播放
	//	j:'',//跳过片尾功能，j>0则从播放多少时间后跳到结束，<0则总总时间-该值的绝对值时跳到结束
		//k:'30|60',//提示点时间，如 30|60鼠标经过进度栏30秒，60秒会提示n指定的相应的文字
		//n:'这是提示点的功能，如果不需要删除k和n的值|提示点测试60秒',//提示点文字，跟k配合使用，如 提示点1|提示点2
		wh:'',//宽高比，可以自己定义视频的宽高或宽高比如：wh:'4:3',或wh:'1080:720'
		//lv:'0',//是否是直播流，=1则锁定进度栏
	//	loaded:'loadedHandler',//当播放器加载完成后发送该js函数loaded
		//调用播放器的所有参数列表结束
		//以下为自定义的播放器参数用来在插件里引用的
	//	my_url:encodeURIComponent(window.location.href)//本页面地址
		//调用自定义播放器参数结束
		};
	var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always'};//这里定义播放器的其它参数如背景色（跟flashvars中的b不同），是否支持全屏，是否支持交互
	var video=["<%=basePath+"videos_MP4/"%><%=filename+".mp4"%>->video/mp4"];
	CKobject.embed('ckplayer/ckplayer.swf','a1','ckplayer_a1','100%','100%',false,flashvars,video,params);
	/*
		以上代码演示的兼容flash和html5环境的。如果只调用flash播放器或只调用html5请看其它示例
	*/
	function videoLoadJs(s){
		alert("执行了播放");
	}
	function playerstop(){
		//只有当调用视频播放器时设置e=0或4时会有效果
		alert('播放完成');	
	}
	var _nn=0;//用来计算实时监听的条数的，超过100条记录就要删除，不然会消耗内存
	
	function getstart(){
		var a=CKobject.getObjectById('ckplayer_a1').getStatus();
		var ss='';
		for (var k in a){
			ss+=k+":"+a[k]+'\n';
		}
		alert(ss);
	}
	function ckadjump(){
		alert('这里演示了点击跳过广告按钮后的执行的动作，如果注册会员可以做成直接跳过的效果。');
	}
</script>
		<%-- <object class id="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="875" height="487">
							  <param name="movie" value="<%=basePath%>tools/flvplayer.swf">
							  <param name="quality" value="high">
							  <param name="allowFullScreen" value="true">
							  <param name="repeat" value="true">
							  <param name="FlashVars" value="vcastr_file=<%=basePath%><%=video.getFilename()%>&LogoText=www.meixt.cn&BufferTime=3&IsAutoPlay=1">
							  <embed src="<%=basePath%>tools/flvplayer.swf" allowfullscreen="true" repeat="true" flashvars="vcastr_file=<%=basePath%><%=video.getFilename()%>&LogoText=www.meixt.cn&IsAutoPlay=1" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="875" height="487"></embed>
							   <embed src="<%=basePath%>tools/flvplayer.swf" allowfullscreen="true" flashvars="vcastr_file=<%=basePath%><%=video.getFilename()%>&LogoText=www.meixt.cn&IsAutoPlay=0" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="875" height="487"></embed>
		</object> --%>
		<%} %>
		<div class="fns">
			<div style="text-align:center;" class="fl dz">
				<span><a href=""><img src="images/dz.png"></a></span><!--图标-->
				<p>12,412</p>
			</div>
			<div style="text-align:center;" class="fl">
				<span><a href=""><img src="images/cai.png"></a></span>
				<p>1,412</p>
			</div>
			<div style="text-align:center;" class="fl">
				<span><a href=""><img src="images/sc.png"></a></span>
				<p>收藏</p>
			</div>
			<div class="bdsharebuttonbox" style="text-align:center;float:left;">
				<span><a href="#" class="bds_more" style="background:url(images/fx.png) no-repeat 1px -4px;height:13px;width:5px;" data-cmd="more"></a></span>
				<p>分享</p>
			</div>
       <script>
          window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{},"image":{"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
			<div class="fn-splite" style="text-align:center;float:left;"></div>
			<div style="text-align:center;float:left;">
				<span><a href=""><img src="images/pgl2.png"></a></span>
				<p>5,234评</p>
			</div>
			<div style="text-align:center;float:left;">
				<span><a href=""><img src="images/bf.png"></a></span>
				<p>8,234播</p>
			</div>
			<div style="margin-top:-10px;" class="fr">
				<div class="fl"><a href=""><img src="images/tx.png" style="width:50px;height:50px;"></a></div>
				<div class="fr">
					<ul>
						<li><a style="color:#ff6600;" href="">美学堂工作室</a></li>
						<li>视频：<a href="">53</a></li>
						<li>播放：<a href="">8,2342</a></li>
					</ul>
				</div>
			</div>
			</div>
		</div>
		<!--课程目录-->
		<div class="bfr clear">
			 <c:choose>
						<c:when test="${fn:length(counse.couseTitle)>11}">
						<p title="${counse.couseTitle}">课程:     ${fn:substring(counse.couseTitle,1,11)}...</p>
						</c:when>
						<c:otherwise>
						<p title="${counse.couseTitle}">课程:     ${counse.couseTitle}</p>
						</c:otherwise>
			</c:choose>
			<ul id="ke_list" class="kcml">
				<div>
				<c:forEach items="${chapters}" var="chapter">
				<li style="margin:10px 0px;">
						<c:choose>
						<c:when test="${fn:length(chapter.chapterName)>15}">
						<span>${fn:substring(chapter.chapterName,0,15)}...</span></li>
						</c:when>
						<c:otherwise>
						<span>${chapter.chapterName}</span></li>
						</c:otherwise>
						</c:choose>
						
						<c:forEach items="${videos}" var="vi">
						<c:if test="${vi.chapterId==chapter.chapterId}">
						<c:choose>
						<c:when test="${vi.videoid==video.videoid}">
						<li  title="${vi.title}" style="background-color:#202020;">
						<i ></i>
									<c:choose>
									<c:when test="${fn:length(vi.title)>16}">
									<font color="#72d0eb" >${fn:substring(vi.title,0,16)}...</font>
									</c:when>
									<c:otherwise>
									<font color="#72d0eb" >${vi.title}</font>
									</c:otherwise>
									</c:choose>
						            
						<span class="fr">正在播放..</span>
						</li>
						</c:when>
						<c:otherwise>
						<li  title="${vi.title}">
						<i ></i>
						            <c:choose>
									<c:when test="${fn:length(vi.title)>16}">
									<a href="video/playV.do?counseId=${counse.coursedId}&videoid=${vi.videoid}" >${fn:substring(vi.title,0,16)}...</a>
									</c:when>
									<c:otherwise>
									<a href="video/playV.do?counseId=${counse.coursedId}&videoid=${vi.videoid}" > ${vi.title}</a>
									</c:otherwise>
									</c:choose>
						<span class="fr">免费视频</span>
						</li>
						</c:otherwise>
						</c:choose>
						</c:if>
						</c:forEach>
						
					</li>
				</c:forEach>
				
				 <%-- <c:forEach items="${videos}" var="vid">
				 <c:if test="${vid.videoid==video.videoid}">
				 <!-- <li style="margin:10px 0px;">
						<span>第1章 版本控制工具的作用</span>
					</li>  -->
				 <li  title="${vid.title}" style="background-color:#202020;">
						<i ></i>
						<c:choose>
						<c:when test="${fn:length(vid.title)>15}">
						<font color="#72d0eb" >${fn:substring(vid.title,0,15)}...</font>
						</c:when>
						<c:otherwise>
						<font color="#72d0eb" >${vid.title}</font>
						</c:otherwise>
						</c:choose>
						<span class="fr">正在播放...</span>
					</li>
				 </c:if>
				 <c:if test="${vid.videoid!=video.videoid}">
					<li title="${vid.title}">
						<i></i>
						<c:choose>
						<c:when test="${fn:length(vid.title)>15}">
						<a href="video/play.do?id=${vid.videoid}">${fn:substring(vid.title,0,15)}...</font>
						</c:when>
						<c:otherwise>
						<a href="video/play.do?id=${vid.videoid}"> ${vid.title}</a>
						</c:otherwise>
						</c:choose>
						<span class="fr">免费视频</span>
					</li>
				</c:if>
				 </c:forEach> --%>
				</div>
			</ul>
		</div>
	 </div>
	 </div>
	 </div>
	  <div id="auto-id-1467597023430" class="g-flow f-cb">
	 <div class="b-20"></div> 
	 <div style="width:100%;">
	 <div style="width:875px;margin-top:70px;float:left;">
		 <div style="width:875px">
				<div class="spjj">视频简介：<%=video.getDescript()%></div>
				<div class="update">发布时间：<%=video.getUptime()%></div>
		 </div>
		 <!--评论发表-->
		 <div class="plq">
		 <c:choose>
		 <c:when test="${!empty user}">
		 <div ><img src="images/18.jpg"></div>
			<div><a href="#" class="ptit">${user.username}</a></div>
			<div >
					<textarea maxlength="300" class="form_input" name="content" onFocus="if(this.value=='看点槽点，不吐不快，别憋着，马上大声说出来吧！（300字以内）'){this.value='';}" id="content" cols="30" rows="10">看点槽点，不吐不快，别憋着，马上大声说出来吧！（300字以内）</textarea>
				<div id="pl">
				<input class="asx fr" type="button"  value="发表评论" onclick="tocommont()">
            	</div>
            </div>
		 </c:when>
		 <c:otherwise>
		 <div><img src="images/18.jpg"></div>
			<div><a href="#" class="ptit">网友评论</a></div>
			<div >
			<img src="" style="height:26px;width: 90px; " alt="" />
					<textarea maxlength="300" onFocus="if(this.value=='看点槽点，不吐不快，别憋着，马上大声说出来吧！（300字以内）'){this.value=''; denglu();}"  onblur="if(this.value==''){this.value='看点槽点，不吐不快，别憋着，马上大声说出来吧！（300字以内）';}" class="form_input" name="content" id="content" cols="30" rows="10">看点槽点，不吐不快，别憋着，马上大声说出来吧！（300字以内）</textarea>
				<input class="asx fr" type="button"  onclick="denglu();" value="发表评论">
		    </div>
		 </c:otherwise>
		 </c:choose>
		 </div>
		 <!--评论内容表头-->
		 <div class="clear tl">
			<h2>评论专区</h2>
		 </div>
		 <!--评论内容部分-->
		 <div style="width:875px;">
			<div>
			<!--评论楼主-->
				<div class="pbline" onmouseover="TestBlack('jbd');" onmouseout="TestBlack('jbd');">
					<div style="margin:20px 0;">
						<img src="images/tx.png" style="width:50px;height:50px;">
						<span class="hfbg">
							<a class="fr co" href="/">回复</a>
						</span>	
						<span id="jbd" class="hfbg2">
							<a class="fr co" href="/">举报</a>
						</span>
					</div>
					<div class="plcont">
						<ul>
							<li><a class="red" href="/">张美辰</a><span class="fbtime">两小时前</span></li>
							<li>在这里学到了很多，不错。</li>
						</ul>
					</div>
				</div>
				<!--评论回复-->
				<div class="pbline2" onmouseover="TestBlack('jbd2');" onmouseout="TestBlack('jbd2');">
					<div style="margin:20px 0;">
						<img src="images/18.jpg" style="width:50px;height:50px;">
						<span id="jbd2" class="hfbg2">
							<a class="fr co" href="/">举报</a>
						</span>
					</div>
					<div class="plcont">
						<ul>
							<li><a class="red" href="/">张美辰</a><span class="fbtime">一小时前</span></li>
							<li>在这里学到了很多，不错。</li>
						</ul>
					</div>
				</div>
			</div>
			<!--twopinglun-->
			<div>
			<!--评论楼主-->
				<div class="pbline" onmouseover="TestBlack('jbd3');" onmouseout="TestBlack('jbd3');">
					<div style="margin:20px 0;">
						<img src="images/tx.png" style="width:50px;height:50px;">
						<span class="hfbg">
							<a class="fr co" href="/">回复</a>
						</span>	
						<span id="jbd3" class="hfbg2">
							<a class="fr co" href="/">举报</a>
						</span>
					</div>
					<div class="plcont">
						<ul>
							<li><a class="red" href="/">张美辰</a><span class="fbtime">三小时前</span></li>
							<li>在这里学到了很多，不错。</li>
						</ul>
					</div>
				</div>
			</div>
		 </div>
	</div>
 <div class="g-sd2"> 
	<div>
		<div class="u-topTit">相关热门分享者</div> 
		<div class="u-sideGray1"> 
			<ul>
				<li>
					<a href="/"><img title="Python 高级工程师，通晓程序语言" src="list/images/6631440500142133834.jpg" alt="Python 高级工程师，通晓程序语言" height="60" width="60">
					<div style="text-align:center;">麻瓜编程</div></a>
				</li>
				<li>
					<a href="/"><img title="Python 高级工程师，通晓程序语言" src="list/images/6631440500142133834.jpg" alt="Python 高级工程师，通晓程序语言" height="60" width="60">
					<div style="text-align:center;">麻瓜编程</div></a>
				</li>
				<li>
					<a href="/"><img title="Python 高级工程师，通晓程序语言" src="list/images/6631440500142133834.jpg" alt="Python 高级工程师，通晓程序语言" height="60" width="60">
					<div style="text-align:center;">麻瓜编程</div></a>
				</li>
				<li>
					<a href="/"><img title="Python 高级工程师，通晓程序语言" src="list/images/6631440500142133834.jpg" alt="Python 高级工程师，通晓程序语言" height="60" width="60">
					<div style="text-align:center;">麻瓜编程</div></a>
				</li>
				<li>
					<a href="/"><img title="Python 高级工程师，通晓程序语言" src="list/images/6631440500142133834.jpg" alt="Python 高级工程师，通晓程序语言" height="60" width="60">
					<div style="text-align:center;">麻瓜编程</div></a>
				</li>
				<li>
					<a href="/"><img title="Python 高级工程师，通晓程序语言" src="list/images/6631440500142133834.jpg" alt="Python 高级工程师，通晓程序语言" height="60" width="60">
					<div style="text-align:center;">麻瓜编程</div></a>
				</li>
				<li>
					<a href="/"><img title="Python 高级工程师，通晓程序语言" src="list/images/6631440500142133834.jpg" alt="Python 高级工程师，通晓程序语言" height="60" width="60">
					<div style="text-align:center;">麻瓜编程</div></a>
				</li>
				<li>
					<a href="/"><img title="Python 高级工程师，通晓程序语言" src="list/images/6631440500142133834.jpg" alt="Python 高级工程师，通晓程序语言" height="60" width="60">
					<div style="text-align:center;">麻瓜编程</div></a>
				</li>
				<li>
					<a href="/"><img title="Python 高级工程师，通晓程序语言" src="list/images/6631440500142133834.jpg" alt="Python 高级工程师，通晓程序语言" height="60" width="60">
					<div style="text-align:center;">麻瓜编程</div></a>
				</li>
			</ul>
			</div> 
	</div> 
	<div class="b-20"></div> 
	<div id="j-rankbox"> 
			<div class="u-topTit">相关视频</div>
		<div id="auto-id-1467597023250" class="u-sideGray j-ranklist">
			<div class="u-rankItm f-cb" style="width:210px;">
				<div class="f-fl"><a href="/" target="_blank" title="和秋叶一起学PPT"><img src="list/images/a_014.jpg" width="80" height="80px"></a> </div>
				<div class="f-fr" style="width:120px;">
					<h3><a href="/">php编程教学</a></h3>
					<p style="margin-top:10px;width:200px;"><a href="/">视频介绍视频介绍视频介绍介绍视频介绍视频介绍视频介绍视频介绍介绍视频介绍视频介绍视...</p>
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
	<!--<div id="j-rankbox">
		<img src="images/gge.jpg">
	</div>-->
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
 <%-- <form action="video/playV.do" method="post"  id="playV">
<input type="hidden" name="counseId" id="counseId" value="${counse.coursedId}"/>
<input type="hidden" name="videoid" id="videoid2" value=""/>
</form> --%>
 </body>
 </html>