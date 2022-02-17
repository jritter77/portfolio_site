const sections = document.getElementsByTagName("section");

for (let s of sections) {
  s.addEventListener("scroll", () => console.log(s));
}

document.addEventListener("scroll", (e) => {
  e.preventDefault();
  const viewHeight = document.documentElement.clientHeight;

  console.log(document.documentElement.scrollHeight);

  for (let s of sections) {
    const rect = s.getBoundingClientRect();
    if (rect.top < viewHeight) {
      s.classList.add("onScreen");
    } else {
      s.classList.remove("onScreen");
    }
  }
});
