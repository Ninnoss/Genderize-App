import './App.css';
import Hero from './Hero';
import Navbar from './Navbar';
import { useTheme } from './ThemeContext';

export default function App() {
  const { darkMode } = useTheme();
  const theme = darkMode ? 'dark' : 'light';
  // console.log(theme);
  return (
    <>
      <main style={{height: '100vh'}} className={`${theme} pb-5`}>
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
