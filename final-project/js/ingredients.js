$(document).ready(function () {
  $(".multiply").click(function () {
    console.log("hello");
    $(".multiply").removeClass("active");
    $(this).addClass("active");

    const multiplier = parseFloat($(this).data("multiply"));

    $(".amount").each(function () {
      const baseAmount = parseFloat($(this).data("base"));
      $(this).text((baseAmount * multiplier).toFixed(2));
    });
  });
});
