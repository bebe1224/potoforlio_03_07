window.addEventListener("load", function () {
    // 새로고침 후 스크롤 위치가 저장된 값이 있으면 해당 위치로 이동
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
    }
});

// 페이지가 새로 고침될 때 현재 스크롤 위치 저장
window.addEventListener("beforeunload", function () {
    sessionStorage.setItem("scrollPosition", window.scrollY);
});
