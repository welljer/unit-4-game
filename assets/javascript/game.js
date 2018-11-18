    "use strict"
$(document).ready(function(){
var counter = 0;
var win = 0;
var losses = 0;
var targetNumber = "";  

// --to generate random number for goal--
var targetNumber = Math.floor(Math.random() * 101 + 19);{
    $("#target-number").text(targetNumber);
    };
    // -- turn on to see target number--
    // console.log(targetNumber)
    
    // --gives value to images--;
var image = {}
image[1] = Math.floor(Math.random() * 12 + 1);
image[2] = Math.floor(Math.random() * 12 + 1);
image[3] = Math.floor(Math.random() * 12 + 1);


function reset(){
    targetNumber = Math.floor(Math.random() * 101 + 19);
    image[1] = Math.floor(Math.random() * 12 + 1);
    image[2] = Math.floor(Math.random() * 12 + 1);
    image[3] = Math.floor(Math.random() * 12 + 1);
    counter = 0;
    $("#score-number").text(counter);
    }

    // --adds to counter and wins losses--
function toolImage(imageValue){
    return function(){        
        counter = counter + toolImage[imageValue];
        $("#score-number").text(counter);
        if (counter === targetNumber){
            wins++;
            $("#wins").text(wins);
            reset();
        }
        else if (counter > targetNumber){
            losses++;
            $("#losses").text(losses);
                reset();
            };
        };
    };
    $("#image1").on("click", toolImage(1));
    $("#image2").on("click", toolImage(2));
    $("#image3").on("click", toolImage(3));

});
