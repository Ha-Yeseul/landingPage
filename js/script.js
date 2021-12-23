$(document).ready(function () {
  // intro
  var offset = $(".intro").offset();
  var introTop = offset.top;
  var introHeight = $(".intro").outerHeight();

  // gift
  var offset = $(".gift").offset();
  var giftTop = offset.top;
  var giftHeight = $(".gift").outerHeight();

  
  $(window).scroll(function () { 
    var win = $(this).scrollTop();
    if(introTop / 2 <= win && introTop + (introHeight / 2) >= win){
      $(".intro li").addClass("bottom");
      $(".intro h2").addClass("left");
      $(".intro h2::before").addClass("left")
    }
    else if( introTop + (introHeight / 2) < win && giftTop - (giftHeight / 3) ){
      // add
      $(".gift li").addClass("bottom");
      $(".gift h2").addClass("left");
      $(".gift h2::before").addClass("left");
      $(".gift > p").addClass("up");
      $(".gift >p span::before").css("width","200");

      $(".intro li").removeClass("bottom");
      $(".intro h2").removeClass("left");
      $(".intro h2::before").removeClass("left");
    }

    // remove
    else{
      $(".intro li").removeClass("bottom");
      $(".intro h2").removeClass("left")
      $(".intro h2::before").removeClass("left")
    }
    
  });
});