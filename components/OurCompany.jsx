import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box
      maxW="7xl"
      mx={"auto"}
      py={["50px", "100px"]}
      px={{ base: 2, sm: 12, md: 17 }}
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      transition="0.3s linear"
      as={motion.div}
    >
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        pb={10}
        fontWeight={"bold"}
      >
        Onde estamos ?
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Nosso sinal alcança"}
          stat={"+4,000,000 de pessoas"}
        />
        <StatsCard title={"Em"} stat={"26 estados do brasil"} />
        <StatsCard title={"Com"} stat={"+300 filmes e séries"} />
      </SimpleGrid>
    </Box>
  );
}
