//filler
var superAll1 = []
superAll1 = JSON.parse(localStorage.getItem("text"));

var alignment1 = superAll1[7]
var hero1 = superAll1[8]
var speed1 = parseInt(superAll1[3])
var intelegence1 = parseInt(superAll1[1])
var power1 = parseInt(superAll1[5])
var strength1 = parseInt(superAll1[2])
var durability1 = parseInt(superAll1[4])
var combat1 = parseInt(superAll1[6])

var superAll2 = []
superAll2 = JSON.parse(localStorage.getItem("text2"));
var alignment2 = superAll2[7]
var hero2 = superAll2[8]
var speed2 = parseInt(superAll2[3])
var intelegence2 = parseInt(superAll2[1])
var power2 = parseInt(superAll2[5])
var strength2 = parseInt(superAll2[2])
var durability2 = parseInt(superAll2[4])
var combat2 = parseInt(superAll2[6])
console.log(superAll1)
//filler end
$(".playerTwo").attr("src", superAll2[0])
$(".playerOne").attr("src", superAll1[0])
console.log(superAll1[0])
// intelegency and comabt ability affect how often a hero lands a good hit on apponent
var goodHit1 = 0;

if (intelegence1+combat1>180){
     goodHit1 = 3
}
else if (intelegence1+combat1 <= 180 && intelegence1+combat1 > 150){
    goodHit1 = 2
}
else if (intelegence1+combat1 <= 150 && intelegence1+combat1 >100){
    goodHit1 =1 
}
else{goodHit1 = 0};

var goodHit2 = 0;

// intelegence and combat ability determine how likely hero is to get a good shot 

if (intelegence2+combat2>180){
     goodHit2 = 3
}
else if (intelegence2+combat2 <= 180 && intelegence2+combat2 > 150){
    goodHit2 = 2
}
else if (intelegence2+combat2 <= 150 && intelegence2+combat2 >100){
    goodHit2 =1 
}
else{goodHit2 = 0};

// frequency of blocking
var blockAbility2 = Math.round(80 + (.2*speed2 - .1*speed1));
var blockAbility1 = Math.round(80 + (.2*speed1 - .1*speed2));

// variable for special move prequency
var intelegenceAspect1 = Math.round(10 + (.4 * intelegence1));
var intelegenceAspect2 = Math.round(10 + (.4 * intelegence2));

// hero 1 health
var healthBar1 = $(".healthBar1");
var healthBarText1 = $("#healthBarText1")

// hero 2 health 
var healthBar2 = $(".healthBar2");
var healthBarText2 = $("#healthBarText2")

//button for turns
var nextMove = $(".nextMove");
nextMove.text(hero1 + "'s turn!")
$("#PlayerOne").addClass("turn")
var message1 = $('#messageBox1')
var message2 = $('#messageBox2')

areaabove1 = $(".areaAbove1")
areaabove2 = $(".areaAbove2")


//health
var health1 = (.5 * durability1) + 150;
var healthKeep1 = (.5 * durability1) + 150;

var health2 = (.5 * durability2) + 150;
var healthKeep2 = (.5 * durability2) + 150;
//health

// damage ability of heros
var damage1 = (.07 * (power1 + strength1) + 10)
var damage2 = (.07 * (power2 + strength2) + 10)

// amount of extra damage dealt for special move
var combatStuff1 = (combat1 * .1);
var combatStuff2 = (combat2 * .1);

// count system for what player's turn... odd:hero 1 even: hero 2
var evenOdd = 1;

//placeholders:
//final damage dealt to a hero
var damageDealt = 0;
//number from 1 to 100 for if combat move or block happens
var Combat = 0;
var Block = 0;
//how much power each punch had based on heros damage ability (how well a punch lands)
var hitPower1 = 0;
var hitPower2 = 0;

var blockButton1;
var blockButton2;

var combatButton1;
var combatButton2;

$("#PlayerOne").text(hero1)
$("#PlayerTwo").text(hero2)
// click system to start each round

var gifArray = []

nextMove.on("click", function () {

    $(".gifHolder img").attr("src", gifArray[Math.floor(Math.random() * gifArray.length)])

    //hide button while round is in progress
    nextMove.addClass("is-hidden")
    //which player goes this turn
    if (evenOdd / 2 != Math.round(evenOdd / 2)) {

        player1()
        evenOdd++
        nextMove.text(hero2 + "'s turn!")
    }

    else {
        player2()
        evenOdd++
        nextMove.text(hero1 + "'s turn!")
    }

});

var apiKey = "pMBthG1t50qSWYP65MAt6HsWKVAVj3Q1";
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=pow";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)

    for(var i = 0; i < 10; i++){

    var gifUrl = response.data[i].images.fixed_height.url
    
    gifArray.push(gifUrl)
    }
    console.log(gifArray)
})



