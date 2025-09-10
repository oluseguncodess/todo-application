import { useContext } from "react";
import { ThemeContext } from "../ThemeContextt";

export function useThemeContext() {
  const context  = useContext(ThemeContext)
  if(context === undefined) {
    throw new Error('Theme context has to be used in a provider')
  }
  return context
}