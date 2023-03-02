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

window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};     
      formbutton("create", {
        action: "https://formspree.io/f/xdovzlev",
        title: "Message Me!",
        fields: [
        { 
            type: "text",  
            name: "subject",
            required: true,
            placeholder: "Subject"
          },
          { 
            type: "email", 
            name: "email",
            required: true,
            placeholder: "Enter email address"
          },
          {
            type: "textarea",
            name: "message",
            placeholder: "Type your message",
          },
          { type: "submit" }      
        ],
      });