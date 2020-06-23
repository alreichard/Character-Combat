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
            var imageVar = ("src", "https://www.superherodb.com/pictures2/portraits/10/100/" + results.id + ".jpg")
            var intelligenceVar = (results.powerstats.intelligence)
            var strengthVar = (results.powerstats.strength)
            var speedVar = (results.powerstats.speed)
            var durabilityVar = (results.powerstats.durability)
            var powerVar = (results.powerstats.power)
            var combatVar = (results.powerstats.combat)
            var alignmentVar = (results.biography.alignment)
            console.log(intelligenceVar)

            // Generate the HTML content dynamically 

            var image = $("<img>").attr("src", "https://www.superherodb.com/pictures2/portraits/10/100/" + results.id + ".jpg")
            var intelligence = $("<p>").text(results.powerstats.intelligence)
            var strength = $("<p>").text(results.powerstats.strength)
            var speed = $("<p>").text(results.powerstats.speed)
            var durability = $("<p>").text(results.powerstats.durability)
            var power = $("<p>").text(results.powerstats.power)
            var combat = $("<p>").text(results.powerstats.combat)
            var alignment = $("<p>").text(results.biography.alignment)

            console.log(image)

            // Transfer the Open Weather object into the respected fields in our html
            $("#card1").removeClass("none")
            $("#vs").removeClass("none")
            $(".footer").removeClass("none")
            $(".image1").append($("<img>").html(results.image.url))
            $(".statsOne").append("Intelligence Lvl:", intelligence, "Strength Lvl:", strength, "Speed:", speed, "Durability:", durability, "Power Lvl:", power, "Combat Lvl:", combat, "Good or Bad side?", alignment)
            
            // Saving Function
            var Character = [imageVar, intelligenceVar, strengthVar, speedVar, durabilityVar, powerVar, combatVar, alignmentVar]
            localStorage.setItem("text", JSON.stringify(Character));
            console.log(Character)
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
            var results = response.results[0];
            var imageVar = ("src", "https://www.superherodb.com/pictures2/portraits/10/100/" + results.id + ".jpg")
            var intelligenceVar = (results.powerstats.intelligence)
            var strengthVar = (results.powerstats.strength)
            var speedVar = (results.powerstats.speed)
            var durabilityVar = (results.powerstats.durability)
            var powerVar = (results.powerstats.power)
            var combatVar = (results.powerstats.combat)
            var alignmentVar = (results.biography.alignment)

            // Generate the HTML content dynamically 

            var image = $("<img>").attr("src", "https://www.superherodb.com/pictures2/portraits/10/100/" + results.id + ".jpg")
            var intelligence = $("<p>").text(results.powerstats.intelligence)
            var strength = $("<p>").text(results.powerstats.strength)
            var speed = $("<p>").text(results.powerstats.speed)
            var durability = $("<p>").text(results.powerstats.durability)
            var power = $("<p>").text(results.powerstats.power)
            var combat = $("<p>").text(results.powerstats.combat)
            var alignment = $("<p>").text(results.biography.alignment)
            console.log(image)
            console.log(results.biography.alignment)
            console.log(results)

            // Transfer the Open Weather object into the respected fields in our html
            $("#card2").removeClass("none")
            $("#vs").removeClass("none")
            $(".footer").removeClass("none")
            $(".image2").append($("<img>").html(results.image.url))
            $(".statsTwo").append("Intelligence Lvl:", intelligence, "Strength Lvl:", strength, "Speed:", speed, "Durability:", durability, "Power Lvl:", power, "Combat Lvl:", combat, "Good or Bad side?", alignment)
            
            // Saving Function
            var Character = [imageVar, intelligenceVar, strengthVar, speedVar, durabilityVar, powerVar, combatVar, alignmentVar]
            localStorage.setItem("text2", JSON.stringify(Character));
            console.log(Character)
        

        })

    })

    
   


})