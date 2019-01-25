openMenu = () => {
  document.getElementsByClassName("side-menu")[0].style.width = "80%";
};

closeMenu = () => {
  document.getElementsByClassName("side-menu")[0].style.width = "0";
};

window.onload = function() {
  document
    .getElementsByClassName("menu-bar")[0]
    .addEventListener("click", openMenu);

  document
    .getElementsByClassName("closeBtn")[0]
    .addEventListener("click", closeMenu);
};
