import { Box, Heading, HStack, VStack } from "@chakra-ui/react";

export default function Projects() {
  return (
    <VStack
      id="projects"
      w="50%"
      mx="auto"
      border="2px solid white"
      h="100vh"
      alignItems={"flex-start"}
      justifyContent="center"
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
