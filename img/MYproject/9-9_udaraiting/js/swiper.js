const swiper1 = new Swiper(".sect2_swiper", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        // 사용자 조작 후에도 자동 슬라이드 유지
    },
    speed: 1000,// 전환 속도 (1000ms = 1초)
    effect: 'fade',
    fadeEffect: {
        // crossFade: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//  슬라이드 자동변화에 맞게 바뀌는 리스트 글작 색 
const menuItems = document.querySelectorAll('.sect2_menus li');

// 초기 상태에서 2번째 li(등기구)에 색상 적용
menuItems[1].style.color = '#f47a20';

swiper1.on('slideChange', function () {
    let activeIndex = swiper1.realIndex;  // 현재 활성 슬라이드 인덱스
    console.log("현재 슬라이드 인덱스:", activeIndex);

    // 모든 li 초기화 (2~6번째만 초기화)
    menuItems.forEach((item, index) => {
        if (index >= 1 && index <= 5) {
            item.style.color = '';  // 기본 색상으로 초기화
        }
    });

    // 인덱스 매핑 (슬라이드 0번이 li의 2번(등기구)과 매칭)
    let targetIndex = (activeIndex % 5) + 1;
    console.log("타겟 li 인덱스:", targetIndex);

    // 2~6번째 li만 글자색 변경
    if (targetIndex >= 1 && targetIndex <= 5) {
        menuItems[targetIndex].style.color = '#f47a20';
    }
});

// 메뉴 클릭 이벤트 (2~6번째 li만 슬라이드 전환)
menuItems.forEach((item, index) => {
    if (index >= 1 && index <= 5) {
        item.addEventListener('click', function () {
            swiper1.slideToLoop(index - 1);  // 클릭한 li에 맞는 슬라이드로 이동
        });
    }
});

