/* eslint-disable no-unused-vars */
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import rawProjects from "../../data/projects.json";
import ironhacklaga from "../../assets/img/IronHacklaga.png";
import tournamentforge from "../../assets/img/TournamentForge.png";
import gigboard from "../../assets/img/GigBoard.png";

const images = {
  ironhacklaga,
  tournamentforge,
  gigboard,
};

const projects = rawProjects.map((p) => ({
  ...p,
  image: images[p.image],
}));

const ProjectSection = () => {
  const { t } = useLanguage();

  return (
    <section
      className="flex flex-col items-center justify-between py-20 px-10 my-10 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg shadow-gray-300 gap-10 w-full max-w-5xl mx-auto"

      id="projects"
    >
      <h2 className="text-5xl font-bold text-center mb-10 opacity-100 text-[#27a3a9]">
        {t("projects.title")}
      </h2>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative w-full h-72 md:h-96 overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-60 transition duration-500"></div>

          <div className="absolute bottom-4 left-4 text-white text-2xl font-bold z-10">
            {project.title}
          </div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 backdrop-blur-sm z-20">
          <h2 className="text-xl font-semibold tracking-wide drop-shadow-md mb-2">
  {project.title}
</h2>
            <p className="mb-4 text-sm">{t(project.descriptionKey)}</p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-blue-500 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3 flex-col w-full justify-center items-center lg:flex-row">
            {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-1 border px-3 py-1 rounded hover:bg-white hover:text-black transition text-center w-full lg:w-auto"
  >
    <Github className="w-4 h-4" />
    GitHub
  </a>
)}

{project.githubAPI && (
  <a
    href={project.githubAPI}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-1 border px-3 py-1 rounded hover:bg-white hover:text-black transition text-center w-full lg:w-auto"
  >
    <Github className="w-4 h-4" />
    API
  </a>
)}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 border px-3 py-1 rounded hover:bg-white hover:text-black transition text-center w-full lg:w-auto"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default ProjectSection;
