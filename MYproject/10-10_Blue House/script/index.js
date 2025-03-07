const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
const sectLast = sections[sections.length - 1];
const sectLastTop = sectLast.offsetTop;

sections.forEach((sect, i) => {
  sect.addEventListener("wheel", function (e) {
    e.preventDefault(); //wheel 다운하면 +값이 발생되고 UP -값이 발생
    let delta = e.deltaY; // 휠의 방향을 감지함. (양수: 아래로 스크롤, 음수: 위로 스크롤)

    if (delta < 0 && i === 0) {
      // ===(값과 데이터 타입이 모두 같을 때만 **참(true)**을 반환)
      // 마우스 휠을 위로 돌렸을 때(delta < 0) 첫 번째 섹션(i === 0)인 경우
      return;
      // 더 위로 스크롤할 수 없으므로 아무 동작도 하지 않고 함수 종료(return).
    } else if (delta > 0 && i === sections.length - 1) {
      // 마우스 휠을 아래로 돌렸을 때(delta > 0) 마지막 섹션(i === sections.length - 1)인 경우
      footer.scrollIntoView({ behavior: "smooth" });
      //리턴위에 써줘야 푸터까지 내려감!!
      return;
      // 더 아래로 스크롤할 수 없으므로 아무 동작도 하지 않고 함수 종료(return).
    }

    let secTop =
      delta < 0 ? sect.previousElementSibling : sect.nextElementSibling;
    // 휠을 위로 돌리면 이전 형제 섹션, 아래로 돌리면 다음 형제 섹션을 선택
    if (secTop) {
      let targetSecTop = secTop.offsetTop;
      // 이동할 섹션이 있을 경우, 그 섹션의 상단 위치(offsetTop)를 가져옴
      window.scrollTo({ top: targetSecTop, behavior: "smooth" });
      // 해당 섹션의 상단으로 부드럽게 스크롤
    }
  });
});

// 전체 문서의 길이 페이지 전체가 3000
// console.log(document.body.scrollHeight)
// scrolly 2000까지 내렸어
// wibdow.height 1080
// 2000+1080

// ======= 푸터에서 sect5로 이동하는 명령어 ======
window.addEventListener("wheel", function (e) {
  console.log(
    `window.innerHeight: ${window.innerHeight}, window.scrollY: ${window.scrollY}`
  );
  console.log(document.body.scrollHeight, window.innerHeight + window.scrollY);

  if (
    e.deltaY < 0 &&
    window.innerHeight + window.scrollY >= document.body.scrollHeight - 10
  ) {
    e.preventDefault();
    window.scrollTo({ top: sectLastTop, behavior: "smooth" });
  }
});
// ===== sub 메뉴 보여지는 =====

const mainMenuA = document.querySelectorAll(".main-mn > a");
const MAINMN = document.querySelectorAll(".main-mn");

mainMenuA.forEach((link) => {
  link.addEventListener("mouseenter", function (e) {
    e.preventDefault();
    const subMenu = this.nextElementSibling;
    if (subMenu) {
      document.querySelectorAll(".sub-mn").forEach((menu) => {
        if (menu !== subMenu) {
          menu.style.opacity = 0;
          menu.style.maxHeight = "0";
          menu.style.zIndex = "-1";
        }
      });

      subMenu.style.opacity = "1";
      subMenu.style.maxHeight = "500px";
      subMenu.style.zIndex = "1";
    }
  });
  const subMenu = link.nextElementSibling;
  if (subMenu) {
    subMenu.addEventListener("mouseleave", function (e) {
      e.preventDefault();
      subMenu.style.opacity = "0";
      subMenu.style.maxHeight = "0";
      subMenu.style.zIndex = "-1";
    });
  }

  // 서브 메뉴에도 마우스 리브 이벤트 추가 (메뉴 영역 밖으로 나갈 때 숨기기)
});

//====== PC 헤더하고 폰트색깔 바뀌는거 ========
const header = document.querySelector("header");
const logoW = document.querySelector(".logo-w");
const logoB = document.querySelector(".logo-b");
const mainBox = document.querySelector(".main-box");
const H2WP = document.querySelector("h2 .wrap p");
const BAR = document.querySelectorAll(".bar"); 
//전부 다해야돼서 ALL씀ㅎ
//이렇게 하니까 모바일 화면할때 x도 적용되서 한참 햇갈림 ㅠㅠ

header.addEventListener("mouseenter", function () {
  header.style.backgroundColor = "white";

  logoW.style.zIndex = "-1";
  logoW.style.opacity = "0";
  logoB.style.zIndex = "1";
  logoB.style.opacity = "1";

  mainBox.style.color = "black";
  H2WP.style.color = "white";
  BAR.forEach((bar) => {
    bar.style.backgroundColor = "black";
  });
});

