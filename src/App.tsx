import { useThemeContext } from './contexts/hooks/useThemeContext';
function App() {
  const { theme } = useThemeContext();
  
  return (
    <div className='w-full h-screen bg-background'>
      <div
        className={
          theme === 'dark'
            ? "w-full h-[200px] bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-cover bg-center"
            : "w-full h-[200px] bg-[url('./assets/images/bg-mobile-light.jpg')] bg-cover bg-center"
        }
      ></div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
