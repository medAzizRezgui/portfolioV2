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
import { FiStar } from "react-icons/all";
type Props = {
  name: string;
  priv: boolean;
  html_url: string;
  language: string;
  stargazers_count: number;
  color: string;
  desc: string;
};
const GithubProjectCard = ({
  language,
  priv,
  stargazers_count,
  html_url,
  color,
  desc,
  name,
}: Props) => {
  return (
    <Box
      w={"100%"}
      border={"1px solid white"}
      borderRadius={"8px"}
      px={6}
      h={"160px"}
    >
      <VStack
        py={6}
        w={"100%"}
        alignItems={"flex-start"}
        h={"100%"}
        justifyContent={"space-between"}
      >
        <Link w={"100%"} cursor={"pointer"} href={html_url}>
          <HStack w={"100%"} justifyContent={"space-between"}>
            <Text
              color={"themeCyan"}
              fontSize={"xl"}
              fontWeight={"semibold"}
              letterSpacing={"1px"}
            >
              {name}
            </Text>
            <Text
              px={2}
              py={"2px"}
              borderRadius={"40px"}
              fontSize={"xs"}
              border={"1px solid "}
              borderColor={"gray.200"}
            >
              {priv ? "Private" : "Public"}
            </Text>
          </HStack>
        </Link>
        <Text textAlign={"start"} fontSize={{ md: "sm", lg: "md" }}>
          {desc
            ? desc
            : "                                                                                                                                                                                     "}
        </Text>
        <HStack w={"100%"} alignItems={"center"} spacing={"15px"}>
          <HStack>
            <Circle size={"10px"} bg={color} />
            <Text>{language}</Text>
          </HStack>
          <HStack alignItems={"center"}>
            <Icon as={FiStar} boxSize={"15px"} />
            <Text>{stargazers_count?.toString()}</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default GithubProjectCard;
