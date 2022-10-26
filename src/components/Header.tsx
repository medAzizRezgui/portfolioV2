import { Button, HStack, Icon, Link, Text } from "@chakra-ui/react";
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
        <Link href="#about">
          <HStack>
            <Icon as={TbUserExclamation} color="#4cc9f0" />
            <Text>About </Text>
          </HStack>
        </Link>
        <Link href="#exp">
          <HStack>
            <Icon as={MdWorkOutline} color="#4cc9f0" />
            <Text>Experiences</Text>
          </HStack>
        </Link>
        <HStack>
          <Icon as={HiOutlineWrench} color="#4cc9f0" />
          <Text>Skills</Text>
        </HStack>
        <Link href="#projects">
          <HStack>
            <Icon as={AiOutlineFundProjectionScreen} color="#4cc9f0" />
            <Text>Projects</Text>
          </HStack>
        </Link>
      </HStack>
      <Button
        px="6"
        py="2"
        bg="none"
        border="2px solid #ffd60a"
        _hover={{
          color: "white",
          bg: "themeYellow",
        }}
      >
        Resume
      </Button>
    </HStack>
  );
}
