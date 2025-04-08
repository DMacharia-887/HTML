document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Greeting (Optional: can be removed or modified per page)
  const hours = new Date().getHours();
  const greeting = document.querySelector("header h1");
  if (hours < 12) {
    greeting.textContent = "Good Morning! Welcome to My Website";
  } else if (hours < 18) {
    greeting.textContent = "Good Afternoon! Welcome to My Website";
  } else {
    greeting.textContent = "Good Evening! Welcome to My Website";
  }

  // Theme Toggle Button (Added inside the header for consistency)
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Theme";
  toggleButton.style.margin = "10px";
  // Placing the toggle button next to the navigation for consistency
  const header = document.querySelector("header nav");
  header.appendChild(toggleButton);

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
  });

  // Load Theme Preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  // Portfolio Filtering (Only necessary on portfolio page, skip on other pages)
  if (document.querySelector("#filters")) {
    const filters = document.querySelectorAll("#filters button");
    const projects = document.querySelectorAll(".project");

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

  // Dynamic Blog Posts with Expandable Content (Only for blog page)
  if (document.getElementById("blog-posts")) {
    const blogPosts = [
      {
        title: "My First Blog Post",
        content: `This is the beginning of my blogging journey. I’ve wanted to start a blog for a while, but like many people, I kept putting it off. Today, I decided to just hit "publish" and stop overthinking it.

        This blog will be a place for me to share what I’m learning, things I’m building, and thoughts I want to put into the world. Whether it’s coding, design, personal development, or just something interesting I came across — if it feels worth sharing, it’s going here.

        Thanks for reading, and let’s see where this goes.`,
      },
      {
        title: "Learning JavaScript",
        content: `JavaScript is one of the first programming languages many people learn — and for good reason. It’s everywhere: websites, apps, games, even servers. If you’re learning to code in 2025, JavaScript is still one of the best places to start.

        What makes it so useful is how quickly you can see results. A few lines of code and suddenly, you’re interacting with a webpage. It’s also got a huge ecosystem, from frameworks like React and Vue to tools like Node.js that let you run JavaScript outside the browser.

        Right now, I’m working on understanding functions, DOM manipulation, and basic event handling. Next up: diving into asynchronous programming and APIs.`,
      },
      {
        title: "Building a Portfolio",
        content: `If you’re in tech, design, or any creative field, a strong portfolio is essential. It’s not just a collection of work — it’s proof of what you can do, how you think, and what kind of problems you solve.

        Here are a few tips I’ve picked up:

        - Show your best work, not all your work. Quality over quantity.
        - Explain your process. What was the goal? What challenges did you face? How did you solve them?
        - Make it easy to navigate. A clean, simple layout helps your work stand out.
        - Keep it updated. It’s easy to forget, but stale portfolios send the wrong message.

        I’m currently working on mine and will share a walkthrough soon.`,
      },
    ];

    const blogContainer = document.getElementById("blog-posts");
    blogPosts.forEach((post, index) => {
      const postElement = document.createElement("div");
      postElement.classList.add("blog-post");

      // Create a short preview of the content
      const previewContent = post.content.split("\n")[0]; // First paragraph as preview

      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p class="preview">${previewContent}</p>
        <p class="full-content" style="display: none;">${post.content}</p>
        <button class="read-more" data-index="${index}">Read More</button>
      `;

      blogContainer.appendChild(postElement);
    });

    // Add event listeners to "Read More" buttons
    const readMoreButtons = document.querySelectorAll(".read-more");
    readMoreButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const postElement = event.target.parentElement;
        const fullContent = postElement.querySelector(".full-content");
        const preview = postElement.querySelector(".preview");

        if (fullContent.style.display === "none") {
          fullContent.style.display = "block";
          preview.style.display = "none";
          button.textContent = "Read Less";
        } else {
          fullContent.style.display = "none";
          preview.style.display = "block";
          button.textContent = "Read More";
        }
      });
    });
  }
});
