jQuery(document).ready(function(){
	/*When .readmore is clicked, show hidden list */
	jQuery(".readmore").on("click",function() {
		event.preventDefault();
		jQuery("#show-this-on-click").slideDown();
		/*Hide 'more' anchor element;*/
		jQuery(".readmore").addClass("hide");
		/*Show 'less' anchor element*/
		jQuery(".readless").removeClass("hide");

	});

	/*When .readless is clicked, hide list */
	jQuery(".readless").on("click",function(){
		event.preventDefault();
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
	$('#myTabs a[href="#varietal-dictionary"]').tab('show') 

	jQuery('.hamburger').on('click', function( event ){
 		event.preventDefault();
 		jQuery('.navigation').toggleClass('mobile-hidden');

	});

	jQuery('#d-region-nav').dropdown();
});