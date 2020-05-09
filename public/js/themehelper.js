
(function(){

window.onload = function () {
  //Handles theme loading on reload
    if (localStorage.getItem("preference-theme") === null) {
        localStorage.setItem("preference-theme", "dark");
    }
    if (localStorage.getItem("preference-theme") === 'light') {
      // Toggle from dark to light if prefered theme is white 
    document.getElementById("preloader").classList.add('light');
    document.getElementById("mobile_header").classList.add('light');
    document.getElementById("mobile_navbar").classList.remove('navbar-dark');
    document.getElementById("mobile_navbar").classList.add('navbar-light');
    document.getElementById("body_theme").classList.remove('dark');
    document.getElementById("body_theme").classList.add('light');
    document.getElementById("desktop_head").classList.add('light');
    document.getElementById("home").classList.add('light'); 
    document.getElementById("theme-switch-btn-mobile").classList.add('light');
    document.getElementById("theme-switch-btn").classList.add('light');
    document.getElementById("my_info").classList.remove('bg-dark');
    document.getElementById("my_info").classList.add('bg-light');
    document.getElementById("my_info").classList.remove('shadow-light');
    document.getElementById("my_info").classList.add('shadow-dark');
    document.getElementById("dl").classList.remove('shadow-light');
    document.getElementById("dl").classList.remove('bg-dark');
    document.getElementById("dl").classList.add('shadow-dark');
    document.getElementById("dl").classList.add('bg-light');
  }
    if (localStorage.getItem("preference-theme") === 'dark') {
      return
    }
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("mobile_header").style.top = "0";
  } else {
    document.getElementById("mobile_header").style.top = "-450px";
  }
  prevScrollpos = currentScrollPos;
}

function ToggleTheme(){
  value = localStorage.getItem('preference-theme');
    if (value === 'dark'){
    // Toggle from dark to light 
    document.getElementById("preloader").classList.add('light');
    document.getElementById("mobile_header").classList.add('light');
    document.getElementById("mobile_navbar").classList.remove('navbar-dark');
    document.getElementById("mobile_navbar").classList.add('navbar-light');
    document.getElementById("body_theme").classList.remove('dark');
    document.getElementById("body_theme").classList.add('light');
    document.getElementById("desktop_head").classList.add('light');
    document.getElementById("home").classList.add('light'); 
    document.getElementById("theme-switch-btn-mobile").classList.add('light');
    document.getElementById("theme-switch-btn").classList.add('light');
    document.getElementById("my_info").classList.remove('bg-dark');
    document.getElementById("my_info").classList.add('bg-light');
    document.getElementById("my_info").classList.remove('shadow-light');
    document.getElementById("my_info").classList.add('shadow-dark');
    document.getElementById("dl").classList.remove('shadow-light');
    document.getElementById("dl").classList.remove('bg-dark');
    document.getElementById("dl").classList.add('shadow-dark');
    document.getElementById("dl").classList.add('bg-light');
      localStorage.setItem("preference-theme", "light");
  }
  else if (value == 'light'){
  // Toggle from light to dark 
    document.getElementById("mobile_header").classList.remove('light')
    document.getElementById("mobile_navbar").classList.remove('navbar-light');
    document.getElementById("mobile_navbar").classList.add('navbar-dark');
    document.getElementById("body_theme").classList.remove('light');
    document.getElementById("body_theme").classList.add('dark');
    document.getElementById("desktop_head").classList.remove('light');
    document.getElementById("home").classList.remove('light');
    document.getElementById("theme-switch-btn-mobile").classList.remove('light');
    document.getElementById("theme-switch-btn").classList.remove('light');
    document.getElementById("my_info").classList.add('bg-dark');
    document.getElementById("my_info").classList.remove('bg-light');
    document.getElementById("my_info").classList.add('shadow-light');
    document.getElementById("my_info").classList.remove('shadow-dark');
    document.getElementById("dl").classList.add('shadow-light');
    document.getElementById("dl").classList.add('bg-dark');
    document.getElementById("dl").classList.remove('shadow-dark');
    document.getElementById("dl").classList.remove('bg-light');
    localStorage.setItem("preference-theme", "dark");
    }
}

}());