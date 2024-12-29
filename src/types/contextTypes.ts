export interface LanguageContextType {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  verifyLanguageFromLocalStorage: () => string;
  setLanguageAndLocalStorage: (lang: string) => void;
}