import "./styles/main.scss";

import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
  Thumbs,
} from "swiper";
import { YandexMap } from "./scripts/yandex-map";
import accordionInit from "./scripts/accordion";

Swiper.use([Navigation, Pagination]);

function bootstrap() {
  const map = new YandexMap("map", [55.731303, 37.56812]);
  const map2 = new YandexMap("map2", [39.95679, 116.292232]);

  const swiper = new Swiper(".first__swiper", {
    modules: [Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Thumbs],
    slidesPerView: 1.45,
    loopedSlides: 1,
    spaceBetween: 14,

    direction: "horizontal",
    loop: true,
    centeredSlides: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-controls__next",
      prevEl: ".swiper-controls__prev",
    },
  });

  const swiper2 = new Swiper(".third__swiper", {
    modules: [Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Thumbs],
    slidesPerView: 1.5,
    loopedSlides: 1,

    direction: "horizontal",
    loop: true,
    spaceBetween: 10,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-controls__next",
      prevEl: ".swiper-controls__prev",
    },
  });

  const swiper3 = new Swiper(".fourth__swiper", {
    modules: [Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Thumbs],
    slidesPerView: 1,
    loopedSlides: 1,
    direction: "horizontal",
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-controls__next",
      prevEl: ".swiper-controls__prev",
    },
  });

  const swiper4 = new Swiper(".fifth__swiper", {
    modules: [Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Thumbs],
    slidesPerView: 1.3,
    loopedSlides: 1,
    direction: "horizontal",
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-controls__next",
      prevEl: ".swiper-controls__prev",
    },
  });

  const swiper5 = new Swiper(".sixth__swiper", {
    modules: [Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Thumbs],
    slidesPerView: 1.45,
    loopedSlides: 1,

    direction: "horizontal",
    loop: true,
    spaceBetween: 10,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-controls__next",
      prevEl: ".swiper-controls__prev",
    },
  });

  const swiper6 = new Swiper(".seven__swiper", {
    modules: [Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Thumbs],
    slidesPerView: 1.45,
    loopedSlides: 1,

    direction: "horizontal",
    loop: true,
    spaceBetween: 10,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-controls__next",
      prevEl: ".swiper-controls__prev",
    },
  });

  const swiper7 = new Swiper(".eleven__swiper", {
    modules: [Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Thumbs],
    slidesPerView: 1.45,
    loopedSlides: 1,

    direction: "horizontal",
    loop: true,
    spaceBetween: 10,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-controls__next",
      prevEl: ".swiper-controls__prev",
    },
  });

  accordionInit();
}

bootstrap();
