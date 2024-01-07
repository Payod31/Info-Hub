// JavaScript for the Review Page

// Function to handle form submission
function submitReview(event) {
    event.preventDefault();

    // Get form elements
    var nameInput = document.getElementById('name');
    var ratingSelect = document.getElementById('rating');
    var commentTextarea = document.getElementById('comment');

    // Validate form inputs
    if (!nameInput.value || !ratingSelect.value || !commentTextarea.value) {
        alert('Please fill in all fields.');
        return;
    }

    // Display a thank you message
    alert('Thank you for your review!');

    // Redirect to subscription.html after 2 seconds
    setTimeout(function () {
        window.location.href = 'subscription.html';
    }, 2000);
}

// Event listener for form submission
document.getElementById('reviewForm').addEventListener('submit', submitReview);
