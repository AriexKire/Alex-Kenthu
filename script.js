document.addEventListener('DOMContentLoaded', function () {
    // Update the spans with actual information
    document.getElementById('name').textContent = 'Your Name';
    document.getElementById('university').textContent = 'Your University/School';
    document.getElementById('degree').textContent = 'Your Degree';
    document.getElementById('skills').textContent = 'Your Skills';
    document.getElementById('hobbies').textContent = 'Your Hobbies';
    document.getElementById('otherHobbies').textContent = 'Other Hobbies';

    // Theme options
    const themes = ['default-theme', 'dark-theme', 'light-theme'];
    let currentThemeIndex = 0;

    // Toggle theme button functionality
    const themeButton = document.getElementById('themeButton');
    themeButton.addEventListener('click', toggleTheme);

    function toggleTheme() {
        const body = document.body;
        body.classList.remove(...themes);  // Remove all existing themes

        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const newTheme = themes[currentThemeIndex];
        body.classList.add(newTheme);

        // Update button text based on the current theme
        themeButton.textContent = 'Switch to ${capitalizeFirstLetter(newTheme.split('-')[0])} Theme;'
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});