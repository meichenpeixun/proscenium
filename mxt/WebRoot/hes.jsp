<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html><head>
    <meta http-equiv="content-type" content="text/html; charset=gbk">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<meta name="keywords" content="关于我们">
	<meta name="description" content="">
	<meta name="baidu-site-verification" content="e80ad0d476437955cad7b3b823542e89">
	<meta name="chinaz-site-verification" content="59491f9e-c197-4309-b08a-422580ddd758">
	<link rel="stylesheet" type="text/css" href="huaerz/reset.css">
	<link rel="stylesheet" type="text/css" href="huaerz/lampcommon.css">
	<link href="huaerz/bdsstyle.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/zzsc.js"></script>
	<link rel="stylesheet" href="css/dl2.css" type="text/css">
	<script type="text/javascript">
	function op(){
		var se=document.getElementById("pwd")
		var sf=document.getElementById("sf")
		var sf2=document.getElementById("sf2")
		sf2.style.display="block";
		sf.style.display="none";
		se.type="text";
	}function ops(){
		var se=document.getElementById("pwd")
		var sf2=document.getElementById("sf")
		var sf2=document.getElementById("sf2")
		sf.style.display="block";
		sf2.style.display="none";
		se.type="password";
	}
	
	function  user_power(){
  				//判断用户有没有登录
		    		 var bool = ${user.username==null||user.username==""};
				     if(bool)
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
				     }
				     else
				     {
				     
				      window.location="<%=basePath%>/upload.jsp";
				     }
  
  }
  
  jQuery(document).ready(function($) {
	$('.theme-login').click(function(){
		$('.theme-popover-mask').fadeIn(100);
		$('.theme-popover').slideDown(200);
		$('.theme-popover-mask2').fadeOut(100);
		$('.theme-popover2').slideUp(200);
		$("#bg").css("display","block");
	})
	$('.theme-poptit .close').click(function(){
		$('.theme-popover-mask').fadeOut(100);
		$('.theme-popover').slideUp(200);
		$("#bg").css("display","none");
	})

});
jQuery(document).ready(function($) {
	$('.reg').click(function(){
		$('.theme-popover-mask2').fadeIn(100);
		$('.theme-popover2').slideDown(200);
		$('.theme-popover-mask').fadeOut(100);
		$('.theme-popover').slideUp(200);
		$("#bg").css("display","block");
	})
	$('.theme-poptit2 .close2').click(function(){
		$('.theme-popover-mask2').fadeOut(100);
		$('.theme-popover2').slideUp(200);
		$("#bg").css("display","none");
	})

})
	</script>
	<!-- 登录 -->
	<script type="text/javascript">
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
	
function ss1(){
		var password = $("#pwd").val();
		if(password==""){
		$("#msg4").html("密码不能为空");
		$("#msg4").show();
		return;
		}
		if(password.length<6){
				$("#msg4").html("密码为6-16位");
				$("#msg4").show();
				return;
		}
		if(password.length>16){
			$("#msg4").html("密码为6-16位");
			$("#msg4").show();
				return;
		}
		else{
			$("#msg4").hide();
		}
	}
	
