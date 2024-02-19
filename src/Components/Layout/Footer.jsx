import React from 'react'
import { Box, Flex, Text,  } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" p={4} bg="gray.800" color="white">
    <Flex
      maxW="1200px"
      mx="auto"
      justify="space-between"
      align="center"
      flexWrap="wrap"
    >
      <Box flexBasis={{ base: "100%", md: "25%" }}>
        <Text fontSize="lg" fontWeight="bold">
          Column 1
        </Text>
        {/* Add your content for the first column */}
      </Box>

      <Box flexBasis={{ base: "100%", md: "25%" }}>
        <Text fontSize="lg" fontWeight="bold">
          Column 2
        </Text>
        {/* Add your content for the second column */}
      </Box>

      <Box flexBasis={{ base: "100%", md: "25%" }}>
        <Text fontSize="lg" fontWeight="bold">
          Column 3
        </Text>
        {/* Add your content for the third column */}
      </Box>

      <Box flexBasis={{ base: "100%", md: "25%" }}>
        <Text fontSize="lg" fontWeight="bold">
          Column 4
        </Text>
        {/* Add your content for the fourth column */}
      </Box>
    </Flex>
  </Box>
  )
}

export default Footer

