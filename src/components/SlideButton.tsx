import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { MdNavigateNext } from "react-icons/all";

type Props = {
  title: String;
};
export default function SlideButton({ title }: Props) {
  return (
    <Box w="90%" mx="auto" borderRadius="8px" bg="themeCyan" px="4">
      <HStack
        spacing={"10px"}
        w="100%"
        h="55px"
        alignItems={"center"}
        justifyContent="center"
      >
        <Text py="4" fontSize={"lg"} fontWeight="semibold" align={"center"}>
          {title}{" "}
        </Text>
        <Icon as={MdNavigateNext} color="whiteAlpha.900" boxSize={"26px"} />
      </HStack>
    </Box>
  );
}
