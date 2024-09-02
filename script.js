document.addEventListener("DOMContentLoaded", () => {
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
