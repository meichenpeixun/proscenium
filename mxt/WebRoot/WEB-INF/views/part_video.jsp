<<<<<<< HEAD
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
	</head>
<body>
			           <c:choose>
            <c:when test="${!empty videos}">
             <ul class="video_list" >
            <%int i=1; %>
             <c:forEach items="${videos}" var="video">
				<li class="list_item">
					<div class="item_a"><span class="title _idx"><%=i %></span></div> 
					<% i++; %>
					<div class="item_b">
					    <c:choose>
					    <c:when test="${video.audit==1}">
						<a href="javascript:;"  onclick="playVe(${video.videoid})" class="img"> 
							<img src="${video.screenshotpath}" alt="${video.title}" height="100px" width="175px">
						</a>
						</c:when>
						<c:otherwise>
						<a href="javascript:;" class="img"> 
							<img src="${video.screenshotpath}" alt="${video.title}" height="100px" width="175px">
						</a>
						</c:otherwise>
						</c:choose>
						<div class="video_detail">
							<h3 class="title"> 
							<c:choose>
						    <c:when test="${video.audit==1}">
							<a href="javascript:;" onclick="playVe(${video.videoid})" target="_blank" title="${video.title}">${video.title}</a>  
							</c:when>
							<c:otherwise>
							<a href="javascript:;" target="_blank" title="${video.title}">${video.title}</a>  
							</c:otherwise>
							</c:choose>
								
							</h3> 
							<h6 class="desc"> 创建于：${video.uptime}</h6>
						</div>
					</div>
					<div class="item_c">
						<ol class="trend_list"> 
							<li class="item"><i class="icon_play"></i><span class="nums">${video.playnumber}</span></li>
							<li class="item"><i class="icon_discuss"></i><span class="nums _comment_num">${video.commnumber}</span></li> 
						</ol>
					</div> 
					<div class="item_d es">
						<c:choose>
						<c:when test="${video.tags eq null || video.descript eq null || video.categorys eq null || video.coursename eq null }">
						<div class="complete"><span style="color:red;">资料不齐全</span></div>
						</c:when>
						<c:when test="${video.audit==1}">
						<div class="complete"><span>已发布</span></div>	
						</c:when>
						<c:when test="${video.audit==0}">
						<div class="complete"><span style="color:red;">未审核</span></div>	
						</c:when>
						<c:when test="${video.audit==2||video.audit==3||video.audit==4||video.audit==5||video.audit==6}">
						<div class="complete"><span style="color:red;">未审核通过</span></div>	
						</c:when>
						</c:choose>		
					</div> 
					<div class="item_d">
						<ol class="option_list"> 
							<li class="item"> 
								<a href="javascript:;" class="btn_normal _edit_video" onclick="editVideoByInKc(${userid},${counse.coursedId},${video.videoid})"><i class="icon_edited"></i><span class="inner">编辑</span></a>
								<a href="javascript:;" class="btn_normal _del_video"  onclick="deletVideoByInKc(${video.videoid})">
									<i class="icon_delete"></i><span class="inner">删除</span>
								</a>
							</li> 
							<li class="item">
								<a href="javascript:ops();" onclick="findcha(${video.videoid})" class="btn_normal _move_cover">
									<i class="icon_add"></i><span class="inner">移动到</span>
								</a>
							</li>
						</ol>
					</div>
				</li>
		

			</c:forEach>
			            </ul>
			 <div class="ui-pager">
		 <div class="auto-1467597023087">
		 		 <c:choose>
		         <c:when test="${page -1 > 0 }">
		         	<a class="zbtn zprv" href="javascript:;" onclick="findVByPage(${user.userid},${page-1})">上一页</a>
		         </c:when>
		         <c:otherwise>
		         	<a class="zbtn zprv js-disabled" style="background-color: gray" ></a>
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
					         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${user.userid},${x})">${x}</a>
					         </c:otherwise>
					         </c:choose>
							 </c:forEach>
							 <span class="zdot">...</span>
					 </c:when>
					 <c:when test="${page>=maxPage-4}">
					         <a class="zpgi" href="javascript:;" onclick="findVByPage(${user.userid},1)">1</a>
					 		 <span class="zdot">...</span>
							 <c:forEach var="x" begin="${maxPage-4}" end="${maxPage}">
							 <c:choose>
							 <c:when test="${x==page}">
					         	<a class="zpgi js-selected" href="javascript:;">${x}</a>
					         </c:when>
					         <c:otherwise>
					         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${user.userid},${x})">${x}</a>
					         </c:otherwise>
					         </c:choose>
							 </c:forEach>
					 </c:when>
					 <c:when test="${page>=5&&page<(maxPage-4)}">
					 		 <a class="zpgi" href="javascript:;" onclick="findVByPage(${user.userid},1)">1</a>
					 		 <span class="zdot">...</span>
							 <c:forEach var="x" begin="${page-2}" end="${page+2}">
							 <c:choose>
							 <c:when test="${x==page}">
					         	<a class="zpgi js-selected" href="javascript:;">${x}</a>
					         </c:when>
					         <c:otherwise>
					         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${user.userid},${x})">${x}</a>
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
			         	<a class="zpgi js-selected" href="javascript:;" onclick="findVByPage(${user.userid},${x})">${x}</a>
			         </c:when>
			         <c:otherwise>
			         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${user.userid},${x})">${x}</a>
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
		         	<a class="zbtn znxt" href="javascript:;" onclick="findVByPage(${user.userid},${page+1})">下一页</a>
		         </c:when>
		         <c:otherwise>
		         	<a class="zbtn znxt js-disabled" href="javascript:;" style="background-color: gray">下一页</a>
		         </c:otherwise>
		         </c:choose>
		 </div>
				</div>
			

            </c:when>
            <c:otherwise>
             <ul class="video_list" >
             </ul>
            	<div align='center'>
					<i><img src="images/h.png" class="ist"></i>本章节中还没有视频，来添加几个视频进去吧！
					<div>
						<button class="btn2" onclick="javascript:op();">添加视频</button>
					</div>
				</div>
            </c:otherwise>
            </c:choose>

  </body>
