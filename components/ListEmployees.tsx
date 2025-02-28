import { FC } from "react"
import EmployeeCard from "./EmployeeCard"
import Staff from "../shared/staff"

const ListEmployees: FC = () => {
    return (
        <div>
            {Staff.map((arg)=> <EmployeeCard key={arg.name} {...arg}/>)}
            
        </div>
    )
}

export default ListEmployees