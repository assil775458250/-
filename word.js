window.onload = function () {
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
});

    ScrollReveal().reveal('.mercury,.zahra', {origin: 'top'});
    ScrollReveal().reveal('.jupiter ,.saturn', {origin: 'bottom'});
    ScrollReveal().reveal('.earth,.uranus,.pluto', {origin: 'left'});
    ScrollReveal().reveal('.sun,.mars,.neptune', {origin: 'right'});
};

