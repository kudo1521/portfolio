// $('.field-title').click(function() {
//     $('#box').animate({
//     'marginTop': '200px'
//     });
// });
$(function(){
    $(".score").css({opacity:"0"});
    $(window).scroll(function (){
        $('.score').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 100){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});