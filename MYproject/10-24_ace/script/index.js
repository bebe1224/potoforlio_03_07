// header===
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.style.position = "relative"; // 헤더의 위치 설정
    header.style.transform = "translateY(-100%)"; // 헤더를 위로 숨김
  } else {
    header.style.position = "relative"; // 원래 위치로 되돌림
    header.style.transform = "translateY(0)"; // 보이게 함
  }
});

// header .logo ===
const one = document.querySelector("header .one");
const logo = document.querySelector("header .logo");
const twoOne = document.querySelector("header .two .two-one");

one.addEventListener("mouseenter", function () {
  logo.style.opacity = "0";
});
one.addEventListener("mouseleave", function () {
  logo.style.opacity = "1";
});

twoOne.addEventListener("mouseenter", function () {
  logo.style.opacity = "0";
});
twoOne.addEventListener("mouseleave", function () {
  logo.style.opacity = "1";
});

// sect1 스와이퍼===
var sect1swiper = new Swiper(".sect1Swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1500,
  // loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".sect1-next",
    prevEl: ".sect1-prev",
  },
});
// sect1 svg ===
const prev = document.querySelector(".sect1 .sect1-prev");
const next = document.querySelector(".sect1 .sect1-next");

prev.addEventListener("mouseenter", function () {
  this.querySelector("path").setAttribute("d", "M 40 10 Q 0 65 40 140"); // 바뀐 경로
});

prev.addEventListener("mouseleave", function () {
  this.querySelector("path").setAttribute("d", "M 40 10 Q 40 65 40 140"); // 원래 경로
});

next.addEventListener("mouseenter", function () {
  this.querySelector("path").setAttribute("d", "M 10 10 Q 50 65 10 140"); // 바뀐 경로
});

next.addEventListener("mouseleave", function () {
  this.querySelector("path").setAttribute("d", "M 10 10 Q 10 65 10 140"); // 원래 경로
});
// sect2 스와이퍼===
const sect2Swiper = new Swiper(".sect2Swiper", {
  speed: 1000,
  navigation: {
    nextEl: ".sect2-next",
    prevEl: ".sect2-prev",
  },
  // sect2 스와이퍼 슬라이드 체인지시 엑티브 추가===
  on: {
    slideChange: function () {
      const activeIndex = this.activeIndex;

      document.querySelectorAll(".btns .btn").forEach((btn) => {
        btn.classList.remove("active");
      });

      const activeButton = document.querySelector(
        `.btns .btn[data-slide="${activeIndex}"]`
      );
      if (activeButton) {
        activeButton.classList.add("active");
      }

      document.querySelectorAll(".split-texts .title").forEach((title) => {
        title.classList.remove("on");
        title.style.opacity = "0";
        title.style.zIndex = "-1";
      });
      const currentTitle = document.querySelector(
        `.btn${activeIndex + 1}-title`
      );
      if (currentTitle) {
        currentTitle.classList.add("on");
        currentTitle.style.opacity = "1";
        currentTitle.style.zIndex = "1";
      }
    },
  },
});
sect2Swiper.slideTo(0);
const firstTitle = document.querySelector(".btn1-title");
firstTitle.classList.add("on");
firstTitle.style.opacity = "1";
firstTitle.style.zIndex = "1";

// sect2 스와이퍼  다큐먼트 시작시 btn 액티브 설정===
sect2Swiper.slideTo(0);
const btns = document.querySelectorAll(".btns .btn");
btns[0].classList.add("active");

// sect2 스와이퍼  data값 가져오기===
document.querySelectorAll(".btns .btn").forEach((button) => {
  button.addEventListener("click", function () {
    const slideIndex = parseInt(this.getAttribute("data-slide"));
    sect2Swiper.slideTo(slideIndex);

    document.querySelectorAll(".btns .btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    this.classList.add("active");
  });
});

// sect2 svg ===
const sect2Prev = document.querySelector(".sect2 .sect2-prev");
const sect2Next = document.querySelector(".sect2 .sect2-next");

sect2Prev.addEventListener("mouseenter", function () {
  this.querySelector("path").setAttribute("d", "M 40 10 Q 0 65 40 140");
});
sect2Prev.addEventListener("mouseleave", function () {
  this.querySelector("path").setAttribute("d", "M 40 10 Q 40 65 40 140");
});

sect2Next.addEventListener("mouseenter", function () {
  this.querySelector("path").setAttribute("d", "M 10 10 Q 50 65 10 140");
});
sect2Next.addEventListener("mouseleave", function () {
  this.querySelector("path").setAttribute("d", "M 10 10 Q 10 65 10 140");
});
// sect3 스와이퍼 ===
var swiper = new Swiper(".sect3Swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 60,
  navigation: {
    nextEl: ".sect3-next",
    prevEl: ".sect3-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
var swiper2 = new Swiper(".sect3-1Swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 60,
  navigation: {
    nextEl: ".sect3-next",
    prevEl: ".sect3-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
var swiper3 = new Swiper(".sect3-2Swiper", { speed: 1000 });
// sect3 탭 메뉴 ===

const tabs = document.querySelectorAll(".tab-B li");
const swipers = document.querySelectorAll(".one .screen .swiper");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    swipers.forEach((swiper) => {
      swiper.style.opacity = "0";
      swiper.style.zIndex = "-1";
    });

    swipers[index].style.opacity = "1";
    swipers[index].style.zIndex = "1";

    tabs.forEach((tab) => {
      tab.classList.remove("on");
    });
    tab.classList.add("on");
  });
});
// sect3 ul li  ===
const listItems = document.querySelectorAll(".sect3 .two ul li");

listItems.forEach((item, index) => {
  item.addEventListener("click", function () {
    swiper3.slideTo(index);

    listItems.forEach((it) => {
      it.classList.remove("on");
    });

    item.classList.add("on");
  });
});
// sect3 svg ===
const sect3Prev = document.querySelector(".sect3 .sect3-prev");
const sect3Next = document.querySelector(".sect3 .sect3-next");

sect3Prev.addEventListener("mouseenter", function () {
  this.querySelector("path").setAttribute("d", "M 40 10 Q 0 65 40 140");
});
sect3Prev.addEventListener("mouseleave", function () {
  this.querySelector("path").setAttribute("d", "M 40 10 Q 40 65 40 140");
});

sect3Next.addEventListener("mouseenter", function () {
  this.querySelector("path").setAttribute("d", "M 10 10 Q 50 65 10 140");
});
sect3Next.addEventListener("mouseleave", function () {
  this.querySelector("path").setAttribute("d", "M 10 10 Q 10 65 10 140");
});
