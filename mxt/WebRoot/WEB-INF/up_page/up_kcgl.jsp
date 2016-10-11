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
		<title>课程管理</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">

		<link href="u/css/st.css" type="text/css" rel="stylesheet">
		<script type="text/javascript" src="js/jf.js"></script>
		<link href="list/style/cores.css" type="text/css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="css/css.css" />
		<link rel="stylesheet" type="text/css" href="css/up_cg.css" />
		<link rel="stylesheet" type="text/css" href="css/picsel.css" />
		<script src="up_success/prototype.js"></script>
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript">
			function close(){
				document.getElementById("fc").style.display ="none";
				document.getElementById("bg").style.display ="none";
			}function op(){
				document.getElementById("fc").style.display ="block";
				document.getElementById("bg").style.display ="block";
			}
		    //修改课程
		
		</script>
		<script type="text/javascript">
			function close(){
				document.getElementById("fc").style.display ="none";
				document.getElementById("bg").style.display ="none";
			}function op(){
				document.getElementById("fc").style.display ="block";
				document.getElementById("bg").style.display ="block";
			}function closes(){
				document.getElementById("kc").style.display ="none";
				document.getElementById("bg").style.display ="none";
			}function ops(){
				document.getElementById("kc").style.display ="block";
				document.getElementById("bg").style.display ="block";
			}
			

		      function havad_ups(){
		    	 $("#haved-videos").submit(); 
		      }
		      function mycounses(userid,page){
		    	  var userid =userid;
				  var page =page;
			     $.ajax({  
			        type: "POST",  
			        url: "<%=basePath%>/per_cen/up_kcj.do",  
			        data: {userid:userid,page:page},
			        async:false,
			        dataType: "html",  
			        success:function(data){
		             $("#mainr_fr").html(data);
					}
				}); 
		      }
		      function part_xjkc(userid){
		    	  var userid =userid;
			     $.ajax({  
			        type: "POST",  
			        url: "<%=basePath%>/per_cen/up_xjkc.do",  
			        data: {userid:userid},
			        async:false,
			        dataType: "html",  
			        success:function(data){
		             $("#mainr_fr").html(data);
					}
				}); 
		      }
		      function delCounseByid(userid,counseId){
					if(delCouAndCha_check(userid,counseId)){
						if(confirm("确认删除吗？")){
						todelete(userid,counseId);
						}
					}
					else {
						if(confirm("此课程下有视频！需要前往删除吗？")){
							form_kc_sub(userid,counseId);
						}
					}
					
				 }
		      function todelete(userid,counseId){
		    	  $.ajax({  
		  	        type: "POST",  
		  	        url: "<%=basePath%>/per_cen/delCouAndChaById.do",  
		  	        data: {userid:userid,counseId:counseId},
		  	        async:false,
		  	        dataType: "html",  
		  	        success:function(data){
		               $("#mainr_fr").html(data);
		  			}
		  		}); 
		      }
		      function delCouAndCha_check(userid,counseId){
		    	  var boo =null;
		    	  $.ajax({  
		              type: "POST",  
		              url: "<%=basePath%>/per_cen/delCouAndCha_check.do",  
		              data: {counseId:counseId},  
		              dataType: "json",
		              async: false,
					  processData : true, 
					  success:function(data){
						  boo= data;
					   }
					 }); 
				return boo;	
		      }
		      function editCourseByVID(userid,coursedId){
		    	  
		    	  var userid =userid;
		    	  var coursedId =coursedId;
			     $.ajax({  
			        type: "POST",  
			        url: "<%=basePath%>/per_cen/editkc.do",  
			        data: {userid:userid,coursedId:coursedId},
			        async:false,
			        dataType: "html",  
			        success:function(data){
		             $("#mainr_fr").html(data);
					}
				}); 
		      }
		      function form_kc_sub(userid,coursedId){
		    	  $("#coursedId").val(coursedId);
		    	  $("#userid").val(userid);
		    	  $("#form_kc").submit();
		      }
		</script>
		<style type="text/css">
			.dateTable_upload .m_check {
				width: 1px;
				text-align: center;
				vertical-align: middle;
			}
			.dateTable_upload .heat {
				padding-left: 0px;
			}
			.dateTable_upload .stat .complete span {
				padding: 5px 0 0 25px;
				color: #909090;
			}.pop_up_fixed {
				padding-bottom: 50px;
			}
			.mod_pop {
				position: fixed;
				top: 50%;
				left: 50%;
				overflow: hidden;
				box-shadow: 0 0 5px #333;
				zoom: 1;
				z-index: 9999;
				background: #fff;
			}
			.iframe_mask_pop {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border: 0 none;
				background: transparent;
				z-index: 1;
			}
			.iframe {
				display: block;
			}
			.mod_pop_hd {
				position: relative;
				height: 35px;
				z-index: 2;
			}
			.mod_pop_hd .mod_pop_close {
				display: block;
				position: absolute;
				top: 0;
				right: 30px;
				width: 35px;
				height: 35px;
				text-align: center;
				text-indent: -9999px;
				font-size: 30px;
				font-family: hiragino sans gb,microsoft yahei;
				background: url(images/sprite_dialog.png) -100px 0;
				background-color: #000;
				color: #fff;
				overflow: hidden;
			}
			.picsel ul li img{
				width:140px;
				height:80px;
			}
			.kctj ul li:hover{
				color:#fff;
				background:#ff7e0c;
			}
			#bg{ display: none;  position: fixed;  top: 0%;  left: 0%;  width: 100%;  height: 100%;  background-color: black;  z-index:1001;  -moz-opacity: 0.7;  opacity:.70;  filter: alpha(opacity=70);}
		</style>
	</head>
	<body onload="processerbar(3000)">
	<form action="per_cen/up_zsplb.do" method="post" id="haved-videos">
	    <input type="hidden" name="userid" value="${user.userid}"/>
		<input type="hidden" name="audit" value="10"/>
		</form>
		<div class="header">
			<div class="h-wb">
				<div class="fl">
					<img class="f-fl img" src="list/images/logo3.png" title="美学堂" height="47" width="174">
				</div>
				<div class="nav">
					<ul>
						<li><a href="<%=basePath%>index.jsp">首页</a></li>
      				 	<li><a href="<%=basePath%>pub_course.jsp">公开课</a></li>
						<li><a href="/">讲师风采</a></li>
					</ul>
				</div>
				<div class="fr" style="margin-top:8px;"> 
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
			</div>
		</div>
		<!--<div class="adr clear" style="margin:20px auto;">
			您的当前位置：<a href="/">首页</a> > 公开课
		</div>-->
		<div class="topbar clear">
			<div class="topbg">
				<div class="txb fl">
					<img src="u/images/tx1.jpg">
					<div class="ws">
						<ul>
							<li class="gr">个人中心</li>
							<li class="qmr"><a href="/">这位童鞋不懒，就是什么也没有留下～～！</a></li>
						</ul>
					</div>
				</div>
				<div class="tpr fr">
					<ul>
						<li><img src="u/images/smrz.png"> <a style="vertical-align:middle;" href="/">实名认证</a></li>
						<li><img src="u/images/iphon.png"><a style="vertical-align:middle;" href="/">手机认证</a></li>
						<li><img src="u/images/emrz.png"> <a style="vertical-align:middle;" href="/">邮箱认证</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="main">
			<div class="mainl fl">
				<ul>
				    <li style="background:url(u/images/zuye.png) no-repeat 5px 20px;"><a href="<%=basePath%>pcenter.jsp">会员主页</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li>
					<li style="background:url(u/images/gr.png) no-repeat 5px 20px;"><a href="javascript:;">个人认证</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li><!--<%=basePath%>per_cen/per_zlws.do  -->
					<!--<li style="background:url(u/images/tea.png) no-repeat 5px 20px; "><a style="color:#ff6600;">我是讲师</a></li>-->
					<li style="background:url(u/images/upload.png) no-repeat 5px 20px;"><a href="<%=basePath%>upload.jsp">上传视频</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li>
					<li style="background:url(u/images/ysc.png) no-repeat 5px 15px;"><a href="javascript:;" onclick="havad_ups()">已上传视频</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li>
					<li style="background:url(u/images/kecng.png) no-repeat 5px 15px;"><a href="javascript:;" onclick="mycounses(${user.userid},1)">我的课程</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li>
					<!--<li style="background:url(u/images/xuy.png) no-repeat 5px 20px;"><a style="color:#ff6600;">我是学员</a></li>-->
					<li style="background:url(u/images/bfhis.png) no-repeat 5px 20px;"><a href="javascript:;">播放记录</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li>
					<li style="background:url(u/images/sc.png) no-repeat 5px 20px;"><a href="javascript:;">收藏记录</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li>
					<li style="background:url(u/images/gm.png) no-repeat 5px 20px;"><a href="javascript:;">购买课程</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li>
					<li style="background:url(u/images/vip.png) no-repeat 5px 15px;"><a href="javascript:;">开通VIP</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li>
				</ul>
			</div>
			<div class="mainr fr" id="mainr_fr">
 <div class="YK_section--container" _uc="mg" _ucpage="listvideo">
				<div class="YK_section" style="padding-bottom:0;">
					<div class="YK_box">
						<div class="clear"></div>
						<div class="bd">
							<div class="YK_manager">
								<div id="manageTool" class="manager_tool_fixBox">
									<div style="width: 1025px;">
										<div class="manager_tool">
											<div class="manager_action">
												<div class="adddel" id="adddel">
														<div class="fn2nd">
															<a href="javascript:;" onclick="part_xjkc(${userid})">+ 创建课程</a>
														</div>
												</div>
											</div>
											<div class="clear"></div>
										</div>
									</div>
								</div>
								<div class="manager_con">
									<div class="databox">
									  <table class="dateTable_upload" border="0" cellpadding="0" cellspacing="0">
										<thead>
											<tr class="">
												<th class="m_check"></th>
												<th class="m_video" style="font-weight: normal;padding-left:35px;">课程</th>		
												<th class="m_stat" style="font-weight: normal;">课程数</th>
												<th class="m_heat" style="font-weight: normal;">审核状态</th>
												<th class="m_opt" style="font-weight: normal;">操作</th>
											</tr>
										</thead>
										<tbody id="videolist">		
												
											<c:forEach items="${counses}" var="course">										
											 <tr id="" class="">
												<td class="m_check">
												</td>
												<td class="m_video">
													<ul class="v vsh">
														<li class="v_link"><a href="javascript:;" onclick="form_kc_sub(${userid},${course.coursedId})" title="${course.couseTitle}"></a></li>
														<li class="v_thumb">
															<img src="${course.couseCoverPath}" alt="${course.couseTitle}" title="${course.couseTitle}">
														</li>
														<li class="v_ishd"></li>
														<li class="v_menu" style="display: none;" id="PlayListFlag_XMTY1MzYyNTMwNA=="><span class="ico__listadd" title="添加到点播单"></span></li>
														<li class="v_title"><a href="javascript:;" onclick="form_kc_sub(${userid},${course.coursedId})" title="${course.couseTitle}">${course.couseTitle}</a>
														</li>
														<li class="v_info"><span class="num">${course.couseTitle}</span></li>
														<li class="v_promotion"></li>
													</ul>
												</td>
												<td class="m_stat">
													<div class="stat">
																	<div id="" class="stat_cont">
																		<div class="complete"><span>19</span></div>										
																	</div>				
													</td>
													<td class="m_heat">
														<ul class="heat">
															<li style="margin:15px 0px;">
																<c:choose>
															    <c:when test="${course.status==0}">
																<span style="text-align:center;">已发布</span>
															    </c:when>
															    <c:otherwise>
															    <span style="text-align:center; color: red;">正在审核</span>
															    </c:otherwise>
															    </c:choose>
															</li>
														</ul>
													</td>
													<td class="m_opt">
														<div class="action">
															<span class="share"><a href="javascript:;"  onclick="delCounseByid(${userid},${course.coursedId})">删除</a></span>
															<span class="share"><a href="javascript:;" onclick="editCourseByVID(${userid},${course.coursedId})" >修改</a></span>
														</div>
													</td>
												</tr>
												</c:forEach>
											
											</tbody>
										</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
													<form action="<%=basePath%>per_cen/up_kcnl.do" id="form_kc" method="post">
						  							<input type="hidden" name="userid" id="userid" value="" />
						  							<input type="hidden" name="coursedId" id="coursedId" value="" />
						  							</form>
								 <div class="ui-pager">
		 <div class="auto-1467597023087">
		 		 <c:choose>
		         <c:when test="${page -1 > 0 }">
		         	<a class="zbtn zprv" href="javascript:;" onclick="mycounses(${user.userid},${page-1})">上一页</a>
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
					         	<a class="zpgi" href="javascript:;" onclick="mycounses(${user.userid},${x})">${x}</a>
					         </c:otherwise>
					         </c:choose>
							 </c:forEach>
							 <span class="zdot">...</span>
					 </c:when>
					 <c:when test="${page>=maxPage-4}">
					         <a class="zpgi" href="javascript:;" onclick="mycounses(${user.userid},1)">1</a>
					 		 <span class="zdot">...</span>
							 <c:forEach var="x" begin="${maxPage-4}" end="${maxPage}">
							 <c:choose>
							 <c:when test="${x==page}">
					         	<a class="zpgi js-selected" href="javascript:;">${x}</a>
					         </c:when>
					         <c:otherwise>
					         	<a class="zpgi" href="javascript:;" onclick="mycounses(${user.userid},${x})">${x}</a>
					         </c:otherwise>
					         </c:choose>
							 </c:forEach>
					 </c:when>
					 <c:when test="${page>=5&&page<(maxPage-4)}">
					 		 <a class="zpgi" href="javascript:;" onclick="mycounses(${user.userid},1)">1</a>
					 		 <span class="zdot">...</span>
							 <c:forEach var="x" begin="${page-2}" end="${page+2}">
							 <c:choose>
							 <c:when test="${x==page}">
					         	<a class="zpgi js-selected" href="javascript:;">${x}</a>
					         </c:when>
					         <c:otherwise>
					         	<a class="zpgi" href="javascript:;" onclick="mycounses(${user.userid},${x})">${x}</a>
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
			         	<a class="zpgi js-selected" href="javascript:;" onclick="mycounses(${user.userid},${x})">${x}</a>
			         </c:when>
			         <c:otherwise>
			         	<a class="zpgi" href="javascript:;" onclick="mycounses(${user.userid},${x})">${x}</a>
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
		         	<a class="zbtn znxt" href="javascript:;"  onclick="mycounses(${user.userid},${page+1})">下一页</a>
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
		<script src="up_success/manager.js"></script>
		<!--网站底部-->
		<div class="footer clear">
			<div class="warp">
				<div class="w_l">
					<ul>
						<li><a href="">首页</a></li>
						<li><a href="">人才照片</a></li>
						<li><a href="">联系我们</a></li>
						<li><a href="">合作专区</a></li>
						<li><a href="">关于我们</a></li>
						<li><a href="">讲师招募</a></li>
						<li><a href="">意见反馈</a></li>
						<li><a href="">友情链接</a></li>
					</ul>
				</div>
				<div class="fr">
					<p>Copyright &copy; 2016 isupertest.com All Rights Reserved | 京ICP备 00000000号</p>
				</div>
			</div>
		</div>
		</div>
	</body>
</html>