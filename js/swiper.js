// ==== sect3-1 swiper
const sect3_1swiper = new Swiper(".sect3-1Swiper", {
  // effect: "cards",
  // effect: "cube",
  effect: "coverflow",
  // effect: "flip",
  // effect: "fade",
  // effect: "slide",
  grabCursor: true,
  loop: true,
  speed: 600,
  slidesPerView: 3,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 슬라이드가 변경될 때마다 호출되는 이벤트 
//근데 이거 해버리니까
sect3_1swiper.on("slideChange", function () {
  // 현재 슬라이드의 index 가져오기
  const slideIndex = sect3_1swiper.realIndex;

  // 각 슬라이드에 맞는 데이터 설정
  const titles = [
    "더롱다크(1)",
    "빵빵이의 일상(2)",
    "WW2(3)",
    "죠스떡뽁이(4)",
    "빵바오(5)",
    "LIG넥스원(6)",
    "메이플스토리 그리드(7)",
    "메이플스토리 프로젝트(8)",
    "쌤소나이트(9)",
    "루카831(10)",
    "우담라이팅(11)",
    "웨스틴조선(12)",
    "뮤고박스(13)",
    "칠성사이다(14)",
    "청와대 국민품으로(15)",
    "YES24(16)",
    "에이스침대(17)",
  ];

  const descriptions = [
    "작품1 설명",
    "작품2 설명",
    "작품3 설명",
    "작품4 설명",
    "작품5 설명",
    "작품6 설명",
    "작품7 설명",
    "작품8 설명",
    "작품9 설명",
    "작품10 설명",
    "작품11 설명",
    "작품12 설명",
    "작품13 설명",
    "작품14 설명",
    "작품15 설명",
    "작품16 설명",
    "작품17 설명",
  ];

  const durations = [
    "2024년 1월 - 2024년 3월",
    "2024년 4월 - 2024년 6월",
    "2024년 7월 - 2024년 9월",
    "2024년 10월 - 2024년 12월",
    "2025년 1월 - 2025년 3월",
    "2024년 1월 - 2024년 3월",
    "2024년 4월 - 2024년 6월",
    "2024년 7월 - 2024년 9월",
    "2024년 10월 - 2024년 12월",
    "2025년 1월 - 2025년 3월",
    "2024년 1월 - 2024년 3월",
    "2024년 4월 - 2024년 6월",
    "2024년 7월 - 2024년 9월",
    "2024년 10월 - 2024년 12월",
    "2025년 1월 - 2025년 3월",
    "2024년 10월 - 2024년 12월",
    "2025년 1월 - 2025년 3월",
  ];

  const links = [
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
  ];

  // 해당 슬라이드에 맞는 정보 업데이트
  document.getElementById("work-title").innerText = titles[slideIndex];
  document.getElementById("work-description").innerText =
    descriptions[slideIndex];
  document.getElementById("work-duration").innerText = durations[slideIndex];
  document.getElementById("work-link").href = links[slideIndex];
  updateSlideCounter();
});
// 슬라이드 번호 업데이트 함수
function updateSlideCounter() {
  const currentSlide = sect3_1swiper.realIndex + 1; // 현재 슬라이드 번호 (1부터 시작)
  const totalSlides = sect3_1swiper.loop
    ? sect3_1swiper.slides.length - sect3_1swiper.loopedSlides * 2 // 무한 반복 시 실제 슬라이드 개수
    : sect3_1swiper.slides.length; // 무한 반복이 아닐 경우 전체 슬라이드 개수

  document.querySelector(
    ".slide-counter"
  ).textContent = `${currentSlide}/${totalSlides}`; // 슬라이드 번호 업데이트
}





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
  speed: 800, // 전환 속도를 800ms로 설정
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
