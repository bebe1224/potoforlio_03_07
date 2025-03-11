// 모달 열기
$(".position3 .Symbol").click(function () {
    $(".position3_modal, .close").addClass("on");
});

// 모달 닫기
$(".close").click(function () {
    $(".position3_modal, .close").removeClass("on");
    $(".position3_modal").scrollTop(0);
});
