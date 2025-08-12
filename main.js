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



const aboutBtn = document.getElementById("about");
const aboutOverlay = document.getElementById("about-overlay");
const closeAbout = document.querySelector(".close-about");

aboutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  aboutOverlay.classList.add("active");
});

closeAbout.addEventListener("click", () => {
  aboutOverlay.classList.remove("active");
});







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
      description:"This is my personal portfolio showcasing my skills, projects, and credentials as a developer. It’s designed to be clean, responsive, and easy to navigate, highlighting my work across personal, client, and collaborative projects. Visitors can explore my certifications, see interactive previews of my work, and connect with me for potential collaborations or opportunities. The site adapts to all screen sizes, ensuring a smooth browsing experience whether on desktop or mobile.",
      image: "assets/images/project/p1p1.png",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github:"#"
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
        <div class="projIcon" id="projIcon">
        <a href="${proj.link}" target="_blank">
          <i class="fas fa-globe"></i>
        </a>
        <a href="${proj.github}" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        </div>
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



//overflow detector
function findOverflowingElements() {
  const docWidth = document.documentElement.offsetWidth;

  function checkElement(el) {
    if (!(el instanceof HTMLElement)) return;
    const elWidth = el.getBoundingClientRect().width;
    const scrollWidth = el.scrollWidth;

    if (scrollWidth > docWidth + 1) {  // +1 to handle sub-pixel rendering
      el.style.outline = "2px solid red";
      console.log("Overflowing:", el, `(${scrollWidth}px wide)`);
    }

    for (const child of el.children) {
      checkElement(child);
    }
  }

  checkElement(document.body);
}

findOverflowingElements();
//overfloe end

document.querySelectorAll('.menu h6').forEach(item => {
  item.addEventListener('click', () => {
    const sectionId = item.getAttribute('data-target');
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });

      // Optional: Close menu after click
      document.querySelector('.menu').classList.remove('active');
      document.querySelector('.container').classList.remove('change');
    }
  });
});




/*

const sectionActions = {
  personal: {
    text: "Show More",
    onClick: () => {
      alert("Showing more personal projects!");
      // custom logic for personal projects
    }
  },
  clients: {
    text: "Hire Me!",
    onClick: () => {
      alert("Contacting for client work...");
      // open your contact form or redirect to email
    }
  },
  collab: {
    text: "Let's Collab!",
    onClick: () => {
      alert("Starting a collaboration!");
      // collaboration-related logic
    }
  }
};

const projectActionBtn = document.getElementById("projectActionBtn");

// This function updates the button whenever a section changes
function updateProjectButton(section) {
  if (sectionActions[sectionKey]) {
    projectActionBtn.textContent = sectionActions[sectionKey].text;
    projectActionBtn.onclick = sectionActions[sectionKey].onClick;
    projectActionBtn.style.display = "inline-block"; // show button
  } else {
    projectActionBtn.style.display = "none"; // hide button if section unknown
  }
}

// Example: call this when tab changes
// updateProjectButton("personal");
// updateProjectButton("clients");
// updateProjectButton("collab");




#projectActionBtn {
  padding: 10px 20px;
  background: gold;
  border: none;
  border-radius: 8px;
  color: black;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  transition: background 0.3s ease;
}

#projectActionBtn:hover {
  background: #e6b800;
}
*/


// Modal elements
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Select all certificate images
document.querySelectorAll(".certContainer img").forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.textContent = this.alt || ""; // show alt text if available
  });
});

// Close modal when X is clicked
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close modal if clicking outside the image
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
