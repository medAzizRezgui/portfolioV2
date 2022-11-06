import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SlideButton from "./SlideButton";
import { Box, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import "swiper/css";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import styles from "../theme/customStyles.module.css";
import { BiChevronsRight } from "react-icons/bi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import ExpSwiperData from "./ExpSwiperData";
const ExpSwiper = () => {
  return (
    <Box w={"100%"} h={"70vh"} display={{ md: "none" }}>
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
          <ExpSwiperData />
        </SwiperSlide>
        <SwiperSlide>
          <ExpSwiperData />
        </SwiperSlide>
        <SwiperSlide>
          <ExpSwiperData />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ExpSwiper;
