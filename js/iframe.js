// document.addEventListener('DOMContentLoaded', () => {
//     const videoFrame = document.getElementById('video-frame');
//     const videoListItems = document.querySelectorAll('.video-list li');

//     videoListItems.forEach(item => {
//         item.addEventListener('click', () => {
//             const videoSrc = item.getAttribute('data-video');
//             videoFrame.src = videoSrc; // iframe src 업데이트
//         });
//     });
// });

const videoList = document.querySelectorAll('.video-list li');
const iframe = document.getElementById('video-frame');

videoList.forEach((item) => {
    item.addEventListener('click', () => {
        const videoUrl = item.getAttribute('data-video');
        iframe.src = videoUrl; // 클릭 시에만 아이프레임 URL 설정
    });
});




