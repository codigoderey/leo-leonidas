"use client";

import { useLanguageContext } from "@/context/languageContext";
import { useFirebaseContext } from "@/context/firebaseContext";
import { CategoriesType } from "@/types/categories";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import firebase from "firebase/compat/app";

const CategoriesJson = [
  {
    id: 1,
    esName: "Rotulación de Vehículos",
    enName: "Vehicle Wraps",
    spDesc: "Estiliza tu vehículo con un diseño personalizado.",
    enDesc: "Style your vehicle with a custom design.",
    image:
      "https://images.pexels.com/photos/163582/car-lettering-design-auto-vote-163582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    esName: "Tarjetas de Presentación",
    enName: "Business Cards",
    spDesc: "Diseños únicos para tu tarjeta de presentación.",
    enDesc: "Unique designs for your business card.",
    image:
      "https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    esName: "Diseño de Logotipos",
    enName: "Logo Design",
    spDesc: "Diseño de logotipo personalizado.",
    enDesc: "Custom logo design.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
  },
  {
    id: 4,
    esName: "Cardboards y Flyers",
    enName: "Cardboards and Flyers",
    spDesc: "Productos personalizados para tu empresa.",
    enDesc: "Custom products for your company.",
    image:
      "https://images.pexels.com/photos/7653099/pexels-photo-7653099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const ServiceCategoriesHeader = () => {
  return <h3 className="text-3xl font-bold text-blue-200 my-8">
    {useLanguageContext()?.language === "es" ? "Servicios" : "Services"}
  </h3>;
};

const ServicesCategoriesCard = ({
  id,
  spName,
  enName,
  imgUrl,
}: CategoriesType) => {
  const languageContext = useLanguageContext();
  return (
    <Link href={`/services/${id}`}>
    <div className="rounded-xl p-4 bg-gradient-to-r from-blue-500 to-cyan-500 overflow-hidden h-auto border-2 border-blue-900 cursor-pointer">
      <div className="h-20">
        <h4 className="font-bold text-2xl text-blue-950 mb-2">
          {languageContext?.language === "es" ? spName : enName}
        </h4>
      </div>
      <div className="mt-4 h-80 md:h-96">
        <Image
          src="https://images.pexels.com/photos/1058276/pexels-photo-1058276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="w-full h-auto h-full rounded-xl object-cover"
          alt={languageContext?.language === "es" ? spName : enName}
          width={200}
          height={200}
          onError={(e) => {
            e.currentTarget.src = "/favicon-32x32.png";
          }}
        />
      </div>
    </div>
    </Link>
  );
};

const ServicesCategoriesList = () => {
  const  firebaseContext = useFirebaseContext();

  useEffect(() => {
    firebaseContext?.getAllCategories();
  }, []);

  return (
    <section className="py-16">
      <ServiceCategoriesHeader />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {firebaseContext?.categories.map((category) => (
          <div key={category.id}>
            <ServicesCategoriesCard {...category} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCategoriesList;
