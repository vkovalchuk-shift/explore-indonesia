import "../styles/main.scss";

document.addEventListener('DOMContentLoaded', function () {
  class SecretsSlider extends HTMLElement {
    constructor () {
      super();
      this.swiper = null;
    }

    connectedCallback () {
      this.swiperEl = this;
      this.pagination = this.querySelector('.swiper-pagination');
      this.initSwiper();
    }

    initSwiper () {
      if (!this.swiperEl) return;

      this.swiper = new Swiper(this.swiperEl, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 31,
        pagination: {
          el: this.pagination,
          clickable: true
        },
        // navigation: {
        //   nextEl: '.arrow-right',
        //   prevEl: '.arrow-left'
        // },
        breakpoints: {
          576: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          }
        }
      });
    }

    disconnectedCallback() {
      if (this.swiper && !this.swiper.destroyed) {
        this.swiper.destroy(true, true);
        this.swiper = null;
      }
    }
  }

  if (!customElements.get('secrets-slider')) {
    customElements.define('secrets-slider', SecretsSlider)
  }
});