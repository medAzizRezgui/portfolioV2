import { Box, Heading, HStack } from "@chakra-ui/react";

type Props = {
  index: Number;
};
export default function SwiperDots({ index }: Props) {
  return (
    <HStack pb="20" justifyContent={"space-between"} w={"full"} px={2}>
      <Heading>About</Heading>
      <HStack>
        <Box
          bg={index === 0 ? "gray.400" : "themeCyan"}
          h={"10px"}
          w={index === 0 ? "10px" : "30px"}
          borderRadius={"20px"}
          transition={"all ease-in-out"}
          transitionDuration={"0.4s"}
        />
        <Box
          bg={index === 1 ? "gray.300" : "themeCyan"}
          h={"10px"}
          w={index === 1 ? "10px" : "30px"}
          borderRadius={"20px"}
          transition={"all ease-in-out"}
          transitionDuration={"0.4s"}
        />
        <Box
          bg={index === 2 ? "gray.300" : "themeCyan"}
          h={"10px"}
          w={index === 2 ? "10px" : "30px"}
          borderRadius={"20px"}
          transition={"all ease-in-out"}
          transitionDuration={"0.4s"}
        />
      </HStack>
    </HStack>
  );
}
