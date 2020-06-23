// Function for Character 1
// ===============================================

$(document).ready(function () {

    $(".searchOne").on('click', function (event) {
        event.preventDefault();
        // Variables
        // ===============================================

        var characterName = $("#character-name").val()
        $("#character-name").empty();
        $(".statsOne").empty();

        // API Calls
        var apiKey = "10158186976410619"
        var queryURL = "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/" + apiKey + "/search/" + characterName;
        console.log(queryURL)

        var ajax = $.ajax({
            url: queryURL,
            method: "GET"
        })

        $.when(ajax).done(function (response) {
            var results = response.results[0];
            console.log(results)

            // Generate the HTML content dynamically 

            var image = $("<img>").attr("src", "https://www.superherodb.com/pictures2/portraits/10/100/" + results.id + ".jpg")
            var intelligence = $("<p>").text(results.powerstats.intelligence)
            var strength = $("<p>").text(results.powerstats.strength)
            var speed = $("<p>").text(results.powerstats.speed)
            var durability = $("<p>").text(results.powerstats.durability)
            var power = $("<p>").text(results.powerstats.power)
            var combat = $("<p>").text(results.powerstats.combat)
            var image = $("<img>").html(results.image.url)

            console.log(image)

            // Transfer the Open Weather object into the respected fields in our html
            $("#card1").removeClass("none")
            $(".image1").append($("<img>").html(results.image.url))
            $(".statsOne").append("Intelligence Lvl:", intelligence, "Strength Lvl:", strength, "Speed:", speed, "Durability:", durability, "Power Lvl:", power, "Combat Lvl:", combat)
        })

    })

    // Function for Character 2
    // ===============================================
    $(".searchTwo").on('click', function (event) {
        event.preventDefault();
        // Variables
        // ===============================================
        var characterName2 = $("#character-name2").val()
        $("#character-name2").empty();
        $(".statsTwo").empty();

        // API Calls
        var apiKey = "10158186976410619"
        var queryURL2 = "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/" + apiKey + "/search/" + characterName2;
        $("#character-name2").empty();
        $(".statsTwo").empty();
        console.log(queryURL2)

        var ajax = $.ajax({
            url: queryURL2,
            method: "GET"
        })

        $.when(ajax).then(function (response) {
            var results = response.results[0];
            console.log(results)

            // Generate the HTML content dynamically 

            var image = $("<img>").attr("src", "https://www.superherodb.com/pictures2/portraits/10/100/" + results.id + ".jpg")
            var intelligence = $("<p>").text(results.powerstats.intelligence)
            var strength = $("<p>").text(results.powerstats.strength)
            var speed = $("<p>").text(results.powerstats.speed)
            var durability = $("<p>").text(results.powerstats.durability)
            var power = $("<p>").text(results.powerstats.power)
            var combat = $("<p>").text(results.powerstats.combat)

            console.log(image)

            // Transfer the Open Weather object into the respected fields in our html
            $("#card2").removeClass("none")
            $(".image2").append(image)
            $(".statsTwo").append("Intelligence Lvl:", intelligence, "Strength Lvl:", strength, "Speed:", speed, "Durability:", durability, "Power Lvl:", power, "Combat Lvl:", combat)

        })

    })
    
    //Saving Function
    var arrSearchedCharacters = JSON.parse(localStorage.getItem("text"))
    $(".searchOne").on("click", function () {
        var Character = $(".character-name", ".character-name2").val()
   
        arrSearchedCharacters.push({
            characters: Character,
        })
        
        localStorage.setItem("text", JSON.stringify(arrSearchedCharacters));
    })


})