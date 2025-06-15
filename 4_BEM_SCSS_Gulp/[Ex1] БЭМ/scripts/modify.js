// Реализация демо-функционала модификации стилей кнопки "Записаться" в блоке Hero
const signupButton = document.getElementById("signupButton");

signupButton.addEventListener("mousedown", () => {
  signupButton.classList.add("hero__button--active");
});

signupButton.addEventListener("mouseup", () => {
  signupButton.classList.remove("hero__button--active");
});

setTimeout(() => {
  signupButton.classList.add("hero__button--disabled");
  signupButton.textContent = "Запись закрыта";
}, 10000);

// Реализация демо-функционала модификации стилей навигационных ссылок
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((item) => item.classList.remove("nav__link--active"));
    e.target.classList.add("nav__link--active");
  });
});
