var pointsArray = document.getElementsByClassName('point');


var animatePoints = function (x, callback) {
    for (var i = 0; i < x.length; i++) {
        callback(i);
    }
};

function revealPoint(y) {
    pointsArray[y].style.opacity = 1;
    pointsArray[y].style.transform = "scaleX(1) translateY(0)";
    pointsArray[y].style.msTransform = "scaleX(1) translateY(0)";
    pointsArray[y].style.WebkitTransform = "scaleX(1) translateY(0)";
}

window.onload = function () {

    if (window.innerHeight > 950) {
        animatePoints(pointsArray, revealPoint);
    }

    window.addEventListener('scroll', function (event) {

        if (pointsArray[0].getBoundingClientRect().top <= 500) {
            animatePoints(pointsArray, revealPoint);
        }

    });
};
    


