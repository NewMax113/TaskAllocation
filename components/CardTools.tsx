import { Box, Button } from "@mui/material"
import { FC } from "react"
import { ICardTools } from "../types/MainTypes"


const CardTools: FC<ICardTools> = ({ handleClick, tasks }) => {
    return (
        <Box sx={{ display: "flex", alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'column' }}>
            <Button sx={{ minWidth: 32, borderRadius: 3, m: 1, '&:hover': { transform: 'scale(1.2)' } }}>
                И
            </Button>
            <Button
                disabled={!tasks}
                onClick={handleClick}
                sx={{
                    cursor: 'pointer', minWidth: 32, borderRadius: 3, m: 1, '&:hover': { transform: 'scale(1.2)' }
                }}>
                З
            </Button>
        </Box>
    )
}

export default CardTools