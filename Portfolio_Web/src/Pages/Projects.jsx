import { FaLaptopCode, FaBook, FaNewspaper, FaGlobe, FaGraduationCap, FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const academicProjects = [
    {
      title: "Health Insurance Price Prediction (2022-2023)",
      icon: <FaLaptopCode className="text-xl sm:text-2xl text-blue-600" />,
      description: "Built an advanced Machine Learning model to predict health insurance premiums using regression techniques and clinical parameters.",
      github: "https://github.com/Dhirajpatil7721/College_Projects/blob/main/Health%20Insurence%20Price%20Prediction.zip",
    },
    {
      title: "Shivaji University Research Papers Portal (2022-2023)",
      icon: <FaBook className="text-xl sm:text-2xl text-indigo-600" />,
      description: "Developed a platform to access academic research papers, books, and university resources with fast search and categorization.",
      github: "https://github.com/Dhirajpatil7721/College_Projects/blob/main/Text%20to%20SQL%20LLM%20App%20main.zip",
    },
    {
      title: "Online News Portal (2021-2022)",
      icon: <FaNewspaper className="text-xl sm:text-2xl text-purple-600" />,
      description: "Created a modern news platform offering real-time updates in multiple categories with an interactive reading experience.",
      github: "https://github.com/Dhirajpatil7721/College_Projects/blob/main/Online%20News%20Portal.zip",
    },
  ];

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/project`);
        console.log("Project data fetched:", response.data);
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [API_BASE_URL]);

  // Function to check if URL exists and is valid
  const isValidUrl = (url) => {
    return url && url !== "" && url !== "#" && url !== null && url !== undefined;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  return (
    <section id="projects" className="bg-gradient-to-b from-white via-slate-50/60 to-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto mt-6">

        {/* Client Projects Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 relative"
        >
          {/* Decorative background circles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -left-10 w-20 h-20 border border-green-200/40 rounded-full hidden md:block pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -right-10 w-28 h-28 border border-emerald-200/40 rounded-full hidden md:block pointer-events-none"
          />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 mb-2 tracking-tight">
            Projects
          </h2>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "70px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-3"
          />

          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto px-4">
            Professional projects developed for clients and personal portfolio
          </p>
        </motion.div>

        {/* Client Projects Grid: 3 to 4 cards in one line */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-600"></div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mb-14"
          >
            {[...projects].reverse().map((project, index) => (
              <motion.div
                key={project._id || index}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative flex flex-col justify-between bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 
                           shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(16,185,129,0.12)] 
                           hover:border-emerald-400/50 transition-all duration-300 overflow-hidden"
              >
                {/* Top subtle gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-400 
                                rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle hover background glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-emerald-400/15 to-transparent 
                                rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Card Header: Icon & Status Pill */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 
                                    flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:shadow-sm 
                                    transition-all duration-300">
                      <FaGlobe className="text-xl sm:text-2xl text-orange-500 group-hover:rotate-12 transition-transform duration-300" />
                    </div>

                    {isValidUrl(project.host) ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200/60">
                        Project
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base sm:text-[17px] font-bold text-slate-800 mb-1.5 tracking-tight group-hover:text-emerald-600 
                               transition-colors duration-200 line-clamp-1"
                    title={project.title}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4 line-clamp-3"
                    title={project.description}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-2 pt-3 border-t border-slate-100/90 mt-auto w-full">
                  {isValidUrl(project.git) && (
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold 
                                 text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/60 
                                 transition-all duration-200 shadow-xs hover:shadow-sm"
                    >
                      <FaGithub className="text-sm" />
                      <span>Code</span>
                    </a>
                  )}

                  {isValidUrl(project.host) && (
                    <a
                      href={project.host}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold 
                                 text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 
                                 shadow-sm hover:shadow-blue-500/25 transition-all duration-200"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  )}

                  {!isValidUrl(project.git) && !isValidUrl(project.host) && (
                    <span className="text-xs text-slate-400 italic py-1 w-full text-center">
                      No links available
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-[70%] sm:w-[60%] md:w-[50%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent my-10 sm:my-14 relative overflow-hidden"
        >
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent"
          />
        </motion.div>

        {/* Academic Projects Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 relative"
        >
          {/* Decorative background circles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -left-10 w-20 h-20 border border-blue-200/40 rounded-full hidden md:block pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -right-10 w-28 h-28 border border-indigo-200/40 rounded-full hidden md:block pointer-events-none"
          />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 mb-2 tracking-tight">
            Academic Projects
          </h2>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "70px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-400 mx-auto rounded-full mb-3"
          />

          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto px-4">
            Research and academic projects developed during my studies
          </p>
        </motion.div>

        {/* Academic Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-14"
        >
          {academicProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 
                         shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(59,130,246,0.12)] 
                         hover:border-blue-400/50 transition-all duration-300 overflow-hidden"
            >
              {/* Top subtle gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
                              rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Subtle hover background glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-blue-400/15 to-transparent 
                              rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header: Icon & Academic Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 
                                  flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:shadow-sm 
                                  transition-all duration-300">
                    {project.icon || <FaCode className="text-xl sm:text-2xl text-blue-600" />}
                  </div>

                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 shadow-xs">
                    Academic
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-base sm:text-[17px] font-bold text-slate-800 mb-1.5 tracking-tight group-hover:text-blue-600 
                             transition-colors duration-200 line-clamp-1"
                  title={project.title}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4 line-clamp-3"
                  title={project.description}
                >
                  {project.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-100/90 mt-auto w-full">
                {isValidUrl(project.github) ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold 
                               text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 
                               shadow-sm hover:shadow-blue-500/25 transition-all duration-200"
                  >
                    <FaGithub className="text-sm" />
                    <span>View on GitHub</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 italic py-1 w-full text-center block">
                    No GitHub link
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
