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
    id: number,
    setEmployeeTasks: Dispatch<SetStateAction<IWorkers['tasks']>>
    workerId: IWorkers['id']
    setWorkerId: Dispatch<SetStateAction<IWorkers['id']>>
}

export interface ITask {
    task: string
    setGeneralTaskList: Dispatch<SetStateAction<IWorkers['tasks']>>
}

export interface ITaskUpdateButton {
    workerId: IWorkers['id']
    employeeTasks: IWorkers['tasks']
}
