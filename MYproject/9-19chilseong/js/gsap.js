//===== ScrollTrigger 설정
const sect2_title_once = {
    trigger: ".sect2",
    start: "0% 54%",
    end: "50% 0%",
    markers: false, // 디버그용 마커 (선)
    once: true, // 한 번만 실행
}
const sect2_title = {
    trigger: ".sect2",
    start: "10% 10%",
    end: "60% 10%",
    markers: false,
    scrub: true,    // 스크롤과 동기화
};
const sect3_title_once = {
    trigger: ".sect3",
    start: "0% 54%",
    end: "50% 0%",
    markers: false, // 디버그용 마커 (선)
    once: true, // 한 번만 실행
}
const sect3_title = {
    trigger: ".sect3",
    start: "0% 10%",
    end: "100% 10%",
    markers: false,
    scrub: true,    // 스크롤과 동기화
};
const sect4_title_once = {
    trigger: ".sect4",
    start: "0% 54%",
    end: "50% 0%",
    markers: false, // 디버그용 마커 (선)
    once: true, // 한 번만 실행
}
const sect4_title = {
    trigger: ".sect4",
    start: "10% 10%",
    end: "50% 10%",
    markers: false,
    scrub: true,    // 스크롤과 동기화
};
//===== tl
const sect2_once_tl = gsap.timeline({
    scrollTrigger: sect2_title_once,
});
const sect2_tl = gsap.timeline({
    scrollTrigger: sect2_title,
});
const sect3_once_tl = gsap.timeline({
    scrollTrigger: sect3_title_once,
});
const sect3_tl = gsap.timeline({
    scrollTrigger: sect3_title,
});
const sect4_once_tl = gsap.timeline({
    scrollTrigger: sect4_title_once,
});
const sect4_tl = gsap.timeline({
    scrollTrigger: sect4_title,
});
//===== sect .title
sect2_once_tl.fromTo(
    '.sect2 .inner .title',
    {
        opacity: 0,
        y: 200,
        visibility: 'hidden',
    },
    {
        opacity: 1,
        y: 0,
        visibility: 'visible',
        duration: 1,
    }
);
ScrollTrigger.matchMedia({
    // 0px ~ 982px
    "(max-width: 982px)": function () {
        sect2_tl.fromTo(
            '.sect2 .inner .title',
            { opacity: 1, y: 0 },
            { opacity: 0, y: 200, duration: 1 }
        );
    },

    // 983px 이상
    "(min-width: 983px)": function () {
        sect2_tl.fromTo(
            '.sect2 .inner .title',
            { opacity: 1, y: 0 },
            { opacity: 0, y: 600, duration: 1 }
        );
    }
}); //반응형포함
sect3_once_tl.fromTo(
    '.sect3 .inner .title',
    {
        opacity: 0,
        y: 200,
        visibility: 'hidden',
    },
    {
        opacity: 1,
        y: 0,
        visibility: 'visible',
        duration: 1,
    }
);
ScrollTrigger.matchMedia({
    // 0px ~ 982px
    "(max-width: 982px)": function () {
        sect3_tl.fromTo(
            '.sect3 .inner .title',
            { opacity: 1, y: 0 },
            { opacity: 0, y: 300, duration: 1 }
        );
    },

    // 983px 이상
    "(min-width: 983px)": function () {
        sect3_tl.fromTo(
            '.sect3 .inner .title',
            { opacity: 1, y: 0 },
            { opacity: 0, y: 600, duration: 1 }
        );
    }
});//반응형포함
sect4_once_tl.fromTo(
    '.sect4 .inner .title',
    {
        opacity: 0,
        y: 200,
        visibility: 'hidden',
    },
    {
        opacity: 1,
        y: 0,
        visibility: 'visible',
        duration: 1,
    }
);
ScrollTrigger.matchMedia({
    // 0px ~ 982px
    "(max-width: 982px)": function () {
        sect4_tl.fromTo(
            '.sect4 .inner .title',
            { opacity: 1, y: 0 },
            { opacity: 0, y: 200, duration: 1 }
        );
    },

    // 983px 이상
    "(min-width: 983px)": function () {
        sect4_tl.fromTo(
            '.sect4 .inner .title',
            { opacity: 1, y: 0 },
            { opacity: 0, y: 400, duration: 1 }
        );
    }
});
//===== ScrollTrigger 설정
const sect2_box_once = {
    trigger: ".sect2",
    start: "10% 10%",
    end: "60% 10%",
    markers: false,
    scrub: false,
};
//===== tl
const sect2_box_once_tl = gsap.timeline({
    scrollTrigger: sect2_box_once,
});
//===== sect2 box1 ~ box4
sect2_box_once_tl.fromTo(
    '.sect2 .inner .box1',
    {
        opacity: 0,
        y: 100,
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.4,
    }
);
sect2_box_once_tl.fromTo(
    '.sect2 .inner .box2',
    {
        opacity: 0,
        y: 100,
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.4,
    }
);
sect2_box_once_tl.fromTo(
    '.sect2 .inner .box3',
    {
        opacity: 0,
        y: 100,
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.4,
    }
);
sect2_box_once_tl.fromTo(
    '.sect2 .inner .box4',
    {
        opacity: 0,
        y: 100,
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.4,
    }
);
// ====== tab_box 
function animateTabBoxElements(tabBox) {
    const tabTitle = tabBox.querySelector('.tab_title');
    const tabSubTitle = tabBox.querySelector('.tab_sub_title');
    const brandButtons = tabBox.querySelectorAll('.Brand_btn');
    const productImgs = tabBox.querySelectorAll('.product_imgs img');

    // 제목과 서브 제목 애니메이션
    gsap.fromTo(
        tabTitle,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power1.out" }
    );

    gsap.fromTo(
        tabSubTitle,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.2, ease: "power1.out" }
    );

    // 브랜드 버튼 애니메이션 (각각 딜레이 적용)
    // forEach 메서드에서 i는 **현재 요소의 인덱스(index)**를 의미합니다. 즉 i는 현재 요소의 인덱스(0부터 시작)를 나타냅니다.
    brandButtons.forEach((btn, i) => {
        gsap.fromTo(
            btn,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, delay: 0.3 + i * 0.2, ease: "power1.out" }
        );
    });

    // 프러덕트 이미지 애니메이션 
    productImgs.forEach((img, i) => {
        gsap.fromTo(
            img,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, delay: 0.5 + i * 0.2, ease: "power1.out" }
        );
    });
}

// ====== 