import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import ProjectsSection from "./components/ProjectSection/ProjectSection"
import Technologies from "./components/Technologies/Technologies"
import About from "./components/About/About"

function App() {

  return (
    <div className="flex items-center flex-col bg-[#27a3a9]">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <Technologies />
      <About />
    </div>
  )
}

export default App
