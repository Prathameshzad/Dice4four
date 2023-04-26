
var randomNumber1 = Math.floor(Math.random() *6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource); 



var randomNumber2 = Math.floor(Math.random() *6) + 1;

var randomDiceImage = "images/" + "dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImage); 



var randomNumber3 = Math.floor(Math.random() *6) + 1;

var randomDiceImage = "images/" + "dice" + randomNumber3 + ".png";

var image1 = document.querySelectorAll("img")[2];

image1.setAttribute("src", randomDiceImage); 



var randomNumber4 = Math.floor(Math.random() *6) + 1;

var randomDiceImage = "images/" + "dice" + randomNumber4 + ".png";

var image1 = document.querySelectorAll("img")[3];

image1.setAttribute("src", randomDiceImage); 