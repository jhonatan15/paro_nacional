var animated = document.querySelectorAll(".animated_1");

function changeOpacity() {
    for (var i=0; i < animated.length; i++ ) {
        animated[i].style.opacity = 1;
        animated[i].classList.add("showUp");
    }
}

var animated_2 = document.querySelectorAll('.animated_2');

function showScroll() {
    var scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animated_2.length; i++ ) {
        var animatedHigh = animated_2[i].offsetTop;
        if (animatedHigh - 400 < scrollTop) {
         animated_2[i].style.opacity = 1;
         animated_2[i].classList.add("showUp");
        }
        else if (i == 3) {
            if (animatedHigh - 700 < scrollTop) {
             animated_2[i].style.opacity = 1;
             animated_2[i].classList.add("showUp");
            }

        }
    }
}

var animated_3 = document.querySelectorAll('.animated_3');

function showScrollTwo() {
    var scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animated_3.length; i++ ) {
        var animatedHigh = animated_3[i].offsetTop;
        if (animatedHigh - 400 < scrollTop) {
         animated_3[i].style.opacity = 1;
         animated_3[i].classList.add("showLeft");
        }
    }
}

function showFunctions() {
    showScroll();
    showScrollTwo();
}

var animated_card = document.querySelectorAll(".animated_card");

function changeOpacityCard() {
    for (var i=0; i < animated_card.length; i++ ) {
        animated_card[i].style.opacity = 1;
        animated_card[i].classList.add("showUp");
    }
}

window.addEventListener("scroll", showFunctions);
