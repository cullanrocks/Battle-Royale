$(document).ready(function() {

    var characterChoices;
    var userCharacter;
    var enemyCharacter;

    function reset() {
        characterChoices = []
        // creates and empty array of the characterChoices
        // variable of an array of objects, each being a character:
        var characters = [{
            name: "Evil Morty",
            avatar: "assets/images/evilmorty.jpg",
            healthPoints: 120,
            attackPoints: 15,
            counterAttack: 15,
            audio: "assets/audio/scaryterry.mp3",
            id: 0
        }, {
            name: "Mr. Meeseeks",
            avatar: "assets/images/mrmeeseeks.jpg",
            healthPoints: 80,
            attackPoints: 15,
            counterAttack: 20,
            audio: "assets/audio/meeseeks.mp3",
            id: 1
        }, {
            name: "Snowball",
            avatar: "assets/images/snowball.jpg",
            healthPoints: 90,
            attackPoints: 20,
            counterAttack: 15,
            audio: "assets/audio/snowball.mp3",
            id: 2
        }, {
            name: "Rick",
            avatar: "assets/images/rick.jpg",
            healthPoints: 110,
            attackPoints: 25,
            counterAttack: 10,
            audio: "assets/audio/rick.mp3",
            id: 3
        }]
        userCharacter = false;
        enemyCharacter = false;


        // for loop that pushes each character into the characterChoices array
        for (var i = 0; i < characters.length; i++) {
            characterChoices.push(`<div id="${characters[i].name} characterDiv" class="btn character-div text-center">${characters[i].name}
                <br><img class="character-img" src="${characters[i].avatar}" alt="${characters[i].name}">
                <br> HP: ${characters[i].healthPoints}<br> AP: ${characters[i].attackPoints}  
                <audio id="${characters[i].id}-audio"><source src="${characters[i].audio}" type="audio/mp3"></audio></div>`)
        }       


        $("#select-header").html("<h4> Select Your Hero:</h4>")
        // appends the characters, avatars and all, into the html
        $("#character-list").append(characterChoices);
    }
    reset()
    // runs the above function

    // character select function
    function characterSelect() {
        $(".character-div").on("click", function(){
            if (!userCharacter){
                // If no user avatar is selected
                userCharacter= $(this);
                // than make this the user avatar.
                $(this).addClass("user-character");
                // adds a userCharacter class to selected character
                $(".user-character").remove();
                // remove selected character from div
                $("#hero-header-div").prepend("<h4>Your Hero: </h4>");
                $("#hero-div").html(userCharacter);
                // places the selected character into proper div
                userCharacter=true;
                // user character is now true
                $("#select-header").html("<h4> Select Your Opponent:</h4>");
                // changes the heading
                // document.getElementById("audio-click").play();
            }
            // end of if statement
            else if (userCharacter=true) {
                // almost identical settings to if statement, but different divs
                enemyCharacter=$(this);
                $(this).addClass("enemyCharacter");
                $(".enemyCharacter").remove();
                $("#enemy-header-div").prepend("<h4>Your Opponent: </h4>");
                $("#enemy-div").html(enemyCharacter);
                enemyCharacter=true;
                $("#select-header").html("<h4> Your Next Opponents:</h4>");
                $("#attack-header").html("<h4> Click the Portal to Attack!</h4>");
            } 
            // end of else if function
        })
        //end of click function
    }
    // end of characterSelection function
    // runs the character function
    characterSelect()


// end of document ready function
})
