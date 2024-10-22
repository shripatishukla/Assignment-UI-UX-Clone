import React from 'react';
import '../input.css';
import '../output.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
  onButtonClick,
}) => {
  return (
    <div className={`pricing w-1/4 md:w-1/2 m-20 lg:w-1/3 mb-8 transition-all duration-300 ${active ? 'scale-105 shadow-lg' : 'shadow'}`}>
      <div
        className={`p-4 ${
          active
            ? "rounded-lg border border-primary bg-primary text-base font-medium text-black"
            : "rounded-lg border border-stroke bg-transparent text-base font-medium text-primary"
        }`}
      >
        <span className="block text-lg pb-2 font-semibold text-primary">
          {type}
        </span>
        <h2 className="mb-5 text-[42px] pt-2 font-bold text-2xl text-dark dark:text-white">
          {price}
          <span className="text-base pb-2 font-medium text-body-color dark:text-dark-6">
            / {subscription}
          </span>
        </h2>
        <p className="mb-8 border-b pt-2 border-stroke pb-8 text-base text-wrap text-body-color dark:border-dark-3 dark:text-dark-6">
          {description}
        </p>
        <div className="mb-9 flex p-2 flex-col p-1 gap-[14px]">
          {children}
        </div>
        <button
          onClick={onButtonClick}
          className={`block w-1/2 mx-auto rounded-md border border-stroke ${
            active ? "bg-primary bg-blue-500 text-black" : "bg-white text-black"
          } p-3 text-base font-medium`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
