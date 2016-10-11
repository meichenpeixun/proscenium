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
		<title>课程编辑</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">

		<link href="u/css/st.css" type="text/css" rel="stylesheet">
		<script type="text/javascript" src="js/jf.js"></script>
		<link rel="stylesheet" type="text/css" href="css/css.css" />
		<script src="js/jquery.min.js" type="text/javascript"></script>
		<script language="javascript">
		function TestBlack(TagName){
			 var obj = document.getElementById(TagName);
			 if(obj.style.display=="block"){
			  obj.style.display = "none";
			 }else{
			  obj.style.display = "block";
			 }
			}
	</script>
	<style type="text/css">
		.up_sc {
			background: #F6F6F6;
			margin-top: 4px;
			height: 400;
		}
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
			<div class="mainr fr">
				<div class="min">
						<p>课程编辑<span class="fr xg"><a href="">课程管理</a></span></p>
				</div>
					<div class="up_sc">
						<div class="up_sc1 s">
						<form action="">
						<div>
								<h3>课程编辑</h3>
							</div>
							<div class="space20"></div>
							<div class="items" style="z-index:92">
								<span class="f_14">分类：</span>
								<div onclick="TestBlack('divc');" class="meta-cate upOriginal">
									<span>请选择分类</span>
									<a></a>
								</div>
								<div id="divc" class="upCate">
									<!--<dl>
										<dd><h3>互联网</h3></dd>
										<dd><a href="">互联网</a></dd>
										<dd><a href="">金融</a></dd>
										<dd><a href="">音乐</a></dd>
										<dd><a href="">互联网</a></dd>
										<dd><a href="">金融</a></dd>
										<dd><a href="">音乐</a></dd>
									</dl>-->
									<ul>
										<h3 class="clear">互联网</h3>
										<li><a href="">音乐</a></li>
										<li><a href="">音乐</a></li>
										<li><a href="">音乐</a></li>
										<li><a href="">音乐</a></li>
										<li><a href="">音乐</a></li>
										<li><a href="">音乐</a></li>
										<h3 class="clear">互联网</h3>
										<li>音乐</li>
										<li>音乐</li>
										<li>音乐</li>
									</ul>
								</div>
								<div style="margin:-20px 0 0 100px;">
									<div onclick="TestBlack('divc2');" class="meta-cate upOriginal">
										<span>请选择子分类</span>
										<a></a>
									</div>
									<div id="divc2" class="upCate2">
										<dl>
											<dd><a href="">php</a></dd>
											<dd><a href="">java</a></dd>
											<dd><a href="">sql</a></dd>
											<dd><a href="">Android</a></dd>		
										</dl>
									</div>
								</div>
							</div>
							<div class="space20"></div>
							<div class="cs">
								<div>
									课程标题：<input type="text">
									<div class="space20"></div>
								</div>
							</div>
							<div class="space20"></div>
							<div class="cs">
									课程标签：<input class="in_w" type="text">
									<div class="space20"></div>
							</div>
							<div class="space20"></div>
							<div class="cs">
									课程简介：<textarea name="" id="" cols="30" rows="10"></textarea>
									<div class="space20"></div>
							</div>
							<div class="space20"></div>
							<div class="cs dx">
								<input type="submit" value="完  成" />
							</div>
							</form>
						</div>
					</div>
			</div>
		</div>
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