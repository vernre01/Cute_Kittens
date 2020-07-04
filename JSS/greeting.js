document.getElementById('welcome').addEventListener('click', function() {welcome();},false);

function welcome() {
    var catLover = prompt('Do you love cats?', 'Yes or No?');
    var greeting;

    while (catLover === null || (catLover.toLowerCase().trim() !== 'yes' && catLover.toLowerCase().trim() !== 'no')) {
        prompt('Please enter Yes or No!');
        if (catLover.toLowerCase().trim() === 'yes' || catLover.toLowerCase().trim() === 'no') {
            break;
        }
    }

    if(catLover.toLowerCase().trim() === 'yes') {
        greeting = 'Welcome Cat Lovers!';
        } else if (catLover.toLowerCase().trim() === 'no') {
            greeting = 'No worries! You\'ll be a Cat Lover soon!';   
        }
document.getElementById('greeting').innerHTML = greeting;
    }
