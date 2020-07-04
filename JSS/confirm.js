var btnYes1 = document.getElementById('cute1');
var btnYes2 = document.getElementById('cute2');
var btnYes3 = document.getElementById('cute3');
var btnYes4 = document.getElementById('cute4');
var btnYes5 = document.getElementById('cute5');
var btnYes6 = document.getElementById('cute6');
var btnYes7 = document.getElementById('cute7');
var btnYes8 = document.getElementById('cute8');
var btnYes9 = document.getElementById('cute9');

var btnNo1 = document.getElementById('notcute1');
var btnNo2 = document.getElementById('notcute2');
var btnNo3 = document.getElementById('notcute3');
var btnNo4 = document.getElementById('notcute4');
var btnNo5 = document.getElementById('notcute5');
var btnNo6 = document.getElementById('notcute6');
var btnNo7 = document.getElementById('notcute7');
var btnNo8 = document.getElementById('notcute8');
var btnNo9 = document.getElementById('notcute9');

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

//Calls the appropriate voting function on the button click.

btnYes1.addEventListener('click', function() {voteYes(1);},false);
btnYes2.addEventListener('click', function() {voteYes(2);},false);
btnYes3.addEventListener('click', function() {voteYes(3);},false);
btnYes4.addEventListener('click', function() {voteYes(4);},false);
btnYes5.addEventListener('click', function() {voteYes(5);},false);
btnYes6.addEventListener('click', function() {voteYes(6);},false);
btnYes7.addEventListener('click', function() {voteYes(7);},false);
btnYes8.addEventListener('click', function() {voteYes(8);},false);
btnYes9.addEventListener('click', function() {voteYes(9);},false);

btnNo1.addEventListener('click', function() {voteNo(1);},false);
btnNo2.addEventListener('click', function() {voteNo(2);},false);
btnNo3.addEventListener('click', function() {voteNo(3);},false);
btnNo4.addEventListener('click', function() {voteNo(4);},false);
btnNo5.addEventListener('click', function() {voteNo(5);},false);
btnNo6.addEventListener('click', function() {voteNo(6);},false);
btnNo7.addEventListener('click', function() {voteNo(7);},false);
btnNo8.addEventListener('click', function() {voteNo(8);},false);
btnNo9.addEventListener('click', function() {voteNo(9);},false);