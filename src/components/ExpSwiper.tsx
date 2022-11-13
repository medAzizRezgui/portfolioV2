import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import "swiper/css";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";

import ExpSwiperData from "./ExpSwiperData";
const ExpSwiper = () => {
  const tab = 4;
  return (
    <Box
      w={"100%"}
      h={"70vh"}
      display={{ md: "none" }}
      mb={{ base: "120px", md: "0px" }}
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
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        style={{ width: "100%" }}
        onSlideChange={(swiper) => console.log(swiper)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <ExpSwiperData
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
        </SwiperSlide>
        <SwiperSlide>
          <ExpSwiperData
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
        </SwiperSlide>
        <SwiperSlide>
          <ExpSwiperData
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
        </SwiperSlide>
        <SwiperSlide>
          <ExpSwiperData
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
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ExpSwiper;
