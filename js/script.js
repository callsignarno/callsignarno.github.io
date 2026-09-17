// script.js

// 1️⃣ Toggle dropdowns on click (mobile & desktop)
document.querySelectorAll(".dropdown > a").forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent link jump
    const menu = toggle.nextElementSibling;

    // Close all other dropdowns
    document.querySelectorAll(".dropdown-menu").forEach(drop => {
      if (drop !== menu) drop.classList.remove("show");
    });

    // Toggle clicked dropdown
    menu.classList.toggle("show");
  });
});

// 2️⃣ Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
      menu.classList.remove("show");
    });
  }
});

// 3️⃣ Smooth scrolling with offset for sticky header
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = document.querySelector("header").offsetHeight;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});
