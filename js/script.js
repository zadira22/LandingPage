var scroll = $(document.documentElement);
var height = $("#intro").innerHeight() - 1;

$(".scroll").click(function () {
   var scroll_to = $(this).attr("href");
   var top = $(scroll_to).offset().top;
   scroll.animate({
      scrollTop: top
   }, 1000, function () {
      if (height < scroll.scrollTop()) {
         $("#top").addClass("visible");
      }
      else {
         $("#top").removeClass("visible");
      }
   });

   return false;
});

$(window).scroll(function () {
   if (height < scroll.scrollTop()) {
      $("#top").addClass("visible");
   }
   else {
      $("#top").removeClass("visible");
   }
});

$(document).ready(function () {
   if (height < scroll.scrollTop()) {
      $("#top").addClass("visible");
   }
});