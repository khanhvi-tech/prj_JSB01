$(document).ready(function () {
  $(".open").click(function () {
   $(".popup").fadeIn(500);
   $(".cover").fadeTo(500, 0.5);
});
$(".close").click(function () {
   $(".popup").fadeOut(500);
   $(".cover").fadeOut(500);
});
});
  