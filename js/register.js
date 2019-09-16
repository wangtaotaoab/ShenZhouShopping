$(function(){
	$("#reg_submit").click(function(){
		var user_name = $("#user_name").val();
		var password = $("#password").val();
		var true_password = $("#true_pasword").val();
		var ophone_number= $("#ophone_number").val();
		var ophone_verify = $("#phone_verify").val();
		var verify = $("#verify").val();
		if(user_name == "" && password =="" && true_password == "" && ophone_number == "" && ophone_verify =="" && verify == ""){
			$(".tip").css("opacity","1");
		}
		if(user_name!=""&&(/^[\w_-]{6,16}$/.test(password))&&true_password == password&&(/^1[3456789]\d{9}$/.test(ophone_number))&&ophone_verify == 12345&&verify == "abcd"){
			location.href = "../index.html"
		}
		
		
	})
	$('#user_name').blur(function(){
		var user_name = $("#user_name").val();
		if(user_name!=""){
			$(".register_form ul li").eq(0).children("i").css("opacity","1");
			$(".register_form ul li").eq(0).children(".tip").css("opacity","0");
		}else{
			$(".register_form ul li").eq(0).children(".tip").css("opacity","1");
			$(".register_form ul li").eq(0).children("i").css("opacity","0");
		}
	})
	$('#password').blur(function(){
		var password = $("#password").val();
		// var pattern = /^[\w_-]{6,16}$/;
		if((/^[\w_-]{6,16}$/.test(password))){
			$(".register_form ul li").eq(1).children("i").css("opacity","1");
			$(".register_form ul li").eq(1).children(".tip").css("opacity","0");
		}else{
			$(".register_form ul li").eq(1).children(".tip").css("opacity","1");
			$(".register_form ul li").eq(1).children("i").css("opacity","0");
			$(".register_form ul li").eq(1).find("span").html("密码输入错误，请重新输入");
		}
	})
	$('#true_pasword').blur(function(){
		var password = $("#password").val();
		var true_password = $("#true_pasword").val();
		if(true_password == password){
			$(".register_form ul li").eq(2).children("i").css("opacity","1");
			$(".register_form ul li").eq(2).children(".tip").css("opacity","0");
		}else{
			$(".register_form ul li").eq(2).children("i").css("opacity","0");
			$(".register_form ul li").eq(2).children(".tip").css("opacity","1");
			$(".register_form ul li").eq(2).find("span").html("两次密码输入不一致");
		}
	})
	$('#ophone_number').blur(function(){
		var ophone_number= $("#ophone_number").val();
		if((/^1[3456789]\d{9}$/.test(ophone_number))){
			$(".register_form ul li").eq(3).children("i").css("opacity","1");
			$(".register_form ul li").eq(3).children(".tip").css("opacity","0");
		}else{
			$(".register_form ul li").eq(3).children("i").css("opacity","0");
			$(".register_form ul li").eq(3).children(".tip").css("opacity","1");
			$(".register_form ul li").eq(3).find("span").html("手机号格式有误");
		}
	})
	$('#phone_verify').blur(function(){
		var ophone_verify = $("#phone_verify").val();
		if(ophone_verify == 12345){
			$(".register_form ul li").eq(4).children("i").css("opacity","1");
			$(".register_form ul li").eq(4).children(".tip").css("opacity","0");
		}else{
			$(".register_form ul li").eq(4).children("i").css("opacity","0");
			$(".register_form ul li").eq(4).children(".tip").css("opacity","1");
			$(".register_form ul li").eq(4).find("span").html("手机验证码有误，请重新输入");
		}
	})
	$('#verify').blur(function(){
		var verify = $("#verify").val();
		if(verify == "abcd"){
			$(".register_form ul li").eq(5).children("i").css("opacity","1");
			$(".register_form ul li").eq(5).children(".tip").css("opacity","0");
		}else{
			$(".register_form ul li").eq(5).children("i").css("opacity","0");
			$(".register_form ul li").eq(5).children(".tip").css("opacity","1");
			$(".register_form ul li").eq(5).find("span").html("验证码有误，请重新输入");
		}
	})
})
