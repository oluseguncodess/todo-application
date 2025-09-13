import { useState, useEffect, type PropsWithChildren } from 'react';
import { ThemeContext } from './ThemeContextt';

type Theme = 'light' | 'dark'

export default function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleThemeChange);

    document.documentElement.classList.toggle('dark', mediaQuery.matches);

    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, [mediaQuery]);

  const ctxValue = {
    theme: theme,
    handleChangeTheme: setTheme
  };

  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
