//////////////////////////Driver Code/////////////////////////

//counting the total buttons in with the .drum class
var numberOfButtons = document.querySelectorAll(".drum").length;

//Play sound on click event
for(var i=0; i<numberOfButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    //changing the colors of button on clicking
    this.style.color = "black";
    //playing sounds on click in javascript
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    //animation to the button after keypress or clicking
    buttonAnimation(buttonInnerHTML);
  });
}


//Play sound using keyboard keys in Javascript
document.addEventListener("keydown", function(event){
  //make sound
  makeSound(event.key);
  //animation to the button after keypress or clicking
  buttonAnimation(event.key);
});


//////////////////////////Functions///////////////////////////

//Playing sound in javascript
function makeSound(key){

  switch (key){
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      console.log(key);
  }
}


//Function for button animation
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 1000)
}
