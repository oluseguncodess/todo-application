import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import TaskItem from './TaskItem';
import { useContext } from 'react';
import { Storecontext } from '../contexts/store';

export default function Column() {
const {tasks, status} = useContext(Storecontext)

 let displayedTask;
  if(status === 'Active') {
    displayedTask = tasks.filter(task => task.status === 'active')
  } else if (status === 'Completed') {
    displayedTask = tasks.filter(task => task.status === 'completed')
  } else {
    displayedTask = tasks
  }

  return (
    <div className='bg-column-background rounded-[5px]'>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {displayedTask.map((task) => (
          <TaskItem key={task.id} title={task.title} id={task.id} />
        ))}
      </SortableContext>
      <div className='p-4.5 flex'>
        <div className='text-gray-500 flex justify-between items-center w-full'>
          <p>{displayedTask.length} items left</p>
          <p>Clear Completed</p>
        </div>
      </div>
    </div>
  );
}
