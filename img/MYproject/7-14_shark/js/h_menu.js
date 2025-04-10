const hMenu = document.querySelector('.h_menu');
const slideNav = document.querySelector('nav');

hMenu.addEventListener('click', function () {
    hMenu.classList.toggle('active'); // 햄버거 → X 아이콘 전환
    slideNav.classList.toggle('active'); // 네비게이션 메뉴 슬라이드
});
