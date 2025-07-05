import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import { ThemeProvider, ThemeContext } from './ThemeContext.jsx';
import { useContext } from 'react';

function AppContent() {
  const context = useContext(ThemeContext);
  
  return (
    <div className={`min-h-screen flex flex-col ${context.theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <Navigation />
      <div className="flex-1">
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}