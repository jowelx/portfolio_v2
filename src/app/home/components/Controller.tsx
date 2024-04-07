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
        </div>
        <div style={{
            zIndex: 99,
            position: 'fixed',
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            right: 10,
        }}>     <div style={{
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
    </>

}

export default Controller