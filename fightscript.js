//filler
var hero1 = "superman"
var speed1 = 100;
var intelegence1 = 20;
var power1 = 100;
var strength1 = 100;
var durability1 = 100;
var combat1 = 10;
var hero2 = "batman"
var speed2 = 60;
var intelegence2 = 100;
var power2 = 50;
var strength2 = 50;
var durability2 = 60;
var combat2 = 100;
//filler end
// frequency of blocking
var blockAbility2 = round(20 + (.3 * speed2));
var blockAbility1 = round(20 + (.3 * speed1));
// variable for special move prequency
var intelegenceAspect1 = round(10 + (.4 * intelegence1));
var intelegenceAspect2 = round(10 + (.4 * intelegence2));
// hero 1 health
var healthBar1 = $(".healthBar1");
var healthBarText1 = $(".healthBarText1")
// hero 2 health 
var healthBar2 = $(".healthBar2");
var healthBarText2 = $(".healthBarText2")
//button for turns
var nextMove = $(".nextMove");
nextMove.text(hero1 + "'s turn!")
var message1 = $('.message-box1')
var message2 = $('.message-box2')
areaabove1 = $(".areaAbove1")
areaabove2 = $(".areaAbove2")
//health
var health1 = (.5 * durability1) + 150;
var healthKeep1 = (.5 * durability1) + 150;
var health2 = (.5 * durability2) + 150;
var healthKeep2 = (.5 * durability2) + 150;
//health
// damage ability of heros
var damage1 = (.05 * (power1 + strength1) + 10)
var damage2 = (.05 * (power1 + strength1) + 10)
// amount of extra damage dealt for special move
var combatStuff1 = (combat1 * .1);
var combatStuff2 = (combat2 * .1);
// count system for what player's turn... odd:hero 1 even: hero 2
var evenOdd = 1;
//placeholders:
//final damage dealt to a hero
var damageDealt = 0;
//number from 1 to 100 for if combat move or block happens
var combatBlock = 0;
//how much power each punch had based on heros damage ability (how well a punch lands)
var hitPower1 = 0;
// click system to start each round
nextMove.on("click", function () {
    //hide button while round is in progress
    nextMove.attr("class", "hide")
    //which player goes this turn
    if (evenOdd / 2 != round(evenOdd / 2)) {
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
// function player1 if a combat move is used, redirected here
$(document).on("click", "#combatify1", function () {
    //click on button, and it will disapear
    $(document).remove("#combatify1")
    // asdds special combat damage to normal damage 
    damageDealt = hitPower1 + combatStuff1
    // if a block is iniated, new button is created. user must the click button with the combatify id
    if (10 < combatBlock && combatBlock < blockAbility2) {
        var combatButton1 = $("<button>").text("Initiate  block!")
        blockButton1.attr("id", "blockify1");
        areaabove2.append(combatButton1)
    } 
    // else end turn function
    else {
        player1End()
    }
})
 //same as combatify 1
$(document).on("click", "#combatify2", function () {
    $(document).remove("#combatify2")
    damageDealt = hitPower2 + combatStuff2
    if (10 < combatBlock && combatBlock < blockAbility1) {
        var combatButton1 = $("<button>").text("Initiate  block!")
        blockButton1.attr("id", "blockify2");
        areaabove1.append(combatButton1)
    } else {
        player2End()
    };
})
// final option, a block
$(document).on("click", "#blockify1", function () {
    $(document).remove("#blockify1")
    // if a block is initiated, the opposite hero whose turn it is not will take only half damage
    damageDealt = damageDealt / 2
    // run end turn function
    player1End()
})
// same as blockify 1
$(document).on("click", "#blockify2", function () {
    $(document).remove("#blockify2")
    damageDealt = damageDealt / 2
    player2End()
})
// hero1 turn
function player1() {
    // determines if the next move will be a combat move
    combatBlock = Math.floor(Math.random() * 101);
    // determines how well a heros punch lands 
    hitPower1 = Math.floor(Math.random() * 8) + damage1 - 7;
    // the special move lands if the combatBlock number is between 10 and
    // the number created by hero intelegence: smarter = higher chance
    if (10 < combatBlock && combatBlock < intelegenceAspect1) {
        // creates button and waits for user to click the combatify buttons above
        var combatButton1 = $("<button>").text("Initiate combat move!")
        combatButton1.attr("id", "combatify1");
        areaabove1.append(combatButton1)
    }
    //if comabtmove does not land
    else {
        // hero damage is set
        damageDealt = hitPower1
        // similar to bombat move: faster the player, higher chance of blocking show
        if (10 < combatBlock && combatBlock < blockAbility2) {
            // creates button and waits for user to click blockify button above 
            var combatButton1 = $("<button>").text("Initiate  block!")
            blockButton1.attr("id", "blockify1");
            areaabove2.append(combatButton1)
            damageDealt = damageDealt / 2
        } 
        // neither a block or special move, it runs function to change health levels
        else {
            player1End()
        };
    };
}
// same as player1 function
function player2() {
    var combatBlock = Math.floor(Math.random() * 101);
    var hitPower2 = Math.floor(Math.random() * 8) + damage2 - 7;
    if (10 < combatBlock && combatBlock < intelegenceAspect2) {
        var combatButton2 = $("<button>").text("Initiate combat move!")
        combatButton2.attr("id", "combatify2");
        areaabove2.append(combatButton2)
    }
    else {
        damageDealt = hitPower2
        if (10 < combatBlock && combatBlock < blockAbility1) {
            var combatButton1 = $("<button>").text("Initiate  block!")
            blockButton1.attr("id", "blockify2");
            areaabove1.append(combatButton1)
            damageDealt = damageDealt / 2
        } else {
            player2End()
        }
    };
}
 // runs when a round is over same as commented function 2
function player1End(){
    message1.html(hero2 + "lost" + round(damageDealt) + "health.")
            health2 = round(health2 - damageDealt)
            var a = (health2 / healthKeep2) * 100
            healthBar1.animate({
                'width': a + "%"
            }, 500);
            $(".health-bar-red").animate({
                'width': a + "%"
              }, 700);
            healthBarText2.text(health2 + "/" + healthKeep2)
            if (health2 <= 0) {
                location.replace("https://www.w3schools.com")
            }
            nextMove.attr("class", "show")
}
function player2End(){
    // populates message over hero who has taken damage
    message1.html(hero1 + "lost" + damageDealt + "health.")
        //new health     
    health1 = round(health1 - damageDealt)
            // sets health to a number between 1 - 100
            var a = (health1 / healthKeep1) * 100
            // changes the width of the health bar from old health % to new health %
            $(".healthBar2").animate({
                'width': a + "%"
            }, 500);
            $(".health-bar-red").animate({
                'width': a + "%"
              }, 700);
            // remaining health out of starting health
            healthBarText1.text(health1 + "/" + healthKeep1)
            // if a players health hits 0, match is over, brings user to next page
            if (health1 <= 0) {
                location.replace("https://www.w3schools.com")
            }
            // shows fight button to allow next player to go 
            nextMove.attr("class", "show")
}

function round(number){
    return (Math.floor(number));

}