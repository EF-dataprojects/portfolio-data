const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  toggle.textContent = body.classList.contains("light") ? "🌞" : "🌙";
});

// scroll reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));

document.querySelectorAll(".project-link").forEach(card => {
  card.addEventListener("click", () => {
    window.location.href = card.dataset.link;
  });
});
