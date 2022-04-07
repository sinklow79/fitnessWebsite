const navMenuIcon = document.getElementById("nav-menu-icon");
const navMenu = document.getElementById('nav-menu');
const header = document.querySelector('.header');
console.log(navMenuIcon);
navMenuIcon.addEventListener('click', () => {
    if (navMenuIcon.classList.contains('animation')) {
        navMenuIcon.classList.add("animation1");
        navMenuIcon.classList.remove("animation");
    } else if (navMenuIcon.classList.contains('animation1')) {
        navMenuIcon.classList.add("animation");
        navMenuIcon.classList.remove("animation1");
    } else {
        navMenuIcon.classList.add("animation");
    }
    navMenu.classList.toggle('nm-animation');
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
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    }
})

// --------------------------BLOGS SWIPER--------------------------

let blogsSwiper = new Swiper (".blogsSwiper", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
})