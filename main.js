$(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBUtqYQvxxfcdhQz7RcsCNMIwlODpc8Cmc",
    authDomain: "fir-for.firebaseapp.com",
    databaseURL: "https://fir-for.firebaseio.com",
  }

  firebase.initializeApp(config);
  var database = firebase.database()
  var table = database.ref('form')

  table.push({
    lastname: 'bailey',
    firstname: 'mariah',
    email: 'jackieosan@gmail.com',
    message: 'hello'
})
  
$('.js-form').on('submit', event => {
      event.preventDefault();

  });
});

// Sets up shortcuts to Firebase features and initiate firebase auth.
Fir-Form.prototype.initFirebase = function() {
  // Shortcuts to Firebase SDK features.
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};