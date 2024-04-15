import { NextPage } from 'next'
import styled from "@emotion/styled";
import { Container, Item, Wrapper } from '@/components/layout/Container';
import SlideWords from './SlideWords';
import Contact from './Contact';
import Tecnologies from './Tecnologies';
import { motion, useCycle } from 'framer-motion'
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
interface Props { }
const TittleStatic = styled(Typography)({
    fontFamily: "Inter",
    fontSize: 120,
    color: "white",
    width: "100%",
    margin: 0,
    fontWeight: 700,
});
const Text = styled(Typography)({
    fontWeight: 400,
    fontFamily: "Inter",
    fontSize: 20,
    color: "rgb(200,200,200)",
})
const Hero: NextPage<Props> = ({ }) => {
    const [op, setOp] = useState(0)
    useEffect(() => {
        const intervel = setInterval(() => {
            setOp(prev => prev === 0 ? 1 : 0)
        }, 900)

        return () => clearInterval(intervel);
    }, [op])
    return <Container
        justifyContent={{ xs: 'center', lg: 'space-between' }}
        rowSpacing={{ xs: 5, lg: 0 }}
    >
        <Item xs={11} lg={8}>
            <TittleStatic sx={{ textAlign: { xs: 'center', lg: 'left' }, fontSize: { xs: 40, sm: 100, md: 100 } }}>
                Soy un
            </TittleStatic>
            <SlideWords />
            <TittleStatic sx={{ textAlign: { xs: 'center', lg: 'left' }, fontSize: { xs: 40, sm: 100, md: 100 } }}>
                Desarrollador
            </TittleStatic>
            <Text sx={{
                width: { xs: '100%', lg: '80%' },
                textAlign: { xs: 'center', lg: 'left' },
                fontSize: { xs: 13, sm: 20, md: 20 }
            }}>
                Soy un <strong style={{ color: "rgb(80,220,245)" }}>desarrollador apasionado</strong> , amante de los <strong style={{ color: "rgb(205,250,125)" }}>videojuegos</strong> ,con experiencia en la creación de productos digitales emocionantes tanto para la web como para dispositivos móviles.
            </Text>
            <br />
            <Box sx={{ justifyContent: { xs: 'center', lg: "flex-start" } }} style={{ display: 'flex', alignItems: 'center' }}>
                <Text sx={{
                    textAlign: { xs: 'center', lg: 'left' },
                    fontSize: { xs: 13, sm: 20, md: 20 }
                }}>
                    Generando valor desde <strong style={{ color: "rgb(255,50,125)" }}>2019.</strong>
                </Text>
                <motion.div

                    transition={{ duration: 0.5, yoyo: Infinity }}
                    style={{
                        marginLeft: 2,
                        opacity: op,
                        width: 6,
                        height: 20,
                        backgroundColor: "rgb(255,50,125)",
                    }}
                />
            </Box>

        </Item>
        <Item xs={12} lg={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ width: '100%', }}>
                <Container
                    alignItems="space-between"
                    style={{ height: '100%' }}
                    columnSpacing={{ xs: 0, sm: 1, md: 0 }}
                    justifyContent={{ xs: 'center', md: 'space-around', lg: 'space-between' }}
                    sx={{ marginBottom: { xs: '4vh', lg: 0 } }}>
                    <Item xs={11} sm={6} md={5} lg={12}
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', lg: 'flex-start' }
                        }}>
                        <Contact />
                    </Item>
                    <Item
                        xs={11} sm={6} md={5} lg={12}
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', lg: 'flex-start' }
                        }}>

                        <Tecnologies />
                    </Item>
                </Container>
            </div>
        </Item>
    </Container>
}

export default Hero