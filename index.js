var randomNum1 = Math.random();
randomNum1 = randomNum1*6 + 1;
randomNum1 = Math.floor(randomNum1);

var randomNum2 = Math.random();
randomNum2 = randomNum2*6 + 1;
randomNum2 = Math.floor(randomNum2);

randomIma1 = "Images/dice"+randomNum1+".png";
randomIma2 = "Images/dice"+randomNum2+".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomIma1);

var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randomIma2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins"
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}