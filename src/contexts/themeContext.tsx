import { createContext, useState, useEffect, type PropsWithChildren, type Dispatch, type SetStateAction } from "react"

type Theme = 'light' | 'dark' | undefined

interface ThemeContextType {
  theme: Theme;
  handleThemeChange: Dispatch<SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: undefined,
  handleThemeChange: () => {}
})

export default function ThemeContextProvider({children}: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    );
  
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
    console.log(theme)
  
    useEffect(() => {
      const handleThemeChange = (e: MediaQueryListEvent) => {
        setTheme(e.matches ? 'dark' : 'light');
      };
  
      mediaQuery.addEventListener('change', handleThemeChange);
  
      document.documentElement.classList.toggle('dark', mediaQuery.matches);
  
      return () =>
        mediaQuery.removeEventListener('change', handleThemeChange);
    }, [mediaQuery]);

    const ctxValue = {
      theme: theme,
      handleThemeChange: setTheme
    }

    return <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
}



      

  