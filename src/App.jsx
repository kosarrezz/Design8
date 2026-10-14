import Navbar from './components/layout/Navbar/Navbar'; 
import Footer from './components/layout/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans" dir="rtl">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