</html>
=======
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
	</head>
<body>
			           <c:choose>
            <c:when test="${!empty videos}">
             <ul class="video_list" >
            <%int i=1; %>
             <c:forEach items="${videos}" var="video">
				<li class="list_item">
					<div class="item_a"><span class="title _idx"><%=i %></span></div> 
					<% i++; %>
					<div class="item_b">
					    <c:choose>
					    <c:when test="${video.audit==1}">
						<a href="javascript:;"  onclick="playVe(${video.videoid})" class="img"> 
							<img src="${video.screenshotpath}" alt="${video.title}" height="100px" width="175px">
						</a>
						</c:when>
						<c:otherwise>
						<a href="javascript:;" class="img"> 
							<img src="${video.screenshotpath}" alt="${video.title}" height="100px" width="175px">
						</a>
						</c:otherwise>
						</c:choose>
						<div class="video_detail">
							<h3 class="title"> 
							<c:choose>
						    <c:when test="${video.audit==1}">
							<a href="javascript:;" onclick="playVe(${video.videoid})" target="_blank" title="${video.title}">${video.title}</a>  
							</c:when>
							<c:otherwise>
							<a href="javascript:;" target="_blank" title="${video.title}">${video.title}</a>  
							</c:otherwise>
							</c:choose>
								
							</h3> 
							<h6 class="desc"> 创建于：${video.uptime}</h6>
						</div>
					</div>
					<div class="item_c">
						<ol class="trend_list"> 
							<li class="item"><i class="icon_play"></i><span class="nums">${video.playnumber}</span></li>
							<li class="item"><i class="icon_discuss"></i><span class="nums _comment_num">${video.commnumber}</span></li> 
						</ol>
					</div> 
					<div class="item_d es">
						<c:choose>
						<c:when test="${video.tags eq null || video.descript eq null || video.categorys eq null || video.coursename eq null }">
						<div class="complete"><span style="color:red;">资料不齐全</span></div>
						</c:when>
						<c:when test="${video.audit==1}">
						<div class="complete"><span>已发布</span></div>	
						</c:when>
						<c:when test="${video.audit==0}">
						<div class="complete"><span style="color:red;">未审核</span></div>	
						</c:when>
						<c:when test="${video.audit==2||video.audit==3||video.audit==4||video.audit==5||video.audit==6}">
						<div class="complete"><span style="color:red;">未审核通过</span></div>	
						</c:when>
						</c:choose>		
					</div> 
					<div class="item_d">
						<ol class="option_list"> 
							<li class="item"> 
								<a href="javascript:;" class="btn_normal _edit_video" onclick="editVideoByInKc(${userid},${counse.coursedId},${video.videoid})"><i class="icon_edited"></i><span class="inner">编辑</span></a>
								<a href="javascript:;" class="btn_normal _del_video"  onclick="deletVideoByInKc(${video.videoid})">
									<i class="icon_delete"></i><span class="inner">删除</span>
								</a>
							</li> 
							<li class="item">
								<a href="javascript:ops();" onclick="findcha(${video.videoid})" class="btn_normal _move_cover">
									<i class="icon_add"></i><span class="inner">移动到</span>
								</a>
							</li>
						</ol>
					</div>
				</li>
		

			</c:forEach>
			            </ul>
			 <div class="ui-pager">
		 <div class="auto-1467597023087">
		 		 <c:choose>
		         <c:when test="${page -1 > 0 }">
		         	<a class="zbtn zprv" href="javascript:;" onclick="findVByPage(${user.userid},${page-1})">上一页</a>
		         </c:when>
		         <c:otherwise>
		         	<a class="zbtn zprv js-disabled" style="background-color: gray" ></a>
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
					         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${user.userid},${x})">${x}</a>
					         </c:otherwise>
					         </c:choose>
							 </c:forEach>
							 <span class="zdot">...</span>
					 </c:when>
					 <c:when test="${page>=maxPage-4}">
					         <a class="zpgi" href="javascript:;" onclick="findVByPage(${user.userid},1)">1</a>
					 		 <span class="zdot">...</span>
							 <c:forEach var="x" begin="${maxPage-4}" end="${maxPage}">
							 <c:choose>
							 <c:when test="${x==page}">
					         	<a class="zpgi js-selected" href="javascript:;">${x}</a>
					         </c:when>
					         <c:otherwise>
					         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${user.userid},${x})">${x}</a>
					         </c:otherwise>
					         </c:choose>
							 </c:forEach>
					 </c:when>
					 <c:when test="${page>=5&&page<(maxPage-4)}">
					 		 <a class="zpgi" href="javascript:;" onclick="findVByPage(${user.userid},1)">1</a>
					 		 <span class="zdot">...</span>
							 <c:forEach var="x" begin="${page-2}" end="${page+2}">
							 <c:choose>
							 <c:when test="${x==page}">
					         	<a class="zpgi js-selected" href="javascript:;">${x}</a>
					         </c:when>
					         <c:otherwise>
					         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${user.userid},${x})">${x}</a>
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
			         	<a class="zpgi js-selected" href="javascript:;" onclick="findVByPage(${user.userid},${x})">${x}</a>
			         </c:when>
			         <c:otherwise>
			         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${user.userid},${x})">${x}</a>
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
		         	<a class="zbtn znxt" href="javascript:;" onclick="findVByPage(${user.userid},${page+1})">下一页</a>
		         </c:when>
		         <c:otherwise>
		         	<a class="zbtn znxt js-disabled" href="javascript:;" style="background-color: gray">下一页</a>
		         </c:otherwise>
		         </c:choose>
		 </div>
				</div>
			

            </c:when>
            <c:otherwise>
             <ul class="video_list" >
             </ul>
            	<div align='center'>
					<i><img src="images/h.png" class="ist"></i>本章节中还没有视频，来添加几个视频进去吧！
					<div>
						<button class="btn2" onclick="javascript:op();">添加视频</button>
					</div>
				</div>
            </c:otherwise>
            </c:choose>

  </body>
</html>
>>>>>>> refs/remotes/origin/master
