// Custom JavaScript for Bootstrap Workshop 6

// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {

    // Log a message when the page loads
    console.log('Bootstrap Workshop 6 loaded successfully!');

    // Example: Add click event to all buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Prevent default action for demo links
            if (this.getAttribute('href') === '#') {
                event.preventDefault();
            }
            console.log('Button clicked:', this.textContent);
        });
    });

    // Example: Log when navbar is toggled on mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            console.log('Mobile menu toggled');
        });
    }

    // Smooth scroll for navbar links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                event.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // You can add more custom functionality here
    // For example:
    // - Form validation
    // - Dynamic content loading
    // - Interactive features

});

// Example function you can call
function showAlert(message) {
    alert(message);
}

// Example function to change grid box colors
function changeGridColors() {
    const gridBoxes = document.querySelectorAll('.grid-box');
    const colors = ['#0d6efd', '#6c757d', '#28a745', '#dc3545', '#ffc107', '#17a2b8'];

    gridBoxes.forEach(function(box, index) {
        box.style.backgroundColor = colors[index % colors.length];
    });
}