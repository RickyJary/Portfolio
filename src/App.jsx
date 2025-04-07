import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import ProjectsSection from "./components/ProjectSection/ProjectSecion"

function App() {

  return (
    <div className="flex items-center flex-col bg-[#27a3a9]">
      <Navbar />
      <Hero/>
      <ProjectsSection/>
    </div>
  )
}

export default App
