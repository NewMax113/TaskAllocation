import { Box, Button } from "@mui/material"
import { FC } from "react"
import { ICardTools } from "@/types/MainTypes"
import Link from "next/link"


const CardTools: FC<ICardTools> = ({ handleClick, tasks, id }) => {
    return (
        <Box sx={{ display: "flex", alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'column' }}>
            <Link
                href={`/tasks/${id}`}
                passHref>
                <Button
                    sx={{ minWidth: 32, borderRadius: 3, m: 1, '&:hover': { transform: 'scale(1.2)' } }}>
                    A
                </Button>
            </Link>
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