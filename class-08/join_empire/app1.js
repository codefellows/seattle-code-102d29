// console.log('Hello World!')

// let userName = prompt('What is your Name?')

// function getUserName(){
//     if(userName.toLowerCase() == 'roger'){
//         document.write('<h2>Welcome Lord ' + userName + '</h2>');
//     } else {
//         document.write('<h2>Welcome ' + userName + '</h2>');
//     }
//     let userComputer = 'Macbook Pro';
    // return userComputer; // Macbook Pro
// }

// let myComputer = getUserName(); // Macbook Pro
// console.log(myComputer);

// function askUserTojoin(){
//     let userAnswer = prompt('Do you want to join the Empire?');

//     if (userAnswer.toLowerCase() == 'yes'){
//         document.write('APPLY');
//     }
// }

// function hourNowAsk(){
//     let hourNow = parseInt(prompt('What Hour is it?'))
//     if(hourNow > 18){
//         document.write('<h2>Good Evening</h2>')
//     } else if(hourNow >= 12){
//         document.write('<h2>Good Afternoon</h2>')
//     } else if(hourNow >= 0){
//         document.write('<h2>Good Morning</h2>')
//     } else {
//         document.write('<h2>Hi</h2>')
//     }
// }

// let userNumberAnswer = parseInt(prompt('Please Enter a number between 1-10'));

// function getUserNumberOneToTen(){
//     if (userNumberAnswer > 10 || userNumberAnswer < 0){
//         userNumberAnswer = parseInt(prompt('Try Again. Enter a number between 1-10'))
//     }
// }

// getUserNumberOneToTen();

// random number generator
function randomNumber(){
    // found solution at https://www.codegrepper.com/code-examples/javascript/js+random+number+between+1+and+100
    let randNum = Math.floor(Math.random() * 100) + 1;
    return randNum
}

// Number Guessing Game
// data type for looking at prompt
// keep running until they get the right numnber
// could do a yes or no
// limiting factors:  range of number


function guessingGame(){
    correctAnswer = randomNumber();
    console.log(correctAnswer);
    // number of guesses
    let guesses = 8;            //  i = i + 1
    for(let i = 0; i < guesses; i++){
        let guessLeft = guesses - i
        let userGuess = parseInt(prompt('Please Enter a Number 1-100. You have ' + guessLeft + ' guesses left!'));
        while(userGuess < 1 || userGuess > 100){
            userGuess = parseInt(prompt('Try Again.  Enter a Number 1-100'))
        }
        if(userGuess == correctAnswer){
            alert('DING DING DING.  You got it right!');
            break;
        } else if(userGuess > correctAnswer){
            alert('You are to high!');
        } else if(userGuess < correctAnswer){
            alert('You are to low!');
        }
        else {
            alert('Something went wrong');
        }
    }
}
guessingGame();

function picturesOnPage(){
    let numberOfPictures = prompt('How many Baby Yodas do you want to see?')
    for(let i = 0; i < numberOfPictures; i++){
        document.write('<img src="https://cdn3.movieweb.com/i/article/GKRrIIVb7dQYGAHL0uZQ5j9SOK3mz1/1200:100/The-Mandalorian-Baby-Yoda-Real-Name-Revealed-Soon.jpg">')
    }
}
