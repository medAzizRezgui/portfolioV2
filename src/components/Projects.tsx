import {
  Box,
  Heading,
  HStack,
  VStack,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import axios from "axios";

import { InitProfile } from "../utils/types";
import GithubProjectCard from "./GithubProjectCard";
export default function Projects() {
  const [perPage, setPerPage] = useState(6);
  const [profile, setProfile] = useState(InitProfile);
  const [repos, setRepos] = useState([]);
  const [colors, setColors] = useState([]);

  const page = 1;
  const [loading, setLoading] = useState(false);

  const hanldePages = () => {
    if (perPage === 6) {
      setPerPage(20);
    } else if (perPage === 20) {
      setPerPage(100);
    } else {
      setPerPage(6);
    }
  };
  useEffect(() => {
    setLoading(true);

    axios
      .get(
        `https://api.github.com/users/medAzizRezgui/repos?per_page=${perPage}&page=${page}&direction=desc&sort=stars`,
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((r) => setRepos(r.data));
    const getLang = async () => {
      await axios
        .get("https://github-lang-deploy.herokuapp.com/")
        .then((r) => setColors(r.data));
    };
    getLang();

    setLoading(false);
  }, [perPage]);
  console.log("Colors", colors);
  console.log("repos", repos);
  console.log("profile", profile);

  return (
    <VStack
      id="projects"
      w="50%"
      mx="auto"
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
      {!loading && colors && (
        <Grid templateColumns="repeat(2, 1fr)" gap={6} w={"100%"}>
          {repos?.map(
            (repo, i) =>
              repo?.language && (
                <GridItem w="100%">
                  <GithubProjectCard
                    key={i}
                    name={repo?.name}
                    stargazers_count={repo?.stargazers_count}
                    html_url={repo?.html_url}
                    language={repo?.language}
                    priv={repo?.private}
                    color={colors[repo?.language]?.color}
                    desc={repo?.description}
                  />
                </GridItem>
              )
          )}
        </Grid>
      )}
      <Button w={"100%"} bg={"blue"} onClick={() => hanldePages()}>
        {perPage >= 6 && perPage < 100 ? "More" : "Less"}
      </Button>
    </VStack>
  );
}
