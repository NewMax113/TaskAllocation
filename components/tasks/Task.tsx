import { ITask } from "@/types/TasksTypes"
import handleDelete from "@/utils/handleDelete"
import { Box, Chip } from "@mui/material"
import { FC } from "react"
import { useDrag } from "react-dnd"


const Task: FC<ITask> = ({ task, setGeneralTaskList }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: { name: task },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <Box ref={drag}>
            <Chip component={Box} label={task} onDelete={() => handleDelete(task, setGeneralTaskList)}  />
        </Box>
    )
}

export default Task