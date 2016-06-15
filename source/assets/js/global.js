//Menu
function Menu() {
  var menuToggle = $('#menu-trigger');
  var overlay = $('#overlay');
  
  menuToggle.click(function() {
    $('#main-menu').toggleClass("show");
    $(this).toggleClass("show");
  });
  overlay.click(function() {
    $('#main-menu').removeClass("show");
    $(menuToggle).removeClass("show");
  });

} // End Menu()

//Functions that run when all HTML is loaded
$(document).ready(function() {
  Menu();
});