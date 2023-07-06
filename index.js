//for first dice
var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImg1="dice"+randomNumber1+".png";

var randomImgSource1="images/"+randomDiceImg1;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImgSource1);

//for second dice
var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImgSource2="images/dice"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

//deciding winner
var result;
if(randomNumber1==randomNumber2){
    result="Draw!";
}
else if(randomNumber1<randomNumber2){
    result="⭐Player 1 wins!";
}
else{
    result="Player 2 wins!⭐";
}
document.querySelector("h1").textContent=result;