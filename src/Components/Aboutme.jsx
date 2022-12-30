import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Aboutme = () => {
  return (
    <Box
      width={{ sm: "100%", md: "80%", lg: "70%" }}
      m="auto"
      p="10"
      w="80%"
      pt="90px"
    >
      <Flex
        align="center"
        flexDirection={["column", "column", "row"]}
        maxW={"8xl"}
      >
        <Box textAlign={"start"} w="80%">
          <Text
            color="white"
            fontSize={["md", "2xl", "3xl"]}
            fontWeight="semibold"
          >
            Hi, I am
          </Text>
          <Text
            fontSize={["2xl", "3xl", "5xl"]}
            fontWeight="bold"
            bgGradient="linear(to-r,cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Himanshu Rana
          </Text>
          <Text
            color={"gray.200"}
            fontSize={["md", "l", "l"]}
            fontWeight="semibold"
          >
            Aspiring Full Stack Developer. Capable of writing production-ready
            code using React, HTML, CSS for the front end and JS for the back
            end. Always up for a challenge, interested in learning new languages
            and frameworks.
          </Text>
        </Box>
        <Image
          src='https://avatars.githubusercontent.com/u/64404614?v=4"'
          rounded="full"
          boxSize={["200px", "200px", "300px"]}
          ml="50px"
        />
      </Flex>
    </Box>
  );
};

export default Aboutme;
