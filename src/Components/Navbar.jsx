import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import resume from "../assets/Himanshu_Rana_Resume.pdf";

const Links = ["Home", "About Me", "Skills", "Projects", "Contact"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    color={"cyan.400"}
    href={"#"}
    scr
  >
    {children}
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClickScroll = (id) => {
    if (id === "Home") {
      const element = document.getElementById("About Me");
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.900", "gray.900")}
        px={4}
        pos={"fixed"}
        w="100%"
        zIndex={2}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box color={"cyan.400"} fontSize="20px">
            Himanshu Rana
          </Box>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Button
                  bgColor={"transparent"}
                  color="cyan.400"
                  onClick={() => handleClickScroll(link)}
                  fontSize="20px"
                  key={link}
                >
                  {link}
                </Button>
              ))}

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
                  bgColor={"transparent"}
                  color="cyan.400"
                  fontSize="20px"
                >
                  Resume
                </Button>
              </a>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Button
                  bgColor={"transparent"}
                  color="cyan.400"
                  onClick={() => handleClickScroll(link)}
                  key={link}
                >
                  {link}
                </Button>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
