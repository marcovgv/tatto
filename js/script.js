
        const nav = document.querySelector('nav');

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 50) {
                nav.classList.add('activar-navbar');
            } else {
                nav.classList.remove('activar-navbar');
            }
        })
   


      