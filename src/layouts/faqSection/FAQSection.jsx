import React, { useState } from "react";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import { IoChevronDown } from "react-icons/io5";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué incluye el servicio de tasación?",
      answer:
        "Realizamos tasaciones de casas, departamentos, terrenos, locales comerciales y más, adaptando el análisis al mercado actual.",
    },
    {
      question: "¿Cuánto tiempo demora el proceso?",
      answer:
        "El proceso suele demorar entre 24 y 72 horas dependiendo del tipo de propiedad.",
    },
    {
      question: "¿Qué información necesito para solicitar la tasación?",
      answer:
        "Datos básicos del inmueble, ubicación, metros cuadrados y estado general.",
    },
  ];

  return (
    <section className="px-[10%] my-30">
      <div>
        <TitleAndSubtitle
          title="FAQs"
          subtitle="Preguntas y respuestas frecuentes"
        />
        <LeftAlignedParagraph
          paragraphs={[
            "Respondemos a las dudas más comunes para que tengas todo claro antes de solicitar tu tasación.",
          ]}
        />
      </div>

      <div className="mt-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full py-5 text-2xl font-medium text-black"
            >
              <span>{faq.question}</span>

              <IoChevronDown
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "max-h-96 opacity-100 pb-5"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 text-lg">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
