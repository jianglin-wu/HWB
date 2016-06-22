function ajax(url,fnSucc,fnFaild){
	var oAjax=null;
	//创建兼容对象
	if(window.XMLHttpRequest){
		oAjax=new XMLHttpRequest();
	}else{
		oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	//建立连接
	oAjax.open('GET', url,true);
	//发送请求
	oAjax.send();
	//接受返回
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if(oAjax.status==200){
				fnSucc(oAjax.responseText);
			}else{
				if(fnFaild){
					fnFaild();
				}
			}
		}
	};
}
