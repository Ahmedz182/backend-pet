import React from "react";
import BuyNow from "./BuyNow";

const PetsOfTheWeek = () => {
  return (
    <>
      <div className="pb-5 ">
        <p className="text-darkBlue text-2xl font-black  pb-8 pt-12 tracking-wider text-center">
          Pets Of The Week
        </p>
        <div className="py-10 flex flex-wrap px-16 gap-8 sm:gap-y-5 sm:flex-col justify-center">
          <div className="flex transition ease-in hover:bg-green/30 sm:items-center rounded-3xl  p-2">
            <div className="sm:w-[40%]  w-60  overflow-hidden rounded-l-3xl sm:rounded-2xl">
              <img
                src="https://ca-times.brightspotcdn.com/dims4/default/2885844/2147483647/strip/true/crop/4713x5891+0+0/resize/2000x2500!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F1d%2Fe526c20442cabd5d1eb38f4a8389%2Fla-ig-what-does-la-smell-like-digital.jpg"
                alt="img"
                className="rounded-l-3xl"
              />
            </div>
            <div className="flex flex-col gap-4  justify-center ps-8 pe-16 sm:px-5">
              <p className="text-2xl font-semibold text-darkBlue tracking-wider sm:tracking-tight">
                Alice
              </p>
              <p className="text-darkBlue text-2xl font-medium sm:text-xl">
                $ 16.00
              </p>
              <ul className="text-darkBlue flex flex-col font-medium gap-y-4 ">
                <li>
                  <span className="text-green">✔</span> Easily Trainable
                </li>
                <li>
                  <span className="text-green">✔</span> Human Friendly
                </li>
                <li>
                  <span className="text-green">✔</span> A Loving Pet
                </li>
              </ul>
              <BuyNow />
            </div>
          </div>
          <div className="flex transition ease-in hover:bg-green/30  rounded-3xl p-2 sm:items-center">
            <div className="img sm:w-[40%]  w-60  overflow-hidden rounded-l-3xl sm:rounded-2xl">
              <img
                src="https://img.freepik.com/premium-photo/social-media-banner-strawberry-shampoo_485374-5782.jpg"
                alt="img"
                className="rounded-l-3xl"
              />
            </div>
            <div className="flex flex-col gap-4  justify-center  ps-8 pe-16  sm:px-3">
              <p className="text-2xl font-semibold text-darkBlue tracking-wider sm:tracking-tight">
                Jakie
              </p>
              <p className="text-darkBlue text-2xl font-medium sm:text-xl">
                $ 18.99
              </p>
              <ul className="text-darkBlue flex flex-col font-medium gap-y-4 ">
                <li>
                  <span className="text-green">✔</span> Best Energy Level
                </li>
                <li>
                  <span className="text-green">✔</span> Easily Trainable
                </li>
                <li>
                  <span className="text-green">✔</span> Human Friendly
                </li>
              </ul>
              <BuyNow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetsOfTheWeek;
