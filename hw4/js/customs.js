$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
	dots: false,
	autoplay: true,
	autoplayTimeout: 3000,
	smartSpeed: 1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})