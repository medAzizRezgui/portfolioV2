import {
  Box,
  Button,
  Circle,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import axios from "axios";
import { InitProfile } from "../utils/types";

import styles from "../theme/customStyles.module.css";
export default function Hero() {
  const [profile, setProfile] = useState(InitProfile);
  const [cont, setCont] = useState({});

  async function getContributions(token: String, username: String) {
    const headers = {
      Authorization: `bearer ${token}`,
    };
    const body = {
      query: `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`,
    };
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    });
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    getContributions(
      "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",
      "medAzizRezgui"
    ).then((r) => setCont(r.data.user));
  }, []);
  console.log(cont);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/medAzizRezgui")
      .then((r) => setProfile(r.data));
  }, []);
  // @ts-ignore
  return (
    <HStack h="90vh" w={"70%"} mx={"auto"} alignItems={"center"}>
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
          I am a Freelance Fullstack Developer & Software Engineering student ,
          I build fast and aesthetic web apps while focusing on delivering the
          most value for my clients and teammates and gaining as much experience
          as possible along the way!
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
      <HStack w={"50%"} justifyContent={"center"} spacing={"-15px"}>
        <VStack w={"50%"}>
          <Box
            borderRadius={"80px 0px 80px 0px"}
            w={"100%"}
            h={"300px"}
            border={"15px solid "}
            transform={"auto"}
            translateY={"60px"}
            borderColor={"themeBg"}
            overflow={"hidden"}
          >
            <Box
              w={"100%"}
              h={"100%"}
              bgImage={`url('${"https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}')`}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize={"cover"}
              position={"relative"}
            >
              <Box
                bg={"rgba(0,0,0,0.6)"}
                w={"100%"}
                h={"100%"}
                position={"absolute"}
              ></Box>
              <VStack
                h={"100%"}
                justifyContent={"center"}
                position={"absolute"}
                px={2}
                py={6}
              >
                <Text>+{profile.public_repos} Public Repos</Text>
                <Text>+10 Personal Projects</Text>
                <Text textAlign={"center"}>+3 Years Of Experience</Text>
                <Text textAlign={"center"}>
                  This Year Contributions :
                  {
                    cont?.contributionsCollection?.contributionCalendar
                      ?.totalContributions
                  }
                </Text>
              </VStack>
            </Box>
          </Box>
          <Box
            bg={"white"}
            borderRadius={"0px 0px 60px 0px"}
            w={"calc(100% - 30px)"}
            h={"150px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
          ></Box>
        </VStack>
        <VStack w={"50%"}>
          <Box
            bg={"white"}
            borderRadius={"0px 80px 0px 0px"}
            w={"calc(100% - 30px)"}
            transform={"auto"}
            translateY={"80px"}
            h={"260px"}
            overflow={"hidden"}
          >
            <Box
              w={"100%"}
              h={"100%"}
              bgImage={`url('${"https://images.unsplash.com/photo-1666978460851-2ecda573e389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}')`}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize={"cover"}
            ></Box>
          </Box>
          <Circle
            bg={"themeBg"}
            zIndex={10}
            border={"14px solid "}
            borderColor={"themeBg"}
            size={"200px"}
          >
            <Circle
              zIndex={10}
              border={"2px solid "}
              borderColor={"themeCyan "}
              size={"180px"}
            >
              <Circle
                bg={"white"}
                bgImage={`url('${profile.avatar_url}')`}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize={"cover"}
                zIndex={10}
                size={"160px"}
              ></Circle>
            </Circle>
          </Circle>
        </VStack>
      </HStack>
    </HStack>
  );
}
