
    function toggleMenu(x) {
      x.classList.toggle("change");
      const dropdown = x.closest('.dropdown');
      dropdown.classList.toggle("show");
    }
    
    
    
  function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString(); // Formats time as HH:MM:SS
    document.getElementById('clock').textContent = timeString;
  }
  setInterval(updateClock, 1000); // Update every second
  updateClock(); // Initial call

 