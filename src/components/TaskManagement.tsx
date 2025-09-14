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
import Status from './Status';
import { useStoreContext } from '../contexts/hooks/useStoreContext';

export default function TaskManagement() {
  const { handleDragEnd} = useStoreContext()

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  return (
    <div className='w-[90%] md:max-w-[540px] flex flex-col gap-4 absolute top-26 left-2/4 -translate-x-1/2'>
      <Input />
      <DndContext
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        <Column/>
      </DndContext>
      <Status/>
      <p className='mx-auto mt-5 text-gray-500 text-[0.85rem]'>Drag and drop to reorder list</p>
    </div>
  );
}
