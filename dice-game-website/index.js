//Generating a random number
var randNum1 = Math.floor(Math.random() * 6) + 1;
var randNum2 = Math.floor(Math.random() * 6) + 1;

//Choosing a random img source or location
var randImg1 = "images/dice" + randNum1 + ".png";
var randImg2 = "images/dice" + randNum2 + ".png";

//Selecting the images from code
var img1Select = document.querySelectorAll("img")[0];
var img2Select = document.querySelectorAll("img")[1];

//Changing the images to random
img1Select.setAttribute("src", randImg1);
img2Select.setAttribute("src", randImg2);


if(randNum1 === randNum2){
  document.querySelector("h1").innerHTML = "Draw!";
}
else if(randNum1 > randNum2){
  document.querySelector("h1").innerHTML="⛳ Player 1 Wins!";
}

else{
  document.querySelector("h1").innerHTML="Player 2 Wins! ⛳";
}
