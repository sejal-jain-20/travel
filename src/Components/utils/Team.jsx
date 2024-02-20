import React from "react";
import img from "../../assets/Pic1.png";
import img1 from "../../assets/Pic2.png";
import img2 from "../../assets/Pic3.png";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const ImgWithText = ({ icon, title, subtitle }) => (
  <Flex direction="column" align="center">
    <Image
      src={icon}
      minW={"10vh"}
      maxW={"35vh"}
      objectFit={"contain"}
      mb={5}
    />

    <Text mt={2} textAlign="center" fontSize={"md"}>
      {subtitle}
    </Text>
    <Text mt={2} textAlign="center" fontSize={"xs"}>
      {title}
    </Text>
  </Flex>
);

const Team = () => {
  return (
    <Box
      w={"100%"}
      px={10}
      py={12}
      boxShadow="0 4px 5px 5px #C6F6D3 "
      rounded="lg"
      backgroundColor={"#FFF"}
    >
      <Heading
        size={"lg"}
        textAlign={"center"}
        fontWeight={500}
        letterSpacing={3.6}
        color="black"
        filter="drop-shadow(20px 0 0.7rem  grey)"
      >
        Our Team
      </Heading>
      <Heading
        children="We are a team of 15 travel professionals who are qualified to hand craft travel 
        solutions to the clients as per their preferences."
        size={"sm"}
        fontWeight={400}
        letterSpacing={3}
        textAlign={"center"}
        mt={5}
        p={2}
      />
      <Box w={"100%"}>
        <Flex wrap="wrap" gap={20} align="center" justify="center" mt={"39"}>
          <ImgWithText
            icon={img}
            title="Founder & Director"
            subtitle="Manoj Kumar Jain"
          />
          <ImgWithText icon={img2} title="Director" subtitle={"Prakhar Jain"} />
          <ImgWithText icon={img1} title="Director" subtitle={"Sanjeep Jain"} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Team;
