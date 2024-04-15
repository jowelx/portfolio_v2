import { NextPage } from 'next'
import React, { useEffect, useRef, useState } from "react";
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
import { TecnologiesData } from '@/data/code'
import Image from 'next/image';
import ChipLevel from '@/components/UI/Chip';
const Card = styled(Box)({
    zIndex: 999,
    backgroundColor: "rgba(55,55,55,0.8)",
    boxShadow: "0 5px 10px 0 rgba(20,20,20,0.6)",
    borderRadius: 10,
    height: 320,
});
interface Props { }
const Text = styled(Typography)({
    margin: 0,
    fontWeight: 700,
    color: "rgb(240,240,240)",
    fontFamily: "Inter",
});
const Tecnologies: NextPage<Props> = ({ }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const intervalId = setTimeout(() => {
            setShow(true)
        }, 850);
        return () => clearInterval(intervalId);
    }, [])
    return <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, }}
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
            <Card
                sx={{

                    height: { xs: 'auto', sm: 250, lg: 320 },
                    maxWidth: { xs: 340, sm: '100%' },
                    padding: { xs: 1, md: 2 },
                    width: { xs: 'auto', lg: 350 }
                }}>
                <Container alignItems={"center"} rowSpacing={2}>
                    <Item xs={12}>
                        <Text>Teconologías</Text>
                        <br />
                        <Divider style={{ backgroundColor: "rgb(240,240,240)" }} />
                    </Item>
                    <Item xs={12}>
                        {show ? <Box
                            sx={{ height: { xs: 237, sm: 180, lg: 260 } }}
                            style={{ overflow: 'auto', borderRadius: 8, position: "relative", paddingRight: 10, }}>
                            {TecnologiesData.map((item, index) => {
                                return (
                                    <motion.div
                                        key={index}
                                        style={{
                                            padding: 12,
                                            borderRadius: 8,
                                            backgroundColor: 'rgba(70,70,70,1)',
                                            display: 'flex',
                                            gap: 30,
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            margin: '12px 0',
                                            opacity: 0
                                        }}
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: index * 0.1,
                                                duration: 0.3,
                                                ease: 'easeInOut',
                                                type: "spring",
                                                damping: 20,
                                                stiffness: 200
                                            }
                                        }}
                                    ><Box
                                        sx={{ gap: { xs: 1, sm: 3 } }}

                                        style={{

                                            display: 'flex',

                                            alignItems: 'center',


                                        }}>
                                            <Image src={item.image} alt={"Tecnologie image"} width={30} height={30} />
                                            <Text sx={{ fontSize: { xs: 10, md: 16 } }}>
                                                {item.label}
                                            </Text>
                                        </Box>

                                        <ChipLevel label={item.labelR} type={item.type} />
                                    </motion.div>
                                );
                            })}
                        </Box> : null}
                    </Item>
                </Container>
            </Card >
        </Box>

    </motion.div>
}

export default Tecnologies