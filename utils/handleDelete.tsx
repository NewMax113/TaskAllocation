import { Dispatch, SetStateAction } from "react"

const handleDelete = (arg: string | number, callback: Dispatch<SetStateAction<any>>) => {
    return callback((taskList: string[] | number[]) => taskList.filter((task: string | number) => task !== arg));
}

export default handleDelete