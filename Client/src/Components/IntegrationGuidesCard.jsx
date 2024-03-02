import React, { useState } from 'react';

const IntegrationGuidesCard = ({ cardData }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="w-full max-w-sm bg-primary p-4 md:p-8 rounded-lg shadow relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col items-center pb-2">
          <img
            className="w-12 h-12 md:w-24 md:h-24 mb-3 rounded-full shadow-lg"
            src={cardData.image}
            alt="Image"
          />
        </div>
        <div>
          <h5 className="mb-2 text-lg md:text-2xl font-bold text-white text-center uppercase font-Heading">
            {cardData.title}
          </h5>
          <p className="mb-3 font-para text-sm md:text-lg font-normal text-darkgray text-center">
            {cardData.description}
          </p>
          <div className="text-center">
            {isHovered && (
              <button className="inline-flex items-center p-1 md:px-6 md:py-3 text-xs md:text-sm font-bold text-center text-primary bg-white rounded-md hover:bg-accence hover:text-primary">
                Read More
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegrationGuidesCard;
