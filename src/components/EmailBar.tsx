import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { IoMailOutline } from "react-icons/all";
export default function EmailBar() {
  return (
    <Box position={"fixed"} bottom="0" right={"2rem"}>
      <VStack spacing="230px" alignItems={"flex-end"}>
        <HStack
          opacity="0.7"
          justifyContent="space-between"
          transform={"auto"}
          rotate={90}
          w="5px"
          spacing="15px"
        >
          <Text fontSize={"lg"}>azizrezgui4@gmail.com</Text>
          <Icon as={IoMailOutline} boxSize="24px" />
        </HStack>
        <Box bg="#4cc9f0" borderRadius={"8px 8px 0px 0px "} h="15vh" w="2px" />
      </VStack>
    </Box>
  );
}
