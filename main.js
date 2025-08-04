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
      link: "#"
    },
     {
      title: "Portfolio Website",
      description: "A responsive portfolio using HTML, CSS, and JS.",
      image: "assets/images/overlord mascot.png",
      link: "#"
    },
     {
      title: "Portfolio Website",
      description: "A responsive portfolio using HTML, CSS, and JS.",
      image: "assets/images/overlord mascot.png",
      link: "#"
    },
    // more personal projects...
  ],
  client: [
    {
      title: "E-commerce Site",
      description: "Built for a local clothing brand.",
      image: "assets/images/overlord mascot.png",
      link: "#"
    },
     {
      title: "E-commerce Site",
      description: "Built for a local clothing brand.",
      image: "assets/images/overlord mascot.png",
      link: "#"
    },
     {
      title: "E-commerce Site",
      description: "Built for a local clothing brand.",
      image: "assets/images/overlord mascot.png",
      link: "#"
    },
    // more client projects...
  ],
  collab: [
    {
      title: "Hackathon App",
      description: "Team project during a hackathon.",
      image: "assets/images/overlord mascot.png",
      link: "#"
    },
     {
      title: "Hackathon App",
      description: "Team project during a hackathon.",
      image: "assets/images/overlord mascot.png",
      link: "#"
    },
     {
      title: "Hackathon App",
      description: "Team project during a hackathon.",
      image: "assets/images/overlord mascot.png",
      link: "#"
    },
    // more collab projects...
  ]
};

const container = document.getElementById("projectList");
const wrapper = document.getElementById("projectContainer");
function renderProjects(type) {
  wrapper.classList.add("fade-out");

  setTimeout(() => {
    container.innerHTML = "";

    projectData[type].forEach((proj) => {
      const card = document.createElement("div");
      card.className = "projectCard";

      // Wrap image in a consistent structure
      const imgWrapper = document.createElement("div");
      imgWrapper.className = "imageWrapper";

      const img = document.createElement("img");
      img.src = proj.image;
      img.alt = proj.title;
      img.className = "projectImage";
      imgWrapper.appendChild(img);

      const contentWrapper = document.createElement("div");
      contentWrapper.className = "projectText"; // Wrap all text inside this div

      const title = document.createElement("h3");
      title.className = "projectTitle";
      title.textContent = proj.title;

      const desc = document.createElement("p");
      desc.className = "projectDescription";
      desc.textContent = proj.description;

      const link = document.createElement("a");
      link.className = "projectLink";
      link.href = proj.link;
      link.textContent = "View Project";
      link.target = "_blank";

      contentWrapper.appendChild(title);
      contentWrapper.appendChild(desc);
      contentWrapper.appendChild(link);

      // Final structure
      card.appendChild(imgWrapper);
      card.appendChild(contentWrapper);
      container.appendChild(card);
    });

    wrapper.classList.remove("fade-out");
    wrapper.classList.add("fade-in");
    setTimeout(() => {
      wrapper.classList.remove("fade-in");
    }, 500);
  }, 300);
}


document.querySelectorAll(".personal, .client, .collab")
.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.getAttribute("data-type");
    renderProjects(type);
  });
});

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  renderProjects("personal");
});
