import Header from './components/Header';
import TaskManagement from './components/TaskManagement';
import { useThemeContext } from './contexts/hooks/useThemeContext';
import Storeprovider from './contexts/StoreProvider';
function App() {
  const { theme } = useThemeContext();

  return (
    <div className='w-full h-screen bg-background relative'>
      <div
        className={
          theme === 'dark'
            ? "w-full h-[200px] md:h-[250px] bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-cover"
            : "w-full h-[200px] md:h-[250px] bg-[url('./assets/images/bg-mobile-light.jpg')] bg-cover"
        }
      >
        <Header/>
      </div>
      <Storeprovider>
        <TaskManagement />
      </Storeprovider>
    </div>
  );
}

export default App;
