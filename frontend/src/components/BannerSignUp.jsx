import React from "react";
import { Link } from "react-router-dom";

const BannerSignUp = () => {
  return (
    <>
      <div className="bgBannerSignup items-center flex   sm:flex-col  px-13 sm:pb-16 mt-10 p-20 ">
        <div className="w-[30dvw] sm:w-[95dvw] ">
          {/* <img className="p-15" src="./order.png" alt="" /> */}
          <iframe src="https://lottie.host/embed/61e0306e-d354-438c-b7ae-e73d5951402d/cyit3zttCh.json"  className="h-[60dvh] w-[30dvw]  sm:w-[80dvw] sm:h-[65dvh]"></iframe>
          
        </div>
        <div >
          <p className="text-darkBlue text-5xl tracking-wider leading-normal font-bold">
            SignUp & Adopt A Pet.
          </p>
            <p className="text-darkBlue text-3xl tracking-wider leading-normal font-bold">Find Your Perfect Pet, Change a Life Today!</p>
          <Link to="/Account">
            <button className="bg-green text-white rounded-lg hover:scale-95 transition ease-in my-5 px-16 py-2">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BannerSignUp;
