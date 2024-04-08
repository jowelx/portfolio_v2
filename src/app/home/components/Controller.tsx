import { NextPage } from 'next'
import Image from 'next/image'
import styled from "@emotion/styled";
import React, { SetStateAction } from 'react';
import { motion } from 'framer-motion'
interface Props { step: number, setState: React.Dispatch<SetStateAction<number>>, setLastStep: React.Dispatch<SetStateAction<number>> }
const borderWidth = 1
const Color = "rgb(205, 250, 125)"
const Ray = styled.div({
    height: "80vh",
    width: borderWidth * 2,

    position: 'absolute',
    //backgroundColor: 'red'
    background: `linear-gradient(0deg, rgba(0,0,0,0) 0%,${Color}  50%, rgba(0,0,0,0) 100%)`
})

const Controller: NextPage<Props> = ({ setState, setLastStep, step }) => {
    return <>
        <div style={{
            zIndex: 99,
            position: 'fixed',
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            left: 10,
        }}>
            <motion.div
                initial="initial"
                animate={{ opacity: step === 0 ? 0.2 : 1, }}
                transition={{

                    duration: 0.2,

                }}
                style={{

                    opacity: step === 0 ? 0.4 : 1,
                    position: 'relative',
                    height: 200,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Ray />
                <div style={{

                    cursor: step === 0 ? 'auto' : 'pointer',
                    rotate: '180deg',
                    backgroundColor: 'rgb(55,55,55)',
                    justifyContent: 'center',
                    display: 'flex',
                    border: `solid 2px  ${Color}`,
                    alignItems: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: 200
                }}
                    onClick={() => { setLastStep(step); setState((prev: number) => prev === 0 ? 0 : prev + 1) }}
                >

                    <Image alt="" src={'/assets/arrow.svg'} width={25} height={25} />

                </div>
            </motion.div>
        </div>
        <div style={{
            zIndex: 99,
            position: 'fixed',
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            right: 10,
        }}>
            <motion.div
                initial="initial"
                animate={{ opacity: step === -1 ? 0.2 : 1, }}
                transition={{

                    duration: 0.2,

                }}
                style={{
                    position: 'relative',
                    height: 200,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                <div style={{
                    cursor: step === -1 ? 'auto' : 'pointer',
                    backgroundColor: 'rgb(55,55,55)',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    border: `solid 2px ${Color}`,
                    zIndex: 999,
                    width: 40,
                    height: 40,
                    borderRadius: 200
                }}
                    onClick={() => { setLastStep(step); setState((prev: number) => prev === 1 ? 1 : - 1) }}
                >

                    <Image alt="" src={'/assets/arrow.svg'} width={25} height={25} />

                </div>
                <Ray />
            </motion.div>
        </div>
    </>

}

export default Controller