import React from "react";
import Card from "../utils/Card";
import { Box, Heading } from "@chakra-ui/react";
import Hero from "../utils/Hero";
import Carousel from "../utils/Carousel";
import Contact from "../utils/Contact";
import Ourmotto from "./Ourmotto";
import Team from "../utils/Team";

const Home = () => {

  return (
    <>
      <Card  />
      <Hero />

    
        <Ourmotto />
        <Team/>
    
      <Carousel />

      <Contact />
    </>
  );
};

export default Home;
