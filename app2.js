const shop = document.getElementById("shopId");
const components = document.querySelectorAll(".contComp");
const titleShop = document.querySelector(".title__shop");
const footer = document.querySelector("#footer");
const ic1 = document.getElementById("ic1");
const ic2 = document.getElementById("ic2");
checkbox.addEventListener("change", () => {
  header.classList.toggle("darkmode");
  shop.classList.toggle("darkmode");
  // components.classList.toggle("darkmode");
  titleShop.classList.toggle("darkmode");
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
