import { ChevronDownIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Button,
  Spacer,
  useColorModeValue,
  Heading,
  Image,
  HStack,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import Link from "next/link";
import React from "react";

export default function NavLinks() {
  return (
    <>
      <Box
        boxShadow="md"
        as="nav"
        w="100%"
        bg="isnBlue"
        css={{ backdropFilter: "blur(10px)" }}
        zIndex={999}
      >
        <Flex
          minWidth="max-content"
          px={[4, 8]}
          py={2}
          alignItems="center"
          gap="2"
        >
          <Spacer />
          <HStack spacing={"20px"} textAlign="center">
            <Box>
              <Link href="https://isnportal.com.br/">
                <Image src="/logo.png" height="38px" width="52px" />
              </Link>
            </Box>
            <Box>
              <Link href="https://istvplay.com.br/">
                <Image src="/istvplay.png" height="19px" width="95px" />
              </Link>
            </Box>

            <Box>
              <Link href="https://www.radioonfm.com.br/">
                <Image src="/onfmwhite.png" height="35px" width="38px" />
              </Link>
            </Box>
          </HStack>
          <Spacer />
        </Flex>
      </Box>
    </>
  );
}
