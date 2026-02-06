const current = window.location.pathname.split("/").pop();
const links = document.querySelectorAll("nav a, .sidebar a");
links.forEach(link => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
  }
});
