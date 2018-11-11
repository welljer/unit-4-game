"use strict"
var counter = 0;
$(".bismuth").on("click", function(){
     counter += 1;
});

// --to generate random number for goal--
var targetNumber = Math.floor(Math.random() * 101) + 19;{
$("#goal-number").text(targetNumber);
};
// -- to on to see target number--
console.log(targetNumber)


