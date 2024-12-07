import React, { useState } from "react";
import FaqItem from "./Faqitem";
import { faqData } from "../constant";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = (id) => {
    setIsOpen((prev) => {
      return prev === id ? "" : id;
    });
  };
  return (
    <div className=" bg-backgroundcolor py-12 px-4 sm:px-6 lg:px-8">
      <div className="wrapper ">
        <h1
          data-aos="fade-up"
          className="text-4xl font-bold text-center mb-12 text-orange-500"
        >
          FAQ
        </h1>
        <div className="space-y-6">
          {faqData.map((faq) => (
            <div data-aos="fade-up" key={faq.id}>
              <FaqItem
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                onClose={onClose}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
