$('.slides').slick({
    autoplay: true, //自動再生
    dots: true, //ドットの表示
    infinite:true,// 無限にスライド
    autoplaySpeed:3000,// スライドスピード
    speed:500,// スクロールスピード
    arrows: true, // 矢印の表示
    prevArrow:'<img src="../img/btn_prev.svg" alt="" class="prev_icon">',
    nextArrow:'<img src="../img/btn_next.svg" alt="" class="next_icon">'
  });