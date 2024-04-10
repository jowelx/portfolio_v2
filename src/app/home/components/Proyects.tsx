import { Container, Item } from '@/components/layout/Container'
import { dataCode } from '@/data/code'
import { NextPage } from 'next'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styled from "@emotion/styled";
import { Box, Typography } from '@mui/material'
import Card from './Card'
interface Props { step: number }
const Title = styled(Typography)({
    fontWeight: 700,
    fontSize: 100,
})
const Proyects: NextPage<Props> = ({ step }) => {
    const [showCard, setShowCard] = useState(false)
    const [showPoint, setShowPoint] = useState(false)
    useEffect(() => {
        const intervalId = setTimeout(() => {
            setShowCard(true)
        }, 400);
        const intervalId2 = setTimeout(() => {
            setShowPoint(true)
        }, 800);
        return () => {
            clearInterval(intervalId);
            clearInterval(intervalId2)
        };

    }, [])
    return <Box className='scroll'
        sx={{
            height: { xs: 'auto', lg: '90vh', },
            overflowY: { xs: 'none', lg: 'auto', }
        }}
        style={{
            width: '95%',

            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-start' } }}>
            <Title sx={{ fontSize: { xs: 50, sm: 70, lg: 100 } }}>
                Proyectos
            </Title>

            {showPoint ? <motion.div
                initial={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1, y: 0, }}
                transition={{
                    duration: 0.2,
                    type: "spring",
                    damping: 20,
                    stiffness: 200
                }}>
                <Title sx={{ fontSize: { xs: 50, sm: 70, lg: 100 } }} style={{ color: "rgb(255,50,125)" }}>
                    .
                </Title>
            </motion.div> : null}
        </Box>



        <br />
        {showCard ?
            <Container
                rowSpacing={4}
                justifyContent={{ xs: 'center', sm: 'flex-start', lg: 'flex-start' }}
                style={{ overflowX: 'none' }}>
                {dataCode.map((item, index) => (
                    <Item xs={12} sm={6} lg={3} key={item.tittle} sx={{ justifyContent: { xs: 'center' } }} style={{ display: 'flex', }}>
                        <motion.div
                            initial={{ opacity: 0.5, x: step ? -1200 : 1200, }}
                            animate={{ opacity: 1, x: 0, }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.2,
                                type: "spring",
                                damping: 22,
                                stiffness: 200
                            }}
                        >
                            <Card data={item} />
                        </motion.div>
                    </Item>
                ))}
            </Container> : null}

    </Box>
}

export default Proyects