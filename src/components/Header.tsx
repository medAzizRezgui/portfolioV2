import { Button, HStack, Icon, Link, Text } from "@chakra-ui/react";
import {
  TbUserExclamation,
  MdWorkOutline,
  HiOutlineWrench,
  AiOutlineFundProjectionScreen,
} from "react-icons/all";

import file from "../assets/rezgui med aziz CV.pdf";
export default function Header() {
  return (
    <HStack
      w="100%"
      justifyContent={"space-between"}
      position={"fixed"}
      top={"0"}
      left={"0"}
      bg={"themeBg"}
      zIndex={900}
      px={"40px"}
      h="10vh"
      shadow={"md"}
    >
      <Text fontSize={{ sm: "4xl", md: "3xl", lg: "5xl" }}>Rez</Text>

      <HStack
        display={{ base: "none", md: "flex" }}
        spacing={{ sm: "10px", md: "20px", lg: "120px" }}
        w="50%"
        justifyContent={"space-between"}
        fontSize="lg"
      >
        <Link href="#about">
          <HStack>
            <Icon as={TbUserExclamation} color="#4cc9f0" />
            <Text>About </Text>
          </HStack>
        </Link>
        <Link href="#exp">
          <HStack>
            <Icon as={MdWorkOutline} color="#4cc9f0" />
            <Text>Experiences</Text>
          </HStack>
        </Link>

        <Link href="#projects">
          <HStack>
            <Icon as={AiOutlineFundProjectionScreen} color="#4cc9f0" />
            <Text>Projects</Text>
          </HStack>
        </Link>
      </HStack>

      <a href={file} download="Resume" target="_blank">
        <Button
          px="6"
          py="2"
          bg="none"
          border="2px solid #ffd60a"
          _hover={{
            color: "white",
            bg: "themeYellow",
          }}
        >
          Resume
        </Button>
      </a>
    </HStack>
  );
}
