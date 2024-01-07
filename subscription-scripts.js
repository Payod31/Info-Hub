// JavaScript for the Subscription Page
// Function to handle subscription form submission
$(document).ready(function () {
    $("#subscriptionForm").submit(function (event) {
        event.preventDefault();
        // Get the email input value
        var email = $("#email").val();
        // Validate the email (add your own validation logic)
        if (validateEmail(email)) {
            // Check if the email is already subscribed
            if (isSubscribed(email)) {
                // If already subscribed, directly grant access to the main content page
                window.location.replace("index.html");
            } else {
                // If not subscribed, store the subscription data in localStorage
                storeSubscription(email);
                // Display a success message
                alert("Subscription Successful!\nEmail: " + email);
                // Redirect to the main content page
                window.location.replace("website.html");
            }
        } else {
            alert("Please provide a valid email address.");
        }
    });
});

// Function to validate email format
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to check if the email is already subscribed
function isSubscribed(email) {
    // Retrieve existing subscriptions from localStorage (if any)
    var existingSubscriptions = JSON.parse(localStorage.getItem("subscriptions")) || [];
    // Check if the email is in the array
    return existingSubscriptions.includes(email);
}

function storeSubscription(email) {
    // Retrieve existing subscriptions from localStorage (if any)
    var existingSubscriptions = JSON.parse(localStorage.getItem("subscriptions")) || [];
    // Add the new subscription to the array
    existingSubscriptions.push(email);
    // Save the updated array back to localStorage
    localStorage.setItem("subscriptions", JSON.stringify(existingSubscriptions));
}