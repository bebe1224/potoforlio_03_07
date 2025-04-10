const m_menu = document.querySelector('header .m_menu')
const fix_m_menu = document.querySelector('.fix_m_menu')
const m_x = document.querySelector('.fix_m_menu .m_x')

const changes = document.querySelectorAll('.change')
const subMenus = document.querySelectorAll('.m_sub_menu')
const mainMenus = document.querySelectorAll('.m_main_menu .wrap1 b')
// 리셋함수 Frame State =====
function resetMenu() {
    $(".m_sub_menu").slideUp(400); // 모든 서브 메뉴 숨기기
    $(".change, .m_main_menu .wrap1 b").removeClass("on"); // 모든 'on' 클래스 제거
    document.body.classList.remove('no-scroll'); //  오버플로어히든
    $(".fix_m_menu").scrollTop(0);
}

// change 클릭시 m_sub_menu y축 슬라이드 토글 =====
$(".m_sub_menu").hide();

$(".change").click(function () {
    const subMenu = $(this).closest('.m_main_menu').find('.m_sub_menu');

    $(".m_sub_menu").not(subMenu).stop(true, true).slideUp(500);

    // 클릭된 서브 메뉴는 위로 푸쉬되면서 열리기
    if (subMenu.is(":hidden")) {
        subMenu.stop(true, true).slideDown(500);  // 열리기
        $(".change").removeClass("on"); //기존꺼지움
        $('.m_main_menu .wrap1 b').removeClass("on"); //기존꺼지움
        $(this).addClass("on"); //누르려하는거 추가가
        $(this).closest('.wrap1').find('b').addClass("on"); //누르려하는거 추가가

    } else {
        subMenu.stop(true, true).slideUp(500); //닫히기
        $(this).removeClass("on");
        $(this).closest('.wrap1').find('b').removeClass("on");
    }
});

// m_menu X축 슬라이드 토글 =====
m_menu.addEventListener('click', () => {
    fix_m_menu.classList.add('on')
    setTimeout(() => {
        document.body.classList.add('no-scroll'); //body 오버프로히든
    }, 400);
})
m_x.addEventListener('click', () => {
    fix_m_menu.classList.remove('on')
    setTimeout(() => {
        document.body.classList.remove('no-scroll');
    }, 50);
    resetMenu();//함수호출(컨포넌츠와비슷)
})
// ESC 키로 메뉴 닫기 =====
document.addEventListener('keydown', (e) => {
    resetMenu();//함수호출(컨포넌츠와비슷)
    if (e.key === 'Escape' && fix_m_menu.classList.contains('on')) {
        fix_m_menu.classList.remove('on');
        document.body.classList.remove('no-scroll');
    }
});

