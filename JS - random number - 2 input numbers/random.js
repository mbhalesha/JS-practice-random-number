//new assignment:
//program should ask for 2 numbers and provide a random number between the 2 numbers

var input1 = prompt("Please provide a starting number");

var bottomNumber = parseInt(input1);

var input = prompt("Please provide a number");

var topNumber = parseInt(input);

var randomNumber =
  Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;

//if we wanted between 10-25, this would generate a random number 0 up to, but not including 16
//25-10 + 1 = 16

//Math.floor function would give random number 0 to 15
//take that and add a bottom number, other words: random number from 10 (0 +10 = 10) to 25 (15+10 = 25)

//update the message

var message =
  "<p>" +
  randomNumber +
  " is a number between " +
  bottomNumber +
  " and " +
  topNumber +
  "</p>";

document.write(message);
