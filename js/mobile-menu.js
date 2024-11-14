document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const mobileNav = document.querySelector('.mobile-navigation');
    const header = document.querySelector('.header');
  
    // Функція для відкриття/закриття меню
    const toggleMenu = () => {
      if (header.classList.contains('active')) {
        header.classList.remove('active');
        mobileNav.style.top = '-100%'; // Ховаємо мобільне меню
      } else {
        header.classList.add('active');
        mobileNav.style.top = '0'; // Відкриваємо мобільне меню
      }
    };
  
    menuToggle.addEventListener('click', toggleMenu); // Відкриття меню
    menuClose.addEventListener('click', toggleMenu); // Закриття меню
  });
  