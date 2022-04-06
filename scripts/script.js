const navLabel = document.querySelector(".nav-label");
const navMenu = document.getElementById('nav-menu');
const header = document.querySelector('.header');
navLabel.addEventListener('click', () => {
    navMenu.classList.toggle('animation');
})

// ---------------HEADER BACKGROUND WHEN SCROLLING---------------

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY >= 30) {
        header.classList.add("animation");
    } else {
        header.classList.remove("animation");
    }
})

// -------------CLOSE MENU WHEN SOMETHING IS CLICKED-------------

const navLinks = document.querySelectorAll('.nav__link');
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        navMenu.classList.remove('animation');
    })
}
window.addEventListener('click', (e) => {
    const navList = document.querySelector('.nav__list');
    const navLabel = document.querySelector('.nav-label');
    const navInput = document.getElementById('nav-input');
    if (e.target !== navLabel && e.target !== navInput) {
        navMenu.classList.remove('animation');
    }
})

// -----------------------HOME SWIPER-----------------------

let homeSwiper = new Swiper (".homeSwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})

// -----------------------HOME SWIPER-----------------------

let testimonialsSwiper = new Swiper (".testimonialsSwiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    spaceBetween: 3,
    breakpoints: {
        
    }
})

// --------------------------BLOGS SWIPER--------------------------

let blogsSwiper = new Swiper (".blogsSwiper", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
    },
})