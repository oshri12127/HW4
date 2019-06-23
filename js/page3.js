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
        //console.log(user);
        console.log(user.email);
        
        

        var img = document.getElementById('pic');
        img.src = userNow2.photoURL;
		//console.log(userNow2.photoURL);
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
    firebase.auth().onAuthStateChanged(function (user){
		userNow2 = user.uid;
    console.log("in ready");
	//console.log(userNow2);
	 $("#city").text(
		localStorage.getItem("city")
	);
    $("#logout").click(function () {
        firebase.auth().signOut().then(function () {
            alert("Sign-out successful.");
            window.location.href = "index.html";
        }).catch(function (error) {
            console.log(error);
        });
    });
	  $("#changeLoc").click(function () {
            window.location.href = "weather.html";
		});
		
	var datesRef = firebase.database().ref();
		$("#save").click(function(){
			let sDate = $("#startDate").val();
			let eDate = $("#endDate").val();
			let stars = $("#stars").val();
			var checkBox = document.getElementById("myCheck");
			if (checkBox.checked == true){
			checkBox = "yes";
			} else {
				checkBox = "no";
			}
			//check if overlaps
			dates.push(sDate);
			dates.push(eDate);
			dates = dates.sort();
			let sIndex = dates.indexOf(sDate);
			let eIndex = dates.indexOf(eDate);
			if(sIndex != eIndex - 1){
				alert("Incorrect order details!!");
				window.location.href = "order.html";
				return;
			}
			//console.log(userNow2);
			console.log(localStorage.getItem("city"));
			datesRef.child(userNow2).push().set({
				startDate: sDate,
				endDate: eDate,
				city: localStorage.getItem("city"),
				stars: stars,
				rentCar: checkBox
				
		
			});
		window.location.href = "order.html";			
		});
		
		//console.log(userNow2);
		var dates = [];
		datesRef.child(userNow2).on('value', function(data){
			dates = [];
			$("#dates").empty();
			data.forEach(function(childSnapshot) {
				let childData = childSnapshot.val();
				dates.push(childData.startDate);
				dates.push(childData.endDate);
				$("#dates").append('<li class="list-group-item">' 
					+ "date:"+childData.startDate + ", " + childData.endDate+
					" ,city:" +childData.city+ " ,stars:" +childData.stars+ " ,car rent:" + childData.rentCar
				+ '</li>');

				});
			});
    
});
});