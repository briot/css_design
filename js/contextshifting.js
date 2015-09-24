function contextShifting() {
   var day = $(".day");
   
   day.on("mouseenter", function(e) {
     e.preventDefault();
     var notDay = $(".day").not($(this));
     notDay.css({opacity: 0.3});

     $(this).addClass('highlight');
   });
   
   day.on("mouseleave", function(e) {
     e.preventDefault();
     var notDay = $(".day").not($(this));
     notDay.css({opacity: 1});
     $(this).removeClass('highlight');
   });
}
