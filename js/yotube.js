// const searchQuery = '예제';// 검색할 키워드
// const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&key=${apiKey}`;// 유튜브 API 요청 URL
// const apiKey = 'AIzaSyA2qroHoKLIGLfscKO01forKU1KOscKonY';// 생성한 API 키를 넣으세요.

const videoData = {
  video1: 'tuUmmLeyLmQ', // 유튜브 영상 ID
  video2: 'RKhBkTKEeF8',
  video3: 'H8LIyi7NWh8',
  video4: 'Wt4rqoiVzcU',
  video5: 'UDGqMo5qdYo',
  video6: 'yR_c8E5VHog',
  video7: 'vNKIkmj78Qc',
  video8: 'EluvPx4dRjI',
};
let player;

// 유튜브 IFrame API 로드
function loadYouTubeAPI(videoId) {
  document.querySelector('.sect4-1 .video_frame').innerHTML = `
    <iframe id="youtubePlayer" width="100%" height="100%"
      src="https://www.youtube.com/embed/${videoId}?enablejsapi=1" 
      frameborder="0" allow="autoplay; encrypted-media" 
      allowfullscreen>
    </iframe>
  `;

  // IFrame API 준비되면 실행
  setTimeout(() => {
    player = new YT.Player('youtubePlayer', {
      events: {
        'onReady': onPlayerReady,
      }
    });
  }, 500);
}

function onPlayerReady() {
  document.getElementById('playBtn').addEventListener('click', () => player.playVideo());
  document.getElementById('pauseBtn').addEventListener('click', () => player.pauseVideo());
  document.getElementById('forwardBtn').addEventListener('click', () => {
    player.seekTo(player.getCurrentTime() + 10);
  });
  document.getElementById('backwardBtn').addEventListener('click', () => {
    player.seekTo(player.getCurrentTime() - 10);
  });
  document.getElementById('Refresh').addEventListener('click', () => {
    player.seekTo(0); // 동영상을 처음으로 되돌리기
  });
  document.getElementById('volumeControl').addEventListener('input', (e) => {
    player.setVolume(e.target.value);
  });
}

document.querySelectorAll('.sect4-1_swiper .swiper-slide').forEach(slide => {
  slide.addEventListener('click', function () {
    const videoId = this.dataset.videoId;
    const youtubeId = videoData[videoId];
    loadYouTubeAPI(youtubeId);
  });
});




