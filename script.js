//Code to get 10 days ahead
//Declared the variable for today date
var todaydate;
todaydate = new Date();
//Declared the variable for 10 days ahead
var duedate;
//Multiplied because of the conversions to millisiseconds
duedate = new Date(todaydate.getTime() + (10 * 24 * 60 * 60 * 1000));

//Code to get date format
var dateformat;
//Weekday & Month are both long, Day & Year are both numeric
dateformat = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}
//Declare variable to show the date following the format specified above
var datedueshow;
datedueshow = duedate.toLocaleDateString('en-US', dateformat);
//Assigning the dateduedisplay variable to the show in the span element in html of id name "duedate"
document.getElementById("due").textContent = datedueshow;



// Set the target time (12:00 PM, 10 days ahead)
var stopDate = new Date();
stopDate.setDate(stopDate.getDate() + 10); // Add 10 days
stopDate.setHours(11, 30, 0, 0); // Set the hours time to 12:00 PM

// Update the countdown every second using setInterval without having to reload the site continuously
var timeInterval = setInterval(updateTimer, 1000);


function updateTimer() {
  // Get the current time
  var currentDate = new Date();

  // Calculate the difference between the target time and the current time
  var difference = stopDate.getTime() - currentDate.getTime();


  // Check if the target time has passed
  if (difference <= 0) {
    clearInterval(updateTimer); // Stop the timer
    document.getElementById("endalert").textContent = "The giveaway has ended!";
    return;
  }

  // Calculate remaining days, hours, minutes, and seconds
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  var dayDisplay = days.toString().padStart(2, '0');
  var hoursDisplay = hours.toString().padStart(2, '0');
  var minutesDisplay = minutes.toString().padStart(2, '0');
  var secondsDisplay = seconds.toString().padStart(2, '0');

  // Display the countdown timer
  document.getElementById("days").textContent = dayDisplay;
  document.getElementById("hours").textContent = hoursDisplay;
  document.getElementById("minutes").textContent = minutesDisplay;
  document.getElementById("seconds").textContent = secondsDisplay;
  
}


