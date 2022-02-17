const about = document.getElementById("about");
const nav = document.getElementById("navbar");

function checkTop() {
  if (about.getBoundingClientRect().top <= 1) {
    nav.classList.add("isStuck");
  } else {
    nav.classList.remove("isStuck");
  }
}

document.addEventListener("scroll", checkTop);
