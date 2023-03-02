const menuBtn = document.querySelector('.menu-btn');
const reaction = document.querySelector('.menu-btn_options');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    reaction.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach((item) => item.classList.add('open'));

    showMenu = true;
  } else {
    reaction.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach((item) => item.classList.remove('open'));

    showMenu = false;
  }
}

menuBtn.addEventListener('click', toggleMenu);


function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "phildeoner2020@gmail.com",
    Password : "D2C30E7CF45CD482CD7422C300B705FB477A",
    To : 'phildeoner@gmail.com',
    From : document.getElementById('email').value,
    Subject : document.getElementById('subject').value,
    Body : document.getElementById('message').value
  }).then(
    message => alert('Message Successfully Sent')
  );
}