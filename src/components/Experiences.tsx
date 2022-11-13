import { Box, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

import ExpTabs from "./ExpTabs";
import ExpWorkData from "./ExpWorkData";
import ExpSwiper from "./ExpSwiper";
export default function Experiences() {
  const [tab, setTab] = useState(0);
  return (
    <VStack
      id="exp"
      w={{ base: "90%", md: "90%", lg: "90%", xl: "85%", "2xl": "50%" }}
      mx="auto"
      h="100vh"
      display={{ base: "none", md: "flex" }}
      alignItems="start"
      px="8"
      justifyContent={"center"}
    >
      <HStack justifyContent={"space-between"} w="100%" alignItems={"center"}>
        <Heading
          fontFamily={"Noto Sans Mono"}
          fontSize={{ lg: "2xl", xl: "4xl" }}
          py="16"
        >
          {" "}
          02 - Experiences
        </Heading>
        <Box
          w="50%"
          h="1px"
          bg="gray.100"
          opacity={"0.5"}
          borderRadius={"8px"}
        />
      </HStack>
      <Box w="100%">
        <HStack spacing={"20px"} h="300px" w="100%" alignItems={"self-start"}>
          {/* Exp Tabs */}
          <ExpTabs setTab={setTab} tab={tab} />

          {/* Work Data */}
          <ExpWorkData
            tab={tab}
            id={0}
            location={"addslice"}
            title={"Web Developer"}
            date={"Oct 2022 - May 2023"}
            det1={
              "With a team of highly skilled developers, We maintain and develop new features for the Slice Chrome Extension."
            }
            det2={
              "Collaboration with the team on a daily basis to discuss and review what we are working on!"
            }
            det3={
              "Levraging the power of the new Next Js 13 and tailwind css, Node & Next js for a great product."
            }
          />
          <ExpWorkData
            tab={tab}
            id={1}
            location={"Upwork"}
            title={"Freelance Gig"}
            date={"Oct 2022 - Nov 2022"}
            det1={
              "Joined a team of developers , working on a bunch a products for a series of restaurants"
            }
            det2={
              "I had the honor to work on the Admin dashboard, where all the magic happens."
            }
            det3={
              "Levraging the power of React Js, Firebase, React Query, Chakra Ui, Core UI & Django"
            }
          />
          <ExpWorkData
            tab={tab}
            id={2}
            location={"Vastsky123"}
            title={"Internship"}
            date={"Augest 2022 - Sept 2022"}
            det1={
              "Took all responsibility to design and build a mobile app that handles invoices for clients"
            }
            det2={"I Had great fun learning React Native for a new project!"}
            det3={"Levraging the power of React Native & Firebase"}
          />
          <ExpWorkData
            tab={tab}
            id={3}
            location={"Vastsky123"}
            title={"Internship"}
            date={"July 2021 - Sept 2021"}
            det1={
              "Worked with an other teammates to build a fullstack e-commerce website"
            }
            det2={
              "With a great team everything is possible, This collab was a great experience for me."
            }
            det3={
              "Levraging the power of React Js, Tailwind Css, Redux, Node js, Mongodb & Express Js"
            }
          />
        </HStack>
      </Box>
    </VStack>
  );
}
