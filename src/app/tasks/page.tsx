'use client'

import React, { FC } from "react";
import { RootStoreContext } from "@/root-store-context";
import RootStore from "@/store/root-store";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TasksPage from "@/components/tasks/TasksPage";


const EmployeeTasks: FC = () => {
    return (
        <RootStoreContext.Provider value={new RootStore()}>
            <DndProvider backend={HTML5Backend}>
                <TasksPage />
            </DndProvider>
        </RootStoreContext.Provider>

    )
}

export default EmployeeTasks