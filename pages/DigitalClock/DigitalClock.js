// Get a reference to <p id="DigitalClock">00:00:00</p>
const ClockText = document.getElementById("DigitalClock");

// function EnsureDoubleDigit (Number) : String
// Returns the given Digit as the string representation of itself ensuring that it is always two characters long
// 0 -> 00, 5 -> 05, 12 -> 12 ... etc...
function EnsureDoubleDigit(Digit) {
    if (Digit < 10) {
        return `0${Digit}`;
    }
    return Digit.toString();
}

// function UpdateClock : 
// A self-calling method that gets the current Date and Time using `new Date()` and outputs a formatted string into the ClockText elements innerText
function UpdateClock() {
    let DateTime = new Date();
    ClockText.innerText = `${EnsureDoubleDigit(DateTime.getHours())}:${EnsureDoubleDigit(DateTime.getMinutes())}:${EnsureDoubleDigit(DateTime.getSeconds())}`;

    // setTimeout(Method, n)
    // Calls the given Method after n milliseconds, here we're using it to call this method to update every second, it will call itself infinitely this way.
    setTimeout(UpdateClock, 1000);
}

// Container method to run when the script is loaded
(() => {
    UpdateClock();
})();