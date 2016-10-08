jQuery(document).ready(function(){
	/*When .readmore is clicked, show hidden list */
	jQuery(".readmore").on("click",function() {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
		jQuery(this).parent(".coffee-specs").children(".coffee-deets").slideDown();
		/*Hide 'more' anchor element;*/
		jQuery(this).addClass("hide");
		/*Show 'less' anchor element*/
		jQuery(this).parent(".coffee-specs").children(".readless").removeClass("hide");

	});

	/*When .readless is clicked, hide list */
	jQuery(".readless").on("click",function(){
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
		jQuery("#show-this-on-click").slideUp(400, function(){
			/*Show'more' anchor element;*/
			jQuery(".readmore").removeClass("hide");
			/*Hide 'less' anchor element;*/
			jQuery(".readless").addClass("hide");
			});
		
		
		
	});
	/*When anchor tab element is clicked, show targeted material */
	$('#myTabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})
	/* Activate history tab*/
	$('#myTabs a[href="#history"]').tab('show') 
	/* Activate farming tab*/
	$('#myTabs a[href="#farming"]').tab('show') 
	/* Activate varietal dictionary tab*/
	$('#myTabs a[href="#varietals"]').tab('show') 

	jQuery('.hamburger').on('click', function( event ){
 		event.preventDefault();
 		jQuery('.navigation').toggleClass('mobile-hidden');

	});

	jQuery('#d-region-nav').dropdown();
});