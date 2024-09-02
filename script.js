document.addEventListener("DOMContentLoaded", () => {
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
