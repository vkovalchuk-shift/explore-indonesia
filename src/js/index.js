import "../styles/main.scss";

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 31,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-prev'
    },
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });
});
