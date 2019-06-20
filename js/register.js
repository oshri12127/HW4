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
var task;

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
  // const ref = firebase.storage().ref();
  // const file = document.querySelector('#cameraInput').files[0]
  // const fname = (+new Date()) + '-' + file.name;
  // const metadata = {
  //   contentType: file.type
  // };
  //  task = ref.child(fname).put(file, metadata);
  // task
  //   .then(snapshot => snapshot.ref.getDownloadURL())
  //   .then((url) => {
  //     updateData(name,url);

  //   })
  //   .catch(console.error);



  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    $("#loginMessage").text(errorMessage);
    return;
  });
  document.querySelector('.congrats').style.display = 'block'
  

  setTimeout(function () {

    var user2 = firebase.auth().currentUser;

    console.log("update url profile");

    var urlusernow = localStorage.getItem("url");
    console.log(urlusernow);
    user2.updateProfile({
      photoURL: urlusernow
    }).then(function () {
      // Update successful.
    }).catch(function (error) {
      console.log(error);
    });
  }, 5000)



  demo();

}
//loging pic
/************************************************* */
var fileButton = document.getElementById('cameraInput');
var uploader = document.getElementById('uploader');
var ref = firebase.storage().ref();
fileButton.addEventListener('change', function (e) {

  const file = document.querySelector('#cameraInput').files[0]
  const fname = (+new Date()) + '-' + file.name;
  const metadata = {
    contentType: file.type
  };
  task = ref.child(fname).put(file, metadata);
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then((url) => {
      console.log(url);
      localStorage.setItem("url", url);

    })
    .catch(console.error);




  task.on('state_changed',
    function progress(snapshot) {
      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },
    function error(err) {
      console.log(err);
    },
    function complete() {
      console.log("complete");
      setTimeout(function () {
        uploader.value = 0;
      }, 3000);
    }
  );


});
/************************************************* */
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("login")
    console.log(user);
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log(email);
  } else {
    console.log("logout")
  }
});

//Send Message to Firebase(4)

// function updateData( url) {

  
 


// }


function demo() {
  setTimeout(function () {

     location.href = "weather.html";
  }, 7000)
  //TODO: tomer page href
}

