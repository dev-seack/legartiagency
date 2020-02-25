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

  $(".expand-information-trigger").on("click", function() {
    $(".expand-information-trigger span").toggleClass("expand");
    // expand
    $(".section-text-container .read-text.collapsed")
      .animate(
        {
          height: sectiontextcontainerheight
        },
        300,
        function() {
          $(".section-text-container .read-text")
            .addClass("expand")
            .removeClass("collapsed");
        }
      )
      .css({ display: "block" });

    // back
    $(".section-text-container .read-text.expand").animate(
      {
        height: 0
      },
      300,
      function() {
        $(".section-text-container .read-text")
          .removeClass("expand")
          .addClass("collapsed");
        $(this)
          .delay(300)
          .css({ display: "none" });
      }
    );
  });
});
