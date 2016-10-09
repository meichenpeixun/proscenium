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
		<title>已上传视频</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
		<link href="u/css/st.css" type="text/css" rel="stylesheet">
		<script type="text/javascript" src="js/jf.js"></script>
		<link rel="stylesheet" type="text/css" href="css/css.css" />
		<link rel="stylesheet" type="text/css" href="css/up_cg.css" />
		<link rel="stylesheet" type="text/css" href="css/picsel.css" />
		<link href="list/style/cores.css" type="text/css" rel="stylesheet">
		<script type="text/javascript" src="js/jquery-1.7.min.js"></script>
		<!-- <script src="up_success/prototype.js"></script> -->
		<script type="text/javascript">
			function closes(){
				document.getElementById("kc").style.display ="none";
				document.getElementById("bg").style.display ="none";
			}function ops(){
				document.getElementById("bg").style.display ="block";
				document.getElementById("kc").style.display ="block";
			}
			 function findVByPage(userid,page){
				  var audit = 1;
				  var userid =userid;
				  var page =page;
			     $.ajax({  
	                type: "POST",  
	                url: "<%=basePath%>/per_cen/findViByUId.do",  
	                data: {userid:userid,page:page,audit:audit},
	                async:false,
	                dataType: "html",  
	                success:function(data){
	                     $("#mainr_fr").html(data);
	     			}
	     		}); 
			 }
			
		</script>
		<style type="text/css">
			.dateTable_upload .stat .complete span {
				padding: 5px 0 0 25px;
				color: #909090;
			}
			.pop_up_fixed {
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
					<li style="background:url(u/images/zuye.png) no-repeat 5px 20px;"><a href="<%=basePath%>pcenter.jsp">会员主页</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
					<li style="background:url(u/images/gr.png) no-repeat 5px 15px;"><a href="<%=basePath%>per_cen/per_zlws.do">个人认证</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
					<!--<li style="background:url(u/images/tea.png) no-repeat 5px 20px; "><a style="color:#ff6600;">我是讲师</a></li>-->
					<li style="background:url(u/images/upload.png) no-repeat 5px 20px;"><a href="<%=basePath%>upload.jsp">上传视频</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
					<li style="background:url(u/images/ysc.png) no-repeat 5px 15px;"><a href="<%=basePath%>per_cen/up_cg.do">已上传视频</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
					<li style="background:url(u/images/kecng.png) no-repeat 5px 15px;"><a href="<%=basePath%>per_cen/up_kcj.do">我的课程</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
					<!--<li style="background:url(u/images/xuy.png) no-repeat 5px 20px;"><a style="color:#ff6600;">我是学员</a></li>-->
					<li style="background:url(u/images/bfhis.png) no-repeat 5px 20px;"><a href="/">播放记录</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
					<li style="background:url(u/images/sc.png) no-repeat 5px 20px;"><a href="/">收藏记录</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
					<li style="background:url(u/images/gm.png) no-repeat 5px 20px;"><a href="/">购买课程</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
					<li style="background:url(u/images/vip.png) no-repeat 5px 15px;"><a href="/">开通VIP</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
				</ul>
			</div>
			<div class="mainr fr" id="mainr_fr">
				<!--<div class="min">
					<ul>
						<li><a href="#" class="active">以上传视频(10)</a></li>
						<li><a href="#">未上传视频(42)</a></li>
						<li><a href="#">审核中(4)</a></li>
					</ul>
				</div>
				<div class="qsel">
					sdf
				</div>-->
				<div class="r-t-nav-box">
					<div class="r-t-nav-title">
						我上传的
					</div>
					<div class="r-t-nav-main clearfix">
						<div class="ct-nav-icon left prv-btn"></div>
						<div class="three-mun-box left">
							<ul class="clearfix">
								<li><a class="active" href="javascript:;">已通过视频(${counts})</a></li>
								<li><a href="javascript:;" onclick="findDVByPage(${userid},1)">未通过视频(6)</a></li>
								<li><a href="<%=basePath%>per_cen/up_shz.do">未审核视频(3)</a></li>
								<li><a href="<%=basePath%>per_cen/up_kcj.do">我的课程(3)</a></li>
							</ul>
						</div>
						<div class="ct-nav-icon left next-btn"></div>
					</div>
				</div>
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
												<div class="check">
													<input onclick="mg.check_all(1);" id="check_all" type="checkbox"><label for="check_all">全选</label>
												</div>
												<div class="adddel" id="adddel">
														<div class="fn2nd">
															<a  href="">添加到课程</a>
														</div>
														<div class="splite">|</div>
														<div class="fn2nd">
															<a href="">删除</a>
														</div>
												</div>
											</div>
											<div class="clear"></div>
										</div>
									</div>
								</div>
								<div id="bg"></div>
				<div id="kc" class="mod_pop pop_up_fixed sp1">
				<div class="mod_pop_hd" style="position:relative; z-index:101;"> <h3></h3> <a href="javascript:closes();" class="mod_pop_close _close"></a> </div>
				<div style="margin-left:15px;">
						<h3 class="ha">将1个视频添加到课程：</h3><br/>
					</div>
				<div class="kctj" style="margin:10px 0 0 15px;max-height: 320px;min-height:350px;overflow-y:auto;overflow-x: hidden;clear:both;">
					<ul>
						<li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="radio" name="a" />
								音乐专辑 
							</label>
						</li><li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="radio" name="a" />
								音乐专辑 
							</label>
						</li><li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="radio" name="a" />
								音乐专辑 
							</label>
						</li><li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="radio" name="a" />
								音乐专辑 
							</label>
						</li><li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="radio" name="a" />
								音乐专辑 
							</label>
						</li><li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="radio" name="a" />
								音乐专辑 
							</label>
						</li><li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="radio" name="a" />
								音乐专辑 
							</label>
						</li><li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="radio" name="a" />
								音乐专辑 
							</label>
						</li>
					</ul>
				</div>
				<div class="qdo">
					<a href="" target="_self"><span class="qd">确定</span></a>
					<a href="javascript:closes();" target="_self"><span class="qx">取消</span></a>
				</div>
				<!--添加视频。课程分割-->
				 <script src="js/picsel.js"></script>
			</div>
								<div class="manager_con">
									<div class="databox" id="databox">
									  <table class="dateTable_upload" border="0" cellpadding="0" cellspacing="0">
										<thead>
											<tr class="">
												<th class="m_check"></th>
												<th class="m_video" style="font-weight: normal;">视频封面</th>		
												<th class="m_stat" style="font-weight: normal;">状态</th>
												<th class="m_heat" style="font-weight: normal;">指数</th>
												<th class="m_opt" style="font-weight: normal;">操作</th>
											</tr>
										</thead>
										<tbody id="videolist">	
											<c:forEach items="${videos}" var="video">													
											 <tr id="" class="">
												<td class="m_check">
													<div class="check"><input value="413406326" name="videos[]" type="checkbox"></div>
												</td>
												<td class="m_video">
													<ul class="v vsh">
														<li class="v_link"><a href="#" target="_blank" title="${video.title }"></a></li>
														<li class="v_thumb">
															<img src="<%=basePath%>${video.screenshotpath}" alt="${video.title }" title="${video.title}">
														</li>
														<li class="v_ishd"></li>
														<li class="v_menu" style="display: none;" id="PlayListFlag_XMTY1MzYyNTMwNA=="><span class="ico__listadd" title="添加到点播单"></span></li>
														<li class="v_time"><span class="num">22:21</span><span class="bg"></span></li>
														<li class="v_title"><a href="#" target="_blank" title="${video.title }">${video.title }</a>
														</li>
														<li class="v_info"><span class="num">${video.uptime}</span></li>
														<li class="v_promotion"></li>
													</ul>
												</td>
												<td class="m_stat">
													<div class="stat">
																	<div id="" class="stat_cont">
																		<div class="complete"><span>已发布</span></div>										
																	</div>				
													</td>
													<td class="m_heat">
														<ul class="heat">
															<li>
																<a href="" target="_blank"><span class="ico__statplay" title="播放"></span>2</a>
															</li>
															<li>
																<a target=" _blank" href=""><span title="评论" class="ico__statcomment"></span>0</a>
															</li>
														</ul>
													</td>
													<td class="m_opt">
														<div class="action">
															<span class="share"><a href="" target="_blank">编辑</a></span>
															<span class="share"><a href="" target="_blank">删除</a></span>
															<span class="share"><a href="javascript:ops();">添加课程</a></span>
														</div>
													</td>
												</tr>
												</c:forEach>
												
												
												
												<!-- <tr id="" class="">
												<td class="m_check">
													<div class="check"><input value="413406326" name="videos[]" type="checkbox"></div>
												</td>
												<td class="m_video">
													<ul class="v vsh">
														<li class="v_link"><a href="#" target="_blank" title="PHP教程 15.1.1 数据库抽象层PDO"></a></li>
														<li class="v_thumb">
															<img src="up_success/0542040856319C546A0A440AF8BA3F5F.jpg" alt="PHP教程 15.1.1 数据库抽象层PDO" title="PHP教程 15.1.1 数据库抽象层PDO">
														</li>
														<li class="v_ishd"></li>
														<li class="v_menu" style="display: none;" id="PlayListFlag_XMTY1MzYyNTMwNA=="><span class="ico__listadd" title="添加到点播单"></span></li>
														<li class="v_time"><span class="num">22:21</span><span class="bg"></span></li>
														<li class="v_title"><a href="#" target="_blank" title="PHP教程 15.1.1 数据库抽象层PDO">PHP教程 15.1.1 数据库抽象层PDO</a>
														</li>
														<li class="v_info"><span class="num">2016-07-22 14:20</span></li>
														<li class="v_promotion"></li>
													</ul>
												</td>
												<td class="m_stat">
													<div class="stat">
																	<div id="" class="stat_cont">
																		<div class="complete"><span>已发布</span></div>										
																	</div>				
													</td>
													<td class="m_heat">
														<ul class="heat">
															<li>
																<a href="" target="_blank"><span class="ico__statplay" title="播放"></span>2</a>
															</li>
															<li>
																<a target=" _blank" href=""><span title="评论" class="ico__statcomment"></span>0</a>
															</li>
														</ul>
													</td>
													<td class="m_opt">
														<div class="action">
															<span class="share"><a href="" target="_blank">编辑</a></span>
															<span class="share"><a href="" target="_blank">删除</a></span>
															<span class="share"><a href="javascript:ops();">添加课程</a></span>
														</div>
													</td>
												</tr>
												<tr id="" class="">
												<td class="m_check">
													<div class="check"><input value="413406326" name="videos[]" type="checkbox"></div>
												</td>
												<td class="m_video">
													<ul class="v vsh">
														<li class="v_link"><a href="#" target="_blank" title="PHP教程 15.1.1 数据库抽象层PDO"></a></li>
														<li class="v_thumb">
															<img src="up_success/0542040856319C546A0A440AF8BA3F5F.jpg" alt="PHP教程 15.1.1 数据库抽象层PDO" title="PHP教程 15.1.1 数据库抽象层PDO">
														</li>
														<li class="v_ishd"></li>
														<li class="v_menu" style="display: none;" id="PlayListFlag_XMTY1MzYyNTMwNA=="><span class="ico__listadd" title="添加到点播单"></span></li>
														<li class="v_time"><span class="num">22:21</span><span class="bg"></span></li>
														<li class="v_title"><a href="#" target="_blank" title="PHP教程 15.1.1 数据库抽象层PDO">PHP教程 15.1.1 数据库抽象层PDO</a>
														</li>
														<li class="v_info"><span class="num">2016-07-22 14:20</span></li>
														<li class="v_promotion"></li>
													</ul>
												</td>
												<td class="m_stat">
													<div class="stat">
																	<div id="" class="stat_cont">
																		<div class="complete"><span>已发布</span></div>										
																	</div>				
													</td>
													<td class="m_heat">
														<ul class="heat">
															<li>
																<a href="" target="_blank"><span class="ico__statplay" title="播放"></span>2</a>
															</li>
															<li>
																<a target=" _blank" href=""><span title="评论" class="ico__statcomment"></span>0</a>
															</li>
														</ul>
													</td>
													<td class="m_opt">
														<div class="action">
															<span class="share"><a href="" target="_blank">编辑</a></span>
															<span class="share"><a href="" target="_blank">删除</a></span>
															<span class="share"><a href="javascript:ops();">添加课程</a></span>
														</div>
													</td>
												</tr>
												<tr id="" class="">
												<td class="m_check">
													<div class="check"><input value="413406326" name="videos[]" type="checkbox"></div>
												</td>
												<td class="m_video">
													<ul class="v vsh">
														<li class="v_link"><a href="#" target="_blank" title="PHP教程 15.1.1 数据库抽象层PDO"></a></li>
														<li class="v_thumb">
															<img src="up_success/0542040856319C546A0A440AF8BA3F5F.jpg" alt="PHP教程 15.1.1 数据库抽象层PDO" title="PHP教程 15.1.1 数据库抽象层PDO">
														</li>
														<li class="v_ishd"></li>
														<li class="v_menu" style="display: none;" id="PlayListFlag_XMTY1MzYyNTMwNA=="><span class="ico__listadd" title="添加到点播单"></span></li>
														<li class="v_time"><span class="num">22:21</span><span class="bg"></span></li>
														<li class="v_title"><a href="#" target="_blank" title="PHP教程 15.1.1 数据库抽象层PDO">PHP教程 15.1.1 数据库抽象层PDO</a>
														</li>
														<li class="v_info"><span class="num">2016-07-22 14:20</span></li>
														<li class="v_promotion"></li>
													</ul>
												</td>
												<td class="m_stat">
													<div class="stat">
																	<div id="" class="stat_cont">
																		<div class="complete"><span>已发布</span></div>										
																	</div>				
													</td>
													<td class="m_heat">
														<ul class="heat">
															<li>
																<a href="" target="_blank"><span class="ico__statplay" title="播放"></span>2</a>
															</li>
															<li>
																<a target=" _blank" href=""><span title="评论" class="ico__statcomment"></span>0</a>
															</li>
														</ul>
													</td>
													<td class="m_opt">
														<div class="action">
															<span class="share"><a href="" target="_blank">编辑</a></span>
															<span class="share"><a href="" target="_blank">删除</a></span>
															<span class="share"><a href="javascript:ops();">添加课程</a></span>
														</div>
													</td> 
													</tr>-->
												
											</tbody>
										</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				 	  <div class="ui-pager">
		 <div class="auto-1467597023087">
		 		 <c:choose>
		         <c:when test="${page -1 > 0 }">
		         	<a class="zbtn zprv" href="javascript:;" onclick="findVByPage(${userid},${page-1})">上一页</a>
		         </c:when>
		         <c:otherwise>
		         	<a class="zbtn zprv js-disabled" style="background-color: gray" href="javascript:;" onclick="findVByPage(${userid},${page-1})"></a>
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
					         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${userid},${x})">${x}</a>
					         </c:otherwise>
					         </c:choose>
							 </c:forEach>
							 <span class="zdot">...</span>
					 </c:when>
					 <c:when test="${page>=maxPage-4}">
					         <a class="zpgi" href="javascript:;" onclick="findVByPage(${userid},1)">1</a>
					 		 <span class="zdot">...</span>
							 <c:forEach var="x" begin="${maxPage-4}" end="${maxPage}">
							 <c:choose>
							 <c:when test="${x==page}">
					         	<a class="zpgi js-selected" href="javascript:;">${x}</a>
					         </c:when>
					         <c:otherwise>
					         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${userid},${x})">${x}</a>
					         </c:otherwise>
					         </c:choose>
							 </c:forEach>
					 </c:when>
					 <c:when test="${page>=5&&page<(maxPage-4)}">
					 		 <a class="zpgi" href="javascript:;" onclick="findVByPage(${userid},1)">1</a>
					 		 <span class="zdot">...</span>
							 <c:forEach var="x" begin="${page-2}" end="${page+2}">
							 <c:choose>
							 <c:when test="${x==page}">
					         	<a class="zpgi js-selected" href="javascript:;">${x}</a>
					         </c:when>
					         <c:otherwise>
					         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${userid},${x})">${x}</a>
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
			         	<a class="zpgi js-selected" href="javascript:;" onclick="findVByPage(${userid},${x})">${x}</a>
			         </c:when>
			         <c:otherwise>
			         	<a class="zpgi" href="javascript:;" onclick="findVByPage(${userid},${x})">${x}</a>
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
		         	<a class="zbtn znxt" href="javascript:;" onclick="findVByPage(${userid},${page+1})">下一页</a>
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
		<div id="kc" class="mod_pop pop_up_fixed sp1">
				<div class="mod_pop_hd" style="position:relative; z-index:101;"> <h3></h3> <a href="javascript:closes();" class="mod_pop_close _close"></a> </div>
				<div style="margin-left:15px;">
						<h3 class="ha">将1个视频添加到课程：</h3><br/>
					</div>
				<div class="kctj" style="margin:10px 0 0 15px;max-height: 320px;min-height:350px;overflow-y:auto;overflow-x: hidden;clear:both;">
					<ul>
						<li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="checkbox" />
								音乐专辑 
							</label>
						</li><li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="checkbox" />
								音乐专辑 
							</label>
						</li><li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="checkbox" />
								音乐专辑 
							</label>
						</li><li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="checkbox" />
								音乐专辑 
							</label>
						</li><li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="checkbox" />
								音乐专辑 
							</label>
						</li><li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="checkbox" />
								音乐专辑 
							</label>
						</li><li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="checkbox" />
								音乐专辑 
							</label>
						</li><li style="border-bottom: 1px solid #e6e6e6;font-size: 14px;cursor: pointer;overflow: hidden;height:30px;">
							<label style="line-height:30px;cursor: pointer;">
								<input type="checkbox" />
								音乐专辑 
							</label>
						</li>
					</ul>
				</div>
				<div class="qdo">
					<a href="" target="_self"><span class="qd">确定</span></a>
					<a href="javascript:closes();" target="_self"><span class="qx">取消</span></a>
				</div>
				<!--添加视频。课程分割-->
				 <script src="js/picsel.js"></script>
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