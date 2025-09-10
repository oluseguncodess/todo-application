import ThemeContextProvider from './contexts/themeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='w-full h-screen bg-background'></div>
    </ThemeContextProvider>
  );
}

export default App;
