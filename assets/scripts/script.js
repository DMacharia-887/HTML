document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Greeting
  const hours = new Date().getHours();
  const greeting = document.querySelector("header h1");
  if (greeting) {
    if (hours < 12) {
      greeting.textContent = "Good Morning! Welcome to My Website";
    } else if (hours < 18) {
      greeting.textContent = "Good Afternoon! Welcome to My Website";
    } else {
      greeting.textContent = "Good Evening! Welcome to My Website";
    }
  }

  // Theme Toggle Button
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Light/Dark Mode";
  toggleButton.classList.add("theme-toggle");
  toggleButton.style.marginLeft = "10px";

  // Insert next to nav
  const nav = document.querySelector("header nav");
  if (nav) {
    nav.appendChild(toggleButton);
  } else {
    document.body.prepend(toggleButton);
  }

  // Toggle theme logic
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
  });

  // Apply stored theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  // Portfolio Filtering
  if (document.querySelector("#filters")) {
    const filters = document.querySelectorAll("#filters button");
    const projects = document.querySelectorAll(".project");

    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        const category = filter.getAttribute("data-filter");
        projects.forEach((project) => {
          project.style.display = category === "all" || project.getAttribute("data-category") === category ? "block" : "none";
        });
      });
    });
  }

  // Blog Posts (only for blog.html)
  if (document.getElementById("blog-posts")) {
    const blogPosts = [
      {
        title: "My First Blog Post",
        content: `This is the beginning of my blogging journey...`,
      },
      {
        title: "Learning JavaScript",
        content: `JavaScript is one of the first programming languages many people learn...`,
      },
      {
        title: "Building a Portfolio",
        content: `If you’re in tech, design, or any creative field, a strong portfolio is essential...`,
      },
    ];

    const blogContainer = document.getElementById("blog-posts");
    blogPosts.forEach((post, index) => {
      const postElement = document.createElement("div");
      postElement.classList.add("blog-post");

      const previewContent = post.content.split("\n")[0];
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p class="preview">${previewContent}</p>
        <p class="full-content" style="display: none;">${post.content}</p>
        <button class="read-more" data-index="${index}">Read More</button>
      `;

      blogContainer.appendChild(postElement);
    });

    document.querySelectorAll(".read-more").forEach((button) => {
      button.addEventListener("click", (e) => {
        const post = e.target.closest(".blog-post");
        const full = post.querySelector(".full-content");
        const preview = post.querySelector(".preview");
        const expanded = full.style.display === "block";
        full.style.display = expanded ? "none" : "block";
        preview.style.display = expanded ? "block" : "none";
        e.target.textContent = expanded ? "Read More" : "Read Less";
      });
    });
  }
});
