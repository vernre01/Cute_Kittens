function welcome() {
    var catLover = prompt('Do you love cats?', 'Yes or No?').toLowerCase().trim();
    var greeting;

    if(catLover == 'yes') {
        greeting = 'Welcome Cat Lovers!';
        } else if (catLover == 'no') {
            greeting = 'No worries! You\'ll be a Cat Lover soon!';
            } else if (catLover >= 0) {
                greeting = 'Perhaps you\'d like to try again? Vote Yes or No!';
                } else {
                    greeting = 'Um... Could you try again? Yes or No will do!';
                    }

document.getElementById('greeting').innerHTML = greeting;
}