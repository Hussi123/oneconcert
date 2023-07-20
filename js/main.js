// Initialize Swiper
let swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    grabCursor: true,//cursor
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    freeMode: false,//??????
    mousewheel: false,//o'tkazish effektlari

    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction",
    },
    navigation: {
        nextEl: ".next__btn",
        prevEl: ".prev__btn",
    },
    breakpoints: {
        300: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 20
        },
       
        768: {
            centeredSlides: true,
            slidesPerView: 3,
            spaceBetween: 20
        },
        1100: {
            centeredSlides: true,
            slidesPerView: 3,
            spaceBetween: 20
        }
    }

});


const swipers = new Swiper(".swiper-slider", {
    // Optional parameters
    keyboard: {
        enabled: true
    },

    // Enabled autoplay mode
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true
    },

    // If we need navigation
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    // Responsive breakpoints

});
