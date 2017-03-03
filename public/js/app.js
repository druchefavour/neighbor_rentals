$(document).ready(function() {
  console.log('hi');
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAmm9uKu8EXJgYZwo0R_w-Mh0S6G4qWc1k",
    authDomain: "project2-4e355.firebaseapp.com",
    databaseURL: "https://project2-4e355.firebaseio.com",
    storageBucket: "project2-4e355.appspot.com",
    messagingSenderId: "209089627851"
  };
   firebase.initializeApp(config);

   var database = firebase.database();

//google authenticator
    var provider = new firebase.auth.GoogleAuthProvider();
console.log(provider);
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log('inside auth');
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  console.log(error);
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
//get elements
     var uidText = $('#username');
      var passText = $('#password');

      // Add sign up event

      $('#signInBtn').on('click', function() {

            var uid = uidText.val().trim();
            var userPass = passText.val().trim();
            var dbPass;

            localStorage.clear();
            localStorage.setItem('userKey', uid);
            console.log(localStorage.getItem('userKey'));

            if (uid == 'admin123') {
              if (userPass == '123456') {
                window.location.href = 'admin.html';
                return false;
              } else {
                $('#error-message').html('<p>*User name or password is incorrect</p>')
              }
            }

            database.ref('/clients/' + uid).on('value', function(snap) {
     
