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

  // scroll on rotation
  (function() {
    var throttle = function(type, name, obj) {
      var obj = obj || window;
      var running = false;
      var func = function() {
        if (running) {
          return;
        }
        running = true;
        requestAnimationFrame(function() {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
      obj.addEventListener(type, func);
    };
    throttle("scroll", "optimizedScroll");
  })();

  var rotationObject = document.getElementById("stamp");
  if (rotationObject) {
    // to use the script *without* anti-jank, set the event to "scroll" and remove the anonymous function.

    window.addEventListener("optimizedScroll", function() {
      rotationObject.style.transform =
        "rotate(-" + window.pageYOffset / 3 + "deg)";
    });
  }
});
