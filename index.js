var randomNumber1 =Math.floor(Math.random()* 6) + 1;
console.log(randomNumber1)

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 =Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2)

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage;

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = "Player 1 Wins  🍻🤩";

}
else if (randomNumber2 > randomNumber1) {

  document.querySelector("h1").innerHTML = "Player 2 Wins  🍻🤩";
}
else{
  document.querySelector("h1").innerHTML = "Draw 🤔 ";
}
