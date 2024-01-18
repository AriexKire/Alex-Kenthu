document.addEventListener('DOMContentLoaded', function () {
    // Update the spans with actual information
    document.getElementById('name').textContent = 'Raditya Fahren (Alex)';
    document.getElementById('university').textContent = 'X PPLG 2';
    document.getElementById('skills').textContent = '';
    document.getElementById('hobbies').textContent = 'Tidur';
    document.getElementById('otherHobbies').textContent = 'dan makan';

    // Theme selector functionality
    const themeSelector = document.getElementById('themeSelector');
    themeSelector.addEventListener('change', updateTheme);

    function updateTheme() {
        const selectedTheme = themeSelector.value;
        applyThemeColors(selectedTheme);
    }

    function applyThemeColors(theme) {
        const palette = getThemePalette(theme);

        document.body.style.backgroundColor = palette.body.background;
        document.body.style.color = palette.body.text;
        document.querySelector('header').style.backgroundColor = palette.header.background;
        document.querySelector('header').style.color = palette.header.text;
        document.querySelector('h1').style.color = palette.header.color;
        document.querySelector('button').style.backgroundColor = palette.button.background;
        document.querySelector('button').style.color = palette.button.text;
    }

    function getThemePalette(theme) {
        switch (theme) {
            case 'dark-theme':
                return {
                    body: {
                        background: '#333',
                        text: '#fff'
                    },
                    header: {
                        background: '#333',
                        text: '#fff',
                        color: '#fff'
                    },
                    button: {
                        background: '#3498db',
                        text: '#fff'
                    }
                };
            case 'light-theme':
                return {
                    body: {
                        background: '#f0f0f0',
                        text: '#333'
                    },
                    header: {
                        background: '#f0f0f0',
                        text: '#333',
                        color: '#333'
                    },
                    button: {
                        background: '#3498db',
                        text: '#fff'
                    }
                };
            case 'custom-theme1':
                return {
                    body: {
                        background: '#5585b5',
                        text: '#333'
                    },
                    header: {
                        background: '#79c2d0',
                        text: '#fff',
                        color: '#5585b5'
                    },
                    button: {
                        background: '#79c2d0',
                        text: '#fff'
                    }
                };
            case 'custom-theme2':
                return {
                    body: {
                        background: '#defcf9',
                        text: '#333'
                    },
                    header: {
                        background: '#c3bef0',
                        text: '#fff',
                        color: '#defcf9'
                    },
                    button: {
                        background: '#c3bef0',
                        text: '#fff'
                    }
                };
            default:
                return {
                    body: {
                        background: '#333',
                        text: '#fff'
                    },
                    header: {
                        background: '#333',
                        text: '#fff',
                        color: '#fff'
                    },
                    button: {
                        background: '#3498db',
                        text: '#fff'
                    }
                };  // Default theme
        }
    }
});
