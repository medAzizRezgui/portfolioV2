import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Spinner,
  VStack,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

import axios from "axios";
import styles from "../theme/customStyles.module.css";
import { InitProfile } from "../utils/types";
import GithubProjectCard from "./GithubProjectCard";
import { useQuery } from "@tanstack/react-query";
// import { Octokit } from "@octokit/rest";
export default function Projects() {
  const [perPage, setPerPage] = useState(4);
  const [profile, setProfile] = useState(InitProfile);
  const [repos, setRepos] = useState([]);
  const [colors, setColors] = useState([]);

  const page = 1;
  const [loading, setLoading] = useState(false);

  const hanldePages = async () => {
    if (perPage === 4) {
      await setPerPage(20);
      await reposQuery.refetch();
    } else if (perPage === 20) {
      await setPerPage(100);
      await reposQuery.refetch();
    } else {
      await setPerPage(4);
      await reposQuery.refetch();
    }
  };
  const reposQuery = useQuery({
    queryKey: ["repos"],
    queryFn: () => {
      return axios
        .get(
          `https://api.github.com/users/medAzizRezgui/repos?per_page=${perPage}&page=${page}&direction=desc&sort=updated`,
          {
            headers: {
              Authorization: `token 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`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => response.data);
    },
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.github.com/users/medAzizRezgui", {})
      .then((r) => setProfile(r.data));

    const getLang = async () => {
      await axios
        .get("https://github-lang-deploy.herokuapp.com/")
        .then((r) => setColors(r.data));
    };
    getLang();

    setLoading(false);
  }, [perPage]);

  // @ts-ignore
  // @ts-ignore
  return (
    <VStack
      id="projects"
      w={{ sm: "80%", md: "90%", lg: "90%", xl: "85%", "2xl": "50%" }}
      mx="auto"
      alignItems={"flex-start"}
      mb={"200px"}
      pt={"10vh"}
    >
      <HStack justifyContent={"space-between"} w="100%" alignItems={"center"}>
        <Heading
          fontFamily={"Noto Sans Mono"}
          fontSize={{ sm: "xl", lg: "2xl", xl: "4xl" }}
          py="16"
        >
          {" "}
          03 - Open Source Projects
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
        <Grid
          pb={"40px"}
          templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
          gap={4}
          w={"100%"}
        >
          {reposQuery.data?.map(
            //  @ts-ignore
            (repo, i) => (
              <GridItem w="100%" className={styles.animatePop}>
                <GithubProjectCard
                  key={i}
                  name={repo?.name}
                  stargazers_count={repo?.stargazers_count}
                  html_url={repo?.html_url}
                  language={repo?.language}
                  priv={repo?.private}
                  //  @ts-ignore
                  color={colors[repo?.language]?.color}
                  desc={repo?.description}
                />
              </GridItem>
            )
          )}
        </Grid>
      )}

      {reposQuery.isLoading || reposQuery.isRefetching ? (
        <Button w={"100%"} bg={"blue"} onClick={() => hanldePages()}>
          <Spinner />
        </Button>
      ) : (
        <Button w={"100%"} bg={"blue"} onClick={() => hanldePages()}>
          {!(reposQuery.isLoading || reposQuery.isRefetching) &&
          perPage >= 4 &&
          perPage < 100
            ? "More"
            : "Less"}
        </Button>
      )}
    </VStack>
  );
}
