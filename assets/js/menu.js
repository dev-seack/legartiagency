$(document).ready(function() {
  // scroll progress bar
  let docHeight = $(document).height(); // 100%
  let winHeight = $(window).height(); // offset
  let scrollDest = docHeight - winHeight; // real destination to scroll to

  // custom scrollbar functionality
  function getScrollPercent() {
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  }

  $("#scroll-progress-bar").css({ height: getScrollPercent() + "vh" });

  $(document).on("scroll", function() {
    $("#scroll-progress-bar").css({ height: getScrollPercent() + "vh" });
  });

  // event listener
  // click on menu-toggle-container
  $(".menu-toggle-container").on("click", function() {
    $(".main-menu.idle").toggleClass("openmenu");
  });

  // click on close menu button
  $(".close-button-container").on("click", function() {
    $(".main-menu.idle.openmenu").removeClass("openmenu");
  });

  // mobile menu toggle
  $(".menu-toggle-container").on("click", function() {
    if ($(".main-mobile-menu").css("display") != "none") {
      $(".main-mobile-menu").toggleClass("open");
      $(".menu-arrow").toggleClass("rotate-180");
      $(".main-navigation").toggleClass("fadeOut");
    } else {
      $(".main-menu").addClass("open");
    }
  });

  // desktop menu toggle
  $(
    ".main-menu .inner-container .controller-container .closebutton-container"
  ).on("click", function() {
    console.log("test");

    $(".main-menu").removeClass("open");
  });
});
