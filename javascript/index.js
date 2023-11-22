document.addEventListener("DOMContentLoaded", function () {
  var downloadButton = document.getElementById("downloadButton");
  downloadButton.addEventListener("click", function () {
    window.location.href = "/pages/auth/login.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Reference to the form element
  const newsletterForm = document.getElementById("newsletterForm");

  // Listen for form submission
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the email value from the input
    const email = document.getElementById("newsletterEmail").value;

    // Add the email to Firestore
    window.db
      .collection("newsletterSubscriptions")
      .add({
        email: email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(), // Adds a timestamp
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        // Clear the input field or give user feedback
        document.getElementById("newsletterEmail").value = "";
        // Optional: Show a success message to the user
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        // Optional: Show an error message to the user
      });
  });
});
