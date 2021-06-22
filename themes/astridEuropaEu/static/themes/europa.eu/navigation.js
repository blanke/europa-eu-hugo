jQuery(function(a) { 
    a(".sub-menu").hide(), 
    a(".main-navigation .children").hide(), 
    matchMedia("only screen and (min-width: 1024px)").matches && (
        a(".menu-item").hover(
            function() { a(this).children(".sub-menu").fadeIn().addClass("submenu-visible") }, 
            function() { a(this).children(".sub-menu").fadeOut().removeClass("submenu-visible") }), 
        a(".main-navigation li").hover(
            function() { a(this).children(".main-navigation .children").fadeIn().addClass("submenu-visible") }, 
            function() { a(this).children(".main-navigation .children").fadeOut().removeClass("submenu-visible") }
        )
    ) 
}),

jQuery(function(a) {
    var b = a(".site-header").outerHeight();
    a(".header-clone").css("height", b), a(window).resize(function() {
        var b = a(".site-header").outerHeight();
        a(".header-clone").css("height", b)
    })
}), 

jQuery(function(a) {
    var b = a(".site-header");
    a(window).scroll(function() { a(this).scrollTop() > 0 ? b.addClass("header-scrolled") : b.removeClass("header-scrolled") })
}), 

jQuery(function(a) {
    var b = 100,
        c = 400,
        d = a(".header-info");
    a(window).bind("scroll", function() {
        var e = a(document).scrollTop(),
            f = 0;
        e <= b ? f = 1 : e <= c && (f = 1 - e / c), d.css("opacity", f)
    })
})
