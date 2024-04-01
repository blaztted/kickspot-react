import React from "react";
import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";
import NewArrivals from "../components/NewArrivals/NewArrivals";

export const Home = () => {
  return (
    <div>
      <Hero />

      <Featured />
      <NewArrivals />
    </div>
  );
};

export default Home;
