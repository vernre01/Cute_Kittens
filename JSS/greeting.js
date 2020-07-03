document.getElementById('welcome').addEventListener('click', function() {welcome()},false);

function welcome() {
    var catLover = prompt('Do you love cats?', 'Yes or No?');
    var greeting;

    if (catLover === null) {
        greeting = 'Perhaps you\'d like to try again? Vote Yes or No!';
        document.getElementById('greeting').innerHTML = greeting;
    }

    catLover = catLover.toLowerCase().trim();

    if(catLover == 'yes') {
        greeting = 'Welcome Cat Lovers!';
        } else if (catLover == 'no') {
            greeting = 'No worries! You\'ll be a Cat Lover soon!';
            } else if (catLover >= 0 || catLover === null) {
                greeting = 'Perhaps you\'d like to try again? Vote Yes or No!';
                } else {
                    greeting = 'Um... Could you try again? Yes or No will do!';
                    }

document.getElementById('greeting').innerHTML = greeting;
}