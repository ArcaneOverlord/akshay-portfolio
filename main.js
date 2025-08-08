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
      image: "assets/images/overlord mascot.png",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#"
    },
     {
      title: "Portfolio Website",
      description: "A responsive portfolio using HTML, CSS, and JS.",
      image: "assets/images/overlord mascot.png",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#"
    },
     
    // more personal projects...
  ],
  client: [
    
    // more client projects...
  ],
  collab: [
   
    // more collab projects...
  ]
};
const noProjectsHTML = `
  <div class="no-projects-fallback">
    <img src="assets/images/rage.png" alt="No Projects" />
    <h3>No Projects Available</h3>
    <p>This person has nothing to offer here... yet.</p>
  </div>
`;


function renderProjects(section) {
  const container = document.getElementById("projectList");
  container.innerHTML = ""; // clear old cards

  const projects = projectData[section] || [];

  if (projects.length === 0) {
    container.innerHTML = noProjectsHTML;
    return;
  }

  projects.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "projectCard";
    card.innerHTML = `
      <div class="projectImageContainer">
        <img src="${proj.image}" alt="${proj.title}" />
      </div>
      <div class="projectTextContainer">
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <p class="techUsed">${(proj.tech||[]).join(", ")}</p>
        <a href="${proj.link}" target="_blank">View Project</a>
      </div>
    `;
    container.appendChild(card);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const sectionButtons = document.querySelectorAll(".sectionButton");

  sectionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.dataset.section;
      renderProjects(section);

      // Highlight active button
      sectionButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // reset scroll
      document.getElementById("projectContainer").scrollTop = 0;
    });
  });

  // Trigger initial load+highlight
  document.querySelector('.sectionButton[data-section="personal"]').click();
});
