$(function () {

// ヘッダーSPドロワーメニュー
var menuBtn = $('.header_nemu_btn'),
    drawerMenu = $('.header_bottom'),
    menuBack = $('.header_sp_back');

menuBtn.on('click', function () {
  if($(this).hasClass('open')) {
    $(this).removeClass('open');
    drawerMenu.stop(true).animate({
      right: '-120%'
    }, 300);
    menuBack.css({
      display: 'none'
    });
    $('body').css({
      overflow: 'visible'
    });
  } else {
    $(this).addClass('open');
    drawerMenu.stop(true).animate({
      right: '0'
    }, 300);
    menuBack.css({
      display: 'block'
    });
    $('body').css({
      overflow: 'hidden',
    })
  }
});

// 背面をクリックでメニューを閉じる
menuBack.on('click', function () {
  menuBtn.removeClass('open');
  drawerMenu.stop(true).animate({
    right: '-120%'
  }, 300);
  menuBack.css({
    display: 'none'
  });
  $('body').css({
    overflow: 'visible'
  });
});


// マッチリザルトセクション
  var yearBtn = $('.result_year_btn'),
      yearActive = $('.result_year_wrapper:first-child .result_year_btn')
      leagueBtn = $('.league_title_btn'),
      scoreBtn = $('.match_score_btn'),
      closeBtn = $('.result_close_btn');

  // ページが読み込まれたとき2021年のタイトルが開かれた状態にする
  $(window).on ('load', function () {
    yearActive.addClass('active');
    yearActive.parent().next('div').css({
      height: 'auto'
    });
  });
  
  // 年ボタンの開閉
  yearBtn.on ('click', function () {
    var elHeight = $(this).parent().next('div'),
        curHeight = elHeight.height(),
        autoHeight = elHeight.css('height', 'auto').height();

    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      elHeight.height(curHeight).animate({
        height: autoHeight
      },{
        duration:400,
        complete:function(){
          $(this).css('height', 'auto');
        }
      });
    } else {
      $(this).removeClass('active');
      elHeight.stop(true).animate({
        height: '0px'
      }, 400);
    }
  });

  // リーグボタンの開閉
  leagueBtn.on ('click', function () {
    var elHeight = $(this).parent().next('div'),
        curHeight = elHeight.height(),
        autoHeight = elHeight.css('height', 'auto').height();

    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      elHeight.height(curHeight).animate({
        height: autoHeight
      },{
        duration:400,
        complete:function(){
          $(this).css('height', 'auto');
        }
      });
    } else {
      $(this).removeClass('active');
      elHeight.stop(true).animate({
        height: '0px'
      }, 400);
    }
  });

  // スコアボタンの開閉
  scoreBtn.on ('click', function () {
    var   elHeight = $(this).parent().parent().next('tr').children('td').children('div'),
          curHeight = elHeight.height(),
          autoHeight = elHeight.css('height', 'auto').height(),
          elButtom = $(this).parent().parent().next('tr').children('td');

    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      elHeight.height(curHeight).animate({
        height: autoHeight
      },{
        duration:400,
        complete:function(){
          $(this).css('height', 'auto');
        }
      });
      elButtom.stop(true).css({
        borderBottom: '1px solid #00744b66'
      });
    } else {
      $(this).removeClass('active');
      elHeight.stop(true).animate({
        height: '0px'
      }, 400);
      elButtom.stop(true).css({
        borderBottom: 'none'
      });
    }
  });

  // スコアクローズボタン
  closeBtn.on ('click', function () {
    var activeBtn = $(this).parent().parent().parent().prev('tr').children('td').children('button'),
        elHeight = $(this).parent().parent().children('div'),
        elButtom = $(this).parent().parent();

    activeBtn.removeClass('active');
    elHeight.stop(true).animate({
      height: '0px'
    }, 400);
    elButtom.stop(true).css({
      borderBottom: 'none'
    });
  });






});




