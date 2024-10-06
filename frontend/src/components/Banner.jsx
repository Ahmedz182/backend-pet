import React from "react";

const Banner = () => {
  return (
    <>
      <div className="py-8 px-10 flex  sm:flex-col sm:py-4 sm:px-2 justify-center items-center">
        <div className="w-[40dvw]  sm:w-[90dvw] flex justify-center items-center ">
          <iframe
            className="h-[60dvh] w-[38dvw]  sm:w-[80dvw] sm:h-[65dvh]"
            src="https://lottie.host/embed/298cad82-a4df-4fbc-bfc3-064114475497/odjMtG59Gp.json"></iframe>
        </div>
        <div className="w-[42dvw] sm:[90dvw]">
          <p className="font-bold sm:font-semibold text-6xl sm:text-4xl tracking-wider sm:leading-relaxed text-darkBlue leading-normal">
            Show your Love for Pets,
            <br/>
            Get yourself One at your
            <span className="font-black sm:font-bold text-red"> Door Step</span>
          </p>
        </div>
      </div>

      <p className="text-darkBlue/90 tracking-wide pb-4 text-center text-xl sm:text-lg font-semibold">
      Support Our Mission – Together We Can Make a Difference
      </p>
    </>
  );
};

export default Banner;
