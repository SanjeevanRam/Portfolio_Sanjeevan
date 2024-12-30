import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <div>
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
            >
              <img
                src={job.companyLogo}
                alt={job.company}
                width={250}
                height={250}
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-2xl">{job.title}</h3>
              <p className="mb-2 text-stone-500">{job.company}</p>
              <p className="mb-4 text-stone-400">{job.description}</p>
              <p className="mb-2 text-stone-500">{job.dates}</p>
              <div className="mb-4">
                {job.skills.map((skill, index) => (
                  <span
                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {job.link && (
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-700"
                >
                  View Experience
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
