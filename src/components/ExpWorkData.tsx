import { Box, HStack, Text, Icon, VStack } from "@chakra-ui/react";
import { AiOutlineTool } from "react-icons/ai";
import { BiChevronsRight } from "react-icons/bi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import styles from "../theme/customStyles.module.css";

type Props = {
  tab: number;
  id: number;
};
export default function ExpWorkData({ tab, id }: Props) {
  return (
    <VStack
      className={styles.animatePop}
      w="100%"
      alignItems={"flex-start"}
      display={tab === id ? "flex" : "none"}
    >
      <Text fontSize={"xl"}>
        Frontend Developer{" "}
        <Text color="themeYellow" variant={"span"}>
          @ Vastsky123
        </Text>
      </Text>
      <Text
        color="gray.400"
        fontSize={"sm"}
        lineHeight="0.1"
        fontFamily={"Noto Sans Mono"}
      >
        July 2022 - August 2022
      </Text>

      <VStack px="4" py="8">
        <HStack alignItems={"start"}>
          <Icon as={BiChevronsRight} boxSize="24px" color="themeYellow" />
          <Text fontSize={{ md: "md", lg: "md" }}>
            Write modern, performant, maintainable code for a diverse array of
            client and internal projects
          </Text>
        </HStack>
        <HStack alignItems={"start"}>
          <Icon as={BiChevronsRight} boxSize="24px" color="themeYellow" />
          <Text fontSize={{ md: "md", lg: "md" }}>
            Write modern, performant, maintainable code for a diverse array of
            client and internal projects
          </Text>
        </HStack>
        <HStack alignItems={"start"}>
          <Icon
            as={HiOutlineInformationCircle}
            boxSize="24px"
            color="themeCyan"
          />
          <Text fontSize={{ md: "md", lg: "md" }}>
            Write modern, performant, maintainable code for a diverse array of
            client and internal projects
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
