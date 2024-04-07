import { Chip } from '@mui/material'
import { NextPage } from 'next'

interface Props { label: string, type: number }

const ChipLevel: NextPage<Props> = ({ label, type }) => {
    const Diamond = "linear-gradient(45deg, rgba(185,185,185,1) 0%, rgba(255,255,255,1) 13%, rgba(235,248,255,1) 26%, rgba(255,255,255,1) 39%, rgba(245,255,253,1) 49%, rgba(255,255,255,1) 60%, rgba(235,248,255,1) 74%, rgba(255,255,255,1) 94%)"
    const Gold = "rgba(230,211,142,1)"
    const Silver = 'rgba(208,219,225,1)'
    const Bronze = "rgba(186,161,133,1)"
    let background = "";

    switch (type) {
        case 0:
            background = Diamond;
            break;
        case 1:
            background = Gold;
            break;
        case 2:
            background = Silver;
            break;
        case 3:
            background = Bronze;
            break;
        default:
            background = ""; // Si no se proporciona un tipo válido, el fondo será vacío
            break;
    }
    return <div>
        <Chip label={label} style={{ fontSize: 12, fontWeight: 700, background }} />
    </div>
}

export default ChipLevel