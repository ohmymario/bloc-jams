

function forEach(x, callback) {
    for (var i = 0; i < x.length; i++) {
        callback([i, x[i]]);
    }
}


function myCallBack(y) {
    console.log(y);
}



forEach(["mario", "person1"], myCallBack);





