let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.menu ul');
let close = document.querySelector('.close');

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
  close.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
  close.classList.remove("active");
});