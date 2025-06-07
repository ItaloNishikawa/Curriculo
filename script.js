const menu = document.querySelector("nav");
    const openMenu = document.getElementById("openMenu");
    const closeMenu = document.getElementById("closeMenu");

    function isMobile() {
        return window.innerWidth <= 717;
    }

    
    openMenu.addEventListener('click', () => {
        menu.style.display = "flex";
        menu.style.right = (menu.offsetWidth * -1) + 'px';

        setTimeout(() => {
            menu.style.opacity = '1';
            menu.style.right = '0';
            openMenu.style.display = 'none'; // Esconde o botão ☰
        }, 10);
    });


    closeMenu.addEventListener('click', () => {
        menu.style.opacity = '0';
        menu.style.right = (menu.offsetWidth * -1) + 'px';

        setTimeout(() => {
            menu.removeAttribute('style');
            openMenu.removeAttribute('style'); // Mostra o botão ☰ de novo
        }, 200);
    });

    window.addEventListener("resize", () => {
        if (!isMobile()) {
            menu.removeAttribute('style');
            openMenu.removeAttribute('style');
        } else {
            menu.style.display = 'none';
            menu.style.opacity = '0';
            menu.style.right = (menu.offsetWidth * -1) + 'px';
        }
    });