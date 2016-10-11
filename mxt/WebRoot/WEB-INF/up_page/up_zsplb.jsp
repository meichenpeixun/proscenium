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
		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
		<title>我的视频课程</title>
		<link href="u/css/st.css" type="text/css" rel="stylesheet">
		<script type="text/javascript" src="js/jf.js"></script>
		<link href="list/style/cores.css" type="text/css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="css/up_cg.css" />
		<link rel="stylesheet" type="text/css" href="css/picsel.css" />
		<script src="up_success/jquery.js"></script>
		<script type="text/javascript">
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
		function closes(){
			document.getElementById("kc").style.display ="none";
			document.getElementById("bg").style.display ="none";
		}function ops(){
			document.getElementById("bg").style.display ="block";
			document.getElementById("kc").style.display ="block";
		}
		function checkUser(){
			if(${user.username==null||user.username==""})
		     {
		     alert("没有登录或者账户已经失效，请您先登录！");
		   
				$('.theme-popover-mask').fadeIn(100);
				$('.theme-popover').slideDown(200);
				$('.theme-popover-mask2').fadeOut(100);
				$('.theme-popover2').slideUp(200);
				$("#bg").css("display","block");
			
			$('.theme-poptit .close').click(function(){
				$('.theme-popover-mask').fadeOut(100);
				$('.theme-popover').slideUp(200);
				$("#bg").css("display","none");
			})
		    
		     
		     return false;
		     }
			 return true;

		}
		//个人上传视频管理
		 function havad_ups(){
	    	 $("#haved-videos").submit(); 
	      }
		//查找个人上传视频
		function findVByPage(userid,page){
			if(checkUser()){
			  var userid =userid;
			  var page =page;
			  var audit =10;
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
		 }
		//查找个人通过审核视频
		function findokVByPage(userid,page){
			  var userid =userid;
			  var page =page;
			  var audit =1;
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
		//未通过视频
		function findDeVByPage(userid,page){
			  var userid =userid;
			  var page =page;
			  //audit 2-6
			  var audit =26;
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
		//未审核视频
		function findNVByPage(userid,page){
			  var userid =userid;
			  var page =page;
			  var audit =0;
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
		//资料未完善
		function findeditVByPage(userid,page){
			  var userid =userid;
			  var page =page;
			  var audit =11;
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
		function deleteVideoByVID(videoid,userid,page,audit,realaudit,rraudit){
			if(confirm("确认删除吗?")){ 
			var videoid =videoid;
			    $.ajax({  
	            type: "POST",  
	            url: "<%=basePath%>/per_cen/deleteVideoByVID.do",  
	            data: {videoid:videoid,userid:userid,page:page,audit:audit,realaudit:realaudit,rraudit:rraudit},
	            async:false,
	            dataType: "html",  
	            beforeSend:function(){
	            $(".del_msg").html("loading...");
	            $(".del_msg").css("display","block");
				setTimeout("$('.del_msg').fadeOut()",2000)},  
	            success:function(data){
	            	$(".del_msg").html("操作成功...");
		            $(".del_msg").css("display","block");
					setTimeout("$('.del_msg').fadeOut()",2000)
            		$("#mainr_fr").html(data);
 			}
 		}); 
			}
		 }
		function deleteAllVideoByVID(userid,audit){
			
					var num =$("input[name=checkbox]:checked").length ;
					   if(num<1){
						$(".del_msg").html("请选择视频..");
				        $(".del_msg").css("display","block");
						setTimeout("$('.del_msg').fadeOut()",1000)  
					   }else{
						   if(confirm("确认删除吗?")){   
							var page = 1;
						    var videoIds = $("input[name='checkbox']:checked").serialize();
						     $.ajax({  
				            type: "POST",  
				            url: "<%=basePath%>/per_cen/deleteAllVideoByVID.do",  
				            data: {videoIds:videoIds,userid:userid,page:page,audit:audit},
				            async:false,
				            dataType: "html",  
				            beforeSend:function(){
				            $(".del_msg").html("loading...");
				            $(".del_msg").css("display","block");
							setTimeout("$('.del_msg').fadeOut()",2000)},  
				            success:function(data){
				            	$(".del_msg").html("操作成功...");
					            $(".del_msg").css("display","block");
								setTimeout("$('.del_msg').fadeOut()",2000)
			          			$("#mainr_fr").html(data);
									}
									}); 
						   }
					   }
					  
		 }      
		   function selectAll(){
			   var check_all = document.getElementById("check_all")
			   var coll = document.getElementsByName("checkbox");
			   for(var i=0;i<coll.length;i++){
				   if(check_all.checked){
					   coll[i].checked = true;   
				   }else{
					   coll[i].checked = false;   
				   }
			   }
		   }    
		   function child_check(){
			   var check_all = document.getElementById("check_all")
			   var coll = document.getElementsByName("checkbox");
			   var j =0;
			   for(var i=0;i<coll.length;i++){
				   if(coll[i].checked==false){
					   check_all.checked = false;  
				   }else{
					   j++;
				   }
			   }
			   if(coll.length==j&&coll.length!=0){
				   check_all.checked = true; 
			   }
		   } 
		   
		   function editVideoByVID(videoid,userid,audit){
				 
			     $.ajax({  
	            type: "POST",  
	            url: "<%=basePath%>/per_cen/editVideoByVID.do",  
	            data: {videoid:videoid,userid:userid,audit:audit},
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
		   <%
		   String msg =(String)request.getAttribute("msg");
		   if("ok".equals(msg)){
		   %>
		   $(function(){
		   $(".del_msg").html("操作成功");
           $(".del_msg").css("display","block");
			setTimeout("$('.del_msg').fadeOut()",1000);  
		   });
		  <%
		   }
			%>
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
						<li><a href="javascript:;">合作伙伴</a></li>
					</ul>
				</div>
				<div class="fr" style="margin-top:8px;"> 
					 <div class="search">
					  <form  method="post" target="_blank" name="formsearch" action="/">
						<div class="search_box">
						  <input type="hidden" name="kwtype" value="0" class="search_bg">
						  <input style="height:30px;padding-left: 12px;font-size:12px;" name="q" id="search-keyword" value="在这里搜索..." onFocus="if(this.value=='在这里搜索...'){this.value='';}"  onblur="if(this.value==''){this.value='在这里搜索...';}" class="search_bg" >
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
						<li><img src="u/images/smrz.png"> <a style="vertical-align:middle;" href="javascript:;">实名认证</a></li>
						<li><img src="u/images/iphon.png"><a style="vertical-align:middle;" href="javascript:;">手机认证</a></li>
						<li><img src="u/images/emrz.png"> <a style="vertical-align:middle;" href="javascript:;">邮箱认证</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="main">
			<form action="per_cen/up_zsplb.do" method="post" id="haved-videos">
		    <input type="hidden" name="userid" value="${user.userid}"/>
			<input type="hidden" name="audit" value="10"/>
			</form>
			<div class="del_msg"></div>
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
				</div>-->
				<div class="r-t-nav-box">
					<div class="r-t-nav-title">
						我上传的
					</div>
					<div class="r-t-nav-main clearfix">
						<div class="ct-nav-icon left prv-btn"></div>
						<div class="three-mun-box left">
							<ul class="clearfix">
								<li><a  class="active" href="javascript:;">全部视频(${count_videos[0]})</a></li>
								<li><a  href="javascript:;" onclick="findokVByPage(${user.userid},1)">已通过视频(${count_videos[1]})</a></li><!--onclick="findokVByPage(${user.userid},1)"-->
								<li><a  href="javascript:;" onclick="findDeVByPage(${user.userid},1)">未通过视频(${count_videos[2]})</a></li>
								<li><a  href="javascript:;" onclick="findNVByPage(${user.userid},1)">未审核视频(${count_videos[3]})</a></li>
								<li><a  href="javascript:;" onclick="findeditVByPage(${user.userid},1)">资料未完善(${count_videos[4]})</a></li>
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
															<a href="javascript:;" onclick="deleteAllVideoByVID(${user.userid},10)">删除</a>
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
															<c:choose>
															<c:when test="${video.tags eq null || video.descript eq null || video.categorys eq null || video.coursename eq null }">
															<div class="check"><input value="${video.videoid}.11.${video.audit}" onclick="child_check()" name="checkbox" type="checkbox"></div>
															</c:when>
															<c:otherwise>
															<div class="check"><input value="${video.videoid}.${video.audit}.111" onclick="child_check()" name="checkbox" type="checkbox"></div>
															</c:otherwise>
															</c:choose>
													
												</td>
												<td class="m_video">
													<ul class="v vsh">
													
														<li class="v_link">
														<c:choose>
														<c:when test="${video.audit==1}">
														<a href="video/play.do?id=${video.videoid}" target="_blank" title="${video.title}"></a>
														</c:when>
														<c:otherwise>
														<a  href="javascript:;" title="${video.title}"></a>
														</c:otherwise>
														</c:choose>
														</li>
														<li class="v_thumb">
															<img src="<%=basePath%>${video.screenshotpath}" alt="${video.title}" title="${video.title}">
														</li>
														<li class="v_ishd"></li>
														<li class="v_menu" style="display: none;" id="PlayListFlag_XMTY1MzYyNTMwNA=="><span class="ico__listadd" title="添加到点播单"></span></li>
														<li class="v_title">
														<c:choose>
														<c:when test="${video.audit==1}">
														<a  href="video/play.do?id=${video.videoid}" target="_blank" title="${video.title}">${video.title}</a>
														</c:when>
														<c:otherwise>
														<a  href="javascript:;" title="${video.title}">${video.title}</a>
														</c:otherwise>
														</c:choose>
														
														</li>
														<li class="v_info"><span class="num">${video.uptime}</span></li>
														<li class="v_promotion"></li>
													</ul>
												</td>
												<td class="m_stat">
													<div class="stat">
																	<div id="" class="stat_cont">
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
															<c:choose>
															<c:when test="${video.tags eq null || video.descript eq null || video.categorys eq null || video.coursename eq null }">
															<span class="share"><a href="javascript:;" onclick="deleteVideoByVID(${video.videoid},${user.userid},${page},10,11,${video.audit})">删除</a></span>
															</c:when>
															<c:otherwise>
															<span class="share"><a href="javascript:;" onclick="deleteVideoByVID(${video.videoid},${user.userid},${page},10,${video.audit}),111">删除</a></span>
															</c:otherwise>
															</c:choose>
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
			</div>
			</div>
		</div>
		<script src="up_success/manager.js"></script>
		<!--网站底部-->
		<div class="footer clear">
			<div class="warp">
				<div class="w_l">
					<ul>
						<li><a href="/">首页</a></li>
						<li><a href="">人才招聘</a></li>
						<li><a href="<%=basePath%>AboutWe/contact.do">联系我们</a></li>
						<li><a href="">合作专区</a></li>
						<li><a href="">关于我们</a></li>
						<li><a href="">讲师招募</a></li>
						<li><a href="">意见反馈</a></li>
						<li><a href="">友情链接</a></li>
					</ul>
				</div>
				<div class="fr">
					<p>Copyright &copy; 2016 isupertest.com All Rights Reserved | 京ICP备16037877号</p>
				</div>
			</div>
		</div>
		</div>
	</body>
</html>