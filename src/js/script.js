window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const target = this.document.querySelector('.nav');

    if (scrolled > 40 && this.document.documentElement.clientWidth >= 730) {
        target.classList.add('nav--scrolled');
    } else {
        target.classList.remove('nav--scrolled');
    }
});


function openMenu() {
    const menu = document.querySelector('.menu')

    menu.classList.add('menu--opened');
}

function closeMenu() {
    const menu = document.querySelector('.menu')

    menu.classList.remove('menu--opened');
}