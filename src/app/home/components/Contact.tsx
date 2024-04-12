import React, { useRef } from "react";
import styled from "@emotion/styled";
import { Grid, Divider, Box, Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";
import { Container, Item } from "@/components/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimation } from "framer-motion";
import Image from "next/image";
const Card = styled(Box)({
  zIndex: 999,
  backgroundColor: "rgba(55,55,55,0.8)",
  boxShadow: "0 5px 10px 0 rgba(20,20,20,0.6)",
  borderRadius: 10,
});
const Text = styled(Typography)({
  margin: 0,
  color: "rgb(240,240,240)",
  fontFamily: "'Inter', sans-serif;",
});


const Contact = () => {
  const divRef = useRef<any>(null);
  const controls = useAnimation();



  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, }}
      transition={{
        duration: 0.2,
        type: "spring",
        damping: 10,
        stiffness: 200
      }}
      exit={{ opacity: 0, y: 100 }}
      style={{ display: "inline-block", overflow: "hidden" }}
      layout
    >
      <Box sx={{ marginTop: { xs: "2vh", sm: '1vh', md: "1vh" } }}>
        <Card sx={{
          height: { xs: 'auto', sm: 250, lg: 'auto' },
          maxWidth: { xs: 340, sm: '100%' },
          padding: { xs: 1, md: 2 },
          width: { xs: 'auto', sm: 340, lg: 350 }
        }}>
          <Container alignItems={"center"} rowSpacing={2}>
            <Item xs={12}>
              <Text>Contactame</Text>
              <br />
              <Divider style={{ backgroundColor: "rgb(240,240,240)" }} />
            </Item>
            <Item xs={3} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
              <Image style={{ borderRadius: 20 }} src={"/assets/profile.webp"} alt="profile" width={40} height={40} />
            </Item>
            <Item xs={8} md={10}>
              <Text sx={{

                fontSize: { xs: 10, md: 16 }
              }}>Joel zambrano</Text>
            </Item>
            <Item xs={3} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
              <AlternateEmailIcon style={{ color: "rgb(240,240,240)" }} />
            </Item>
            <Item xs={8} md={10}>
              <Text sx={{

                fontSize: { xs: 10, md: 16 }
              }}>jzambranojazc2001@gmail.com</Text>
            </Item>
            <Item xs={3} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
              <PhoneAndroidIcon style={{ color: "rgb(240,240,240)" }} />
            </Item>
            <Item xs={8} md={10}>
              <Text sx={{

                fontSize: { xs: 10, md: 16 }
              }}>+57 3118595200</Text>
            </Item>
            <Item xs={3} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
              <LinkedInIcon style={{ color: "rgb(240,240,240)" }} />
            </Item>
            <Item xs={8} md={10}>
              <Link style={{ color: 'white' }} target="blank" href={"https://www.linkedin.com/in/joel-alejandro-zambrano-castellanos-a83295239/"}>
                <Text sx={{

                  fontSize: { xs: 10, md: 16 }
                }}> Joel zambrano </Text>
              </Link>
            </Item>
          </Container>
        </Card ></Box>

    </motion.div>


  );
};
export default Contact;
