$(document).ready(function() {
  // projectfilter-collapse-trigger
  $("#projectfilter-collapse-trigger").on("click", function() {
    $("#projectfilter-list").toggleClass("collapsed");
  });

  $(".no-category-items-found-container").fadeOut(0);

  // mix it up code
  var config = {
    animation: {
      enable: true,
      reverseOut: true,
      easing: "ease-in-out",
      effects: "fade translateZ(-100px) stagger(100ms)",
      animateResizeContainer: true,
      animateResizeTargets: true
    },
    callbacks: {
      onMixFail: function(state) {
        $(".portoflio-selection-wrapper").fadeOut(300, function() {
          $(".no-category-items-found-container").fadeIn(300);
        });
      },
      onMixClick: function(state, originalEvent) {
        $(".no-category-items-found-container").fadeOut(300, function() {
          $(".portoflio-selection-wrapper")
            .delay(300)
            .fadeIn(300);
        });
      }
    }
  };

  var mixer = mixitup(".portoflio-selection-wrapper", config);
});
