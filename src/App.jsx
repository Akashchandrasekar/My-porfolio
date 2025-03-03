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
      <div className="overflow-x-hidden text-gray-100 antialiased font-sans">
        <div className='fixed inset-0 -z-10'>
          <div className="relative w-full h-full bg-gradient-to-bl from-[#020c1b] via-[#031b34] to-[#05203e] flex items-center justify-center overflow-hidden">
            {/* Dark Marine Blue Background with Neatly Aligned Diamond Design */}
            <div className="absolute w-full h-full flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-5" />
              {/* Properly Aligned Diamond Shapes with Reduced Opacity */}
              <div className="absolute top-[10%] left-[10%] w-20 h-20 bg-blue-600 opacity-50 rotate-45" />
              <div className="absolute top-[25%] left-[25%] w-24 h-24 bg-blue-500 opacity-60 rotate-45" />
              <div className="absolute top-[10%] right-[10%] w-24 h-24 bg-cyan-500 opacity-60 rotate-45" />
              <div className="absolute bottom-[15%] left-[20%] w-28 h-28 bg-blue-400 opacity-40 rotate-45" />
              <div className="absolute bottom-[25%] right-[20%] w-32 h-32 bg-cyan-400 opacity-50 rotate-45" />
              <div className="absolute middle-[40%] left-[50%] w-36 h-36 bg-blue-500 opacity-30 rotate-45" />
              <div className="absolute middle-[30%] left-[15%] w-22 h-22 bg-cyan-300 opacity-40 rotate-45" />
              <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#05203e] to-transparent opacity-75" />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-10 md:px-20 lg:px-24 py-16 flex flex-col gap-28">
          <Navbar />
          <Hero />
          <Technologies />
          <Projects />
          <Education />
          {/* <Certification /> */}
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
