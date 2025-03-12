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
  speed: 500,
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
// 초기 로딩 시 첫 번째 슬라이드 내용 표시
const slideIndex = sect3_1swiper.realIndex;
updateSlideData(slideIndex);

// 슬라이드 변경 시 데이터 업데이트
sect3_1swiper.on("slideChange", function () {
  const slideIndex = sect3_1swiper.realIndex;
  updateSlideData(slideIndex);
});

// 데이터 업데이트 함수
function updateSlideData(slideIndex) {
  // 데이터 배열
  const titles = [
    "더롱다크(1)", "빵빵이의 일상(2)", "WW2_산리오리뉴얼(3)", "죠스 떡뽁이(4)", "빵바오(5)",
    "LIG 넥스원(준비중)", "메이플스토리(준비중)", "메이플스토리(준비중)", "쌤소나이트(준비중)",
    "루카831(10)", "우담라이팅(11)", "웨스틴조선(12)", "뮤고박스(13)", "칠성사이다(14)",
    "청와대 국민품으로(15)", "YES24(16)", "에이스침대(17)"
  ];

  const descriptions = [
    "attachment: fixed,반응형", "form태그,transform 활용", "hover활용", "gsap,반응형 활용", "Animation,video활용",
    "준비중", "준비중", "준비중", "준비중", "position: sticky활용",
    "swiper,무한 루프 활용", "스크롤 기반 섹션 활성화", "클릭 이벤트 기반 탭 전환", "텍스트 애니,드롭다운메뉴,드래그", "스와이프 진입 애니, 섹션스크롤",
    "아이프레임, 스와이프 액티브,", "탭메뉴 심화, SVG"
  ];

  const durations = [
    "2~3일", "1~2일", "2~3일",
    "4~5일", "2~3일",
    "준비중", "준비중", "준비중",
    "준비중", "2~3일",
    "2~3일", "2~3일", "2~3일",
    "6~7일", "3~4일",
    "3~4일", "3~4일"
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
}

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
