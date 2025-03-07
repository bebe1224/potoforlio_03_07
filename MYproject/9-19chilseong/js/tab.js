const tabBoxes = document.querySelectorAll('.sect3 .tab_box');
const tabBtns = document.querySelectorAll('.sect3 .tab_btn');
const trickBoxs = document.querySelectorAll('.sect3 .trick_box')
const tabSurcle = document.querySelector('.tab_surcle');

// tab_btn 클릭시 index 번째 tab_box 가 나옴 =====
tabBtns.forEach((tabBtn, index) => {
    tabBtn.addEventListener('click', () => {
        tabBoxes.forEach((tabBox) => tabBox.classList.remove('on'));

        tabBtns.forEach((btn) => btn.classList.remove('on'));
        trickBoxs.forEach((trickBox) => trickBox.classList.remove('up'))

        tabBoxes[index].classList.add('on');
        tabBtns[index].classList.add('on');
        trickBoxs[index].classList.add('up');

        // 애니메이션 실행 gsap
        animateTabBoxElements(tabBoxes[index]);

        doAni();
    });
});
// tab_btn클릭시  .tab_surcle이 움직임 =====
function doAni(active) {
    let left = active.offsetLeft; // 선택된 탭의 왼쪽 위치
    let wid = active.offsetWidth / 2; // 절반 너비
    tabSurcle.style.left = `${left + wid - 5}px`;
    tabSurcle.style.transition = '0.3s ease-in-out';
}
// 초기 동작
const firstTab = document.querySelector('.sect3 .tab_btns .tab_btn');
if (firstTab) {
    doAni(firstTab);
}
$(".sect3 .tab_btn").click(function (e) {
    e.preventDefault();
    $(".sect3 .tab_btn").removeClass("active");
    $(this).addClass("active");
    doAni(this); // 클릭된 탭으로 원을 이동
});






