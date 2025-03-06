import { RootStoreContext } from "@/root-store-context";
import { IWorkers } from "@/types/IWorkers";
import { IListOfEmployees } from "@/types/TasksTypes";
import { Autocomplete, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { FC, use, useEffect, useState } from "react"


const ListOfEmployees: FC<IListOfEmployees> = observer(({setEmployeeTasks, workerId, setWorkerId }) => {
    const RootStore = use(RootStoreContext)
    let workers = RootStore.classStaff.workers 
    const [workerName, setWorkerName] = useState<IWorkers | null>(workerId != null && workers[workerId] || null);

    useEffect(() => {
        workerId != null && setEmployeeTasks(workers[workerId].tasks || [])
    }, [workerId, workers])

    useEffect(()=> {
        workerId != null && console.log('сраб', workerId, workers[workerId])
        if (!workerName) {
            console.log('3,l', workerName)
            setWorkerId(null)
            setEmployeeTasks([])
        }
    }, [workerName])

    return (
        <Autocomplete
            disablePortal
            options={workers}
            getOptionLabel={(option: IWorkers) => option.name}
            value={workerName}
            onChange={(event, newValue) => {
                setWorkerName(newValue);
                if (newValue?.id != null) {
                    setWorkerId(newValue.id);
                }
            }}
            sx={{ width: 300 }}
            renderInput={(params) =>
                <TextField {...params}
                    variant="standard"
                    label="Size small"
                    placeholder="Работник" />}
        />
    )
})

export default ListOfEmployees