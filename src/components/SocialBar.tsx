import { Box, Icon, Link, VStack } from "@chakra-ui/react";
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
          <Link href="https://github.com/medAzizRezgui" isExternal>
            <Icon
              as={VscGithubAlt}
              boxSize="24px"
              opacity="0.7"
              transform={"auto"}
              transition="all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s"
              _hover={{
                translateY: "-5px",
                opacity: 1,
                color: "themeCyan",
              }}
              cursor="pointer"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/rezgui-med-aziz" isExternal>
            <Icon
              as={FiLinkedin}
              boxSize="24px"
              opacity="0.7"
              transform={"auto"}
              transition="all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s"
              _hover={{
                translateY: "-5px",
                opacity: 1,
                color: "themeCyan",
              }}
              cursor="pointer"
            />
          </Link>
          <Link href="https://www.facebook.com/Rezguiaziz99/" isExternal>
            <Icon
              as={FiFacebook}
              boxSize="24px"
              opacity="0.7"
              transform={"auto"}
              transition="all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s"
              _hover={{
                translateY: "-5px",
                opacity: 1,
                color: "themeCyan",
              }}
              cursor="pointer"
            />
          </Link>
          <Link href="https://wa.me/+21692222079" isExternal>
            <Icon
              as={BsWhatsapp}
              boxSize="24px"
              opacity="0.7"
              transform={"auto"}
              transition="all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s"
              _hover={{
                translateY: "-5px",
                opacity: 1,
                color: "themeCyan",
              }}
              cursor="pointer"
            />
          </Link>
        </VStack>
        <Box bg="#4cc9f0" borderRadius={"8px 8px 0px 0px "} h="15vh" w="2px" />
      </VStack>
    </Box>
  );
}
