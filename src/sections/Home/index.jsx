import { Flex, Container, Img } from "@chakra-ui/react";
import { motion } from "framer-motion";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";

export const Home = () => {
  const images = [image1, image2, image3, image4];

  return (
    <Flex  flexDir='column'>
    <Flex minW="700px" w="100%">
      <motion.div
        style={{
          display: "flex",
          maxWidth: "900px",
          margin: "0 auto",
          cursor: "grab",
          overflow: "hidden",
        }}
      >
        <motion.div drag="x" style={{display:"flex"}}>
          {images.map((item, index) => (
            <motion.div
              whileTap={{ cursor: "grabbing" }}
              style={{ minHeight: "300px", minWidth: "400px", padding: "14px" }}
              key={index}
            >
              <Img
              pointerEvents='none'
                style={{
                  width: "100%",
                  height: "90%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                src={item}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Flex>
    <Flex>
        <motion.p animate={{x: 20, y: 20}}>Olá, meu nome é marcelo</motion.p>
    </Flex>
    </Flex>
  );
};
