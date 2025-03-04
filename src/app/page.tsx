"use client"

import ListEmployees from "@/components/app/ListEmployees";
import { RootStoreContext } from "@/root-store-context";
import RootStore from "@/store/root-store";


export default function Home() {

  return (
    <RootStoreContext.Provider value={new RootStore()}>
        <ListEmployees />
    </RootStoreContext.Provider>
  );
}