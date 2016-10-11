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
    
    <title>个人中心</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="" />
<meta name="keywords" content="" />
<link href="u/css/st.css" type="text/css" rel="stylesheet">
<script type="text/javascript" src="js/jquery.min.js"></script>
</head>
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
<body>
<div class="header">
			<div class="h-wb">
				<div class="fl">
					<img class="f-fl img" src="u/images/logo3.png" title="美享厅" height="47" width="174">
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
							<li class="qmr">这位童鞋不懒，就是什么也没有留下～～！</li>
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
				<div class="min">
					<p>欢迎回来：${user.username }<span class="fr xg"><a href="<%=basePath%>per_cen/per_zlws.do">修改资料</a></span></p>
				</div>
				<div class="m_a">
				<!--<//%=basePath%>per_cen/up_zsplb.do?serid=${user.userid}&audit=10"  -->
					<ul style="padding-left:5px;">
						<li>已上传视频：<a href="javascript:;">${count_videos[0]}</a></li>
						<li>已通过视频：<a href="javascript:;">${count_videos[1]}</a></li>
						<li>未通过视频：<a href="javascript:;">${count_videos[2]}</a></li>
						<li>正在审核：<a href="javascript:;">${count_videos[3]}</a></li>
						<li>资料未完善：<a href="javascript:;">${count_videos[4]}</a></li>
						<li>帐户余额：<a href="javascript:;">${co.balance}元</a></li>
						<li>美豆：<a href="javascript:;">${co.mbalance}个</a></li>
						<li>优惠券：<a href="javascript:;">${co.coupon100+co.coupon50+co.coupon20+co.coupon10+co.coupon5}张</a></li>
					</ul>
				</div>
				<div class="ma_l clear">
				    <c:choose>
				    <c:when test="${user.fullname==null}">
				    <p>真实姓名：未填写<span style="margin-left:100px;">性别：未填写</span></p>
				    </c:when>
				    <c:otherwise>
				    <p>真实姓名：${user.fullname}<span style="margin-left:100px;">性别：${user.usersex}</span></p>
				    </c:otherwise>
				    </c:choose>
					<c:choose>
				    <c:when test="${user.phone==null}">
				    <p>手机号：未填写</p>
				    </c:when>
				    <c:otherwise>
				    <p>手机号：${user.phone}</p>
				    </c:otherwise>
				    </c:choose>
				    <c:choose>
				    <c:when test="${user.email==null}">
				    <p>邮箱地址：未填写</p>
				    </c:when>
				    <c:otherwise>
				    <p>邮箱地址：${user.email}</p>
				    </c:otherwise>
				    </c:choose>
					<p>微信帐号：暂无</p>
					<p>绑定银行卡帐号：暂无</p>
					<p>绑定支付宝帐号：暂无</p>
				</div>
				<div class="ma_r">
					<c:choose>
				    <c:when test="${user.photoname==null}">
				    <img style="border:1px solid #eeeeee;width:140px;height:200px;" src="u/images/tx.jpg">
					<p align="center" style="margin:10px;">暂无个人真实照片</p>
				    </c:when>
				    <c:otherwise>
				    <img style="border:1px solid #eeeeee;width:140px;height:200px;" src="u/images/tx.jpg">
					<p align="center" style="margin:10px;">个人真实照片</p>
				    </c:otherwise>
				    </c:choose>
					
				</div>
			</div>
		</div>
		<!--网站底部-->
		<div class="footer clear">
			<div class="warp">
				<div class="w_l">
					<ul>
						<li><a href="<%=basePath%>">首页</a></li>
						<li><a href="javascript:;">人才招聘</a></li>
						<li><a href="<%=basePath%>AboutWe/contact.do">联系我们</a></li>
						<li><a href="javascript:;">合作专区</a></li>
						<li><a href="<%=basePath%>AboutWe/about.do">关于我们</a></li>
						<li><a href="javascript:;">讲师招募</a></li>
						<li><a href="javascript:;">意见反馈</a></li>
						<li><a href="javascript:;">友情链接</a></li>
					</ul>
				</div>
				<div class="fr">
					<p>Copyright &copy; 2016 isupertest.com All Rights Reserved | 京ICP备16037877号</p>
				</div>
			</div>
		</div>
		</div>
	</body>
</body>
</html>