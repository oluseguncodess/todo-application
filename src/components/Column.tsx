import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import type { Task } from '../types/type';
import TaskItem from './TaskItem';

type ColumnProps = {
  tasks: Task[];
};

export default function Column({ tasks }: ColumnProps) {
  return (
    <div className='bg-column-background rounded-[5px]'>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <TaskItem key={task.id} title={task.title} id={task.id}/>
        ))}
      </SortableContext>
    </div>
  );
}
