/*=============== SHOW MENU ===============*/
// Elementlarni chaqirib olish
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu'ni ochish */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu'ni yopish */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
// ==============Remove Menu Mobile=====================
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// /* Change Background Header */
function scrollHeader() {
  const header = document.getElementById("header");
  // Skroll 50px dan oshganda 'scroll-header' class qo'shiladi
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper__pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: { slidesPerView: 3 },
    1024: { spaceBetween: 48 },
  },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup(".featured__content", {
  selectors: {
    target: ".featured__card",
  },
  animation: {
    duration: 300,
  },
});
/* Link active featured */
const linkFeatured = document.querySelectorAll(".featured__item");
function activeFeatured() {
  linkFeatured.forEach((l) => l.classList.remove("active-featured"));
  this.classList.add("active-featured");
}
linkFeatured.forEach((l) => l.addEventListener("click", activeFeatured));
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  // Agar sahifa scroll darajasi 350px dan katta bo'lsa, 'show-scroll' klassini qo'shadi
  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 400,
  // reset: true,
});
sr.reveal(".home__title");
sr.reveal(".home__subtitle", { delay: 500 });
sr.reveal(".home__elec", { delay: 600 });
sr.reveal(".home__img", { delay: 800 });
sr.reveal(".home__car-data", { delay: 900, interval: 100, orign: "bottom" });
sr.reveal(".home__button", { delay: 1000, orign: "bottom" });
sr.reveal(".about__group,  .offer__data", { orign: "left" });
sr.reveal(".about__data, .offer__img", { orign: "right" });
sr.reveal(".features__map", { delay: 600, orign: "bottom" });
sr.reveal(".features__card", { interval: 300 });
sr.reveal(".features__card, .logos__content, .footer_content", {
  interval: 100,
});
