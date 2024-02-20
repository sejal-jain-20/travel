import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/p4.jpg";
import { AspectRatio } from "@chakra-ui/react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, settextarea] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Stack spacing={"16"} p={10} py={24} boxShadow="0 4px 18px 10px #C6F6D3 "
    rounded="lg"
    backgroundColor={"#F0FFF4"}>
      <HStack mt={30} display={"flex"} flexDirection={["column", "row"]}>
        <Box w="100%">
          <AspectRatio ratio={16 / 9}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.773926859676!2d77.29053987393917!3d28.636536983901582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcad525a0b45%3A0xa4d350cb07a2e23b!2sPrakhar%20Tour%20And%20Travels%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1708007808966!5m2!1sen!2sin"></iframe>
          </AspectRatio>
        </Box>
        <Box w={"100%"} mt={3}>
          <Heading
            children="Book Your Vacation !"
            size={"lg"}
            textAlign={"center"}
            fontWeight={400}
            letterSpacing={4}
          />
          <VStack h={"full"} justifyContent={"center"} spacing={"16"} mt={"10"}>
            <form onSubmit={submitHandler} style={{ width: "80%" }}>
              <Box my={"4"}>
                <Input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={"Your Name"}
                  type="text"
                  focusBorderColor="green.400"
                />
              </Box>
              <Box my={"4"}>
                <Input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={"Email"}
                  type="email"
                  focusBorderColor="green.400"
                />
              </Box>
              <Box my={"4"}>
                <Textarea
                  required
                  value={textarea}
                  onChange={(e) => settextarea(e.target.value)}
                  placeholder={"Write your query - "}
                  type="textarea"
                  focusBorderColor="green.400"
                />
              </Box>
              <Button my="4" colorScheme="green" type="submit" w={"full"}>
                SUBMIT{" "}
              </Button>
            </form>
          </VStack>
        </Box>
      </HStack>
    </Stack>
  );
};

export default Contact;
