/* global window, document */
(() => {
    let navBar = document.querySelector('.nav');
    const tick = () => {
        if (window.pageYOffset > navBar.clientHeight) {
            document.documentElement.classList.add('scrolled');
        } else {
            document.documentElement.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', () => {
        window.requestAnimationFrame(tick);
    });
})(window);
