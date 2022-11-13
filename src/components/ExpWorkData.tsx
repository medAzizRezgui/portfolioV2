import { Box, HStack, Text, Icon, VStack } from "@chakra-ui/react";
import { AiOutlineTool } from "react-icons/ai";
import { BiChevronsRight } from "react-icons/bi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import styles from "../theme/customStyles.module.css";

type Props = {
  tab: number;
  id: number;
  title: string;
  date: string;
  det1: string;
  det2: string;
  det3: string;
  location: string;
};
export default function ExpWorkData({
  tab,
  id,
  det1,
  det2,
  det3,
  date,
  location,
  title,
}: Props) {
  return (
    <VStack
      className={styles.animatePop}
      w="100%"
      alignItems={"flex-start"}
      display={{ base: "none", md: tab === id ? "flex" : "none" }}
    >
      <Text fontSize={"xl"}>
        {title}{" "}
        <Text color="themeYellow" variant={"span"}>
          @ {location}
        </Text>
      </Text>
      <Text
        color="gray.400"
        fontSize={"sm"}
        lineHeight="0.1"
        fontFamily={"Noto Sans Mono"}
      >
        {date}
      </Text>

      <VStack px="4" py="8" alignItems={"start"}>
        <HStack alignItems={"start"} justifyContent={"start"}>
          <Icon as={BiChevronsRight} boxSize="24px" color="themeYellow" />
          <Text textAlign={"start"} fontSize={{ md: "md", lg: "lg" }}>
            {det1}
          </Text>
        </HStack>
        <HStack alignItems={"start"}>
          <Icon as={BiChevronsRight} boxSize="24px" color="themeYellow" />
          <Text textAlign={"start"} fontSize={{ md: "md", lg: "lg" }}>
            {det2}
          </Text>
        </HStack>
        <HStack alignItems={"start"}>
          <Icon
            as={HiOutlineInformationCircle}
            boxSize="24px"
            color="themeCyan"
          />
          <Text fontSize={{ md: "md", lg: "lg" }}>{det3}</Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
