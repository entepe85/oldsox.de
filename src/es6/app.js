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
/*global console, window */
(() => {
    console.log('Application ready!');
})(window);
/* global window, document, require */
(() => {
    let pageScrollers = document.querySelectorAll('.nav__menu a'),
        MenuSpy = require('menuspy'),
        mainNav = document.querySelector('.nav__menu'),
        menuSpy = new MenuSpy(mainNav, {
            threshold: 115
        }),
        TweenLite = require('gsap/TweenLite'),
        scrollTo = require('gsap/ScrollToPlugin'),
        Easing = require('gsap/EasePack');

    for (let scroller of pageScrollers) {
        scroller.addEventListener('click', ev => {
            ev.preventDefault();
            let targetName = scroller.getAttribute('href'),
                targetEl = document.querySelector(targetName),
                targetOffset = targetEl.offsetTop,
                navBar = document.querySelector('.nav'),
                navHeight = navBar.clientHeight / 2;
            TweenLite.to(window, 1.5, {
                scrollTo: { y: targetOffset - navHeight },
                ease: Easing.Power3.easeOut
            });
        });
    }

    return {
        menuSpy,
        scrollTo
    };
})(window);
