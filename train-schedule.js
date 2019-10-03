
var config = {
    apiKey: "AIzaSyBGW6EY_g2gHSBCc35vpqTdwu7ja0zG1Ok",
    //authDomain: "",
    databaseURL: "https://train-schedule-732c1.firebaseio.com",
    //storageBucket: ""
  };
  
  firebase.initializeApp(config);

  var admin = require("firebase-admin");


  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#city-input").val().trim();
    var trainNextArrivalTime = moment($("#start-input").val().trim(), "MM/DD/YYYYHH:mm- military time").format("X");
    var trainMinutesAway= $("#rate-input").val().trim();


    var nextTrain = {
        name: nextTrainName,
        role: trainDestination,
        start: trainNextArrivalTime,
        rate: trainMinutesAway
      };
    
      
      database.ref().push(nextTrain);
    
      // Logs everything to console
      console.log(nextTrain.name);
      console.log(trainDestination.destination);
      console.log(trainNextArrivalTime.time);
      console.log(trainMinutesAway.minutes);
    
      alert("Employee successfully added");
    
      // Clears all of the text-boxes
      $("#train-name-input").val("");
      $("#destination-input").val("");
      $("#time-input").val("");
      $("#minutes-input").val("");
    });
    
    
    

