$(document).ready(function(){
    $(".btn1").click(function(){
        $(".cover").slideUp();
    });
    $(".btn2").click(function(){
        $(".cover").slideDown();
    });



/*This hides the cover page once a link is selected*/

	$(".hide").click(function() {
		$(".cover").hide();
	});

	
//Basic script used from http://jsfiddle.net/XQ9kY/1/

	var totalFirstResult = 0;
	var totalSecondResult = 0;
	var totalSideResult = 0;
	var totalThirdResult = 0;
	var totalFourthResult = 0;
	var totalFifthResult = 0;

	$('#first').hover(   
		function(){       
			$(this).data('inTime', new Date().getTime());
		},    
		function(){       
			var outTime = new Date().getTime();       
			var firstTime = (outTime - $(this).data('inTime'))/1000;
			totalFirstResult = totalFirstResult + firstTime;
			$('#firstResult').html('You hovered over the topmost part for ' + totalFirstResult.toFixed(2) + ' seconds. The last time you hovered here was: ' + totalFirstResult.toFixed(2) + ' seconds long.');
		}
	);
	$('#second').hover(   
		function(){       
			$(this).data('inTime', new Date().getTime());
		},    
		function(){       
			var outTime = new Date().getTime();       
			var secondTime = (outTime - $(this).data('inTime'))/1000;
			totalSecondResult = totalSecondResult + secondTime;
			$('#secondResult').html('You gazed upon the top box for ' + totalSecondResult.toFixed(2) + ' seconds. The last time you hovered here was ' + secondTime.toFixed(2) + ' seconds long.');
		}
	);
	$('#side').hover(   
		function(){       
			$(this).data('inTime', new Date().getTime());
		},    
		function(){       
			var outTime = new Date().getTime();       
			var sideTime = (outTime - $(this).data('inTime'))/1000;        
			totalSideResult = totalSideResult + sideTime;
			$('#sideResult').html('You stared at the side for ' + totalSideResult.toFixed(2) + ' seconds. The last time you hovered here was ' + sideTime.toFixed(2) + ' seconds.');
		}
	);
	$('#third').hover(   
		function(){       
			$(this).data('inTime', new Date().getTime());
		},    
		function(){       
			var outTime = new Date().getTime();       
			var thirdTime = (outTime - $(this).data('inTime'))/1000;
			totalThirdResult = totalThirdResult + thirdTime;			
			$('#thirdResult').html('You read the slideshow for ' + totalThirdResult.toFixed(2) + ' seconds. The last time you hovered here was '+thirdTime.toFixed(2) + ' seconds.');
		}
	);
	$('#fourth').hover(   
		function(){       
			$(this).data('inTime', new Date().getTime());
		},    
		function(){       
			var outTime = new Date().getTime();       
			var fourthTime = (outTime - $(this).data('inTime'))/1000;
			totalFourthResult = totalFourthResult + fourthTime;			
			$('#fourthResult').html('You were wondering about this cool part for ' + totalFourthResult.toFixed(2) + ' seconds. The last time you hovered here was ' + fourthTime.toFixed(2) + ' seconds.');
		}
	);
//end hover

	
	
//This makes the screen scroll back to top on refresh

    $('html, body').scrollTop(0);

    $(window).on('load', function() {
    setTimeout(function(){
        $('html, body').scrollTop(0);
    }, 0);
});
//end scroll top
});
