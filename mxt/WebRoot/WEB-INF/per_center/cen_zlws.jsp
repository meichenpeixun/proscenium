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
		<title>完善资料</title>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<link href="u/css/st.css" type="text/css" rel="stylesheet">
		<link rel="stylesheet" href="cen_wszl/common.css">
		<link rel="stylesheet" href="cen_wszl/account.css">
		<style type="text/css">
			.cf {
					width: 800px;
				}
		</style>
	</head>
	<body>
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
							<li class="qmr">这位童鞋不懒，就是什么也没有留下～～！</li>
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
		<div class="main" style="width:1200px">
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
			<div class="mainr fr"style="margin-top: -48px;">
					<div class="main">
						<div class="databox">
							<h3 class="hd">个人资料 <span>填写个人资料，让大家更快更全面的了解你哦！</span></h3>
							<div class="bd">
								<form action="" method="post" id="formPerson"> 
									<ul class="multi-line">
										<li class="l1">
											<label>会员类型：</label>
											<span>
												<label class="labe"><input name="sxing" type="radio" value="个人"> 个人</label>
												<label class="labe"><input name="sxing" type="radio" value="机构"> 机构</label>
											</span>
										</li>
										<li>
											<label>昵称：</label>
											<span><input id="realName" name="truename" value="" type="text"></span>
										</li>
										<li>
											<label>姓名/机构：</label>
											<span><input id="realName" name="truename" value="" type="text"></span>
											<span>
												<label class="isgk"style="width: 60px;"><input type="checkbox" style="width:0px;"/> 不公开</label>
											</span>
										</li>
										<li>
											<label>性别：</label>
											<span><select name="sex" value="0">
													<option value="男">女</option>
													<option selected="selected" value="男"> 男 </option>
											</select></span>
										</li>
										<li>
											<label>手机号：</label>
											<span><input name="phone" value="" type="text"></span>
										</li>
										<li>
											<label>邮箱：</label>
											<span><input name="email" value="" type="text"></span>
										</li>
										<li class="cf">
											<label class="vertical-top">头像：</label>
											<span><img class="headpic" src="cen_wszl/default.gif"></span>
											
											<a href="">修改头像</a>
										</li>
										<a class="cfa">
											<input class="cfb" type="file"/>
										</a>
										<li>
											<label>身份头衔：</label>
											<span><input class="laydate-icon" name="sftx" type="text"></span>
										</li>
										<li>
											<label>个性签名：</label>
											<span><input id="qq" name="qq" type="text"></span>
										</li>
										<li>
											<label class="vertical-top">个人/机构简介：</label>
											<span><textarea id="introduce" name="description"></textarea></span>
										</li>
									</ul>
									<input class="btn-def" id="setPersonBtn" value="更新个人资料" type="button">
								</form>
							</div>
						</div>
						<div class="databox" id="nav05">
							<h3 class="hd">绑定账号</h3>
							<div class="bd">
								<ul class="multi-line third">
									<!--提示：如果绑定成功输入框隐藏，例如支付宝绑定成功-->
									<li class="cf">
										<label><img src="cen_wszl/alipay.png"></label>
										<span>支付宝账号 <span class="ora">( 已绑定 )</span></span>
										<a class="unbindBtn" href="">解除绑定</a>
									</li>
									<li class="cf">
										<label><img src="cen_wszl/yhk.png"></label>
										<span>银行卡 </span>
										<span>1.<div class="ksucc">
										<span class="kico"><a href="#"><img src="cen_wszl/yhkico.png" alt="" /></a></span>
										<span class="ktit">中国农业银行</span>
										<span class="kwh">尾号1678</span>
										<span class="ktype"></span>
									</div></span>
									<a href="">删除</a><br />
										<span style="margin-left:135px;margin-bottom:10px;">2. <input type="" /></span><br />
										<span style="margin-left:135px;">3. <input type="" /></span>
										<a href="" id="bindWeixin">去绑定</a>
									</li>
									<li class="cf">
										<label><img src="cen_wszl/icon-wx.png"></label>
										<span>微信账号 </span>
										<span><input type="" /></span>
										<a href="" id="bindWeixin">去绑定</a>
									</li>
								</ul>
							</div>
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