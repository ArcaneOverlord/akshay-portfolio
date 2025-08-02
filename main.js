// Hamburger toggle
const menuButton = document.getElementById("menu");
const menuPanel = document.getElementById("menuPanel");

menuButton.addEventListener("click", function (e) {
  e.stopPropagation();
  menuButton.classList.toggle("change");
  menuPanel.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

// Close menu when clicking outside
document.addEventListener("click", function (e) {
  if (!menuPanel.contains(e.target) && !menuButton.contains(e.target)) {
    menuPanel.classList.remove("active");
    menuButton.classList.remove("change");
    document.body.classList.remove("menu-open");
  }
});

// Resume button (if you have one)
const resumeButton = document.querySelector(".resume");
if (resumeButton) {
  resumeButton.addEventListener("click", function () {
    window.open("path/to/your/resume.pdf", "_blank");
  });
}

// Clock
function updateClock() {
  const clockElement = document.getElementById("clock");
  if (!clockElement) return; // Safety check
  const now = new Date();
  const options = {
    timeZone: "Asia/Kolkata", // Change timezone here
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZoneName: "short",
  };
  const formatter = new Intl.DateTimeFormat("en-IN", options);
  clockElement.textContent = formatter.format(now);
}

document.addEventListener("DOMContentLoaded", () => {
  updateClock();
  setInterval(updateClock, 1000);
});

// Prevent accidental edge swipe from left or right
document.addEventListener('touchstart', function (e) {
  const edgeLimit = 10; // pixels from edge to block
  const x = e.touches[0].clientX;

  if (x < edgeLimit || x > window.innerWidth - edgeLimit) {
    e.preventDefault();
  }
}, { passive: false });
