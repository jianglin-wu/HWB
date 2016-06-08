$(function(){
	
	//login登陆框拖动
	$("#login_drag").draggable();

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
		});
		$(this).change(function(){
			$(this).next().next().css('display','block');
		});
		if ($(this).val()!=='') {	
			$(this).next().next().css('display','block');
		}
	});
	$(".search_txt").blur(function(){
			$(this).next().next().css('display','none');
	});
	$('.input_reset').on('mousedown',function(){
		$(this).prev().prev().val("");
		$(this).css({'display':'none'});
	});
	$(".search_submite").on('click',function(){
		alert('你提交的内容：'+$(this).prev().val());
	});

});