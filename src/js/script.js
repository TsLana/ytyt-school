const hamburger = document.querySelector('.hamburger'),
      submenu = document.querySelector('.submenu'),
      closeElem = document.querySelector('.submenu__close');

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        submenu.classList.toggle('submenu_active');
    });

    closeElem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            submenu.classList.toggle('submenu_active');
        })
})