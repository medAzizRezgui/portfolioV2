import React from "react";
import {
  Box,
  Circle,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import me from "../assets/me.png";
import styles from "../theme/customStyles.module.css";
import { BsGithub } from "react-icons/all";
import gif from "../assets/gif.gif";

// @ts-ignore
const MagicCard = ({ profile }) => {
  return (
    <HStack
      w={{ base: "100%", sm: "100%", lg: "100%", xl: "70%", "2xl": "50%" }}
      justifyContent={"center"}
      spacing={"-15px"}
    >
      <VStack w={"70%"} display={{ base: "none", sm: "flex" }}>
        <Box
          borderRadius={"80px 0px 80px 0px"}
          w={"100%"}
          h={"300px"}
          border={"15px solid "}
          transform={"auto"}
          translateY={"60px"}
          borderColor={"themeBg"}
          overflow={"hidden"}
          bgImage={`url('${me}')`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize={"cover"}
          zIndex={10}
        ></Box>
        <Box
          borderRadius={"0px 0px 60px 0px"}
          w={"calc(100% - 30px)"}
          h={"150px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-end"}
          px={2}
          pb={4}
          className={styles.glassBg}
        >
          <Text textAlign={"center"} py={2}>
            Source Code:
          </Text>
          <Link
            href="https://github.com/medAzizRezgui/portfolioV2"
            isExternal={true}
          >
            <HStack
              cursor={"pointer"}
              border={"2px solid "}
              borderColor={"white"}
              w={"60%"}
              mx={"auto"}
              borderRadius={"8px"}
              py={1}
              px={8}
              justifyContent={"center"}
            >
              <Text color={"white"}>Visit</Text>
              <Icon color={"white"} as={BsGithub} />
            </HStack>
          </Link>
        </Box>
      </VStack>
      <VStack w={{ base: "100%", sm: "70%" }}>
        <Box
          bg={"white"}
          borderRadius={{ base: "80px 80px 0px 0px", sm: "0px 80px 0px 0px" }}
          w={"calc(100% - 30px)"}
          transform={"auto"}
          translateY={"80px"}
          h={"260px"}
          overflow={"hidden"}
        >
          <Box w={"100%"} h={"100%"} bg={"themeCyan"}>
            <Box
              w={"100%"}
              h={"100%"}
              bgImage={{
                base: me,
                sm: `url('${"https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80"}')`,
              }}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize={"cover"}
              position={"relative"}
            >
              <Box
                bg={"rgba(0,0,0,0.6)"}
                w={"100%"}
                h={"100%"}
                display={{ base: "none", sm: "block" }}
                position={"absolute"}
              ></Box>
              <VStack
                h={"100%"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                position={"absolute"}
                px={2}
                pt={8}
                display={{ base: "none", sm: "flex" }}
              >
                <Text textAlign={"start"} fontSize={"lg"} fontWeight={"medium"}>
                  +{profile.public_repos} Public Repos
                </Text>
                <Text textAlign={"start"} fontSize={"lg"} fontWeight={"medium"}>
                  +5 Personal Projects
                </Text>
                <Text fontSize={"lg"} fontWeight={"medium"} textAlign={"start"}>
                  +3 Years Of Experience
                </Text>
              </VStack>
            </Box>
          </Box>
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
            borderColor={"white "}
            size={"180px"}
          >
            <Circle
              bg={"white"}
              className={styles.animateWow}
              bgImage={`url('${gif}')`}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize={"contain"}
              zIndex={10}
              size={"160px"}
            ></Circle>
          </Circle>
        </Circle>
      </VStack>
    </HStack>
  );
};

export default MagicCard;
