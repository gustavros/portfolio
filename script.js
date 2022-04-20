const navToggle = document.querySelector('.nav-toggle');
const navBar = document.querySelector('.navbar');

navToggle.addEventListener('click', function () {
  navBar.classList.toggle('active');
});

navBar.addEventListener('click', function () {
  navBar.classList.remove('active');
});
