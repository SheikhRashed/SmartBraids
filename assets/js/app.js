// @ts-nocheck

"use-strict";



window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
  
  
  
  // Back to top btn
        $(function() {
          var $htmlbody = $('html,body');
             //Top to back
        $(".top-btm").click(function(){
          $($htmlbody).animate({
              "scrollTop" : "0"
          }, 500);
  });
  
      //fade in fade out
      $(window).scroll(function(){
        var scrollValue = $(this).scrollTop();
  
        if(scrollValue >= 500){
            $(".top-btm").fadeIn();
        }else{
        $(".top-btm").fadeOut();
        }
      });
        });
  
  




$(document).ready(function(){

// Banner Slider
$('.banner_Inner').slick({
    arrows:true,
    prevArrow:'<span class="prev-arrow"><i class="fa fa-angle-left"></i></span>',
    nextArrow:'<span class="next-arrow"><i class="fa fa-angle-right"></i></span>',
    dots:false,
    autoplay:true,
});


// client Slider
$('.client_slider').slick({
    dots:true,
    arrows:false,
    autoplay: true,
    fade: false,
    autoplaySpeed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding: "60px",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
});

});

// Mixit up
var config = document.querySelector('.filters');

const mixer = mixitup(config,{
  animation: {
              animateResizeContainer: false, // required to prevent column algorithm bug
              effects: 'fade',
              duration: 450
          },
    callbacks: {
        onMixEnd: function(state) {
            $('.filters .mix').css({ /*CSS or perhaps logic here to remove gaps*/ });
        }
    }
});

// date picker
$( function() {
    $( ".date_input" ).datepicker();
  } );


// time picker
$(document).ready(function(){
    $('input[name="time"').ptTimeSelect();
});