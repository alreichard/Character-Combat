// Function for Character 1
// ===============================================
$(".searchOne").on('click', function (event) {
    event.preventDefault();
    // Variables
    // ===============================================
    var characterName = $("#character-name").val()

    $("#character-name").empty();

    // API Calls
    var apiKey = "10158186976410619"
    var queryURL = "https://superheroapi.com/api/" + apiKey + "/search/" + characterName;
    // console.log(queryURL)

    var ajax = $.ajax({
        url: queryURL,
        method: "GET"
    })

    $.when(ajax).done(function (response) {
        var results = response;
        console.log(results)

        $(".statsOne").empty();

        var name = $("<h3>").html(results.name);
        var intelligence = $("<p>").html(results.powerstats.intelligence)
        var strength = $("<p>").html(results.powerstats.strength)
        var speed = $("<p>").html(results.powerstats.speed)
        var durability = $("<p>").html(results.powerstats.durability)
        var power = $("<p>").html(results.powerstats.power)
        var combat = $("<p>").html(results.powerstats.combat)

        // Transfer the Open Weather object into the respected fields in our html
        $(".statsOne").append(name, intelligence, strength, speed, durability, power, combat)
    })

})

// Function for Character 2
// ===============================================
// $(".searchTwo").on('click', function (event) {
//     event.preventDefault();
//     // Variables
//     // ===============================================
//     var characterName2 = $("#character-name2").val()  
//     $("#character-name2").empty();
//     // API Calls
//     var apiKey = "10158186976410619"
//     var queryURL2 = "https://superheroapi.com/api/" + apiKey + "/search/" + characterName2;
//     $("#character-name2").empty();

//     console.log(queryURL2)

//     var ajax = $.ajax({
//         url: queryURL2,
//         method: "GET"
//     })

//     $.when(ajax).then(function (response) {
//         var results = response;
//         console.log(results)

//         // Generate the HTML content dynamically 
//         $(".statsTwo").empty();
//         var name = $("<h3>").html(results.name);
//         var intelligence = $("<p>").html(results.powerstats.intelligence)
//         var strength = $("<p>").html(results.powerstats.strength)
//         var speed = $("<p>").html(results.powerstats.speed)
//         var durability = $("<p>").html(results.powerstats.durability)
//         var power = $("<p>").html(results.powerstats.power)
//         var combat = $("<p>").html(results.powerstats.combat) 

//         // Transfer the Open Weather object into the respected fields in our html
//         $(".statsTwo").append(name, intelligence, strength, speed, durability, power, combat)
//     })

// })