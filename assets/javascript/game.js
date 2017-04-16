$(document).ready(function() {

    var characterChoices;
    // var userCharacter;
    // var aiCharacter;

    function reset() {
        characterChoices = []
        characters = [{
            "Evil Morty": {
                name: "Evil Morty",
                avatar: "assets/images/evilmorty.jpg",
                healthPoints: 120,
                attackPoints: 15,
                counterAttack: 15,
                id: 0,
            },
            "Mr. Meeseeks": {
                name: "Mr. Meeseeks",
                avatar: "assets/images/mrmeeseeks.jpg",
                healthPoints: 80,
                attackPoints: 15,
                counterAttack: 20,
                id: 1,
            },
            "Snowball": {
                name: "Snowball",
                avatar: "assets/images/snowball.jpg",
                healthPoints: 90,
                attackPoints: 20,
                counterAttack: 15,
                id: 2,
            },
            "Rick": {
                name: "Rick",
                avatar: "assets/images/rick.jpg",
                healthPoints: 110,
                attackPoints: 25,
                counterAttack: 10,
                id: 3,
            }
        }]
        // userCharacter = false;
        // aiCharacter = false;

        for (var i = 0; i < characters.length; i++) {
            characterChoices += "<div id=" + characters[i].name + " class=btn character-div text-center><img class= 'character-img' src=" + characters[i].pic + " alt=" + characters[i].name + "><br> HP: " + characters[i].healthPoints + "<br> AP: " + characters[i].attackPoints + "</div>";
        }
        console.log(characterChoices)
        $("#character-list").html(characterChoices);

    }


    function render() {


    }
})
