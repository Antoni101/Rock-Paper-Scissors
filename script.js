var cpuPoints = 0;
var userPoints = 0;


function startGame() {
    resetOptions() //Reset Everything if trying again

    //Remove button from screen
    document.getElementById("startBtn").style.opacity = "0.0";
    setTimeout(function() {
        document.getElementById("startBtn").style.display = "None";
        displayOptions()
    }, 1000)

}

//Function that resets everything back to Normal
function resetOptions() {
    document.getElementById("r").style.left = "10%";
    document.getElementById("p").style.left = "40%";
    document.getElementById("s").style.left = "75%";
    document.getElementById("r").style.top = "40%";
    document.getElementById("p").style.top = "40%";
    document.getElementById("s").style.top = "40%";
    document.getElementById("r").onclick = function(){ pick(1) };
    document.getElementById("p").onclick = function(){ pick(2) };
    document.getElementById("s").onclick = function(){ pick(3) };
    document.getElementById("cpuChoice").style.opacity = "1.0";
    document.getElementById("cpuChoice").style.display = "inline-block";
}

//Show Rock, Paper, Scissors
function displayOptions() {
    document.getElementById("r").style.display = "inline-block";
    document.getElementById("r").style.opacity = "1.0";
    setTimeout(function() {
        document.getElementById("p").style.display = "inline-block";
        document.getElementById("p").style.opacity = "1.0";
    }, 500)
    setTimeout(function() {
        document.getElementById("s").style.display = "inline-block";
        document.getElementById("s").style.opacity = "1.0";
    }, 1000)
}

//When a user picks an option
function pick(option) {
    if (option == 1) { //If user chooses Rock
        document.getElementById("p").style.opacity = "0.0";
        document.getElementById("s").style.opacity = "0.0";
        document.getElementById("r").onclick = null;
        setTimeout(function() {
            document.getElementById("p").style.display = "None";
            document.getElementById("s").style.display = "None";
            setTimeout(function() {
                document.getElementById("r").style.left = "40%";
                document.getElementById("r").style.top = "50%";
            },1000)
        },1000)
    }
    else if (option == 2) { //If user chooses Paper
        document.getElementById("r").style.opacity = "0.0";
        document.getElementById("s").style.opacity = "0.0";
        document.getElementById("p").onclick = null;
        setTimeout(function() {
            document.getElementById("r").style.display = "None";
            document.getElementById("s").style.display = "None";
            setTimeout(function() {
                document.getElementById("p").style.left = "40%";
                document.getElementById("p").style.top = "50%";
            },1000)
        },1000)
    }
    else if (option == 3) { //If user chooses Scissors
        document.getElementById("p").style.opacity = "0.0";
        document.getElementById("r").style.opacity = "0.0";
        document.getElementById("s").onclick = null;
        setTimeout(function() {
            document.getElementById("p").style.display = "None";
            document.getElementById("r").style.display = "None";
            setTimeout(function() {
                document.getElementById("s").style.left = "40%";
                document.getElementById("s").style.top = "50%";
            },1000)
        },1000)
    }
    setTimeout(function() {
        displayCpuChoice(option)
    }, 3000)
}

//Computer choosing an option
function computerChoice() {
    cpu = Math.floor(Math.random() * 3) + 1;
    if (cpu == 1) { return 1 };
    if (cpu == 2) { return 2 };
    if (cpu == 3) { return 3 };
}

//Show computer choice
function displayCpuChoice(userChoice) {
    var userPick = userChoice
    var choice = computerChoice()
    if (choice == 1) {
        document.getElementById("cpuChoice").src = "images/rock.png";
    }
    else if (choice == 2) {
        document.getElementById("cpuChoice").src = "images/paper.png";
    }
    else if (choice == 3) {
        document.getElementById("cpuChoice").src = "images/scissor.png";
    }
    document.getElementById("cpuChoice").style.top = "10%";
    setTimeout(doWinner(choice,userPick), 3000)
}

