$(function(){
	// 鼠标滑过全部商品分类时,显示下拉菜单
	$(".categories").hover(function(){
		$(".parcat_tab").show();
	},function(){
		$(".parcat_tab").hide();
	})
	
	$(".parts_music").hover(function(){
		$(".dro1").show();
		$(".tr1").css({
			"border-bottom":"#F42424",
			"border":"1px solid #F42424"
		})
	},function(){
		$(".dro1").hide();
		$(".tr1").css({
			"border":"1px solid #ddd"
		})
	})
	$(".keyboard_music").hover(function(){
		$(".dro2").show();
		$(".tr2").css({
			"border-bottom":"#F42424",
			"border":"1px solid #F42424"
		})
	},function(){
		$(".dro2").hide();
		$(".tr2").css({
			"border":"1px solid #ddd"
		})
	})
//	var two=`<div>${input.value}<div>`;
	
	
	// 商品详情,滑过下面图片时,上面的图片切换
	var pic_num = $(".spac_item ul li").length-5;
	console.log(pic_num)
	$(".spac_item ul li").mouseenter(function(){
		$(this).css('border','1px solid red').siblings('li').css('border','1px solid white');
		var root = $(this).children('img').attr('src');
		$('.gallery').children('img').attr("src",root);
		$('.right_big').children('img').attr("src",root);
	})
	var ab = 0;
	$(".spelist a:nth-child(1)").click(function(){
		ab++;
		if (ab>pic_num) {
			ab=pic_num;
		}
		$(".spac_item ul").css("margin-left",-63*ab + "px");
		console.log(ab +"------");
	})
	$(".spelist a:nth-child(3)").click(function(){
		ab--;
		if (ab <= 0) {
			ab = 0;
		} 
		$(".spac_item ul").css("margin-left",-63*ab + "px");
		console.log(ab +"------");
	})
	
	
	// 鼠标滑过时出现二维码
	$(".ophone_code").hover(function(){
		$(".eq_pop").show();
	},function(){
		$(".eq_pop").hide();
	})
	
	// 购买按钮
	var num = parseInt($("#buy_num").val());
	var max_num = parseInt($("#good_attr_num").html());
	console.log(max_num);
	$(".buy_btn a:nth-child(1)").click(function(){
		num = num + 1;
		$(".buy_btn a:nth-child(2)").css("color","#333");
		if(num>= max_num){
			$(".buy_btn a:nth-child(1)").css("color","#ccc");
			num = max_num;
		}
		$("#buy_num").val(num);
	})
	$(".buy_btn a:nth-child(2)").click(function(){
		num = num - 1;
		$(".buy_btn a:nth-child(1)").css("color","#333");
		if(num<=1){
			$(".buy_btn a:nth-child(2)").css("color","#ccc");
			num = 1;
		}
		$("#buy_num").val(num);
	})
	
	// 右边上下滑的按钮
	var n=0;
	var a=0;
	// console.log($(".track_center ul li").length -3);
	$(".track_bottom a:nth-child(1)").click(function(){
		n++;
		if(n > ($(".track_center ul li").length - 3)){
			n=$(".track_center ul li").length - 3;
		}else{
			$(".track_center ul").css("margin-top",-185*n +"px");
		}
		console.log(n);
	})
	
	$(".track_bottom a:nth-child(2)").click(function(){
		n--;
		if(n < 0){
			n=0;
		}else{
			$(".track_center ul").css("margin-top",-185*n +"px"); 
		}
		console.log(n);
	})
	
		// 鼠标滑动,右边的图片
	$(".gallery").hover(function(){
		$(".right_big").show();
		$("#xbox").show();   
	},function(){
		$(".right_big").hide();
		$("#xbox").hide();   
	})
	
	$(".big_box").mousemove(function(e){
		var e = e||event;
		
		// console.log(e.pageX);
		// console.log(e.pageY);
		var x = e.pageX - $(".gallery").offset().left -$("#xbox").width()/2;
		var y = e.pageY - $(".gallery").offset().top -$("#xbox").height()/2;
		console.log(x);
		console.log(y);
		var maxx = $(".gallery").width() - $("#xbox").width();
		var maxy = $(".gallery").height() - $("#xbox").height();
		// console.log($(".big_box").height());
		console.log(maxx)
		
		if(x<0){x=0}
		if(y<0){y=0}
		if(x>maxx){x=maxx}
		if(y>maxy){y=maxy}
		console.log(x);
		console.log(y);
		$("#xbox").css({
			"top":y + "px",
			"left":x + "px"
		})
		$(".right_big img").css({
			"top":-y*2 + "px",
			"left":-x*2 + "px"
		})
	})
	
	// 下部侧边栏新品部分,点击时,对应的mcm_right出现
	$(".mc_tab li").click(function(){
		$(this).addClass("curr").siblings().removeClass("curr");
		var lis = $(this).index();
		$(".mcm_right").eq(lis).addClass("show1").siblings().removeClass("show1");
	})
	
	//	商品详情,点击li时,出现对应的g_flo
	$(".g_ul li").click(function(){
		$(this).addClass("curra").siblings().removeClass("curra");
		var ag=$(this).index();
		$(".g_flo").eq(ag).addClass("flo_show").siblings().removeClass("flo_show");
	})
	
	//	手机支付,当鼠标滑过时,出现二维码
	$(".ophone_code1").hover(function(){
		$(".eq_pop1").show();
	},function(){
		$(".eq_pop1").hide();
	})
	
})