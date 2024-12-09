const progress = document.querySelector(".progress");

gsap.to(progress, {
  scrollTrigger: {
    trigger: document.body,
    start: "top top", // 페이지 맨 위에서 시작
    end: "bottom bottom", // 페이지 맨 아래에서 끝
    scrub: true, // 스크롤에 따라 애니메이션 동기화
    onUpdate: (self) => {
      // 진행 바의 너비를 스크롤 진행에 맞춰 실시간 업데이트
      progress.style.width = `${self.progress * 100}%`;
    },
  },
});
// ==== sect1
gsap.registerPlugin(ScrollTrigger);

gsap.to(".bg1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".sect4-1",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: true, // 스크롤 시작/끝 지점 확인용
  },
});

gsap.to(".bg2", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".sect4-1",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: true,
  },
});