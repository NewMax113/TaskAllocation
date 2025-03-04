import { RootStoreContext } from "@/root-store-context"
import { ITaskUpdateButton } from "@/types/TasksTypes"
import { Button } from "@mui/material"
import { observer } from "mobx-react-lite"
import { FC, use } from "react"


const TaskUpdateButton: FC<ITaskUpdateButton> = observer(({workerId, employeeTasks}) => {
    const RootStore = use(RootStoreContext)
    const updatingTask = RootStore.classStaff.updatingTask

    const updateTasksWorkers = () => {
        updatingTask(workerId, employeeTasks)
    }

    return (
        <Button
            onClick={updateTasksWorkers}>
            Сохранить
        </Button>
    )
})

export default TaskUpdateButton