const navToggler = document.querySelector('.navbar-toggler');
const listGroup = document.querySelector('.list-group');

navToggler.addEventListener('click', () => listGroup.classList.toggle('show'));