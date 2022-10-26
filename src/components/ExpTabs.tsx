import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

type Props = {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
};
export default function ExpTabs({ tab, setTab }: Props) {
  return (
    <HStack spacing="0">
      <Box h="200px" w="2px" bg="gray.400" position={"relative"}>
        <Box
          bg="themeCyan"
          h="50px"
          w="4px"
          position={"absolute"}
          top="0"
          right="-1px"
          borderRadius={"8px"}
          transform={"auto"}
          transition="transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s"
          zIndex={10}
          translateY={`${tab * 50}px`}
        />
      </Box>
      <VStack h="100%" spacing={"0"}>
        <HStack
          w="150px"
          h="50px"
          onClick={() => setTab(0)}
          cursor="pointer"
          bg={tab === 0 ? "whiteAlpha.200" : "none"}
          justifyContent={"center"}
        >
          <Text color={tab === 0 ? "themeCyan" : "gray.400"}>Freelance</Text>
        </HStack>
        <HStack
          bg={tab === 1 ? "whiteAlpha.200" : "none"}
          justifyContent={"center"}
          w="150px"
          h="50px"
          cursor={"pointer"}
          onClick={() => setTab(1)}
        >
          <Text color={tab === 1 ? "themeCyan" : "gray.400"}>Internship</Text>
        </HStack>
        <HStack
          bg={tab === 2 ? "whiteAlpha.200" : "none"}
          justifyContent={"center"}
          w="150px"
          h="50px"
          cursor={"pointer"}
          onClick={() => setTab(2)}
        >
          <Text color={tab === 2 ? "themeCyan" : "gray.400"}>Internship</Text>
        </HStack>
        <HStack
          cursor={"pointer"}
          bg={tab === 3 ? "whiteAlpha.200" : "none"}
          justifyContent={"center"}
          w="150px"
          h="50px"
          onClick={() => setTab(3)}
        >
          <Text color={tab === 3 ? "themeCyan" : "gray.400"}>Work 4</Text>
        </HStack>
      </VStack>
    </HStack>
  );
}
