// import Remove from '../assets/images//icon-cross.svg?react';
import { X } from 'lucide-react';
import Check from '../assets/images/icon-check.svg?react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useContext, useState } from 'react';
import { Storecontext } from '../contexts/store';

type TaskProps = {
  title: string;
  id: number;
};

export default function TaskItem({ title, id }: TaskProps) {
  const { tasks, handleChangeStatus, removeTask } = useContext(Storecontext);
  const [status, setStatus] = useState<string | undefined>(
    tasks.find((task) => task.id === id)?.status
  );

  const checkBg =
    status === 'completed'
      ? 'bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]'
      : '';

  const { attributes, setNodeRef, transform, transition } = useSortable({ id });

  const styles = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  function changeStatus() {
    // find the task
    const task = tasks.find((task) => task.id === id);
    // check it's status
    const newStatus = task?.status === 'completed' ? 'active' : 'completed';
    setStatus(newStatus);
    handleChangeStatus(newStatus, id);
  }

  return (
    <div
      className={`flex flex-col relative`}
      ref={setNodeRef}
      style={styles}
      {...attributes}
    >
      <div className='flex justify-between items-center p-4 touch-none'>
        <div className='flex gap-3 items-center justify-center'>
          <button
            className={`w-5.5 h-5.5 rounded-full flex justify-center items-center ${checkBg} border-1 border-gray-500`}
            onClick={() => changeStatus()}
          >
            {checkBg && <Check />}
          </button>
          <p
            className={`cursor-grab active:cursor-grabbing ${
              checkBg ? 'line-through text-check' : 'text-foreground'
            }`}
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
