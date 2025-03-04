import { FC } from "react"
import Task from "./Task"
import { IGeneralTaskList } from "@/types/TasksTypes"


const GeneralTaskList: FC<IGeneralTaskList> = ({ generalTaskList, setGeneralTaskList }) => {
    return (
        <>
            {generalTaskList.map((task) => <Task key={task} {...{ task, setGeneralTaskList }} />)}
        </>
    )
}

export default GeneralTaskList