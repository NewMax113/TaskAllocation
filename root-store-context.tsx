import { createContext } from "react";
import RootStore from "./store/root-store";

export const RootStoreContext = createContext<RootStore>(new RootStore)