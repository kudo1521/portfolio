$('.thanks p').fadeIn(7000);
$(function(){
    $(".score-image").css({opacity:"0"});
    $(window).scroll(function (){
        $('.score-image').each(function(){
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

// アニメーションさせたいクラス
var container = $(".name");
// アニメーションスピード
var speed = 300;
// テキストの間にスペースを入れます
var content = $(container).html();
var text = $.trim(content);
var newHtml = "";
// スペースで区切ったテキストを、テキストの数だけspanで囲む
text.split("").forEach(function(v) {
newHtml += '<span>' + v + '</span>';
});
// spanで囲んだテキスト群をHTMLに戻す
$(container).html(newHtml);
// 1文字ずつ表示
var txtNum = 0;
setInterval(function() {
$(container).find('span').eq(txtNum).css({opacity: 1});
txtNum++
}, speed);

$(function(){
    $(".ef").css({opacity:"0"});
    $(window).scroll(function (){
        $('.ef').each(function(){
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
// スムーススクロール
$(function(){
    // #で始まるリンクをクリックしたら実行されます
    $('a[href^="#"]').click(function() {
        var speed = 400; // ミリ秒で記述
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});

$(function() {
    let tabs = $(".tab"); // tabのクラスを全て取得し、変数tabsに配列で定義
    $(".tab").on("click", function() { // tabをクリックしたらイベント発火
      $(".active").removeClass("active"); // activeクラスを消す
      $(this).addClass("active"); // クリックした箇所にactiveクラスを追加
      const index = tabs.index(this); // クリックした箇所がタブの何番目か判定し、定数indexとして定義
      $(".content").removeClass("show").eq(index).addClass("show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
    })
})

$('.regular').slick({
    autoplay:true,
    autoplaySpeed:3000
});