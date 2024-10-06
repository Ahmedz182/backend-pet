import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-5 bg-darkBlue justify-around  flex sm:px-10 py-10 sm:flex-col">
        <div className="flex flex-col gap-y-4 ">
          <p className="text-white text-4xl font-medium ">
            <span className="text-2xl font-bold">Pet </span>
            <span className="text-darkGreen text-2xl">FINDER </span>
            <span className="text-2xl font-bold">Foundation</span>
          </p>
          <span className="text-lg text-white">
            <p>Thank you for being a part of our mission to save lives and build families!</p>
            <span className="text-white text-lg flex gap-x-4 mt-4 ">
              <i className="ri-instagram-line cursor-pointer"></i>
              <i className="ri-facebook-circle-line cursor-pointer"></i>
              <i className="ri-twitter-x-line cursor-pointer"></i>
              <i className="ri-youtube-line cursor-pointer"></i>
            </span>
          </span>
        </div>

        <div>
          <ul className="text-white flex flex-col gap-y-4 sm:mt-10">
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms & Condition</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Tracking</li>
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <iframe src="https://lottie.host/embed/2d35f8d8-647d-4e01-8d1d-7f02bb692b68/ajRjoOq7uV.json"></iframe>
        </div>
      </div>
      <p className="text-center text-white bg-darkBlue pb-4">
        All rights Reserved{" "}
        <span className="font-bold">
            <span className="text-2xl font-bold">Pet </span>
            <span className="text-darkGreen text-2xl">FINDER </span>
            <span className="text-2xl font-bold">Foundation</span>
        </span>
      </p>
    </>
  );
};

export default Footer;
