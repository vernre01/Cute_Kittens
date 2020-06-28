function voteYes() {
    var voting = confirm('Are you sure?');
    var txt;
    var kittenNumber = this.id;

    if (voting == true) {
    txt = 'Thanks for the love!';
} else {
    txt = 'Try again.';
}
/* Yes, I know this only writes to the first article,
no matter which cat you vote on.  I've tried several internet
articles in the hopes of fixing it.  But after an hour or two I have
given up. I am hoping to learn how to fix this with loops?*/

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
//I am hoping to learn how to fix this with loops?
document.getElementById('results1').innerHTML = txt;

}