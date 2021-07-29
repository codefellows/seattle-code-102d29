// console.log('Hello World!')

let userName = prompt('What is your Name?')


function getUserName(){
    if(userName.toLowerCase() == 'roger'){
        document.write('<h2>Welcome Lord ' + userName + '</h2>');
    } else {
        document.write('<h2>Welcome ' + userName + '</h2>');
    }
    let userComputer = 'Macbook Pro';
    return userComputer; // Macbook Pro
}

let myComputer = getUserName(); // Macbook Pro
console.log(myComputer);
