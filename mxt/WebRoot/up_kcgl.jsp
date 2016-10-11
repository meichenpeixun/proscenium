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
		<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
		<title>课程管理</title>
		<link href="u/css/st.css" type="text/css" rel="stylesheet">
		<script type="text/javascript" src="js/jf.js"></script>
		<link rel="stylesheet" type="text/css" href="css/css.css" />
		<link href="list/style/cores.css" type="text/css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="css/up_cg.css" />
		<link rel="stylesheet" type="text/css" href="css/picsel.css" />
		<link rel="stylesheet" href="kc_gl/base.css">
		<link rel="stylesheet" href="kc_gl/user_base.css">
		<link rel="stylesheet" href="kc_gl/user_center.css">
		<link href="css/searchableSelect.css" rel="stylesheet" type="text/css">
		<script src="js/jquery-1.10.2.min.js"></script>
		<script src="js/jquery.searchableSelect.js"></script>
		<script type="text/javascript">
			$(function(){
				$('select').searchableSelect();
			});
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
		</script>
		<script type="text/javascript">
			function findchapter(){
				var chapterId= $('#mySelect option:selected').val();
				//查找个人上传视频
					  var userid =${userid};
					  var page =${page};
					  var coursedId =${counse.coursedId};
				      $.ajax({  
		              type: "POST",  
		              url: "<%=basePath%>/per_cen/chapterVideo.do",  
		              data: {userid:userid,page:page,chapterId:chapterId,coursedId:coursedId},
		              async:false,
		              dataType: "html",  
		              success:function(data){
		                   $("#video_list").html(data);
		   				}
		   				});  
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
			
			
			function editVideoByInKc(userid,coursedId,videoid){
			     $.ajax({  
	            type: "POST",  
	            url: "<%=basePath%>/per_cen/editVideoByInKc.do",  
	            data: {videoid:videoid,userid:userid,coursedId:coursedId},
	            async:false,
	            dataType: "html",  
	            /* beforeSend:function(){
	             $(".del_msg").html("进入编辑页...");
	            $(".del_msg").css("display","block");
				setTimeout("$('.del_msg').fadeOut()",1000)},   */
	            success:function(data){
        		$("#mainr_fr").html(data);
			}
		}); 
		 }
		</script>
		<style type="text/css">
			.ist{margin:10px 5px 10px 0;width:20px;height:20px;vertical-align:middle;}
			.btn2{margin-top:10px;background:#ff9600;padding:2px 12px;border:0px;color:white;}
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
				width:120px;
				height:80px;
			}
			.kctj ul li:hover{
				color:#fff;
				background:#ff7e0c;
			}
			#bg{ display: none;  position: fixed;  top: 0%;  left: 0%;  width: 100%;  height: 100%;  background-color: black;  z-index:1001;  -moz-opacity: 0.7;  opacity:.70;  filter: alpha(opacity=70);}
			.xlk{margin-top:20px;}
			.xlk select option{z-index:99;}
			.picsel li::before {
			content: "\2714";
			display: block;
			position: absolute;
			margin: auto;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			width: 40px;
			height: 40px;
			line-height: 40px;
			background: #00c09e;
			border-radius: 50px;
			color: #fff;
			text-align: center;
			font-size: 16px;
			z-index: 10;
			opacity: 0;
			transition: 0.3s linear;
			-o-transition: 0.3s linear;
			-ms-transition: 0.3s linear;
			-moz-transition: 0.3s linear;
			-webkit-transition: 0.3s linear;
			-o-user-select: none;
			-moz-user-select: none;
			-webkit-user-select: none;
			cursor: pointer;
		}.kctj ul li {
			border-bottom: 1px solid #e6e6e6;
			font-size: 14px;
			cursor: pointer;
			overflow: hidden;
			height: 30px;
		}.kctj ul li label {
			line-height: 30px;
			cursor: pointer;
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
			<div class="mainr fr">
				<!--<div class="min">
					<ul>
						<li><a href="#" class="active">以上传视频(10)</a></li>
						<li><a href="#">未上传视频(42)</a></li>
						<li><a href="#">审核中(4)</a></li>
					</ul>
				</div>
				<div class="qsel">
					sdf
				</div>
				<div class="r-t-nav-box">
					<div class="r-t-nav-title">
						我上传的
					</div>
					<div class="r-t-nav-main clearfix">
						<div class="ct-nav-icon left prv-btn"></div>
						<div class="three-mun-box left">
							<ul class="clearfix">
								<li><a href="up_cg.htm">已通过视频(4)</a></li>
								<li><a href="up_sb.htm">未通过视频(6)</a></li>
								<li><a href="up_shz.htm">未审核视频(3)</a></li>
								<li><a href="up_kcj.htm">我的课程(3)</a></li>
							</ul>
						</div>
						<div class="ct-nav-icon left next-btn"></div>
					</div>
				</div>-->
				<div class="site_container">
    <div class="container_inner contain_guide">
        <div class="main_content" id="cover_edit_view" style="">
            <div class="breadcrumbs">
                <i class="arrow"></i><a href="up_kcj.htm" class="inner">返回课程</a>
            </div>
            <div class="album_cover">
				<div>
					<div class="cover_figure">
						<span class="desc"><em class="nums">0</em>个视频</span>
						<a href="#cover_edit/ndk000101qutcb6"> <img alt="互联网" src="kc_gl/0.jpg" title="封面图更新会有所延迟，请耐心等候"> </a>
					</div>
					<h4 class="cover_title"><a href="javascript:" title="互联网">互联网</a></h4> 
					<div class="cover_data"> <span class="item item_date">2016-07-26 创建</span> <span class="item item_nums"><i class="icon_play"></i>0</span> </div> 
					<div class="cover_option">
						<a href="javascript:op();" class="btn_normal _add_video">+添加视频</a>
						<a href="" class="btn_normal _edit_cover">编辑</a> 
						<a href="" class="btn_normal _del_cover">删除</a> 
					</div>
					<div class="xlk">
						<select>
							  <option value="第一章：特效菜单">第一章：特效菜单 </option>
							  <option value="第二章：特效菜单">第二章：特效菜单 </option>
							  <option value="第一章：特效菜单">第三章：特效菜单 </option>
							  <option value="第一章：特效菜单">第四章：特效菜单 </option>
							  <option value="第一章：特效菜单">第五章：特效菜单 </option>
							  <option value="第一章：特效菜单">第六章：特效菜单 </option>
							  <option value="第一章：特效菜单">第七章：特效菜单 </option>
						</select>
					</div>
				</div>
			</div>
            <ul class="video_list">
                <li class="item_title">
                    <div class="item_a"><span class="title">序号</span></div>
                    <div class="item_b"><span class="text">视频封面</span></div>
                    <div class="item_c">指数</div>
                    <div class="item_d">操作</div>
                </li>
            </ul>
            <ul class="video_list">
				<li class="list_item">
					<div class="item_a"><span class="title _idx">1</span></div> 
					<div class="item_b">
						<a href="" target="_blank" class="img"> 
							<img src="kc_gl/z03164lg680_160_90_3_002.jpg" alt="阿桑的发生地方" height="100px" width="175px">
						</a>
						<div class="video_detail">
							<h3 class="title"> 
								<a href="" target="_blank" title="阿桑的发生地方">阿桑的发生地方</a>  
							</h3> 
							<h6 class="desc"> 创建于：2016-07-26</h6>
						</div>
					</div>
					<div class="item_c">
						<ol class="trend_list"> 
							<li class="item"><i class="icon_play"></i><span class="nums">4</span></li>
							<li class="item"><i class="icon_discuss"></i><span class="nums _comment_num">0</span></li> 
						</ol>
					</div> 
					<div class="item_d">
						<ol class="option_list"> 
							<li class="item"> 
								<a href="" class="btn_normal _edit_video"><i class="icon_edited"></i><span class="inner">编辑</span></a>
								<a href="" class="btn_normal _rm_video"><i class="icon_delete"></i><span class="inner">移除</span></a>
								<a href="" class="btn_normal _del_video">
									<i class="icon_delete"></i><span class="inner">删除</span>
								</a>
							</li> 
							<li class="item">
								<a href="javascript:ops();" class="btn_normal _move_cover">
									<i class="icon_add"></i><span class="inner">移动到</span>
								</a>
							</li>
						</ol>
					</div>
				</li>
			</ul>
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
    </div>
</div>
<div id="bg"></div>
<div id="fc" class="mod_pop pop_up_fixed sp1">
				<!--<iframe src="about:blank" class="iframe_mask_pop" frameborder="0"></iframe>-->
				<div class="mod_pop_hd" style="position:relative; z-index:101;"> <h3></h3> <a href="javascript:close();" class="mod_pop_close _close"></a> </div>
				<div style="margin-left:15px;">
						<h3 class="ha">请选择课程：</h3>
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
				 <script src="js/picsel.js"></script>
			</div>
			<!--hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhpostion-->
			<div id="kc" class="mod_pop pop_up_fixed sp1">
				<!--<iframe src="about:blank" class="iframe_mask_pop" frameborder="0"></iframe>-->
				<div class="mod_pop_hd" style="position:relative; z-index:101;"> <h3></h3> <a href="javascript:closes();" class="mod_pop_close _close"></a> </div>
				<div style="margin-left:15px;">
						<h3 class="ha">移动课程到</h3><br/>
					</div>
				<div class="kctj" style="margin:10px 0 0 15px;max-height: 320px;min-height:350px;overflow-y:auto;overflow-x: hidden;clear:both;">
					<ul>
						<li>
							<label>
								<input type="radio" name="a" />
								第一章：初识java 
							</label>
						</li><li>
							<label>
								<input type="radio" name="a" />
								第二章：环境搭建与调试 
							</label>
						</li><li>
							<label>
								<input type="radio" name="a" />
								第三章：常用的命令行操作 
							</label>
						</li><li>
							<label>
								<input type="radio" name="a" />
								第四章：java语言特性详解  
							</label>
						</li>
					</ul>
				</div>
				<div class="qdo">
					<a href="" target="_self"><span class="qd">确定</span></a>
					<a href="javascript:closes();" target="_self"><span class="qx">取消</span></a>
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