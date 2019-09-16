$(function(){
	$("#login_btn").click(function(){
		$(".form_warning").css("opacity","1");
		var username = $("#username").val();
		var passwrold = $("#password").val();
		if( username == "" && passwrold==""){
			$(".form_warning span").html("请输入用户名");
		}else if( username != "" && passwrold==""){
			$(".form_warning span").html("请输入密码");
		}else if( username =="wangtao" && passwrold == "123456"){
			location.href= "../index.html";
		}else{
			$(".form_warning span").html("用户名或密码错误");
		}
		console.log(username);
		console.log(passwrold);
	})
})