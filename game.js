var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

function nextSequence(){
    var randomNumber = Math.round(Math.random()*3);
    return randomNumber;
}


   
function playPattern(){
    var randomChosenColour = buttonColours[nextSequence()];
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    gamePattern.push(randomChosenColour);
    switch (randomChosenColour) {
        case "blue":
            var blueSound = new Audio("./sounds/blue.mp3");
            blueSound.play();
            break;
        case "green":
            var greenSound = new Audio("./sounds/green.mp3");
            greenSound.play();
            break;
        case "red":
            var redSound = new Audio("./sounds/red.mp3");
            redSound.play();
            break;
        case "yellow":
            var yellowSound = new Audio("./sounds/yellow.mp3");
            yellowSound.play();
            break;
        default:
            alert("wrong");
            break;
    }   
   console.log(gamePattern);
}

$(".btn").click(function(){
    var userChosenColour = this.id;  
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    function playSound(){
    switch (userChosenColour) {
        case "blue":
            var blueSound = new Audio("./sounds/blue.mp3");
            blueSound.play();
            break;
        case "green":
            var greenSound = new Audio("./sounds/green.mp3");
            greenSound.play();
            break;
        case "red":
            var redSound = new Audio("./sounds/red.mp3");
            redSound.play();
            break;
        case "yellow":
            var yellowSound = new Audio("./sounds/yellow.mp3");
            yellowSound.play();
            break;
        default:
            alert("wrong");
            break;
    }
    }
    return playSound();
})

function animatePress(currentColour){
    var currentColour = this.id;
    $(".btn").click(function(){
        $("#"+currentColour).addClass("pressed");
        setTimeout(function(){
            $("#"+currentColour).removeClass("pressed")
        })
    })
}
    
