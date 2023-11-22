document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  loginUser(email, password);
});

function loginUser(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Uspešna prijava
      var user = userCredential.user;
      console.log("Prijavljen uporabnik:", user);
      window.location.href = "/pages/main/buyPage.html"; // Spremenite z ustrezno ciljno stranjo
    })
    .catch((error) => {
      // Napaka pri prijavi
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("Napaka pri prijavi:", errorMessage);
      alert("Napačni podatki");
    });
}
