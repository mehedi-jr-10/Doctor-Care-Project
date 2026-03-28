// initialize DOM
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const menu = document.querySelectorAll('.navbar-menu');
const burger = document.querySelectorAll('.navbar-burger');
const close = document.querySelectorAll('.navbar-close');
const backdrop = document.querySelectorAll('.navbar-backdrop');
const mobileMenuLink = document.querySelectorAll('#mobile-menu a[href^="#"]');

document.addEventListener("DOMContentLoaded", () => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    if (burger.length && menu.length) {
        handleMobileMenuToggle(burger, menu);
    }

    if (close.length && backdrop.length && menu.length) {
        handleMobileMenuClose(close, menu, backdrop);
    }

    if (mobileMenuLink.length && navLinks.length && menu.length) {
        handleMobileMenuLinksClick(mobileMenuLink, navLinks, menu);
    }
});

// scroll active
function setActiveLink(sections, navLinks) {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach(link => link.classList.remove('active'));

    if (navLinks[index]) {
        navLinks[index].classList.add('active');
    }
}

function handleScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    setActiveLink(sections, navLinks);
}

// mobile menu open
function handleMobileMenuToggle(burger, menu) {
    burger.forEach(b => {
        b.addEventListener("click", () => {
            menu.forEach(m => m.classList.toggle("hidden"));
        });
    });
}

// mobile menu close
function handleMobileMenuClose(close, menu, backdrop) {
    close.forEach(c => {
        c.addEventListener("click", () => {
            menu.forEach(m => m.classList.add("hidden"));
        });
    });

    backdrop.forEach(b => {
        b.addEventListener("click", () => {
            menu.forEach(m => m.classList.add("hidden"));
        });
    });
}

// mobile link click
function handleMobileMenuLinksClick(mobileMenuLink, navLinks, menu) {
    mobileMenuLink.forEach(anchor => {
        anchor.addEventListener("click", function () {

            // remove all active
            navLinks.forEach(link => link.classList.remove("active"));

            // find clicked link
            const targetLink = document.querySelector(
                `nav a[href="${this.getAttribute("href")}"]`
            );

            // add active
            if (targetLink) {
                targetLink.classList.add("active");
            }

            // close menu
            menu.forEach(m => m.classList.add("hidden"));
        });
    });
}