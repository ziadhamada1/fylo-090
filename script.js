const menuIcon = document.getElementById('menuIcon');
const menuIconIcon = menuIcon.querySelector('i'); // الأيقونة جوا الديف
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  // نغير شكل الأيقونة
  if (navbar.classList.contains('active')) {
    menuIconIcon.classList.remove('fa-bars');
    menuIconIcon.classList.add('fa-times');
  } else {
    menuIconIcon.classList.remove('fa-times');
    menuIconIcon.classList.add('fa-bars');
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIconIcon.classList.remove('fa-times');
    menuIconIcon.classList.add('fa-bars');
  });
});
