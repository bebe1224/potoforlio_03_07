const fixPlus = document.querySelector('.fix_plus')
const fixSns = document.querySelector('.fix_wrap .fix_sns')
const fixBanner = document.querySelector('.fix_wrap .fix_banners')
const next = document.querySelector('.sect1 .swiper-button-next')
// fix plus 클릭시
fixPlus.addEventListener('click', () => {
    const isActive = fixPlus.classList.contains('active');
    // fixPlus 요소에 active라는 클래스가 있는지 확인하는 기능
    if (isActive) {
        // 여기가 역순 active 클래스가 있으면 true
        fixBanner.classList.toggle('active');

        setTimeout(() => {
            fixSns.classList.toggle('active');
        }, 200);

        setTimeout(() => {
            fixPlus.classList.toggle('active');
        }, 400);
    } else {

        fixPlus.classList.toggle('active');

        setTimeout(() => {
            fixSns.classList.toggle('active');
        }, 200);

        setTimeout(() => {
            fixBanner.classList.toggle('active');
        }, 400);
    }
});

// fix top 클릭시
document.querySelector(".filx_top").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
    const hom = document.querySelector(".filx_top");

    if (window.scrollY === 0) {
        hom.style.opacity = "0";
    } else {
        hom.style.opacity = "1";
    }
});
