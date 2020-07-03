var kittenNumber;
var y = 0;
var n = 0;

function voteYes(kittenNumber) {
    var voting = confirm('Are you sure?');
    var txt;

    if (voting == true) {
        txt = 'Thanks for the love!';
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
        n++;
        } else {
            txt = 'Try again.';
    }
document.getElementById('voteNo').innerHTML = ' ' + n;
document.getElementById('results' + kittenNumber).innerHTML = txt;
}