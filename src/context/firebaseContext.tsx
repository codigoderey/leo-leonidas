"use client";

import React, { createContext, useState } from "react";
import type { FirebaseContextType } from "@/types/contextTypes";
import { CategoriesListType, CategoriesType } from "@/types/categories";

import { db } from "@/config/firebase";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";

export const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const FirebaseContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const [categories, setCategories] = useState<CategoriesListType>([]);

  const [category, setCategory] = useState<CategoriesType | null>(null);

  const [loadingCategories, setLoadingCategories] = useState<boolean>(true)

  // get all categories from firebase
  const getAllCategories = async () => {

    try {
      const catRef = collection(db, "servicecategories");

      const catSnapshot = await getDocs(catRef);

      const categoriesList = catSnapshot.docs.map((doc) => {
        const data  = doc.data();
        return {
          id: doc.id,
          spName: data.spName,
          enName: data.enName,
          spDescription: data.spDescription,
          enDescription: data.enDescription,
          imgUrl: data.imgUrl
        }
      })

      setCategories(categoriesList);

      if(categoriesList){
        setLoadingCategories(false)
      }

      return categoriesList;
    } catch (error) {
      console.error("Error getting documents: ", error);
    }

  }

  // get firebase category by id
  const getCategoryById = async (id: string) => {

    try {
      const categoryRef = doc(db, "servicecategories", id);

      const categorySnapshot = await getDoc(categoryRef);

      const data = categorySnapshot.data() as CategoriesType;

      setCategory(data);

      if(data){
        setLoadingCategories(false)
      }

      return data;
    } catch (error) {
      console.error("Error getting document: ", error);
    }

  }

  return (
		<FirebaseContext.Provider
			value={{
				categories,
				setCategories,
				getAllCategories,
				category,
				setCategory,
				getCategoryById,
				loadingCategories
			}}>
			{children}
		</FirebaseContext.Provider>
	);
};

export const useFirebaseContext = () => {
  const useFirebaseContext = React.useContext(FirebaseContext);
  if (!useFirebaseContext) {
    throw new Error("useFirebaseContext must be used within a FirebaseProvider");
  }
  return useFirebaseContext;
};
