const sections = document.querySelectorAll("section");
const scrollableBoxSelectors = [".sect4-1 .inner .swiper_wrap, .sect5 .position3_modal"];

sections.forEach((sect, i) => {
  // 섹션 내에서 모든 스크롤 가능한 박스를 선택
  const scrollableBoxes = scrollableBoxSelectors
    .map((selector) => sect.querySelector(selector))
    .filter((box) => box !== null); // 존재하는 요소만 필터링

  sect.addEventListener("wheel", function (e) {

    // // .sect4-1에서는 일반 스크롤을 허용
    // if (sect.classList.contains("sect4-1")) {
    //   return; // 이 섹션은 아무 처리도 하지 않고, 기본 스크롤이 동작하도록 함
    // }

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
