import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../constant";

const Serviceslist = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-backgroundcolor">
      <div className="wrapper">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Which Services We Provide
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Services you can offer to your customers through A Boostmysites
            Subscription
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Serviceslist;
