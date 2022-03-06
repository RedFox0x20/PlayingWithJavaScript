// Themes.js

// Get our theme selector
const DOC_ThemeSelect = document.getElementById("ThemeSelect");

(() => {
    // Whenver the theme selector is changed we apply the theme to the <html> tag,
    // watch this happen in your inpector.
    DOC_ThemeSelect.addEventListener('change', (ev) => {
        document.documentElement.setAttribute('theme', DOC_ThemeSelect.value);
    });
})();