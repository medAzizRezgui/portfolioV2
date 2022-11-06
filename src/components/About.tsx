import { Box, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import { useState } from "react";
import AboutData from "./AboutData";
import SlideButton from "./SlideButton";
import styles from "../theme/customStyles.module.css";
import Dots from "./Dots";
export default function About() {
  const data = [
    {
      title: "A little about me",
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
      w={{
        base: "90%",
        sm: "80%",
        md: "80%",
        lg: "80%",
        xl: "85%",
        "2xl": "60%",
      }}
      mx="auto"
      h="100vh"
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
    >
      <Stack
        h={"100%"}
        w="100%"
        spacing={{ base: "10px", sm: "20px", md: "20px", lg: "40px" }}
        alignItems={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "center",
        }}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        justifyContent={"center"}
      >
        {/* Swiper */}
        <VStack
          mx={{ lg: "20px" }}
          w={{ base: "90%", sm: "90%", md: "60%", lg: "40%" }}
          h={{ base: "90%", sm: "100%", md: "100%", lg: "400px" }}
          spacing={{ base: "10px", sm: "20px", md: "10px", lg: "80px" }}
          justifyContent={"center"}
        >
          {/* Heading */}
          <HStack
            justifyContent={"space-between"}
            w="100%"
            alignItems={"center"}
          >
            <Heading
              fontFamily={"Noto Sans Mono"}
              fontSize={{ sm: "2xl", lg: "3xl", xl: "4xl" }}
            >
              {" "}
              01 - About
            </Heading>
            <Box
              w={{ base: "40%", sm: "40%", lg: "20%", xl: "40%" }}
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
              <SlideButton title="More..." />{" "}
            </SwiperSlide>
          </Swiper>
        </VStack>

        {/* Content */}
        <Box
          w={{ base: "100%", sm: "90%", md: "60%" }}
          h={{ base: "100%", md: "400px" }}
          borderRadius="8px"
          border="2px solid "
          className={styles.glassBg}
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
      </Stack>
    </Box>
  );
}
