const contact = document.getElementById("contact");
const titleContact = document.querySelector(".title__contact");
const footer = document.querySelector("#footer");
const ic1 = document.getElementById("ic1");
const ic2 = document.getElementById("ic2");
checkbox.addEventListener("change", () => {
  header.classList.toggle("darkmode");
  contact.classList.toggle("darkmode");
  titleContact.classList.toggle("darkmode");
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
