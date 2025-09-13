import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import Input from './Input';
import Column from './Column';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { useContext } from 'react';
import { Storecontext } from '../contexts/store';

export default function TaskManagement() {
  const { tasks, handleDragEnd } = useContext(Storecontext);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  return (
    <div className='w-[90%] flex flex-col gap-4 absolute top-28 left-2/4 -translate-x-1/2'>
      <Input />
      <DndContext
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
}
