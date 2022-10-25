import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import EmailBar from "./components/EmailBar";
import SocialBar from "./components/SocialBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";

function App() {
  return (
    <Container variant={"responsive"} position="relative" h="100vh">
      <Header />
      <SocialBar />
      <EmailBar />
      <Hero />
      <About />
      <Experiences />
    </Container>
  );
}

export default App;
