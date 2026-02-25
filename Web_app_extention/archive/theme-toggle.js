// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create theme toggle button
    const header = document.querySelector('header');
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '🌙';
    themeToggle.title = 'Toggle dark/light mode';
    header.appendChild(themeToggle);
    
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '☀️';
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '🌙';
        }
        
        // Add animation to the toggle
        this.classList.add('animate__animated', 'animate__flip');
        setTimeout(() => {
            this.classList.remove('animate__animated', 'animate__flip');
        }, 1000);
    });
});