var catLover = prompt('Do you love cats? Yes or No?');
var greeting;

if(catLover == 'Yes') {
    greeting = 'Welcome Cat Lovers!';
} else if (catLover == 'No') {
    greeting = 'No worries! You\'ll be a Cat Lover soon!';
} else {
    greeting = 'Can\'t decide? Well, welcome anyway!';
}

document.write('<h1>' + greeting + '</h1>');