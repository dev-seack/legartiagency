$(window).on("load", () => {
  $(".loading-screen .progress-bar").animate({ width: "100%" }, function() {
    $(".loading-screen .progress-bar");
    $(".loading-screen")
      .delay(500)
      .fadeOut();
  });
});
