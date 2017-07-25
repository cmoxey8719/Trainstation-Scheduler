
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBRc6EX8DCLYk-gWg9mrW1tVOBfSEYkqoc",
    authDomain: "trainstation-47d9a.firebaseapp.com",
    databaseURL: "https://trainstation-47d9a.firebaseio.com",
    projectId: "trainstation-47d9a",
    storageBucket: "trainstation-47d9a.appspot.com",
    messagingSenderId: "495947355560"
  };
  firebase.initializeApp(config);

var database = firebase.database();



// Button for adding trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDest = $("#destination-input").val().trim();
  var trainFirst = moment($("#first-time-input").val().trim(), "HH:mm").format("X");
  var trainFreq = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {
    name: trainName,
    dest: trainDest,
    first: trainFirst,
    freq: trainFreq
  };

  // Uploads train data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.dest);
  console.log(newTrain.first);
  console.log(newTrain.freq);
  console.log("----------------------------");
  

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-time-input").val("");
  $("#frequency-input").val("");

});

//function to solve math portion for time remaining
/*function timeRemain(first){
  var firstTime = database.ref().newTrain.first;
  var secondTime = 
}*/

// 3. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDest = childSnapshot.val().dest;
  var trainFirst = childSnapshot.val().first;
  var trainFreq = childSnapshot.val().freq;
  
  // Employee Info
  //console.log(trainName);
  //console.log(trainDest);
  //console.log(trainFirst);
  //console.log(trainFreq);
  //console.log("----------------------------");
 

  // math portion
  //train set time to hours and minutes
  var trainHour = moment.unix(trainFirst).format("HH");
  var trainMinute = moment.unix(trainFirst).format("mm");
  //current time
  var nowTime = new Date();

  //get the current time and set time hours
  var newHours = nowTime.getHours();
  var newMinute = nowtime.getMinutes();





  console.log(newHours);
  console.log(newMinute);
  console.log("----------------");
  console.log(trainHour);
  console.log(trainMinute);

  // Calculate the months worked using hardcore math
  // To calculate the months worked


  // Calculate the time remaining to arrival
   //var timeRemaining


  

  // Add each train's data into the table
  $("#train-table").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" + trainFreq + "</td></tr>");
});

