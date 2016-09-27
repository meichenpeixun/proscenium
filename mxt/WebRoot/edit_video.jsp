<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
		<title>编辑视频</title>
		<link href="u/css/st.css" type="text/css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="css/css2.css" />
	<style type="text/css">
	    #ok {color: rgb(255, 255, 255);width:97px;height: 33px;cursor: pointer;margin: 0px 10px 10px 175px;background:url(images/btn.png) no-repeat scroll 0px -233px;border: 0px none;}
        #ok:hover {color: rgb(255, 255, 255);width:97px;height: 33px;cursor: pointer;margin: 0px 10px 10px 175px;background:url(images/btn2.png) no-repeat scroll 0px -233px;border: 0px none;}
		#nook {color: rgb(141, 141, 140);width: 74px;height: 33px;cursor: pointer;margin: 0px 0px 10px;background:url(images/btn.png) no-repeat scroll 0px -178px;border: 0px none;background-position: -105px -233px;}
        #nook:hover {color: rgb(141, 141, 140);width: 74px;height: 33px;cursor: pointer;margin: 0px 0px 10px;background:url(images/btn.png) no-repeat scroll 0px -178px;border: 0px none;background-position: -105px -233px;}
		
		
		.xgj label{margin-right:20px;}
		.bdiv{margin-top:10px;}
		.sz{float:left;margin-right: 15px;font-size: 20px;line-height: 40px;color: #ff3c00;}
		.sz .yt{tical-align:middle;width: 40px;height: 40px;border-radius: 40px;overflow: hidden;}
		.ybd{width: 240px;margin-top: 3px;margin-left: 9.8px;float:left;}
		.ybd li:hover{cursor:pointer;}
		.jje{color: rgb(153, 153, 153);line-height: 18px;font-size: 12px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
		.pbj{float:right;width: 360px;height: 481px;background:white;padding-left: 10px;}
		.active{color: rgb(218,20,44);}
	</style>
	<script type="text/javascript">
		function TestBlack(TagName){
			 var obj = document.getElementById(TagName);
			 if(obj.style.display=="block"){
			  obj.style.display = "none";
			 }else{
			  obj.style.display = "block";
			 }
			}
		function bts(){
			var t1=document.getElementById("tit").innerHTML;
				document.getElementById("tit1").value=t1;
				document.getElementById("jja").value=t1;
				//alert(t1);
		}
	</script>
	</head>
	<body onload="processerbar(3000)">
		<div class="header">
			<div class="h-wb">
				<div class="fl">
					<img class="f-fl img" src="list/images/logo3.png" title="美学堂" height="47" width="174">
				</div>
				<div class="nav">
					<ul>
						<li><a href="/">首页</a></li>
						<li><a href="/">公开课</a></li>
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
					<li style="background:url(u/images/gr.png) no-repeat 5px 15px;"><a href="/">个人认证</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
					<!--<li style="background:url(u/images/tea.png) no-repeat 5px 20px; "><a style="color:#ff6600;">我是讲师</a></li>-->
					<li style="background:url(u/images/upload.png) no-repeat 5px 20px;"><a href="/">上传视频</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
					<li style="background:url(u/images/ysc.png) no-repeat 5px 15px;"><a href="/">已上传视频</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
					<li style="background:url(u/images/wtg.png) no-repeat 5px 15px;"><a href="/">未审核通过</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
					<!--<li style="background:url(u/images/xuy.png) no-repeat 5px 20px;"><a style="color:#ff6600;">我是学员</a></li>-->
					<li style="background:url(u/images/bfhis.png) no-repeat 5px 20px;"><a href="/">播放记录</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
					<li style="background:url(u/images/sc.png) no-repeat 5px 20px;"><a href="/">收藏记录</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
					<li style="background:url(u/images/gm.png) no-repeat 5px 20px;"><a href="/">购买课程</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
					<li style="background:url(u/images/vip.png) no-repeat 5px 15px;"><a href="/">开通VIP</a><img class="fr"style="margin:23px 10px;" src="images/sj.png"></li>
				</ul>
			</div>
			<div class="mainr fr" style="background:#fafafa;">
				<div class="min spx">
						<p>视频信息<span class="fr xg"><a href="">上传管理</a></span></p>
				</div>
					<div class="up_sc">
						<div class="up_sc1 fl">
						<form action="">
						<div>
							</div>
							<div class="space20"></div>
							<div class="cs">
								<div>
									标题：<input id="tit1" type="text">
									<div class="space20"></div>
								</div>
							</div>
							<div class="space20"></div>
							<div class="cs">
									简介：<textarea name="" id="jja" cols="30" rows="10"></textarea>
									<div class="space20"></div>
							</div>
							<div class="space20"></div>
							<div class="cs">
								 <div class="items" style="z-index:92">
								<span class="f_14">分类：</span>
								<div onclick="TestBlack('divc');" class="meta-cate upOriginal">
									<span>视频具体分类</span>
									<a></a>
								</div>
								<div id="divc" class="upCate">
									<ul>
										<li><a href="">音乐</a></li>
										<li><a href="">音乐</a></li>
										<li><a href="">音乐</a></li>
										<li><a href="">音乐</a></li>
										<li><a href="">音乐</a></li>
										<li><a href="">音乐</a></li>
									</ul>
								</div>	
								</div>
								<div class="space20"></div>
								<span class="f_14">章节：</span>
								<div class="items" style="z-index:92">
									<div onclick="TestBlack('divc2');" class="meta-cate upOriginal">
										<span>视频章节</span>
										<a></a>
									</div>
									<div id="divc2" class="upCate2">
									<ul>
										<li><a href="">音乐</a></li>
										<li><a href="">音乐</a></li>
										<li><a href="">音乐</a></li>
										<li><a href="">音乐</a></li>
										<li><a href="">音乐</a></li>
										<li><a href="">音乐</a></li>
									</ul>
								</div>	
								</div>
							</div>
							<div class="space20"></div>
							<div class="cs">
								标签：<input class="in_w" type="text">
								<div class="space20"></div>
							</div>
							<div>
								版权：<label><input type="radio" name="identity" value="原创" checked="checked"/>&nbsp;原创视频</label>&nbsp;&nbsp;
								<label><input type="radio" name="identity" value="转载" />&nbsp;转载视频</label>
							</div>
							<div class="space20"></div>
							<div class="cs">
									封面：<input type="file">
									<div class="space20"></div>
							</div>
							<div class="space20"></div>
							<div class="cs dx">
								<input id="ok"  type="submit" value="保  存" />
								<input id="nook"  type="button" value="取  消" />
							</div>
							</form>
						</div>
						<div class="pbj">
							<!--批量编辑开始-->
							<div style="line-height:40px;height:40px;margin-bottom: 20px;border-bottom: 1px solid #eee;font-size: 0;position: relative;">
								<h2 style="font-size:16px;font-weight:400;">视频编辑列表</h2>
								<span style="float:right;margin-top:-37px;font-size:14px;"><a style="color:#787d82;" href="javascript:;">取消编辑</a></span>
							</div>
							<div class="plbj" style="overflow-y: scroll;overflow-x: hidden;max-height: 420px;">
										<div class="bdiv">
											<div class="sz">1
											<span>
											<a href="javascript:;"><img class="yt" src="http://img0.bdstatic.com/img/image/shouye/xinshouye/weim.jpg" alt="" /></a></span>
											</div>
											<div class="ybd">
												<ul>
													<li style="margin-top:0px;"><a style="font-size: 13px;color: #555;" href="javascript:;" >java</a></li>
													<li class="jje" style="margin-top:0px;">第一章：初识java，java安装环境</li>
												</ul>
											</div>
										</div>
										<div style="clear:both;"></div>
										<div class="bdiv">
											<div class="sz">2
											<span>
											<a href="javascript:;"><img class="yt" src="http://img0.bdstatic.com/img/image/D2B2161E687EA1985A42B0E2E3F80C73.JPG" alt="" /></a></span>
											</div>
											<div class="ybd">
												<ul>
													<li style="margin-top:0px;"><a style="font-size: 13px;color: #555;" href="javascript:;">php</a></li>
													<li class="jje" style="margin-top:0px;">第二章：初识php，php安装环境</li>
												</ul>
											</div>
										</div>
										<div style="clear:both;"></div>
										<div class="bdiv">
											<div class="sz">3
											<span>
											<a href="javascript:;"><img class="yt" src="http://img0.bdstatic.com/img/image/zhengjiuwxr.jpg" alt="" /></a></span>
											</div>
											<div class="ybd">
												<ul>
													<li style="margin-top:0px;"><a style="font-size: 13px;color: #555;" href="javascript:;">php</a></li>
													<li class="jje" style="margin-top:0px;">第三章：初识php，php安装环境</li>
												</ul>
											</div>
										</div>
										<div style="clear:both;"></div>
										<div class="bdiv">
											<div class="sz">4
											<span>
											<a href="javascript:;"><img class="yt" src="http://img0.bdstatic.com/img/image/shouye/xinshouye/dongm.jpg" alt="" /></a></span>
											</div>
											<div class="ybd">
												<ul>
													<li style="margin-top:0px;"><a style="font-size: 13px;color: #555;" href="javascript:;">php</a></li>
													<li class="jje" style="margin-top:0px;">第四章：初识php，php安装环境</li>
												</ul>
											</div>
										</div>
										<div style="clear:both;"></div>
										<div class="bdiv active">
											<div class="sz">5
											<span>
											<a href="javascript:bts();"><img class="yt" src="http://img0.bdstatic.com/img/image/shouye/xinshouye/biz.jpg" alt="" /></a></span>
											</div>
											<div class="ybd">
												<ul>
													<li onclick="javascript:bts();" id="tit" style="margin-top:0px;">php</li>
													<li onclick="javascript:bts();" id="jaj" style="margin-top:0px;">第五章：初识php，php安装环境</li>
												</ul>
											</div>
										</div>
										<div style="clear:both;"></div>
										<div class="bdiv">
											<div class="sz">6
											<span>
											<a href="javascript:;"><img class="yt" src="http://img0.bdstatic.com/img/image/shouye/xinshouye/toux.png" alt="" /></a></span>
											</div>
											<div class="ybd">
												<ul>
													<li style="margin-top:0px;"><a style="font-size: 13px;color: #555;" href="javascript:;">php</a></li>
													<li class="jje" style="margin-top:0px;">第六章：初识php，php安装环境</li>
												</ul>
											</div>
										</div>
										<div style="clear:both;"></div>
										<div class="bdiv">
											<div class="sz">7
											<span>
											<a href="javascript:;"><img class="yt" src="http://jz.faisys.com/image/pro6/index_15.jpg" alt="" /></a></span>
											</div>
											<div class="ybd">
												<ul>
													<li style="margin-top:0px;"><a style="font-size: 13px;color: #555;" href="javascript:;">php</a></li>
													<li class="jje" style="margin-top:0px;">第七章：初识php，php安装环境</li>
												</ul>
											</div>
										</div>
										<div style="clear:both;"></div>
										<div class="bdiv">
											<div class="sz">8
											<span>
											<a href="javascript:;"><img class="yt" src="http://img0.bdstatic.com/img/image/shouye/xinshouye/xingk.jpeg" alt="" /></a></span>
											</div>
											<div class="ybd">
												<ul>
													<li style="margin-top:0px;"><a style="font-size: 13px;color: #555;" href="javascript:;">php</a></li>
													<li class="jje" style="margin-top:0px;">第八章：初识php，php安装环境</li>
												</ul>
											</div>
										</div>
										<div style="clear:both;"></div>
										<div class="bdiv">
											<div class="sz">9
											<span>
											<a href="javascript:;"><img class="yt" src="http://jz.faisys.com/image/pro6/index_15.jpg" alt="" /></a></span>
											</div>
											<div class="ybd">
												<ul>
													<li style="margin-top:0px;"><a style="font-size: 13px;color: #555;" href="javascript:;">php</a></li>
													<li class="jje" style="margin-top:0px;">第九章：初识php，php安装环境</li>
												</ul>
											</div>
										</div>
							</div>
							<!--批量编辑结束-->
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