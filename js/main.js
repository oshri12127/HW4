
$(document).ready(function () {
    
    
  
      // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBdr6vFM5Rx8PzD1NVQFmGmlj5z2gkZXLs",
      authDomain: "hw4-firebase-99a7d.firebaseapp.com",
      databaseURL: "https://hw4-firebase-99a7d.firebaseio.com",
      projectId: "hw4-firebase-99a7d",
      storageBucket: "hw4-firebase-99a7d.appspot.com",
      messagingSenderId: "510032074084",
      appId: "1:510032074084:web:a04b15383ad24e37"
    };
    // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
  /*********************************************************************** */
  
      /*==================================================================
      [ Focus input ]*/
      $('.input100').each(function(){
          $(this).on('blur', function(){
              if($(this).val().trim() != "") {
                  $(this).addClass('has-val');
              }
              else {
                  $(this).removeClass('has-val');
              }
          })    
      })
    
    
      /*==================================================================
      [ Validate ]*/
      var input = $('.validate-input .input100');
  
      $('.validate-form').on('submit',function(){
          var check = true;
  
          for(var i=0; i<input.length; i++) {
              if(validate(input[i]) == false){
                  showValidate(input[i]);
                  check=false;
              }
          }
  
          return check;
      });
  
  
      $('.validate-form .input100').each(function(){
          $(this).focus(function(){
             hideValidate(this);
          });
      });
  
      function validate (input) {
          if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
              if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                  return false;
              }
          }
          else {
              if($(input).val().trim() == ''){
                  return false;
              }
          }
      }
  
      function showValidate(input) {
          var thisAlert = $(input).parent();
  
          $(thisAlert).addClass('alert-validate');
      }
  
      function hideValidate(input) {
          var thisAlert = $(input).parent();
  
          $(thisAlert).removeClass('alert-validate');
      }
      
  
      ///login
      var state = "login";
          
      $("#signup").click(function(){
          $(this).text(state);
          if(state === "login"){
              state = "signup";
          } else{
              state = "login";
          }
          $("#login").text(state);
      });
  
      
      $("form").submit(function(e){
          e.preventDefault(); // so it wouldn't use form functionality
          let email = $("#email").val();
          let pass = $("#pass").val();
          if(state === "login"){
              firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
                  alert('Email or Password incorrect!!');
                  location.reload();
              });
          
          } else{
  
              location.href = "register.html";
          }
      });
      
      
      
      firebase.auth().onAuthStateChanged(function(user) {
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
              location.href = "weather.html";
          } else {
            
              console.log("logout")
          }
      });
});

    
    
