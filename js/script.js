// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  // Cek jika klik bukan di hamburger menu dan navbar
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
}); // Closing brace added here

// Custom cursor movement
const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;
const smoothFactor = 0.3; // Sesuaikan untuk mengubah kehalusan

// Update posisi mouse
document.addEventListener("mousemove", (e) => {
  targetX = e.pageX;
  targetY = e.pageY;
});

// Fungsi untuk update posisi cursor
function updateCursor() {
  mouseX += (targetX - mouseX) * smoothFactor;
  mouseY += (targetY - mouseY) * smoothFactor;

  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;

  requestAnimationFrame(updateCursor);
}

// Mulai update posisi cursor
updateCursor();

