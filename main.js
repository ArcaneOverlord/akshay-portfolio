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




const projectData = {
  personal: [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio using HTML, CSS, and JS.",
      image: "assets/images/portfolio.jpg",
      link: "#"
    },
    // more personal projects...
  ],
  client: [
    {
      title: "E-commerce Site",
      description: "Built for a local clothing brand.",
      image: "assets/images/client-project.jpg",
      link: "#"
    },
    // more client projects...
  ],
  collab: [
    {
      title: "Hackathon App",
      description: "Team project during a hackathon.",
      image: "assets/images/collab-app.jpg",
      link: "#"
    },
    // more collab projects...
  ]
};

const container = document.getElementById("projectList");
const wrapper = document.getElementById("projectContainer");

function renderProjects(type) {
  // Add fade-out animation
  wrapper.classList.add("fade-out");

  setTimeout(() => {
    container.innerHTML = ""; // Clear old content

    projectData[type].forEach((proj) => {
      const card = document.createElement("div");
      card.className = "projectCard";
      card.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}" class="projectImage">
        <h3 class="projectTitle">${proj.title}</h3>
        <p class="projectDescription">${proj.description}</p>
        <a href="${proj.link}" class="projectLink" target="_blank">View Project</a>
      `;
      container.appendChild(card);
    });

    // Fade-in animation
    wrapper.classList.remove("fade-out");
    wrapper.classList.add("fade-in");

    setTimeout(() => {
      wrapper.classList.remove("fade-in");
    }, 500);
  }, 300);
}

document.querySelectorAll(".projectBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.getAttribute("data-type");
    renderProjects(type);
  });
});

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  renderProjects("personal");
});
