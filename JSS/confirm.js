function voteYes() {
    var voting = confirm('Are you sure?');
    var txt;

    if (voting == true) {
    txt = 'Thanks for the love!';
} else {
    txt = 'Try again.';
}

document.getElementById('results1').innerHTML = txt;

}

function voteNo() {
    var voting = confirm('Are you sure?');
    var txt;

    if (voting == true) {
    txt = 'Oh, well! Maybe the next one.';
} else {
    txt = 'Try again.';
}

document.getElementById('results1').innerHTML = txt;

}