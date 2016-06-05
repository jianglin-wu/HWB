$(function(){
	//登陆弹出框
	$('.login').click(function(){
		$('.login_wrap').show();
		alert("hello");
	})
	
	$('.login_wrap strong').click(function(){
		$('.login_wrap').hide();
	})
})