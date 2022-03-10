const body = document.body;
const header = document.getElementById("header");
const checkbox = document.getElementById("checkbox");
const main = document.getElementById("main");
const about = document.querySelector("#about");
const footer = document.querySelector("#footer");
const ic1 = document.getElementById("ic1");
const ic2 = document.getElementById("ic2");
checkbox.addEventListener("change", () => {
  header.classList.toggle("darkmode");
  main.classList.toggle("darkmode");
  about.classList.toggle("darkmode");
  footer.classList.toggle("darkmode");
  ic1.classList.toggle("darkmode");
  ic2.classList.toggle("darkmode");
});

function nav() {
  window.onscroll = () => {
    window.scrollY > 0
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };
}

nav();