function SetRemainTime() {
		if (curCount == 0) {                
			window.clearInterval(InterValObj);// 停止计时器
			$("#sends").removeAttr("disabled");// 启用按钮
			$("#sends").css("background-color","rgb(240,240,240)");
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
		if(phone==""){
		$("#msg2").html("手机号不能为空");
		$("#msg2").show();
		return;
		}
		if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
			$("#msg2").html("手机号输入不正确");
			$("#msg2").show();
				return;
		}
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
	
  $(document).ready(function(){
      $("#loginButton").click(function(){
     	$("#msg1").hide();
      	$("#msg3").hide();
          Login();
      });
  });
  //登录处理
  function Login(){
      if(Check()){
         LoginSuccess();
         //alert('成功');
      }
  }
  
  //登录成功处理
  function LoginSuccess(){
        $.ajax({
            type:"POST",
            url:"<%=basePath%>/user/userLoginCheck.do",
            data:{username:$("#username").val(),password:$("#pass").val()},
           /*  beforeSend:function(){$("#msg1").html("loading...");},    */         
            success:function(data){
            //判断输入是否成功，成功则跳转
            if(""==data) {
            $("#formid").submit();
            } 
            if(data=="用户或手机号不存在"){
             $("#msg1").html(decodeURI(data));  
             $("#msg1").show();          
            }
           	if(data=="密码错误"){
           	$("#msg3").html(decodeURI(data));  
             $("#msg3").show();
          	}
            }           
         });
     }
  
  //初期检查 
  function Check(){
   	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      if($("#username").val()==""){
          //alert("用户名不能为空");
          $("#msg1").html("用户名或手机号不能为空");
          $("#msg1").show();
          $("#username").focus();
          return false;
      }
      if($("#pass").val()=="")
      {
          //alert("密码不能为空");
          $("#msg3").html("密码不能为空");
          $("#msg3").show();
          $("#pass").focus();
          return false;
      }
     return true;
  }
	</script>
	<!-- 注册 -->
	<script type="text/javascript">
	 $(document).ready(function(){
      $("#registerButton").click(function(){
      	$("#msg2").hide();
      	$("#msg4").hide();
      	$("#msg5").hide();
          Register();
      });
  });
  //注册处理
  function Register(){
      if(Check2()){
         RegisterSuccess();
      }
  }
  //注册成功处理
  function RegisterSuccess(){
  		var yzcode = $("#index_code").val();
  		var phone = $("#phone").val();
        $.ajax({
            type:"POST",
            url:"<%=basePath%>/user/userRegister.do",
            data:{phone:$("#phone").val(),pwd:$("#pwd").val(),yzcode:yzcode},
            /* beforeSend:function(){$("#msg2").html("loading...");},      */       
            success:function(data){
            //判断输入是否成功，成功则跳转
            if("" == data) {
            $("#registerform").submit();
           /*  $("#msg2").html("注册成功！"); */
            } 
            if(decodeURI(data)=="该手机号已经被注册！"){
             $("#msg2").html(decodeURI(data)); 
             $("#msg2").show();         
            }
            if(decodeURI(data)=="验证码错误！"){
            $("#msg5").html(decodeURI(data)); 
             $("#msg5").show(); 
            }
            }           
         });
     }
  
  //注册初期检查 
  function Check2(){
  var yzcode = $("#index_code").val();
  var phone = $("#phone").val();
   var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      if($("#phone").val()==""){
          //alert("用户名不能为空");
          $("#msg2").html("手机号不能为空");
          $("#msg2").show();
          $("#phone").focus();
          return false;
      }
      if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
				$("#msg2").html("手机号码不正确");
				 $("#msg2").show();
				return;
	  }
      if($("#pwd").val()=="")
      {
          //alert("密码不能为空");
          $("#msg4").html("密码不能为空");
          $("#msg4").show();
          $("#pwd").focus();
          return false;
      }
      if($("#pwd").val().length<6){
			$("#msg4").html("密码为6-16位");
			$("#msg4").show();
				return;
		}
	  if($("#pwd").val().length>16){
			$("#msg4").html("密码为6-16位");
			$("#msg4").show();
				return;
		}
		
	if(yzcode==""){
		$("#msg5").html("验证码不能为空");
		$("#msg5").show();
			return;
		}
		if(yzcode.length<6){
			$("#msg5").html("验证码格式不正确");
			$("#msg5").show();
			return;
		}
			
	if($("#sends").val()=="重新发送验证码"){
		$("#msg5").html("验证码过期，请重新发送");
		$("#msg5").show();
		return;
	}	
	
     return true;
  }
	</script>
</head>
<body>
<div id="bg"></div>
<div class="theme-popover">
     <div class="theme-poptit">
          <a href="javascript:;" title="关闭" class="close">×</a>
          <h3 style="font: 12px/1 瀹嬩綋,Microsoft Yahei,arial,simhei;">登录	/ <a style="color:black;" class="reg" href="javascript:;">没有帐号去注册</a></h3>
     </div>
     <div class="theme-popbod dform">
           <form class="theme-signin" name="loginform" id="formid" action="user/get.do" method="post">
                <ol>
                     <li>
						<input class="ipt"  style="width: 300px;" name="username" type="text" maxlength="37" id="username" placeholder="请输入登录用户名/手机号" name="log" value="" size="20" />
						<p style="color:red;display: none" id="msg1"  class="psj">请输入正确的邮箱或手机号</p>
					 </li>
                     <li>
						<input class="ipt" style="width: 300px;" id="pass" maxlength="16" name="password"  type="password" placeholder="6-16位密码，区分大小写，不能用空格" value="" size="20" />
						<p style="color:red;display: none" id="msg3" class="psj2">密码错误请重新输入</p>
					 </li>
					 <li>
						<label style="color: #787d82;"><input checked="checked" type="checkbox" class="fe"/>下次自动登录</label>
						<a href="fog/index.jsp" class="fog" target="_blank">忘记密码 </a>
					 </li>
                     <li><input id="loginButton" class="btn btn-primary" type="button" name="button" value=" 登 录 " /></li>
					 <li>
						<p>
							<span class="" style="color:#666">其他方式登录</span>
							<div class="dsl">
								<a class="j-wx" target="_self"></a>
								<a class="j-wb" target="_self"></a>
								<a class="j-qq" target="_self"></a>
							</div>
						</p>
					 </li>
                </ol>
           </form>
     </div>
