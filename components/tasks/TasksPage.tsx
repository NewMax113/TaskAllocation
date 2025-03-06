'use client'

import { Grid2 } from "@mui/material";
import { FC, useState } from "react";
import { IWorkers } from "@/types/IWorkers";
import { observer } from "mobx-react-lite";
import ListOfEmployees from "./ListOfEmployees";
import TaskEntryForm from "./TaskEntryForm";
import EmployeeTasks from "./EmployeeTasks";
import GeneralTaskList from "./GeneralTaskList";
import TaskUpdateButton from "./TaskUpdateButton";


const TasksPage: FC<{ id?: number }> = observer(({ id }) => {
    const [workerId, setWorkerId] = useState<IWorkers['id'] | null>(id || null);
    const [generalTaskList, setGeneralTaskList] = useState<string[]>([])
    const [employeeTasks, setEmployeeTasks] = useState<IWorkers['tasks']>([])

    return (
        <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 6, md: 8 }}>
                <ListOfEmployees {...{ setEmployeeTasks, workerId, setWorkerId }} />
            </Grid2>

            {workerId != null && (
                <>
                    <Grid2 size={{ xs: 6, md: 4 }}>
                        <TaskEntryForm {...{ generalTaskList, setGeneralTaskList }} />
                    </Grid2>

                    <Grid2 size={{ xs: 6, md: 8 }}>
                        <EmployeeTasks {...{ setEmployeeTasks, employeeTasks }} />
                    </Grid2>

                    <Grid2 size={{ xs: 6, md: 4 }}>
                        <GeneralTaskList {...{ generalTaskList, setGeneralTaskList }} />
                    </Grid2>

                    <Grid2 >
                        <TaskUpdateButton {...{ workerId, employeeTasks }} />
                    </Grid2>
                </>
            )}


        </Grid2>
    )
})

export default TasksPage