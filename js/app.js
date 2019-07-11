$(function(){

    function getMorning(){
      $('#night_').animate({opacity: '0'},3000,'easeInCubic');
      $('#ball').animate({bottom: '80%'},3000,'easeInCubic',function(){
          getNight();
      });

    }

    function getNight(){
      $('#night_').animate({opacity: '1'},3000,'easeInCubic');
      $('#ball').animate({bottom: '-9%'},3000,'easeInCubic',function(){
          getMorning();
      });
    }

    setTimeout(getMorning,1000);

});
