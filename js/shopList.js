$(function(){
	// 鼠标滑过全部商品分类时,显示下拉菜单
	$(".categories").hover(function(){
		$(".parcat_tab").show();
	},function(){
		$(".parcat_tab").hide();
	})
	
	$(".filter_left a").click(function(){
		$(this).addClass("aRed1").siblings().removeClass("aRed1");
	})
	$(".filter_left a").hover(function(){
		$(this).addClass("aRed2").siblings().removeClass("aRed2");
	},function(){
		$(this).removeClass("aRed2");
	})
	
	// 点击选项时,替换掉lable下的背景图,让其看上去有选中的效果
	$(".wcheck label").click(function(){
		if ($(this).hasClass("hav")) {
			$(this).css({
				"background":"url(../imges/checked_solid_14x14.png) 0 1px no-repeat",
				"color":"#F42424"
			});
			$(this).removeClass("hav");
		} else{
			$(this).css({
				"background":"url(../imges/checkbox_12x12.png) 0 1px no-repeat",
				"color":"#555"
			});
			$(this).addClass("hav");
		}
	})
	
	// 鼠标滑动时,图片消失,然后出现文字
	$(".wrap_brand_li").hover(function(){
		$(this).find("img").hide();
		$(this).find("span").css({
			"border":"1px solid red",
			"background-color":"white",
			"color":"red"
		})
	},function(){
		$(this).find("img").show();
	})
	
	
	// 点击价格区间,已选条件框增加新的条件(添加标签)
	var min_price = null;
	var max_price = null;
	var li_len = parseInt($(".get_new li").length)-1;
	$(".pirce_value .price_about li").click(function(){
		li_len++;
		min_price = $(this).find("span:nth-child(1)").html();
		max_price = $(this).find("span:nth-child(2)").html();
		$(".hav_condition").show();
		$(".hav_condition .get_new li").show();
		
		// $(".hav_condition .get_new").append("<li></li>");
		var li = $(".hav_condition .get_new").html("<li></li>");
		$(".hav_condition .get_new li").addClass("get_item");
		$(".hav_condition .get_new li").html('<b>价格:</b><em><span>' + min_price + '</span> - <span>' + max_price +'</span></em><i></i>');
		
		//点击已选条件里的叉号，所在父级的li消失
		$(".hav_condition .get_new li i").click(function(e){
			// e.preventDefault();
			$(this).parent("li").remove();
			// $(".hav_condition").hide();
			// $(".good_conditon").show();
		})
		$(".good_conditon").hide();
		$("#w_min_input").val(min_price);
		$("#w_max_input").val(max_price);
	})
	$("#pick_ok").click(function(){
		min_price = parseInt($("#price_min").val());
		max_price = parseInt($("#price_max").val());
		$(".hav_condition").show();
		var li = $(".hav_condition .get_new").html("<li></li>");
		$(".hav_condition .get_new li").addClass("get_item");
		$(".hav_condition .get_new li").html('<b>价格:</b><em><span>' + min_price + '</span> - <span>' + max_price +'</span></em><i href="#"></i>');
		
		//点击已选条件里的叉号，所在父级的li消失
		$(".hav_condition .get_new li i").click(function(e){
			$(this).parent("li").remove();
		})
		$("#w_min_input").val(min_price);
		$("#w_max_input").val(max_price);
		$(".good_conditon").hide();
	})
	
	// 点击全部撤销,已选条件的li全部消失
	$(".give_up_all a").click(function(){
		$(".hav_condition .get_new li").remove();
		// $(".hav_condition .get_new li").hide();
		$(".hav_condition").hide();
		$(".good_conditon").show();
		
	})
	
	// 点击价格按钮时,下边出现弹窗,点击弹窗的按钮时,弹窗消失
	$(".winput input").click(function(){
		$(".expand").show();
	})
	$(".expand a:nth-child(1)").click(function(){
		$(".winput input").val("");
		$(".expand").hide();
	})
	$(".expand a:nth-child(2)").click(function(){
		if($(".winput input").val() == " "){
			alert("aaa");
		}else{
			// $(".hav_condition .get_new li").remove();
			min_price = parseInt($("#w_min_input").val());
			max_price = parseInt($("#w_max_input").val());
			$(".hav_condition").show();
			var li = $(".hav_condition .get_new").html("<li></li>");
			$(".hav_condition .get_new li").addClass("get_item");
			$(".hav_condition .get_new li").html('<b>价格:</b><em><span>' + min_price + '</span> - <span>' + max_price +'</span></em><i></i>');
			//点击已选条件里的叉号，所在父级的li消失
			$(".hav_condition .get_new li i").click(function(e){
				$(this).parent("li").remove();
			})
			$("#w_min_input").val(min_price);
			$("#w_max_input").val(max_price);
			$(".good_conditon").hide();
		}
		$(".expand").hide();
	})
	
	
	// 点击选项时,替换掉lable下的背景图,让其看上去有选中的效果
	$(".p_opration a:nth-child(1) label").click(function(){
		if ($(this).hasClass("hav")) {
			$(this).css({
				"background":"url(../imges/checked_solid_14x14.png) 0 1px no-repeat",
				"color":"#F42424"
			});
			$(this).removeClass("hav");
		} else{
			$(this).css({
				"background":"url(../imges/checkbox_12x12.png) 0 1px no-repeat",
				"color":"#555"
			});
			$(this).addClass("hav");
		}
	})
	
	// 鼠标滑过时,改变物体的边框颜色,同时将框内图片路径传给大图
	$(".p_sild .little_pic li").hover(function(){
		$(this).css("border","1px solid #F42424").siblings().css("border","1px solid #d2d2d2");
		var img_src = $(this).children('img').attr('src');
		// $(".good_left_li .p_img a img").attr("src",img_src);	
		$(this).parents(".p_sild").siblings(".p_img").find("img").attr("src",img_src);
	},function(){
		$(this).css("border","1px solid #d2d2d2");
	})
	
	// 点击右边列的按钮时,右边模块向右滑动消失,同时按钮图标改变,左边列表变宽
	$(".good_right a").click(function(){
//		$(this).siblings(".good_right_main").slideToggle();
		if ($(this).children("i").hasClass("icon-xiangyou")) {
			$(this).css({
				"right":"0px",
				"transition":"1s"
			});
			$(this).children("i").removeClass("icon-xiangyou");
			$(this).children("i").addClass("icon-xiangzuo");
			$(this).siblings(".good_right_main").css({
				"width":"0px",
				"transition":"1s",
				"padding":'0'
			});
			$(".good_left").css({
				"width":"1392px",
				"transition":"1s"
			})
		} else{
			// $(this).css("right","222px");
			$(this).css({
				"right":"222px",
				"transition":"1s"
			});
			$(this).children("i").removeClass("icon-xiangzuo");
			$(this).children("i").addClass("icon-xiangyou");
			$(this).siblings(".good_right_main").css({
				"width":"190px",
				"transition":"1s",
				"padding":'0 15px'
			});
			$(".good_left").css({
				"width":"1160px",
				"transition":"0s"
			})
		}
	})
	
	//点击页面时，跳转到商品详情页
	$(".good_left_ul .good_left_li").click(function(){
		location.href= "../html/particulars.html";
	})
})