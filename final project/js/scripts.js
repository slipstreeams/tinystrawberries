jQuery(document).ready(function(){
	

	jQuery('.hamburger').on('click', function( event ){
 		event.preventDefault();
 		jQuery('.navigation').toggleClass('mobileHidden');

	});

	jQuery('.dropdown-toggle').dropdown();
});