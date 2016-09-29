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
$(function(){
var phone = '<%=request.getParameter("phone")%>';
		 $("#phone").val(phone);
})

function queren(){
	alert();
	var pwd = $("#pwd").val();
	var pwd1 = $("#pwd1").val();
	var phone = $("#phone").val();
	if(pwd!=pwd1){
		$("#msg3").html("两次输入的密码不一致");
		$("#msg3").show();
		return;
	}
	 if($("#pwd").val()=="")
      {
          //alert("密码不能为空");
          $("#msg3").html("密码不能为空");
          $("#msg3").show();
          $("#pwd").focus();
          return false;
      }
      if($("#pwd").val().length<6){
			$("#msg3").html("密码为6-16位");
			$("#msg3").show();
				return;
		}
	  if($("#pwd").val().length>16){
			$("#msg3").html("密码为6-16位");
			$("#msg3").show();
				return;
		}
     $.ajax({
            type:"POST",
            url:"<%=basePath%>/user/updatePassword.do",
            data:{phone:phone,pwd:$("#pwd").val()},
            success:function(data){
            //判断输入是否成功，成功则跳转
            	window.location="forgetPwd4.html";
           /*  if(decodeURI(data)=="验证码不正确"){
             $("#msg3").html(decodeURI(data)); 
             $("#msg3").show();         
            } */
            }           
         });
}

	function logins(){
		window.location="<%=basePath%>";
	}
</script>
</head>

<body>
  <div class="nav">
    <div class="nav_nr">
        <dl class="nav1">
        <input id="phone" name="phone" value="" style="display: none"/>
            <dt><a href="javascript:;" target="_blank"><img style="width: 95%;" src="http://isupertest.com/list/images/logo3.png" alt=""></a></dt>
            <dd>账号通行证</dd>
        </dl>
        <dl class="nav2">
            <dt><a href="javascript:logins();">登录</a></dt>
            <dd><a href="javascript:;" target="_blank">帮助</a></dd>
        </dl>
    </div>
  <div class="content">
   <div class="web-width">
     <div class="for-liucheng">
      <div class="liulist for-cur"></div>
      <div class="liulist for-cur"></div>
      <div class="liulist for-cur"></div>
      <div class="liulist"></div>
      <div class="liutextbox">
       <div class="liutext for-cur"><em>1</em><br /><strong>填写账户名</strong></div>
       <div class="liutext for-cur"><em>2</em><br /><strong>验证身份</strong></div>
       <div class="liutext for-cur"><em>3</em><br /><strong>设置新密码</strong></div>
       <div class="liutext"><em>4</em><br /><strong>完成</strong></div>
      </div>
     </div><!--for-liucheng/-->
     <form class="forget-pwd">
       <dl>
	   <dt></dt>
        <dd><input type="password" placeholder="新密码" id="pwd"/><p style="color:red;display: none;" class="psj3" id="msg3">请输入正确的手机号</p></dd>
        <div class="clears"></div>
       </dl> 
       <dl>
        <dt></dt>
        <dd><input type="password" placeholder="再次输入密码" id="pwd1"/></dd>
        <div class="clears"></div>
       </dl> 
       <div class="subtijiao"><input type="button" onclick="queren()" value=" 确 认 " /></div> 
      </form><!--forget-pwd/-->
   </div><!--web-width/-->
  </div><!--content/-->
  
</body>

</html>