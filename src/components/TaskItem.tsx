// import Remove from '../assets/images//icon-cross.svg?react';
import { X } from 'lucide-react';
import Check from '../assets/images/icon-check.svg?react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';
import { useStoreContext } from '../contexts/hooks/useStoreContext';

type TaskProps = {
  title: string;
  id: number;
};

export default function TaskItem({ title, id }: TaskProps) {
  const { tasks, handleChangeStatus, removeTask } = useStoreContext()
  const [status, setStatus] = useState<string | undefined>(
    tasks.find((task) => task.id === id)?.status
  );

  const checkBg =
    status === 'completed'
      ? 'bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]'
      : '';

  const { attributes, setNodeRef, transform, transition, listeners} = useSortable({ id });

  const styles = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  function changeStatus() {
    const task = tasks.find((task) => task.id === id);
    const newStatus = task?.status === 'completed' ? 'active' : 'completed';
    setStatus(newStatus);
    handleChangeStatus(newStatus, id);
  }

  return (
    <div
      className={`flex flex-col relative w-full`}
      ref={setNodeRef}
      style={styles}
      {...attributes}
    >
      <div className='flex gap-3 justify-between items-center p-4 touch-none w-full'>
        <div className='flex gap-3 items-center justify-start w-full'>
          <button
            className={`h-5.5 min-w-5.5 rounded-full flex justify-center items-center ${checkBg} border-1 border-gray-500`}
            onClick={() => changeStatus()}
          >
            {checkBg && <Check />}
          </button>
          <p
            className={`cursor-grab active:cursor-grabbing w-full ${
              checkBg ? 'line-through text-check' : 'text-foreground'
            }` }
            {...listeners}
          >
            {title}
          </p>
        </div>
        <X className='w-4.5' onClick={() => removeTask(id)} />
      </div>
      <hr className='w-full border-t-[0.5px] border-hr-background' />
    </div>
  );
}
