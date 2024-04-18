var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = false;

function nextSequence(){
    level++;
    $("h1").text("level "+level);
    var randomNumber = Math.round(Math.random()*3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100); 
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
    
}


$(".btn").click(function(){
    var userChosenColour = this.id;  
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})


function playSound(name){
    switch (name) {
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


function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout (function(){
        $("#"+currentColour).removeClass("pressed");
        },100);
}
        
$(document).keypress(function(){
    if(!started){
    setTimeout(function(){
        nextSequence()},300);
    started = true;
}}
);

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");
        console.log(level);
         if(userClickedPattern.length === gamePattern.length){
            userClickedPattern=[]; 
            setTimeout (function(){nextSequence()}, 1000);  
            
        }   
    }
    else{
        console.log("wrong");
        var wrongAnswer = new Audio("./sounds/wrong.mp3");
        wrongAnswer.play();
        $(document.body).addClass("game-over");
        setTimeout (function(){
            $(document.body).removeClass("game-over");
        },200 )
        startOver();
    }
    
    
}

function startOver(){
    $("h1").text("Game Over! Press any button to start again.");
    userClickedPattern=[];
    level = 0;
    gamePattern=[];
    started = false;
    }
    ; 

    