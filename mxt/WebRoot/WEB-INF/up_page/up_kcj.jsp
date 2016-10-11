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
		<title>课程列表</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">

		<link href="u/css/st.css" type="text/css" rel="stylesheet">
		<script type="text/javascript" src="js/jf.js"></script>
		<link rel="stylesheet" type="text/css" href="css/css.css" />
		<link rel="stylesheet" type="text/css" href="css/up_cg.css" />
		<link rel="stylesheet" type="text/css" href="css/picsel.css" />
		<script src="up_success/jquery.js"></script>
		<script src="up_success/prototype.js"></script>
		<script type="text/javascript">
			function close(){
				document.getElementById("fc").style.display ="none";
				document.getElementById("bg").style.display ="none";
			}function op(){
				document.getElementById("fc").style.display ="block";
				document.getElementById("bg").style.display ="block";
			}
		    //修改课程
			function editCourseByVID(videoid,userid,audit){
					var userid=1;
					var videoid=1;
			 $.ajax({  
		            type: "POST",  
		            url: "<%=basePath%>/per_cen/editKC.do",  
		            data: {videoid:videoid,userid:userid},
		            async:false,
		            dataType: "html",  
		            beforeSend:function(){
		            $(".del_msg").html("进入编辑页...");
		            $(".del_msg").css("display","block");
					setTimeout("$('.del_msg').fadeOut()",1000)},  
			            success:function(data){
		         		$("#mainr_fr").html(data);
						}
					}); 
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
			#bg{ display: none;  position: fixed;  top: 0%;  left: 0%;  width: 100%;  height: 100%;  background-color: black;  z-index:1001;  -moz-opacity: 0.7;  opacity:.70;  filter: alpha(opacity=70);}
		</style>
	</head>
	<body onload="processerbar(3000)">
		

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
															<a href="<%=basePath%>per_cen/xjkc.do">+ 创建课程</a>
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
												<th class="m_heat" style="font-weight: normal;">热度</th>
												<th class="m_opt" style="font-weight: normal;">操作</th>
											</tr>
										</thead>
										<tbody id="videolist">														
											 <tr id="" class="">
												<td class="m_check">
													
												</td>
												<td class="m_video">
													<ul class="v vsh">
														<li class="v_link"><a href="#" target="_blank" title="PHP教程 15.1.1 数据库抽象层PDO"></a></li>
														<li class="v_thumb">
															<img src="up_success/0542040856319C546A0A440AF8BA3F5F.jpg" alt="PHP教程 15.1.1 数据库抽象层PDO" title="PHP教程 15.1.1 数据库抽象层PDO">
														</li>
														<li class="v_ishd"></li>
														<li class="v_menu" style="display: none;" id="PlayListFlag_XMTY1MzYyNTMwNA=="><span class="ico__listadd" title="添加到点播单"></span></li>
														<li class="v_title"><a href="#" target="_blank" title="网站开发">网站开发</a>
														</li>
														<li class="v_info"><span class="num">2016-07-22 14:20</span></li>
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
																<span style="text-align:center;">12</span>
															</li>
														</ul>
													</td>
													<td class="m_opt">
														<div class="action">
															<span class="share"><a href="" target="_blank">删除</a></span>
															<span class="share"><a href="javascript:;" onclick="editCourseByVID()" >修改</a></span>
															<span class="share"><a href="javascript:op();">添加视频</a></span>
														</div>
													</td>
												</tr>
												<tr id="" class="">
												<td class="m_check">
													
												</td>
												<td class="m_video">
													<ul class="v vsh">
														<li class="v_link"><a href="#" target="_blank" title="PHP教程 15.1.1 数据库抽象层PDO"></a></li>
														<li class="v_thumb">
															<img src="up_success/0542040856319C546A0A440AF8BA3F5F.jpg" alt="PHP教程 15.1.1 数据库抽象层PDO" title="PHP教程 15.1.1 数据库抽象层PDO">
														</li>
														<li class="v_ishd"></li>
														<li class="v_menu" style="display: none;" id="PlayListFlag_XMTY1MzYyNTMwNA=="><span class="ico__listadd" title="添加到点播单"></span></li>
														<li class="v_title"><a href="#" target="_blank" title="网站开发">软件开发</a>
														</li>
														<li class="v_info"><span class="num">2016-07-22 14:20</span></li>
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
																<span style="text-align:center;">12</span>
															</li>
														</ul>
													</td>
													<td class="m_opt">
														<div class="action">
															<span class="share"><a href="" target="_blank">删除</a></span>
															<span class="share"><a href="javascript:;" onclick="editCourseByVID()" >修改</a></span>
															<span class="share"><a href="javascript:op();">添加视频</a></span>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div style="text-align: right;color: #909090;float: right;margin-bottom:12px">
				 <a style="color: #909090;" href="#">首页</a>
				 |
				 <a style="color: #909090;" href="#"><<</a>
				 |
				 <a style="color:#000;" href="#">1</a>
				 |
				 <a style="color: #909090;" href="#">>></a>
				 |
				 <a style="color: #909090;" href="#">末页</a>
				</div>
		</div>
		<div id="bg"></div>
			<div id="fc" class="mod_pop pop_up_fixed sp1">
				<!--<iframe src="about:blank" class="iframe_mask_pop" frameborder="0"></iframe>-->
				<div class="mod_pop_hd" style="position:relative; z-index:101;"> <h3></h3> <a href="javascript:close();" class="mod_pop_close _close"></a> </div>
				<div style="margin-left:15px;">
						<h3 class="ha">添加视频：</h3><br/><br/>
						<h6 class="hb">全部上传视频</h6>
					</div>
				<div class="picsel" style="max-height: 320px;min-height:320px;overflow-y:auto;overflow-x: hidden;clear:both;">
					<ul>
					
					  <li>
						<img src="images/11287113923_57d37ed9d3_q.jpg" >
						<div style="margin:110px 0 0 0;">视频标题</div>
						<div style="color: #bbb;"><span>8</span><span class="fr">2016.7.7</span></div>
					  </li>
					  <li>
						<img src="images/8095683964_9e27753908_q.jpg" />
						<div style="margin:110px 0 0 0;">视频标题</div>
						<div style="color: #bbb;"><span>8</span><span class="fr">2016.7.7</span></div>
					  </li>
					  <li>
						<img src="images/8018956825_67bf62c098_q.jpg" />
						<div style="margin:110px 0 0 0;">视频标题</div>
						<div style="color: #bbb;"><span>8</span><span class="fr">2016.7.7</span></div>
					  </li>
					  <li>
						<img src="images/7587724752_cdb9f0c444_q.jpg" />
						<div style="margin:110px 0 0 0;">视频标题</div>
						<div style="color: #bbb;"><span>8</span><span class="fr">2016.7.7</span></div>
					  </li>
					  <li>
						<img src="images/7587738254_707a32f27b_q.jpg" />
						<div style="margin:110px 0 0 0;">视频标题</div>
						<div style="color: #bbb;"><span>8</span><span class="fr">2016.7.7</span></div>
					  </li>
					  <li>
						<img src="images/8095680852_893f685cbd_q.jpg" />
						<div style="margin:110px 0 0 0;">视频标题</div>
						<div style="color: #bbb;"><span>8</span><span class="fr">2016.7.7</span></div>
					  </li>
					  <li>
						<img src="images/8018953043_c6ef9e3b29_q.jpg" />
						<div style="margin:110px 0 0 0;">视频标题</div>
						<div style="color: #bbb;"><span>8</span><span class="fr">2016.7.7</span></div>
					  </li>
					  <li>
						<img src="images/7445019824_914dea4ac3_q.jpg" />
						<div style="margin:110px 0 0 0;">视频标题</div>
						<div style="color: #bbb;"><span>8</span><span class="fr">2016.7.7</span></div>
					  </li>
					  <li>
						<img src="images/8095680852_893f685cbd_q.jpg" />
						<div style="margin:110px 0 0 0;">视频标题</div>
						<div style="color: #bbb;"><span>8</span><span class="fr">2016.7.7</span></div>
					  </li>
					  <li>
						<img src="images/8018953043_c6ef9e3b29_q.jpg" />
						<div style="margin:110px 0 0 0;">视频标题</div>
						<div style="color: #bbb;"><span>8</span><span class="fr">2016.7.7</span></div>
					  </li>
					  <li>
						<img src="images/7445019824_914dea4ac3_q.jpg" />
						<div style="margin:110px 0 0 0;">视频标题</div>
						<div style="color: #bbb;"><span>8</span><span class="fr">2016.7.7</span></div>
					  </li>
					</ul>
				</div>
				<div class="qdo">
					<a href="" target="_self"><span class="qd">确定</span></a>
					<a href="javascript:close();" target="_self"><span class="qx">取消</span></a>
				</div>
				 <script src='js/jquery.min.js'></script>
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