
const videoList = document.querySelectorAll('.video-list li');
const iframe = document.getElementById('video-frame');

videoList.forEach((item) => {
    item.addEventListener('click', () => {
        const videoUrl = item.getAttribute('data-video');
        iframe.src = videoUrl; // 클릭 시에만 아이프레임 URL 설정
    });
});
// ===






