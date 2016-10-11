<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
		<title>编辑视频</title>
		<link href="u/css/st.css" type="text/css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="css/css2.css" />
		<script src="js/jquery-1.10.2.min.js"></script>
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
   
	
                     <form action="batchvideo/edit_video.do" id="edit_video_from" >
						<input type="hidden" id="videoid" name="videoid" value="${vid.videoid}"/>
						<div>
							</div>
							<div class="space20"></div>
							<div class="cs">
								<div>
									标题：<input name="title" id="title" type="text" value="${vid.title}">
									<div class="space20"></div>
								</div>
							</div>
							<div class="space20"></div>
							<div class="cs">
									简介：<textarea name="descript" id="descript" cols="30" rows="10">${vid.descript}</textarea>
									<div class="space20"></div>
							</div>
							<div class="space20"></div>
							<div class="cs">
								 <div class="items" style="z-index:92">
								<span class="f_14">课程：</span>
							<div>
									<select id="font_size" name="coursename"  style="width:246px;height: 31px;cursor: pointer;" onchange="changeChapter()">
									<c:forEach items="${counses}" var="counse">
									<c:choose>
									<c:when test="${counse.couseTitle==vid.coursename}">
									<option value="${counse.coursedId}" selected="selected">${counse.couseTitle}</option>
									</c:when>
									<c:otherwise>
									<option value="${counse.coursedId}" >${counse.couseTitle}</option>
									</c:otherwise>
									</c:choose>
									</c:forEach>
									</select>
									<div class="space20"></div>
								</div>
								</div>
								<div class="space20"></div>
								<span class="f_14">章节：</span>
								<div class="items" style="z-index:92">
									<select id="font_size2" name="chapterName"  style="width:246px;height: 31px;"">
										<c:forEach items="${chpters}" var="chpter">
										<c:choose>
										<c:when test="${chpter.chapterId==vid.chapterId}">
										<option value="${chpter.chapterId}" selected="selected">${chpter.chapterName}</option>
										</c:when>
										<c:otherwise>
										<option value="${chpter.chapterId}" >${chpter.chapterName}</option>
										</c:otherwise>
										</c:choose>
										</c:forEach>
									</select>
									
								 </div>
							</div>
							<div class="space20"></div>
							<div class="cs">
								标签：<input class="in_w" id="tags" name="tags" type="text" value="${vid.tags}">
								<div class="space20"></div>
							</div>
							<div>
								版权：
								<c:choose>
								<c:when test="${vid.vtypes==0 }">
								<label><input type="radio" name="identity" value="0" checked="checked"/>&nbsp;原创视频</label>&nbsp;&nbsp;
								<label><input type="radio" name="identity" value="1" />&nbsp;转载视频</label>
								</c:when>
								<c:otherwise>
								<label><input type="radio" name="identity" value="0" />&nbsp;原创视频</label>&nbsp;&nbsp;
								<label><input type="radio" name="identity" value="1" checked="checked"/>&nbsp;转载视频</label>
								</c:otherwise>		
								</c:choose>					
							</div>
							<div class="space20"></div>
							<div class="cs">
									封面：<input type="file" name="screenshotpath" id="screenshotpath">
									<div class="space20"></div>
							</div>
							<div class="space20"></div>
							<div class="cs dx">
								<input id="ok"  type="button" onclick="bc_editV()" value="保  存" />
								<input id="nook"  type="button" onclick="quit()" value="取  消" />
							</div>
							</form>
							
		

  </body>
</html>
