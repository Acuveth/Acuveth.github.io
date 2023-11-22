window.onload = function () {
  document
    .getElementById("logoutButton")
    .addEventListener("click", function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("User has been logged out");
          // Redirect to login page or do something else upon logout
          window.location.href = "/index.html";
        })
        .catch((error) => {
          // An error happened during the logout
          console.error("Error during logout", error);
        });
    });
};
