import { createContext } from "react";
import type { Task } from "../types/type";
import type { DragEndEvent } from "@dnd-kit/core";

interface IStoreContext {
  tasks: Task[]
  addTask: (title: string) => void
  handleChangeStatus: (status: string, id: number) => void
  handleDragEnd: (event: DragEndEvent) => void
  removeTask: (id: number) => void
  status: string
  handleDisplayStatus: (status: string) => void
}

export const Storecontext = createContext<IStoreContext>({} as IStoreContext)