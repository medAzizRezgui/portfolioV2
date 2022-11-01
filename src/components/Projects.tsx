import { Box, Circle, Heading, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import BgImage from "../assets/social.jpg";
import styles from "../theme/customStyles.module.css";
import { InitProfile } from "../utils/types";
export default function Projects() {
  const [profile, setProfile] = useState(InitProfile);
  const [repos, setRepos] = useState({});
  useEffect(() => {
    axios
      .get("https://api.github.com/users/medAzizRezgui")
      .then((r) => setProfile(r.data));

    axios
      .get("https://api.github.com/users/medAzizRezgui/repos")
      .then((r) => setRepos(r.data));
  }, []);

  console.log("repos", repos);
  console.log("profile", profile);
  return (
    <VStack
      id="projects"
      w="50%"
      mx="auto"
      border="2px solid white"
      h="100vh"
      alignItems={"flex-start"}
      justifyContent="flex-start"
    >
      <HStack justifyContent={"space-between"} w="100%" alignItems={"center"}>
        <Heading fontFamily={"Noto Sans Mono"} py="16">
          {" "}
          03 - Projects
        </Heading>
        <Box
          w="50%"
          h="1px"
          bg="gray.100"
          opacity={"0.5"}
          borderRadius={"8px"}
        />
      </HStack>
    </VStack>
  );
}
// <Box
//     w={"40%"}
//     h={"400px"}
//     position={"relative"}
//     className={styles.glassBg}
//     overflow={"hidden"}
// >
//   <VStack>
//     <h1>Aziz</h1>
//   </VStack>
// </Box>
