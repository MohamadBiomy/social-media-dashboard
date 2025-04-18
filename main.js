// changeing theme
const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
let theme = "light";



toggle.addEventListener('click', () => {
  theme === "dark" ? disableDarkTheme() : enableDarkTheme();
});

function enableDarkTheme() {
  body.classList.add('dark-theme');
  theme = "dark";
  localStorage.setItem('theme', theme);
}

function disableDarkTheme() {
  body.classList.remove('dark-theme');
  theme = "light";
  localStorage.setItem('theme', theme);
}

if (localStorage.getItem("theme")) {
  theme = localStorage.getItem("theme");
  theme === "dark" ? enableDarkTheme() : disableDarkTheme();
}

