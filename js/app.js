const navbarEdenBtn = document.getElementById("navbar-eden-btn");
const navbarContainer = document.getElementById("navbar-container");
const navbarIcon1 = document.getElementById("navbar-icon-1");
const navbarIcon2 = document.getElementById("navbar-icon-2");
const navbarIcon3 = document.getElementById("navbar-icon-3");
const navbarIcon4 = document.getElementById("navbar-icon-4");

navbarEdenBtn.addEventListener("click", () => {
   navbarIcon1.classList.toggle("active");
   navbarIcon2.classList.toggle("active");
   navbarIcon3.classList.toggle("active");
   navbarIcon4.classList.toggle("active");
   navbarContainer.classList.toggle("active");
   setTimeout(() => {
      if (navbarIcon1.style.display === "block") {
         navbarIcon1.style.display = "none";
         navbarIcon2.style.display = "none";
         navbarIcon3.style.display = "none";
         navbarIcon4.style.display = "none";
      } else {
         navbarIcon1.style.display = "block";
         navbarIcon2.style.display = "block";
         navbarIcon3.style.display = "block";
         navbarIcon4.style.display = "block";
      }
   }, 500);
});
