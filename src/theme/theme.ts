import { extendTheme } from "@chakra-ui/react";
import "./fonts.css";
const breakpoints = {
  xs: "345px",
  sm: "576px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1400px",
};

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        scrollBehavior: "smooth",
        fontFamily: "Circular std book , sans-serif",
        bg: "#000814",
        color: "white",
      },
    },
  },
  breakpoints,
  sizes: {
    container: {
      sm: "100%",
      md: "720px",
      lg: "920px",
      xl: "1340px",
      "2xl": "1840px",
    },
  },
  colors: {
    themeBg: "#000814",
    themeCyan: "#4cc9f0",
    themeYellow: "#ffd60a",
  },

  fonts: {
    heading: "Circular std book",
    body: "Circular std book",
  },
  components: {
    Container: {
      variants: {
        responsive: {
          maxWidth: {
            sm: "container.sm",
            md: "container.md",
            lg: "container.lg",
            xl: "container.xl",
            "2xl": "container.2xl",
          },
        },
        fluid: {
          width: "100%",
          maxW: "100%",
        },
      },
    },
    Button: {
      variants: {},
    },
    Heading: {
      variants: {
        title: {},
      },
    },
    Text: {
      variants: {
        span: {
          display: "inline",
        },
      },
    },
  },
});

export default theme;
