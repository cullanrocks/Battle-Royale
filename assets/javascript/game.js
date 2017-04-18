$(document).ready(function() {

    var characterChoices;
    var userCharacter;
    var userSeleted = false;
    var enemyCharacter;
    var enemeySelected = true; 
    // I had to reverse the value of enemeySelected to true in order for a function to work


    function reset() {
        characterChoices = []
            // creates and empty array of the characterChoices
            // variable of an array of objects, each being a character:
        var characters = [{
            name: "Evil Morty",
            divName: "evil-morty",
            avatar: "assets/images/evilmorty.jpg",
            healthPoints: 120,
            attackPoints: 15,
            counterAttack: 15,
            audio: "assets/audio/scaryterry.mp3",
            id: 0
        }, {
            name: "Mr. Meeseeks",
            divName: "mr-meeseeks",
            avatar: "assets/images/mrmeeseeks.jpg",
            healthPoints: 80,
            attackPoints: 15,
            counterAttack: 20,
            audio: "assets/audio/meeseeks.mp3",
            id: 1
        }, {
            name: "Snowball",
            divName: "snowball",
            avatar: "assets/images/snowball.jpg",
            healthPoints: 90,
            attackPoints: 20,
            counterAttack: 15,
            audio: "assets/audio/snowball.mp3",
            id: 2
        }, {
            name: "Rick",
            divName: "rick",
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
            characterChoices.push(`<div id="${characters[i].divName}-div" data-type-hp="${characters[i]}" class="btn character-div text-center">${characters[i].name}
<br><img class="character-img" src="${characters[i].avatar}" alt="${characters[i].name}">
<p><div id="healthPoints${[i]}"></div><p><div id="attackPoints${[i]}"></div><p><div id="counterAttack${[i]}"></div>
<audio id="${characters[i].divName}-audio"><source src="${characters[i].audio}" type="audio/mp3"></audio></div>`);
            // Creats the avatar's divs, images, and audio files
            $("#character-list").append(characterChoices[i]);
            // Appends the characters, avatars and all, into the html
            $("#healthPoints" + i).html("HP: " + characters[i].healthPoints);
            $("#attackPoints" + i).html("AP: " + characters[i].attackPoints);
            $("#counterAttack" + i).html("Counter Attack: " + characters[i].counterAttack);
            // Writes the above variables into the HTML, that can be updated
        }
        $("#select-header").html("<h4> Select Your Hero:</h4>")

    }
    reset()
        // runs the above function

    // character select function
    function characterSelect(user) {
        $(".character-div").on("click", function() {
                if (!userSeleted) {
                    // If no user avatar is selected
                    userCharacter = $(this);
                    // than make this the user avatar.
                    $(this).addClass("user-character");
                    // adds a userCharacter class to selected character

                    $(".user-character").remove();
                    // remove selected character from div
                    // $("#hero-header-div").prepend("<h4>Your Hero: </h4>");
                    $("#hero-div").html(userCharacter);
                    // places the selected character into proper div
                    userSeleted = true;
                    // user character is now true
                    $("#select-header").html("<h4> Select Your Opponent:</h4>");
                    // changes the heading
                    this.children[8].play();
                    // plays the audio upon selection, since audio is the fifth child of .character-div
                    // $(".character-div":hover)
                }
                // end of if statement
                else if (userSeleted == true && enemeySelected == true) {
                    // almost identical settings to if statement, but different divs
                    enemyCharacter = $(this);
                    $(this).addClass("enemy-Character");
                    $(".enemyCharacter").remove();
                    // $("#enemy-header-div").prepend("<h4>Your Opponent: </h4>");
                    $("#enemy-div").html(enemyCharacter);
                    enemeySelected = false;
                    this.children[8].play();
                    $("#select-header").html("<h4> Your Next Opponents:</h4>");
                    $("#attack-header").html("<h4> Click the Portal to Attack!</h4><button type='button' class='btn btn-default' id='attack-button'><span class='glyphicon glyphicon-fire'>Attack</span></button>")
                }
                // end of else if function 
            })
            //end of click function
    }
    // end of characterSelection function
    // runs the character function
    characterSelect()


    function attack() {
        $("#attack-button").on("click", function() {

            if (userSeleted == true && enemeySelected == false) {
                $("[id]=userCharacter").
            }
        })
    }


    // end of document ready function
})




// if (true && (false) === false){}
