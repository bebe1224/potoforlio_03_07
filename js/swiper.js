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
  slidesPerView: 1,
  centeredSlides: true,
  breakpoints: {
    767: {
      slidesPerView: 3, // 767px 이하일 때 1개 표시
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 슬라이드 변경 이벤트
sect3_1swiper.on("slideChange", function () {
  const slideIndex = sect3_1swiper.realIndex;

  // 데이터 배열
  const titles = [
    "더롱다크(1)", "빵빵이의 일상(2)", "WW2(3)", "죠스떡뽁이(4)", "빵바오(5)",
    "LIG넥스원(6)", "메이플스토리 그리드(7)", "메이플스토리 프로젝트(8)", "쌤소나이트(9)",
    "루카831(10)", "우담라이팅(11)", "웨스틴조선(12)", "뮤고박스(13)", "칠성사이다(14)",
    "청와대 국민품으로(15)", "YES24(16)", "에이스침대(17)"
  ];

  const descriptions = [
    "작품1 설명", "작품2 설명", "작품3 설명", "작품4 설명", "작품5 설명",
    "작품6 설명", "작품7 설명", "작품8 설명", "작품9 설명", "작품10 설명",
    "작품11 설명", "작품12 설명", "작품13 설명", "작품14 설명", "작품15 설명",
    "작품16 설명", "작품17 설명"
  ];

  const durations = [
    "2024년 1월 - 2024년 3월", "2024년 4월 - 2024년 6월", "2024년 7월 - 2024년 9월",
    "2024년 10월 - 2024년 12월", "2025년 1월 - 2025년 3월",
    "2024년 1월 - 2024년 3월", "2024년 4월 - 2024년 6월", "2024년 7월 - 2024년 9월",
    "2024년 10월 - 2024년 12월", "2025년 1월 - 2025년 3월",
    "2024년 1월 - 2024년 3월", "2024년 4월 - 2024년 6월", "2024년 7월 - 2024년 9월",
    "2024년 10월 - 2024년 12월", "2025년 1월 - 2025년 3월",
    "2024년 10월 - 2024년 12월", "2025년 1월 - 2025년 3월"
  ];

  const links = [
    "./MYproject/7-2_TheLongDark/index.html",
    "./MYproject/7-4_BBang1/index.html",
    "./MYproject/7-8_ww2/index.html",
    "./MYproject/7-14_shark/index.html",
    "./MYproject/7-12_BBang2/index.html",
    "#",
    "#",
    "#",
    "#",
    "./MYproject/8-26_Luca831/index.html",
    "./MYproject/9-9_udaraiting/index.html",
    "./MYproject/10-07_westinJosen/index.html",
    "./MYproject/9-10 (mugo)/index.html",
    "./MYproject/9-19chilseong/index.html",
    "./MYproject/10-10_Blue House/index.html",
    "./MYproject/10-21_yes24/index.html",
    "./MYproject/10-24_ace/index.html"
  ];

  // 데이터 업데이트
  document.getElementById("work-title").innerText = titles[slideIndex] || "제목 없음";
  document.getElementById("work-description").innerText = descriptions[slideIndex] || "설명 없음";
  document.getElementById("work-duration").innerText = durations[slideIndex] || "기간 없음";

  const linkElement = document.getElementById("work-link");
  linkElement.href = links[slideIndex] || "#";
  linkElement.target = links[slideIndex] === "#" ? "_self" : "_blank";

  // 슬라이드 카운터 업데이트
  updateSlideCounter();
});
// 슬라이드 번호 업데이트
function updateSlideCounter() {
  const currentSlide = sect3_1swiper.realIndex + 1;
  const totalSlides = sect3_1swiper.loop
    ? sect3_1swiper.slides.length - sect3_1swiper.loopedSlides * 2
    : sect3_1swiper.slides.length;

  document.querySelector(".slide-counter").textContent = `${currentSlide}/${totalSlides}`;
}
// ==== sect4-1 swiper
const sect4_1swiper = new Swiper(".sect4-1_swiper", {
  // effect: "coverflow",
  direction: "horizontal",
  slidesPerView: 1,
  // centeredSlides: true,
  spaceBetween: 32,
  mousewheel: true,
  breakpoints: {
    767: {
      slidesPerView: 4,
      direction: "vertical"
    }
  },
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
