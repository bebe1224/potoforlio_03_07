$(document).ready(function () {
    let slide = $('.y_slide');
    let itemHeight = slide.find('li').outerHeight();
    let totalItems = slide.find('li').length;

    // 복제해서 무한 루프 효과
    slide.append(slide.find('li').clone());

    let currentIndex = 0;

    function slideUp() {
        currentIndex++;
        slide.css({ transition: 'transform 2s ease-in-out', transform: `translateY(-${currentIndex * itemHeight}px)` });

        // 마지막 아이템이면 초기화 (다음 프레임에서 처리)
        if (currentIndex === totalItems) {
            setTimeout(function () {
                slide.css({ transition: 'none', transform: 'translateY(0)' });
                currentIndex = 0;
            }, 2000); // transition 시간과 동일
        }
    }

    setInterval(slideUp, 3000);
});
// ==== 자바스크립트트
// window.addEventListener('DOMContentLoaded', function () {
//     let slide = document.querySelector('.y_slide');
//     let itemHeight = slide.querySelector('li').offsetHeight;
//     let items = slide.querySelectorAll('li');
//     let totalItems = items.length;

//     // 복제해서 무한 루프 효과
//     slide.innerHTML += slide.innerHTML;

//     let currentIndex = 0;

//     function slideUp() {
//         currentIndex++;
//         slide.style.transition = 'transform 2s ease-in-out';
//         slide.style.transform = `translateY(-${currentIndex * itemHeight}px)`;

//         // 마지막 아이템이면 초기화 (다음 프레임에서 처리)
//         if (currentIndex === totalItems) {
//             setTimeout(function () {
//                 slide.style.transition = 'none';
//                 slide.style.transform = 'translateY(0)';
//                 currentIndex = 0;
//             }, 2000); // transition 시간과 동일
//         }
//     }

//     setInterval(slideUp, 3000);
// });


