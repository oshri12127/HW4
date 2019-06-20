// Initialize Firebase(2)


var config = {
        apiKey: "AIzaSyBdr6vFM5Rx8PzD1NVQFmGmlj5z2gkZXLs",
        authDomain: "hw4-firebase-99a7d.firebaseapp.com",
        databaseURL: "https://hw4-firebase-99a7d.firebaseio.com",
        projectId: "hw4-firebase-99a7d",
        storageBucket: "hw4-firebase-99a7d.appspot.com",
        messagingSenderId: "510032074084",
        appId: "1:510032074084:web:a04b15383ad24e37"
      };
      // Browserify Setup

  firebase.initializeApp(config);
  
  //Reference for form collection(3)
  let formMessage = firebase.database().ref('register');


  //listen for submit event//(1)
  document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);
  
  //Submit form(1.2)
  function formSubmit(e) {

    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    const ref = firebase.storage().ref();
    const file = document.querySelector('#cameraInput').files[0]
    const fname = (+new Date()) + '-' + file.name;
    const metadata = {
      contentType: file.type
    };
    const task = ref.child(fname).put(file, metadata);
    task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then((url) => {
        updateData(name,url);
        
      })
      .catch(console.error);
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      $("#loginMessage").text(errorMessage);
    });
      document.querySelector('.congrats').style.display = 'block'
      
  
    demo();
 
  }


  //Send Message to Firebase(4)
  
  function updateData(name,url) {
      
  var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name,
  photoURL: url
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});

  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function demo() {
    await sleep(7000);
    //location.href = "login.html";
    //TODO: tomer page href
  }
  
  