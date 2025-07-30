 
  const menuButton = document.getElementById("menu");
  const menuPanel = document.getElementById("menuPanel");

  // Toggle open/close
  menuButton.addEventListener("click", function (e) {
    e.stopPropagation(); // prevent triggering document click
    menuButton.classList.toggle("change");
    menuPanel.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!menuPanel.contains(e.target) && !menuButton.contains(e.target)) {
      menuPanel.classList.remove("active");
      menuButton.classList.remove("change");
    }
  });

