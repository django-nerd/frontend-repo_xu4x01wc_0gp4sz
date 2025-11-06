import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100 antialiased selection:bg-white/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
