"use strict"
$(document).ready(function() {
    let compPick = Math.floor(Math.random() * 102) + 19;
    // console.log("compPick: " + compPick); 
    $(".randomNumber").html(compPick); 

    let gemOne = Math.floor(Math.random() * 12) + 1;
    // console.log("Gem 1: " + gemOne);
    $("#img1").html("<img src=" + "assets/images/pickaxe.jpg" + " value=" + gemOne + ">");

    let gemTwo = Math.floor(Math.random() * 12) + 1;
    // console.log("Gem 2: " + gemTwo);
    $("#img2").html("<img src=" + "assets/images/rockhammer.jpg" + " value=" + gemTwo + ">");

    let gemThree = Math.floor(Math.random() * 12) + 1;
    // console.log("Gem 3: " + gemThree);
    $("#img3").html("<img src=" + "assets/images/dynamite.jpg" + " value=" + gemThree + ">");

    let wins = 0; 
    // console.log("wins: " + wins);

    let losses = 0; 
    // console.log("losses: " + losses);

    let score = 0; 
    // console.log("score: " + score);

    function reset () {
        compPick = Math.floor(Math.random() * 102) + 19;
        // console.log("compPick: " + compPick);
        $(".randomNumber").html(compPick);

        score = 0;
        $(".scoreDisplay").html(score); 

        gemOne = Math.floor(Math.random() * 12) + 1;
        // console.log("Gem 1: " + gemOne);
        $("#img1").html("<img src=" + "assets/images/pickaxe.jpg" + " value=" + gemOne + ">");

        gemTwo = Math.floor(Math.random() * 12) + 1;
        // console.log("Gem 2: " + gemTwo); 
        $("#img2").html("<img src=" + "assets/images/rockhammer.jpg" + " value=" + gemTwo + ">");

        gemThree = Math.floor(Math.random() * 12) + 1;
        // console.log("Gem 3: " + gemThree);
        $("#img3").html("<img src=" + "assets/images/dynamite.jpg" + " value=" + gemThree + ">");


        $("img").on("click", function () {
    let newScore = score += parseInt($(this).attr("value"));
        // console.log("New Score: " + newScore);
        $(".scoreDisplay").html(newScore);

        if(newScore === compPick){
            wins++ ;
                $(".wins").html("Wins: " + wins);
                // console.log("Wins: " + wins);
                    reset();
            }
            else if(newScore > compPick) {
                losses++ ;
                $(".losses").html("Losses: " + losses);
                // console.log("Losses: " + losses);
                    reset();
            };

        });
    };

	$("img").on("click", function (){
     let newScore = score += parseInt($(this).attr("value"));
    // console.log("New Score: " + newScore);
    $(".scoreDisplay").html(newScore);

    if(newScore === compPick){
    wins++ ;
    $(".wins").html("Wins: " + wins);
    // console.log("Wins: " + wins);
                    reset();
        }

    else if(newScore > compPick) {
    losses++ ;
    $(".losses").html("Losses: " + losses);
    // console.log("Losses: " + losses);
                    reset();
    }

    });

});

