// Smooth scroll for navigation
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll spy - highlight active menu item
window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll("section");
  let scrollPos = window.scrollY + 100;

  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll(".nav a").forEach(a => a.classList.remove("active"));
      document.querySelector(`.nav a[href='#${sec.id}']`).classList.add("active");
    }
  });
});

// Article card fade-in
const cards = document.querySelectorAll(".card");
const revealOnScroll = () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 50) {
      card.classList.add("show");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);

// Typing effect for hero text
const words = ["Welcome to a Modern Blog", "Where Design Meets Experience", "Stay Inspired. Stay Connected."];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function typeEffect() {
  currentWord = words[i];
  document.getElementById("animated-text").innerHTML = currentWord.substring(0, j);

  if (!isDeleting && j < currentWord.length) {
    j++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
    setTimeout(typeEffect, 1200);
  }
}
typeEffect();

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert("✅ Thank you! Your message has been sent.");
  e.target.reset();
});
