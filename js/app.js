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

//main
$(function(){

	//login登陆框拖动
	$("#login_drag").draggable();

	//输入框清除内容功能
	$(".text_box").focus(function(){
		$(this).keydown(function(){
			$(this).next().next().css('display','block');
		});
		$(this).change(function(){
			$(this).next().next().css('display','block');
		});
		if ($(this).val()!=='') {	
			$(this).next().next().css('display','block');
		}
	});
	$(".text_box").blur(function(){
			$(this).next().next().css('display','none');
	});
	$('.input_reset').on('mousedown',function(){
		$(this).prev().prev().val("");
		$(this).css({'display':'none'});
	});
	$(".search_submite").on('click',function(){
		alert('你提交的内容：'+$(this).prev().val());
	});

	//登陆弹出框
	$('.login').click(function(){
		$('.login_wrap').show();
	});
	
	$('.login_wrap strong').click(function(){
		$('.login_wrap').hide();
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
	$('#unlimited').change(function(){
		if ($(this).is(':checked')) {
			$('#region').attr('disabled','true').css({'border-color':'#ddd','color':'#bbb'});
			$('#region').val("地区");
		}else{
			$('#region').removeAttr('disabled').css({'border-color':'#ccc','color':'#666'});
		}
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
	});
	
	
	
});
