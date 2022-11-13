import { Box, Heading, HStack, Link, VStack } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

export default function Projects() {
  return (
    <VStack
      id="projects"
      w={{ sm: "80%", md: "90%", lg: "90%", xl: "85%", "2xl": "50%" }}
      mx="auto"
      alignItems={"flex-start"}
      mb={"200px"}
      pt={"10vh"}
    >
      {/* Heading */}
      <HStack
        justifyContent={"space-between"}
        w="100%"
        mb={"50px"}
        alignItems={"center"}
      >
        <Heading
          fontFamily={"Noto Sans Mono"}
          fontSize={{ sm: "2xl", lg: "3xl", xl: "4xl" }}
        >
          {" "}
          03 - Projects
        </Heading>
        <Box
          w={{ base: "40%", sm: "40%", lg: "20%", xl: "40%" }}
          h="1px"
          bg="gray.100"
          opacity={"0.5"}
          borderRadius={"8px"}
        />
      </HStack>

      <Heading py={"8px"} fontSize={"3xl"}>
        Projects are just source code for now, You can check them{" "}
        <Link
          borderBottom={"2px solid white"}
          href="https://github.com/medAzizRezgui"
        >
          here.
        </Link>
      </Heading>
      <Heading py={"8px"} fontSize={"3xl"}>
        <TypeAnimation
          sequence={[
            "Some projects will be hosted",
            2000,
            "Some projects will be hosted & published", // Types 'One'
            2000, //
            "Some projects will be hosted & published soon...", // Types 'One'
            2000, //
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
  );
}
