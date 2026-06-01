
document.addEventListener('DOMContentLoaded', function () {

  const words = ["Software Engineer", "Fashion Designer", "Author", "Inventor", "Web Developer"];
  let wordIndex = 0;
  let charIndex = 0;

  function typeEffect() {
    const target = document.getElementById("typing-text");
    if (!target) return; // guard: stop if element isn't present on this page
    const currentWord = words[wordIndex];

    if (charIndex < currentWord.length) {
      target.textContent += currentWord.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100); // Speed of typing
    } else {
      // Pause at the end of the word, then clear and move to next
      setTimeout(() => {
        target.textContent = "";
        charIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
      }, 2000);
    }
  }
  // Only start the typing effect on pages that include the target element
  if (document.getElementById("typing-text")) {
    typeEffect();
  }

  setInterval(() => {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
  }, 1000);

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", openNav);
  }

  function openNav() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  };

  const sidebar = document.getElementById('mySidebar');
  const mainContent = document.getElementById('main');



  const closeBtn = document.getElementById('closebtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', function (event) {
      event.preventDefault();
      sidebar.style.width = '0';
      mainContent.style.marginLeft = '0';
    });
  }

  const openBtn = document.getElementById('openbtn');
  if (openBtn) {
    openBtn.addEventListener('click', function (event) {
      event.preventDefault();
      sidebar.style.width = '250px';
      mainContent.style.marginLeft = '250px';
    });
  }
});