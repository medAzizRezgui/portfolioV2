import { Box, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

import ExpTabs from "./ExpTabs";
import ExpWorkData from "./ExpWorkData";
import ExpSwiper from "./ExpSwiper";
export default function Experiences() {
  const [tab, setTab] = useState(0);
  return (
    <VStack
      id="exp"
      w={{ base: "90%", md: "90%", lg: "90%", xl: "85%", "2xl": "50%" }}
      mx="auto"
      h="100vh"
      display={{ base: "none", md: "flex" }}
      alignItems="start"
      px="8"
      justifyContent={"center"}
    >
      <HStack justifyContent={"space-between"} w="100%" alignItems={"center"}>
        <Heading
          fontFamily={"Noto Sans Mono"}
          fontSize={{ lg: "2xl", xl: "4xl" }}
          py="16"
        >
          {" "}
          02 - Experiences
        </Heading>
        <Box
          w="50%"
          h="1px"
          bg="gray.100"
          opacity={"0.5"}
          borderRadius={"8px"}
        />
      </HStack>
      <Box w="100%">
        <HStack spacing={"20px"} h="300px" w="100%" alignItems={"self-start"}>
          {/* Exp Tabs */}
          <ExpTabs setTab={setTab} tab={tab} />

          {/* Work Data */}
          <ExpWorkData tab={tab} id={0} />
          <ExpWorkData tab={tab} id={1} />
          <ExpWorkData tab={tab} id={2} />
        </HStack>
      </Box>
    </VStack>
  );
}
