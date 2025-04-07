/* eslint-disable no-unused-vars */
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ironhacklaga from "../../assets/img/IronHacklaga.png";

const projects = [
  {
    title: "IronHacklaga",
    description: "Space shooter estilo retro inspirado en Galaga. Hecho con JavaScript vanilla y DOM.",
    image: ironhacklaga,
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/tuusuario/hacklaga",
    demo: "https://tuusuario.github.io/hacklaga",
  },
];

const ProjectSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50 space-y-16" id="projects">
      <h2 className="text-3xl font-bold text-center mb-10">Mis Proyectos</h2>

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
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-500"></div>

          <div className="absolute bottom-4 left-4 text-white text-2xl font-bold z-10">
            {project.title}
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 backdrop-blur-sm z-20">
            <p className="mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-blue-500 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 border px-3 py-1 rounded hover:bg-white hover:text-black transition"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 border px-3 py-1 rounded hover:bg-white hover:text-black transition"
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
