$(document).ready(function() {
  const interval = 1500;
  // setup
  // hide every swap item but the first
  $(".swap-item:first").addClass("active");
  $(".swap-item:not(:first)").addClass("hidden");

  // set interval for swapping
  setInterval(function() {
    swapImage();
  }, interval);
});

function swapImage() {
  // get active swap item and get its index value
  const activeIndex = $(".swap-item.active").data("swapindex");
  // activate the next one - loop
  $(".swap-item.active")
    .removeClass("active")
    .addClass("hidden");
  $(
    `.swap-item[data-swapindex='${(activeIndex % $(".swap-item").length) + 1}']`
  )
    .removeClass("hidden")
    .addClass("active");
}
