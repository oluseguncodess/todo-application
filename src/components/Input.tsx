import {  useState } from 'react';
import { useStoreContext } from '../contexts/hooks/useStoreContext';

export default function Input() {
  const {addTask} = useStoreContext()
  const [input, setInput] = useState<string>('');

  function onSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!input) return;

    if (e.key === 'Enter') {
      addTask(input)
      setInput('');
    }
  }
  return (
    <div className='flex flex-col bg-column-background rounded-[5px]'>
      <div className='flex items-center'>
        <div className='flex gap-3 items-center w-full p-4'>
          <div className='min-w-5 min-h-5 rounded-full flex justify-center items-center border-1 border-gray-500'></div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => onSubmit(e)}
            className='text-foreground focus:outline-none w-full placeholder:text-gray-500 placeholder:opacity-80 text-sm leading-0 placeholder:pl-2'
            placeholder='Create a new todo...'
          />
        </div>
      </div>
    </div>
  );
}
