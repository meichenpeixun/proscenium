<%@page import="com.mxt.entity.Video"%>
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
    
    <title>My JSP 'upload.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link href="css/style.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" type="text/css" href="css/atip.css" />
	<link href="css/default.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="css/zzsc.css" type="text/css">
	<link rel="stylesheet" href="css/dl.css" type="text/css">
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/zzsc.js"></script>
	<script src="js/slider.js"></script>
	<script type="text/javascript">
		$(function() {
		    var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
		    var len = $("#focus ul li").length; //获取焦点图个数
		    var index = 0;
		    var picTimer;
		    
		    //以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
		    var btn = "<div class='btnBg'></div><div class='btn'>";
		    for(var i=0; i < len; i++) {
		        btn += "<span></span>";
		    }
		    btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
		    $("#focus").append(btn);
		    $("#focus .btnBg").css("opacity",0.5);
		
		    //为小按钮添加鼠标滑入事件，以显示相应的内容
		    $("#focus .btn span").css("opacity",0.4).mouseenter(function() {
		        index = $("#focus .btn span").index(this);
		        showPics(index);
		    }).eq(0).trigger("mouseenter");
		
		    //上一页、下一页按钮透明度处理
		    $("#focus .preNext").css("opacity",0.2).hover(function() {
		        $(this).stop(true,false).animate({"opacity":"0.5"},300);
		    },function() {
		        $(this).stop(true,false).animate({"opacity":"0.2"},300);
		    });
		
		    //上一页按钮
		    $("#focus .pre").click(function() {
		        index -= 1;
		        if(index == -1) {index = len - 1;}
		        showPics(index);
		    });
		
		    //下一页按钮
		    $("#focus .next").click(function() {
		        index += 1;
		        if(index == len) {index = 0;}
		        showPics(index);
		    });
		
		    //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
		    $("#focus ul").css("width",sWidth * (len));
		    
		    //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
		    $("#focus").hover(function() {
		        clearInterval(picTimer);
		    },function() {
		        picTimer = setInterval(function() {
		            showPics(index);
		            index++;
		            if(index == len) {index = 0;}
		        },4000); //此4000代表自动播放的间隔，单位：毫秒
		    }).trigger("mouseleave");
		    
		    //显示图片函数，根据接收的index值显示相应的内容
		    function showPics(index) { //普通切换
		        var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		        $("#focus ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
		        //$("#focus .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
		        $("#focus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
		    }
		});

</script>
<script type="text/javascript">
function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
  		return "Chrome";
 	}
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}
	var start;
	$(document).ready(function() {
		var mb = myBrowser();
			if ("FF" == mb) {
			    alert("我是 Firefox");
			}else{
					  var myDate=new Date();
					start = myDate.getTime();
					
					   
					   $(window).unload(function(){
							    var endDate=new Date();
							    end = endDate.getTime();
					      $.ajax({
					            type:"POST",
					            url:"<%=basePath%>/video/playtime.do",
					            data:{timeSpent:end-start},
					            async: true
					         });
					});
			}
			
	  });

</script>

  </head>
  
  <body>

 <% 
 Video video =new Video();
 video=(Video)request.getAttribute("video");
 if(null!=video&&video.getTitle()!=null){
 %>
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="500" height="400">
<param name="movie" value="<%=basePath%>tools/Flvplayer.swf" />
<param name="quality" value="high" />
<param name="allowFullScreen" value="true" />
<embed src="<%=basePath%>tools/Flvplayer.swf" allowfullscreen="true" flashvars="vcastr_file=<%=basePath%><%=video.getTitle()%>&IsAutoPlay=0" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="500" height="400"></embed>
</object>

<%} %>
 <div id="focus">

   <a href="video/play.do?id=4"><%=basePath%><img src="<%=basePath%>videos/images/1468373169374.jpg"></a>
   <a href="video/queryAll.do">查询所有</a>
  </div>
  </body>
</html>

