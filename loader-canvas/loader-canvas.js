var speed = 70,
    percentage = 0;
var loader = document.getElementById('loader').getContext('2d');
var bubbles = document.querySelectorAll('.bubble');
var startPoint = 4.665;
var cWidth = loader.canvas.width;
var cHeight = loader.canvas.height;
var fill = setInterval(fillCircle, speed);

function fillCircle() {
    var diffToFill = (percentage / 100) * Math.PI * 2;

    loader.clearRect(0, 0, cWidth, cHeight);
    loader.lineWidth = 6;
    loader.fillStyle = '#fff';
    loader.strokeStyle = '#17796c';
    loader.textAlign = 'center';
    loader.font = "18px Gill sans";
    loader.fillText(percentage + '%', 50, 55);

    loader.beginPath();
    loader.arc(50, 50, 40, startPoint, diffToFill + startPoint);
    loader.stroke();

    if (percentage >= 100) {
        for (i = 0; i < bubbles.length; i++)
            bubbles[i].style.animationIterationCount = '1';

        clearTimeout(fill);

    }
    percentage++;
}