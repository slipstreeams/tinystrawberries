
jQuery('.hamburger').on('click', function( event ){
 	event.preventDefault();
 	jQuery('.navigation').toggleClass('mobileHidden');

});

$('.dropdown-toggle').dropdown();
