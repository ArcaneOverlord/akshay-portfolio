
    const canvas = document.getElementById("starfield");
    const ctx = canvas.getContext("2d");

    let width, height;
    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Create stars
    const starCount = 100;
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.2,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.03 + 0.005,
        direction: Math.random() > 0.5 ? 1 : -1
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let star of stars) {
        star.opacity += star.twinkleSpeed * star.direction;
        if (star.opacity <= 0) {
          star.opacity = 0;
          star.direction = 1;
        }
        if (star.opacity >= 1) {
          star.opacity = 1;
          star.direction = -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    animate();
  