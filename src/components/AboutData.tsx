import { VStack, HStack, Box, Text, SlideFade } from "@chakra-ui/react";
type Props = {
  index: Number;
  title: String;
  content: String;
  id: Number;
};
import styles from "../theme/customStyles.module.css";
export default function AboutData({ index, title, id, content }: Props) {
  return (
    <Box
      position="absolute"
      top="0px"
      w="100%"
      h="100%"
      p="8"
      display={index === id ? "flex" : "none"}
      justifyContent="flex-start"
      alignItems={"center"}
      className={styles.animateSlideDown}
    >
      <VStack alignItems={"flex-start"}>
        <Text
          color="white"
          transition={"all ease-in-out"}
          transitionDuration={"0.4s"}
          fontSize="2xl"
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
          fontSize={{ base: "sm", lg: "md", xl: "lg" }}
          lineHeight={{ base: "1.6", md: "1.8" }}
          transition={"all ease-in-out"}
          transitionDuration={"0.4s"}
        >
          {content}
        </Text>
      </VStack>
    </Box>
  );
}
