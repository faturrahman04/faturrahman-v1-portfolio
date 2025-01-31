const hamburgerMenu = document.querySelector(
  "nav .nav-content .hamburger-menu .checkbox"
);

const sideNav = document.querySelector(".side-nav");
const container = document.querySelector(".container");

hamburgerMenu.addEventListener("click", function () {
  if (hamburgerMenu.checked == true) {
    sideNav.classList.add("click-side");
    container.style.filter = "brightness(0.4)";
  } else if (hamburgerMenu.checked == false) {
    sideNav.classList.remove("click-side");
    container.style.filter = "brightness(1)";
  }
});

window.addEventListener("resize", function() {
  if (this.innerWidth > 768) {
    container.style.filter = "brightness(1)";
  } else if (this.innerWidth <= 768) {
    container.style.filter = "brightness(0.4)";
  }
})
if (window.innerWidth <= 768 && hamburgerMenu.checked) {
  container.style.filter = "brightness(1)";
} 

function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior : 'smooth',
      })
    })
  })
}
smoothScroll();






