

//  Game

function rps(yourChoice) {
    var botChoice, humanchoice;
    humanchoice = yourChoice.id;
    botChoice = Botnum(rpsBotChoice());
    console.log("Computer Picked: " + botChoice + "," + " You Picked: " + humanchoice)
    var resultsMain = gameFunction(humanchoice, botChoice);
    var message = finalResult(resultsMain);
    console.log(resultsMain);
    console.log(message);
    FinalOutput(humanchoice, botChoice, message);
}

function rpsBotChoice() {
    return Math.floor(Math.random() * 3)
}

function Botnum(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function gameFunction(yourChoice, computerChoice) {
    var dataFlow = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    }
    var yourScore = dataFlow[yourChoice][computerChoice];
    var computerScore = dataFlow[computerChoice][yourChoice];
    return [yourScore, computerScore];


}
function finalResult([yourScore, computerChoice]) {
    if (yourScore === 0) {
        return {
            'message': 'You Lost',
            'color': 'red'
        }
    }
    else if (yourScore === 0.5) {
        return {
            'message': 'Its a Tie',
            'color': 'black'
        }
    }
    else {
        return {
            'message': 'You Won',
            'color': 'green'
        }
    }
}

function FinalOutput(humanchoice, botChoice, message) {
    var imageData = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };
    document.getElementById('paper').remove();
    document.getElementById('rock').remove();
    document.getElementById('scissors').remove();
    var yourDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    yourDiv.innerHTML = "<img src='" + imageData[humanchoice] + "' width=200>"
    document.getElementById('output').appendChild(yourDiv);
    messageDiv.innerHTML = "<h1 style='color:" + message['color'] + "; align-items:center '>" + message['message'] + "</h1>"
    document.getElementById('output1').appendChild(messageDiv);
    botDiv.innerHTML = "<img src='" + imageData[botChoice] + "'  width=200>"
    document.getElementById('output2').appendChild(botDiv);

    var returnBack, buttonText;
    returnBack = document.createElement("BUTTON")
    returnBack.innerHTML = '<h5 style="text-align:center; color: ' + message["color"] + ';padding:10px"> Try Again </h5>';
    document.getElementById('button_back').appendChild(returnBack)


}

function reloadPage() {
    reload = location.reload();
}

