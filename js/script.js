$(document).ready(function() {



/*************************  Slider Revolution  *****************************/
	if($('.banner').length) {
		var height=$('.homev2').length>0?447:415;
		$('.banner').revolution({
			hideThumbs:1,
			startwidth:1200,
			startheight:600,
			shadow:0,
			touchenabled:"on",
			navigationType: "bullet",
			navigationStyle: "round-old",
		});    
	}


/***************************** Go to top  *********************************/
	 $(window).scroll(function(){
		 if ($(this).scrollTop() > 900) {
			 $('.scrollup').fadeIn();
		 } else {
			 $('.scrollup').fadeOut();
		 }
	 }); 
 
	 $('.scrollup').click(function(){
		 $("html, body").animate({ scrollTop: 0 }, 600);
		 return false;
	 });



/******************************  Isotope  **********************************/
	if ($('.magic-grid .content').length) {
		// cache container
		var $container = $('.magic-grid .content');
		
		// initialize isotope
		$container.isotope({ });

		// filter items when filter link is clicked
		$('.filters button').click(function(){
			$('.filters button').removeClass('active');
			$(this).addClass('active');
			
			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector });
			return false;
		});
	}



/*******************************  GMaps  ***********************************/
	if ($('#map').length) {
		var map;
		map = new GMaps({
			div: '#map',
			lat: 41.601662,
			lng: -71.495281
		});
		map.addMarker({
			lat: 41.601662,
			lng: -71.495281,
			title: 'Contact',
			infoWindow: {
				content: '<strong>Just Train</strong> <br>3520 Quaker Lane, <br />North Kingstown, RI 02852<br /> <br /> Email: <a href="mailto:justtrainri@gmail.com">justtrainri@gmail.com</a> <br /> Phone: (401) 295-0011'
			}
		});
	}



/***************************  Easy PaiChart  *******************************/
	if ($('.chart').length) {
		$('.chart').easyPieChart({
			animate: 2000,
			barColor: "#222322",
			trackColor: "#ffd302",
			scaleColor: false,
			lineWidth: 11,
			lineCap: "square",
		});
	}






/******************************  Chart.js  *********************************/
	if ($('#linear-chart').length) {
		//Get context with jQuery - using jQuery's .get() method.
		var ctx = $("#linear-chart").get(0).getContext("2d");
		//This will get the first returned node in the jQuery collection.
		var myNewChart = new Chart(ctx);
		
		var data = {
			labels : ["10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM"],
			datasets : [
				//Actitude
				{
					fillColor : "rgba(220,220,220,0)",
					strokeColor : "rgba(29,153,69,1)",
					pointColor : "rgba(29,153,69,1)",
					pointStrokeColor : "#fff",
					data : [5,3,3,5,7,8,6,6,9,8,10,12]
				},
				{
					fillColor : "rgba(220,220,220,0)",
					strokeColor : "rgba(244,179,1,1)",
					pointColor : "rgba(244,179,1,1)",
					pointStrokeColor : "#fff",
					data : [3,4,4,6,2,3,3,7,3,7,11,11]
				}
			]
		}

		var options = {
						
			//Boolean - If we show the scale above the chart data			
			scaleOverlay : false,
			
			//Boolean - If we want to override with a hard coded scale
			scaleOverride : true,
			
			//** Required if scaleOverride is true **
			//Number - The number of steps in a hard coded scale
			scaleSteps : 13,
			//Number - The value jump in the hard coded scale
			scaleStepWidth : 1,
			//Number - The scale starting value
			scaleStartValue : 1,

			//Boolean - Whether to show labels on the scale	
			scaleShowLabels : false,
			
			///Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : false,
			
			//Boolean - Whether the line is curved between points
			bezierCurve : false,
			
			//Number - Radius of each point dot in pixels
			pointDotRadius : 6,
			
			
		}

		myNewChart.Line(data,options);
	}



/*****************************  Carousel  *********************************/
	if ($('#testimonials').length) {
		$('#testimonials').carousel()
	}



/*****************************  Accordion  *********************************/
if ($('#accordion').length) {
	$('#accordion').on('hide.bs.collapse', function (element) {
		$(element.target).prev().find('i').removeClass('icon-minus');
		$(element.target).prev().find('i').addClass('icon-plus');
		$(element.target).prev().find('span').removeClass("invert");
	});

	$('#accordion').on('show.bs.collapse', function (element) {
		$(element.target).prev().find('i').removeClass('icon-plus');
		$(element.target).prev().find('i').addClass('icon-minus');
		$(element.target).prev().find('span').addClass("invert");
	});
}



/***************************  Tabs  *****************************/
if ($('#myTab a').length) {
	$('#myTab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
}




/************************  Zoom Store  ***************************/
	$('#img-store .item').on('click', function() {
		$('#img-store').toggleClass('zoomed');
		$('.data-item').toggleClass('zoomed');
	});

	$('#img-store #store-zoom').on('click', function() {
		$('#img-store').toggleClass('zoomed');
		$('.data-item').toggleClass('zoomed');
	});


/***************************  prettyPhoto  *******************************/
	$("a[data-rel^='prettyPhoto']").prettyPhoto();



/***************************  Gallery item hover effect  *******************************/
 hover_effect();
      function hover_effect() {  
    	$(' .portfolio-item-hover-content').hover(function() {
            $(this).find('div,a').stop(0,0).removeAttr('style');
            $(this).find('.hover-options').animate({opacity: 0.9}, 'fast');
            $(this).find('a').animate({"top": "30%" });
        }, function() {
            $(this).find('.hover-options').stop(0,0).animate({opacity: 0}, "fast");
            $(this).find('a.zoom').stop(0,0).animate({"top": "120%"}, "slow");
 
        });
        }





}); //end document ready