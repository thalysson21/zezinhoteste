import { ChevronDownIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Button,
  Spacer,
  useColorModeValue,
  Heading,
  Image,
  chakra,
  HStack,
  Show,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <Box
        boxShadow="md"
        position="sticky"
        top={0}
        as="nav"
        w="100%"
        bg={useColorModeValue("#ffffff", "#202023")}
        css={{ backdropFilter: "blur(10px)" }}
        zIndex={999}
        px={["5px", "10px", "20px", "40px"]}
      >
        <Flex
          minWidth="max-content"
          px={[4, 8]}
          py={3}
          alignItems="center"
          gap="2"
        >
          <Link href="/">
            <Box className="click">
              <Image src="/logoistv.png" height="45px" width="48px" />
            </Box>
          </Link>
          <Spacer />

          <Show above="1000px">
            <HStack spacing="20px">
              <Link href="/">
                <Button variant="ghost">Início</Button>
              </Link>

              <Link href="/#isn">
                <Button variant="ghost">Notícias</Button>
              </Link>

              <Link href="/#contato">
                <Button variant="ghost">Contato</Button>
              </Link>

              <Link href="/#aovivo">
                <Button variant="ghost" color="red.400">
                  Ao Vivo
                </Button>
              </Link>
            </HStack>
          </Show>
          <Spacer />

          <Box>
            <ThemeToggleButton />
            <Show below="1000px">
              <Menu>
                <MenuButton as={Button} px="10px" ml="5px">
                  <HamburgerIcon w={4} h={4} />
                </MenuButton>
                <MenuList>
                  <Link href="/">
                    <MenuItem>Início</MenuItem>
                  </Link>
                  <Link href="/#isn">
                    <MenuItem>Notícias</MenuItem>
                  </Link>
                  <Link href="/#contato">
                    <MenuItem>Contato</MenuItem>
                  </Link>
                  <Link href="/#aovivo">
                    <MenuItem>Ao Vivo</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Show>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
