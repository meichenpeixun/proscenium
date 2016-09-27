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
    
    <title>上传视频</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
		<link href="u/css/st.css" type="text/css" rel="stylesheet">
		<script type="text/javascript" src="js/jf.js"></script>
		<link rel="stylesheet" type="text/css" href="css/css.css" />
		<script src="js/jquery.min.js" type="text/javascript"></script>
		<script language="javascript">
<%-- function delCounseByid(){
			
			var str =$("#font_size").val();
			var obj=document.getElementById('font_size');
			//index,要删除选项的序号，这里取当前选中选项的序号
			var index=obj.selectedIndex;
			if(index!=-1&&str!=""){
			if(confirm("确认删除吗?")){ 
			obj.options.remove(index); 
			$("#font_size2").empty();
			$("#font_size2").append("<option value=''>请先选择课程</option>");
			
			if(str.indexOf("m-x-t")!=-1){
			var liststr =str.split("m-x-t"); 
			var counseId= liststr[liststr.length-1];
			
			  $.ajax({  
                 type: "POST",  
                 url: "<%=basePath%>/video/delCouAndChaById.do",  
                 data: {counseId:counseId},  
                 dataType: "json",
				 processData : true, 
			 }); 
				 }
			}
			}
		}
		function delChapterByChaid(){
			
			var str =$("#font_size2").val();
			var obj=document.getElementById('font_size2');
			//index,要删除选项的序号，这里取当前选中选项的序号
			var index=obj.selectedIndex;
			if(index!=-1&&str!=""){
			if(confirm("确认删除吗?")){ 
			obj.options.remove(index); 
			
			if(str.indexOf("m-x-t")!=-1){
			var liststr =str.split("m-x-t"); 
			var chapterId= liststr[liststr.length-1];
			
			  $.ajax({  
                 type: "POST",  
                 url: "<%=basePath%>/video/delChaById.do",  
                 data: {chapterId:chapterId},  
                 dataType: "json",
				 processData : true, 
			 }); 
				 }
			}
			}
		} --%>
		function delCounseByid(){
			var str =$("#font_size").val();
			var obj=document.getElementById('font_size');
			//index,要删除选项的序号，这里取当前选中选项的序号
			var index=obj.selectedIndex;
			 if(index!=-1&&str!="")
			{
			if(str.indexOf("m-x-t")!=-1)
			{
			var liststr =str.split("m-x-t"); 
			var counseId= liststr[liststr.length-1];
			var  userid =${user.userid};
			 
					if(delCouAndCha_check(userid,counseId))
					 {
						 		if(confirm("确认删除吗？")){
								//判断没有视频 直接删除此课程
								todelete(userid,counseId);
								//标签里删除
							    obj.options.remove(index); 
								$("#font_size2").empty();
								$("#font_size2").append("<option value=''>请先选择课程</option>");
						        }
					//此课程下有视频 
					 }else{
						 if(confirm("此课程下有视频,需要前往处理吗？ 点击 '确定' 此次编辑将无法保存！")){form_kc_sub(userid,counseId);}
					      }
					 } else{
						 obj.options.remove(index);
					 }
				 }
			}
		 
		function delChapterByChaid(){
			
			var str =$("#font_size2").val();
			var obj=document.getElementById('font_size2');
			//index,要删除选项的序号，这里取当前选中选项的序号
			var index=obj.selectedIndex;
			 if(index!=-1&&str!="")
			{
			if(str.indexOf("m-x-t")!=-1)
			{
			var str1 =$("#font_size").val();
			var liststr1=str1.split("m-x-t"); 
			var counseId= liststr1[liststr1.length-1];
			var liststr =str.split("m-x-t"); 
			var chapterId= liststr[liststr.length-1];
			var  userid =${user.userid};
			 
			if(delCouAndCha_check_chap(userid,counseId,chapterId))
			 {
				 		if(confirm("确认删除吗？")){
						//判断没有视频 直接删除此章节
						$.ajax({  
				                 type: "POST",  
				                 url: "<%=basePath%>/video/delChaById.do",  
				                 data: {chapterId:chapterId},  
				                 dataType: "json",
								 processData : true, 
							 }); 
						//标签里删除
					    obj.options.remove(index); 
						$("#font_size2").empty();
						$("#font_size2").append("<option value=''>请先选择课程</option>");
				        }
			//此课程下有视频 
			   }else{
				 if(confirm("此章节下有视频,需要前往处理吗？ 点击 '确定' 此次编辑将无法保存！ ")){form_kc_sub(userid,counseId);}
			   }
			   }
			  else{
				 obj.options.remove(index);
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
      function delCouAndCha_check_chap(userid,counseId,chapterId){
    	  var boo =null;
    	  $.ajax({  
              type: "POST",  
              url: "<%=basePath%>/per_cen/delCouAndCha_check_chap.do",  
              data: {chapterId:chapterId},  
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
    	   $("#userid_1").val(userid);
    	  $("#coursedId_1").val(coursedId);
    		$("#form_kc").submit();
      }
		function changeChapter(){
               			
			var str =$("#font_size").val();
			if(str.indexOf("m-x-t")!=-1){
			var liststr =str.split("m-x-t"); 
			var counseId= liststr[liststr.length-1];
			
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
                       $("#font_size2").append("<option value='"+value.chapterName+"m-x-t"+value.chapterId+"'>"+value.chapterName+"</option>");   
       			           });
      			  }
				  }
      			}); 
			
			}else{
				 $("#font_size2").empty();
	             $("#font_size2").append("<option value=''>暂无章节</option>");
			}	
		}
		
		//课程
		$(document).ready(function(){
			
			$("#tj").click(function(){
				if($("#attrib_26_0").val()==''){ alert('课程名称不能为空');
				return false;
			}
			else{	var array = new Array(); //定义数组
			var boo =true;
		    $("#font_size option").each(function(){ //遍历全部option
		        var txt = $(this).text(); //获取option的内容
		        if(txt != "请选择课程") //如果不是“全部”
		            array.push(txt); //添加到数组中
		    });
		    for(var i=0;i<array.length;i++){
		    	var str=$("#attrib_26_0").val();
		    	if(array[i]==str){
		    		boo =false;
		    		break;
		    	}
		    }
		    if(!boo){
		    	alert('已有此课程！');
		    }else{
				$("#font_size").append("<option value='"+$("#attrib_26_0").val()+"'>"+$("#attrib_26_0").val()+"</option>") 
				$("#font_size option[value='"+$("#attrib_26_0").val()+"']").attr("selected","selected"); 
				$("#font_size2").empty();
	            $("#font_size2").append("<option value=''>暂无章节</option>");
		    }
			}
		});
		$("#tj2").click(function(){
			if($("#attrib_26_02").val()=='第N章：php'){ alert('请输入章节');
				return false;
			}
			else{				
				var array = new Array(); //定义数组
				var boo =true;
			    $("#font_size2 option").each(function(){ //遍历全部option
			        var txt = $(this).text(); //获取option的内容
			        if(txt != "暂无章节") //如果不是“全部”
			            array.push(txt); //添加到数组中
			    });
			    for(var i=0;i<array.length;i++){
			    	var str=$("#attrib_26_02").val();
			    	if(array[i]==str){
			    		boo =false;
			    		break;
			    	}
			    }
			    if(!boo){
			    	alert('已有此章节！');
			    }else{
				$("#font_size2").append("<option value='"+$("#attrib_26_02").val()+"'>"+$("#attrib_26_02").val()+"</option>") 
				$("#font_size2 option[value='"+$("#attrib_26_02").val()+"']").attr("selected","selected"); 
			}
			}
		})
	   });
		
  		function eidtvideo(obj){
  			types=obj.value.substr(obj.value.lastIndexOf(".")).toLowerCase();//获得文件后缀名
  		var filename =obj.value;
	     var mylist =filename.split("."); 
	     var types=mylist[mylist.length-1];
  		  var fileSize = 0;
  		  var isIE = /msie/i.test(navigator.userAgent) && !window.opera;   
	    //支持类型图片类型
		      if(types!="jpg"&&types!="jpeg"&&types!="png"
		    	 &&types!="bmp"&&types!="gif")
	   		   {
		    		if(isIE) {    // 此处判断是否是IE
		  			    $("#screenshotpath").replaceWith($("#screenshotpath").clone(true));
		  			} else {
		  			    $("#screenshotpath").val("");
		  			}
		  		    $("#MsgList").html("'"+types+"'类型文件不允许上传! 请上传 .jpg|.gif|.jpeg|.bmp|.png|类型的文件");
		  		    return false; 
	   		   }
	  		  if (isIE && !obj.files) {  
		  		     var filePath = obj.value;      
		  		     var fileobject = new ActiveXObject("Scripting.FileSystemObject");  
		  		     var file = fileobject.GetFile(filePath);        
		  		     fileSize = file.Size;    
	  		     
	  		  }else { 
		  		     fileSize = obj.files[0].size;   
	  		  } 
	  	  	//判断照片大小
  		  fileSize=Math.round(fileSize/1024*100)/100; //单位为KB
	  		  if(fileSize>=500){
	  			$("#MsgList").html("请上传小于500KB的文件，当前文件大小为"+fileSize+"KB");
	  			if(isIE) {    // 此处判断是否是IE
	  			    $("#screenshotpath").replaceWith($("#screenshotpath").clone(true));
	  			} else {
	  			    $("#screenshotpath").val("");
	  			}
	  		    return false;
	  		  }
	  		 if(fileSize<5){
	   			$("#MsgList").html("请上传大于2KB的文件，当前文件大小为"+fileSize+"KB");
	   			if(isIE) {    // 此处判断是否是IE
	  			    $("#screenshotpath").replaceWith($("#screenshotpath").clone(true));
	  			} else {
	  			    $("#screenshotpath").val("");
	  			}
	   		    return false;
	   		  }
	  		$("#MsgList").html("文件符合要求！ 文件大小为"+fileSize+"KB");
  		 }
		/* $(window).unload(function(){
		    alert("你确定要离开吗？");
     
		}); */
		function processerbar(time){
			// document.getElementById('probar').innerHTML="";
			 document.getElementById('probar').style.display="block";
			$("#line").each(function(i,item){
				var a=parseInt($(item).attr("w"));
				$(item).animate({
					width: a+"%"
				},time);
			});
		   var si = window.setInterval(
			function(){
				a=$("#line").width();
				b=(a/700*100).toFixed(0);
				document.getElementById('percent').innerHTML=b+"%";
				document.getElementById('percent').style.left=a+12+"px";
				document.getElementById('msg').innerHTML="上传中";
				if(document.getElementById('percent').innerHTML=="100%") {
				clearInterval(si);
				document.getElementById('msg').innerHTML="文件上传成功";
				}
			},70);
		};
		function TestBlack(TagName){
			 var obj = document.getElementById(TagName);
			 if(obj.style.display=="block"){
			  obj.style.display = "none";
			 }else{
			  obj.style.display = "block";
			 }
			}
			//选择二级分类
		function check2(funname,funid){
		
		      $.ajax({  
                        type: "POST",  
                        url: "<%=basePath%>/video/findColumnsById.do",  
                        data: {funid:funid},  
                        dataType: "json",
						processData : true, 
						success:function(data){
						if(data==null||data==""){
		                 $("#ddid").empty();
		                 $("#ddid").append("暂无此子分类！");
                        }else{
                        $("#ddid").empty();
                       	 jQuery.each(data,function(key,value){
                    /*  $("#proBar").css("width",data.rate+""+"%");  
                         <a href="javascript:;" onclick="check2('${fun.funname}','${fun.funid}')" >${fun.funname}</a>
                     */
                      var columnname=value.columnname;
                       $("#ddid").append("<a href='javascript:;' onclick=" +"\"check3('"+ columnname+"','"+value.columnid+"')\">"+value.columnname+"</a>");   
             			  });
             			  }
                       	},	
                }); 
		
		    $("#funid").val(funid);
			$("#sp").text(funname);
			 var obj = document.getElementById("divc");
			 if(obj.style.display=="block"){
			  obj.style.display = "none";
			 }else{
			  obj.style.display = "block";
			 }
			 
			}
			
			
			function check3(columnname,columnid){
		    $("#categorys").val(columnid);
			$("#sp2").text(columnname);
			 var obj = document.getElementById("divc2");
			 if(obj.style.display=="block"){
			  obj.style.display = "none";
			 }else{
			  obj.style.display = "block";
			 }
			 
			}		
	</script>
	<!-- 视频编辑信息验证 -->
	 <script language='javascript'>
	  //按钮事件
	  $(document).ready(function(){
	      $("#edit_but").click(function(){
	          sub_edit();
	      });
	  });
	  //登录处理
	  function sub_edit(){
	      if(Check()){
	    	  $("#form2").submit();
	      }
	  }
	 
	  //初期检查 
	  function Check(){
	  /*  var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/; */
	      if($("#sp").text()=="请选择分类"||$("#sp").text()==""){
	          //alert("用户名不能为空");
	          $("#sp").html("<font color='red'>请选择分类</font>");
	          $("#sp").focus();
	          return false;
	      }
	      if($("#sp2").text()=="请选择子分类"||$("#sp").text()==""){
	          //alert("用户名不能为空");
	          $("#sp2").html("<font color='red'>请选择子分类</font>");
	          $("#sp2").focus();
	          return false;
	      }
	      if($("#title").val().trim()=="")
	      {
	          $("#msg1").html("<font color='red'>请填写视频标题！</font>");
	          $("#title").focus();
	          return false;
	      }
	      if($("#tags").val().trim()=="")
	      {
	          $("#msg3").html("<font color='red'>请填写标签！</font>");
	          $("#tags").focus();
	          return false;
	      }
	      if($("#descript").val().trim()=="")
	      {
	          $("#msg4").html("<font color='red'>请填写视频简介！</font>");
	          $("#descript").focus();
	          return false;
	      }
	      if($("#font_size").val().trim()=="")
	      {
	          $("#msg2").html("<font color='red'>请填写课程！</font>");
	          $("#font_size").focus();
	          return false;
	      }
	      if($("#font_size2").val().trim()=="")
	      {
	          $("#msg6").html("<font color='red'>请填写章节！</font>");
	          $("#font_size2").focus();
	          return false;
	      }
	          $("#msg5").html("保存中...");
	     return true;
	  }
	 </script>
	</head>
	<body onload="processerbar(3000)">
				<form action="<%=basePath%>per_cen/up_kcnl.do" id="form_kc" method="post">
				<input type="hidden" name="userid" id="userid_1" value="" />
				<input type="hidden" name="coursedId" id="coursedId_1" value="" />
				</form>
	
			<div class="mainr fr">
				<div class="min">
						<p>上传视频<span class="fr xg"><a href="">上传管理</a></span></p>
				</div>
					<div class="up_sc">
						<div class="up_sc1 s">
						<div>
								<h3>视频信息</h3>
							</div>
							<div class="space20"></div>
							<div class="items" style="z-index:92">
								<span class="f_14">分类：</span>
								<div onclick="TestBlack('divc');" class="meta-cate upOriginal">
									<span id="sp">请选择分类</span>
									<a></a>
								</div>
								<div id="divc" class="upCate">					
									<ul>
									<c:forEach items='${menus}' var='menu'>
										<h3 class="clear" >${menu.menuname}</h3>
										   <c:forEach items='${funs}' var='fun'> 
										    <c:if test="${fun.menuid==menu.menuid}">
										<li><a href="javascript:;" onclick="check2('${fun.funname}','${fun.funid}')" >${fun.funname}</a></li>
											</c:if>
										 </c:forEach>
										</c:forEach>
									</ul>	
								</div>
								
								<div style="margin:-20px 0 0 100px;">
									<div onClick="TestBlack('divc2');" class="meta-cate upOriginal">
										<span id="sp2">请选择子分类</span>
										<a></a>
									</div>
									<div id="divc2" class="upCate2">
										<dl>
											<dd id="ddid">暂无子分类</dd>
										</dl>
									</div>
								</div>
							</div>
							<div class="space20"></div>
							<div class="cs">
							<form id="form2" method="post" action="<%=basePath%>/per_cen/updateVideoByKcnl.do" enctype="multipart/form-data">
								<div>
								       <!-- 上传者id  -->     
								      <input type="hidden" name="videoid" value="${video.videoid}"/>
								      <input type="hidden" name="userid" value="${userid}"/>
								      <input type="hidden" name="coursedId" value="${coursedId}"/>
								      <input type="hidden" name="categorys"  id="categorys" value="" /> 
									视频标题：<input type="text" name="title" id="title" value="${video.title}"/><font id="msg1" color="red" size="3">&nbsp;*</font>
									<div class="space20"></div>
								</div>
							<div class="space20"></div>
							<div class="cs">
									视频标签：<input class="in_w" type="text" name="tags" id="tags" value="${video.tags}"/><font id="msg3" color="red" size="3">&nbsp;*</font>
									<div class="space20"></div>
							</div>
							<div class="space20"></div>
							<div class="cs">
									视频简介：<textarea name="descript" id="descript" cols="30" rows="10" >${video.descript}</textarea><font id="msg4" color="red" size="3">&nbsp;*</font>
									<div class="space20"></div>
							</div>
							<div class="space20"></div>
							<div class="cs">
									视频封面：<input type="file" name="screenshotpath" id="screenshotpath" onchange="eidtvideo(this)">
									<c:choose>
									<c:when test="${video.vtypes==0}">
									<input type="radio"  value="0" name="video_props"  checked="checked"/>&nbsp;原创视频&nbsp;&nbsp;
									<input type="radio"  value="1" name="video_props" />&nbsp;转载视频&nbsp;&nbsp;&nbsp;
									</c:when>
									<c:otherwise>
									<input type="radio"  value="0" name="video_props" />&nbsp;原创视频&nbsp;&nbsp;
									<input type="radio"  value="1" name="video_props"  checked="checked"/>&nbsp;转载视频&nbsp;&nbsp;&nbsp;
									</c:otherwise>
									</c:choose>
									<font id="MsgList" valign="top" color="#FF9600" size="2"></font>
									<div class="space20"></div>
							</div>
									<div class="cs">
								<div>
									课程选择：
									<select id="font_size" name="coursename"  style="width:246px;height: 31px;cursor: pointer;" onchange="changeChapter()">
									<option value="" selected="selected" >请选择课程</option>
									<c:forEach items="${counses}" var="counse">
									<c:choose>
									<c:when test="${counse.couseTitle==video.coursename}">
									<option value="${counse.couseTitle}m-x-t${counse.coursedId}" selected="selected">${counse.couseTitle}</option>
									</c:when>
									<c:otherwise>
									<option value="${counse.couseTitle}m-x-t${counse.coursedId}" >${counse.couseTitle}</option>
									</c:otherwise>
									</c:choose>
									</c:forEach>
									</select><input type="button" style="cursor: pointer;" value="删 除" onclick="delCounseByid()" /><font id="msg2" color="red" size="3">&nbsp;*</font>
									<div class="space20"></div>
								</div>
								<!--说明：如果原来有课程，会读取原来课程，填加课程会填到列表中，点完成会提交到数据库中，如已有课程，填加同名课程，会提示已有课程-->
								<div class=""style="margin:-48px 0 0 520px;">
									<input type="text" id="attrib_26_0" style="height: 31px;"/>
									<input id="tj" onClick="passw_ens();" style="cursor: pointer;" type="button" value="添加课程" />
									<div class="xgj" style="padding-top:20px;">
										<label><input type="radio" name="jd" value="0" checked="checked" /> 初 级</label>
										<label><input type="radio" name="jd" value="1" /> 中 级</label>
										<label><input type="radio" name="jd" value="2" /> 高 级</label>
									</div>
									<div class="space20"></div>
								</div>
							</div>
							<div class="cs">
								<div>
									课程选择：
									<select id="font_size2" name="chapterName"  style="width:246px;height: 31px;"">
										<option value="${chapter.chapterName}m-x-t${chapter.chapterId}" selected="selected" >${chapter.chapterName}</option>
									</select><input id="del" type="button" style="cursor: pointer;" value="删 除" onclick="delChapterByChaid()"/><font id="msg6" color="red" size="3">&nbsp;*</font>
									<div class="space20"></div>
								</div>
								<!--说明：如果原来有课程，会读取原来课程，填加课程会填到列表中，点完成会提交到数据库中，如已有课程，填加同名课程，会提示已有课程-->
								<div class=""style="margin:-48px 0 0 520px;">
									<input type="text" id="attrib_26_02" onfocus="if(this.value=='第N章：php'){this.value='';}"  onblur="if(this.value==''){this.value='第N章：php';}" value="第N章：php" style="color:#aebbcd;height: 31px;"/>
									<input id="tj2" style="cursor: pointer;" type="button" value="添加章节" />
									<div class="space20"></div>
								</div>
							</div>
							<div class="space20"></div>
							<div class="cs dx">
								<input type="button" id="edit_but" value="完  成" />&nbsp;&nbsp;&nbsp;<font color="red" id="msg5" size="3"></font>
							</div>
							</form>
						</div>
					</div>
			</div>
		</div>
		
	
		</div>
	</body>
</html>