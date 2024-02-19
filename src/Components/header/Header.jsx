import {
  Box,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Spacer,
  Stack,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  HStack,
  Heading,
  Image,
  Text,
  Badge,
  Tooltip,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import logo from "../../assets/LOGO.png";
import bgVideo from "../../assets/bgv.mp4";

const MenuLink = ({ url = "/", title = "Home" }) => (
  <Link to={url}>
    <Button variant={"link"} color="white" fontSize={"lg"}>
      {title}
    </Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
    h={"100vh"}
    w="100%"
    position="relative"
    overflow="hidden"
  >
  <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
    <source src={bgVideo} type="video/mp4" />
  </video>
      <Box h={"10vh"} w={"100%"} p={4}>
        <Stack
          direction={{ base: "row", md: "row" }}
          align={{ base: "center", md: "center" }}
          justify="space-between"
          // boxShadow={"lg"}
          maxW={"100%"}
        >
          {/* Logo on the left side */}
          <Box>
            <Link to={"/"}>
              <Image src={logo} w={80}  mixBlendMode={"multiply"} />
            </Link>
          </Box>

          {/* Menu Links in the middle */}
          <HStack display={{ base: "none", md: "flex" }} spacing={6}>
            <MenuLink url="/explore" title="Popular visited places" />
            <MenuLink url="/explore" title="About us" />
            <MenuLink url="/lendcloth" title="Our motto" />
            <MenuLink url="/lendcloth" title="Our client" />
            <MenuLink url="/lendcloth" title="Contact us" />
          </HStack>

          <Box></Box>

          {/* Responsive Drawer */}

          <Box display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onOpen}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Open Menu"
              color="white"
              ml={4}
            />
          </Box>

          {/* Drawer */}
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody mt={30}>
                <VStack spacing="8">
                  <MenuLink url="/lendcloth" title="Lend Clothes" />
                  <MenuLink url="/explore" title="Explore" />
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Stack>
      </Box>
      {/* <Box
        w={"100%"}
        py={10}
        px={14}
        h={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"left"}
        color={"white"}
      >
        <Heading children="Let's travel world" size={"2xl"} />
      </Box> */}
    </Box>
  );
};

export default Header;
