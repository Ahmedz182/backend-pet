import React from "react";
import HeroSection from "../../components/HeroSection";
import Banner from "../../components/Banner";
import BannerSignUp from "../../components/BannerSignUp";
import LovedAnimals from "../../components/LovedAnimals";
import FavPet from "../../components/FavPet";
// import PetsOfTheWeek from "../../components/PetsOfTheWeek";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FavPet />
      {/* <PetsOfTheWeek /> */}
      <LovedAnimals />
      <Banner />
      <BannerSignUp />
    </>
  );
};

export default Home;
