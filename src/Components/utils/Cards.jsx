import { Box, Flex, Image, Text, Heading } from '@chakra-ui/react';
import React from "react";
// Assuming 'communities' and 'images' are defined somewhere in your component

const Cards = ({arr}) => {
  return (
    <Flex className="communities" wrap="wrap" gap={10} align="center" justify="center">
      {arr && arr.map((item, index) => (
        <Box
          key={index}
          maxW="xs"
          overflow="hidden"
          boxShadow="xs"
          className="text-heading"
        >
          <Image src={item.image}  w="full" />
          <Box px={6} py={4}>
            <Text className="text-primary" mt={2} fontSize="base" fontWeight="normal" fontFamily="sans-serif">
              {item.description}
            </Text>
          </Box>
          <Box px={6} pt={4} pb={2} bg="gray.400">
            <Heading as="h3" size="xl" color="primary" fontFamily="sans-serif" fontWeight="normal">
            {item.description}
            </Heading>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default Cards;
