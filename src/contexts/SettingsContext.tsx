import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type ThemeType = "light" | "dark";

interface AppSettings {
  theme: ThemeType;
  language: string;
}

interface SettingsContextProps {
  settings: AppSettings;
  setSettings: (newSettings: Partial<AppSettings>) => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context)
    throw new Error("useSettings must be used within SettingsProvider");
  return context;
};

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettingsState] = useState<AppSettings>({
    theme: "light",
    language: "en",
  });

  useEffect(() => {
    const stored = localStorage.getItem("appSettings");
    if (stored) {
      setSettingsState(JSON.parse(stored));
    }
  }, []);

  const setSettings = (newSettings: Partial<AppSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettingsState(updated);
    localStorage.setItem("appSettings", JSON.stringify(updated));
  };

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
