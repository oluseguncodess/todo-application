import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import TaskItem from './TaskItem';
import { useStoreContext } from '../contexts/hooks/useStoreContext';
import type { Status } from '../types/type';

export default function Column() {
  const { tasks, status } = useStoreContext();

  let displayedTask;
  if (status === 'Active') {
    displayedTask = tasks.filter((task) => task.status === 'active');
  } else if (status === 'Completed') {
    displayedTask = tasks.filter((task) => task.status === 'completed');
  } else {
    displayedTask = tasks;
  }

  const statuses: Status[] = ['All', 'Active', 'Completed'];

  return (
    <div className='bg-column-background rounded-[5px]'>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {displayedTask.map((task) => (
          <TaskItem key={task.id} title={task.title} id={task.id} />
        ))}
      </SortableContext>
      <div className='p-4.5 flex'>
        <div className='text-gray-500 flex justify-between items-center w-full'>
          {statuses.map(
            (statuss) =>
              statuss === status &&
              displayedTask.length === 1 && (
                <p key={statuss}>{displayedTask.length} item left</p>
              )
          )}
          {displayedTask.length > 1 && <p>{displayedTask.length} items left</p>}
          {displayedTask.length === 0 && <p>Empty</p>}
          <p>Clear Completed</p>
        </div>
      </div>
    </div>
  );
}
