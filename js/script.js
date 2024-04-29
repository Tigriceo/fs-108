const btnOpenEl = document.querySelector(".header-btn-open");
const btnCloseEl = document.querySelector(".header-btn-close");
const headerEl = document.querySelector(".header-mobile");

const btnOpenModalEl = document.querySelector(".hero-button");
const btnCloseModalEl = document.querySelector(".modal-btn-close");
const modalEl = document.querySelector(".modal-overlay");

btnOpenEl.addEventListener("click", function () {
  headerEl.classList.add("is-open");
});

btnCloseEl.addEventListener("click", function () {
  headerEl.classList.remove("is-open");
});

btnOpenModalEl.addEventListener("click", function () {
  modalEl.classList.add("is-open");
});

btnCloseModalEl.addEventListener("click", function () {
  modalEl.classList.remove("is-open");
});
