$(function(){
	//轮播图部分
	var n = 0;
	var timer = null;
	$(".cur ul li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		n = $(this).index();
		$(".banner_pic a img").eq(n).css("opacity","1").parent().siblings().children().css("opacity","0");
	})
	
	function tart_time(){
		clearInterval(timer);
		timer = setInterval(function(){
			n++;
			if(n>3){n=0};
			$(".banner_pic a img").eq(n).css("opacity","1").parent().siblings().children().css("opacity","0");
			$(".cur ul li").eq(n).addClass("current").siblings().removeClass("current");
		},2000);
	}
	tart_time();
	$(".banner").hover(function() {
		clearInterval(timer);
	}, function() {
		tart_time();
	});
	
//	乐器配件,当鼠标滑过的时候，div下面出现箭头
// 乐器配件部分.当鼠标滑过新品推荐的时候,切换下方的内容
	var ac = 0;
	$(".parts_hd_tags ul li").hover(function(){
		$(this).children(".arrowImg").fadeIn().parent().siblings().children(".arrowImg").fadeOut();
		ac = $(this).index();
		$(".clear_b .bd_right_main").eq(ac).fadeIn().siblings().fadeOut();
	})
	//乐器配件左边的小轮播图
	var aj = 0;
	var obj01_timer = null;
	$(".bdLeft_slide_view ol li").click(function(){
		$(this).addClass("radius_show").siblings().removeClass("radius_show");
		aj = $(this).index();
		console.log(aj);
		$(".bdLeft_slide_view ul").css("margin-left","-" + aj* 232 + "px");
	})
	function aa(){
		clearInterval(obj01_timer);
		obj01_timer = setInterval(function(){
			aj++;
			if(aj>1){aj=0}
			$(".bdLeft_slide_view ol li").eq(aj).addClass("radius_show").siblings().removeClass("radius_show");
			$(".bdLeft_slide_view ul").css("margin-left","-" + aj* 232 + "px");
		},2000);
	}
	aa();
	$(".bdLeft_slide_view").hover(function(){
		clearInterval(obj01_timer);
	},function(){
		aa();
	})
	// 戏剧用品部分.当鼠标滑过新品推荐的时候,切换下方的内容
	var ad = 0;
	$(".parts_hd_tags1 ul li").hover(function(){
		$(this).children(".arrowImg").fadeIn().parent().siblings().children(".arrowImg").fadeOut();
		ad = $(this).index();
		$(".clear_b .bd_right_main1").eq(ad).fadeIn().siblings().fadeOut();
	})
	
	// 音箱部分
	var ac = 0;
	$(".parts_hd_tags2 ul li").hover(function(){
		$(this).children(".arrowImg").fadeIn().parent().siblings().children(".arrowImg").fadeOut();
		ad = $(this).index();
		$(".clear_b .bd_right_main2").eq(ac).fadeIn().siblings().fadeOut();
	})
	
	// 左侧导航栏
	$(window).scroll(function(){
		var h = $(window).scrollTop();
		console.log(h);
		if(h>700&&h<=1150){
			$(".left_nav .lift_list").css({
				"opacity":"1",
				"transform":"scale(1)",
				"transition":"0.4s"
			});
			$(".left_nav .lift_list li").eq(0).addClass("lift_listNow").siblings().removeClass("lift_listNow");
		}else if(h>1150&&h<1750){
			$(".left_nav .lift_list li").eq(1).addClass("lift_listNow").siblings().removeClass("lift_listNow");
		}else if(h>1750&&h<2150){
			$(".left_nav .lift_list li").eq(2).addClass("lift_listNow").siblings().removeClass("lift_listNow");
		}else if(h>=2150&&h<2850){
			$(".left_nav .lift_list li").eq(3).addClass("lift_listNow").siblings().removeClass("lift_listNow");
		}else if(h>=2850&&h<3350){
			$(".left_nav .lift_list li").eq(4).addClass("lift_listNow").siblings().removeClass("lift_listNow");
		}else if(h>=3350&&h<4250){
			$(".left_nav .lift_list li").eq(5).addClass("lift_listNow").siblings().removeClass("lift_listNow");
		}else if(h>=4250){
			$(".left_nav .lift_list li").eq(6).addClass("lift_listNow").siblings().removeClass("lift_listNow");
		}else{
			$(".left_nav .lift_list").css({
				"opacity":"0",
				"transform":"scale(0.1)",
				"transition":"0.4s"
			});
		}
		
	})
	$(".left_nav .lift_list li").eq(0).click(function(){
		$("html,body").animate({"scrollTop":800},500);
	})
	$(".left_nav .lift_list li").eq(1).click(function(){
		$("html,body").animate({"scrollTop":1150},500);
	})
	$(".left_nav .lift_list li").eq(2).click(function(){
		$("html,body").animate({"scrollTop":1750},500);
	})
	$(".left_nav .lift_list li").eq(3).click(function(){
		$("html,body").animate({"scrollTop":2150},500);
	})
	$(".left_nav .lift_list li").eq(4).click(function(){
		$("html,body").animate({"scrollTop":2850},500);
	})
	$(".left_nav .lift_list li").eq(5).click(function(){
		$("html,body").animate({"scrollTop":3350},500);
	})
	$(".left_nav .lift_list li").eq(6).click(function(){
		$("html,body").animate({"scrollTop":4250},500);
	})
	$(".toTop").click(function(){
		var h = $(".siteNav").offset().top; 
		$("html,body").animate({"scrollTop":h},500);
	})
	$(".left_nav .lift_list li").hover(function(){$(this).addClass("lift_listHover").siblings().removeClass("lift_listHover");
	},function(){
		$(this).removeClass("lift_listHover");
	})
	
	//点击搜索商品的时候，页面跳转到商品列表页
	$(".wsearch .submit_goods").click(function(){
		location.href= "../html/shopList.html";
	})
})
