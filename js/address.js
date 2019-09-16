$(function(){
//	点击新增收货地址时,弹出框填写信息
	$("#add_address").click(function(){
		$(".new_address").show();
	})
	$(".new_address .address_form_tit>span:nth-child(2)").click(function(){
		$(".new_address").hide();
	})
	
	
//	点击保存收货人信息时
	$(".address_submit .address_submit_main a:nth-child(1)").click(function(){
		var username = $("#name").val();
		var mobile = $("#mobile").val();
		var ophone = $("#ophone").val();
		var detailed = $("#detailed").val();
		var email = $("#email").val();
		var postcode = $("#postcode").val();
		var locationa = $("#locationa").val();
		var best_time = $("#best_time").val();
		if(username == ''){
			$("#name").css("border","1px solid #F42424");
			$("#name").siblings("span").show();
		}
		
		if(mobile==""){
			$("#mobile").css("border","1px solid #F42424");
			$("#mobile").siblings("span").show();
		}
		if (detailed == "") {
			$("#detailed").css("border","1px solid #F42424");
			$("#detailed").siblings("span").show();
		}
		
		if (username.length>=2&&(/^1[3456789]\d{9}$/.test(mobile))&&detailed.length>4) {
			// $("#add_address").before($(".address_celect")[0].cloneNode(true));
			$(".address_celect:nth-child(1)").show();
			$("#add_address").before($(".address_celect:nth-child(1)").clone(true));
			$(".address_celect").eq($(".address_celect").length-1).children(".item_tit").children("h4").html(username);
			$(".address_celect").eq($(".address_celect").length-1).children(".item_tel").children(".contact").html(mobile);
			$(".new_address").hide();
			$(".address_celect").eq($(".address_celect").length-1).css("border-color","#F42424").siblings(".address_celect").css("border-color","#d2d2d2");
			$(".address_celect").eq($(".address_celect").length-1).children(".gou").addClass("addgou").parents(".address_celect").siblings().children(".gou").removeClass("addgou");
			$(".address_celect:nth-child(1)").hide();
		}
	})
	$(".address_celect:nth-child(1)").hide();
	
	//点击地址栏时，当前的边框颜色改变
	$(".address_celect").click(function() {
		$(this).css("border-color","#F42424").siblings(".address_celect").css("border-color","#d2d2d2");
		$(this).children(".gou").addClass("addgou").parents(".address_celect").siblings().children(".gou").removeClass("addgou");
		console.log($(this).index())
	});
	
	//鼠标滑过地址栏的时候，当前地址栏显示删除和修改两个按钮 
	$(".address_celect").hover(function(){
		$(this).children("a").show();
	},function(){
		$(this).children("a").hide();
	})
	
	//点击删除按钮时，当前地址栏删除
	$(".add_form .address_celect .delect").click(function(){
		$(this).parents(".address_celect").remove();
	})
	//点击修改按钮时，弹出框填写信息
	$(".add_form .address_celect .edit").click(function(){
		$(".new_address").show();
		console.log($(this))
		$("#name").val($(this).parent(".address_celect").children(".item_tit").children(".usename").html());
		$("#mobile").val($(this).parent(".address_celect").children(".item_tel").children(".contact").html());
	})
	
	//用户名判断
	$("#name").blur(function(){
		var username = $("#name").val();
		if(username.length<2){
			$("#name").css("border","1px solid #F42424");
			$("#name").siblings("span").show();
			$("#name").siblings("span").html("收货人姓名输入不正确，请重新输入");
		}else{
			$("#name").css("border","1px solid #d2d2d2");
			$("#name").siblings("span").hide();
			$("#name").siblings("span").html("请您填写收货人姓名");
		}
	})
	
//	手机号码判断
	$("#mobile").blur(function(){
		var mobile = $("#mobile").val();
		if (!(/^1[3456789]\d{9}$/.test(mobile))) {
			$("#mobile").css("border","1px solid #F42424");
			$("#mobile").siblings(".redtip").show();
			$("#mobile").siblings(".redtip").html("手机号输入不正确，请重新输入");
		}else{
			$("#mobile").css("border","1px solid #d2d2d2");
			$("#mobile").siblings(".redtip").hide();
			$("#mobile").siblings(".redtip").html("手机号码不能为空");
		}
	})
	
	//详细地址判断
	$("#detailed").blur(function(){
		var detailed = $("#detailed").val();
		console.log(detailed);
		if(detailed.length<=4){
			$("#detailed").css("border","1px solid #F42424");
			$("#detailed").siblings("span").show();
			$("#detailed").siblings("span").html("详细地址输入不正确，请重新输入");
		}else{
			$("#detailed").css("border","1px solid #d2d2d2");
			$("#detailed").siblings("span").hide();
			$("#detailed").siblings("span").html("详细地址不能为空");
		}
	})
	
	
	
	//缺货时处理选项
	$(".less_goods .less_item_main>div").click(function(){
		console.log($(this));
		$(this).css("background","url(../imges/radio_checked.png) 0 0px no-repeat").siblings().css("background","url(../imges/radio.png) 0 0px no-repeat");
	})
})
