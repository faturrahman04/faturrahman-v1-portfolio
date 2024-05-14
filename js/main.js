const hamburgerMenu = document.querySelector(
  "nav .nav-content .hamburger-menu .checkbox"
);
const sideNav = document.querySelector(".side-nav");
const container = document.querySelector(".container");

hamburgerMenu.addEventListener("click", function () {
  if (hamburgerMenu.checked == true) {
    sideNav.classList.add("click-side");
    container.style.filter = "brightness(0.4)";
  } else {
    sideNav.classList.remove("click-side");
    container.style.filter = "brightness(1)";
  }
});

function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener("click", function(e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          })
      })
  })
}
smoothScroll();
