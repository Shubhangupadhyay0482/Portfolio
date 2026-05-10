document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  year.textContent = new Date().getFullYear();

 const mouseGlow = document.getElementById("mouse-glow");

window.addEventListener("mousemove", function (event) {
  mouseGlow.style.background =
    `radial-gradient(650px circle at ${event.clientX}px ${event.clientY}px, rgba(0, 242, 254, 0.09), transparent 42%)`;
});
  const words = [
    "premium websites",
    "frontend UI",
    "responsive designs",
    "brand landing pages"
  ];

  const typingText = document.getElementById("typing-text");

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    let speed = isDeleting ? 55 : 95;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 1200;
      isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 400;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.14
  });

  revealElements.forEach(function (element) {
    revealObserver.observe(element);
  });
});