import { VStack, HStack, Box, Text } from "@chakra-ui/react";
type Props = {
  index: Number;
  title: String;
  content: String;
  id: Number;
};
export default function AboutData({ index, title, id, content }: Props) {
  return (
    <Box
      transition={"all ease-in-out"}
      transitionDuration={"0.4s"}
      position="absolute"
      top="0px"
      w="100%"
      h="100%"
      p="8"
      display={"flex"}
      justifyContent="flex-start"
      alignItems={"center"}
    >
      <VStack alignItems={"flex-start"}>
        <Text
          color="white"
          transition={"all ease-in-out"}
          transitionDuration={"0.4s"}
          fontSize="2xl"
          opacity={index === id ? 1 : 0}
        >
          <Text variant={"span"} color="red">
            {"<"}
          </Text>
          <Text variant={"span"}> {title}</Text>
          <Text variant={"span"} color="red">
            {"/>"}
          </Text>
        </Text>
        <Text
          color="white"
          transition={"all ease-in-out"}
          transitionDuration={"0.4s"}
          opacity={index === id ? 1 : 0}
        >
          {content}
        </Text>
      </VStack>
    </Box>
  );
}
