window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar-nav");
  navbar.classList.toggle("sticky-nav", window.scrollY > 200);
});
