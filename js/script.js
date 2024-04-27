const btnOpenEl = document.querySelector(".header-btn-open");
const btnCloseEl = document.querySelector(".header-btn-close");
const headerEl = document.querySelector(".header-mobile");

btnOpenEl.addEventListener("click", function () {
  headerEl.classList.add("is-open");
});

btnCloseEl.addEventListener("click", function () {
  headerEl.classList.remove("is-open");
});
