// JQ sect4 ul li a .on 명령어 ==================
$(".sect4 .inner ul li:first-child a").addClass("on");
$(".sect4 .inner ul li a").click(function (e) {
  e.preventDefault();
  $(".sect4 .inner ul li a").removeClass("on");
  $(this).addClass("on");
});
// 스크롤시 상단 고정 네비게이션 ==================
window.addEventListener("scroll", function () {
  let header = document.querySelector(".header-two");
  if (window.scrollY > 644) {
    header.style.position = "fixed";
    header.style.width = "100%"; //위드값이 있어야함!!
    header.style.top = "0";
    header.style.opacity = "1"; //434 아래로 내려가면 오펙1
  } else {
    header.style.position = "absolute";
    header.style.opacity = "0";
  }
});

// sect5-5 아코디언 ==================
const tabs = document.querySelectorAll(".sect5-5 .inner .one .accodion .tab");

tabs[0].classList.add("active");

tabs.forEach((tab, index) => {
  tab.addEventListener("mouseenter", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});
