import "../styles/main.scss";

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  const menuTriggers = document.querySelectorAll('#btn-menu, nav a');
  
  menuTriggers.forEach(menuTrigger => {
    menuTrigger.onclick = function(e) {
      header.classList.toggle('active');
    }
  })

  window.addEventListener('scroll', () => {
    header.classList.toggle('sticky-active', window.scrollY >= header.offsetHeight);
  });

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
