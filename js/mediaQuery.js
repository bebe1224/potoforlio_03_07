const mediaQuery = window.matchMedia("(max-width: 767px)");

mediaQuery.addEventListener("change", () => {
    location.reload();
});