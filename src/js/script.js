window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const target = document.querySelector('.nav');

    if (scrolled > 40) {
        target.classList.add('nav--scrolled');
    } else {
        target.classList.remove('nav--scrolled');
    }
});