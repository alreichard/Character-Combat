
// // THINGS TO DO:

// // Create health bar for player 1 and player 2

// $("healthBar1").
// $("healthBar2")


// Health Bar should decrease when player is attacked


// Create "Next Move" button with click to move player to the next move

// $("#nextMove").on("click", function(event)){
//     var nextMove = $("#nextMove")
    
// }

player1Damage = 0;
player2Damage = 0;

var gifArray = []

function increaseDamage(playerNumber, intensity){
    $(".gif-area").empty()

    var imgTag = $("<img>");

    imgTag.attr("src", gifArray[Math.floor(Math.random() * 10)])

    $(".gif-area").append(imgTag);

    if (playerNumber == 1){
        player1Damage += intensity;
    } else{
        player2Damage += intensity;
    }
    console.log(player1Damage)

    // Will return an array with all items in this section
    // $.each($(".healthBarSection"), function(){
        
    // })

    $(".healthBarSection").each(function(){
        var health = $(this).attr("data-value")
        if(health <= player1Damage){
            $(this).removeClass("active")
        }
    })
}



$(".nextMove").click(function(){
    increaseDamage(1, Math.random() *30)
})

$(".extraButton").click(function(){
    increaseDamage(1, 10)
})

//How to redirect to new page in JS

var gifArray = []
var apiKey = "pMBthG1t50qSWYP65MAt6HsWKVAVj3Q1";
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=pow";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)

    for(var i = 0; i < 10; i++){

    var gifUrl = response.data[i].images.fixed_height_small_still.url
    
    gifArray.push(gifUrl)
    }
    console.log(gifArray)
})

