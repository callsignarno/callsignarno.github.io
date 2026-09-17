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
    if (menu) {
      menu.classList.toggle("show");
    }
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
    const href = this.getAttribute("href");
    if (href && href !== "#" && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        // Close all dropdown menus on selection
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
          menu.classList.remove("show");
        });

        const header = document.querySelector("header");
        const headerOffset = header ? header.offsetHeight : 0;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  });
});
