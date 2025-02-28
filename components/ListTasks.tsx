import { Box } from "@mui/material"
import { FC } from "react"

const ListTasks: FC<{ task: string }> = ({ task }) => {
    return (
        <Box
            key={task}
            sx={{ p: 1, m: 0.5, border: 1, borderRadius: 15, borderColor: 'text.primary' }}>
            {task}
        </Box>
    )
}

export default ListTasks