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
		
	<link href="u/css/st.css" type="text/css" rel="stylesheet">
		<script type="text/javascript" src="js/jf.js"></script>
		<link rel="stylesheet" type="text/css" href="css/css.css" />
		<script src="js/jquery.min.js" type="text/javascript"></script>
		<link href="bootcss/bootstrap.css" type="text/css" rel="stylesheet"> 
		<script type="text/javascript">
		jQuery(document).ready(function($) {
			 window.scrollTo(0,190);
			 });
		function havad_ups(){
	    	 $("#haved-videos").submit(); 
	      			}
			 function mycounses(userid,page){
		    	  var userid =userid;
				  var page =page;
			     $.ajax({  
			        type: "POST",  
			        url: "per_cen/up_kcj.do",  
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
		</script>
		<style type="text/css">
		    .uploadHot {
					    width: 588px;
					    /* height: 182px; */
						height:92px;
					    margin: 0 auto;
					    border: 1px solid #fff;
					}
			.uploadHot a{display:inline-block; width:200px; height:157px; position:relative; margin:-150px 0 0 200px;overflow:hidden;}
			.uploadHot input{cursor:pointer;position:absolute; right:0; top:15; font-size:100px; opacity:0; filter:alpha(opacity=0);}
			.nav ul li{line-height:40px;}
			.mainr{
					background: url(images/ctr.png)no-repeat 10px 35px;
					width: 1020px;
					height: 620px;
				}
		    .upsc p{margin: 0px 0 20px 280px;
					color: #909090;
					font-family: '����';
					font-size: 12px;}
			.upsc .fbgz span{/* margin-right:30px; */
					margin: 0 15px 0 12px;
					color: #99ccee;
				}
				.controls{
					text-align: center;
				}
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
			<div class="mainr" style="margin-left:200px;"  id="mainr_fr">
				<div class="min">
						<p>上传视频<span class="fr xg"><a href="">上传管理</a></span></p>
				</div>
				<div class="upsc" style="margin-top: 350px;">
					<div class="uploadHot">
						<!--<a href="#"><img src="u/images/upload2.png" alt="" /></a>
						<input accept="" style="visibility:hidden; width:10px; height: 10px;"  type="file"></input>-->
						<!-- <div class="uploadIcon"></div> -->
						<div class="uploadBtn"></div>
						<a href="javascript:;" id="upload_a">
						<form id='fForm' class="form-actions form-horizontal"  action="video/preloadFile.do"     
							  encType="multipart/form-data"  target="uploadf" method="post">
							<input type="file" name="fileupload" id="fileupload" multiple="true" onchange="uploadvideo(this.value)"/>
							<input type="hidden"  id="userid"  name="userid" value="${user.userid}"  />
							</form>
						</a>
						<div class="controls" style="margin:10px 0 0 0; display: none;" >  
										<div  class="progress progress-success progress-striped" style="width:70%;margin: 0 auto;">  
											<div  id = 'proBar' class="bar" style="width: 0%"></div>  
										</div>  
										<div style="margin-top:5px;"><font id="speed"></font></div>
					</div> 
					</div>
					
					<div id="mess" style="margin:40px 0px 5px;display:none;font-weight:bold;text-align: center;word-break: break-all;word-wrap: break-word;color: rgb(0, 0, 0);">正在上传<font id="filenameuplaod" color="444199">java入门课程</font> · 已上传<font id="uploadok">0</font>个 · 共<font id="uploadnumber">0</font>个视频 · <font id="upfail" style="color:red;">0个失败</font></div>
					<p>上传视频，即表示您已同意<a href="#">美享厅视频上传服务条款</a>，请勿上传色情暴力，反动等违法视频</p>
				<!-- 	<p class="fbgz"style="margin-left:210;">
					<span onmouseover="fe();" onmouseout="fe2();" href="#">哪些视频是禁止发布的</span>|
					<span onmouseover="fe3();" onmouseout="fe4();" href="#">视频时长</span>|
					<span onmouseover="fe5();" onmouseout="fe6();" href="#">视频规格</span>|
					<span onmouseover="fe7();" onmouseout="fe8();" href="#">视频处理流程</span>|
					<span onmouseover="fe9();" onmouseout="fe10();" href="#">视频点击量盈利分红规则</span>
					</p> -->
					 
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
						<li><a href="">首页</a></li>
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
		<form  id='myForm'  action="batchvideo/batchmyloadFile.do"      method="post">
		 <input type="hidden" name="userid" value="${user.userid}">
		 <input type="hidden" id="filesize" name="filesize" value="">
		 <input type="hidden" name="counseId"  value="${counseId}"/>
	     <input type="hidden" name="chapterId" value="${chapterId}"/>
		</form>
		</div>
		<script type="text/javascript">
		var ot;
		var oloaded;
		var resttime;
		var status=true;
		var arr=new Array();
		var totfiles;
     function uploadvideo(str){ 
    	 $("#mess").show();
    	 $(".controls").show();
		    		 //判断用户有没有登录
		    		 var bool = ${user.username==null||user.username==""};
				     if(bool)
				     {
				     alert("没有登录或者账户已经失效，请您先登录！");
				     window.location="<%=basePath%>/index.jsp";
				     }
				     else
				     {
				             
				    	 if (window.File && window.FileList) {
				    	      var files = document.getElementById("fileupload").files;
				    	      $("#uploadnumber").text(files.length);
				    	      totfiles=files.length;
				    	      for (var i = 0; i < files.length; i++) {
				    	    	  arr[i]=i;
				    	    	  }
				    	      sendformdata(0);
				    	    	  
				    	 }
				    	    /*  else {
				    	      document.getElementById("fForm").submit();   //no html5
				    	    } */
				    	 
				    	 
				    	 
				     // $("#fForm").submit(); 
				     }
		       
  		}
          
     function sendformdata(i){
    	 $("#upload_a").hide();
    	 
    	 var files = document.getElementById("fileupload").files;
    	  var fd = new FormData();
    	    fd.append("chapterId",${chapterId});
    	    fd.append("counseId",${counseId});
	        fd.append("userid",${user.userid});
	        fd.append("file"+i, files[i]);
/* 				    	       var formData = new FormData($( "#uploadForm" )[0]);  
*/				   	      
			$("#filenameuplaod").text(files[i].name);
			 ot = new Date().getTime();   //设置上传开始时间
			$.ajax({  
	            url: 'batchvideo/preloadFile.do' ,  
	            type: 'POST',  
	            data: fd,  
	            contentType: false,  
	            processData: false,
	            beforeSend:function(){
	            	},
	            xhr: function(){
	            	myXhr = $.ajaxSettings.xhr();
	            	if(myXhr.upload){ //检查upload属性是否存在
	            	//绑定progress事件的回调函数
	            	myXhr.upload.addEventListener('progress',onprogress, false);
	            	return myXhr; //xhr对象返回给jQuery使用 
	            	}
	            
	            },
	            success:function(data){
	            	setTimeout(function(){
	            		$("#uploadok").text(i+1);
		            	if(totfiles==i+1){
	            		$("#upload_a").show();
	            				//已完成的总数
	            				var filesize =$("#uploadok").text();
	            				$("#filesize").val(filesize);
			            		$("#proBar").css("width","100%");
			            		//全部上传完成 提交表单
			            		$("#myForm").submit();
		            	}else{
		            		$("#proBar").hide();
		            		 $("#proBar").append("0%");
		            		 $("#proBar").css("width","0%");
		            		 setTimeout(function(){
		            			 $("#proBar").show();
		            			 sendformdata(i+1)
		            		 },1000);
		            		
		            	}	
	            	},1000);
	            	
	            	
				},
	            error:function(data){
	            	var fail=$("#upfail").text();
	            	$("#upfail").text(fail+1+"个失败");
	            }
	            
	       }); 
     }
    
    <%--  var eventFun = function(){ 
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
          var intId = window.setInterval(eventFun,500); --%>
  
        //上传进度回调函数：
          function onprogress(evt){
        	  var nt = new Date().getTime();//获取当前时间
              var pertime = (nt-ot)/1000; //计算出上次调用该方法时到现在的时间差，单位为s
              ot = new Date().getTime(); //重新赋值时间，用于下次计算
              
              var perload = evt.loaded - oloaded; //计算该分段上传的文件大小，单位b  
              oloaded = evt.loaded;//重新赋值已上传文件大小，用以下次计算
            //上传速度计算
              var speed = perload/pertime;//单位b/s
              var bspeed = speed;
              var units = 'b/s';//单位名称
              if(speed/1024>1){
                  speed = speed/1024;
                  units = 'k/s';
              }
              if(speed/1024>1){
                  speed = speed/1024;
                  units = 'M/s';
              }
              speed = speed.toFixed(1);
              //剩余时间
              resttime = ((evt.total-evt.loaded)/bspeed).toFixed(1);
			  var loaded = evt.loaded;     //已经上传大小情况 
			  var tot = evt.total;      //附件总大小 
			  var per = Math.floor(100*loaded/tot);  //已经上传的百分比 
			  $("#proBar").css("width",per+""+"%");  
			  $("#proBar").empty();  
			  $("#proBar").append(per+""+"%"); 
			  $("#speed").text("速度："+speed+units+"   剩余时间"+resttime+"秒");
			  
			 }
        
        
          function form_kc_sub(userid,coursedId){
       	   $("#userid").val(userid);
       	  $("#coursedId").val(coursedId);
       		$("#form_kc").submit();
         }
  </script>
	</body>
</html>