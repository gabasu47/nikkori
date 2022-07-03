 var $set_id = $('#slider');
 var speed = 900;
 var slide = 4000;
 var easing = 'swing';
 $set_id.each(function(){
     var $obj = $(this);
     var $tul = $obj.children('ul');
     var $tli = $obj.find('li');
     var $set_list = $obj.find('li:first');
     $tli.css({top:'0',left:'0',position:'absolute'});
     $set_list.css({left:0,display:'block',zIndex:'98'}).stop().addClass('showlist');
     setInterval(function(){
         var $ulWidth = $tul.width();
         var $show = $obj.find('.showlist');
         $show.animate({left:(-($ulWidth))},speed,easing).next().css({left:($ulWidth),display:'block',zIndex:'99'}).animate({left:'0'},speed,easing).addClass('showlist').end().appendTo($tul).css({zIndex:'98'}).removeClass('showlist');
     },slide);
 });
 