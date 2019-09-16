$(function(){
	$(".nav_main li a").click(function(){
		$(this).addClass("pointer_red").parent().siblings().children().removeClass("pointer_red");
	});
	$(".nav_main li a").hover(function(){
		$(this).addClass("hover_red").parent().siblings().children().removeClass("hover_red");
	},function(){
		$(this).removeClass("hover_red");
	})
	
	
	// 鼠标划入导航栏左侧时,隐藏在右侧的div显示
	$(".categories_items li").hover(function(){
		$(this).children(".item_layer").css("display","block").siblings().children(".item_layer").css("display","block");
	},function(){
		$(this).children(".item_layer").css("display","none");
	})
	
	// 鼠标滑过右侧导航栏时,背景颜色变红,同时左边的div显现并向右滑动
	$(".quiLink li").hover(function(){
		console.log("aaa");
		$(this).addClass("liShow").siblings().removeClass("liShow");
		$(this).children("div").slideDown(0);
		$(this).children(".tooltip").css({
			"left":"-92px",
			"transition":"0.8s"
		}).parents("li").siblings().children(".tooltip").css("left","-121px")},function(){
		$(this).removeClass("liShow");
		$(this).children("div").slideUp(0);
		$(this).children(".tooltip").css({"left":"-121px","transition":"0.8s"});
		
	})
	
	$(".qui_talk li").hover(function(){
		$(this).children("div").slideDown(0);
		$(this).children(".tooltip").css({
			"left":"-92px",
			"transition":"0.8s"
		}).parents("li").siblings().children(".tooltip").css("left","-121px")},function(){
		$(this).removeClass("liShow");
		$(this).children("div").slideUp(0);
		$(this).children(".tooltip").css({"left":"-121px","transition":"0.8s"});
		
	})
	
	// 点击右部我的订单的时候,页面跳转到结算页面
	$(".tooltip").click(function(){
		location.href= "../html/address.html";
	})
})
