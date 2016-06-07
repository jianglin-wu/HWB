$(function(){
	//登陆弹出框
	$('.login').click(function(){
		$('.login_wrap').show();
	});
	
	$('.login_wrap strong').click(function(){
		$('.login_wrap').hide();
	});

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
});