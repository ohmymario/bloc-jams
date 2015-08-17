

/*
function forEach(x, callback) {
    for (var i = 0; i < x.length; i++) {
        callback([i, x[i]]);
    }
}


function myCallBack(y) {
    console.log(y);
}



forEach(["mario", "person1"], myCallBack);
*/


var forEach = function (x, callback) {
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

forEach(pointsArray, revealPoint);




