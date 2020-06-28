var catLover = prompt('Do you love cats?', 'Yes or No?');
var greeting;

if(catLover == 'Yes' || catLover == 'yes' || catLover == 'YES') {
    greeting = 'Welcome Cat Lovers!';
} else if (catLover == 'No' || catLover == 'no' || catLover == 'NO') {
    greeting = 'No worries! You\'ll be a Cat Lover soon!';
} else {
    greeting = 'Can\'t decide? Well, welcome anyway!';
}

document.getElementById('greeting').innerHTML = greeting;