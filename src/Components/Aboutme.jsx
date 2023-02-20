import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import resume from "../assets/Himanshu_Rana_Resume.pdf";
const Aboutme = () => {
  return (
    <Box
      width={{ sm: "100%", md: "80%", lg: "70%" }}
      m="auto"
      p="10"
      w="80%"
      pt="90px"
      id="About Me"
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
          <a
            href={resume}
            onClick={() =>
              window.open(
                `https://drive.google.com/file/d/1zg2VwVzGL_brz1-s6C9WiCaXey4tPZ_5/view?usp=sharing`
              )
            }
            download="Himanshu_Rana_Resume"
            rel="noreferrer"
            target="_blank"
          >
            <Button
              bgColor={"gray.300"}
              color="cyan.600"
              mt={5}
              fontSize={"20px"}
            >
              Resume
            </Button>
          </a>
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
