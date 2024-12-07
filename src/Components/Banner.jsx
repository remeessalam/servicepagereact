import React from "react";
import bannerimage from "../assets/images/home-page-banner.webp";
const Banner = () => {
  return (
    <div className="relative  flex items-center justify-center bg-black text-white">
      <div className="absolute inset-0">
        <img
          src={bannerimage}
          alt="banner-image"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-black/10" />
      </div>

      <div className="relative wrapper px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="grid grid-cols-1  lg:grid-cols-3">
            <h1 className="lg:col-span-2 text-4xl sm:text-6xl font-bold text-primary  mb-6">
              START YOUR AI COMPANY WITH BOOSTMYSITES
            </h1>
            <p className="lg:col-span-1 mt-4 lg:mt-0 text-xl text-gray-300 max-w-3xl mx-auto">
              Are you dreaming of starting your software company? At
              BoostmySites, we turn dreams into reality. We offer comprehensive
              services to guide and support individuals in establishing their
              own software ventures. From ideation to execution, we’re your
              partners in this incredible journey.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="https://boostmysites.com/ai-expert/contact/step1"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
