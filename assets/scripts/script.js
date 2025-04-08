document.addEventListener("DOMContentLoaded", () => {
  // Set dynamic greeting based on time of day
  const greeting = document.querySelector("header h1");
  if (greeting) {
    const hours = new Date().getHours();
    if (hours < 12) {
      greeting.textContent = "☀️ Good Morning! Welcome to My Website";
    } else if (hours < 18) {
      greeting.textContent = "🌤️ Good Afternoon! Welcome to My Website";
    } else {
      greeting.textContent = "🌙 Good Evening! Welcome to My Website";
    }
  }

  // This function toggles dark/light mode
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  // Save the theme preference in local storage so it persists across sessions
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Load the theme preference from local storage
window.onload = function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
};

// Add an event listener to the theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);


  // Portfolio filtering (if present)
  const filtersContainer = document.querySelector("#filters");
  if (filtersContainer) {
    const filters = filtersContainer.querySelectorAll("button");
    const projects = document.querySelectorAll(".project");

    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        const category = filter.getAttribute("data-filter");
        projects.forEach((project) => {
          project.style.display =
            category === "all" || project.getAttribute("data-category") === category
              ? "block"
              : "none";
        });
      });
    });
  }

  // Blog post content (if blog section present)
  const blogContainer = document.getElementById("blog-posts");
  if (blogContainer) {
    const blogPosts = [
      {
        title: "My First Blog Post",
        content: `This is the beginning of my blogging journey. I'm thrilled to start sharing my thoughts and experiences with the world. Stay tuned for more content coming soon!`
      },
      {
        title: "Learning JavaScript in 2025",
        content: `JavaScript continues to evolve and remains one of the most versatile languages in web development. Whether you're building front-end apps or server-side logic, it's still a go-to language.`
      },
      {
        title: "Building a Personal Portfolio Site",
        content: `A portfolio is your digital identity. It's where your work lives, and it’s the first impression for many employers or clients. Start simple, and iterate with real feedback.`
      },
      {
        title: "Exploring CSS Grid vs Flexbox",
        content: `Both Grid and Flexbox are powerful layout systems in CSS. Grid is ideal for 2D layouts, while Flexbox shines in 1D. The key is knowing when and how to use them together.`
      },
      {
        title: "Behind the Scenes: How I Designed This Website",
        content: `Designing this site was a labor of love. I used a combination of Figma for mockups, VS Code for development, and feedback from friends to shape the final experience.`
      }
    ];

    blogPosts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("blog-post");
      const preview = post.content.split(".")[0] + ".";

      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p class="preview">${preview}</p>
        <p class="full-content" style="display: none;">${post.content}</p>
        <button class="read-more">Read More</button>
      `;

      blogContainer.appendChild(postElement);
    });

    // Read More / Read Less toggle
    blogContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("read-more")) {
        const post = e.target.closest(".blog-post");
        const full = post.querySelector(".full-content");
        const preview = post.querySelector(".preview");
        const expanded = full.style.display === "block";

        full.style.display = expanded ? "none" : "block";
        preview.style.display = expanded ? "block" : "none";
        e.target.textContent = expanded ? "Read More" : "Read Less";
      }
    });
  }

  // Handle form submission and show toast notification
  const contactForm = document.getElementById("contact");
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = "Your message has been sent successfully!";
  document.body.appendChild(toast);

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent actual form submission for this demo
      
      // Show Toast
      toast.classList.add("show");
      
      // Hide Toast after 3 seconds
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
      
      // Reset form
      contactForm.reset();
    });
  }
});
