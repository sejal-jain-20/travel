import React from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Container maxW="container.lg" py={12}>
      <Heading
        as="h2"
        mb={8}
        textAlign="center"
        filter="drop-shadow(0px 0px 0.5rem grey)"
      >
        About Us
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Box flex="1" mb={{ base: 8, md: 0 }} mr={{ md: 4 }}>
          <Heading as="h3" fontSize="xl" mb={4}>
            Our Story
          </Heading>
          <Text>
            <Heading
              as="h3"
              fontSize="xxl"
              mt="4"
              mb="4"
              letterSpacing={3}
              fontWeight={400}
            >
              Introduction
            </Heading>
            Prakhar Tours and Travels Pvt. Ltd, an IATA-certified company, was
            incorporated in 1999. With over two decades of experience, the
            company is renowned for providing travel-related services to its
            customers. The company also operates a subsidiary named Travel
            Voyagers, serving both corporate clients and direct customers.
            <Heading
              as="h3"
              fontSize="xxl"
              mt="4"
              mb="4"
              letterSpacing={3}
              fontWeight={400}
            >
              Customer Satisfaction Focus
            </Heading>
            From our extensive experience, we've learned that the key to
            satisfied customers and happy vacations is attention to detail and
            quick response. While an off-the-web tour package might suffice, we
            specialize in winning with customized versions. This has positioned
            us as one of the best travel operators, specializing in tailor-made
            corporate, honeymoon, and family holidays. Our clientele includes
            B2B partners, direct clients, and corporates.
          </Text>
        </Box>
        <Box flex="1" ml={{ md: 4 }}>
          <Heading as="h3" fontSize="xl" mb={4}>
            Our Values
          </Heading>
          <Text>
            <Heading
              as="h3"
              fontSize="xxl"
              mt="4"
              mb="4"
              letterSpacing={3}
              fontWeight={400}
            >
              Team Expertise
            </Heading>
            Prakhar Tours and Travels is proud to be backed by a team of
            seasoned professionals, each a master in their respective roles. We
            understand that the success of our business hinges on the expertise
            and dedication of our staff. That's why every team member undergoes
            rigorous training to enhance the overall client experience.
            <Heading
              as="h3"
              fontSize="xxl"
              mt="4"
              mb="4"
              letterSpacing={3}
              fontWeight={400}
            >
              Extensive Experience and Continuous Learning
            </Heading>
            Our trained staff brings years of hands-on experience in the tourism
            industry, blending creativity and comfort seamlessly. This ensures
            that each team member can maximize their abilities to provide
            top-notch services. Our commitment to excellence is further
            emphasized by an unwavering focus on continuous learning. We believe
            in never stopping our quest to improve knowledge and skills, a
            principle that underscores our dedication to making the best of our
            services for our valued clients.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Hero;
