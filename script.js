var humanChoice = 'Rock';

var humanPlay = humanChoice;

var computerChoice = Math.ceil(Math.random() *3);

if (computerChoice == 1) {
    computerPlay = 'Rock';
}
else if (computerChoice == 2)  {
    computerPlay = 'Paper';
}
else { computerPlay = 'Scissors'; }

var play =

    console.log("Computer chooses: " + computerPlay);

    console.log("Human chooses: " + humanPlay);

    if (computerPlay == humanPlay) {
        result = 'It\'s a draw!';
    }
    else if (computerPlay == 'Rock') {
        if (humanPlay == 'Scissors') {
            result = 'Computer wins!';
        }
        else result = 'Human wins!';
    }
    else if (computerPlay == 'Paper') {
        if (humanPlay == 'Scissors') {
            result = 'Human wins!';
        }
        else result = 'Computer wins!';
    }
    else { 
        if (humanPlay == 'Paper') {
            result = 'Computer wins!';
        }
        else {
            result = 'Human wins!';
        }
    }

function displayResult() {
    return(result);
}

displayResult();