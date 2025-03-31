document.querySelector("a#TOP").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
    const TOP = document.querySelector("a#TOP");

    if (window.scrollY === 0) {
        TOP.style.opacity = "0";
    } else {
        TOP.style.opacity = "1";
    }
});