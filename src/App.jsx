import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1">
      </div>
      <Footer />
    </div>
  );
}