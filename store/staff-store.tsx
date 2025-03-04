import { IWorkers } from "@/types/IWorkers";
import { makeAutoObservable } from "mobx";

class Staff {
    workers: IWorkers[] = [
        { id: 0, img: null, name: 'Русеев Максим Алексеевич', position: 'Frontend-developer', currently: null, tasks: [], taskCompleted: null },
        { id: 1, img: null, name: 'Мумбаев Аратанян Витязивич', position: 'Full-stack разработчки', currently: null, tasks: [], taskCompleted: null },
        { id: 2, img: null, name: 'Попов Артур Максимович', position: 'Инженер', currently: null, tasks: ['Первая задача'], taskCompleted: null },
        { id: 3, img: null, name: 'Романов Георгий Викторович', position: 'Старший разработчик в серверной части', currently: null, tasks: [], taskCompleted: null },
    ]

    constructor() {
        makeAutoObservable(this)
    }

    updatingTask = (id: number, newTasks: string[]) => {
        console.log(id, newTasks)
        this.workers = this.workers.map((arg) => arg.id == id ? {...arg, tasks: newTasks} : arg)
        console.log(this.workers)
    }
}

export default new Staff