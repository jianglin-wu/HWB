function resetInput(Ipt,Reset){
	//当输入框获取焦点时键入或值改变或值不等于空时重置按钮显示
	Ipt.focus(function(){
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
	//当输入框失去焦点时隐藏
	Ipt.blur(function(){
			$(this).next().next().css('display','none');
	});
	//当重置按钮按下时清空输入框内容隐藏按钮
	Reset.on('mousedown',function(){
		$(this).prev().prev().val("");
		$(this).css({'display':'none'});
	});
}

//下拉菜单，传入下拉框div元素
function downPull(obj){
	obj.on('click',function(){
		obj.find('.downbox').toggle();
	});
	obj.find('li').on('click',function(){
		obj.find('input').val($(this).html());
	});
};
//排序列表
function sortList(obj){
	obj.on('click',function(){
		obj.css('color','#666');
		$(this).css('color','orange');
		if ($(this).attr('class')=='sort_list prise_sort') {
			$(this).attr('class','sort_list');
		}else{
			$(this).attr('class','sort_list prise_sort');
		}
	});
}
//点击选择按钮 为每个按钮添加一个btn类
function toggleBtn(obj){
	obj.find('input.btn').on('click',function(){
		obj.find('input.btn').attr('class','btn default_btn');
		$(this).attr('class','btn active_btn');
	});
}
//展开显示地图
function showMap(obj,Target){
	obj.on('click',function(){
		if ($(this).html()=='收起地图') {
			$(this).html('展开地图').attr('class','tog_map show_map');
			Target.slideUp();
		}else{
			$(this).html('收起地图').attr('class','tog_map hide_map');
			Target.slideDown();
		}
	});
}

//main
$(function(){

	//登陆弹出框拖动效果
	$("#login_drag").draggable();

	//登陆弹出框
	$('.login').click(function(){
		$('.login_wrap').show();
	});
	
	$('.login_wrap strong').click(function(){
		$('.login_wrap').hide();
	});
	
	//输入框清除内容功能 此处传入（输入框，重置按钮）两个对象
	resetInput($(".text_box"),$('.input_reset'));
	//点击搜索按钮运行函数
	$(".search_submite").on('click',function(){
		alert('你提交的内容：'+$(this).prev().val());
	});
	//定位，城市选择
	nowLocation($('.location_list'),$('.location'));
	function nowLocation(List,Inner){
		List.find('li').on('click',function(){
			Inner.find('span').html($(this).html());
			List.hide();
		});
		Inner.on('mouseover',function(){
			List.show();
		})
	}

});