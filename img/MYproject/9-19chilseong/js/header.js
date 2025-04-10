const header = document.querySelector('header');
const h_main_menus = document.querySelectorAll('header .main_menu');
const sub_menus = document.querySelectorAll('.sub_menu');
const gnb_box = document.querySelector('nav .boxs');


// h_main_menus 클릭시 슬라이드메뉴
h_main_menus.forEach((h_main_menu) => {
    h_main_menu.addEventListener('mouseenter', () => {
        header.classList.add('active');
        sub_menus.forEach((sub_menu) => {
            sub_menu.classList.add('active');
        });
        gnb_box.classList.add('active');
        gnb_box.style.transition = '0.6s ease-in-out';
    });

    header.addEventListener('mouseleave', () => {
        header.classList.remove('active');
        sub_menus.forEach((sub_menu) => {
            sub_menu.classList.remove('active');
        });
        gnb_box.classList.remove('active');
        gnb_box.style.transition = '0.1s ease-in-out';
    });
});

// header 스크롤 방향에따라 사라지고 없어지고~~
let lastScrollY = 0; // 이전 스크롤 위치 초기화

window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY; // 현재 스크롤 위치를 가져옴

    if (currentScrollY < lastScrollY) {
        // 스크롤을 위로 올리고 있는 경우
        header.classList.remove("scrolled");
    } else {
        // 스크롤을 아래로 내리고 있는 경우
        header.classList.add("scrolled");
    }

    // 마지막 스크롤 위치를 현재 스크롤 위치로 업데이트
    lastScrollY = currentScrollY;
});



