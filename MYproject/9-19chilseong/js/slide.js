const news_prev = document.querySelector('.news .prev');
const news_next = document.querySelector('.news .next');
const listWrapper = document.querySelector('.screen .list_wrapper');
const lists = document.querySelectorAll('.screen .list');

let currentIndex = 1;
const listHeight = lists[0].offsetHeight;

// 리스트 복제 및 초기화
listWrapper.append(lists[0].cloneNode(true));
listWrapper.prepend(lists[lists.length - 1].cloneNode(true));
listWrapper.style.transform = `translateY(-${listHeight}px)`;

// 공통 함수: 슬라이드 이동
function moveSlide() {
    listWrapper.style.transition = 'transform 0.5s ease';
    listWrapper.style.transform = `translateY(-${currentIndex * listHeight}px)`;
}

// 무한 스크롤 리셋
function resetSlide() {
    if (currentIndex === 0) {
        currentIndex = lists.length;
    } else if (currentIndex === lists.length + 1) {
        currentIndex = 1;
    }
    listWrapper.style.transition = 'none';
    listWrapper.style.transform = `translateY(-${currentIndex * listHeight}px)`;
}

// 이전 버튼
news_prev.addEventListener('click', () => {
    if (currentIndex > 0) currentIndex--;
    moveSlide();
});

// 다음 버튼
news_next.addEventListener('click', () => {
    if (currentIndex < lists.length + 1) currentIndex++;
    moveSlide();
});

// 트랜지션 종료 시 리셋
listWrapper.addEventListener('transitionend', resetSlide);




