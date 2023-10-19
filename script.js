(() => {
    document.addEventListener("DOMContentLoaded", function () {


        const hamburger = document.querySelector('#js-hamburger');
        const nav = document.querySelector('#js-slide-menu');

        hamburger.addEventListener('click', function () {

            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        const targets = document.getElementsByClassName('fade');
        for (let i = targets.length; i--;) {
            let observer = new IntersectionObserver((entries, observer) => {
                for (let j = entries.length; j--;) {
                    if (entries[j].isIntersecting) {
                        entries[j].target.classList.add('active');
                    } else {
                        entries[j].target.classList.remove('active');
                    }
                }
            });

            observer.observe(targets[i]);
        }

    });
})();


