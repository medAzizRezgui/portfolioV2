import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { MdNavigateNext } from "react-icons/all";

type Props = {
  title: String;
};
export default function SlideButton({ title }: Props) {
  return (
    <Box w="100%" mx="auto" borderRadius="8px" bg="blue">
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
