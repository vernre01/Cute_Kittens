document.getElementById('howMany').addEventListener('click', function() {showKittens();},false);

function showKittens() {
    var howMany = prompt('How many kittens would you like to see?','Enter a number between 1 and 9');
    
    //Get # of kittens to show from user
    while (howMany !== null) {
        if (howMany >= 0 && howMany <= 9) {
            //hide kittens above the number entered by user. "TypeError: Cannot read property 'style' of null at showKittens (showKittens.js:16) at HTMLButtonElement.<anonymous> (showKittens.js:1)" But code still works?
            for (var i = 0; i <= 9; i++) {
                var thisCat = document.getElementsByClassName('rating');
                
                if (i < howMany) {
                    thisCat[i].style.display = "inline-block";
                } else {
                    thisCat[i].style.display = "none";
                }
            }  
            break;
        } else {
            howMany = prompt('Please enter a number between 1 and 9.');
        }
    }
}