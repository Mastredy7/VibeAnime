// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

// Initial Setup
if (localStorage.getItem('color-theme') === 'dark' || 
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark');
darkIcon.classList.add('hidden');
lightIcon.classList.remove('hidden');
} else {
document.documentElement.classList.remove('dark');
darkIcon.classList.remove('hidden');
lightIcon.classList.add('hidden');
}

themeToggle.addEventListener('click', () => {
darkIcon.classList.toggle('hidden');
lightIcon.classList.toggle('hidden');

// If the page has the class dark, remove it, otherwise add it
if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
} else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
}
});