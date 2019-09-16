$(function(){
	// 购买按钮小按钮
	// var num = parseInt($(".buy_num").val());
	var num = [];
	$(".item_list .good_item").find(".buy_num").each(function(){
		num.push($(this).val());
	})
	console.log(num);
	
	var max_num = parseInt($("#good_attr_num").html());
	var pirce = parseInt($(".onepirce").html());
	
	$(".item_list .good_item").find(".buy_btn a:nth-child(1)").click(function(){
		var ab = $(this).parents(".good_item").index();
		num[ab]=parseInt(num[ab])+1;
		console.log(num[ab]);
		$(this).siblings().css("color","#333");
		$(this).parent().siblings(".buy_num").val(num[ab]);
		var li_add = pirce*num[ab];
		$(this).parents(".w_num").siblings(".w_add").find(".li_add").html(li_add+".00");
		
		var all_price = 0;
		$(".item_list .good_item").find(".li_add").each(function(){
			all_price = all_price + parseInt($(this).html());
			$("#addPrice").html(all_price+".00");
		})
	})
	$(".item_list .good_item").find(".buy_btn a:nth-child(2)").click(function(){
		var ab = $(this).parents(".good_item").index();
		num[ab]=parseInt(num[ab])-1;
		if (num[ab]<1) {
			num[ab]=1;
		}
		console.log(num[ab]);
		$(this).siblings().css("color","#333");
		$(this).parent().siblings(".buy_num").val(num[ab]);
		var li_add = pirce*num[ab];
		$(this).parents(".w_num").siblings(".w_add").find(".li_add").html(li_add+".00");
		
		var all_price = 0;
		$(".item_list .good_item").find(".li_add").each(function(){
			all_price = all_price + parseInt($(this).html());
			$("#addPrice").html(all_price+".00");
		})
	})
	
	// 总价格
	var all_price = 0;
	$(".item_list .good_item").find(".li_add").each(function(){
		all_price = all_price + parseInt($(this).html());
		$("#addPrice").html("￥"+all_price+".00");
	})
	
	// 删除购物车商品
	$(".w_cao a:nth-child(1)").click(function(){
		$(this).parentsUntil(".good_item").remove();
	})
	
	// 删除已选中的商品
	$(".opration a:nth-child(1)").click(function(){
		$(".item_list .good_item").find("#checkboxb").each(function(){
			if ($(this).hasClass("havClass")) {
				
			} else{
				$(this).parentsUntil(".good_item").remove();
			}
		})
	})
	
	// 全选按钮
	var che1 = 0;
	$(".checkbox1 label").click(function(){
		che1 ++;
		if(che1%2 == 0){
			$(".checkbox1 label").css("background","url(../imges/checkbox_12x12.png) 0 1px no-repeat");
			$(".item_list .good_item").find("#checkboxb").css("background","url(../imges/checkbox_12x12.png) 0 1px no-repeat");
			$(".item_list .good_item").find(".li_add").each(function(){
				all_price = all_price + parseInt($(this).html());
				$("#addPrice").html("￥"+all_price+".00");
			})
		}else{
			$(".checkbox1 label").css("background","url(../imges/checked_solid_14x14.png) 0 1px no-repeat");
			$(".item_list .good_item").find("#checkboxb").css("background","url(../imges/checked_solid_14x14.png) 0 1px no-repeat");
			$(".item_list .good_item").find(".li_add").each(function(){
				all_price = all_price + parseInt($(this).html());
				$("#addPrice").html("￥"+all_price+".00");
			})
		}
	})
	
	var che_item = 0;
	var jisu = 0;
	var jis = $(".item_list .good_item").find("#checkboxb").length;
	$(".item_list .good_item").find("#checkboxb").click(function(){
		che_item ++;
		if ($(this).hasClass("havClass")) {
			$(this).css("background","url(../imges/checked_solid_14x14.png) 0 1px no-repeat");
			jisu++;
			$(this).removeClass("havClass");
		} else{
			$(this).css("background","url(../imges/checkbox_12x12.png) 0 1px no-repeat");
			$(this).addClass("havClass");
			jisu--;
		}
		console.log(jisu);
		if(jisu==jis){
			$(".checkbox1 label").css("background","url(../imges/checked_solid_14x14.png) 0 1px no-repeat");
		}else{
			$(".checkbox1 label").css("background","url(../imges/checkbox_12x12.png) 0 1px no-repeat");
		}
	})
	
	//点击去支付时，页面跳转到结算页面
	$("#btn_area").click(function(){
		location.href= "../html/address.html";
	})
})