document.getElementById('howMany').addEventListener('click', function() {showKittens();},false);

function showKittens() {
    var howMany = prompt('How many kittens would you like to see?','Enter a number between 1 and 9');
    
    //Get # of kittens to show from user
    while (howMany !== null) {
        if (howMany >= 0 && howMany <= 9) {
            //hide kittens above the number entered by user. DOESN'T WORK
            for (var i = howMany + 1; i <= 9; i++) {
                document.getElementById('article'+i).style.display = "none";
            }  
        } else {
            howMany = prompt('Please enter a number between 1 and 9.');
        }
    }
}