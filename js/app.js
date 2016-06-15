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


//main
$(function(){

	
	//ajax关键词分页
	var j=0;
	$('.product_keyword li').each(function(){
		$('.product_keyword li').eq(j).click(function(){
			ajax('json/product_keyword'+($(this).index()+1)+'.json',function(srt){
				var aData=eval(srt);
				$('.product_list .shop .wares').each(function(){
					$('.product_list .shop .wares img').eq($(this).index()).attr('src',aData[$(this).index()].src);
					$('.product_list .shop .wares h3').eq($(this).index()).html(aData[$(this).index()].h3);
					$('.product_list .shop .wares p').eq($(this).index()).html(aData[$(this).index()].p);
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
