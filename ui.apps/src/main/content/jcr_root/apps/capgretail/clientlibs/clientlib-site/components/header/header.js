$('.cmp-layoutcontainer--header .languagenavigation').prepend('<a id="lang-nav" class="cmp-languagenavigation--toggle" aria-label="Language Navigation"> <span class="cmp-languagenavigation__icon--toggle"></span></a>');
$('.cmp-layoutcontainer--header .search').prepend('<a id="search" class="cmp-search--toggle" aria-label="Search"> <span class="cmp-search__icon--toggle"></span> </a>');

$('.cmp-search--toggle').click(function(){
	$(this).addClass('hide'); 
	$(this).parent().find('.cmp-search').css('display','block').removeClass('hide');
    $('.cmp-button--contact').addClass('cmp-button--shorten');
});

$('.cmp-languagenavigation--toggle').click(function(e){
    e.stopPropagation();
    $(this).removeClass('hide');
    $('.cmp-search').addClass('hide'); 
    $('#search').removeClass('hide');
	$(this).parent().find('.cmp-languagenavigation').css('display','block').removeClass('hide');
});

$('.cmp-search__input').blur(function(){
	$('.cmp-search').addClass('hide'); 
	$('#search').removeClass('hide');
    $('.cmp-button--contact').removeClass('cmp-button--shorten');
});

$('body').click(function(){
	$('.cmp-languagenavigation').addClass('hide');
});

var s = $("body");
var pos = s.position();	

if($(window).width() > 420) {
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos > (pos.top+100)) {
            s.addClass("scrolly");
        } else {
            s.removeClass("scrolly");	
        }
    });
} else {
    s.addClass("scrolly");
}
