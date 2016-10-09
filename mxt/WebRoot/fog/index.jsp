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
<style type="text/css">
.btn-primary {
    border-color: #3079ED;
    color: #F3F7FC;
    background-color: #4D90FE;
    background: -webkit-linear-gradient(top, #4D90FE, #4787ED);
    background: -moz-linear-gradient(top, #4D90FE, #4787ED);
    background: linear-gradient(top, #4D90FE, #4787ED);
}
	.btn-primary:hover {
    border-color: #2F5BB7;
    color: #fff;
    background-color: #4D90FE;
    background: -webkit-linear-gradient(top, #4D90FE, #357AE8);
    background: -moz-linear-gradient(top, #4D90FE, #357AE8);
    background: linear-gradient(top, #4D90FE, #357AE8);
}
.btn:hover {
    border-color: #c6c6c6;
    color: white;
    border-color: #3079ED;height: 50px;
	font-size: 16px;
	cursor: pointer;
	background-color: #4D90FE;
	background: -webkit-linear-gradient(top, #4D90FE, #4787ED);
	background: -moz-linear-gradient(top, #4D90FE, #4787ED);
	background: linear-gradient(top, #4D90FE, #4787ED);
    box-shadow: #ddd 0 1px 1px 0;
}
</style>
<script type="text/javascript">
function changeImg() {
    var imgSrc = $("#imgObj");
    var src = imgSrc.attr("src");
    imgSrc.attr("src", chgUrl(src));
  }
  //时间戳   
  //为了使每次生成图片不一致，即不让浏览器读缓存，所以需要加上时间戳   
  function chgUrl(url) {
    var timestamp = (new Date()).valueOf();
    url = url.substring(0, 37);
    if ((url.indexOf("&") >= 0)) {
      url = url + "×tamp=" + timestamp;
    } else {
      url = url + "?timestamp=" + timestamp;
    }
    return url;
  }
  
  function ss(){
		var phone = $("#phone").val();
		if(phone==""){
			$("#msg2").html("手机号不能为空");
			$("#msg2").show();
		/* $("#auto-id-1474190060396").html("<img src='images/false.png' style='margin-right: 10px; vertical-align: middle;' />手机号不能为空"); */
		return;
		}
		if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
		$("#msg2").html("手机号码不正确");
		$("#msg2").show();
		}		
		else{
		$("#msg2").hide();
		}
	}
	
	function zhaohui(){
		var phone = $("#phone").val();
		var yzcode = $("#yzcode").val();
		if(phone==""){
			$("#msg2").html("手机号不能为空");
			$("#msg2").show();
		return;
		}
		
		if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
		$("#msg2").html("手机号码不正确");
		$("#msg2").show();
		}
		
		if(yzcode==""){
			$("#msg3").html("验证码 不能为空");
			$("#msg3").show();
		return;
		}
		
        $.ajax({
            type:"POST",
            url:"<%=basePath%>/user/verify.do",
            data:{phone:$("#phone").val(),yzcode:yzcode},
            success:function(data){
            //判断输入是否成功，成功则跳转
            if("" == data) {
           		window.location="index2.jsp?phone="+phone;
            } 
            if(decodeURI(data)=="该手机号未被注册"){
             $("#msg2").html(decodeURI(data)); 
             $("#msg2").show();         
            }
            if(decodeURI(data)=="验证码不正确"){
            $("#msg3").html(decodeURI(data)); 
             $("#msg3").show(); 
            }
            }           
         });
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
            <dt>
				<a href="javascript:;" target="_blank">
					<img style="width: 95%;" src="http://isupertest.com/list/images/logo3.png" alt="">
				</a>
			</dt>
            <dd>账号通行证</dd>
        </dl>
        <dl class="nav2">
            <dt><a href="javascript:logins();">登录</a></dt>
            <dd><a href="javascript:;" target="_blank">帮助</a></dd>
        </dl>
    </div>
   <div class="web-width">
     <div class="for-liucheng">
      <div class="liulist for-cur"></div>
      <div class="liulist"></div>
      <div class="liulist"></div>
      <div class="liulist"></div>
      <div class="liutextbox">
       <div class="liutext for-cur"><em>1</em><br /><strong>输入手机号</strong></div>
       <div class="liutext"><em>2</em><br /><strong>手机验证</strong></div>
       <div class="liutext"><em>3</em><br /><strong>重置密码</strong></div>
       <div class="liutext"><em>4</em><br /><strong>完成</strong></div>
      </div>
     </div><!--for-liucheng/-->
     <form action="forgetPwd2.html" method="get" class="forget-pwd">
       <dl>
        <dt></dt>
        <dd><input type="text" maxlength="11"  onblur="ss()" id="phone" name="phone" placeholder="请输入注册时的手机号码"/><p style="color:red;display: none;" class="psj3" id="msg2">请输入正确的手机号</p></dd>
        <div class="clears"></div>
       </dl>
       <dl>
        <dt></dt>
        <dd>
         <input style="width:170px;" type="text" id="yzcode" placeholder="验证码"/> 
         <div class="yanzma">
          <img class="imgs" id="imgObj" alt="" src="<%=basePath%>code.do" onclick="changeImg()"/>
         </div>
         <p style="color:red;display: none;" class="psj3" id="msg3">请输入正确的手机号</p>
        </dd>
        <div class="clears"></div>
       </dl>
       <div class="subtijiao"><!-- <input type="submit" value="找回密码" /> -->
		<input class="btn btn-primary" name="submit" value="找回密码" type="button" onclick="zhaohui()"/>
	   </div> 
      </form><!--forget-pwd/-->
   </div><!--web-width/-->
  </div><!--content/-->
</body>
</html>
