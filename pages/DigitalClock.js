const ClockText = document.getElementById("DigitalClock");

function EnsureDoubleDigit(Digit) {
    if (Digit < 10) {
        return `0${Digit}`;
    }
    return Digit.toString();
}

function UpdateClock() {
    let DateTime = new Date();
    ClockText.innerText = `${EnsureDoubleDigit(DateTime.getHours())}:${EnsureDoubleDigit(DateTime.getMinutes())}:${EnsureDoubleDigit(DateTime.getSeconds())}`;
    setTimeout(UpdateClock, 1000);
}

(() => {
    UpdateClock();
})();