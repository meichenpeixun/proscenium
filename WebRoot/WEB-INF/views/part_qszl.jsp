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
	</head>
	<body onload="processerbar(3000)">
		
			<div class="mainr fr">
				
				<div class="r-t-nav-box">
					<div class="r-t-nav-title">
						我上传的
					</div>
					<div class="r-t-nav-main clearfix">
						<div class="ct-nav-icon left prv-btn"></div>
						<div class="three-mun-box left">
							<ul class="clearfix">
								<li><a href="javascript:;" onclick="findVByPage(${user.userid},1)">全部视频(${count_videos[0]})</a></li>
								<li><a href="javascript:;" onclick="findokVByPage(${user.userid},1)">已通过视频(${count_videos[1]})</a></li><!--onclick="findokVByPage(${user.userid},1)"-->
								<li><a href="javascript:;" onclick="findDeVByPage(${user.userid},1)">未通过视频(${count_videos[2]})</a></li>
								<li><a href="javascript:;" onclick="findNVByPage(${user.userid},1)" href="up_shz.htm">未审核视频(${count_videos[3]})</a></li>
								<li><a class="active" href="javascript:;">资料未完善(${count_videos[4]})</a></li>
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
													<input onclick="selectAll();" id="check_all"  type="checkbox" ><label for="check_all">全选</label>
												</div>
												<div class="adddel" id="adddel">
														<div class="fn2nd">
															<a  href="">添加到课程</a>
														</div>
														<div class="splite">|</div>
														<div class="fn2nd">
															<a href="javascript:;" onclick="deleteAllVideoByVID(${user.userid},11)">删除</a>
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
									<div class="databox">
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
													<div class="check"><input value="${video.videoid}.${video.audit}.111" onclick="child_check()" name="checkbox" type="checkbox"></div>
												</td>
												<td class="m_video">
													<ul class="v vsh">
														<li class="v_link"><a href="javascript:;"  title="${video.title }"></a></li>
														<li class="v_thumb">
															<img src="<%=basePath%>${video.screenshotpath}" alt="${video.title }" title="${video.title}">
														</li>
														<li class="v_ishd"></li>
														<li class="v_menu" style="display: none;" id="PlayListFlag_XMTY1MzYyNTMwNA=="><span class="ico__listadd" title="添加到点播单"></span></li>
														<li class="v_title">
														<a  href="javascript:;" title="${video.title}">${video.title}</a>
														</li>
														<li class="v_info"><span class="num">${video.uptime}</span></li>
														<li class="v_promotion"></li>
													</ul>
												</td>
												<td class="m_stat">
													<div class="stat">
																	<div id="" class="stat_cont">
																		<div class="complete"><span style="color: red">资料未完善</span></div>										
																	</div>				
													</td>
													<td class="m_heat">
														<ul class="heat">
															<li>
																<a href="" target="_blank"><span class="ico__statplay" title="播放"></span>${video.playnumber}</a>
															</li>
															<li>
																<a target=" _blank" href=""><span title="评论" class="ico__statcomment"></span>${video.commnumber}</a>
															</li>
														</ul>
													</td>
													<td class="m_opt">
														<div class="action">
															<span class="share"><a href="javascript:;" onclick="deleteVideoByVID(${video.videoid},${user.userid},${page},11,${video.audit},111)">删除</a></span>
															<span class="share"><a  href="javascript:;" onclick="editVideoByVID(${video.videoid},${user.userid},10)">修改</a></span>
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
				 	  <div class="ui-pager">
		 <div class="auto-1467597023087">
		 		 <c:choose>
		         <c:when test="${page -1 > 0 }">
		         	<a class="zbtn zprv" href="javascript:;" onclick="findeditVByPage(${user.userid},${page-1})">上一页</a>
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
					         	<a class="zpgi" href="javascript:;" onclick="findeditVByPage(${user.userid},${x})">${x}</a>
					         </c:otherwise>
					         </c:choose>
							 </c:forEach>
							 <span class="zdot">...</span>
					 </c:when>
					 <c:when test="${page>=maxPage-4}">
					         <a class="zpgi" href="javascript:;" onclick="findeditVByPage(${user.userid},1)">1</a>
					 		 <span class="zdot">...</span>
							 <c:forEach var="x" begin="${maxPage-4}" end="${maxPage}">
							 <c:choose>
							 <c:when test="${x==page}">
					         	<a class="zpgi js-selected" href="javascript:;">${x}</a>
					         </c:when>
					         <c:otherwise>
					         	<a class="zpgi" href="javascript:;" onclick="findeditVByPage(${user.userid},${x})">${x}</a>
					         </c:otherwise>
					         </c:choose>
							 </c:forEach>
					 </c:when>
					 <c:when test="${page>=5&&page<(maxPage-4)}">
					 		 <a class="zpgi" href="javascript:;" onclick="findeditVByPage(${user.userid},1)">1</a>
					 		 <span class="zdot">...</span>
							 <c:forEach var="x" begin="${page-2}" end="${page+2}">
							 <c:choose>
							 <c:when test="${x==page}">
					         	<a class="zpgi js-selected" href="javascript:;">${x}</a>
					         </c:when>
					         <c:otherwise>
					         	<a class="zpgi" href="javascript:;" onclick="findeditVByPage(${user.userid},${x})">${x}</a>
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
			         	<a class="zpgi js-selected" href="javascript:;" onclick="findeditVByPage(${user.userid},${x})">${x}</a>
			         </c:when>
			         <c:otherwise>
			         	<a class="zpgi" href="javascript:;" onclick="findeditVByPage(${user.userid},${x})">${x}</a>
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
		         	<a class="zbtn znxt" href="javascript:;" onclick="findeditVByPage(${user.userid},${page+1})">下一页</a>
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
	
		</div>
	</body>
</html>