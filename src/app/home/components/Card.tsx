import { NextPage } from 'next'
import styled from "@emotion/styled";
import { Box, Chip, Typography } from '@mui/material'
import { dataCode } from '@/data/code';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Link from 'next/link';
const CardStyled = styled(Box)({
    overflow: 'hidden',
    borderRadius: 6,
    maxWidth: 280,
    width: 'auto',
    background: ' linear-gradient(0deg, rgb(40,40,40)0%,rgb(60,60,60)100%) ',
})
const Title = styled(Typography)({
    fontWeight: 700,
    color: 'white',
    fontSize: 24
})
const Text = styled(Typography)({
    fontSize: 12,
    color: 'rgb(230,230,230)'
})
interface Props {
    data: {
        rol: string;
        img: string;
        tittle: string;
        link: string;
        description: string;
        tecnologies: ({ title: string; color: string; light?: undefined; } | { title: string; color: string; light: boolean; })[];
    };
}

const Card: NextPage<Props> = ({ data }) => {
    const colorMap: { [key: string]: string } = {
        'Frontend': 'rgb(0,180,180)',
        'Full Stack': 'rgb(200,55,20)',
        'Mobile dev': 'rgb(255,150,20)',
        default: 'rgb(20,50,80)'
    };

    const bg = colorMap[data.rol] || colorMap.default;
    const [backgroundColor, setBackgroundColor] = useState<string>('');


    const [onHover, setOnHover] = useState(false)

    return <div>
        <Link href={data.link} target='blank' style={{ textDecoration: 'none' }}>
            <CardStyled onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
                <div style={{ width: '100%', height: 110, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                    <Image src={data.img} alt=""
                        layout='responsive'
                        objectFit='cover'
                        width={180} height={100}
                    />

                </div>
                <div style={{ padding: 10, minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                        <Title>
                            {data.tittle}
                        </Title>
                        <Chip label={data.rol} icon={<EngineeringIcon style={{ color: 'rgb(20,20,20)', fontSize: 16 }} />} style={{
                            color: 'rgb(20,20,20)', backgroundColor: 'white', fontWeight: 700,
                            fontSize: 12
                        }} />
                    </div>
                    <br />
                    <div style={{
                        display: 'flex', alignItems: 'flex-start',
                        height:
                            // !onHover ? 0 :
                            80
                    }}>
                        <Text>
                            {//!onHover ? data.description.substring(0, 40) + "..." :
                                data.description
                                //
                            }
                        </Text>
                    </div>
                    <br />
                    <div>
                        {data.tecnologies.map((item: any, index: number) => (
                            <Chip
                                key={index}
                                label={item.title}
                                size="small"
                                style={{
                                    color: item.light ? "rgb(20,20,20)" : "rgb(255,255,255)",
                                    backgroundColor: item.color,
                                    marginRight: "1vh",
                                    marginTop: "1vh",
                                }}
                            />
                        ))}
                    </div>

                </div>

            </CardStyled>
        </Link>
    </div>
}

export default Card