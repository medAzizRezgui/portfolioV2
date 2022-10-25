import { Box, Icon, VStack } from "@chakra-ui/react";
import {
  VscGithubAlt,
  FiLinkedin,
  FiFacebook,
  BsWhatsapp,
} from "react-icons/all";
export default function SocialBar() {
  return (
    <Box position={"fixed"} bottom="0" left={"2rem"}>
      <VStack spacing="20px">
        <VStack spacing="40px">
          <Icon as={VscGithubAlt} boxSize="24px" opacity="0.7" />
          <Icon as={FiLinkedin} boxSize="24px" opacity="0.7" />
          <Icon as={FiFacebook} boxSize="24px" opacity="0.7" />
          <Icon as={BsWhatsapp} boxSize="24px" opacity="0.7" />
        </VStack>
        <Box bg="#4cc9f0" borderRadius={"8px 8px 0px 0px "} h="15vh" w="2px" />
      </VStack>
    </Box>
  );
}
