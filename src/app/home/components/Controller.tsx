import { NextPage } from 'next'
import Image from 'next/image'
import styled from "@emotion/styled";
import React, { SetStateAction } from 'react';
interface Props { setState: React.Dispatch<SetStateAction<number>> }
const borderWidth = 1
const Color = "rgb(205, 250, 125)"
const Ray = styled.div({
    height: "80vh",
    width: borderWidth * 2,

    position: 'absolute',
    //backgroundColor: 'red'
    background: `linear-gradient(0deg, rgba(0,0,0,0) 0%,${Color}  50%, rgba(0,0,0,0) 100%)`
})

const Controller: NextPage<Props> = ({ setState }) => {
    return <div style={{
        position: 'fixed',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        zIndex: 9999,
        height: '100vh',
        background: 'linear-gradient(90deg, rgba(25,25,25,1) 0%, rgba(131,255,214,0) 10%, rgba(147,255,219,0) 90%, rgba(25,25,25,1) 100%)'
    }}>
        <div style={{
            margin: '0 15px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <div style={{
                position: 'relative',
                height: 200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Ray />
                <div style={{
                    cursor: 'pointer',
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
                    onClick={() => setState((prev: number) => prev === 0 ? 0 : prev + 1)}
                >

                    <Image alt="" src={'/assets/arrow.svg'} width={25} height={25} />

                </div>
            </div>
            <div style={{
                position: 'relative',
                height: 200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <div style={{
                    cursor: 'pointer',
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
                    onClick={() => setState((prev: number) => prev - 1)}
                >

                    <Image alt="" src={'/assets/arrow.svg'} width={25} height={25} />

                </div>
                <Ray />
            </div>

        </div>

    </div>
}

export default Controller