document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.getElementById("sidebar");

    if (mobileMenu) {
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });

    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    const header = document.querySelector('header');
    if (header) {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;

            if (currentScroll > 80) {
                header.classList.add('shrink');
            } else {
                header.classList.remove('shrink');
            }

            document.querySelectorAll('.section').forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (sectionTop < windowHeight * 0.95) {
                    section.classList.add('visible');
                }
            });

            lastScroll = currentScroll;
        });
    }

    if (menuBtn && closeBtn && sidebar) {
        menuBtn.addEventListener("click", () => {
            sidebar.classList.add("active");
            menuBtn.classList.add("hidden");
        });

        closeBtn.addEventListener("click", () => {
            sidebar.classList.remove("active");
            menuBtn.classList.remove("hidden");
        });
    }

    console.log("JavaScript está carregado");
});