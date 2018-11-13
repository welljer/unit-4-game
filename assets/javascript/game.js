"use strict"


var counter = 0;
var changeNumber = Math.floor(Math.random() * 12) + 1;

$(".bismuth").on("click", function(){
     counter += changeNumber;

    alert("new value: " + counter);

if (counter === targetNumber) {
    alert("You Win!");
}
else if (conter >= targetNumber){
    alert("You Lose!!");
}
});

// --to generate random number for goal--
var targetNumber = Math.floor(Math.random() * 101) + 19;{
$("#goal-number").text(targetNumber);
};
// -- turn on to see target number--
console.log(targetNumber)



