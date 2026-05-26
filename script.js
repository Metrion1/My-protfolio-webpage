

document.addEventListener('DOMContentLoaded', function () {

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