// Button click animation for level buttons
const levelButtons = document.querySelectorAll('.level-btn');

levelButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert(Welcome to ${this.previousElementSibling.previousElementSibling.textContent}! Get ready to dive into this level!);
    });
});

// Form submission handling for the contact form (if needed)
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}
