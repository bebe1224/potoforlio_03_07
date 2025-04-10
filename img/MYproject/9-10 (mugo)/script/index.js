const aElems = document.querySelectorAll(".friend li a");
aElems.forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    aElems.forEach(function (a) {
      a.classList.remove("on");
    });
    this.classList.add("on");
    let href = this.getAttribute("href");
    // alert(href)
    document.querySelectorAll("article").forEach(function (art) {
      art.classList.remove("on");
    });
    document.querySelector(href).classList.add("on");
  });
});

// function bannerRotate() {
//   $(".rotate").animate({ rotate: "+=10deg" }, "50", "linear"); // 시간 50은 숫자로 변경
// }

// let stopId;
// $(".quick").mouseenter(function () {
//   stopId = setInterval(bannerRotate, 50);
// });

// $(".quick").mouseleave(function () {
//   // 선택자에 . 추가
//   $(".rotate").stop(1, 0); // 선택자에 . 추가
//   clearInterval(stopId);
// });
