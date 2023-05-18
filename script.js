// script.js

// Example function to show a message when the user clicks on a navigation link
function showClickMessage() {
    alert("You clicked on a navigation link!");
  }
  
  // Add event listeners to the navigation links
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", showClickMessage);
  });
  