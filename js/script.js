document.addEventListener('DOMContentLoaded', () => {
    const emergingContainer = document.querySelector('.emerging-container');
    const emergingLink = emergingContainer.querySelector('a');

    emergingLink.addEventListener('click', (e) => {
        e.preventDefault();
        emergingContainer.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!emergingContainer.contains(e.target)) {
            emergingContainer.classList.remove('active');
        }
    });
}); 