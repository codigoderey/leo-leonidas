"use client";

import { useLanguageContext } from "@/context/languageContext";
import Image from "next/image";
import Link from "next/link";

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

export interface ServicesCategoriesCardProps {
  id: number;
  esName: string;
  enName: string;
  spDesc: string;
  enDesc: string;
  image: string;
}

const ServiceCategoriesHeader = () => {
  return <h3 className="text-3xl font-bold text-blue-200 my-8">
    {useLanguageContext()?.language === "es" ? "Servicios" : "Services"}
  </h3>;
};

const ServicesCategoriesCard = ({
  esName,
  enName,
  spDesc,
  enDesc,
  image,
}: ServicesCategoriesCardProps) => {
  const languageContext = useLanguageContext();
  return (
    <Link href="/services">
    <div className="rounded-xl p-4 bg-gradient-to-r from-blue-500 to-cyan-500 overflow-hidden h-auto border-2 border-blue-900 cursor-pointer">
      <div>
        <h4 className="font-bold text-2xl text-blue-950 mb-2">
          {languageContext?.language === "es" ? esName : enName}
        </h4>
      </div>

      <div className="h-20">
        <p className="font-bold text-base text-blue-900">
          {languageContext?.language === "es" ? spDesc : enDesc}
        </p>
      </div>
      <div className="mt-4 h-60">
        <Image
          className="w-full h-auto h-full rounded-xl object-cover"
          alt={esName}
          src={image}
          width={200}
          height={200}
        />
      </div>
    </div>
    </Link>
  );
};

const ServicesCategoriesList = () => {
  return (
    <section className="py-16">
      <ServiceCategoriesHeader />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {CategoriesJson.map((card) => (
          <div key={card.id}>
            <ServicesCategoriesCard {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCategoriesList;
