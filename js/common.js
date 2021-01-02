$('.thanks p').fadeIn(5000);
$(function(){
    $(".score").css({opacity:"0"});
    $(window).scroll(function (){
        $('.score').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});
$('.accordion').click(function () {
    $(this).next().slideToggle(300);
});
