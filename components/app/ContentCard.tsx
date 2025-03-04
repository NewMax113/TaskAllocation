import { Box } from "@mui/material"
import { FC } from "react"
import { IContendCard } from "../../types/AppTypes"


const ContendCard: FC<IContendCard> = ({ name, position, currently, tasks }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column' }}>
            <Box sx={{ display: "flex", flexDirection: { sm: 'row', xs: 'column' } }}>
                <Box sx={{ mx: 1, p: 1 }}>{name}</Box>
                <Box sx={{ mx: 1, p: 1 }}>{position}</Box>
            </Box>
            {tasks && <Box sx={{ mx: 1, p: 1 }}>{currently ? `Выполняется: ${currently}` : `Zzz...`}</Box>}
            {!tasks && <Box sx={{ mx: 1, p: 1 }}>Без задачи!</Box>}
        </Box>
    )
}

export default ContendCard