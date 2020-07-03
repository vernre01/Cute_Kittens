var newColor;

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