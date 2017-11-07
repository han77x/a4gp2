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


	$('#first').hover(   
		function(){       
			$(this).data('inTime', new Date().getTime());
		},    
		function(){       
			var outTime = new Date().getTime();       
			var firstTime = (outTime - $(this).data('inTime'))/1000;        
			$('#firstResult').html('You hovered over the topmost part for ' + firstTime + ' seconds.');
		}
	);
	$('#second').hover(   
		function(){       
			$(this).data('inTime', new Date().getTime());
		},    
		function(){       
			var outTime = new Date().getTime();       
			var secondTime = (outTime - $(this).data('inTime'))/1000;        
			$('#secondResult').html('You gazed upon the top box for ' + secondTime + ' seconds.');
		}
	);
	$('#side').hover(   
		function(){       
			$(this).data('inTime', new Date().getTime());
		},    
		function(){       
			var outTime = new Date().getTime();       
			var sideTime = (outTime - $(this).data('inTime'))/1000;        
			$('#sideResult').html('You stared at the side for ' + sideTime + ' seconds.');
		}
	);
	$('#third').hover(   
		function(){       
			$(this).data('inTime', new Date().getTime());
		},    
		function(){       
			var outTime = new Date().getTime();       
			var thirdTime = (outTime - $(this).data('inTime'))/1000;        
			$('#thirdResult').html('You read the slideshow for ' + thirdTime + ' seconds.');
		}
	);
	$('#fourth').hover(   
		function(){       
			$(this).data('inTime', new Date().getTime());
		},    
		function(){       
			var outTime = new Date().getTime();       
			var fourthTime = (outTime - $(this).data('inTime'))/1000;        
			$('#fourthResult').html('You were wondering about this cool part for ' + fourthTime + ' seconds.');
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