"use client"
import { Avatar, Box, Card, CardHeader} from "@mui/material";
import { FC, useState } from "react";
import ModalCard from "./ModalCard";
import ContendCard from "./ContentCard";
import { IWorkers } from "@/types/IWorkers";
import CardTools from "./CardTools";


const EmployeeCard: FC<IWorkers> = ({ id, img, name, position, currently, tasks, taskCompleted }) => {
  const [isDropDownTasks, SetIsDropDownTasks] = useState<boolean>(false)

  const handleClick = () => {
    SetIsDropDownTasks(!isDropDownTasks)
  }

  return (
    <>
      <Box sx={{ maxWidth: 700, height: 'auto', position: 'relative', py: 1 }}>
        <Card variant="outlined" sx={{ maxWidth: 700, minHeight: { sm: 85, xs: 100 }, display: 'flex' }} >
          <CardHeader avatar={
            <Avatar/>
          } />
          <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <ContendCard {...{ name, tasks, position, currently }} />
            <CardTools {...{tasks, handleClick, id}}/>
          </Box>
        </Card>
      </Box>

      {isDropDownTasks && (tasks.length > 0) && (
        <ModalCard {...{ isDropDownTasks, tasks, handleClick }} />
      )}
    </>
  );
}

export default EmployeeCard