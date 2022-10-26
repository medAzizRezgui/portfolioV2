import { Box, Heading, HStack, SlideFade, VStack } from "@chakra-ui/react";
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
    {
      title: "",
      content: `Hello! My name is Aziz and I enjoy designing and creating clean and appealing Interfaces and delivering a smooth and pleasant User experience.
      My interest in web development started back in 2018 when I decided to find something that I genuinely love! I found out that my attention to details and my love for technology is perfect for me to start a journey as a developer.`,
    },
    { title: "I Can", content: "Lorem10" },
    { title: "I Enjoy", content: "Lorem10" },
  ];

  const [index, setIndex] = useState(0);
  return (
    <Box
      id="about"
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
        <VStack w="40%" h="400px" justifyContent={"space-between"}>
          {/* Heading */}
          <HStack
            justifyContent={"space-between"}
            w="100%"
            alignItems={"center"}
          >
            <Heading fontFamily={"Noto Sans Mono"}> 01 - About</Heading>
            <Box
              w="40%"
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
        </VStack>

        {/* Content */}
        <Box
          w="60%"
          h="400px"
          borderRadius="8px"
          bg="#22212C"
          border="2px solid "
          borderColor={"gray.400"}
          position="relative"
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
