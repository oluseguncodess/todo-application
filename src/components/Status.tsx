import { useStoreContext } from '../contexts/hooks/useStoreContext';

const statusNames = [
  { id: 1, status: 'All' },
  { id: 2, status: 'Active' },
  { id: 3, status: 'Completed' },
];

export default function Status() {
  const { status, handleDisplayStatus } = useStoreContext()
  return (
    <div className='w-full justify-center items-center gap-8 flex p-4 bg-column-background rounded-[5px]'>
      {statusNames.map((statuss) => (
        <button
          key={statuss.id}
          className={`font-bold ${
            status === statuss.status ? 'text-primary' : 'text-gray-500'
          }`}
          onClick={() => handleDisplayStatus(statuss.status)}
        >
          {statuss.status}
        </button>
      ))}
    </div>
  );
}
