// JavaScript for the Review Page

// Function to handle review form submission
document.addEventListener("DOMContentLoaded", function () {
    var reviewForm = document.getElementById("reviewForm");

    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var rating = document.getElementById("rating").value;
        var comment = document.getElementById("comment").value;

        // Perform validation if needed

        // Example: Log review details to the console
        console.log("Review Submitted:");
        console.log("Name: " + name);
        console.log("Rating: " + rating);
        console.log("Comment: " + comment);

        // You can add further logic here, such as sending the review to a server, etc.

        // Optional: Display a thank you message or redirect to another page
        alert("Thank you for your review!");

        // Redirect to the subscription page
        window.location.href = "subscription.html";
    });
});
