
// sect1 스와이퍼 =====
const sect1_swiper = new Swiper(".sect1_Swiper", {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoplay: {
        delay: 4000,
    },
    // 슬라이드 전환시 gsap 애니메이션 시작함수
    on: {
        slideChange: function () {
            const currentSlideTitle = this.slides[this.activeIndex].querySelector('.sect1_Swiper .title');
            gsap.fromTo(currentSlideTitle, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, delay: 1 });
        }
    }
});
// 버튼 클릭 시 자동 재생 정지/시작 =====
const controlBtn = document.querySelector('.swiper-control-btn');
controlBtn.addEventListener('click', function () {
    if (sect1_swiper.autoplay.running) {
        sect1_swiper.autoplay.stop();  // 자동 재생 멈춤
        // controlBtn.textContent = '▶️ ';  // 버튼 텍스트 변경
        controlBtn.innerHTML = '<img src="./img/swiper/sect1/Play.png" alt="play">'; // 버튼 텍스트 변경
        controlBtn.classList.remove('pause');
        controlBtn.classList.add('play');
    } else {
        sect1_swiper.autoplay.start();  // 자동 재생 시작
        controlBtn.innerHTML = '<img src="./img/swiper/sect1/pause.png" alt="pause">'; // 버튼 텍스트 변경
        controlBtn.classList.remove('play');
        controlBtn.classList.add('pause');
    }
});

// sect4 스와이퍼 =====
const sect4_Swiper = new Swiper(".sect4_Swiper", {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    loopAdditionalSlides: 0, //가짜 슬라이드
    pagination: {
        el: ".sect4-swiper-pagination",
        clickable: true,
    },
});


