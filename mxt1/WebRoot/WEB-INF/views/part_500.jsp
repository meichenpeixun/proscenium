<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="java.io.PrintWriter"%>
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
					  <button type="submit" class="search_button">搜 ff索</button>
					</div>
				  </form>
				</div>
			 </div>
			 <div class="m-nav f-cb j-navFind" style="margin-top:25px;"> 
				 <a class="nitem" href="<%=basePath%>index.jsp">首页</a>
      		     <a class="nitem" href="<%=basePath%>pub_course.jsp">公开课</a>
				 <a class="nitem" href="/">讲师风采</a>
				 <a class="nitem" href="/">资讯</a>
				 <a class="nitem" href="/">论坛</a>
				 <a class="nitem" href="/">关于我们</a>
			</div>
			 </div>
		 </div> 
	 </div> 
 </div>
 
 <div style="width:1200px;margin:0 auto;">
		<table id="__01" width="1024" height="439" border="0" cellpadding="0" cellspacing="0">
		<tr>
			<td rowspan="4">
				<img src="u/images/error_01.png" width="193" height="439" alt=""></td>
			<td>
				<img src="u/images/error_02.png" width="184" height="275" alt=""></td>
			<td rowspan="4">
				<img src="u/images/error_03.png" width="36" height="439" alt=""></td>
			<td rowspan="4">
				<img src="u/images/error_04.png" width="611" height="439" alt=""></td>
		</tr>
		<tr>
			<td>
				<a  onclick="window.history.go(-1);"><img src="u/images/error_05.png"  width="184" height="45" alt=""></a></td><!--返回上一页-->
		</tr>
		<tr>
			<td>
				<a href="<%=basePath%>index.jsp"><img src="u/images/error_06.png" width="184" height="52" alt=""></a></td><!--返回首页-->
		</tr>
		<tr>
			<td>
				<img src="u/images/error_07.png" width="184" height="67" alt=""></td>
		</tr>
		</table>
 </div>
  <div class="g-ft"> 
		<div class="foot">
		  <div class="wid">
			<div class="fl">
			  <ul>
				<li>
				  <font size="3" color="white"><b>关于我们</b></font>
				  <ul>
					<li><a href="/" target="_blank">联系我们</a></li>
					<li><a href="/" target="_blank">高薪诚聘</a></li>
				  </ul>
				</li>
				<li>
				  <font size="3" color="white">帮助中心</font>
				  <ul>
					<li><a href="/" target="_blank">我是教师</a></li>
					<li><a href="/" target="_blank">我是学员</a></li>
					<li><a href="/" target="_blank">免责声明</a></li>
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