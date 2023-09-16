import React from 'react';
import { iconList } from '../assets/images';

const NewsLetterSuccess = ({ handleGoto }) => {
  return (
    <div className="flex flex-col bg-white h-full w-full sm:h-[520px] sm:w-[450px] items-center p-4 sm:px-10 sm:py-5 sm:rounded-xl">
      <section className="flex text-[16px] grow font-roboto font-normal">
        <div className="flex flex-col justify-center">
          <img
            src={iconList}
            alt="icon list"
            className="h-[50px] w-[50px] mb-10"
          />
          <h1 className="text-4xl mb-10 font-bold ">Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to{' '}
            <span>ash@loremcompany.com</span>. Please open it and click the
            button inside to confirm your subcription
          </p>
        </div>
      </section>
      <div className="py-5 w-full">
        <button
          className="w-full p-4 bg-dark-slate-grey hover:bg-gradient-to-r hover:from-tomato hover:to-tomato-end rounded-md text-white font-bold"
          onClick={() => handleGoto('newsletter')}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default NewsLetterSuccess;
