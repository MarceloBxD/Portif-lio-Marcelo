import "./App.css";
import { Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./sections/Home";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { NavBar } from "./sections/NavBar";

function App() {
  return (
    <Flex flexDir="column">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Flex>
  );
}

export default App;
