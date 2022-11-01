import {
  Box,
  Button,
  Circle,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import axios from "axios";
import { InitProfile } from "../utils/types";
import me from "../assets/me.jpeg";
import gif from "../assets/gif.gif";
import styles from "../theme/customStyles.module.css";
import { BsGithub } from "react-icons/all";
import MagicCard from "./MagicCard";
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
      <MagicCard profile={profile} />
    </HStack>
  );
}
