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

gsap.registerPlugin(ScrollTrigger);

gsap.to(".bg1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".sect4-1",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: false,
  },
});

gsap.to(".bg2", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".sect4-1",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: false,
  },
});


//===== ScrollTrigger 설정
const sect1_title_once = {
  trigger: ".sect1",
  start: "0% 10%",
  end: "100% 10%",
  markers: false, // 디버그용 마커 (선)
  once: true, // 한 번만 실행
}
const sect2_title_once = {
  trigger: ".sect2",
  start: "0% 10%",
  end: "100% 10%",
  markers: false, // 디버그용 마커 (선)
  once: true, // 한 번만 실행
}
const sect2_1_title_once = {
  trigger: ".sect2-1",
  start: "0% 10%",
  end: "100% 10%",
  markers: false, // 디버그용 마커 (선)
  once: true, // 한 번만 실행
}
const sect3_title_once = {
  trigger: ".sect3",
  start: "0% 10%",
  end: "100% 10%",
  markers: false, // 디버그용 마커 (선)
  once: true, // 한 번만 실행
}
const sect3_1_title_once = {
  trigger: ".sect3-1",
  start: "0% 10%",
  end: "100% 10%",
  markers: false, // 디버그용 마커 (선)
  once: true, // 한 번만 실행
}
const sect4_title_once = {
  trigger: ".sect4",
  start: "0% 10%",
  end: "100% 10%",
  markers: false, // 디버그용 마커 (선)
  once: true, // 한 번만 실행
}
const sect4_1_title_once = {
  trigger: ".sect4-1",
  start: "0% 10%",
  end: "100% 10%",
  markers: false, // 디버그용 마커 (선)
  once: true, // 한 번만 실행
}
const sect5_title_once = {
  trigger: ".sect5",
  start: "0% 10%",
  end: "100% 10%",
  markers: false, // 디버그용 마커 (선)
  once: true, // 한 번만 실행
}
//===== tl
const sect1_once_tl = gsap.timeline({
  scrollTrigger: sect1_title_once,
});
const sect2_once_tl = gsap.timeline({
  scrollTrigger: sect2_title_once,
});
const sect2_1_once_tl = gsap.timeline({
  scrollTrigger: sect2_1_title_once,
});
const sect3_once_tl = gsap.timeline({
  scrollTrigger: sect3_title_once,
});
const sect3_1_once_tl = gsap.timeline({
  scrollTrigger: sect3_1_title_once,
});
const sect4_once_tl = gsap.timeline({
  scrollTrigger: sect4_title_once,
});
const sect4_1_once_tl = gsap.timeline({
  scrollTrigger: sect4_1_title_once,
});
const sect5_once_tl = gsap.timeline({
  scrollTrigger: sect5_title_once,
});
//===== sect .title
ScrollTrigger.matchMedia({
  // 0px ~ 767px
  "(max-width: 767px)": function () {
    sect1_once_tl.fromTo(
      '.sect1  .inner .left > *',
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 2,
        stagger: 0.5,
      }
    );
    sect1_once_tl.fromTo(
      '.sect1  .inner .right > *',
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 3,
      },
      '-=1.2'
    );
  },

  // 767px 이상
  "(min-width: 767px)": function () {
    sect1_once_tl.fromTo(
      '.sect1  .inner .left > *',
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.4,
      }
    );
    sect1_once_tl.fromTo(
      '.sect1  .inner .right > *',
      {
        autoAlpha: 0,
        // x: 100,
      },
      {
        autoAlpha: 1,
        // x: 0,
        duration: 3,
      },
      '-=0.5' //첫 번째 애니메이션이 끝나기 0.4초 전에  시작
    );
  }
});
ScrollTrigger.matchMedia({
  // 0px ~ 767px
  "(max-width: 767px)": function () {
    sect2_once_tl.fromTo(
      '.sect2  .inner .left > *',
      {
        autoAlpha: 0, // opacity: 0 + visibility: hidden
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 2,
        stagger: 0.5,
      }
    );
    sect2_once_tl.fromTo(
      '.sect2  .inner .right > *',
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 2,
      },
      '-=2'
    );
  },

  // 767px 이상
  "(min-width: 767px)": function () {
    sect2_once_tl.fromTo(
      '.sect2  .inner .left > *',
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.4,
      }
    );
    sect2_once_tl.fromTo(
      '.sect2  .inner .right > *',
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.4,
      },
      '-=0.5' //첫 번째 애니메이션이 끝나기 0.4초 전에  시작
    );
  }
});
ScrollTrigger.matchMedia({
  // 0px ~ 767px
  "(max-width: 767px)": function () {
    sect2_1_once_tl.fromTo(
      '.sect2-1 .inner .left > *',
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.4,
      }
    );
    sect2_1_once_tl.fromTo(
      '.sect2-1  .inner .right > *',
      {
        autoAlpha: 0,
        x: 100,
      },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1.5,
        stagger: 0.4,
      }, '-=1'
    );
  },

  // 767px 이상
  "(min-width: 767px)": function () {
    sect2_1_once_tl.fromTo(
      '.sect2-1 .inner .left > *',
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.4,
      }
    );
    sect2_1_once_tl.fromTo(
      '.sect2-1  .inner .right > *',
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.4,
      }, '-=0.8'
    );
  }
});
ScrollTrigger.matchMedia({
  // 0px ~ 767px
  "(max-width: 767px)": function () {
    sect3_once_tl.fromTo(
      '.sect3  .inner .left > *',
      {
        autoAlpha: 0, // opacity: 0 + visibility: hidden
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 2,
        stagger: 0.5,
      }
    );
    sect3_once_tl.fromTo(
      '.sect3  .inner .right > *',
      {
        autoAlpha: 0,
        x: 100,
      },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1,
      },
      '-=0.4' //첫 번째 애니메이션이 끝나기 0.4초 전에  시작
    );
  },

  // 767px 이상
  "(min-width: 767px)": function () {
    sect3_once_tl.fromTo(
      '.sect3  .inner .left > *',
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.4,
      }
    );
    sect3_once_tl.fromTo(
      '.sect3  .inner .right > *',
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.4,
      },
      '-=0.5' //첫 번째 애니메이션이 끝나기 0.4초 전에  시작
    );
  }
});
ScrollTrigger.matchMedia({
  // 0px ~ 767px
  "(max-width: 767px)": function () {
    sect3_1_once_tl.fromTo(
      '.sect3-1  .inner .wrap > *:not(.hidden-list)',
      {
        autoAlpha: 0,
        y: 0,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        // stagger: 0.4,
      }
    );
  },
  // 767px 이상
  "(min-width: 767px)": function () {
    sect3_1_once_tl.fromTo(
      '.sect3-1  .inner .wrap > *:not(.hidden-list)',
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.4,
      }
    );
  }
});
ScrollTrigger.matchMedia({
  // 0px ~ 767px
  "(max-width: 767px)": function () {
    sect4_once_tl.fromTo(
      '.sect4  .inner > *',
      {
        autoAlpha: 0, // opacity: 0 + visibility: hidden
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 2,
        stagger: 0.5,
      }
    );
  },

  // 767px 이상
  "(min-width: 767px)": function () {
    sect4_once_tl.fromTo(
      '.sect4  .inner > *',
      {
        autoAlpha: 0,
        x: -100,
      },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1.2,
        stagger: 0.3,
      }
    );
  }
});
ScrollTrigger.matchMedia({
  // 0px ~ 767px
  "(max-width: 767px)": function () {
    sect4_1_once_tl.fromTo(
      '.sect4-1  .inner > *',
      {
        autoAlpha: 0,
        y: 0,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        // stagger: 0.4,
      }
    );
  },
  // 767px 이상
  "(min-width: 767px)": function () {
    sect4_1_once_tl.fromTo(
      '.sect4-1  .inner > *',
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.4,
      }
    );
  }
});
ScrollTrigger.matchMedia({
  // 0px ~ 767px
  "(max-width: 767px)": function () {
    sect5_once_tl.fromTo(
      '.sect5  .inner > *',
      {
        autoAlpha: 0, // opacity: 0 + visibility: hidden
        y: 100,
        backdropFilter: 'blur(0px)',
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 2,
        stagger: 0.5,
        backdropFilter: 'blur(2px)',
      }
    );
  },

  // 767px 이상
  "(min-width: 767px)": function () {
    sect5_once_tl.fromTo(
      '.sect5  .inner > *',
      {
        autoAlpha: 0,
        y: 100,
        backdropFilter: 'blur(0px)',
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        backdropFilter: 'blur(2px)',
      }
    );
  }
});


