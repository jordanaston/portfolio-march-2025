export const themeScript = `
  if (typeof window !== 'undefined') {
    let theme;
    try {
      theme = localStorage.getItem('theme') || 'dark';
      if (theme === 'system') {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
    } catch {
      theme = 'dark';
    }
    document.documentElement.classList.add(theme);
  }
`;
