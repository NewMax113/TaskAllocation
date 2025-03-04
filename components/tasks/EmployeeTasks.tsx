import handleDelete from "@/utils/handleDelete";
import { Box, Chip } from "@mui/material";
import { FC } from "react"
import { useDrop } from "react-dnd";
import { IEmployeeTasks } from "@/types/TasksTypes";


const EmployeeTasks: FC<IEmployeeTasks> = ({ employeeTasks, setEmployeeTasks }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (name: {name: string}) => dropArr(name),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const dropArr = (name: {name: string}) => {
        setEmployeeTasks((onlyArr: any) => [...sortTasks(onlyArr, name.name)])
        console.log(name.name)
    }

    const sortTasks = (arr: string[], arg: string) => {
        return arr.includes(arg) ? arr : [...arr, arg];
    }
    
    return (
        <Box ref={drop as any} sx={{ border: 1, minHeight: 300 }}>
            {employeeTasks.map((val: string) => <Chip key={val} label={val} onDelete={() => handleDelete(val, setEmployeeTasks)} />)}
        </Box>
    )
}

export default EmployeeTasks