
// ==== sect3-1 탭
const toggle_button = document.querySelector(".view-more");
const hidden_list = document.querySelector(".sect3-1 .hidden-list");
const sect3_common = document.querySelectorAll(".sect3-1 .common")

toggle_button.addEventListener("click", function () {

    if (hidden_list.style.opacity === "1") {
        hidden_list.style.opacity = "0";
        hidden_list.style.zIndex = "-1";
        toggle_button.style.zIndex = "0";  
    } else {
        hidden_list.style.opacity = "1";
        hidden_list.style.zIndex = "99";
        toggle_button.style.zIndex = "100";  
     
    }
});
// ==== 