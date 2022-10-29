var gridBtn = document.querySelector(".index-filter__grid");
var listBtn = document.querySelector(".index-filter__list");

var container = document.querySelector(".index-right__table");
gridBtn.addEventListener("click", function() {
    container.classList.add("animation");
    container.classList.add("index-right__grid");
    setTimeout((e) => {
        container.classList.remove("animation")
    }, 500);
})
listBtn.addEventListener("click", function() {
    container.classList.add("animation");
    setTimeout((e) => {
        container.classList.remove("animation")
    }, 500);
    container.classList.remove("index-right__grid");
})