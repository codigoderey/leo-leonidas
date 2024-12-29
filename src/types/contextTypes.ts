import { CategoriesListType, CategoriesType } from "./categories";

export interface LanguageContextType {
  language: string;

  setLanguage: React.Dispatch<React.SetStateAction<string>>;

  verifyLanguageFromLocalStorage: () => string;

  setLanguageAndLocalStorage: (lang: string) => string;
}

export interface FirebaseContextType {
  categories: CategoriesListType;

  setCategories: React.Dispatch<React.SetStateAction<CategoriesListType>>;

  getAllCategories: () => Promise<CategoriesListType | undefined>;

  category: CategoriesType | null;

  getCategoryById: (id: string) => Promise<CategoriesType | undefined>;

  setCategory: React.Dispatch<React.SetStateAction<CategoriesType | null>>;

  loadingCategories: boolean
}