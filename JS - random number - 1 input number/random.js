var userNumber1 = prompt("Please provide a number");

userNumber2 = parseInt(userNumber1);

// document.write(userNumber2);

var randomNumber = Math.floor(Math.random() * userNumber2) + 1;

// Math.random() method generates a number 0- up to 1 (but not including1)

// can multiply it by 6 if simulating a die roll and will get a floating point - decimal - number

// the Math.floor() method drops it to nearest integer

// each time code runs, will get a number 0-5

// to get a number from 1-6, will have to add 1

// var message = "<p>4 is a random number between 1 and 6.</p>"

// now build up the string with the message

var message =
  "<p>" +
  randomNumber +
  " is a random number between 1 and " +
  userNumber2 +
  ".</p>";

document.write(message);

// document.write(Math.floor(Math.random() * userNumber2)) + 1;
