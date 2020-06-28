var catLover = prompt('Do you love cats?', 'Yes or No?');
var greeting = document.getElementById('greeting');

if(catLover == 'Yes' || catLover == 'yes' || catLover == 'YES') {
    greeting.textContent = 'Welcome Cat Lovers!';
} else if (catLover == 'No' || catLover == 'no' || catLover == 'NO') {
    greeting.textContent = 'No worries! You\'ll be a Cat Lover soon!';
} else {
    greeting.textContent = 'Can\'t decide? Well, welcome anyway!';
}

document.write(greeting);