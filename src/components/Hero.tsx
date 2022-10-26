import { Button, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <VStack
      id="hero"
      w="50%"
      mx="auto"
      h="90vh"
      alignItems={"flex-start"}
      justifyContent="center"
    >
      <Text fontSize={"lg"} color="gray.400">
        Hi, my name is
      </Text>
      <VStack spacing={"5px"} alignItems={"flex-start"}>
        <Heading fontSize={"8xl"}>
          {" "}
          <Text color="#ffd60a" variant={"span"}>
            Rez
          </Text>
          gui Med Aziz.
        </Heading>
        <Heading fontSize={"6xl"} color="gray.400" lineHeight={"0.5"}>
          <TypeAnimation
            sequence={[
              "Fullstack Developer.",
              2000,
              "I Build stuff for the web.", // Types 'One'
              2000, //
              "I Enjoy Learning new things.",
              4000,
              () => {
                console.log("Done typing!"); // Place optional callbacks anywhere in the array
              },
            ]}
            speed={20}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
          />
        </Heading>
      </VStack>
      <Text w="80%" fontSize={"lg"} py="8">
        I am a Freelance Fullstack Developer & Software Engineering student , I
        build fast and aesthetic web apps while focusing on delivering the most
        value for my clients and teammates and gaining as much experience as
        possible along the way!
      </Text>

      <HStack spacing="20px">
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
        <Link
          href="#about"
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
            Explore
          </Button>
        </Link>
      </HStack>
    </VStack>
  );
}
