<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
		<title>上传视频</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<link href="u/css/st.css" type="text/css" rel="stylesheet">
		<script type="text/javascript" src="js/jf.js"></script>
		<link href="bootcss/bootstrap.css" type="text/css" rel="stylesheet">
		<script type="text/javascript" src="js/jquery.min.js"></script>
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
		</script>
		<style>
			.control-group span{display:inline-block; width:200px; height:157px; overflow:hidden;}
			.control-group input{right:0; top:0; font-size:100px; opacity:0; cursor: pointer; filter:alpha(opacity=0);}
			.nav ul li{line-height:40px;}
		</style>
	</head>
	<body>
	
		<div class="header">
		<div style="display: none;">
		<form action="per_cen/up_zsplb.do" method="post" id="haved-videos">
		    <input type="hidden" name="userid" value="${user.userid}"/>
			<input type="hidden" name="audit" value="10"/>
			</form>
			</div>
			<div class="h-wb">
				<div class="fl">
					<img class="f-fl img" src="u/images/logo3.png" title="美学堂" height="47" width="174">
				</div>
				<div class="nav">
					<ul>
						<li><a href="<%=basePath%>">首页</a></li>
						<li><a href="<%=basePath%>pub_course.jsp">公开课</a></li>
						<li><a href="javascript:;">合作伙伴</a></li>
					</ul>
				</div>
				<div class="fr"> 
					 <div class="search">
						<div class="search_box">
						  <input type="hidden" name="kwtype" value="0" class="search_bg">
						  <input name="q" id="search-keyword" value="在这里搜索..." onFocus="if(this.value=='在这里搜索...'){this.value='';}"  onblur="if(this.value==''){this.value='在这里搜索...';}" class="search_bg" >
						  <button type="submit" class="search_button">搜 索</button>
						</div>
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
			<div class="mainr" style="margin-left:200px;"  id="mainr_fr">
				<div class="min">
						<p>上传视频<span class="fr xg"><a href="">上传管理</a></span></p>
				</div>
				<div class="upsc">
					<!--<div class="uploadHot">
						<!--<a href="#"><img src="u/images/upload2.png" alt="" /></a>
						<input accept="" style="visibility:hidden; width:10px; height: 10px;"  type="file"></input>-->
						<!--<div class="uploadIcon"></div>
						<div class="uploadBtn"></div>
						<a href="#">
							<input type="file"/>
						</a>
					</div>-->
								<div style="margin-top:-80px;">
									<img src="images/up_load.jpg">
								</div>
					<div style="height:40px;">
							<form id='fForm' class="form-actions form-horizontal"  action="video/preloadFile.do"     
							  encType="multipart/form-data" target="uploadf" method="post">
								 <div class="control-group" style="margin:-150px 0 0 210px;">  
								<!--	<label class="control-label">上传文件:</label>  -->
								    
									<div class="controls">
										<input type="hidden"  id="userid"  name="userid" value="${user.userid}" />
										<input type="file"  style="height:140px;width:150px;cursor:pointer;margin-left:60px;" name="files" onchange="uploadvideo(this.value)" >
									</div>  
									 <br/><br/><br/><br/><br/><br/><br/>
									<!--<label class="control-label">上传进度:</label>  -->
									<div class="controls" style="margin-top:-120px;">  
										<div  class="progress progress-success progress-striped" style="width:50%">  
											<div  id = 'proBar' class="bar" style="width: 0%"></div>  
										</div>  
									</div>  
								</div>  
						</form>  
						<iframe name="uploadf" style="display:none"></iframe>  
					</div>
					<p>上传视频即表示您已同意<a href="#">美享厅视频上传服务条款</a>,请勿上传色情暴力,反动等违法视频</p>
					<p class="fbgz"style="margin-left:210;">
					<span onMouseOver="fe();" onMouseOut="fe2();" href="#">哪些视频是禁止发布的</span>
					<span onMouseOver="fe3();" onMouseOut="fe4();" href="#">视频时长</span>
					<span onMouseOver="fe5();" onMouseOut="fe6();" href="#">视频规格</span>
					<span onMouseOver="fe7();" onMouseOut="fe8();" href="#">视频处理流程</span>
					<span onMouseOver="fe9();" onMouseOut="fe10();" href="#">视频点击量盈利分红规则</span>
					</p>
					<ul>
						<li id="a" class="jxz">不得上传未经授权的他人作品，以及色情、反动等违法视频。</li>
						<li id="b" class="jxz">不支持时长小于1秒或大于10小时的视频文件，上传后将不能成功转码</li>
						<li id="c" class="jxz">目前我们支持的格式有：asx，asf，mpg，wmv，3gp，mp4，mov，avi，flv</li>
						<li id="d" class="jxz">
						流程：<br/>
						1. 上传：将视频上传至服务器。<br/>
						2. 转码：上传成功后服务器将视频转码成播放器可识别的格式。<br/>
						3. 审核：转码完成后视频进入内容审核阶段。<br/>
						4. 发布：审核通过，视频正式发布。
						</li>
						<li id="e" class="jxz">上传视频浏览量分红</li>
					</ul>
				</div>
			</div>
		</div>
		<!--网站底部-->
		<div class="footer clear">
			<div class="warp">
				<div class="w_l">
					<ul>
						<li><a href="http://localhost:8080/mxt/">首页</a></li>
						<li><a href="">人才招聘</a></li>
						<li><a href="<%=basePath%>AboutWe/contact.do">联系我们</a></li>
						<li><a href="">合作专区</a></li>
						<li><a href="<%=basePath%>AboutWe/about.do">关于我们</a></li>
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
		<div style="display: none;">
		<form  id='myForm'  action="video/myloadFile.do"      method="post">
		 <input type="hidden" name="userid" value="${user.userid}">
		 <input type="hidden" id="filename" name="filename" value="">
		</form>
		</div>
		<script type="text/javascript">
     function uploadvideo(str){ 
    	 //截取文件名
    	 if(str.indexOf("\\")==-1?false:true){
    		 var filelist =str.split("\\"); 
    	     var filename=filelist[filelist.length-1];
    	     document.getElementById("filename").value=filename;
    	 }else{
           document.getElementById("filename").value=str;
    	 }
	     var mylist =str.split("."); 
	     var types=mylist[mylist.length-1];
     	//支持类型asx，asf，mpg，wmv，3gp，mp4，mov，avi
		     if(types=="asx"||types=="asf"||types=="mpg"
		      ||types=="wmv"||types=="3gp"||types=="mp4"
		      ||types=="mov"||types=="avi"||types=="flv")
		     {
		    		 //判断用户有没有登录
		    		 var bool = ${user.username==null||user.username==""};
				     if(bool)
				     {
				     alert("没有登录或者账户已经失效，请您先登录！");
				     window.location="<%=basePath%>/index.jsp";
				     }
				     else
				     {
				      $("#fForm").submit(); 
				     }
		        var eventFun = function(){ 
		       $.ajax({  
                        type: "GET",  
                        url: "<%=basePath%>/video/process.do",  
                        data: {},  
                        dataType: "json",  
                        success:function(data){
                        $("#proBar").css("width",data.rate+""+"%");  
                                $("#proBar").empty();  
                                $("#proBar").append(data.show);   
                                if(data.readSize == data.totalSize){  
                                   window.clearInterval(intId);  
                                     $("#myForm").submit(); 
                                }     
                       	},	
                       
                               
                }); 
                }
              var intId = window.setInterval(eventFun,500);
		     }else{
		       alert("不好意思，此类型暂时不支持！");
		     }
               
  		}
  
  </script>
	</body>
</html>