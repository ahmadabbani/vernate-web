document.addEventListener("DOMContentLoaded", () => {
  // ANIMATIONS
  /***************Home**********************/
  ScrollReveal().reveal(".main-title", {
    origin: "left", // Animates from the left
    distance: "100px", // Adjusts the starting position
    interval: 500,
  });

  ScrollReveal().reveal(".hero-sc-title", {
    origin: "right", // Animates from the right
    distance: "100px", // Adjusts the starting position
    interval: 500,
  });
  ScrollReveal().reveal(".hero-left-img", {
    origin: "top", // Animates from the right
    distance: "100px", // Adjusts the starting position
    interval: 500,
  });
  ScrollReveal().reveal(".hero-right-img", {
    origin: "bottom", // Animates from the right
    distance: "100px", // Adjusts the starting position
    interval: 500,
  });
  ScrollReveal().reveal(".hero-p", {
    opacity: 0, // Start with opacity 0
    duration: 1000, // Duration of the animation in milliseconds
    delay: 500, // Delay before the animation starts
    reset: true, // Optional: allows the animation to trigger again when scrolling back
  });

  // Animate the first box from the left
  ScrollReveal().reveal(".box:nth-of-type(1)", {
    origin: "left", // From the left
    distance: "100px", // Adjust distance as needed
    duration: 1000, // Animation duration
    delay: 300, // Delay before animation starts
    opacity: 0, // Start with opacity 0
    reset: true, // Optional: reset the animation on scroll up
  });

  // Animate the second box from the right
  ScrollReveal().reveal(".box:nth-of-type(2)", {
    origin: "right", // From the right
    distance: "100px", // Adjust distance as needed
    duration: 1000, // Animation duration
    delay: 600, // Delay before animation starts
    opacity: 0, // Start with opacity 0
    reset: true, // Optional: reset the animation on scroll up
  });

  // Animate the third box from the bottom
  ScrollReveal().reveal(".box:nth-of-type(3)", {
    origin: "bottom", // From the bottom
    distance: "100px", // Adjust distance as needed
    duration: 1000, // Animation duration
    delay: 900, // Delay before animation starts
    opacity: 0, // Start with opacity 0
    reset: true, // Optional: reset the animation on scroll up
  });
  ScrollReveal().reveal(".clients img", {
    opacity: 0, // Start with opacity 0
    duration: 1000, // Duration of the animation in milliseconds
    delay: 500, // Delay before the animation starts
    reset: true, // Optional: allows the animation to trigger again when scrolling back
  });

  ScrollReveal().reveal(".section-title", {
    origin: "left", // Animates from the left
    distance: "100px", // Adjusts the starting position
    interval: 500,
    reset: true,
  });

  ScrollReveal().reveal(".about-p", {
    origin: "right", // Animates from the right
    distance: "100px", // Adjusts the starting position
    interval: 500,
    reset: true,
  });
  ScrollReveal().reveal(".about-content .btn", {
    origin: "bottom", // Animates from the right
    distance: "100px", // Adjusts the starting position
    interval: 500,
    reset: true,
  });
  ScrollReveal().reveal(".hero-right-img", {
    origin: "bottom", // Animates from the right
    distance: "100px", // Adjusts the starting position
    interval: 500,
    reset: true,
  });

  ScrollReveal().reveal(".service-box img", {
    origin: "right", // Animates from the right
    distance: "100px", // Adjusts the starting position
    interval: 500,
    reset: true,
  });
  ScrollReveal().reveal(".service-box .content", {
    origin: "left", // Animates from the right
    distance: "100px", // Adjusts the starting position
    interval: 500,
    reset: true,
  });
  ScrollReveal().reveal(".third-service-img", {
    opacity: 0, // Start with opacity 0
    duration: 1000, // Duration of the animation in milliseconds
    delay: 500, // Delay before the animation starts
    reset: true,
  });

  ScrollReveal().reveal("#works .btn", {
    origin: "right", // Animates from the right
    distance: "100px", // Adjusts the starting position
    interval: 500,
    reset: true,
  });

  ScrollReveal().reveal(".filter", {
    origin: "bottom", // Animates from the right
    distance: "100px", // Adjusts the starting position
    interval: 500,
    reset: true,
  });

  ScrollReveal().reveal(".all .item", {
    scale: 0.8, // Start with a smaller scale (i.e., 80% of the original size)
    duration: 500, // Duration of the animation in milliseconds
    delay: 500, // Delay before the animation starts
    reset: true, // Optional: Reset the animation on scroll up
    easing: "ease-out", // Optional: Easing function for smoothness
  });

  ScrollReveal().reveal(".contact-left", {
    origin: "left", // Animates from the right
    distance: "200px", // Adjusts the starting position
    interval: 800,
    reset: true,
  });
  ScrollReveal().reveal(".contact-right", {
    origin: "right", // Animates from the right
    distance: "200px", // Adjusts the starting position
    interval: 800,
    reset: true,
  });

  ScrollReveal().reveal("#contact .text", {
    origin: "bottom", // Animates from the right
    distance: "100px", // Adjusts the starting position
    reset: true,
  });

  ScrollReveal().reveal(".contact-list", {
    origin: "bottom", // Animates from the right
    distance: "100px", // Adjusts the starting position
    interval: 400,
    delay: 200,
    reset: true,
  });

  ScrollReveal().reveal(".third-row", {
    origin: "bottom", // Animates from the right
    distance: "100px", // Adjusts the starting position
    delay: 900,
    reset: true,
  });

  /******************HEADER
  function scrollHeader() {
    const header = document.getElementById("header");
    //when the scroll is greater than 50 viewport
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  }

  window.addEventListener("scroll", scrollHeader);
****/
  /******************Active Link
  const navlink = document.querySelectorAll(".nav-link");

  function activeLink() {
    navlink.forEach((a) => a.classList.remove("active-link"));
    this.classList.add("active-link");
  }
  navlink.forEach((a) => a.addEventListener("click", activeLink));
  *******/

  /*****************Show Menu
  const navMenu = document.getElementById("nav-menu");
  navToggle = document.getElementById("nav-toggle");
  navClose = document.getElementById("nav-close");
*******/
  /*******Menu Show
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
*****/
  /*******Menu Hide
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
    *******/

  /**********Menu Hide when we click on menu-link
  const navLink = document.querySelectorAll(".nav-link");

  function linkAction() {
    navMenu.classList.remove("show-menu");
  }

  navLink.forEach((link) => link.addEventListener("click", linkAction));
******/
  const buttons = document.querySelectorAll(".filter-btns");
  const containers = document.querySelectorAll("#works .items");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      // Remove the bold class from all buttons
      buttons.forEach((btn) => btn.classList.remove("bold"));

      // Add the bold class to the clicked button
      button.classList.add("bold");
      containers.forEach((container) => {
        if (filter === "all") {
          // Show only the "all" container
          if (container.classList.contains("all")) {
            container.style.display = "block";
          } else {
            container.style.display = "none";
          }
        } else {
          // Show the matching container or hide others
          if (container.classList.contains(filter)) {
            container.style.display = "block";
          } else {
            container.style.display = "none";
          }
        }
      });
    });
  });
  // Initialize with "All" button as bold
  buttons[0].classList.add("bold"); // Assumes the first button is "All"

  const plusButtons = document.querySelectorAll(".plus");
  plusButtons.forEach((plus) => {
    plus.addEventListener("click", () => {
      window.location.href = "page.html";
    });
  });
});
