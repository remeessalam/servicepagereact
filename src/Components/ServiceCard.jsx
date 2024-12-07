import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="aspect-square">
      <div className="group h-full w-full border border-slate-200 hover:border-primary relative overflow-hidden rounded-xl bg-black/5 p-6 hover:bg-black/10 transition-all duration-300">
        <div className="absolute inset-0">
          <img
            src={service.img}
            alt={service.title}
            className="h-full w-full object-cover opacity-50 transition-all duration-300 group-hover:scale-105"
          />
        </div>
        <div className="relative">
          <h3 className="text-xl font-bold text-orange-500 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{service.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
