const navToggle = document.querySelector('.nav-toggle'); // nav-toggle
const navBar = document.querySelector('.navbar'); // navbar

navToggle.addEventListener('click', function () { // click event
  navBar.classList.toggle('active'); // toggle class active
});

navBar.addEventListener('click', function () { // click event
  navBar.classList.remove('active'); // remove class active
});

