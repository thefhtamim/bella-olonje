// Navbar Toggle

function navShowHide() {
  let nav = document.querySelector(".header__nav");
  if (nav.style.right === "-200%") {
    nav.style.right = "0";
  } else {
    nav.style.right = "-200%";
  }
}