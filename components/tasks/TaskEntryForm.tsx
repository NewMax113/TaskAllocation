import { ITaskEntryForm } from "@/types/TasksTypes";
import { Button, TextField } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useState } from "react"


const TaskEntryForm: FC<ITaskEntryForm> = ({ generalTaskList, setGeneralTaskList }) => {
    const [text, setText] = useState<string>('')
    const setToTaskList = () => {
        text && !generalTaskList.includes(text) && setGeneralTaskList((task) => [...task, text])
    }

    return (
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => { setToTaskList(); e.preventDefault() }}>
            <TextField
                id="outlined-basic"
                label="Задать задачу..."
                variant="outlined"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setText(event.target.value);
                }} />
            <Button onClick={setToTaskList}>Клик</Button>
        </form>
    )
}

export default TaskEntryForm