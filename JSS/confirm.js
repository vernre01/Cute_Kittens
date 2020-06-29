var kittenNumber;
var y = document.getElementById('voteYes' + kittenNumber);
var n = document.getElementById('voteNo' + kittenNumber);

function voteYes(kittenNumber) {
    var voting = confirm('Are you sure?');
    var txt;

    if (voting == true) {
        txt = 'Thanks for the love!';
        if (y === undefined) {
            y = 0;
        }
        y++;
        } else {
            txt = 'Try again.';
    }
    document.getElementById('voteYes').innerHTML = ' ' + y;
    document.getElementById('results' + kittenNumber).innerHTML = txt;
}

function voteNo(kittenNumber) {
    var voting = confirm('Are you sure?');
    var txt;

    if (voting == true) {
        txt = 'Oh, well! Maybe the next one.';
        if (n === undefined) {
            n = 0;
        }
        n++;
        } else {
            txt = 'Try again.';
    }
document.getElementById('voteNo').innerHTML = ' ' + n;
document.getElementById('results' + kittenNumber).innerHTML = txt;
}