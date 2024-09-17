document.addEventListener('DOMContentLoaded', () => {
    // Highlight current page in navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.pathname === window.location.pathname) {
            link.classList.add('active');
        }
    });

    // Smooth scroll with fallback
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                window.location.hash = this.getAttribute('href');
            }
        });
    });

    // Change cursor on page load
    document.body.classList.add('custom-cursor');
});
