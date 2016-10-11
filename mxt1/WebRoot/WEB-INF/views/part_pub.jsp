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
	<script src="list/js/ga.js" type="text/javascript"></script>
	<script type="text/javascript" src="list/js/json3.js"></script> 
	<script type="text/javascript" src="list/js/message.js"></script>  
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<link href="list/style/core.css" type="text/css" rel="stylesheet">
	<link href="css/default.css" type="text/css" rel="stylesheet">
	<link href="list/style/cores.css" type="text/css" rel="stylesheet">
	</head>
<body>
 <div class="g-mn2c">
 
 <font style="font-family:楷体;" size="4" color="#306E7C"><b>${msg}</b></font>
 <div style="padding-top: 0px;" id="j-breadTit" class="u-topTit"></div> 
 <div class="m-coursebox">
 <div style="" id="j-courseNode" class="lists auto-1467597023088-parent">
 <div class="m-basepool f-cb auto-1467597023088">
<div style="" class="m-data-lists f-cb f-pr j-data-list">

 <c:forEach items="${counses}" var="counse">
 <div id="auto-id-1467597023637" class="u-cover u-find-cover">
	 <div class="wrap f-cb">
		 <a class="j-href wrap"  href="video/tocou.do?counseId=${counse.coursedId}" target="_blank" data-index="1" data-name="和阿美一起学信息图表">
			 <div class="img"> 
				 <div class="pic f-pr"> 
					<img class="imgPic" src="${counse.couseCoverPath}" alt="${counse.couseTitle}">
				 </div>
				 <div class="tit">
					<h3 class="f-thide">${counse.couseTitle}</h3>
				 </div> 
				<!--  <div class="orgName f-fs0 f-thide"></div> --> 
				<div class="thumb">
					 <div class="f-cb" style="height:30PX;line-height:30px;"> <span class="">上传者：${counse.username }</span></div>
					 <div class="">
						<span class="">点击量：${counse.clickNum}</span>
						<span style="float:right;">共四课时</span> 
					 </div> 
				 </div>
				 <div class="u-cst-10"></div>
			 </div>
		 </a>
	 </div>
 </div>
 </c:forEach>
 
 </div>
	  <div class="ui-pager">
		 <div class="auto-1467597023087">
		 		 <c:choose>
		         <c:when test="${page -1 > 0 }">
		         	<a class="zbtn zprv" href="javascript:;" onclick="findVByPage(${columnid},${page-1})">上一页</a>
		         </c:when>
		         <c:otherwise>
		         	<a class="zbtn zprv js-disabled" style="background-color: gray" href="javascript:;">上一页</a>
		         </c:otherwise>
		         </c:choose>
				 <!-- <a class="zbtn zprv js-disabled" href="#">上一页</a> -->
				 <c:choose>
				 <c:when test="${maxPage>6}">
				      
				     <c:choose>
				     <c:when test="${page<6}">
							 <c:forEach var="x" begin="1" end="6">
							 <c:choose>
							 <c:when test="${x==page}">
					         	<a class="zpgi js-selected" href="javascript:;">${x}</a>
					         </c:when>
					         <c:otherwise>
					         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${columnid},${x})">${x}</a>
					         </c:otherwise>
					         </c:choose>
							 </c:forEach>
							 <span class="zdot">...</span>
					 </c:when>
					 <c:when test="${page>=maxPage-4}">
					         <a class="zpgi" href="javascript:;" onclick="findVByPage(${columnid},1)">1</a>
					 		 <span class="zdot">...</span>
							 <c:forEach var="x" begin="${maxPage-4}" end="${maxPage}">
							 <c:choose>
							 <c:when test="${x==page}">
					         	<a class="zpgi js-selected" href="javascript:;">${x}</a>
					         </c:when>
					         <c:otherwise>
					         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${columnid},${x})">${x}</a>
					         </c:otherwise>
					         </c:choose>
							 </c:forEach>
					 </c:when>
					 <c:when test="${page>=5&&page<(maxPage-4)}">
					 		 <a class="zpgi" href="javascript:;" onclick="findVByPage(${columnid},1)">1</a>
					 		 <span class="zdot">...</span>
							 <c:forEach var="x" begin="${page-2}" end="${page+2}">
							 <c:choose>
							 <c:when test="${x==page}">
					         	<a class="zpgi js-selected" href="javascript:;">${x}</a>
					         </c:when>
					         <c:otherwise>
					         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${columnid},${x})">${x}</a>
					         </c:otherwise>
					         </c:choose>
							 </c:forEach>
							 <span class="zdot">...</span>
					 </c:when>
					 </c:choose>
				</c:when>
				<c:otherwise>
					 <c:forEach var="x" begin="1" end="${maxPage}">
					 <c:choose>
					 <c:when test="${x==page}">
			         	<a class="zpgi js-selected" href="javascript:;" onclick="findVByPage(${columnid},${x})">${x}</a>
			         </c:when>
			         <c:otherwise>
			         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${columnid},${x})">${x}</a>
			         </c:otherwise>
			         </c:choose>
					 </c:forEach>
				 </c:otherwise>
				 </c:choose>
				 <!-- 
				 <a class="zpgi js-selected" href="#">1</a>
				 <a class="zpgi" href="#">2</a>
				 <a class="zpgi" href="#">3</a>
				 <a class="zpgi" href="#">4</a>
				 <a class="zpgi" href="#">5</a>
				 <a class="zpgi" href="#">6</a> 
				 <span class="zdot">...</span> -->
				 <!-- <a class="zbtn znxt" href="#">下一页</a> -->
				 <c:choose>
		         <c:when test="${page < maxPage }">
		         	<a class="zbtn znxt" href="javascript:;" onclick="findVByPage(${columnid},${page+1})">下一页</a>
		         </c:when>
		         <c:otherwise>
		         	<a class="zbtn znxt js-disabled" href="javascript:;" style="background-color: gray">下一页</a>
		         </c:otherwise>
		         </c:choose>
		 </div>
	 </div> 
         
 </div>
 </div>
 </div>
 </div> 
<!--  <form action="video/tocou.do" id="tocourse" method="post"  target="_blank">
<input type="hidden" name="counseId" id="counseId"/>
</form> -->
  </body>
</html>
