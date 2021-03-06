$( document ).ready(function() { // entry point to the javascript program
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBONIiH31zIRaYzVewjmfbOBTtOjMLlzSc",
    authDomain: "train-time-8e99c.firebaseapp.com",
    databaseURL: "https://train-time-8e99c.firebaseio.com",
    projectId: "train-time-8e99c",
    storageBucket: "train-time-8e99c.appspot.com",
    messagingSenderId: "227113357037"
  };
  firebase.initializeApp(config);

  // variable to reference firebase
  var database = firebase.database();

  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName= childSnapshot.val().name;
  var trainSchedule = childSnapshot.val().destination;
  var trainFrequency = childSnapshot.val().frequency;
  var trainStart = childSnapshot.val().start;

  // Train Info
  console.log(trainName);
  console.log(trainSchedule);
  console.log(trainFrequency);
  console.log(trainStart);

    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainSchedule),
      $("<td>").text(trainFrequency),
      $("<td>").text(trainStart),
    );

    // Append the new row to the table
    $("#trainlist > tbody:last-child").append(newRow);
  });

  $("#submit").on("click", function(event) {
      
    event.preventDefault();

    var trainName= $("#name").val().trim();
    var trainDestination = $("#destination").val().trim();
    var trainTime = $("#traintime").val().trim();
    var trainFrequency= $("#frequency").val().trim();
    var nextArrivalTime = "";
    var minutesAway = "";

    // Creates local "temporary" object for holding schedule data
    var trainSchedule = {
      name: trainName,
      destination: trainDestination,
      duration: trainTime,
      frequency: trainFrequency,
      // nextArrivalTime:"",
      // minutesAway:""
    };

    // push data to the firebase
    database.ref().push(trainSchedule);


    console.log(trainSchedule.name);
    console.log(trainschedule.destination);
    console.log(trainschedule.frequency);
    console.log(trainschedule.duration);

    console.log("New Train Added!");

    // Clears all of the text-boxes
    $("#name").val("");
    $("#destination").val("");
    $("#traintime").val("");
    $("#frequency").val("");
  });

});