// Your web app's Firebase configuration


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

var userNow2;
var userEmail;
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        userEmail = user.email;
        userNow2 = user;
        console.log(user);
        console.log(user.email);
        
        

        var img = document.getElementById('pic');
        img.src = userNow2.photoURL;
        if(userNow2.photoURL==null)
        {
            img.src ="images/ANONYMOUS_USER.png";
        }
        
       
        
        
    } else {
        window.location.href = "index.html"
        console.log("not loging");
    }
});

$(document).ready(function () {
    
    console.log("in ready");

    $("#logout").click(function () {

        firebase.auth().signOut().then(function () {
            alert("Sign-out successful.");
            window.location.href = "index.html";
        }).catch(function (error) {
            console.log(error);
        });
        

    });
    $("#NEW-YORK").click(function () {
        localStorage.setItem('city','new york');
       window.location.href = "lastpage.html";
    });
    $("#TEL-AVIV").click(function () {
        localStorage.setItem('city','tel aviv');
        window.location.href = "lastpage.html";
    });
    $("#LONDON").click(function () {
        localStorage.setItem('city','london');
        window.location.href = "lastpage.html";
    });
    $("#CANADA").click(function () {
        localStorage.setItem('city','canada');
        window.location.href = "lastpage.html";
    });
    $("#LOS-ANGELES").click(function () {
        localStorage.setItem('city','los angeles');
        window.location.href = "lastpage.html";
    });
    $("#BARCELONA").click(function () {
        localStorage.setItem('city','barcelona');
        window.location.href = "lastpage.html";
    });
    $("#PARIS").click(function () {
        localStorage.setItem('city','paris');
        window.location.href = "lastpage.html";
    });
    $("#AMSTERDAM").click(function () {
        localStorage.setItem('city','amsterdam');
        window.location.href = "lastpage.html";
    });
    $("#CAIRO-Egypt").click(function () {
        localStorage.setItem('city','cairo-Egypt');
        window.location.href = "lastpage.html";
    });
    $("#HONG-KONG").click(function () {
        localStorage.setItem('city','hong kong');
        window.location.href = "lastpage.html";
    });

   
       
    




    
    
});