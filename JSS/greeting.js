document.getElementById('welcome').addEventListener('click', function() {welcome();},false);

function welcome() {
    var catLover = prompt('Do you love cats?', 'Yes or No?');
    var greeting;

    while (catLover !== null) {
        if (catLover.toLowerCase().trim() === 'yes') {
            greeting = 'Welcome Cat Lovers!';
            document.getElementById('greeting').innerHTML = greeting;
            break;
        } else if (catLover.toLowerCase().trim() === 'no') {
            greeting = 'No worries! You\'ll be a Cat Lover soon!';
            document.getElementById('greeting').innerHTML = greeting; 
            break;  
        } else {
            catLover = prompt('Please enter Yes or No');
        }
    }
}
