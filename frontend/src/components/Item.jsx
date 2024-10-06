import React, { useEffect, useState } from "react";
import ViewFullDetail from "./ViewFullDetail";
const Item = ({ title, price, images, breed, adobtAvailabilty, Color, id }) => {
  console.log(adobtAvailabilty);
  const [imgSrc, setImgSrc] = useState(images); // Initialize with the first image

  const handleError = () => {
    // Set to default image on error
    setImgSrc(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOP9_jE5QAFKzRmc2OCwy1bkZBG825XT6u2A&s"
    );
  };
  return (
    <>
      <div className="transition ease-in hover:translate-y-[-0.75rem] ">
        <div className="rounded-xl  cursor-pointer overflow-hidden w-[20dvw] sm:w-[40dvw] flex flex-col">
          <img
            className="rounded-t-xl aspect-square p-10"
            loading="lazy"
            src={imgSrc}
            alt={title}
            onError={handleError} // Set the error handler
          />
          <span className="flex justify-between ps-6 items-center pe-4  py-4">
            <p className="font-bold text-xl text-darkBlue tracking-wider w-1/2 sm:w-2/3">
              {title}
            </p>
            <p className="font-medium">$ {price}</p>
          </span>
          <span className="flex flex-wrap flex-col ps-6 pe-4 gap-1">
            <p className="font-light text-xl text-darkBlue tracking-wider ">
              <strong> Breed: </strong> {breed}
            </p>
            <p className="font-light text-xl text-darkBlue tracking-wider ">
              <strong>Color: </strong> {Color}
            </p>
          </span>
          <p className="font-light text-xl text-darkBlue tracking-wider ps-6 mt-1">
            <strong> Availablity: </strong>{" "}
            {adobtAvailabilty ? "Available" : "Not Available"}
          </p>
        </div>
        <div className="flex justify-center py-4">
          <ViewFullDetail id={id} />
        </div>
      </div>
    </>
  );
};

export default Item;
