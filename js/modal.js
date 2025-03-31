// 모달 열기
$(".position3 .Symbol").click(function () {
    $(".position3_modal, .close").addClass("on");
});

// 모달 닫기
$(".close").click(function () {
    $(".position3_modal, .close").removeClass("on");
    $(".position3_modal").scrollTop(0);
});

// 모달 열기
$(".position4 .Symbol").click(function () {
    $(".position4_modal, .close").addClass("on");
});

// 모달 닫기
$(".close").click(function () {
    $(".position4_modal, .close").removeClass("on");
    $(".position4_modal").scrollTop(0);
});
