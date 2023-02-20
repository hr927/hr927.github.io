import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

import { ReactElement } from "react";

export default function Projects() {
  return (
    <Flex
      maxW={"8xl"}
      py={12}
      gap="40px"
      direction={"column"}
      m="auto"
      id="Projects"
      mt="10"
      p={{ base: 5, md: 10 }}
    >
      <Heading fontSize={["2xl", "3xl", "5xl"]} fontWeight="bold" color="white">
        PROJECTS
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        p={2}
        m={2}
        borderRadius={"5px"}
        boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
      >
        <Stack spacing={4} p={3}>
          <Heading
            color="white"
            fontSize={["md", "2xl", "3xl"]}
            fontWeight="semibold"
          >
            Hello Bonsai-Clone
          </Heading>
          <Text
            color={"gray.200"}
            fontSize={["md", "l", "xl"]}
            fontWeight="semibold"
          >
            Hello Bonsai is a competitively priced workflow management solution
            for freelancers and small businesses.It is an all in suite of tools
            with automation that helps you take load of your paperwork.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Stack direction={"row"} align="center" gap="10px">
              <Text
                color={"gray.200"}
                fontSize={["md", "l", "xl"]}
                fontWeight="semibold"
              >
                Tech Stack
              </Text>
              <Image
                alt="Tech Stack"
                src="https://i.postimg.cc/QNWsW-Bnf/html5-logo-31819.png"
                width={"20%"}
                m="auto"
              />
            </Stack>
            <Stack direction={"row"} align="center" gap="10px">
              <a
                href="https://github.com/hr927/next-vest-6513"
                rel="noreferrer"
                target="_blank"
              >
                <Button>Github</Button>
              </a>
              <a
                href="https://singular-sunburst-0e6e8c.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Button>Deployed</Button>
              </a>
            </Stack>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"https://i.postimg.cc/XqW5dM3L/Bonsai.png"}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        p={2}
        m={2}
        borderRadius={"5px"}
        boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"https://i.postimg.cc/ZRfM7hKb/Flair-Clothing.png"}
            objectFit={"cover"}
          />
        </Flex>
        <Stack spacing={4} p={3}>
          <Heading
            color="white"
            fontSize={["md", "2xl", "3xl"]}
            fontWeight="semibold"
          >
            FlairClothing
          </Heading>
          <Text
            color={"gray.200"}
            fontSize={["md", "l", "xl"]}
            fontWeight="semibold"
          >
            FlairClothings is an ecommerce website for love of fashion. Our
            mission is to be the global platform for luxury fashion connecting
            creators, curators and customers
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Stack direction={"row"} align="center" gap="10px">
              <Text
                color={"gray.200"}
                fontSize={["md", "l", "xl"]}
                fontWeight="semibold"
              >
                Tech Stack
              </Text>
              <Image
                alt="Tech Stack"
                src="https://i.postimg.cc/QNWsW-Bnf/html5-logo-31819.png"
                width={"20%"}
                m="auto"
              />
            </Stack>
            <Stack direction={"row"} align="center" gap="10px">
              <a
                href="https://github.com/hr927/-whole-lace-7572"
                rel="noreferrer"
                target="_blank"
              >
                <Button>Github</Button>
              </a>
              <a
                href="https://adorable-llama-753d73.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Button>Deployed</Button>
              </a>
            </Stack>
          </Stack>
        </Stack>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        p={2}
        m={2}
        borderRadius={"5px"}
        boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
      >
        <Stack spacing={4} p={3}>
          <Heading
            color="white"
            fontSize={["md", "2xl", "3xl"]}
            fontWeight="semibold"
          >
            Vision Fitness
          </Heading>
          <Text
            color={"gray.200"}
            fontSize={["md", "l", "xl"]}
            fontWeight="semibold"
          >
            VisionFitness is an online application that help you with
            maintaining good health and fitness. Created to help you live a
            better happier and healthier life
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Stack direction={"row"} align="center" gap="10px">
              <Text
                color={"gray.200"}
                fontSize={["md", "l", "xl"]}
                fontWeight="semibold"
              >
                Tech Stack
              </Text>
              <Image
                alt="Tech Stack"
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                width={"8%"}
                m="auto"
              />
              <Image
                alt="Tech Stack"
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-512.png"
                width={"8%"}
                m="auto"
              />
              <Image
                alt="Tech Stack"
                src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-256.png"
                width={"8%"}
                m="auto"
              />
              <Image
                alt="Tech Stack"
                src="https://img.icons8.com/color/512/chakra-ui.png"
                width={"8%"}
                m="auto"
              />
            </Stack>
            <Stack direction={"row"} align="center" gap="10px">
              <a
                href="https://github.com/hr927/sweltering-time-1373"
                rel="noreferrer"
                target="_blank"
              >
                <Button>Github</Button>
              </a>
              <a
                href="https://vision-fitness.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Button>Deployed</Button>
              </a>
            </Stack>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"https://i.postimg.cc/J7JtZ7T5/Vision.png"}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        p={2}
        m={2}
        borderRadius={"5px"}
        boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://user-images.githubusercontent.com/107456969/213979622-8f03f899-2fa8-46ba-a44e-6f91b0bad386.png"
            }
            objectFit={"cover"}
          />
        </Flex>
        <Stack spacing={4} p={3}>
          <Heading
            color="white"
            fontSize={["md", "2xl", "3xl"]}
            fontWeight="semibold"
          >
            Musafir
          </Heading>
          <Text
            color={"gray.200"}
            fontSize={["md", "l", "xl"]}
            fontWeight="semibold"
          >
            Musafir is a website for tours and travel created with one thought
            that is to empower Indian traveler with instant bookings and
            comprehensive choices.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Stack direction={"row"} align="center" gap="10px">
              <Text
                color={"gray.200"}
                fontSize={["md", "l", "xl"]}
                fontWeight="semibold"
              >
                Tech Stack
              </Text>
              <Image
                alt="Tech Stack"
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                width={"8%"}
                m="auto"
              />
              <Image
                alt="Tech Stack"
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-512.png"
                width={"8%"}
                m="auto"
              />
              <Image
                alt="Tech Stack"
                src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-256.png"
                width={"8%"}
                m="auto"
              />
              <Image
                alt="Tech Stack"
                src="https://img.icons8.com/color/256/material-ui.png "
                width={"8%"}
                m="auto"
              />
            </Stack>
            <Stack direction={"row"} align="center" gap="10px">
              <a
                href="https://github.com/hr927/Musafir-mmt-clone-"
                rel="noreferrer"
                target="_blank"
              >
                <Button>Github</Button>
              </a>
              <a
                href="https://musafir-travel.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Button>Deployed</Button>
              </a>
            </Stack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Flex>
  );
}
