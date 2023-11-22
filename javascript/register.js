document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.getElementById("regEmail").value;
    var password = document.getElementById("regPassword").value;
    var fullName = document.getElementById("fullName").value;
    registerUser(email, password, fullName);
  });

function registerUser(email, password, fullName) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Uspešna registracija
      var user = userCredential.user;
      console.log("Registriran uporabnik:", user);
      return firebase.firestore().collection("users").doc(user.uid).set({
        fullName: fullName,
        email: email,
      });
    })
    .then(() => {
      console.log("Dodatni uporabniški podatki shranjeni");
      alert("Vaša registracija je bila uspešna!");
      window.location.href = "/pages/auth/login.html"; // Spremenite z ustrezno ciljno stranjo
    })
    .catch((error) => {
      // Napaka pri registraciji
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("Napaka pri registraciji:", errorMessage);
    });
}
