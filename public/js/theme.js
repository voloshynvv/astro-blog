const THEME_LOCAL_STORAGE_KEY = 'theme';

const getTheme = () => {
  const theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

  if (theme) {
    return theme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = (theme) => {
  localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  document.documentElement.setAttribute('data-theme', theme);
};

const theme = getTheme();
setTheme(theme);

document.addEventListener('DOMContentLoaded', () => {
  const toggleThemeBtn = document.querySelectorAll('.toggle-theme');

  toggleThemeBtn.forEach((btn) =>
    btn.addEventListener('click', () => {
      const theme = getTheme();
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }),
  );
});
