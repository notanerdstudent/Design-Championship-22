$(window).on("load", function () {
  $(".loader-wrapper").delay(1500).fadeOut("slow");
  setTimeout(() => {
    $(".slide").removeAttr("data-aos");
  }, 2000);
});
