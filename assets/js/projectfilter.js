$(document).ready(function() {
  // projectfilter-collapse-trigger
  $("#projectfilter-collapse-trigger").on("click", function() {
    $("#projectfilter-list").toggleClass("collapsed");
  });

  // show only items with category click on projectfilter-item
  $(".projectfilter-item").on("click", function() {
    // first hide the no-category-items found container
    $(".no-category-items-found-container").fadeOut(500);
    const category = $(this).data("filtercategory"); // get the selected category name

    // if there are no items in the selected category
    // show no-category-items-found-container
    if ($(`.portfolio-selection-item.${category}`).length == 0) {
      $(".no-category-items-found-container").fadeIn(500);
    }
    $(".portfolio-selection-item")
      .not(`.${category}`)
      .fadeOut(500); // hide every item which does not match the selected category
    $(`.portfolio-selection-item.${category}`).fadeIn(1000); // ... and apparetnly remvive the hidden status from the selected
    $(".projectfilter-item.active").removeClass("active"); // remove the active state from whichever element was active before
    $(this).addClass("active"); // .. and add the active state to the clicked one
  });
});
