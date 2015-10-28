var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: false,
    // autoWidth:true,
    animateOut: 'fadeOut'
});
$('.play').on('click',function(){
    owl.trigger('autoplay.play.owl',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('autoplay.stop.owl')
})