const swiper = new Swiper('.swiper-use-cases', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

const swiperTeam = new Swiper(".swiper-team", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1920: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});