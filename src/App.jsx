import './App.css'
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import Shortener from './Component/Shortener';
import Statistics from './Component/Statistics';
import Main from './Component/Main';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Shortener />
      <Statistics />
      <Main />
      <Footer />
    </>
  );
}

export default App;
