import { IWorkers } from "./IWorkers"

export interface ICardTools extends TasksAndHandle {
    id: IWorkers['id']
}
export interface IModalCard extends TasksAndHandle{
    isDropDownTasks: boolean
}
interface TasksAndHandle {
    handleClick: () => void
    tasks: IWorkers['tasks']
}

export interface IContendCard {
    name: IWorkers['name']
    position: IWorkers['position']
    currently: IWorkers['currently']
    tasks: IWorkers['tasks']
}

