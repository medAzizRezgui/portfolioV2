import { Button, HStack, Icon, Text } from "@chakra-ui/react";
import {
  TbUserExclamation,
  MdWorkOutline,
  HiOutlineWrench,
  AiOutlineFundProjectionScreen,
} from "react-icons/all";
export default function Header() {
  return (
    <HStack w="100%" justifyContent={"space-between"} h="10vh">
      <Text fontSize={"5xl"}>Logo</Text>

      <HStack
        spacing={"120px"}
        w="50%"
        justifyContent={"space-between"}
        fontSize="lg"
      >
        <HStack>
          <Icon as={TbUserExclamation} color="#4cc9f0" />
          <Text>About </Text>
        </HStack>
        <HStack>
          <Icon as={MdWorkOutline} color="#4cc9f0" />
          <Text>Experiences</Text>
        </HStack>
        <HStack>
          <Icon as={HiOutlineWrench} color="#4cc9f0" />
          <Text>Skills</Text>
        </HStack>
        <HStack>
          <Icon as={AiOutlineFundProjectionScreen} color="#4cc9f0" />
          <Text>Projects</Text>
        </HStack>
      </HStack>
      <Button px="6" py="2" bg="none" border="2px solid #ffd60a">
        Resume
      </Button>
    </HStack>
  );
}
