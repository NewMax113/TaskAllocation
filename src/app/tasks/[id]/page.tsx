'use client'

import React, { FC, use } from "react";
import { RootStoreContext } from "@/root-store-context";
import RootStore from "@/store/root-store";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TasksPage from "@/components/tasks/TasksPage";


const EmployeeTasks: FC<{ params: any }> = ({ params }) => {
    const { id }: {id: number}  = use(params)

    return (
        <RootStoreContext.Provider value={new RootStore()}>
            <DndProvider backend={HTML5Backend}>
                <TasksPage {...{ id }} />
            </DndProvider>
        </RootStoreContext.Provider>

    )
}

export default EmployeeTasks