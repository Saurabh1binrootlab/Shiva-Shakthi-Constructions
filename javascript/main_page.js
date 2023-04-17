// on scroll header transparent
window.onscroll = function() {myFunction()};
function myFunction() {
if (document.documentElement.scrollTop > 750) {
    document.getElementById("nav_bar").className = "on_scroll";
} else {
    document.getElementById("nav_bar").className = "header_container";
  }
}
