import { IWorkers } from "./IWorkers"

export interface ICardTools {
    handleClick: () => void
    tasks: IWorkers['tasks']
}
export interface IModalCard extends ICardTools{
    isDropDownTasks: boolean,
}

export interface IContendCard {
    name: IWorkers['name']
    position: IWorkers['position']
    currently: IWorkers['currently']
    tasks: IWorkers['tasks']
}

