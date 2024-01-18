document.addEventListener('DOMContentLoaded', function () {
    // Update the spans with actual information
    document.getElementById('name').textContent = 'Your Name';
    document.getElementById('university').textContent = 'Your University/School';
    document.getElementById('degree').textContent = 'Your Degree';
    document.getElementById('skills').textContent = 'Your Skills';
    document.getElementById('hobbies').textContent = 'Your Hobbies';
    document.getElementById('otherHobbies').textContent = 'Other Hobbies';

    // Theme selector functionality
    const themeSelector = document.getElementById('themeSelector');
    themeSelector.addEventListener('change', updateTheme);

    function updateTheme() {
        const selectedTheme = themeSelector.value;
        document.body.style.backgroundColor = getThemeBackgroundColor(selectedTheme);
        document.body.style.color = getThemeTextColor(selectedTheme);
    }

    function getThemeBackgroundColor(theme) {
        switch (theme) {
            case 'dark-theme':
                return '#333';
            case 'light-theme':
                return '#fff';
            case 'custom-theme1':
                return '#ffcc00';
            case 'custom-theme2':
                return '#e74c3c';
            default:
                return '#f0f0f0';  // Default theme
        }
    }

    function getThemeTextColor(theme) {
        switch (theme) {
            case 'dark-theme':
                return '#fff';
            case 'light-theme':
                return '#333';
            default:
                return '#333';  // Default text color for custom themes
        }
    }
});
