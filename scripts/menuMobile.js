const btnMenu = document.querySelector(".hamburguer");

btnMenu.addEventListener("click", function () {
  let menu = document.querySelector(".menu");

  menu.classList.toggle("active");
});
