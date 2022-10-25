import { Box, HStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { useState } from "react";
import "swiper/css/autoplay";
import AboutData from "./AboutData";
import SlideButton from "./SlideButton";
import SwiperDots from "./SwiperDots";
import Dots from "./Dots";
export default function About() {
  const data = [
    { title: "I am", content: "lorem10" },
    { title: "I Can", content: "Lorem10" },
    { title: "I Enjoy", content: "Lorem10" },
  ];

  const [index, setIndex] = useState(0);
  return (
    <Box
      w="60%"
      mx="auto"
      h="100vh"
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
    >
      <HStack
        w="100%"
        spacing={"40px"}
        alignItems="flex-start"
        justifyContent={"center"}
      >
        {/* Swiper */}
        <Box w="40%">
          <SwiperDots index={index} />
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={true}
            onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <SlideButton title={"Who Am I?"} />{" "}
            </SwiperSlide>
            <SwiperSlide>
              <SlideButton title={"Why Me?"} />{" "}
            </SwiperSlide>
            <SwiperSlide>
              <SlideButton title="XD" />{" "}
            </SwiperSlide>
          </Swiper>
        </Box>

        {/* Content */}
        <Box
          w="60%"
          h="400px"
          position={"relative"}
          borderRadius="8px"
          bg="#22212C"
          border="2px solid white"
        >
          <Dots index={index} />
          {data.map((item, i) => (
            <AboutData
              key={i}
              id={i}
              content={item.content}
              index={index}
              title={item.title}
            />
          ))}
        </Box>
      </HStack>
    </Box>
  );
}
