$(document).ready(function() {
//					anchor tag
	$( "a" ).click(function(e) {
		if( this.hash !== "" ) {
			e.preventDefault();
			var hash = this.hash;
			$("html, body").animate({
				scrollTop: $(hash).offset().top
				}, 1000, function(){
					window.location.hash = hash;
					});
			}
	});
	
	
//			floating arrow/navigation slide down
	var arrow = $("#arrowUp");
	var nav = $("nav");
	$(window).scroll(function() {
		var winScroll = $(window).scrollTop();
		if(winScroll >= 400) {
			arrow.fadeIn().addClass("moveUp");
			nav.css({
				//"background-color": "#373737",
				"position": "fixed",
				"top": 0,
				"left": 0
			});
		}
		else {
			arrow.fadeOut().removeClass("moveUp");
			nav.css({
				//"background-color": "#1E2A52",
				"position": "absolute",
				"top": 0,
				"left": 0
			});
		}
		
	});
		
	

//					Navigation Section

	$("nav button").click(function() {
		$("#lineOne").toggleClass("clickOne");
		$("#lineTwo").toggleClass("clickTwo");
		$("#lineThree").fadeToggle();
		
		$("#navMenu").toggleClass("slide");
	});
	
	
	
//						Events Section

	$(".eventsContent #first").click(function() {
		$(".eventsContent #first > i").toggleClass("eventCheck");
	});
	
	$(".eventsContent #second").click(function() {
		$(".eventsContent #second > i").toggleClass("eventCheck");
	});
	
	$(".eventsContent #third").click(function() {
		$(".eventsContent #third > i").toggleClass("eventCheck");
	});
	
	$(".projects h4 a").click(function(e) {
		e.preventDefault;
		return false; 
	});
		
		
		
//						Contact Section

	$("form").on("submit", function(event) {
		event.preventDefault; 
		
		$("#submitResponse").load('response.html', function(response, status, xhr) {
			if(status === "success") {
				$("#submitStatus").html("success: " + response + " " + status + " " + xhr); 
			}
			else if(status ==="error") {
				$("#submitStatus").html("something went wrong with the server, send us an email at <a href= 'mailto:info@wickerpark.com'>info@wickerpark.com</a>");
			}
		});
		
		return false; 
	});

	
	
	
	
});