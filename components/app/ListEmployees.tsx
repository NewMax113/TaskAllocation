import { FC, use } from "react"
import EmployeeCard from "./EmployeeCard"
import { RootStoreContext } from "@/root-store-context"

const ListEmployees: FC = () => {
    const RootStroe = use(RootStoreContext)
    const { classStaff } = RootStroe
    
    return (
        <>
            {classStaff.workers.map((arg) => <EmployeeCard key={arg.name} {...arg} />)}
        </>
    )
}

export default ListEmployees