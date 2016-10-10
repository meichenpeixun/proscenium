<div class="theme-popover">
     <div class="theme-poptit">
          <a href="javascript:;" title="关闭" class="close">×</a>
          <h3>登录	/ <a style="color:black;" class="reg" href="javascript:;">没有帐号去注册</a></h3>
     </div>
     <div class="theme-popbod dform">
           <form class="theme-signin" id="formid" name="loginform" action="user/get.do" method="post">
                <ol>
                     <li><h4><font id="msg1" color="red">你必须先登录！</font></h4></li>
                     <li><strong>用户名：</strong><input class="ipt" type="text" id="username" name="username" value="" size="20" /></li>
                     <li><strong>密码：</strong><input class="ipt" type="password" id="pass" name="password" value="" size="20" /></li>
                     <li><input class="btn btn-primary" id="loginButton"  type="button" name="button" value=" 登 录 " /></li>
                </ol>
           </form>
     </div>
</div>
<div class="theme-popover2">
     <div class="theme-poptit2">
          <a href="javascript:;" title="关闭" class="close2">×</a>
          <h3>注册	/ <a style="color:black;" class="theme-login" href="javascript:;">已有账号去登录</a></h3>
     </div>
     <div class="theme-popbod dform">
           <form class="theme-signin" id="registerform" name="registerform" action="user/okRegister.do" method="post">
                <ol>
                     <li><h4  ><font id="msg2" color="red">你必须先注册！</font></h4></li>
                     <li><strong>用户名：</strong><input class="ipt" type="text" id="username2" name="username2" value="" size="20" /></li>
                     <li><strong>密码：</strong><input class="ipt" type="password" id="pwd" name="pwd" value="" size="20" /></li>
                     <li><strong>重复密码：</strong><input class="ipt" type="password" id="pwd2" name="pwd2" value="" size="20" /></li>
                     <li>
						 <strong>验证码：</strong><input class="ipt" id="index_code" style="width: 85px" name="code" type="text" />
						 <!-- <img src="images/verifycode.png" style="vertical-align:middle;"> -->
						  <img id="imgObj" alt="" src="<%=basePath%>code.do" onclick="changeImg()" style="vertical-align:middle;"/>
					 </li>
                     <li><input class="btn btn-primary"  id="registerButton" type="button" name="button" value=" 注 册 " /></li>
                </ol>
           </form>
     </div>
</div>
<div class="searchBar">
</div><!--leftrig-->
<div class="top_bg">
  <div class="top">
    <div class="top_left">
      <ul>
        <li><a href="/member" rel="nofollow">网站地图</a></li>
        <li><a target="_self" href="javascript:void(0)" onclick="window.external.addFavorite(location.href,document.title)" rel="nofollow">收藏</a></li>
      </ul>
    </div>
    <div class="top_right">
      <ul>
     
        <li>咨询电话：<span style="color:red;">400-859-9335</span></li>
		 <c:choose>
		 <c:when test="${!empty user}">
		 <li style="background:url(u/images/head.png) no-repeat 0px 0px;"><a title="个人中心" href="javascript:;" onclick="gerenzhongxin()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${user.username}</a></li>
		 <li><a href="">播放记录</a></li>
		 <li style="background:url(u/images/exit.png) no-repeat 1px -1px;" ><a title="退出" href="<%=basePath%>user/exit.do" onclick="javascript:return confirm('您确定要退出吗？')">&nbsp;&nbsp;&nbsp;</a></li>
		</c:when>
		<c:otherwise>
		<li><a class="theme-login" href="javascript:;">登录${msg}</a></li>
		<li><a class="reg" href="javascript:;">注册</a></li>
		</c:otherwise>
		</c:choose>
		<form  method="post" id="zhongxin" action="user/pcenter.do">
		<input type="hidden" name="userid" value="${user.userid}"/>
		<input type="hidden" name="username" value="${user.username}"/>
		</form>
        <!--<li><a class="up_btn" href="">上传视频</a></li>-->
      </ul>
    </div>
  </div>
</div>
<div class="header_bg">
  <div class="header">
    <div class="logo"><a href="/" title=""></a></div>
    <div class="search">
      <form  method="post" target="_blank" name="formsearch" action="/mxt/search.php">
        <div class="search_box">
          <input type="hidden" name="kwtype" value="0" class="search_bg">
          <input name="q" type="text" id="search-keyword" value="在这里搜索..." onfocus="if(this.value=='在这里搜索...'){this.value='';}"  onblur="if(this.value==''){this.value='在这里搜索...';}" class="search_bg" >
          <button type="submit" class="search_button"> </button>
        </div>
      </form>
    </div>	
	</div>
</div>
