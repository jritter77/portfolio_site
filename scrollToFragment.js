function scrollToFragment(frag) {
  frag = document.getElementById(frag);
  console.log(frag.getBoundingClientRect().top);
  document.documentElement.scrollTop += frag.getBoundingClientRect().top;
}

document.documentElement.style.transitionDuration = "2s";
document.documentElement.style.scrollBehavior = "smooth";

const buttons = document.getElementsByClassName("link_btn");

for (let btn of buttons) {
  btn.onclick = () => scrollToFragment(btn.value);
}
