let screen = document.getElementById("screen");
const DELAY = 0;

let isBlack = false;

setInterval(function() {
    if (isBlack) {
        screen.style.backgroundColor = "white";
    } else {
        screen.style.backgroundColor = "black";
    }
    isBlack = !isBlack;  // 상태 반전
}, DELAY);