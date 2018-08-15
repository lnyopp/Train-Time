
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

  //button click and info to firebase.
$("#submit").on("click", function(event) {
    
event.preventDefault();

var trainName= $("#name").val().trim();
var trainDestination = $("#destination").val().trim();
var trainTime = $("#traintime").val().trim();
var trainFrequency= $("#frequency").val().trim();
var nextArrivalTime = "";
var minutesAway = "";


// Creates local "temporary" object for holding employee data
var trainSchedule = {
  name: trainName,
  destination: trainDestination,
  duration: trainTime,
  frequency: trainFrequency,
  nextArrivalTime:"",
  minutesAway:""
};

// Uploads employee data to the database
database.ref().push(trainSchedule);

// Logs everything to console
console.log(trainschedule.name);
console.log(trainschedule.destination);
console.log(trainschedule.frequency);
console.log(trainschedule.duration);

alert("New Train Added!");

// Clears all of the text-boxes
$("#name").val("");
$("#destination").val("");
$("#traintime").val("");
$("#frequency").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
console.log(childSnapshot.val());

// Store everything into a variable.
var trainName= childSnapshot.val().name;
var trainSchedule = childSnapshot.val().destination;
var trainFrequency = childSnapshot.val().frequency;
var trainLength = childSnapshot.val().duration;

// Employee Info
console.log(trainName);
console.log(tranSchedule);
console.log(trainFrequency);
console.log(trainLength);

// // Prettify the employee start
// var train = moment.unix(empStart).format("MM/DD/YYYY");

// // Calculate the months worked using hardcore math
// // To calculate the months worked
// var trainMoment = moment().diff(moment(empStart, "X"), "months");
// console.log(empMonths);

// // Calculate the total billed rate
// var empBilled = empMonths * empRate;
// console.log(empBilled);

// Create the new row
var newRow = $("<tr>").append(
  $("<td>").text(trainName),
  $("<td>").text(trainDestination),
  $("<td>").text(trainFrequency),
  $("<td>").text(trainlength),
  // $("<td>").text(empRate),
  // $("<td>").text(empBilled)
);

// Append the new row to the table
$("#trainschedule > tbody").append(newRow);
});