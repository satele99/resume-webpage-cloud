

// Show/Hide Back to Top Button
window.onscroll = function () {
    const backToTopButton = document.getElementById('backToTop');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
};

// Scroll to Top Functionality
document.getElementById('backToTop').onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Simulated visitor count fetching
document.addEventListener('DOMContentLoaded', function () {
    // Replace this with the code that fetches the actual visitor count from your backend
    const simulatedVisitorCount = 123; // Placeholder for demonstration

    // Display the visitor count
    document.getElementById('visitorCount').textContent = simulatedVisitorCount;
});

