var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];


//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

//ariable called level and start at level 0.
var level = 0;


//detects when a keyboard key has been pressed, when that happens for the first time, calls nextSequence().
$("body").keypress(function() {
  if (!started) {
    //h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0"
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//detecting when any of the button is clicked & triggering a handler function onclick
$(".btn").click(function() {
  //storing the id of the button which got clicked
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  //Play sounds on button click
  playSound(userChosenColour);
  animatePress(userChosenColour);
  //check the entered pattern is correct or not & passing in the index of the last answer in the user's sequence.
  checkAnswer(userClickedPattern.length - 1)
});

//Checks an entered pattern is correct or not
function checkAnswer(currentLevel) {
  //check if the most recent user answer is the same as the game pattern.
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    //If the user got the most recent answer right, then checking that they have finished their sequence with another if statement.
    if (userClickedPattern.length == gamePattern.length) {

      //Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    //playing wrong.mp3,if the user got one of the answers wrong.
    playSound("wrong");

    //applying class - "game-over" to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    //Changing the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }
}

//Function for starting over the game.
function startOver() {
  level = 0;
  gamePattern.length = 0;
  started = false;
}

function nextSequence() {
  //Once nextSequence() is triggered, resetting the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];

  //increasing level by 1 whenever nextSequence function is called.
  level += 1;
  //updating the h1 with the level change
  $("#level-title").text("Level " + level);
  //Generating a random number between (0 & 3)
  var randomNumber = Math.floor(Math.random() * 4);
  //choosing a random color from an array
  var randomChosenColour = buttonColors[randomNumber];
  //storing the random chosen color in an array
  gamePattern.push(randomChosenColour);
  //Using JQuery to select the button with the same id as randomChosenColor & adding flash effect to buttons on click
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}


//Playing sounds
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  //removing the class after 100 millisec
  setTimeout(function() {
    $("#" + currentColour).removeClass('pressed');
  }, 100);
}
