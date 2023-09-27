import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import axios from "axios";
import { InitProfile } from "../utils/types";
import styles from "../theme/customStyles.module.css";
import MagicCard from "./MagicCard";
import GithubProjectCard from "./GithubProjectCard";
import type { IconType } from "react-icons";
import {
  BiGitBranch,
  BsGithub,
  FaReact,
  GiTable,
  SiChakraui,
  SiExpress,
  SiFirebase, SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs, SiPostgresql,
  SiRedux, SiSupabase,
  SiTypescript,
  SiVite,
  SiWebstorm
} from "react-icons/all";
export default function Hero() {
  const [profile, setProfile] = useState(InitProfile);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/medAzizRezgui")
      .then((r) => setProfile(r.data));
  }, []);
  // @ts-ignore

  const data: any[] = [
    {
      text: "React Js",
      icon: FaReact,
      color: "#3db7d7",
      textColor: "white",
    },
    {
      text: "Next Js",
      icon: SiNextdotjs,
      color: "white",
      textColor: "black",
    },
    {
      text: "TypeScript",
      icon: SiTypescript,
      color: "#288ec5",
      textColor: "white",
    },
    {
      text: "Node Js",
      icon: SiNodedotjs,
      color: "#215732",
      textColor: "white",
    },
    {
      text: "Git",
      icon: BiGitBranch,
      color: "#F1502F",
      textColor: "white",
    },
    {
      text: "WebStorm",
      icon: SiWebstorm,
      color: "#85DC9B",
      textColor: "white",
    },
    {
      text: "Vite Js",
      icon: SiVite,
      color: "#A547F2",
      textColor: "white",
    },
    {
      text: "MongoDb",
      icon: SiMongodb,
      color: "#00ED64",
      textColor: "white",
    },
    {
      text: "Github",
      icon: BsGithub,
      color: "white",
      textColor: "black",
    },

    {
      text: "Chakra UI",
      icon: SiChakraui,
      color: "#58C9C8",
      textColor: "white",
    },
    {
      text: "Firebase",
      icon: SiFirebase,
      color: "#F2C129",
      textColor: "white",
    },

    {
      text: "Redux",
      icon: SiRedux,
      color: "#7046B2",
      textColor: "white",
    },
    {
      text: "Express Js",
      icon: SiExpress,
      color: "#303030",
      textColor: "white",
    },
    {
      text: "GraphQl",
      icon:SiGraphql,
      color:"#E535AB",
      textColor: "white",
    },
    {
      text: "Supabase",
      icon:SiSupabase,
      color: "#3ECF8E",
      textColor: "white",
    },
    {
      text: "PostgreSQL",
      icon:SiPostgresql,
      color: "#336791",
      textColor: "white",
    }
  ];
  return (
    <VStack minH={"90vh"} mt={"10vh"} w={"100%"} mx={"auto"}>
      <Stack
        h="100%"
        w={{ base: "75%", lg: "85%", xl: "85%", "2xl": "70%" }}
        mx={"auto"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <VStack
          id="hero"
          w="100%"
          mx="auto"
          alignItems={"flex-start"}
          justifyContent="center"
        >
          <Text fontSize={"lg"} color="gray.400">
            Hi, my name is
          </Text>
          <VStack spacing={"5px"} alignItems={"flex-start"}>
            <Heading
              fontSize={{
                base: "3xl",
                sm: "4xl",
                lg: "4xl",
                xl: "6xl",
                "2xl": "8xl",
              }}
            >
              {" "}
              <Text color="#ffd60a" variant={"span"}>
                Rez
              </Text>
              gui Med Aziz.
            </Heading>
            <Heading
              fontSize={{
                base: "xl",
                sm: "2xl",
                lg: "2xl",
                xl: "4xl",
                "2xl": "6xl",
              }}
              color="gray.400"
              lineHeight={"0.5"}
            >
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
          <Text
            w={{ sm: "100%", md: "80%" }}
            fontSize={{ xl: "md", "2xl": "lg" }}
            py="8"
          >
            I am a Freelance Fullstack Developer & Software Engineering student
            , I build fast and aesthetic web apps while focusing on delivering
            the most value for my clients and teammates and gaining as much
            experience as possible along the way!
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
        <MagicCard profile={profile} />
      </Stack>
      <Box h={"50px"} w={"100%"} />
      <Box
        py={8}
        w={{ sm: "80%", md: "90%", lg: "85%", xl: "85%", "2xl": "70%" }}
        position={"relative"}
      >
        <Box
          w={"100%"}
          px={12}
          py={2}
          className={styles.glassBg}
          borderRadius={"60px 0px 60px 0px"}
          mx={"auto"}
        >
          <Text fontSize={"2xl"} fontWeight={"semibold"} py={6}>
            Tools That I Use :
          </Text>
          <Grid
            py={"20px"}
            templateColumns={{
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(4, 1fr)",
              xl: "repeat(6, 1fr)",
              "2xl": "repeat(8, 1fr)",
            }}
            gap={4}
            w={"100%"}
          >
            {data?.map(
              //  @ts-ignore
              (repo, i) => (
                <GridItem w="100%" className={styles.animatePop}>
                  <HStack
                    bg={repo.color}
                    justifyContent={"center"}
                    py={2}
                    borderRadius={"8px"}
                  >
                    <Text color={repo?.textColor}>{repo.text}</Text>
                    <Icon as={repo.icon} color={repo?.textColor} />
                  </HStack>
                </GridItem>
              )
            )}
          </Grid>
        </Box>
      </Box>
    </VStack>
  );
}
