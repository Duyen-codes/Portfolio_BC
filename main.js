// Animate progress bars
const progress_bars = document.querySelectorAll(".progress");

progress_bars.forEach((bar) => {
  console.log(bar.dataset);
  // const { size } = bar.dataset;
  // bar.style.width = `${size}%`;
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
  navMobile.classList.toggle("responsive");
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
};

// Back to top function
const toTopButton = document.querySelector("#backToTop");

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
toTopButton.addEventListener("click", backToTop);
