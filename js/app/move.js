define(['jquery'],function($){
	//获取样式
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			console.log(1);
			return getComputedStyle(obj,false)[attr];
			console.log(2);
		}
	}
	var speed=0;
	return function startMove(obj,json,fn){
			
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var flag=true;//假定
				for(var attr in json){
					//1.取得当前值
					var icur=0;
					if(attr=="opacity"){
						icur=Math.round(parseFloat(getStyle(obj,attr))*100);
					}else{
						icur=parseInt(getStyle(obj,attr));
					}
					//2.计算缓冲速度
					speed=(json[attr]-icur)/3;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					//3.检测停止
					if (icur!=json[attr]) {
						flag=false;
					}
					if (attr=="opacity") {
						obj.style.opacity=(icur+speed)/100;
						obj.style.filter="alpha(opacity:"+(icur+speed)+")";
					}else{
						obj.style[attr]=icur+speed+"px";
					}
				}
				if(flag){
					clearInterval(obj.timer);
					if (fn) {
						fn();
					}
				}
			},30);
	};
});