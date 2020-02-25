$(document).ready(function() {
  // scroll progress bar
  let docHeight = $(document).height(); // 100%
  let winHeight = $(window).height(); // offset
  let scrollDest = docHeight - winHeight; // real destination to scroll to

  // custom scrollbar functionality
  var scrollProgress = Math.floor(($(document).scrollTop() / scrollDest) * 100);

  $("#scroll-progress-bar").css({ height: scrollProgress + "vh" });

  $(document).on("scroll", function() {
    var scrollProgress = Math.floor(
      ($(document).scrollTop() / scrollDest) * 100
    );

    $("#scroll-progress-bar").css({ height: scrollProgress + "vh" });
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

  // click event on every other element than menu -> close menu
  // TODO!
});
