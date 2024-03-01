import React, { useState } from 'react';
import { accordionItems } from "../Data/AccordionData";

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (index === prevIndex ? null : index));
  };

  return (
    <div className="h-96 overflow-y-auto px-6     ">      
    {accordionItems.map((item, index) => (
        <div key={index + 1} className="mb-4 shadow-md">
          <h2 id={`accordion-color-heading-${index + 1}`}>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-primary border ${index === accordionItems.length - 1 ? 'border-t-0' : 'border-b-0'
                } rounded-lg border-primary dark:border-primary dark:tprimary   dark:hover:bg-primary hover:text-accence focus:text-accence focus:bg-primary gap-3`}
              data-accordion-target={`#accordion-color-body-${index + 1}`}
              aria-expanded={activeAccordion === index + 1}
              aria-controls={`accordion-color-body-${index + 1}`}
              onClick={() => toggleAccordion(index + 1)}
            >
              <span className="font-black text-4xl font-Heading dark:hover:bg-primary hover:text-accence focus:text-accence focus:bg-primary">{index + 1}</span>
              <span className='text-xl font-Heading'>{item.heading}</span>
              <span className="text-4xl font-black">{activeAccordion === index + 1 ? '-' : '+'}</span>
            </button>

            <div
              id={`accordion-color-body-${index + 1}`}
              className={`${activeAccordion === index + 1 ? 'block' : 'hidden'
                } p-5 border border-${index === 0 ? 't-0' : 'b-0'} border-primary rounded-lg dark:border-primary dark:bg-primary`}
              aria-labelledby={`accordion-color-heading-${index + 1}`}
            >
              <div className="mb-2 text-white dark:text-white">{item.content}</div>
              {item.additionalContent && <>{item.additionalContent}</>}
            </div>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
