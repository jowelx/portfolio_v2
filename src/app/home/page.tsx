'use client'
import { NextPage } from 'next'
import styled from "@emotion/styled";
import { Container, Item, Wrapper } from '@/components/layout/Container';
import SlideWords from './components/SlideWords';
import Contact from './components/Contact';
import Tecnologies from './components/Tecnologies';
import { motion, useCycle } from 'framer-motion'
import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Controller from './components/Controller';
import { Box } from '@mui/material';
import Proyects from './components/Proyects';

const Grid = styled(motion.div)({
    position: 'relative',
    top: 0,
    width: "100%",
    minHeight: "100%",
    display: 'flex',
    alignItems: 'center',
    backgroundImage: " linear-gradient(to right, rgb(60,60,60) 1px, transparent 1px),linear-gradient(to bottom, rgb(60,60,60) 1px, transparent 1px)",
    backgroundSize: "60px 60px;",
});
interface Props { }

const Home: NextPage<Props> = ({ }) => {
    const [step, setStep] = useState(0)
    const [lastStep, setLastStep] = useState(0)
    const [hideHero, setHideHero] = useState(false);
    const [hideProyects, setHideProyects] = useState(false);
    useEffect(() => {

        if (step === -1) {
            const intervalId = setTimeout(() => {
                setHideHero(true)
                setHideProyects(false)
            }, 500);
            return () => clearInterval(intervalId);
        } else if (step === 0) {
            const intervalId = setTimeout(() => {
                setHideHero(false)
                setHideProyects(true)
            }, 800);
            return () => clearInterval(intervalId);
        }
        if (step !== -1) {
            const intervalId = setTimeout(() => {
                setHideProyects(true)
            }, 800);
            return () => clearInterval(intervalId);
        }
    }, [step])
    return <div style={{ position: 'relative' }}>
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Controller setState={setStep} setLastStep={setLastStep} step={step} />
        </Box>

        <Box sx={{ width: { xs: '100%', lg: '1000vw' }, height: { xs: 'auto', lg: '100vh' } }}>
            <Grid
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: `${100 * step}vw` }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    type: "spring",
                    damping: 15,
                    stiffness: 60
                }}
            >

                <div style={{ width: '100vw' }}>
                    <Wrapper>
                        {!hideHero ?
                            <motion.div
                                initial={{ opacity: 0, }}
                                animate={{ opacity: 1, }}
                                transition={{
                                    ease: 'easeInOut',
                                    duration: 0.5,

                                }}
                            >
                                <Hero />
                            </motion.div>

                            : null}

                    </Wrapper>
                </div>

                <div style={{ width: '100vw' }}>
                    <Wrapper>

                        {!hideProyects ? <motion.div
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 0.5,

                            }}
                            style={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <Proyects step={lastStep} />
                        </motion.div> : null}



                    </Wrapper>
                </div>

            </Grid>
        </Box>

    </div>


}

export default Home