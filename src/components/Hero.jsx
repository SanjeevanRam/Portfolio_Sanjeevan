import Profile from "../assets/Profile.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0,
    transition: {
      duration:0.5,
      staggerChildren: 0.5,
   },
}}

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0,
    transition: {
      duration:0.5},
}}

const Hero = () => {
  return (
    <div className="pb-2 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-between lg:p-12">
            <motion.img
              src={Profile}
              alt="Sanjeevan Ram"
              className="border border-stone-900 rounded-3xl bg-transparent"
              width={420} height={420}
              initial={{x: 100, opacity: 0}}
              animate={{x:0, opacity: 1}}
              transition={{duration: 1, delay: 1.5}}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10">

            <motion.h2 
            variants={childVariants}
            className="pb-2 text-4xl tracking-tighter lg:text-7xl transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-stone-300 via-stone-500 to-stone-700 bg-clip-text text-transparent hover:from-purple-400 hover:via-pink-500 hover:to-red-500">
              Sanjeevan Ram
            </motion.h2>
            <motion.span 
            variants={childVariants}
            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent transition-colors duration-300 hover:bg-gradient-to-r hover:from-stone-400 hover:to-stone-700">
              Full Stack Developer
            </motion.span>
            <motion.p 
            variants={childVariants}
            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
            <motion.a
            variants={childVariants}
              href="/Sanjeevan_Ram.pdf"
              target="_blank"
              rel="noopener noreferrer download"
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 transition-transform duration-300 hover:scale-105 hover:bg-stone-600 hover:text-white"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;