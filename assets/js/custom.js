$(document).ready(function() {
  let sectiontextcontainerheight = $(
    ".section-text-container .read-text"
  ).height();

  // sectiontextcontainerheight setup
  $(".section-text-container .read-text").addClass("collapsed");

  $(".input-group input, .input-group textarea").focus(function() {
    $(this)
      .parent()
      .children("label")
      .first()
      .addClass("focused");
  });

  $(".input-group input, .input-group textarea").focusout(function() {
    if ($(this).val().length === 0) {
      $(this)
        .parent()
        .children("label")
        .first()
        .removeClass("focused");
    }
  });

  // navigation - hide brand-name on scroll
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 50) {
      $(".brand-name-container .brand-name").fadeOut();
    } else {
      $(".brand-name-container .brand-name").fadeIn();
    }
  });
});
