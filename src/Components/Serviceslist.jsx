import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../constant";

const Serviceslist = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-backgroundcolor">
      <div className="wrapper">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold mb-4 text-primary"
          >
            Which Services We Provide
          </h2>
          <p
            data-aos="fade-up"
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Services you can offer to your customers through A Boostmysites
            Subscription
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div data-aos="fade-up" key={service.id}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Serviceslist;
