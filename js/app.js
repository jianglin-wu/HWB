//传入对象 背景轮播
function bgMove(obj){
	var i=0;
	var size=obj.length;
	obj.hide();
	obj.eq(0).show();
	setInterval(move,5000);
	function move(){
		i++;
		if(i==size){
			i=0;
		}
		obj.fadeOut(1000);
		obj.eq(i).fadeIn(1000);
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

	//选项条按钮点击效果切换
	$('.sell_btn').on('click',function(){
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
	
	
	//传入对象 背景轮播
	bgMove($('.home_banner li'));

	//下拉多选框
	downPull($('#catalog_selects'));
	downPull($('#city_selects'));
	//点击选择按钮 传入按钮父级元素 为每个按钮添加一个btn类
	toggleBtn($('#filter_inner'));

});
