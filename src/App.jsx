import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Technologies from './Components/Technologies';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Certification from './Components/Certification';

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className='fixed inset-0 -z-10'>
          <div className="relative w-full h-full bg-gradient-to-br from-[#2c3e50] to-[#34495e]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:15px_15px] opacity-30" />
            <div className="absolute inset-x-0 top-[-10%] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#ffffff20,#000000)]" style={{ width: '1000px', height: '1000px' }} />
          </div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <Technologies />
          <Projects />
          <Education />
          <Certification />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
