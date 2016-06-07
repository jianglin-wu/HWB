//背景轮播
function bgMove(){
	var i=0;
	var size=$('.home_banner li').size();
	$('.home_banner li').hide();
	$('.home_banner li').eq(0).show();
	setInterval(move,5000);
	function move(){
		i++;
		if(i==size){
			i=0;
		}
		$('.home_banner li').fadeOut(1000);
		$('.home_banner li').eq(i).fadeIn(1000);
	}
}
//选项条按钮点击效果切换
function btnSwich(btnDown,btnUp){
	var btnColor='#4E8BE6';//按钮选中颜色
	$(btnUp).css('background','white').css('color','#666');
	$(btnDown).css('background',btnColor).css('color','white');
}
$(function(){
	//输入框清除内容功能
	$(".search_txt").focus(function(){
		$(this).keydown(function(){
			$(this).next().next().css('display','block');
		})
	});
	$(".search_txt").blur(function(){
		if ($(this).val()=='') {	
			$(this).next().next().delay(5000).css('display','none');
		}
	});
	$('.input_reset').on('click',function(){
		$(this).prev().prev().val("");
	});

	//banner轮播
	bgMove();
	
	//选项条按钮点击效果切换
	$('.sell_btn').click(function(){
		btnSwich('.sell_btn','.buy_btn');
	});
	$('.buy_btn').click(function(){
		btnSwich('.buy_btn','.sell_btn');
	});
	
	//ajax关键词分页
	var j=0;
	$('.product_keyword li').each(function(){
		$('.product_keyword li').eq(j).click(function(){
			ajax('json/product_keyword'+($(this).index()+1)+'.json',function(srt){
				var aData=eval(srt);
				$('.product_cont li').each(function(){
					$('.product_cont img').eq($(this).index()).attr('src',aData[$(this).index()].src);
					$('.product_cont h3').eq($(this).index()).html(aData[$(this).index()].h3);
					$('.product_cont p').eq($(this).index()).html(aData[$(this).index()].p);
				})
			})
		})
		j++;
	})
	
	//登陆弹出框
	$('.login').click(function(){
		$('.login_wrap').show();
	})
	
	$('.login_wrap strong').click(function(){
		$('.login_wrap').hide();
	})
	
	
})
