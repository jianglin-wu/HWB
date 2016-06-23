requirejs(['jquery',
			'jquery_ui',
			'public',
			'toggle'],
function($,jquery_ui,public,toggle){

			//登陆弹出框拖动效果
			$("#login_drag").draggable();
			//登陆弹出框
			$('.login').click(function(){
				$('.login_wrap').show();
			});
			//点击登陆窗口关闭按钮隐藏
			$('.login_wrap strong').click(function(){
				$('.login_wrap').hide();
			});
			
			//输入框清除内容功能 此处传入（输入框，重置按钮）两个对象
			public.resetInput($(".text_box"),$('.input_reset'));
			//点击搜索按钮运行函数
			$(".search_submite").on('click',function(){
				alert('你提交的内容：'+$(this).prev().val());
			});
			//定位，城市选择
			public.nowLocation($('.location_list'),$('.location'));

			requirejs(['webapp']);
});