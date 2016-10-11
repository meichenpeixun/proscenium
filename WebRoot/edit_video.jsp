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
		<title>编辑视频</title>
		<link href="u/css/st.css" type="text/css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="css/css2.css" />
		<script src="js/jquery-1.10.2.min.js"></script>
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
						<li><img src="u/images/smrz.png"> <a style="vertical-align:middle;" href="javascript:;">实名认证</a></li>
						<li><img src="u/images/iphon.png"><a style="vertical-align:middle;" href="javascript:;">手机认证</a></li>
						<li><img src="u/images/emrz.png"> <a style="vertical-align:middle;" href="javascript:;">邮箱认证</a></li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="del_msg"></div>
		<div class="main">
			<div class="mainl fl">
				<ul>
					<li style="background:url(u/images/zuye.png) no-repeat 5px 20px;"><a href="<%=basePath%>pcenter.jsp">会员主页</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li>
					<li style="background:url(u/images/gr.png) no-repeat 5px 20px;"><a href="javascript:;">个人认证</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li><!--<%=basePath%>per_cen/per_zlws.do  -->
					<!--<li style="background:url(u/images/tea.png) no-repeat 5px 20px; "><a style="color:#ff6600;">我是讲师</a></li>-->
					<%-- <li style="background:url(u/images/upload.png) no-repeat 5px 20px;"><a href="<%=basePath%>upload.jsp">上传视频</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li> --%>
					<li style="background:url(u/images/ysc.png) no-repeat 5px 15px;"><a href="javascript:;" onclick="havad_ups()">已上传视频</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li>
					<li style="background:url(u/images/kecng.png) no-repeat 5px 15px;"><a href="javascript:;" onclick="mycounses(${user.userid},1)">我的课程</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li>
					<!--<li style="background:url(u/images/xuy.png) no-repeat 5px 20px;"><a style="color:#ff6600;">我是学员</a></li>-->
					<li style="background:url(u/images/bfhis.png) no-repeat 5px 20px;"><a href="javascript:;">播放记录</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li>
					<li style="background:url(u/images/sc.png) no-repeat 5px 20px;"><a href="javascript:;">收藏记录</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li>
					<li style="background:url(u/images/gm.png) no-repeat 5px 20px;"><a href="javascript:;">购买课程</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li>
					<li style="background:url(u/images/vip.png) no-repeat 5px 15px;"><a href="javascript:;">开通VIP</a><img class="fr"style="margin:23px 10px;" src="u/images/sj.png"></li>
				</ul>
			</div>
			<div class="mainr fr" id="mainr_fr" style="background:#fafafa;">
				<div class="min spx">
						<p>视频信息<span class="fr xg"><a href="">上传管理</a></span></p>
				</div>
					<div class="up_sc" >
						<div class="up_sc1 fl"  id="part_edit" >
						<c:forEach items="${videos}" var="video" varStatus="status">
						<c:if test="${status.count == 1}">
						<form action="batchvideo/edit_video.do" id="edit_video_from" >
						<input type="hidden" id="videoid" name="videoid" value="${video.videoid}"/>
						<div>
							</div>
							<div class="space20"></div>
							<div class="cs">
								<div>
									标题：<input name="title" id="title" type="text" value="${video.title}">
									<div class="space20"></div>
								</div>
							</div>
							<div class="space20"></div>
							<div class="cs">
									简介：<textarea name="descript" id="descript" cols="30" rows="10">${video.descript}</textarea>
									<div class="space20"></div>
							</div>
							<div class="space20"></div>
							<div class="cs">
								 <div class="items" style="z-index:92">
								<span class="f_14">课程：</span>
							<div >
									<select id="font_size" name="coursename"  style="width:246px;height: 31px;cursor: pointer;" onchange="changeChapter()">
									<c:forEach items="${counses}" var="counse">
									<c:choose>
									<c:when test="${counse.couseTitle==video.coursename}">
									<option value="${counse.coursedId}" selected="selected">${counse.couseTitle}</option>
									</c:when>
									<c:otherwise>
									<option value="${counse.coursedId}" >${counse.couseTitle}</option>
									</c:otherwise>
									</c:choose>
									</c:forEach>
									</select>
									<div class="space20"></div>
								</div>
								</div>
								<div class="space20"></div>
								<span class="f_14">章节：</span>
								<div class="items" style="z-index:92">
									<select id="font_size2" name="chapterName"  style="width:246px;height: 31px;"">
										<c:forEach items="${chpters}" var="chpter">
										<c:choose>
										<c:when test="${chpter.chapterId==video.chapterId}">
										<option value="${chpter.chapterId}" selected="selected">${chpter.chapterName}</option>
										</c:when>
										<c:otherwise>
										<option value="${chpter.chapterId}" >${chpter.chapterName}</option>
										</c:otherwise>
										</c:choose>
										</c:forEach>
									</select>
									
								 </div>
							</div>
							<div class="space20"></div>
							<div class="cs">
								标签：<input class="in_w" id="tags" name="tags" type="text" value="${video.tags}">
								<div class="space20"></div>
							</div>
							<div>
								版权：
								<c:choose>
								<c:when test="${video.vtypes==0 }">
								<label><input type="radio" name="identity" value="0" checked="checked"/>&nbsp;原创视频</label>&nbsp;&nbsp;
								<label><input type="radio" name="identity" value="1" />&nbsp;转载视频</label>
								</c:when>
								<c:otherwise>
								<label><input type="radio" name="identity" value="0" />&nbsp;原创视频</label>&nbsp;&nbsp;
								<label><input type="radio" name="identity" value="1" checked="checked"/>&nbsp;转载视频</label>
								</c:otherwise>		
								</c:choose>	
							</div>
							<div class="space20"></div>
							<div class="cs">
									封面：<input type="file" name="screenshotpath" id="screenshotpath">
									<div class="space20"></div>
							</div>
							<div class="space20"></div>
							<div class="cs dx">
								<input id="ok"  type="button" onclick="bc_editV()" value="保  存" />
								<input id="nook"  type="button" onclick="quit()" value="取  消" />
							</div>
							</form>
							</c:if>
							</c:forEach>
						</div>
						<div class="pbj">
							<!--批量编辑开始-->
							<div style="line-height:40px;height:40px;margin-bottom: 20px;border-bottom: 1px solid #eee;font-size: 0;position: relative;">
								<h2 style="font-size:16px;font-weight:400;">视频编辑列表</h2>
								<span style="float:right;margin-top:-37px;font-size:14px;"><a style="color:#787d82;" href="javascript:;" onclick="exit()">取消编辑</a></span>
							</div>
							<div class="plbj" style="overflow-y: scroll;overflow-x: hidden;max-height: 420px;">
							      <%int i=1; %>
							      <c:forEach items="${videos}" var="video">
							           
										<div class="bdiv" id="v<%=i%>">
										<div style="display: none;">${video.videoid}</div>
											<div class="sz"><%=i%>
											<span >
											<a href="javascript:;" onclick="next(<%=i%>,${video.videoid})"><img class="yt" src="${video.screenshotpath}" alt="" /></a></span>
											</div>
											<div class="ybd">
												<ul><%if(i==1){ %>
													<li style="margin-top:0px;"><a style="font-size: 13px;color: #555;" href="javascript:;"  onclick="next(<%=i%>,${video.videoid})">${video.coursename}</a><img id="pev<%=i%>"  src="images/bj.png" style="width:25px;height:25px; " alt="" /></li>
													<%}else{ %>
													<li style="margin-top:0px;"><a style="font-size: 13px;color: #555;" href="javascript:;"  onclick="next(<%=i%>,${video.videoid})">${video.coursename}</a><img id="pev<%=i%>"  src="images/bj.png" style="width:25px;height:25px; display: none;" alt="" /></li>
													<%} %>
													<li class="jje" style="margin-top:0px;">${video.title}</li>
												</ul>
											</div>
											
										</div>
										<div style="clear:both;"></div>
								  		<%i++; %>
								  
								   </c:forEach>
								   <input type="hidden" id="videosize" value="<%=i%>"/>
										
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
													<form action="<%=basePath%>per_cen/up_kcnl.do" id="form_kc" method="post">
						  							<input type="hidden" name="userid" id="userid" value="${userid}" />
						  							<input type="hidden" name="coursedId" id="coursedId" value="${counseId}" />
						  							</form>
						  							<form action="per_cen/up_zsplb.do" method="post" id="haved-videos">
												    <input type="hidden" name="userid" value="${user.userid}"/>
													<input type="hidden" name="audit" value="10"/>
													</form>
		</div>
	</body>
	<script type="text/javascript">
	var curid=1;
	var videosize=$("#videosize").val();
	var arr = new Array();
	for(i=0;i<videosize-1;i++){
		j=i+1;
		arr[i]=j;
	}
	function quit(){
			
	        	if(curid+1==videosize||arr.length==1){
	        		if(arr.length==1){
	        			$("#form_kc").submit();
	        		}else{
	        			//删除数组里的值
	        			arr.remove(curid);
	        			//删除显示
	                   	$("#v"+curid).remove();
	        			
	                    curid=arr[0];
	                   	var videoid=$("#v"+curid+" div:first-child").text();
	                   	next(curid,videoid);
	        		}
	        	}else{ 
	        	
	        	arr.remove(curid);
	           	$("#v"+curid).remove();
	            curid=curid+1;
	           	var videoid=$("#v"+curid+" div:first-child").text();
		           	if(videoid==""){
		           		curid=arr[0];
	                   	var videoid=$("#v"+curid+" div:first-child").text();
	                   	next(curid,videoid);
		           	}else{
		           	next(curid,videoid)
		           	}
	        	}
	          
	       
	           
	    
		
	}
	function exit(){
		$(".del_msg").html("跳转中...");
        $(".del_msg").css("display","block");
		setTimeout("$('.del_msg').fadeOut()",2000);
		$("#form_kc").submit();
	}
	function bc_editV(){
		
	   var fd = new FormData();
		
	   var videoid =  $("#videoid").val();
	   var title = $("#title").val();
	   var descript = $("#descript").val();
	   var counsename = $("#font_size  option:selected").text();
	   var chapterId = $("#font_size2").val();
	   var tags = $("#tags").val();
	   var identity = $("input[name='identity']:checked").val();
	   var file = document.getElementById("screenshotpath").files;
	   
	 
		  fd.append("videoid",videoid);
		  fd.append("title",title);
	      fd.append("descript",descript); 
	      fd.append("counsename",counsename); 
	      fd.append("chapterId",chapterId); 
	      fd.append("tags",tags); 
	      fd.append("identity",identity); 
	      fd.append("file",file[0]); 
		   	      
		
		
		 $.ajax({  
           url: 'per_cen/edit_video.do' ,  
           type: 'POST',  
           data: fd,  
           contentType: false,  
           processData: false,
           beforeSend:function(){
           	},
           success:function(data){
        	if(curid+1==videosize||arr.length==1){
        		if(arr.length==1){
        			$(".del_msg").html("跳转中...");
		            $(".del_msg").css("display","block");
					setTimeout("$('.del_msg').fadeOut()",2000);
        			$("#form_kc").submit();
        		}else{
        			//删除数组里的值
        			arr.remove(curid);
        			    $(".del_msg").html("保存成功！");
			            $(".del_msg").css("display","block");
						setTimeout("$('.del_msg').fadeOut()",2000);
        			//删除显示
                   	$("#v"+curid).remove();
        			
                    curid=arr[0];
                   	var videoid=$("#v"+curid+" div:first-child").text();
                   	next(curid,videoid);
        		}
        	}else{ 
        	
        	arr.remove(curid);
        	$(".del_msg").html("保存成功！");
            $(".del_msg").css("display","block");
			setTimeout("$('.del_msg').fadeOut()",2000);
           	$("#v"+curid).remove();
            curid=curid+1;
           	var videoid=$("#v"+curid+" div:first-child").text();
	           	if(videoid==""){
	           		curid=arr[0];
                   	var videoid=$("#v"+curid+" div:first-child").text();
                   	next(curid,videoid);
	           	}else{
	           	next(curid,videoid)
	           	}
        	}
           },
           error:function(data){
           
           }
           
      });  
}
	//删除数组指定元素
	Array.prototype.remove = function(val) {
		var index = this.indexOf(val);
		if (index > -1) {
		this.splice(index, 1);
		}
		};
	Array.prototype.indexOf = function(val) {
		for (var i = 0; i < this.length; i++) {
		if (this[i] == val) return i;
		}
		return -1;
		};
	
	  function next(id,videoid){
		  
		    curid=id;
		    for(i=0;i<arr.length;i++){
				if(id==arr[i]){
					$("#pev"+id).show();
				}else{
					$("#pev"+arr[i]).hide();
				}
			}
		    
	    	var userid =${userid};
	    	var counseId=${counseId};
	    	 $.ajax({  
			        type: "POST",  
			        url: "<%=basePath%>/per_cen/part_kc.do",  
			        data: {videoid:videoid,userid:userid,counseId:counseId},
			        async:false,
			        dataType: "html",  
			        success:function(data){
			        	$("#part_edit").empty();
		             $("#part_edit").html(data);
					}
				}); 
	  
	    }
	
		function TestBlack(TagName){
			 var obj = document.getElementById(TagName);
			 if(obj.style.display=="block"){
			  obj.style.display = "none";
			 }else{
			  obj.style.display = "block";
			 }
			}
		
		function changeChapter(){
			var counseId= $("#font_size").val();
			 $.ajax({  
               type: "POST",  
               url: "<%=basePath%>/video/findChapterById.do",  
               data: {counseId:counseId},  
               dataType: "json",
				 processData : true, 
				 success:function(data){
			     if(data==null||data==""){
		               $("#font_size2").empty();
		               $("#font_size2").append("<option value=''>暂无章节</option>");
                }else{
                      $("#font_size2").empty();
              	 jQuery.each(data,function(key,value){
                     $("#font_size2").append("<option value='"+value.chapterId+"'>"+value.chapterName+"</option>");   
     			           });
    			  }
				  }
    			}); 
			
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
</html>