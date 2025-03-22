import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      return;
    }

    const darkThemePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const lightThemePreference = window.matchMedia(
      "(prefers-color-scheme: light)"
    );

    if (darkThemePreference.matches) {
      setTheme(Theme.DARK);
    } else if (lightThemePreference.matches) {
      setTheme(Theme.LIGHT);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(Theme.LIGHT, Theme.DARK);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
