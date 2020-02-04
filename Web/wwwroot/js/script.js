window.blazorHelpers = {
    scrollToFragment: (target) => {
        var topoffset = 55;
        var element = document.getElementById(target);
        if (element) {
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - topoffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            return true;
        }

        const currentlyActive = document.querySelector('nav a.nav-item.active');
        const shouldBeActive = document.querySelector('nav a.nav-item[href="' + target + '"]');

        if (currentlyActive) {
            currentlyActive.classList.remove('active');
        }
        if (shouldBeActive) {
            shouldBeActive.classList.add('active');
        }

        document.querySelector('a.nav-link[href="#page-hero"]').classList.toggle('active', target === '');

        return false;
    }
};

function highlightMenu() {
    const sections = document.querySelectorAll('.page-section,.site-header');
    const config = {
        rootMargin: '-55px 0px -85%'
    };

    let observer = new IntersectionObserver(function
        (entries, self) {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                intersectionHandler(entry);
            }
        });
    }, config);

    sections.forEach(section => observer.observe(section));
}

function intersectionHandler(entry) {
    const id = entry.target.id;
    document.querySelector('header nav').classList.toggle('inbody', id !== 'page-hero');
    if (id === 'page-media') {
        document.querySelector('#page-media .layout-animation').classList.add('animated', 'fadeInRight');
    }

    const currentlyActive = document.querySelector('nav a.nav-item.active');
    const shouldBeActive = document.querySelector('nav a.nav-item[href="#' + id + '"]');

    if (currentlyActive) {
        currentlyActive.classList.remove('active');
    }
    if (shouldBeActive) {
        shouldBeActive.classList.add('active');
    }
}

