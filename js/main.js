let menuIcon = document.querySelector("#menu-icon");
let list = document.querySelector(".list");

menuIcon.onclick = () => {
  list.classList.toggle("active");
  menuIcon.classList.toggle("fa-x");
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

document.getElementById("toTop").addEventListener("click", scrollToTop);
