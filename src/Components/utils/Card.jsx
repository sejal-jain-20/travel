import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../../assets/try1.png";
import img2 from "../../assets/try2.png";
import img3 from "../../assets/try3.png";
import img4 from "../../assets/try4.png";
import img5 from "../../assets/try5.png";
import img6 from "../../assets/try6.png";
import img7 from "../../assets/try7.png";

const Card = ({  }) => {
  const arr = [
    { image: img1 , description:'Adventure Tour' },
    { image: img2 , description:'Cruise Tour' },
    { image: img3 , description:'Family Tour'},
    { image: img4 , description:'Honeymoon Tour'},
    { image: img5 , description:'Pilgrim Tour'},
    { image: img6 , description:'Safari Tour'},
    { image: img7 , description:'Educational Tour'},
  ];
  return (
    <>
      <Box w={"100%"} py={12}>
        <Heading as="h2" mb={8} textAlign="center"  filter="drop-shadow(0px 0px 0.5rem grey)">
        Tours offered by our company
        </Heading>
        <Flex wrap="wrap" gap={10} align="center" justify="center" mt={"39"}>
          {arr &&
            arr.map((item, index) => (
              <Box
                key={index}
                maxW="xs"
                overflow="hidden"
                rounded={"md"}
                className="text-heading"
                _hover={{
                  boxShadow: "-1px 7px 12px 0px rgba(0,0,0,0.3)",
                }}
                transition="box-shadow 0.3s"
              >
                <Image src={item.image} w={"100%"} />
                <Box px={6} py={4} bgColor={"#F0FFF4"}>
                  <Text
                    className="text-primary"
                    mt={2}
                    fontSize="base"
                    fontWeight="normal"
                    fontFamily="sans-serif"
                  >
                    {item.description}
                  </Text>
                </Box>
                <Box px={4} pt={2} pb={2} borderBottom={"2px solid #C6F6D5"}>
                  <Button w="full" colorScheme="green">
                    Explore
                  </Button>
                </Box>
              </Box>
            ))}
        </Flex>
      </Box>
    </>
  );
};

export default Card;
