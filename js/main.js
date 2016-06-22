requirejs.config({
	baseUrl:"js/app",
	paths:{
		// jquery_ui:'../app/jquery-ui',
		jquery:'jquery/dist/jquery.min'
	},
	shim:{
		'../modules/jquery-ui/jquery-ui.min.js':{
			
		}
	}
});

requirejs(['jquery',
			'jquery_ui',
			'../app/toggle'],
function($,jquery_ui,toggle){

				function Alert1(){alert(1);}
				function Alert2(){alert(2);}
				function Alert3(){alert(3);}
				function Alert4(){alert(4);}

				function Alert11(){alert(11);}
				function Alert22(){alert(22);}
				function Alert33(){alert(33);}
				function Alert44(){alert(44);}
				var t=toggle(Alert1,Alert2,Alert3,Alert4);
				// alert(t.toggle());
				// var t1=t.toggle(Alert1,Alert2,Alert3,Alert4);
			$(".login").on('click',function(){
				t.go();
			});
			var y=toggle(Alert11,Alert22,Alert33,Alert44);
			$(".register").on('click',function(e){
				y.go();
				e .preventDefault();
			});
});