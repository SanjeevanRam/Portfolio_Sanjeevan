import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiJavascript, SiBootstrap, SiTailwindcss, SiHtml5, SiMysql } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import "./Tech.css";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, 10, 0], // Move down and back up
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const headingVariants = {
  initial: { color: "#000" },
  animate: {
    color: [
      "#E34F26", // HTML
      "#61DAFB", // React
      "#8CC84B", // Node.js
      "#F7DF1E", // JavaScript
      "#563D7C", // Bootstrap
      "#38B2AC", // Tailwind CSS
      "#00758F", // SQL
      "#00A1E4", // RESTful API
    ],
    transition: {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const techData = [
  { icon: <SiHtml5 className="text-7xl text-[#E34F26]" />, name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", duration: 1 },
  { icon: <RiReactjsLine className="text-7xl text-[#61DAFB]" />, name: "React", link: "https://reactjs.org/", duration: 0.8 },
  { icon: <TbBrandNodejs className="text-7xl text-[#8CC84B]" />, name: "Node.js", link: "https://nodejs.org/", duration: 1.2 },
  { icon: <SiMongodb className="text-7xl text-[#47A248]" />, name: "MongoDB", link: "https://www.mongodb.com/", duration: 0.9 },
  { icon: <SiExpress className="text-7xl text-[#bdbaba]" />, name: "Express", link: "https://expressjs.com/", duration: 1.1 },
  { icon: <SiJavascript className="text-7xl text-[#F7DF1E]" />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", duration: 0.7 },
  { icon: <SiBootstrap className="text-7xl text-[#563D7C]" />, name: "Bootstrap", link: "https://getbootstrap.com/", duration: 1.3 },
  { icon: <SiTailwindcss className="text-7xl text-[#38B2AC]" />, name: "Tailwind CSS", link: "https://tailwindcss.com/", duration: 0.6 },
  { icon: <SiMysql className="text-7xl text-[#00758F]" />, name: "SQL", link: "https://www.mysql.com/", duration: 1.4 },
  { icon: <span className="text-7xl text-[#00A1E4]">🔗</span>, name: "RESTful API", link: "https://restfulapi.net/", duration: 1.5 },
];

const Technologies = () => {
  return (
    <div className="technologies-container pb-24">
      <motion.h2 
        variants={headingVariants} 
        animate="animate"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {techData.map((tech, index) => (
          <div key={index} className="tech-item flex flex-col items-center">
            <motion.a 
              href={tech.link}
              rel="noopener noreferrer" 
              className="flex flex-col items-center"
              variants={iconVariants(tech.duration)} 
              initial="initial" 
              animate="animate"
            >
              {tech.icon}
              <span className="mt-2 text-lg">{tech.name}</span>
            </motion.a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;