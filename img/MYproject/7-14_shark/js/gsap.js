
// 미디어
ScrollTrigger.matchMedia({
    // 모든 화면 크기에서 공통적으로 적용할 코드
    "all": function () {
        for (let i = 1; i <= 9; i++) {
            ScrollTrigger.create({
                trigger: `.sect${i}`,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                markers: false,         // 디버깅을 위한 마커 표시
            });
        }
    },
    // 화면이 768px 이하일 때 (모바일 화면)
    "(max-width: 768px)": function () {
        for (let i = 1; i <= 9; i++) {
            ScrollTrigger.create({
                trigger: `.sect${i}`,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                markers: false,
            });
        }
        // sect3
        gsap.fromTo(".sect3 .left img",
            {
                x: 0,
            },
            {
                x: 0,
            });
    }
});
// ScrollTrigger.matchMedia({
//     "(max-width: 768px)": function () {
//         // sect2 애니메이션
//         gsap.fromTo(".sect2 .right .phone",
//             {
//                 y: "500px", opacity: 0,
//             },
//             {
//                 y: "0", opacity: 1, duration: 1,
//                 scrollTrigger: sect2_ScrollTrigger,
//                 delay: 5,  
//             });
//     }
// });

// Tip
//  scrollTrigger 는 to 부분에 기입하자~
// common 컨퍼넌츠
const sect1_ScrollTrigger = {
    trigger: ".sect1",
    start: "0% 40%",
    end: "35% 40%",
    scrub: true,    // 스크롤과 동기화
    markers: false,
};
const sect2_ScrollTrigger = {
    trigger: ".sect2",
    start: "0% 40%",
    end: "35% 40%",
    markers: false,
};
const sect3_ScrollTrigger = {
    trigger: ".sect3",
    start: "0% 40%",
    end: "35% 40%",
    markers: false,
};
const sect4_ScrollTrigger = {
    trigger: ".sect4",
    start: "0% 40%",
    end: "35% 40%",
    markers: false,
};
const sect5_ScrollTrigger = {
    trigger: ".sect5",
    start: "0% 40%",
    end: "35% 40%",
    markers: false,
};
const sect6_ScrollTrigger = {
    trigger: ".sect6",
    start: "0% 40%",
    end: "35% 40%",
    markers: false,
};
const sect7_ScrollTrigger = {
    trigger: ".sect7",
    start: "0% 40%",
    end: "35% 40%",
    markers: false,
};
const sect8_ScrollTrigger = {
    trigger: ".sect8",
    start: "0% 40%",
    end: "35% 40%",
    markers: false,
};
const sect9_ScrollTrigger = {
    trigger: ".sect9",
    start: "0% 40%",
    end: "35% 40%",
    markers: false,
};
// tl
const sect2_tl = gsap.timeline({
    scrollTrigger: sect2_ScrollTrigger,
});
const sect3_tl = gsap.timeline({
    scrollTrigger: sect3_ScrollTrigger,
});
const sect4_tl = gsap.timeline({
    scrollTrigger: sect4_ScrollTrigger,
});
const sect5_tl = gsap.timeline({
    scrollTrigger: sect5_ScrollTrigger,
});
const sect6_tl = gsap.timeline({
    scrollTrigger: sect6_ScrollTrigger,
});
const sect7_tl = gsap.timeline({
    scrollTrigger: sect7_ScrollTrigger,
});
const sect8_tl = gsap.timeline({
    scrollTrigger: sect8_ScrollTrigger,
});
const sect9_tl = gsap.timeline({
    scrollTrigger: sect9_ScrollTrigger,
});
// sect1
gsap.to(".sect1_title", {
    opacity: 1,
    duration: 1,
    scrollTrigger: sect1_ScrollTrigger,
});
// sect2
ScrollTrigger.matchMedia({
    // 0px ~ 767px
    "(max-width: 767px)": function () {
        sect2_tl.fromTo(
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
        sect2_tl.fromTo(
            '.sect2  .inner .right > *',
            {
                autoAlpha: 0,
                y: 100,
                duration: 1.5,
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 1.5,
            },
            '-=2'
        );
    },

    // 767px 이상
    "(min-width: 767px)": function () {
        sect2_tl.fromTo(
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
        sect2_tl.fromTo(
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
            '-=0.5'
        );
    }
});
// sect3
gsap.fromTo(".sect3 .left img",
    { y: "500px", opacity: 0 },
    {
        y: "0", opacity: 1, duration: 1,
        scrollTrigger: sect3_ScrollTrigger,
    });
gsap.to(".sect3_title img:first-of-type", {
    opacity: 1, duration: 1,
    scrollTrigger: sect3_ScrollTrigger,
});
// ==== 
sect3_tl.to([".sect3_title img:nth-of-type(2)", ".sect3_title p", ".Hot_and"], {
    opacity: 1,
    duration: 1,
    delay: 0.5
});
sect3_tl.to([".sect3_title img:nth-of-type(2)", ".Hot_and"], {
    opacity: 0,  // 깜빡이는 동안 opacity를 0으로 설정
    duration: 0.5,  // 각 깜빡임의 시간
    repeat: 3,
    yoyo: true,  // 애니 끝난 후 반대로 돌아오게
});
// sect4
sect4_tl.to([".sect4_title ", ".Real_Review"], {
    opacity: 1,
    duration: 1,
    delay: 0
});
sect4_tl.fromTo(".sect4_title img:first-of-type", {
    x: "-600", opacity: 0,
}, {
    x: "0px", opacity: 1,
    delay: 0, duration: 1,
}, 0) // 뒤에 0을쓰면 첫 번째 애니와 동시 시작
sect4_tl.to(".Real_Review", {
    opacity: 0,
    duration: 0.5,  // 각 깜빡임의 시간
    repeat: 3,
    yoyo: true,
    delay: 0,
});
// sect5
sect5_tl.fromTo(['.sect5 .top .left',
    '.sect5 .top .right img', '.sect5 .bottom img'], {
    opacity: 0,
}, {
    opacity: 1,
    duration: 2,
    delay: 0
})
sect5_tl.fromTo(".sect5 .top .left img:nth-of-type(2)"
    , {
        x: "-600px"
    },
    {
        x: "0px",
        duration: 1
    }, 0)// 뒤에 0을쓰면 첫 번째 애니와 동시 시작
sect5_tl.to(".sect5 .top .right img", {
    opacity: 0,
    duration: 0.5,  // 각 깜빡임의 시간
    repeat: 3,
    yoyo: true,
    delay: 0,
});
// sect6
sect6_tl.fromTo('.sect6 .bottom .photo_wrap .box', { opacity: 0 }, {
    opacity: 1, duration: 1,
    delay: 0, stagger: 0.3
})
// sect7
sect7_tl.fromTo('.sect7_title img:first-of-type',
    { opacity: 0 }, {
    opacity: 1, duration: 2, delay: 0,
});
sect7_tl.fromTo('.sect7_title img:nth-of-type(2)', { opacity: 0, x: '-600px' },
    {
        opacity: 1, x: '0px', duration: 0.75
    }, 1);
sect7_tl.fromTo('.sect7 .right img', { opacity: 0, rotate: '25deg', y: '-500px', x: '100px' },
    {
        opacity: 1, rotate: '0deg', y: '0px', x: '0px', duration: 0.75

    }, 1);
sect7_tl.fromTo('.sect7_title p', { opacity: 0 },
    {
        opacity: 1, duration: 2, delay: 0,

    });
// sect8
sect8_tl.fromTo(['.sect8_title img:first-of-type', '.sect8_title p'],
    { opacity: 0 }, {
    opacity: 1, duration: 1, delay: 0, stagger: 2,

});
sect8_tl.fromTo('.sect8_title img:nth-of-type(2)',
    { opacity: 0, x: '600px' },
    {
        opacity: 1, x: '0px', duration: 1, delay: 0

    }, 1);
// sect9
sect9_tl.fromTo(['.sect9 .left img:first-of-type', '.sect9 .right b'],
    { opacity: 0 },
    { opacity: 1, duration: 2, delay: 0, }
);
sect9_tl.fromTo('.sect9 .left img:nth-of-type(2)',
    { opacity: 0, x: '-600px' }, { opacity: 1, x: '0px' }
    , 1)



