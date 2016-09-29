<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<link type="text/css" href="css/css.css" rel="stylesheet" />
<script type="text/javascript" src="js/jquery-1.8.3-min.js"></script>
<script type="text/javascript">
 //导航定位
 $(function(){
	// $(".nav li:eq(2) a:first").addClass("navCur")
	 //验证手机 邮箱 
	 	$(".selyz").change(function(){
	   var selval=$(this).find("option:selected").val();
		 if(selval=="0"){
			 $(".sel-yzsj").show()
			 $(".sel-yzyx").hide()
			 }
		 else if(selval=="1"){
			 $(".sel-yzsj").hide()
			 $(".sel-yzyx").show()
			 }
		 })
		 
		 var phone = '<%=request.getParameter("phone")%>';
		 $("#phone").val(phone);
	 })
	 
	 function SetRemainTime() {
		if (curCount == 0) {                
			window.clearInterval(InterValObj);// 停止计时器
			$("#sends").removeAttr("disabled");// 启用按钮
			$("#sends").css("background-color","rgb(241,241,241)");
			$("#sends").val("重新发送验证码");
		}else {
			curCount--;
			$("#sends").val("剩余" + curCount + "秒");
		}
	}	
	
	var InterValObj; //timer变量，控制时间
	var count = 120; //间隔函数，1秒执行
	var curCount;//当前剩余秒数
	
	function send(){
		var phone = $("#phone").val();
		curCount = count;
		$("#sends").attr("disabled","true");
		$("#sends").css("background-color","gray");
		$("#sends").val("剩余" + curCount + "秒");
		InterValObj = window.setInterval(SetRemainTime, 1000); // 启动计时器，1秒执行一次
		$.ajax({
			type:"POST",
			url:"<%=basePath%>note/getCode.do?phone="+phone,
			success:function(data){
			}
		})
	}
	
	function tijiao(){
		if($("#sends").val()=="重新发送验证码"){
		$("#msg3").html("验证码过期，请重新发送");
		$("#msg3").show();
		return; 
		}	
		var yzcode = $("#index_code").val();
		if(yzcode==""){
			$("#msg3").html("验证码不能为空"); 
             $("#msg3").show(); 
             return; 
		}
  		var phone = $("#phone").val();
        $.ajax({
            type:"POST",
            url:"<%=basePath%>/user/verifyPhone.do",
            data:{phone:phone,pwd:$("#pwd").val(),yzcode:yzcode},
            /* beforeSend:function(){$("#msg2").html("loading...");},      */       
            success:function(data){
            //判断输入是否成功，成功则跳转
            if("" == data) {
            	window.location="index3.jsp?phone="+phone;
            } 
            if(decodeURI(data)=="验证码不正确"){
             $("#msg3").html(decodeURI(data)); 
             $("#msg3").show();         
            }
            }           
         });
	}
	
	function hides(){
		$("#msg3").hide(); 
	}
	
	function logins(){
		window.location="<%=basePath%>";
	}
</script>
</head>

<body>
  <div class="content">
  <div class="nav">
    <div class="nav_nr">
        <dl class="nav1">
            <dt><a href="javascript:;" target="_blank"><img style="width: 95%;" src="http://isupertest.com/list/images/logo3.png" alt=""></a></dt>
            <dd>账号通行证</dd>
            <input id="phone" name="phone" value="" style="display: none"/>
        </dl>
        <dl class="nav2">
            <dt><a href="javascript:logins();">登录</a></dt>
            <dd><a href="javascript:;" target="_blank">帮助</a></dd>
        </dl>
    </div>
   <div class="web-width">
     <div class="for-liucheng">
      <div class="liulist for-cur"></div>
      <div class="liulist for-cur"></div>
      <div class="liulist"></div>
      <div class="liulist"></div>
      <div class="liutextbox">
      <div class="liutext for-cur"><em>1</em><br /><strong>输入手机号</strong></div>
       <div class="liutext for-cur"><em>2</em><br /><strong>手机验证</strong></div>
       <div class="liutext"><em>3</em><br /><strong>重置密码</strong></div>
       <div class="liutext"><em>4</em><br /><strong>完成</strong></div>
      </div>
     </div><!--for-liucheng/-->
     <form class="forget-pwd">
       <dl>
        <dt></dt>
        <dd>
	        <input maxlength="6" style="width:180px;border-right:0px;" type="text"  id="index_code" placeholder="手机动态码"/>
	        <!-- <input style="float:left;margin-top:-42px;height:42px;margin-left:187px;" id="sends" onclick="send()" value="获取验证码" type="button"/> -->
	        <!-- <button style="float:left;margin-top:-42px;height:42px;margin-left:187px;" id="sends" onclick="send()">获取验证码</button> -->
	       <input onfocus="hides()" style="float:left;width:120px;font-size:14px;background-color:rgb(241,241,241);margin-top:-42px;height:42px;margin-left:187px;"value="获取验证码" id="sends" onclick="send()" type="button"/>
	       <p style="color:red;display: none;" class="psj3" id="msg3">请输入正确的手机号</p>
        </dd>
		<!-- <input type="button" style="margin-top:-42px;background-color:red;height:42px;margin-left:187px;"> -->
        <div class="clears"></div>
       </dl>
       <div class="subtijiao"><input type="button" onclick="tijiao()" value="提交" /></div> 
	<!--    <div style="width:100%;color:#999;text-align:center;margin-bottom:20px;">
	   		如果在2分钟后仍未收到短信？可重新发送一遍。
	   	 </div> -->
      </form><!--forget-pwd/-->
   </div><!--web-width/-->
  </div><!--content/-->
  
</body>
</html>
