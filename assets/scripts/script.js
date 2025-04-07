document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Greeting
  const hours = new Date().getHours();
  const greeting = document.querySelector("header h1");
  if (hours < 12) {
    greeting.textContent = "Good Morning! Welcome to My Website";
  } else if (hours < 18) {
    greeting.textContent = "Good Afternoon! Welcome to My Website";
  } else {
    greeting.textContent = "Good Evening! Welcome to My Website";
  }

  // Theme Toggle
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Theme";
  toggleButton.style.margin = "10px";
  document.body.prepend(toggleButton);

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
  });

  // Load Theme Preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  // Portfolio Filtering
  const filters = document.querySelectorAll("#filters button");
  const projects = document.querySelectorAll(".project");

  if (filters) {
    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        const category = filter.getAttribute("data-filter");
        projects.forEach((project) => {
          if (category === "all" || project.getAttribute("data-category") === category) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });
      });
    });
  }

  // Dynamic Blog Posts
  const blogPosts = [
    { title: "My First Blog Post", content: "This is the content of my first blog post." },
    { title: "Learning JavaScript", content: "JavaScript is a versatile programming language." },
    { title: "Building a Portfolio", content: "Tips and tricks for creating a great portfolio." },
  ];

  const blogContainer = document.getElementById("blog-posts");
  if (blogContainer) {
    blogPosts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("blog-post");
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      `;
      blogContainer.appendChild(postElement);
    });
  }
});