<%@page import="com.mxt.entity.CounseTable"%>
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
		function playVe(videoid){
			$("#videoid2").val(videoid); 		
	 		$("#playV").submit();
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
	      function form_kc_sub(userid,coursedId){
	    	   $("#userid").val(userid);
	    	  $("#coursedId").val(coursedId);
	    		$("#form_kc").submit();
	      }
		 </script>
		<script type="text/javascript">
			$(function(){
				$('#mySelect').searchableSelect();
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
			//video 小的分页
			function findVByPage(userid,page){
				var chapterId= $('#mySelect option:selected').val();
				//查找个人上传视频
					  var userid =userid;
					  var page =page;
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
		/* 	<!-- <li>
			<label>
				<input type="radio" name="a" />
				第一章：初识java 
			</label>
		</li> --> */
		 function findcha(videoid){
			$("#videoid").val(videoid);
			var coursedId = $("#coun").val();
			findchaByCid(coursedId);
		}
		
			function findchaByCid(coursedId){
				var coursedId =coursedId;
				 $.ajax({  
                     type: "POST",  
                     url: "<%=basePath%>/per_cen/findchaByCid.do",  
                     data: {coursedId:coursedId},  
                     dataType: "json",  
                     success:function(data){
                    	 if(data!=null&&data!=""){
                    	 $("#chap").empty();
                    	   jQuery.each(data,function(key,value){
                    	 $("#chap").append(
                          "<li>"+
			              "<label>"+
				          "<input type='radio' name='a' value='"+value.chapterId+"'/>"+value.chapterName+
			              "</label>"+
		                  "</li>"
                          );});
                    	 }else{
                    		 $("#chap").empty();
                    		 $("#chap").append("本课程下还没有章节！"); 
                    	 }
                    	   
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
			
		   //video在课程内容页删除视频
			function deletVideoByInKc(videoid){
				      var chapterId= $('#mySelect option:selected').val();
					  var userid =${userid};
					  var coursedId =${counse.coursedId};
					  if(confirm("确认删除吗？")){
					  var num =$("#videosNum").text();
					  $("#videosNum").text(num-1);
				      $.ajax({  
		              type: "POST",  
		              url: "<%=basePath%>/per_cen/deletVideoByInKc.do",  
		              data: {userid:userid,videoid:videoid,coursedId:coursedId,chapterId:chapterId},
		              async:false,
		              dataType: "html",  
		              success:function(data){
		                   $("#video_list").html(data);
		   				}
		   				});  
					  }
			}
		 
			function addVideos(){
				//章节
				var chapterId= $('#mySelect option:selected').val();
				$("#chapterId").val(chapterId);
				//所有视频id 用##分割
				var videosStr=$("li.selected div:first-child").text(); 
				$("#videosStr").val(videosStr);
				if(videosStr!=""&&videosStr!=null){
					  if(chapterId!=""&&chapterId!=null){
						  $("#add_form").submit();
					  }else{
						  alert("请去添加章节！"); 
					  }
					
					}else{
						alert("没有可添加的视频!");
					}
				
			}
			
			function sub_addKc(){
				var num =$("#videosNum").text();
				$("#videosNum").text(num-1);
				$("#chapterId_V").val($('input[name="a"]:checked').val());
				$("#sub_addKc").submit();
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
	    <form action="<%=basePath%>per_cen/addvideo.do" id="add_form" method="post">
	   <input type="hidden" name="userid"  value="${userid}" />
	   <input type="hidden" name="coursedId"  value="${counse.coursedId}"/>
	   <input type="hidden" name="videosStr" id="videosStr" value="" />
	     <input type="hidden" name="chapterId" id="chapterId" value="" />
	   </form>
	    
	    <form action="<%=basePath%>per_cen/sub_addKc.do" id="sub_addKc" method="post">
	   <input type="hidden" name="userid"  value="${userid}" />
	   <input type="hidden" name="coursedId"  value="${counse.coursedId}"/>
	   <input type="hidden" name="videoid" id="videoid" value="" />
	     <input type="hidden" name="chapterId" id="chapterId_V" value="" />
	   
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
						<li><a href="javascript:;">合作伙伴</a></li>
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
			<form action="per_cen/up_zsplb.do" method="post" id="haved-videos">
		    <input type="hidden" name="userid" value="${user.userid}"/>
			<input type="hidden" name="audit" value="10"/>
			</form>
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
                <i class="arrow"></i><a href="javascript:;" onclick="mycounses(${userid},1)" class="inner">返回课程</a>
            </div>
            <div class="album_cover">
				<div>
					<div class="cover_figure">
						<span class="desc"><em class="nums" id="videosNum">${videosofAll}</em>个视频</span>
						<a href="javascript:;"> <img alt="互联网" src="${counse.couseCoverPath}" title="封面图更新会有所延迟，请耐心等候"></a>
					</div>
					<%
					CounseTable counse =(CounseTable)request.getAttribute("counse");
					String  title =counse.getCouseTitle();
					  String  neTitle="";
					if(title.length()>10){
							neTitle =title.substring(0, 10)+"...";  
					}else{
						neTitle=title;
					}
							%>
						
					    <c:choose>
						<c:when test="${fn:length(counse.couseTitle)>11}">
						<h4 class="cover_title"><a href="javascript:" title="${counse.couseTitle}">${fn:substring(counse.couseTitle,1,11)}...</a></h4> 
						</c:when>
						<c:otherwise>
						<h4 class="cover_title"><a href="javascript:" title="${counse.couseTitle}">${counse.couseTitle}</a></h4> 
						</c:otherwise>
			            </c:choose>
					<div class="cover_data"> <span class="item item_date">${counse.createTime} 创建</span> <span class="item item_nums"><i class="icon_play"></i>0</span> </div> 
					<div class="cover_option">
						<a href="javascript:op();" class="btn_normal _add_video">+添加视频</a>
						<a href="javascript:;" class="btn_normal _edit_cover" onclick="editCourseByVID(${userid},${counse.coursedId})">编辑</a> 
						<a href="javascript:;"  onclick="delCounseByid(${userid},${counse.coursedId})" class="btn_normal _del_cover">删除</a> 
					</div>
					 <div class="xlk">
						<select id="mySelect" onclick="findchapter();">
						<c:forEach items="${chapters}" var="chapter">
						<option value="${chapter.chapterId}">${chapter.chapterName}</option>
						</c:forEach>
						</select>
					</div> 
				</div>
			</div>
            <ul class="video_list">
                <li class="item_title">
                    <div class="item_a"><span class="title">序号</span></div>
                    <div class="item_b"><span class="text">视频封面</span></div>
                    <div class="item_c">指数</div>
                     <div class="item_d">状态</div>
                    <div class="item_d">操作</div>
                </li>
            </ul>
            
            <div id="video_list">
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
					<i><img src="images/h.png" class="ist"></i>课程中还没有视频，来添加几个视频进去吧！
					<div>
						<button class="btn2" onclick="javascript:op();">添加视频</button>
					</div>
				</div>
            </c:otherwise>
            </c:choose>
            </div>				
           
			
        </div>
    </div>
</div>
<div id="bg"></div>
<div id="fc" class="mod_pop pop_up_fixed sp1">
				<!--<iframe src="about:blank" class="iframe_mask_pop" frameborder="0"></iframe>-->
				<div class="mod_pop_hd" style="position:relative; z-index:101;"> <h3></h3> <a href="javascript:close();" class="mod_pop_close _close"></a> </div>
				<div style="margin-left:15px;">
						<h3 class="ha">请选择视频：</h3>
				</div>
				<div class="picsel" style="max-height: 320px;min-height:320px;overflow-y:auto;overflow-x: hidden;clear:both;">
					<ul>
					<c:forEach items="${Allvideos}" var="v">
					  <li>
					  <div style="display: none;">${v.videoid}##</div>
						<img src="${v.screenshotpath}" >
						<div style="margin:110px 0 0 0;">${v.title}</div>
						<div style="color: #bbb;"><span>8</span><span class="fr">${v.uptime }</span></div>
					  </li>
					  </c:forEach>
					</ul>
				</div>
				<div class="qdo">
					<a href="javascript:;" onclick="addVideos()"><span class="qd">确定</span></a>
					<a href="javascript:close();" target="_self"><span class="qx">取消</span></a>
				</div>
				 <script src="js/picsel.js"></script>
			</div>
			<!--hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhpostion-->
			<div id="kc" class="mod_pop pop_up_fixed sp1">
				<div class="mod_pop_hd" style="position:relative; z-index:101;"> <h3></h3> <a href="javascript:closes();" class="mod_pop_close _close"></a> </div>
				<!--选择课程，章节跟课程变化-->
				<div style="margin-left:15px;">
						<h3 class="ha">请选择课程：</h3>
						<select name="" id="coun" style="width:300px;height: 30px;" onchange="findchaByCid(this.value)">
						    <c:forEach items="${counses}" var="co">
							<option value="${co.coursedId}">${co.couseTitle}</option>
						    </c:forEach>
						</select>
						<br/>
				</div>
				<!--课程章节-->
				<div class="kctj" style="margin:10px 0 0 15px;max-height: 320px;min-height:350px;overflow-y:auto;overflow-x: hidden;clear:both;">
					<ul id="chap">
						<!-- <li>
							<label>
								<input type="radio" name="a" />
								第一章：初识java 
							</label>
						</li> -->
					</ul>
				</div>
				<div class="qdo">
					<a href="javascript:;" onclick="sub_addKc()"><span class="qd">确定</span></a>
					<a href="javascript:closes();" target="_self"><span class="qx">取消</span></a>
				</div>
				<!--添加视频。课程分割-->
				 <!-- <script src="js/picsel.js"></script> -->
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
<div style="display: none;">
<form action="video/playV.do" method="post" target="_blank" id="playV">
<input type="hidden" name="counseId" id="counseId" value="${counse.coursedId}"/>
<input type="hidden" name="videoid" id="videoid2" value=""/>
</form>
</div>
	</body>
</html>