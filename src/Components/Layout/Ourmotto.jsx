import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BsLuggage } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa6";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { Ri24HoursLine } from "react-icons/ri";
import { MdQuickreply } from "react-icons/md";

const IconWithText = ({ icon, title ,subtitle}) => (
  <Flex direction="column" align="center">
    {icon}
    <Text mt={2} textAlign="center">
      {title}
    </Text>
    <Text mt={.5} textAlign="center">
      {subtitle}
    </Text>
  </Flex>
);

const Ourmotto = () => {
  return (
    <Box
      w={"100%"}
      mt={10}
      px={10}
      py={12}
      boxShadow="0 4px 5px 5px #C6F6D3 "
      rounded="lg"
      backgroundColor={"#F0FFF4"}
    >
      {/* <Heading as="h2" mb={8} textAlign="center">
        Our Motto:
      </Heading> */}
      <Heading
        size={"lg"}
        textAlign={"center"}
        fontWeight={500}
        letterSpacing={3.6}
        color="black"
        filter="drop-shadow(20px 0 0.7rem  green)"
      >
        <q>
          Our mission is to seek excellence in service and to provide quality
          service at a cost that will enable us to remain competitive.
        </q>
      </Heading>
      <Heading
        children="We care every step of the customers with."
        size={"sm"}
        fontWeight={400}
        letterSpacing={3}
        textAlign={"center"}
        mt={5}
        p={2}
      />
      <Box w={"100%"}>
        <Flex wrap="wrap" gap={20} align="center" justify="center" mt={"39"}>
          <IconWithText
            icon={<FaHandshake size={70} color="green" />}
            title="Provision with"
            subtitle={"the best services"}
          />
          <IconWithText
            icon={<BsLuggage size={70} color="green" />}
            title="Well-done"
            subtitle={"travel arrangements"}
          />
          <IconWithText
            icon={<FaHandsHoldingCircle size={70} color="green" />}
            title="Provide"
            subtitle={"Premier Journey experience"}
          />
          <IconWithText
            icon={<Ri24HoursLine size={70} color="green" />}
            title="24/7 Hours"
            subtitle={"customer support"}
          />
          <IconWithText
            icon={<MdQuickreply size={70} color="green" />}
            title="Prompt reply"
            subtitle={"to every situation"}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Ourmotto;
