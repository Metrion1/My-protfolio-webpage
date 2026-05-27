

document.addEventListener('DOMContentLoaded', function () {

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