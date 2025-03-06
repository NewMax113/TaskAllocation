import { Dispatch, SetStateAction } from "react"
import { IWorkers } from "./IWorkers"

interface IStateGeneralTaskList {
    generalTaskList: IWorkers['tasks']
    setGeneralTaskList: Dispatch<SetStateAction<IWorkers['tasks']>>
}
export interface IGeneralTaskList extends IStateGeneralTaskList {}
export interface ITaskEntryForm extends IStateGeneralTaskList {}

export interface IEmployeeTasks {
    employeeTasks: IWorkers['tasks']
    setEmployeeTasks: Dispatch<SetStateAction<IWorkers['tasks']>>
}

export interface IListOfEmployees {
    setEmployeeTasks: Dispatch<SetStateAction<IWorkers['tasks']>>
    workerId: IWorkers['id'] | null
    setWorkerId: Dispatch<SetStateAction<IWorkers['id'] | null>>
}

export interface ITask {
    task: string
    setGeneralTaskList: Dispatch<SetStateAction<IWorkers['tasks']>>
}

export interface ITaskUpdateButton {
    workerId: IWorkers['id'] | null
    employeeTasks: IWorkers['tasks']
}
