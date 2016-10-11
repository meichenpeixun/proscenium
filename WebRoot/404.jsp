<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="java.io.PrintWriter"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
 <base href="<%=basePath%>">
<meta http-equiv="content-type" content="text/html; charset=UTF-8"> 
<meta http-equiv="x-dns-prefetch-control" content="on">
<title>访问出错</title>
<meta http-equiv="Pragma" content="no-cache">
 <meta http-equiv="Expires" content="0">
 <meta name="author" content="Netease">
 <meta name="version" content="1.0"> 
 <meta name="keywords" content="美享厅">
 <meta name="description" content="美享厅">
 <link href="list/style/core.css" type="text/css" rel="stylesheet">
 <link href="css/art_bf.css" type="text/css" rel="stylesheet">
 <link href="css/default.css" type="text/css" rel="stylesheet">
 <link href="list/style/cores.css" type="text/css" rel="stylesheet">
 <style type="text/css">
	body {
    min-width: 960px;
    padding: 0px 0 350px 0;
    position: relative;
    height: auto;
    min-height: 100%;
}
 </style>
 </head>  
 <body class="auto-1467597023195-parent">
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
				 <a class="nitem" href="">合作伙伴</a>
				 <a class="nitem" href="/">资讯</a>
				 <a class="nitem" href="/">论坛</a>
				 <a class="nitem" href="<%=basePath%>AboutWe/about.do">关于我们</a>
			</div>
			 </div>
		 </div> 
	 </div> 
 </div>
 
 <div style="width:1200px;margin:0 auto;">
<table id="__01" width="1024" height="450" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td colspan="4">
			<img src="u/images/404_01.png" width="466" height="316" alt=""></td>
		<td rowspan="3">
			<img src="u/images/404_02.png" width="558" height="450" alt=""></td>
	</tr>
	<tr>
		<td rowspan="2">
			<img src="u/images/404_03.png" width="269" height="134" alt=""></td>
		<td>
			<a onclick="window.history.go(-1);"><img src="u/images/404_04.png" width="104" height="28" alt=""></a></td>
		<td>
			<a href="http://www.meixt.cn"><img src="u/images/404_05.png" width="61" height="28" alt=""></a></td>
		<td rowspan="2">
			<img src="u/images/404_06.png" width="32" height="134" alt=""></td>
	</tr>
	<tr>
		<td colspan="2">
			<img src="u/images/404_07.png" width="165" height="106" alt=""></td>
	</tr>
</table>
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
 </body>
 </html>