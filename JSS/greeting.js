function welcome() {
    var catLover = prompt('Do you love cats?', 'Yes or No?');
    var greeting;

    if(catLover == 'Yes' || catLover == 'yes' || catLover == 'YES') {
        greeting = 'Welcome Cat Lovers!';
        } else if (catLover == 'No' || catLover == 'no' || catLover == 'NO') {
            greeting = 'No worries! You\'ll be a Cat Lover soon!';
            } else if (catLover >= 0) {
                greeting = 'A number? Perhaps you\'d like to try again?';
                }
                else {
                    greeting = 'Um... Could you try again? Yes or No will do!';
    }

document.getElementById('greeting').innerHTML = greeting;
}