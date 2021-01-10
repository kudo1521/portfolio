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

$(window).on('load',function(){
    // ここから文字を<span></span>で囲む記述
    $('.name').children().andSelf().contents().each(function() {
    if (this.nodeType == 3) {
    $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
    }
    });
    // ここから一文字ずつフェードインさせる記述
    $('.name').css({'opacity':1});
    for (var i = 0; i <= $('.name').children().size(); i++) {
    $('.name').children('span:eq('+i+')').delay(50*i).animate({'opacity':1},50);
    };
    });