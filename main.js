// Animate progress bars in skill sections
const progress_bars = document.querySelectorAll(".progress");

progress_bars.forEach((bar) => {
  bar.style.width = `${bar.dataset.size}%`;
});

// VARIABLES
const header = document.querySelector("header");
const burgerBtn = document.querySelector("#burger-btn");
const navMobile = document.querySelector("nav");
const navLinks = document.querySelectorAll("ul li a");
// open & close nav mobile
const showMobileMenu = () => {
  navLinks.forEach((link) => {
    link.addEventListener("click", showMobileMenu);
  });
  if (navMobile.classList.contains("responsive")) {
    navMobile.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    navMobile.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

burgerBtn.addEventListener("click", showMobileMenu);

// Toggle showing back to top button and toggle header bg on scroll

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add("bgcolorchange");
    toTopButton.style.display = "block";
  } else {
    header.classList.remove("bgcolorchange");
    toTopButton.style.display = "none";
  }
  scrollProgress();
};

// Back to top function
const toTopButton = document.querySelector("#backToTop");
const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
toTopButton.addEventListener("click", backToTop);

// scroll indicator
function scrollProgress() {
  let windowScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (windowScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  console.log(document.getElementById("myBar").style.backgroundColor);
}

// Typewriter effect
let i = 0;
function typeWriter() {
  let txt = "Welcome to my portfolio!";
  let speed = 60;
  if (i < txt.length) {
    document.querySelector(".hero_banner--text").innerHTML += txt.charAt(i);
    i++;
    console.log(txt.charAt(i));
    setTimeout(typeWriter, speed);
  }
}
window.addEventListener("DOMContentLoaded", typeWriter);
