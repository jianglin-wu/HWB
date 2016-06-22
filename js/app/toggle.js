define(function(){
    return function(){
         var index = 0;
         var funarr = [];
         //初始化index 为0 也就是默认执行第一个参数
         // 判断是否有其他非函数的参数
        var flag=0;
          for(var i=0;i<arguments.length;i++){
              if(typeof arguments[i] == 'function'){                
                  funarr.push(arguments[i]);
              }else{
                flag=1;
                 console.error(arguments[i]+" not a function");                    
             }        
         }
 
         //声明一个_go函数，来依次执行
         var _go = function(){      
            if (!flag) {
                 //判断index（数组下表）
             if(index < funarr.length){
                 funarr[index]();
                 //函数执行后下标+1
                 index++;
                 index=index==funarr.length?index=0:index;
                } 
            }         
         };
         //返回go函数
         return {go:_go};
     }; 
});