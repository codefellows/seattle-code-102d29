let hourNow = parseInt(prompt('What Hour is it?'))
if(hourNow > 18){
    document.write('<h2>Good Evening</h2>')
} else if(hourNow >= 12){
    document.write('<h2>Good Afternoon</h2>')
} else if(hourNow >= 0){
    document.write('<h2>Good Morning</h2>')
} else {
    document.write('<h2>Hi</h2>')
}