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
    return <div className='scroll'
        style={{
            width: '95%',
            height: '90vh',
            overflowY: 'auto',
            padding: 4,
            display: 'flex',
            flexDirection: 'column', justifyContent: 'space-between'
        }}>
        <div style={{ display: 'flex' }}>
            <Title>
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
                <Title style={{ color: "rgb(255,50,125)" }}>
                    .
                </Title>
            </motion.div> : null}
        </div>



        <br />
        {showCard ? <Container rowSpacing={4} style={{ overflowX: 'none' }}>
            {dataCode.map((item, index) => (
                <Item xs={3}>
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

    </div>
}

export default Proyects