import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
interface Prop {
  variant: number;
}
const words = ["Web",
  // "3D Art",
  "Mobile", "Full Stack"
];

const WordsContainer = styled(motion.div)`
  position: relative;
  flex-direction: column;

  width: 100%;
  overflow: hidden;
  display: inline-block;
`;
const MotionWord = styled(motion.div)<Prop>(({ variant }) => ({
  fontWeight: 700,
  textAlign: "left",
  fontSize: 100,
  fontFamily: "Inter",
  WebkitBackgroundClip: "text",
  MozBackgroundClip: "text",
  backgroundClip: "text",
  display: " inline-block",
  color: `rgba(${variant === 0 ? "255,50,125" : variant === 1 ? "255,200,45" : variant === 2 ? "0,200,255" : "92,255,180"},1)`,
  transition: 'all 0,2s ease-in-out'
}));

const SlideWords = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
    }, 3 * 1000);
    return () => clearInterval(intervalId);
  }, [currentWordIndex]);

  return (
    <Box
      sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
      style={{
        width: "100%",
        display: "flex",
      }}
    >
      <div>
        <WordsContainer
          initial={{ opacity: 1, }}
          animate={{ opacity: 1, }}
          exit={{ opacity: 0, }}
          transition={{ duration: 0.5 }}
        >
          {words.map((word, index) =>
            index === currentWordIndex ? (
              <MotionWord key={index} variant={currentWordIndex}>
                <Box style={{ display: 'flex' }}>
                  {word.split("").map((letter, letterIndex) => (
                    <motion.div
                      key={letterIndex}

                      initial={{ opacity: 0, y: letterIndex % 2 === 0 ? 100 : -100 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: letterIndex * 0.1,
                          duration: 0.3,
                          ease: 'easeInOut',
                          type: "spring",
                          damping: 15,
                          stiffness: 200
                        }
                      }}
                      exit="exit"
                    >  <Typography
                      style={{ fontWeight: 700, }}


                      sx={{ textAlign: { xs: 'center', lg: 'left' }, fontSize: { xs: 50, sm: 100, md: 100 } }}
                    >{letter}</Typography>
                    </motion.div>
                  ))}
                </Box>

              </MotionWord>
            ) : null
          )}
        </WordsContainer>
      </div>
    </Box>
  );
};
export default SlideWords;
