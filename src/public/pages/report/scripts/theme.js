// Retrieve theme from localStorage or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle-button');
    if (themeToggleButton) {
        // Set initial icon based on theme
        updateThemeIcon(currentTheme);

        themeToggleButton.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let newTheme = theme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
});

function updateThemeIcon(theme) {
    const themeToggleButton = document.getElementById('theme-toggle-button');
    if (theme === 'dark') {
        themeToggleButton.classList.remove('fa-moon');
        themeToggleButton.classList.add('fa-sun');
    } else {
        themeToggleButton.classList.remove('fa-sun');
        themeToggleButton.classList.add('fa-moon');
    }
}
