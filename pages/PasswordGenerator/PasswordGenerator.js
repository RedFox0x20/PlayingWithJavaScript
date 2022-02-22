const Options_EnableLowercase = document.getElementById("Options_EnableLowercase");
const Options_UppercaseLetters = document.getElementById("Options_UppercaseLetters");
const Options_Symbols = document.getElementById("Options_Symbols");
const Options_Numbers = document.getElementById("Options_Numbers");
const PasswordLength_Slider = document.getElementById("PasswordLength_Slider");
const PasswordLength_Slider_Text = document.getElementById("PasswordLength_Slider_Text");
const Output_Text = document.getElementById("generator-password");

function GeneratePassword() {
    /* Create a character set to generate our password from using the options provided by the options check boxes */
    let CharacterSet = "";
    if (Options_EnableLowercase.checked) {
        CharacterSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (Options_UppercaseLetters.checked) {
        CharacterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (Options_Symbols.checked) {
        CharacterSet += "!\"£$%^&*()-_=+[{}];'#:@~,./<>?\\|";
    }
    if (Options_Numbers.checked) {
        CharacterSet += "0123456789";
    }
    if (CharacterSet == "") {
        Output_Text.innerText = "Couldn't generate a password, not enough options enabled";
        return;
    }

    /* Generate a password based on the character set at random to the length specified on the options slider */
    const Length = PasswordLength_Slider.value;
    let Output = "";

    while (Output.length != Length) {
        Output += CharacterSet.charAt(Math.floor(Math.random() * CharacterSet.length));
    }
    Output_Text.innerText = Output;

}

function UpdatePasswordSliderText() {
    PasswordLength_Slider_Text.innerText = "Password length: " + PasswordLength_Slider.value;
}

/* navigator (window.navigator) provides access to information about the browser, this includes the users clipboard */
function CopyPasswordToClipboard() {
    navigator.clipboard.writeText(Output_Text.innerText);
    Output_Text.innerText = "Copied";
}

(() => {
    UpdatePasswordSliderText();
})();