</div>
<div class="theme-popover2">
     <div class="theme-poptit2">
          <a href="javascript:;" title="关闭" class="close2">×</a>
          <h3 style="font: 12px/1 瀹嬩綋,Microsoft Yahei,arial,simhei;">注册	/ <a style="color:black;" class="theme-login" href="javascript:;">已有账号去登录</a></h3>
     </div>
     <div class="theme-popbod dform">
           <form class="theme-signin" id="registerform" name="registerform" action="user/okRegister.do"  method="post">
                <ol>
                     <li>
						<input class="ipt" style="width: 300px;" type="text" onblur="ss()" id="phone" maxlength="37" placeholder="请输入注册手机号" name="phone" value="" size="20" />
						<p style="color:red;display: none" class="psj3" id="msg2">请输入正确的邮箱或手机号</p>
					 </li>
                     <li>
						<input class="ipt" style="width: 300px;" onblur="ss1()" id="pwd" type="password" maxlength="16" placeholder="6-16位密码，区分大小写" name="pwd" value="" size="20" />
						<a id="sf" style="color: #787d82;float:right;margin-top:5px;" href="javascript:op();">显示密码</a>
						<a id="sf2" href="javascript:ops();"  style="color: #787d82;float:right;margin-top:5px;display:none;">隐藏密码</a>
						<div style="clear:both;"></div>
						<p style="color:red;margin-top: -25px;display: none" class="psj3" id="msg4">请重新输入</p>
					</li>
                     <li>
						<input class="ipt" placeholder="手机动态码" id="index_code" type="" style="width: 130px;" size="7" />
						 <input class="ipt" style="margin-left:13px;width: 131px;height: 39px;border: 0;font-size:12px;background:rgb(240,240,240);" id="sends" onclick="send()" value="获取验证码" type="button">
						 <p style="color:red;margin-top: 0px;display: none" class="psj3" id="msg5">请重新输入</p>
					 </li>
                     <li><input class="btn btn-primary" id="registerButton" type="button" name="button" value=" 注 册 " /></li>
                </ol>
           </form>
     </div>
</div>
<link rel="stylesheet" href="huaerz/list_xueyuangaikuang.css">
<link rel="stylesheet" href="huaerz/lianxiwomen.css">
<dl class="switchBox" id="switchBox3">
		<dt class="php_huanjing_left">
			<ul class="content">
                <li><a href="http://www.meixt.cn/"> 返回首页</a></li>
                <li><a href="javascript:user_power()"> 上传课程</a></li>
             </ul>
		</dt>
		
		<dd class="php_huanjing_right phpmain_lmin" id="lianxiwomen">
				<img src="http://www.wallslab.net/images/banner5.jpg" style="margin-left:13px;" height="300px" width="782px">
										<h3>机构简介</h3>
<p><b style="text-indent: 2em; font-size: 16px; font-weight: 700">我们是谁？</b></p>
<p style="text-indent: 2em; font-size: 14px">一、华尔思网络实验室成立于2004年，思科官方授权的CLP培训机构，专注思科华为网络技术以及红帽甲骨文高端培训，CCNA认证培训_CCNP认证培训_CCIE认证培训_HCIE认证培训_RHCA认证培训_OCM认证培训，拥有多名资深CCIE和CCSI（思科认证系统讲师）、华为讲师、红帽讲师、Oracle讲师，经过多年的努力发展，目前华尔思培训在业内具有良好的信誉和口碑。</p>

<a href="javascript:;"><img alt="" src="http://www.wallslab.net/images/ad1.jpg" style="width: 800px; height: 90px"></a><br>
<br><p style="text-indent: 2em; font-size: 14px">自2004年起，华尔思已经培训了超过1500名CCNA学员、超过1000名CCNP学员和上百名CCIE学员，这些学员来自社会各行各业；自2011年起，华尔思已经陆续开设了思科、华为、红帽、甲骨文14方向：CCIE RS、CCIE DC、思科云（CCIE Cloud）、CCIE ISP、CCIE SEC、CCIE无线、CCIE协作、HCIE RS（数通）、HCIE SEC、HCIE存储、HCIE DC、红帽RHCA、Oracle OCM、Juniper JNCIE-SP等直通车的培训；目前，华尔思拥有5名CCIE级别和具有CCSI的业内资深讲师以及其他方向共10多名资深讲师，所有的课程授课均受到学员的高度认同；华尔思的讲师具有丰富的企业定制课程的设计和授课经历；目前，华尔思在北京拥有交通便利、环境舒适的教学基地以及上海直营分校以及大连培训中心，北京海淀区知春路教学区、上海华尔思网络实验室，所有方向现场授课的同时远程开放同步实时授课，既可以现场授课又可以远程听课。</p>
</body></html>