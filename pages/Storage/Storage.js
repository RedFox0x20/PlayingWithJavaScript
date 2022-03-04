// Storage.js

// Get a reference to our text entries
let DOC_sessionStorageText = document.getElementById("sessionStorageText");
let DOC_localStorageText = document.getElementById("localStorageText");

// Run when the document is loaded
(() => {
    // Load the stored values if they exist, else leave blank
    DOC_sessionStorageText.value = sessionStorage.getItem("sessionText") || '';
    DOC_localStorageText.value = localStorage.getItem("localText") || '';

    // Add an event listener so that when the text is changed it gets saved
    DOC_sessionStorageText.addEventListener('keyup', (event) => {
        sessionStorage.setItem("sessionText", DOC_sessionStorageText.value);
    });
    DOC_localStorageText.addEventListener('keyup', (event) => {
        localStorage.setItem("localText", DOC_localStorageText.value);
    })
})();