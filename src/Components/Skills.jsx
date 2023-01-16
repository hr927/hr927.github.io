import {
  Flex,
  Heading,
  SimpleGrid,
  Box,
  Center,
  Stack,
  Image,
} from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  const techs = [
    {
      id: 1,
      title: "HTML",
      url: "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png",
    },
    {
      id: 2,
      title: "CSS",
      url: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
    },
    {
      id: 3,
      title: "JavaScript",
      url: "https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png",
    },
    {
      id: 4,
      title: "React",
      url: "https://i.ibb.co/pvTb0z9/pngwing-com-1.png",
    },
    {
      id: 5,
      title: "Redux",
      url: "https://i.ibb.co/dPFHFDn/pngwing-com.png",
    },
    {
      id: 6,
      title: "NextJS",
      url: "https://i.ibb.co/m8B4F7h/pngwing-com-2.png",
    },
    {
      id: 7,
      title: "Chakra-UI",
      url: "https://img.icons8.com/color/512/chakra-ui.png",
    },
    {
      id: 8,
      title: "Github",
      url: "https://i.ibb.co/pfyhW85/pngwing-com-5.png",
    },
    {
      id: 9,
      title: "npm",
      url: "https://i.ibb.co/jyPf42r/pngwing-com-3.png",
    },
  ];
  return (
    <Flex
      maxW={"8xl"}
      py={12}
      gap="40px"
      direction={"column"}
      m="auto"
      id="Skills"
      mt="10"
    >
      <Heading fontSize={["2xl", "3xl", "5xl"]} fontWeight="bold" color="white">
        SKILLS
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {techs.map((tech) => (
          <Center py={12}>
            <Box
              role={"group"}
              p={6}
              maxW={"280px"}
              w={"full"}
              bg={("transparent", "gray.800")}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Box rounded={"lg"} mt={-12} pos={"relative"} height={"200px"}>
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"fill"}
                  src={tech.url}
                />
              </Box>
              <Stack pt={10} align={"center"}>
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"body"}
                  fontWeight={500}
                  color="white"
                >
                  {tech.title}
                </Heading>
              </Stack>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Skills;