// function player1 if a combat move is used, redirected here
$(document).on("click", "#combatify1", function () {
    //click on button, and it will disapear
    $("#combatify1").addClass("is-hidden")
    // asdds special combat damage to normal damage 
    damageDealt = hitPower1 + combatStuff1
    // if a block is iniated, new button is created. user must the click button with the combatify id
    if (50 < Block && Block < blockAbility2) {
        $("#blockify2").removeClass("is-hidden");


    } 
    // else end turn function
    else {

        player1End()
    }
})
 //same as combatify 1
$(document).on("click", "#combatify2", function () {
    $("#combatify2").addClass("is-hidden")
    damageDealt = hitPower2 + combatStuff2
    
    if (50 < Block && Block < blockAbility1) {
        $("#blockify1").removeClass("is-hidden");


    } else {

        player2End()
    };
})

// final option, a block
$(document).on("click", "#blockify2", function () {
    $("#blockify2").addClass("is-hidden")
    // if a block is initiated, the opposite hero whose turn it is not will take only half damage
    damageDealt = damageDealt / 2
    // run end turn function
    player1End()
})
 
// same as blockify 1
$(document).on("click", "#blockify1", function () {
   $("#blockify1").addClass("is-hidden")
    damageDealt = damageDealt / 2
    player2End()

})




// hero1 turn
function player1() {

    // determines if the next move will be a combat move
    Combat = Math.floor(Math.random() * 101);
    Block = Math.floor(Math.random() * 101);
    // determines how well a heros punch lands 
    hitPower1 = Math.floor(Math.random() * (9 - goodHit1)) + damage1 - 8 + goodHit1;
    
    // the special move lands if the combatBlock number is between 10 and
    // the number created by hero intelegence: smarter = higher chance
    if (10 < Combat && Combat < intelegenceAspect1) {
        // creates button and waits for user to click the combatify buttons above
        $("#combatify1").removeClass("is-hidden");



    }
    //if comabtmove does not land
    else {
        // hero damage is set
        damageDealt = hitPower1
        // similar to bombat move: faster the player, higher chance of blocking show
        if (50 < Block && Block < blockAbility2) {
            // creates button and waits for user to click blockify button above 
            $("#blockify2").removeClass("is-hidden");
            console.log(hitPower1)
            
            
        } 
        // neither a block or special move, it runs function to change health levels
        else {
            player1End()
        };
    };





}
// same as player1 function
function player2() {
     

    Combat = Math.floor(Math.random() * 101);
    Block = Math.floor(Math.random() * 101);
    hitPower2 = Math.floor(Math.random() * (9 - goodHit2)) + damage2 - 8 + goodHit2;
    console.log(Combat)

    

    if (10 < Combat && Combat < intelegenceAspect2) {
        $("#combatify2").removeClass("is-hidden");



    }
    else {
        damageDealt = hitPower2
        if (50 < Block && Block < blockAbility1) {
            
            $("#blockify1").removeClass("is-hidden");
         

            
        } else {
            player2End()
        }
    };



}
 // runs when a round is over same as commented function 2
function player1End(){
    message2.html(hero2 + " lost " + Math.round(damageDealt) + " health!")
            health2 = Math.round(health2 - damageDealt)
            var a = (health2 / healthKeep2) * 100
            healthBar2.animate({
                'width': a + "%"
            }, 500);
            $(".health-bar-red").animate({
                'width': a + "%"
              }, 700);
            healthBarText2.text(health2 + "/" + healthKeep2)
            if (health2 <= 0) {
                if (alignment1 == "bad"){
                    location.replace("villain.html")
                    } else {location.replace("hero.html")}
                    var arr1 = [superAll1[8], superAll1[0]]
                    localStorage.setItem("winner", JSON.stringify(arr1));
            }
            nextMove.removeClass("is-hidden")
            $("#PlayerTwo").addClass("turn")
            $("#PlayerOne").removeClass("turn")

}

function player2End(){
    // populates message over hero who has taken damage
    message1.html(hero1 + " lost " + Math.round(damageDealt) + " health!")
        //new health     
    health1 = Math.round(health1 - damageDealt)
            // sets health to a number between 1 - 100
            var a = (health1 / healthKeep1) * 100
            // changes the width of the health bar from old health % to new health %
            healthBar1.animate({
                'width': a + "%"
            }, 500);
            $(".health-bar-red").animate({
                'width': a + "%"
              }, 700);
            // remaining health out of starting health
            healthBarText1.text(health1 + "/" + healthKeep1)
            // if a players health hits 0, match is over, brings user to next page
            if (health1 <= 0) {
                if (alignment2 == "bad"){
                location.replace("villain.html")
                } else {location.replace("hero.html")}
                var arr1 = [superAll2[8], superAll2[0]]
                localStorage.setItem("winner", JSON.stringify(arr1));

            }
            // shows fight button to allow next player to go 
            nextMove.removeClass("is-hidden")

            $("#PlayerOne").addClass("turn")
            $("#PlayerTwo").removeClass("turn")
}