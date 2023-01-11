import {
  Box,
  chakra,
  Image,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  useClipboard,
  useColorModeValue,
  VStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import axios from "axios";

import React, { useState, useEffect } from "react";

export default function Programs() {
  const [data, setData] = useState([]);
  const [dayT, setDayT] = useState("Seg");
  const [city, setCity] = useState("baixada");
  const [laCity, setLaCity] = useState("Baixada");
  const [elDay, setelDay] = useState("Segunda");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://istv-backend.herokuapp.com/days/type/" + dayT + "/" + city)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, [dayT, setDayT, city, setCity]);

  const handleChange = (teste) => (e) => {
    setDayT(teste);
    if (teste === dayT) {
      setLoading(false);
    } else {
      setLoading(true);
    }

    switch (teste) {
      case "Seg":
        setelDay("Segunda");
        break;

      case "Ter":
        setelDay("Terça");
        break;

      case "Qua":
        setelDay("Quarta");
        break;

      case "Qui":
        setelDay("Quinta");
        break;

      case "Sex":
        setelDay("Sexta");
        break;

      case "Sab":
        setelDay("Sábado");
        break;

      case "Dom":
        setelDay("Domingo");
        break;

      default:
        break;
    }
  };

  const handleChange2 = (teste) => (e) => {
    setCity(teste);
    if (teste === city) {
      setLoading(false);
    } else {
      setLoading(true);
    }

    switch (teste) {
      case "baixada":
        setLaCity("Baixada santista");
        break;

      case "jf":
        setLaCity("Minas Gerais");
        break;

      case "lnorte":
        setLaCity("Litoral norte");
        break;

      case "streaming":
        setLaCity("Nacional");
        break;

      default:
        break;
    }
  };

  return (
    <Flex align="center" justify="center" id="contact">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Programação
            </Heading>
            <Flex position={"sticky"} top="80px">
              <Menu>
                <MenuButton
                  bg="blue.500"
                  as={Button}
                  px="10px"
                  ml="5px"
                  shadow={"sm"}
                >
                  Dia
                </MenuButton>
                <MenuList>
                  <MenuItem>Segunda</MenuItem>
                  <MenuItem>Terça</MenuItem>
                  <MenuItem>Quarta</MenuItem>
                  <MenuItem>Quinta</MenuItem>
                  <MenuItem>Sexta</MenuItem>
                  <MenuItem>Sabádo</MenuItem>
                  <MenuItem>Domingo</MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  bg="blue.500"
                  as={Button}
                  px="10px"
                  ml="5px"
                  shadow={"sm"}
                >
                  Cidade
                </MenuButton>
                <MenuList>
                  <MenuItem>Segunda</MenuItem>
                  <MenuItem>Terça</MenuItem>
                  <MenuItem>Quarta</MenuItem>
                  <MenuItem>Quinta</MenuItem>
                  <MenuItem>Sexta</MenuItem>
                  <MenuItem>Sabádo</MenuItem>
                  <MenuItem>Domingo</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <SimpleGrid columns={[1, 4]} spacing={3}>
              {data.map((eldata, index) => {
                return (
                  <>
                    <Card
                      cardDay={elDay}
                      cardTime={eldata.timeDay}
                      cardTitle={eldata.episodeName}
                      imgLink={
                        "https://istv-backend.herokuapp.com" + eldata.episodeImg
                      }
                    />
                  </>
                );
              })}
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}

export function Card({ cardDay, cardTime, cardTitle, imgLink }) {
  return (
    <Box
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      w={["100%", "220px"]}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
    >
      <Image w="full" h={"100px"} fit="cover" src={imgLink} alt="avatar" />

      <Box py={2} textAlign="center">
        <Heading
          display="block"
          fontSize="sm"
          color="isnBlue"
          _dark={{
            color: "#a2a0f8",
          }}
          fontWeight="bold"
        >
          {cardTitle}
        </Heading>
        <Heading
          display="block"
          fontSize="md"
          my={1}
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
        >
          {cardDay}
        </Heading>
        <Heading
          display="block"
          fontSize="md"
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
        >
          {cardTime}
        </Heading>
      </Box>
    </Box>
  );
}
