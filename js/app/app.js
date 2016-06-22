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
//使用ajax配合json修改页面数据 此处传入两个数（被点击li的父级，被修改的元素集）
function ajaxPages(btnLi,Target){
	var j=0;
	btnLi.find('li').each(function(){
		btnLi.find('li').eq(j).click(function(){
			ajax('json/product_keyword'+($(this).index()+1)+'.json',function(srt){
				var aData=eval(srt);
					Target.each(function(){
					Target.find('img').eq($(this).index()).attr('src',aData[$(this).index()].src);
					Target.find('h3').eq($(this).index()).html(aData[$(this).index()].h3);
					Target.find('p').eq($(this).index()).html(aData[$(this).index()].p);
				});
			});
		});
		j++;
	});
}

//main
$(function(){
	//使用ajax配合json修改页面数据 此处传入两个数（被点击li的父级，被修改的元素集）
	ajaxPages($('.product_keyword'),$('.product_list .shop .wares'));
	
	//传入对象 背景轮播
	bgMove($('.home_banner li'));

	//下拉多选框
	downPull($('#catalog_selects'));
	downPull($('#city_selects'));
	//点击选择按钮 传入按钮父级元素 为每个按钮添加一个btn类
	toggleBtn($('#filter_inner'));

});