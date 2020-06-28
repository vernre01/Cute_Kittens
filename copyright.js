var year = document.getElementById('copyright');
var today = new Date();
year.textContent = today.getFullYear();

var catLover = prompt('Do you love cats? Yes or No?');
var greeting;

if(catLover == 'Yes') {
    greeting = 'Welcome Cat Lovers!';
} else if (catLover == 'No') {
    greeting = 'No worries! You\'ll be a Cat Lover soon!';
} else {
    greeting = 'Please enter Yes or No';
}