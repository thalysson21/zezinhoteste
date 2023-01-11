import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import React, { useState, useEffect } from "react";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const IsnList = () => {
  const [rssUrl, setRssUrl] = useState(
    "https://isnportal.com.br/mundo/feed/gn"
  );
  const [items, setItems] = useState([]);

  const getRss = async () => {
    const urlRegex =
      /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    if (!urlRegex.test(rssUrl)) {
      return;
    }

    const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);

    const { contents } = await res.json();

    const feed = new window.DOMParser().parseFromString(contents, "text/xml");

    const items = feed.querySelectorAll("item");

    const htmlParser = new DOMParser();

    const elHtmlDoc = htmlParser
      .parseFromString(contents, "text/html")
      .getElementsByClassName("type:primaryImage");

    const feedItems = [...items].map((el, index) => ({
      link: el.querySelector("link").innerHTML,
      title: el.querySelector("title").innerHTML,
      laimg: elHtmlDoc.item(index).getAttribute("src"),
    }));
    setItems(feedItems);
  };

  var fivePost = items.slice(0, 3);

  useEffect(() => {
    getRss();
  }, []);
  return (
    <Container maxW={"7xl"} py={["50px", "200px"]}>
      <Box
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition="0.3s linear"
        as={motion.div}
      >
        <Heading
          fontSize={{
            base: "4xl",
            md: "5xl",
          }}
          textAlign={"center"}
        >
          Portal ISN
        </Heading>
        <Wrap spacing="30px" marginTop="10">
          {fivePost.map((post, index) => (
            <WrapItem
              key={index}
              width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}
            >
              <Link href={post.link}>
                <Box w="100%">
                  <Box borderRadius="lg" overflow="hidden">
                    <Link
                      textDecoration="none"
                      _hover={{ textDecoration: "none" }}
                    >
                      <Image
                        transform="scale(1.0)"
                        src={post.laimg}
                        alt="some text"
                        objectFit="contain"
                        width="100%"
                        transition="0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                        }}
                      />
                    </Link>
                  </Box>
                  <Heading textAlign={"center"} fontSize="xl" marginTop="4">
                    {post.title}
                  </Heading>
                </Box>
              </Link>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Container>
  );
};

export default IsnList;
