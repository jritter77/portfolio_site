const sections = document.getElementsByTagName("section");

for (let s of sections) {
  console.log(s.getBoundingClientRect());
  s.addEventListener("scroll", () => console.log(s));
}

document.addEventListener("scroll", () => {
  const viewHeight = document.documentElement.clientHeight;

  for (let s of sections) {
    const rect = s.getBoundingClientRect();
    if (rect.top < viewHeight) {
      s.classList.add("onScreen");
    } else {
      s.classList.remove("onScreen");
    }
  }
});
