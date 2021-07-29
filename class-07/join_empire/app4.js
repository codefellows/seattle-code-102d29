let userNumberAnswer = parseInt(prompt('Please Enter a number between 1-10'));

function getUserNumberOneToTen(){
    if (userNumberAnswer > 10 || userNumberAnswer < 0){
        userNumberAnswer = parseInt(prompt('Try Again. Enter a number between 1-10'))
    }
}

getUserNumberOneToTen();