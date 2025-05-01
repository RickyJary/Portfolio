import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  SiTailwindcss,
} from 'react-icons/si';
import { useLanguage } from '../../context/LanguageContext';

const techIcons = [
  { icon: <SiHtml5 className="text-orange-600" />, name: "HTML" },
  { icon: <SiCss3 className="text-blue-600" />, name: "CSS" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiReact className="text-cyan-400" />, name: "React" },
  { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
  { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
  { icon: <SiExpress className="text-gray-700" />, name: "Express" },
  { icon: <SiGit className="text-red-500" />, name: "Git" },
  { icon: <SiGithub className="text-black" />, name: "GitHub" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
];

const firstRow = techIcons.slice(0, 5);
const secondRow = techIcons.slice(5, 10);

const Technologies = () => {
  const { t } = useLanguage();
  return (
    <section
      className="flex flex-col items-center justify-center py-20 px-10 bg-white/90 backdrop-blur-md shadow-lg shadow-gray-300 gap-12 rounded-2xl w-full max-w-5xl mx-auto"
      id="skills"
    >
      <h2 className="text-5xl font-bold text-center mb-10 opacity-100 text-[#27a3a9]">
      {t("technologies.title")}
      </h2>

      <div className="flex flex-col gap-10">
        <div className="flex justify-center gap-10 flex-wrap">
          {firstRow.map((tech, index) => (
            <div
              key={index}
              className="text-5xl sm:text-6xl transition-transform duration-300 transform hover:scale-125"
              title={tech.name}
            >
              {tech.icon}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-10 flex-wrap">
          {secondRow.map((tech, index) => (
            <div
              key={index}
              className="text-5xl sm:text-6xl transition-transform duration-300 transform hover:scale-125"
              title={tech.name}
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;