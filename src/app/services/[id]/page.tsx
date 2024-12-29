"use client";

import { useEffect } from "react";
import { useFirebaseContext } from "@/context/firebaseContext";
import { useLanguageContext } from "@/context/languageContext";
import { useParams } from "next/navigation";
import ServiceBanner from "@/components/ServiceBanner";
import Container from "@/components/layout/Container";

const ServicesPage = () => {
  const { id } = useParams();
  const firebaseContext = useFirebaseContext();
  const languageContext = useLanguageContext();

  useEffect(() => {
    firebaseContext?.getCategoryById(String(id));
  }, [id]);

  return (
    <main>
      <ServiceBanner
        category={
          languageContext?.language === "es"
            ? firebaseContext?.category?.spName ?? ""
            : firebaseContext?.category?.enName ?? ""
        }
      />

      <Container>
        <section className="py-8 text-blue-200">
          <h2 className="text-2xl font-bold mb-8 text-center mx-auto">
            {languageContext?.language === "es"
              ? `¿Qué son ${firebaseContext?.category?.spName.toLocaleLowerCase()}?`
              : `What are ${firebaseContext?.category?.enName.toLocaleLowerCase()}?`}
          </h2>
          <p className="text-lg max-w-[80ch] mx-auto">
            {languageContext?.language === "es"
              ? firebaseContext?.category?.spDescription
              : firebaseContext?.category?.enDescription}
          </p>
        </section>
      </Container>
    </main>
  );
};

export default ServicesPage;