//Function that see's whos the winner
function doWinner(cpuChoice,userChoice) {
    if (userChoice == cpuChoice) { //If its a tie
        console.log("Its a tie!")
        setTimeout(function() { document.getElementById("r").style.top = "-100%";}, 2000)
        setTimeout(function() { document.getElementById("p").style.top = "-100%";}, 2000)
        setTimeout(function() { document.getElementById("s").style.top = "-100%";}, 2000)
        setTimeout(function() { document.getElementById("cpuChoice").style.top = "150%"; }, 2000)
        tryAgain()
    }
    else if (userChoice == 1 && cpuChoice == 2) { //Rock vs Paper
        console.log("Computer Wins!");
        setTimeout(computerWins, 3000)
    }
    else if (userChoice == 1 && cpuChoice == 3) { //Rock vs Scissors
        console.log("User Wins!");
        setTimeout(userWins, 3000)
    }
    else if (userChoice == 2 && cpuChoice == 1) { //Paper vs Rock
        console.log("User Wins!");
        setTimeout(userWins, 3000)
    }
    else if (userChoice == 2 && cpuChoice == 3) { //Paper vs Scissors
        console.log("Computer Wins!");
        setTimeout(computerWins, 3000)
    }
    else if (userChoice == 3 && cpuChoice == 1) { //Scissors vs Rock
        console.log("Computer Wins!");
        setTimeout(computerWins, 3000)
    }
    else if (userChoice == 3 && cpuChoice == 2) { //Scissors vs Paper
        console.log("User Wins!");
        setTimeout(userWins, 3000)
    }
}

//If User Wins
function userWins() {
    userPoints ++;
    document.getElementById("cpuChoice").style.opacity = "0.0";
    setTimeout(function() {
        document.getElementById("cpuChoice").style.display = "None";
    }, 1000)
    setTimeout(function() { document.getElementById("r").style.top = "-100%";}, 2000)
    setTimeout(function() { document.getElementById("p").style.top = "-100%";}, 2000)
    setTimeout(function() { document.getElementById("s").style.top = "-100%";}, 2000)
    setTimeout(function() { document.getElementById("cpuChoice").style.top = "-100%";}, 2000)
    setTimeout(function() { 
        document.getElementById("r").style.display = "None";
        document.getElementById("p").style.display = "None";
        document.getElementById("s").style.display = "None";
        setTimeout(function() { document.getElementById("r").style.top = "150%";}, 2000)
        setTimeout(function() { document.getElementById("p").style.top = "150%";}, 2000)
        setTimeout(function() { document.getElementById("s").style.top = "150%";}, 2000)
    }, 4000)
    updatePoints()
    tryAgain()
}

//If Computer Wins
function computerWins() {
    cpuPoints ++;
    document.getElementById("r").style.opacity = "0.0";
    setTimeout(function() {
        document.getElementById("r").style.display = "None";
    }, 1000)
    document.getElementById("p").style.opacity = "0.0";
    setTimeout(function() {
        document.getElementById("p").style.display = "None";
    }, 1000)
    document.getElementById("s").style.opacity = "0.0";
    setTimeout(function() {
        document.getElementById("s").style.display = "None";
    }, 1000)
    setTimeout(function() { 
        document.getElementById("cpuChoice").style.top = "150%"; 
        setTimeout(function() { 
            document.getElementById("cpuChoice").style.display = "None"; 
            setTimeout(function() { document.getElementById("cpuChoice").style.top = "-100%";}, 2000)
        }, 1000)
    }, 2000)
    updatePoints()
    tryAgain()
}

//Function that changes the button to say 'Try Again?' to let the user play a new game
function tryAgain() {
    setTimeout(function() {
        document.getElementById("startBtn").innerHTML = "Try Again?";
        document.getElementById("startBtn").style.opacity = "1";
        document.getElementById("startBtn").style.display = "Block";
    }, 4000)
}

//Function that updates the scoreboard everytime its called
function updatePoints() {
    document.getElementById("scoreboard").style.transform = "scale(1.2)";
    setTimeout(function() { document.getElementById("scoreboard").style.transform = "scale(1.0)"; }, 1000)
    document.getElementById("scoreboard").innerHTML = '<strong>🤖' + cpuPoints + '</strong> <strong>🙂' + userPoints + '</strong>'
}