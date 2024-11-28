// ==== sect4 swiper
const sect4swiper = new Swiper(".sect4Swiper", {
  // effect: "cards",
  // effect: "cube",
  // effect: "coverflow",
  effect: "flip",
  // effect: "fade",
  // effect: "slide",
  grabCursor: true,
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// ==== sect4-2 swiper

var sect4_2swiper = new Swiper(".sect4-2Swiper", {
   effect: "cards",
  spaceBetween: 32,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 800,  // 전환 속도를 800ms로 설정
  easing: "ease-in-out", 
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

// ==== sect4 btn 클릭 시 swiper 이동
const sect4Buttons = document.querySelectorAll(".sect4-btn");

sect4Buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const slideIndex = button.getAttribute("data-slide"); // 버튼의 data-slide 값 가져오기
    sect4swiper.slideTo(parseInt(slideIndex)); // 슬라이드 이동 (Swiper는 0부터 시작)

    sect4Buttons.forEach((btn) => btn.classList.remove("on"));
    button.classList.add("on");
  });
});
