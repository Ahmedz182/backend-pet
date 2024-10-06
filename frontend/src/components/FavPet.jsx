import React from "react";

const FavPet = () => {
  const item = [
    {
      title: "Cats",
      img: "https://cdn.petsathome.com/public/images/assets/cat-category/cat-avatar.png",
    },
    {
      title: "Dogs",
      img: "https://cdn.petsathome.com/public/images/assets/dog-category/dog-avatar.png",
    },
    {
      title: "Fishes",
      img: "https://cdn.petsathome.com/public/images/assets/fish-category/fish-avatar.png",
    },
    {
      title: "Reptiles",
      img: "https://cdn.petsathome.com/public/images/assets/reptile-category/reptile.png",
    },
    {
      title: "Birds & Wildlife",
      img: "https://cdn.petsathome.com/public/images/assets/bird-wildlife-category/bird-avatar.png",
    },
  ];

  return (
    <>
      <div className="py-10">
        <p className="text-darkBlue text-2xl  tracking-wider font-semibold pb-8 pt-12 leading-tight text-center">
          <sapn className="text-green font-bold"> Find</sapn> Your Pet
        </p>
        <div className="flex justify-between flex-wrap gap-3 px-28 sm:px-10 sm:justify-center">
          {item.map(({ title, img }) => {
            return (
              <>
                <div className="flex flex-col items-center cursor-pointer transition ease-in hover:translate-y-2 hover:bg-lightGreen hover:rounded-lg">
                  <div className="rounded-xl p-5">
                    <img
                      src={img}
                      alt={title}
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xl sm:text-lg text-darkBlue/70 font-medium py-2">
                    {title}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FavPet;
