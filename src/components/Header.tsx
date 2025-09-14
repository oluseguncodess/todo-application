import Sun from '../assets/images/icon-sun.svg?react';
import Moon from '../assets/images/icon-moon.svg?react';
import { useThemeContext } from '../contexts/hooks/useThemeContext';
export default function Header() {
  const { theme, handleToggleTheme } = useThemeContext();
  return (
    <header className='flex justify-between items-center w-[90%] md:max-w-[540px] mx-auto pt-10'>
      <h1 className='text-white font-bold text-3xl tracking-[0.3em]'>TODO</h1>
      {theme === 'dark' ? (
        <div className='w-20 flex justify-center items-center'>
          <Sun  onClick={() => handleToggleTheme('light')}/>
        </div>
      ) : (
        <div className='w-20 flex justify-center items-center'>
          <Moon onClick={() => handleToggleTheme('dark')}/>
        </div>
      )}
    </header>
  );
}
