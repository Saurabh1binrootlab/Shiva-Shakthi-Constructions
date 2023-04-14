// on scroll header
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 200) {
    document.getElementById("nav_bar").className = "on_scroll";
  } else {
    document.getElementById("nav_bar").className = "";
  }
}


