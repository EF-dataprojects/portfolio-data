const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const plus = header.querySelector("span");
    if(content.style.display === "block") {
      content.style.display = "none";
      plus.textContent = "+";
    } else {
      content.style.display = "block";
      plus.textContent = "-";
    }
  });
});
