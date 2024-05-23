const html = document.documentElement;
const img = document.querySelector("#profile img");

function toggleMode() {
  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Avatar Light");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Avatar");
  }
}
