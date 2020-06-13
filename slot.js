
var sloy1H = $(".im").outerHeight();
var slideWrap = $("#a");

var scrollSlider = slideWrap.position().top - sloy1H;

var sloy1H1 = $(".im1").outerHeight();
var slideWrap1 = $("#a1");

var scrollSlider1 = slideWrap1.position().top - sloy1H1;

var sloy1H2 = $(".im2").outerHeight();
var slideWrap2 = $("#a2");

var scrollSlider2 = slideWrap1.position().top - sloy1H2;
var audio = new Audio('mp3/muzyka-dlya-kazino-trek-9.mp3');
 var a = Math.floor(Math.random() * 15) + 25;
 var b = Math.floor(Math.random() * 15) + 25;
 var c = Math.floor(Math.random() * 15) + 25;
 var f = 0;
 var w;

function fun1(){
	$("#butplay").css("display","none");
	fun();
	$("#pous").css("display","block");

    w = setInterval(function fun1(){

      fun();
 },9000);
   

};
  function fun2(){
  	$("#butplay").css("display","block");
	 		$("#pous").css("display","none");
	 		//fun().stop();
			clearInterval(w);
		}
function fun(){
    
	$("#but").attr('disabled', true);

    var yot,yot1,yot2;
	var balans = $("#balans");
	if(balans.text()>0){
	balans.text(balans.text() - 100);
     }else{
     	confirm("предлагаем online оплату");
     }

    audio.play();

	var cif = 0;
    var mek = setInterval(function(){

		slideWrap.animate({
	        "heigth": scrollSlider
		},170,"linear",function(){
       
			slideWrap.find(".im:first")
			.appendTo(slideWrap).parent().css({"top":"259px"});
		});
  
           cif +=1;

           if(cif === a){

       	   clearInterval(mek); 
           }

    },100);
 
    var cif1 = 0;
	var erku = setInterval(function(){
		slideWrap1.animate({
	        "heigth": scrollSlider1
		},170,"linear",function(){

			slideWrap1.find(".im1:first")
			.appendTo(slideWrap1).parent().css({"top":"259px"});
		});
		cif1 +=1;
           
           if(cif1 === b){
           	   clearInterval(erku);   	  
           }

    },70);
   var cif2 = 0;
   var ereq = setInterval(function(){
		slideWrap2.animate({
	        "heigth": scrollSlider2
		},170,"linear",function(){

			slideWrap2.find(".im2:first")
			.appendTo(slideWrap2).parent().css({"top":"259px"});
		});
		cif2 +=1;
           
           if(cif2 === c){
           	   clearInterval(ereq);
           }
	
    },150);
   var l = 0;
   var kang = setInterval(function(){
   	    l++;
   	    if(l == 150){
		
			var a = slideWrap.find(".im:first").attr("id");
            var b = slideWrap1.find(".im1:first").attr("id"); 
            var c = slideWrap2.find(".im2:first").attr("id"); 
            console.log(a,b,c);
			
            if((a == "xaxox") && (b == "xaxox") && (c == "xaxox")){
				balans.text(parseInt(balans.text()) + 300);
			    
			    alert("вы выграли 300 р");
			}
			else if((a == "vishnya") && (b == "vishnya") && (c == "vishnya")){
				balans.text(parseInt(balans.text()) + 300);
			    
			    alert("вы выграли 400 р");
			}
			else if((a == "banan") && (b == "banan") && (c == "banan")){
				balans.text(parseInt(balans.text()) + 300);
			    
			    alert("вы выграли 200 р");
			}
			else if((a == "yot") && (b == "yot") && (c == "yot")){

				balans.text(parseInt(balans.text()) + 500);
			  
			    alert("вы выграли 500 р");
              }
			$("#but").attr('disabled', false);
		
          };
},50);
 
};























