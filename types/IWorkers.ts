export interface IWorkers {
    id: number,
    img: string | null,
    name: string,
    position: string,
    currently: string | null,
    tasks: string[] | null,
    taskCompleted: string[] | null
}