const sect3_2box = document.querySelectorAll(".sect3-2 .box");
const sect3_slide = document.querySelectorAll(".sect3-2 .box .slide");
const sect3_slide_btn = document.querySelectorAll(
  ".sect3-2 .box .slide .slide-btn"
);
const sect3_2_box_move = document.querySelectorAll(".sect3-2 .box .move");

sect3_slide_btn.forEach((button) => {
  button.addEventListener("click", function () {
    const slide = button.parentElement;
    slide.style.width = "70%";
  });
});

sect3_2_box_move.forEach((move) => {
  move.addEventListener("click", function () {
    const slide = move.closest(".box").querySelector(".slide");
    slide.style.width = "100%";
  });
});
