import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";

export default function Hero() {
  return (
    <VStack
      w="50%"
      mx="auto"
      h="90vh"
      alignItems={"flex-start"}
      justifyContent="center"
    >
      <Text fontSize={"lg"} color="gray.400">
        Hi, my name is
      </Text>
      <VStack spacing={"0px"} alignItems={"flex-start"}>
        <Heading fontSize={"8xl"}>
          {" "}
          <Text color="#ffd60a" variant={"span"}>
            Rez
          </Text>
          gui Med Aziz.
        </Heading>
        <Heading fontSize={"6xl"} color="gray.400" lineHeight={"0.5"}>
          I build stuff for the web.
        </Heading>
      </VStack>
      <Text w="80%" fontSize={"lg"} py="8">
        I am a Freelance Fullstack Developer & Software Engineering student , I
        build fast and aesthetic web apps while focusing on delivering the most
        value for my clients and teammates and gaining as much experience as
        possible along the way!
      </Text>

      <HStack spacing="20px">
        <Button px="6" py="2" bg="none" border="2px solid #ffd60a">
          Contact Me
        </Button>{" "}
        <Button px="6" py="2" bg="none" border="2px solid #ffd60a">
          Explore
        </Button>
      </HStack>
    </VStack>
  );
}
