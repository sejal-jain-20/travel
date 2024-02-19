import React, { useState, useEffect } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import img1 from "../../assets/L1.png";
import img2 from "../../assets/L2.png";
import img3 from "../../assets/L3.jpg";
import img4 from "../../assets/L4.png";
import img5 from "../../assets/L5.png";
import img6 from "../../assets/L6.png";
import img7 from "../../assets/L7.png";
import img8 from "../../assets/L8.png";
import bg from "../../assets/bg1.png";
import { Box, Heading } from "@chakra-ui/react";

const Carousel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const images = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
    { image: img7 },
    { image: img8 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Auto-increment the activeSlideIndex
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the duration as needed

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      px={14}
      position="relative"
      py={24}
      backgroundImage={bg}
      backgroundSize="contain"
      backgroundRepeat="repeat"
      backgroundPosition="lower"
      w={"100%"}
      boxShadow="lg"
      rounded="xl"
    >
      <Heading
        as="h2"
        mb={8}
        textAlign="center"
        fontWeight={700}
        letterSpacing={3}
        filter="drop-shadow(0px 0px 0.2rem grey)"
      >
        Our Client
      </Heading>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={5}
        itemsToScroll={1}
        responsiveProps={[
          {
            itemsToShow: 5,
            itemsToScroll: 1,
            minWidth: "100%",
          },
        ]}
        speed={400}
        centerMode
      >
        {images.map((ele, idx) => (
          <div
            className="carousel-images"
            key={idx}
            style={{
              width: 250,
              height: 70,
              backgroundImage: `url(${ele.image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // border: "1px solid",
            }}
          ></div>
        ))}
      </ReactSimplyCarousel>
    </Box>
  );
};

export default Carousel;
