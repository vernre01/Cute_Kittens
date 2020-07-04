var btn1 = document.getElementById('Teal');
var btn2 = document.getElementById('Brown');
var btn3 = document.getElementById('Orange');

function setBackgroundColor(newColor) {
    if (newColor === 'Orange') {
        document.body.style.backgroundColor = "rgb(242,132,62,95%)";
    } else if (newColor === 'Brown') {
        document.body.style.backgroundColor = "rgb(140,123,93)";
    } else {
        //sets color to Teal, the default color
        document.body.style.backgroundColor = "rgb(124,244,213,96%)";
    }
}

btn1.addEventListener('click', function() {setBackgroundColor('Teal');},false);
btn2.addEventListener('click', function() {setBackgroundColor('Brown');},false);
btn3.addEventListener('click', function() {setBackgroundColor('Orange');},false);