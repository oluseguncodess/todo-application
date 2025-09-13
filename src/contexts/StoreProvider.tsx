import { useState, type PropsWithChildren } from 'react';
import type { Task } from '../types/type';
import { Storecontext } from './store';
import type { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from '@dnd-kit/sortable';

const INITIAL_TASKS = [
  { id: 1, title: 'Complete online JavaScript course', status: 'completed' },
  { id: 2, title: 'Jog around the park 3x', status: 'active' },
  { id: 3, title: '10 minutes meditation', status: 'active' },
  { id: 4, title: 'Read for 1 hour', status: 'active' },
  { id: 5, title: 'Pick up groceries', status: 'active' },
  { id: 6, title: 'Complete Todo App on Frontend Mentor', status: 'active' },
];

export default function Storeprovider({children} : PropsWithChildren) {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

   function addTask(title: string) {
    setTasks((tasks) => [
      ...tasks,
      { id: tasks.length + 1, title: title, status: 'active' },
    ]);
  }

  function handleChangeStatus(status: string, id: number) {
      setTasks((tasks) =>
        tasks.map((task) => (task.id === id ? { ...task, status: status } : task))
      );
  }

  function handleDragEnd(e: DragEndEvent) {
      const { active, over } = e;
  
      if (!over) return;
  
      if (active.id === over.id) return;
  
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex(
          (task) => task.id === Number(active.id)
        );
        const overIndex = tasks.findIndex((task) => task.id === Number(over.id));
  
        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

  const ctxValue = {
    tasks,
    addTask,
    handleChangeStatus,
    handleDragEnd
  }
  return <Storecontext.Provider value={ctxValue}>{children}</Storecontext.Provider>;
}
