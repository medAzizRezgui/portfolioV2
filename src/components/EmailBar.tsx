import { Box, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { IoMailOutline } from "react-icons/all";
export default function EmailBar() {
  return (
    <Box position={"fixed"} bottom="0" right={"2rem"}>
      <VStack spacing="230px" alignItems={"flex-end"}>
        <a href="mailto:azizrezgui4@gmail.com" target="_blank">
          <HStack
            transform={"auto"}
            transition="all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s"
            _hover={{
              translateY: "-5px",
              opacity: 1,
              color: "themeCyan",
            }}
            cursor="pointer"
            opacity="0.7"
            justifyContent="space-between"
            rotate={90}
            w="5px"
            spacing="15px"
          >
            <Text fontSize={"lg"}>azizrezgui4@gmail.com</Text>
            <Icon as={IoMailOutline} boxSize="24px" />
          </HStack>
        </a>
        <Box bg="#4cc9f0" borderRadius={"8px 8px 0px 0px "} h="15vh" w="2px" />
      </VStack>
    </Box>
  );
}
