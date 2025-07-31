
    const menuButton = document.getElementById("menu");
    const menuPanel = document.getElementById("menuPanel");

    menuButton.addEventListener("click", function (e) {
      e.stopPropagation();
      menuButton.classList.toggle("change");
      menuPanel.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    document.addEventListener("click", function (e) {
      if (!menuPanel.contains(e.target) && !menuButton.contains(e.target)) {
        menuPanel.classList.remove("active");
        menuButton.classList.remove("change");
        document.body.classList.remove("menu-open");
      }
    });

    document.getElementById("resumeButton").addEventListener("click", function () {
      window.open("path/to/your/resume.pdf", "_blank");
    });
