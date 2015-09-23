var pointsArray = document.getElementsByClassName('point');


function revealPoint(y) {
    pointsArray[y].style.opacity = 1;
    pointsArray[y].style.transform = "scaleX(1) translateY(0)";
    pointsArray[y].style.msTransform = "scaleX(1) translateY(0)";
    pointsArray[y].style.WebkitTransform = "scaleX(1) translateY(0)";
}

$(window).load(function() {

    if ($(window).height() > 950) {
        animatePoints();
    }
    
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

    $(window).scroll(function(event) {

        if ($(window).scrollTop() >= scrollDistance) {
            animatePoints();
        }

    });
});
    
var animatePoints = function() {
    
    var revealPoint = function() {
        $(this).css({
            opacity: 1,
            transform: 'scaleX(1) translateY(0)'
        });
    };
    
    $.each($('.point'), revealPoint);
};

