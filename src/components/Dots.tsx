import { Circle, HStack } from "@chakra-ui/react";
type Props = {
  index: Number;
};
export default function Dots({ index }: Props) {
  return (
    <HStack w="100%" h="50px" px="4">
      <Circle
        transition={"all ease-in-out"}
        transitionDuration={"0.4s"}
        bg="#ef476f"
        size={index === 0 ? "14px" : "8px"}
      />
      <Circle
        transition={"all ease-in-out"}
        transitionDuration={"0.4s"}
        bg="#ffd166"
        size={index === 1 ? "14px" : "8px"}
      />
      <Circle
        transition={"all ease-in-out"}
        transitionDuration={"0.4s"}
        bg="#06d6a0"
        size={index === 2 ? "14px" : "8px"}
      />
    </HStack>
  );
}
