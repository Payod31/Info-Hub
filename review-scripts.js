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

    // Create a new review object
    var review = {
        name: nameInput.value,
        rating: ratingSelect.value,
        comment: commentTextarea.value
    };

    // Add the review to the list
    addReviewToList(review);

    // Clear the form inputs
    nameInput.value = '';
    ratingSelect.value = '';
    commentTextarea.value = '';
}

// Function to add a review to the reviews list
function addReviewToList(review) {
    // Get the reviews list container
    var reviewsList = document.getElementById('reviewsList');

    // Create a new list item for the review
    var reviewItem = document.createElement('li');
    reviewItem.innerHTML = `<strong>${review.name}</strong> - ${review.rating} stars<br>${review.comment}`;

    // Add the review to the list
    reviewsList.appendChild(reviewItem);
}

// Event listener for form submission
document.getElementById('reviewForm').addEventListener('submit', submitReview);
