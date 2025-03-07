function handleScrollEvent() {
    const header = document.getElementById("header");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.classList.add("scrolled"); 
    } else {
        header.classList.remove("scrolled"); 
    }
}

function checkWindowSize() {
    const width = window.innerWidth;
    const header = document.getElementById("header");

    // 화면 크기가 767px 이하일 때는 스크롤 이벤트를 비활성화
    if (width <= 767) {
        window.removeEventListener("scroll", handleScrollEvent);
        // 모바일 화면에서 scrolled 클래스 제거
        header.classList.remove("scrolled");
    } else {
        window.addEventListener("scroll", handleScrollEvent);
    }
}

// 화면 크기 변경 시마다 체크
window.addEventListener("resize", checkWindowSize);

// 처음 로딩 시에도 체크
checkWindowSize();

