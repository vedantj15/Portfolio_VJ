// Resume button functionality
document.getElementById('resume-link').addEventListener('click', function(event) {
    // event.preventDefault(); // Prevent the default action

    // Open the resume in a new tab
    window.open(this.href, '_blank');

    // Download the resume
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1am4tgU8kRIa139Vs8SAN2HRxEtuV1YgN';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Hamburger Menu Toggle with ARIA attributes
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle'); // For the animation
});

// Smooth scroll with adjustment for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetPosition = targetElement.offsetTop - 80; // Adjust the '80' to the navbar height

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
