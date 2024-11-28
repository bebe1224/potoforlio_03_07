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

// from: 애니메이션 시작 상태를 설정 (시작점부터 애니메이션)
// to: 애니메이션 끝 상태를 설정 (끝점으로 애니메이션)
// set: 애니메이션 없이 즉시 상태를 변경
// fromTo: 시작과 끝 상태를 모두 설정

// const sect1gasp1 = document.querySelector(".sect1gsap1");
// const sect1gasp2 = document.querySelector(".sect1gsap2");
// const sect1gasp3 = document.querySelector(".sect1gsap3");
// const sect1gasp4 = document.querySelector(".sect1gsap4");

// // 화면 크기에 따른 애니메이션 실행
// function runAnimation() {
//   if (window.innerWidth > 1530) {
//     // 1530px 이상일 때 애니메이션
//     gsap.fromTo(
//       sect1gasp1,
//       {
//         opacity: 0,
//         y: 300,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 2,
//       }
//     );

//     gsap.fromTo(
//       sect1gasp2,
//       {
//         opacity: 0,
//         y: 0,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 2,
//       }
//     );

//     gsap.fromTo(
//       [sect1gasp3, sect1gasp4],
//       {
//         opacity: 0,
//         y: 200,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 2,
//       }
//     );

//   } else if (window.innerWidth <= 1530 && window.innerWidth > 845) {
//     // 1530px 이하, 845px 이상일 때 애니메이션
//     gsap.fromTo(
//       sect1gasp1,
//       {
//         opacity: 0,
//         y: 300,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 2,
//       }
//     );

//     gsap.fromTo(
//         sect1gasp2,
//         {
//           opacity: 0,
//           y: 0,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 2,
//         }
//       );
  

//     gsap.fromTo(
//       [sect1gasp3, sect1gasp4],
//       {
//         opacity: 0,
//         y: 200,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 2,
//       }
//     );

//   } else if (window.innerWidth <= 845 && window.innerWidth > 0) {
//     // 845px 이하일 때 애니메이션
//     gsap.fromTo(
//       sect1gasp1,
//       {
//         opacity: 0,
//         y: 300,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 2,
//       }
//     );

//     gsap.fromTo(
//         sect1gasp2,
//         {
//           opacity: 0,
//           y: 0,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 2,
//         }
//       );

//     gsap.fromTo(
//       [sect1gasp3, sect1gasp4],
//       {
//         opacity: 0,
//         y: 200,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 2,
//       }
//     );
//   }
// }

// // 페이지 크기 변경 시 애니메이션 실행
// window.addEventListener("resize", runAnimation);

// // 페이지 로드 시에도 애니메이션 실행
// runAnimation();

// ==== sect2
