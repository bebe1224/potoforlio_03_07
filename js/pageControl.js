// const sections = document.querySelectorAll("section");
// sections.forEach((sect, i) => {
//     sect.addEventListener("wheel", function (e) {
//         e.preventDefault(); //wheel 다운하면 +값이 발생되고 UP -값이 발생
//         let delta = e.deltaY; // 휠의 방향을 감지함. (양수: 아래로 스크롤, 음수: 위로 스크롤)

//         if (delta < 0 && i === 0) {
//             // ===(값과 데이터 타입이 모두 같을 때만 **참(true)**을 반환)
//             // 마우스 휠을 위로 돌렸을 때(delta < 0) 첫 번째 섹션(i === 0)인 경우
//             return;
//             // 더 위로 스크롤할 수 없으므로 아무 동작도 하지 않고 함수 종료(return).
//         } else if (delta > 0 && i === sections.length - 1) {
//             // 마우스 휠을 아래로 돌렸을 때(delta > 0) 마지막 섹션(i === sections.length - 1)인 경우
//             return;
//             // 더 아래로 스크롤할 수 없으므로 아무 동작도 하지 않고 함수 종료(return).
//         }

//         let secTop =
//             delta < 0 ? sect.previousElementSibling : sect.nextElementSibling;
//         // 휠을 위로 돌리면 이전 형제 섹션, 아래로 돌리면 다음 형제 섹션을 선택
//         if (secTop) {
//             let targetSecTop = secTop.offsetTop;
//             // 이동할 섹션이 있을 경우, 그 섹션의 상단 위치(offsetTop)를 가져옴
//             window.scrollTo({ top: targetSecTop, behavior: "smooth" });
//             // 해당 섹션의 상단으로 부드럽게 스크롤
//         }
//     });
// });

// const sections = document.querySelectorAll("section");

// sections.forEach((sect, i) => {
//     const scrollableBox = sect.querySelector(".sect5-1 .list-box"); // 스크롤 가능한 박스 선택

//     sect.addEventListener("wheel", function (e) {
//         if (scrollableBox && scrollableBox.contains(e.target)) {
//             // 박스 안에 마우스가 있을 경우 박스 내부에서만 스크롤
//             return;
//         }

//         e.preventDefault(); // 기본 휠 동작 방지

//         let delta = e.deltaY; // 휠 방향 감지

//         if (delta < 0 && i === 0) {
//             // 첫 번째 섹션에서 위로 스크롤 방지
//             return;
//         } else if (delta > 0 && i === sections.length - 1) {
//             // 마지막 섹션에서 아래로 스크롤 방지
//             return;
//         }

//         let secTop =
//             delta < 0 ? sect.previousElementSibling : sect.nextElementSibling;
//         // 휠 방향에 따라 이동할 섹션 결정
//         if (secTop) {
//             let targetSecTop = secTop.offsetTop;
//             // 이동할 섹션의 상단 위치 계산
//             window.scrollTo({ top: targetSecTop, behavior: "smooth" });
//             // 부드럽게 해당 섹션으로 이동
//         }
//     });

//     // 박스 내 스크롤이 필요한 경우 기본 동작 허용
//     if (scrollableBox) {
//         scrollableBox.addEventListener("wheel", (e) => {
//             // 내부 스크롤박스의 스크롤 높이 계산
//             const maxScroll = scrollableBox.scrollHeight - scrollableBox.clientHeight;
//             const currentScroll = scrollableBox.scrollTop;

//             // 스크롤이 상단에 도달했거나 하단에 도달했을 때 기본 이벤트 막음
//             if (
//                 (e.deltaY < 0 && currentScroll <= 0) ||
//                 (e.deltaY > 0 && currentScroll >= maxScroll)
//             ) {
//                 e.preventDefault();
//             }
//         });
//     }
// });

const sections = document.querySelectorAll("section");
const scrollableBoxSelectors = [".sect4-1 .inner .list-box, .sect4-2 .inner .boxs"];

sections.forEach((sect, i) => {
  // 섹션 내에서 모든 스크롤 가능한 박스를 선택
  const scrollableBoxes = scrollableBoxSelectors
    .map((selector) => sect.querySelector(selector))
    .filter((box) => box !== null); // 존재하는 요소만 필터링

  sect.addEventListener("wheel", function (e) {
    let isInsideScrollableBox = false;

    // 스크롤 가능한 박스들 중 하나에 마우스가 있는지 확인
    scrollableBoxes.forEach((scrollableBox) => {
      if (scrollableBox.contains(e.target)) {
        isInsideScrollableBox = true;
        const maxScroll =
          scrollableBox.scrollHeight - scrollableBox.clientHeight;
        const currentScroll = scrollableBox.scrollTop;

        // 박스 내부에서만 스크롤 허용, 상단/하단에 도달 시 막음
        if (
          (e.deltaY < 0 && currentScroll <= 0) ||
          (e.deltaY > 0 && currentScroll >= maxScroll)
        ) {
          e.preventDefault();
        }
      }
    });

    // 스크롤 가능한 박스 안에 마우스가 없을 경우에만 섹션 스크롤
    if (!isInsideScrollableBox) {
      e.preventDefault();
      let delta = e.deltaY;

      if (delta < 0 && i === 0) return; // 첫 섹션에서 위로 스크롤 방지
      if (delta > 0 && i === sections.length - 1) return; // 마지막 섹션에서 아래로 스크롤 방지

      let secTop =
        delta < 0 ? sect.previousElementSibling : sect.nextElementSibling;
      if (secTop) {
        let targetSecTop = secTop.offsetTop;
        window.scrollTo({ top: targetSecTop, behavior: "smooth" });
      }
    }
  });
});

// =====
