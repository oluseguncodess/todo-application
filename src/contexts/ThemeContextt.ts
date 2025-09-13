import { createContext } from "react";
type Theme = 'light' | 'dark'

interface ThemeContextI {
  theme: Theme
  handleChangeTheme: (theme: Theme) => void;
}
export const ThemeContext = createContext<ThemeContextI>({
  theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  handleChangeTheme: () => {}
})