header.addEventListener("mouseleave", function () {
  header.style.backgroundColor = "transparent";
  logoW.style.zIndex = "1";
  logoW.style.opacity = "1";
  logoB.style.zIndex = "-1";
  logoB.style.opacity = "0";
  mainBox.style.color = "white";
  BAR.forEach((bar) => {
    bar.style.backgroundColor = "white";
  });
});
//====== 모바일헤더하고 폰트색깔 바뀌는거 ========
const MH = document.querySelector(".MH");
const W = document.querySelector(".w");
const B = document.querySelector(".b");
//bar 변수는 pc에 써놯서 선언안함!

const GLA = document.querySelector(".MH .Mgnb li a");
MH.addEventListener("mouseenter", function () {
  MH.style.backgroundColor = "white";

  W.style.zIndex = "-1";
  W.style.opacity = "0";
  B.style.zIndex = "1";
  B.style.opacity = "1";
  GLA.style.color = "black";
  BAR.forEach((bar) => {
    bar.style.backgroundColor = "black";
  });
});
MH.addEventListener("mouseleave", function () {
  MH.style.backgroundColor = "transparent";
  W.style.zIndex = "1";
  W.style.opacity = "1";
  B.style.zIndex = "-1";
  B.style.opacity = "0";
  GLA.style.color = "white";
  BAR.forEach((bar) => {
    bar.style.backgroundColor = "white";
  });
});

//====== 엑스 클릭시 레프트 100프로~ ========
const MN = document.querySelector(".mnav");
const Btn = document.querySelector(".Mgnb .Mbtn");
const btnx = document.querySelector(".btnx");

Btn.addEventListener("click", function () {
  MN.style.left = "0%";
});

btnx.addEventListener("click", function () {
  MN.style.left = "100%";
});
//======.btna 클릭시========
$(document).ready(function () {
  $(".btna").click(function () {
    $(".M-main-mn").removeClass("active").css({
      backgroundColor: "",
      color: "",
    });

    var $parent = $(this).closest(".M-main-mn");
    $parent.addClass("active").css({
      backgroundColor: "#e33a56",
      color: "#fff",
    });

    $parent.find(".M-sub-mn").css("color", "gray");

    $(".M-sub-mn").not($parent.find(".M-sub-mn")).slideUp();
    $parent.find(".M-sub-mn").slideToggle();

    $(".btna").not(this).css("transform", "rotate(0deg)");

    var cRotation = $(this).css("transform");
    if (
      cRotation === "matrix(1, 0, 0, 1, 0, 0)" ||
      // 요소가 회전하지 않은 상태
      cRotation === "none"
    ) {
      $(this).css("transform", "rotate(180deg)");
    } else {
      $(this).css("transform", "rotate(0deg)");
    }
  });
});

//  sect5 ul li====================
const listItem = document.querySelectorAll(".sect5 ul li");
const boxes = document.querySelectorAll(".sect5 .box");

listItem.forEach(function (item, index) {
  item.addEventListener("click", function () {
    boxes.forEach(function (box) {
      box.classList.remove("on");
    });

    boxes[index].classList.add("on");

    listItem.forEach(function (li) {
      li.classList.remove("on");
    });

    item.classList.add("on");
  });
});

// 펜시박스로 감싸서 이미지 호버시 sect5 box3 i-title 해결 ======
document.querySelectorAll(".sect5 .box3 .i-w").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    const title = element.querySelector(".i-title");
    title.style.opacity = "1";
  });

  element.addEventListener("mouseleave", () => {
    const title = element.querySelector(".i-title");
    title.style.opacity = "0";
  });
});

// //====== 모바일인 경우========
// const mobile = window.innerWidth <= 768;
// let subMenu = document.querySelector(".sub-mn");

// function initializeMenu() {
//   if (mobile) {
//     if (subMenu) {
//       subMenu.style.position = "static";
//     }
//   } else {
//     if (subMenu) {
//       subMenu.style.position = "absolute";
//     }
//   }
// }

// window.addEventListener("resize", initializeMenu);
// initializeMenu();

// // 특정 넓이 일 때 해당 스크립트를 적용한다
// // 모바일 일 때 모바일 스크립트를 적용해라
// //=> (768과 같거나 작을 때) 모바일 스크립트를 적용해라

// // innerWidth : 내부 너비(content + padding)
// // window.innerWidth = 1500 = 현재 해상도가
// // mobile = 768px
// // ~일 때 ~해라 => 조건문 = if()

// /*
// const

//  const currentWidth = window.innerWidth

// ||
// elementi
// if(window.innerWidth <= 768 ){
//   element.click
// }else{
//   element.mouseenter
// }

// */

// //function()
// //addClass : class 추가
// //addEventListenr : 자바스크립트에서 이벤트 추가할 때
// //
