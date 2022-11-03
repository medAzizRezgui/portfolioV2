import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  BsWhatsapp,
  FiFacebook,
  FiLinkedin,
  SiUpwork,
  VscGithubAlt,
} from "react-icons/all";

const Skills = () => {
  return (
    <VStack
      id="skills"
      w={{ lg: "80%", xl: "50%" }}
      mx="auto"
      alignItems={"center"}
      justifyContent={"center"}
      pb={"120px"}
    >
      <Heading>Get In Touch</Heading>
      <Text textAlign={"center"} fontSize={"lg"} w={"60%"}>
        Email me, or send me a message, whatever suits you!
        <Text>I'll happily reply as soon as possible</Text>
      </Text>
      <HStack spacing="40px" py={"25px"}>
        <Link href="https://github.com/medAzizRezgui" isExternal>
          <Icon
            as={VscGithubAlt}
            boxSize="30px"
            opacity="0.7"
            transform={"auto"}
            transition="all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s"
            _hover={{
              translateY: "-5px",
              opacity: 1,
              color: "themeCyan",
            }}
            cursor="pointer"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/rezgui-med-aziz" isExternal>
          <Icon
            as={FiLinkedin}
            boxSize="30px"
            opacity="0.7"
            transform={"auto"}
            transition="all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s"
            _hover={{
              translateY: "-5px",
              opacity: 1,
              color: "themeCyan",
            }}
            cursor="pointer"
          />
        </Link>
        <Link href="https://www.facebook.com/Rezguiaziz99/" isExternal>
          <Icon
            as={FiFacebook}
            boxSize="30px"
            opacity="0.7"
            transform={"auto"}
            transition="all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s"
            _hover={{
              translateY: "-5px",
              opacity: 1,
              color: "themeCyan",
            }}
            cursor="pointer"
          />
        </Link>
        <Link href="https://wa.me/+21692222079" isExternal>
          <Icon
            as={BsWhatsapp}
            boxSize="30px"
            opacity="0.7"
            transform={"auto"}
            transition="all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s"
            _hover={{
              translateY: "-5px",
              opacity: 1,
              color: "themeCyan",
            }}
            cursor="pointer"
          />
        </Link>
        <Link
          href="https://www.upwork.com/freelancers/~01653fc5f60b0d6589"
          isExternal
        >
          <Icon
            as={SiUpwork}
            boxSize="30px"
            opacity="0.7"
            transform={"auto"}
            transition="all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s"
            _hover={{
              translateY: "-5px",
              opacity: 1,
              color: "themeCyan",
            }}
            cursor="pointer"
          />
        </Link>
      </HStack>
      <Link
        href="mailto:azizrezgui4@gmail.com"
        isExternal
        _hover={{
          textDecoration: "dashed",
        }}
      >
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
          Contact Me
        </Button>{" "}
      </Link>
    </VStack>
  );
};

export default Skills;
