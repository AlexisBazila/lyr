import React from "react";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

function FAQSection() {
  return (
    <section className="px-[10%] my-30">
      <div>
        <TitleAndSubtitle
          title="FAQs"
          subtitle={"Preguntas y respuestas frecuentes"}
        />
        <LeftAlignedParagraph
          paragraphs={[
            "Respondemos a las dudas más comunes para que tengas todo claro antes de solicitar tu tasación.",
          ]}
        />
      </div>
      {/* Acordeon*/}
      <div>
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white text-gray-900"
          data-inactive-classes="text-gray-500"
        >
          {/* Elemento del acordeon */}
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-black border-b border-gray-200 text-2xl gap-3"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
            >
              <span>¿Que incluye el servicio de tasacion?</span>
              <svg
                data-accordion-icon
                class="w-7 h-7 p-2 rotate-180 shrink-0 bg-black text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-1"
            class="hidden"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 text-lg">
                Realizamos tasaciones de una amplia variedad de inmuebles: casas
                familiares, departamentos en edificios, terrenos vacíos, lotes
                en barrios cerrados, locales comerciales, oficinas y hasta
                galpones industriales. La tasación se adapta a las
                características específicas de cada propiedad para reflejar su
                valor real en el mercado actual.
              </p>
            </div>
          </div>
          {/* Fin elemento acordeon */}

          {/* Elemento del acordeon */}
          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-black border-b border-gray-200 text-2xl gap-3"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="true"
              aria-controls="accordion-flush-body-2"
            >
              <span>¿Cuánto tiempo demora el proceso de tasación?</span>
              <svg
                data-accordion-icon
                class="w-7 h-7 p-2 rotate-180 shrink-0 bg-black text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-2"
            class="hidden"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus ullam odio reiciendis laborum recusandae atque
                velit voluptatum excepturi, beatae nihil minus, numquam
                asperiores ab nam a suscipit, eaque officia. Asperiores.
              </p>
            </div>
          </div>
          {/* Fin elemento acordeon */}

          {/* Elemento del acordeon */}
          <h2 id="accordion-flush-heading-3">
            <button
              type="button"
              class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-black border-b border-gray-200 text-2xl gap-3"
              data-accordion-target="#accordion-flush-body-3"
              aria-expanded="true"
              aria-controls="accordion-flush-body-3"
            >
              <span>¿Qué información necesito para solicitar la tasación?</span>
              <svg
                data-accordion-icon
                class="w-7 h-7 p-2 rotate-180 shrink-0 bg-black text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-3"
            class="hidden"
            aria-labelledby="accordion-flush-heading-3"
          >
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus ullam odio reiciendis laborum recusandae atque
                velit voluptatum excepturi, beatae nihil minus, numquam
                asperiores ab nam a suscipit, eaque officia. Asperiores.
              </p>
            </div>
          </div>
          {/* Fin elemento acordeon */}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
