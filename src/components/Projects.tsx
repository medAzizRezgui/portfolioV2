import {
  Box,
  Button,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import social_app from "../assets/proj1.webp";
import proj2 from "../assets/proj2.webp";
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

      <Box border={"2px"} p={8} rounded={"8px"} mx={"auto"} w={"full"}>
        <Heading py={"8px"} fontSize={"3xl"}>
          Social Media App
        </Heading>
        <img src={social_app} alt={"project"} width={"800px"} />
        <Text pt={"20px"}>
          A social media app where you can post text and images, like and
          comment, receive live notifications, and more.
        </Text>
        <Link href={"https://github.com/medAzizRezgui/RootSpace"}>
          <Button bg={"gray"} my={"20px"}>
            Source Code
          </Button>
        </Link>
      </Box>
      <Box border={"2px"} p={8} rounded={"8px"} mx={"auto"} w={"full"}>
        <Heading py={"8px"} fontSize={"3xl"}>
          Spotify Clone
        </Heading>
        <img src={proj2} alt={"project"} width={"800px"} />
        <Text pt={"20px"}>
          A Spotify Clone project for personal learning, It supports uploading
          and streaming music, a fully functional payment system with Stripe,
          and more.
        </Text>
        <Link href={"https://github.com/medAzizRezgui/spotify-clone"}>
          <Button bg={"gray"} my={"20px"}>
            Source Code
          </Button>
        </Link>
      </Box>
      <Heading py={"8px"} fontSize={"3xl"}>
        More Projects are just source code for now, You can check them{" "}
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
