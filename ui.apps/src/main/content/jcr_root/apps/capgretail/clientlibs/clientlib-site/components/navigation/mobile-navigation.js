$(".cmp-layoutcontainer--header .cmp-navigation").not("[data-top-nav-processed='true']").each(function() {
	var nav = $(this).attr("data-top-nav-processed", true),
	   $body = $('body');

	$('<div id="toggleNav">' +
		'<a href="#mobileNav" class="toggle"><i class="mobile__toggle-icon" aria-hidden="true"></i></a>' +
	   '</div>'
	).appendTo($body);

	$(
	   '<div id="mobileNav" class="cmp-navigation--mobile">' +
		   '<nav class="cmp-navigation">' +
			   $(this).html() +
		   '</nav>' +
	   '</div>'
	)
	.appendTo($body);
});

$('#toggleNav').click(function(){
    $('body').toggleClass('navPanel-visible');
});