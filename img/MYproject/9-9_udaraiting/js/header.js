$(document).ready(function () {
    $(".main_menu").on("mouseenter", function () {
        $(this).find(".sub_menu").stop(true, true).slideDown(400);
    });

    $(".main_menu").on("mouseleave", function () {
        $(this).find(".sub_menu").stop(true, true).slideUp(400);
    });
});

