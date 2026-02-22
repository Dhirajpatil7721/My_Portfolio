// import { FaLaptopCode, FaBook, FaNewspaper, FaGlobe, FaGraduationCap, FaCode, FaCloudSun, FaUtensils, FaPlane } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Projects() {
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
//   const academicProjects = [
//     {
//       title: "Health Insurance Price Prediction (2022-2023)",
//       icon: <FaLaptopCode className="text-5xl text-blue-600" />,
//       description: "Built an advanced Machine Learning model to predict health insurance premiums...",
//       github: "https://github.com/Dhirajpatil7721/College_Projects/blob/main/Health%20Insurence%20Price%20Prediction.zip",
//     },
//     {
//       title: "Shivaji University Research Papers Portal (2022-2023)",
//       icon: <FaBook className="text-5xl text-green-600" />,
//       description: "Developed a platform to access academic research papers, books, and university resources...",
//       github: "https://github.com/Dhirajpatil7721/College_Projects/blob/main/Text%20to%20SQL%20LLM%20App%20main.zip",
//     },
//     {
//       title: "Online News Portal (2021-2022)",
//       icon: <FaNewspaper className="text-5xl text-yellow-600" />,
//       description: "Created a modern news platform offering real-time updates in multiple categories...",
//       github: "https://github.com/Dhirajpatil7721/College_Projects/blob/main/Online%20News%20Portal.zip",
//     },
//   ];

//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         // const response = await axios.get("http://localhost:5000/api/project");
//         const response = await axios.get(`${API_BASE_URL}/project`);
//         console.log("Project data fetched:", response.data);
//         setProjects(response.data.data);  // Access the `data` array
//       } catch (error) {
//         console.error("Error fetching project data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   useEffect(() => {
//     console.log(projects);  // This will now log after projects are updated
//   }, [projects]);  // Runs every time 'projects' state changes



//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         when: "beforeChildren"
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10
//       }
//     },
//     hover: {
//       y: -10,
//       transition: { duration: 0.3 }
//     }
//   };

//   const buttonVariants = {
//     hover: {
//       scale: 1.05,
//       boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
//       transition: { duration: 0.2 }
//     },
//     tap: { scale: 0.95 }
//   };

//   return (
//     <section id="projects" className="bg-white mt-5 py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
//       <div className="max-w-7xl mx-auto">


//         {/* Client Projects Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="text-center mb-10 md:mb-10"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 mb-2">
//             Hosted / Client Projects
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Professional projects developed for clients and personal portfolio
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10"
//         >

//           {/* {projects.map((project, index) => ( */}
//           {[...projects].reverse().map((project, index) => (

//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover="hover"
//               className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
//             >
//               <div className="flex flex-col items-center text-center h-full">
//                 <motion.div
//                   whileHover={{ rotate: 10, scale: 1.1 }}
//                   className="mb-4"
//                 >
//                   {/* {project.ico} */}
//                   <FaGlobe className="text-5xl text-orange-600" />
//                 </motion.div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
//                 <p className="text-gray-600 text-sm mb-6 flex-grow">{project.description}</p>
//                 <div className="flex gap-3 w-full justify-center">
//                   <motion.a
//                     href={project.git}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     variants={buttonVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                     className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm flex-grow max-w-[120px]"
//                   >
//                     GitHub
//                   </motion.a>
//                   <motion.a
//                     href={project.host}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     variants={buttonVariants}
//                     whileHover="hover"
//                     whileTap="tap"
//                     className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm flex-grow max-w-[120px]"
//                   >
//                     Live Demo
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>


//         <hr className="w-[90%] mx-auto border-t-2 border-gray-300"  />
//         {/* Academic Projects Section */}

//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 md:mb-16 mt-10"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-2">
//             Academic Projects
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Research and academic projects developed during my studies
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
//         >
//           {academicProjects.map((project, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover="hover"
//               className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
//             >
//               <div className="flex flex-col items-center text-center h-full">
//                 <motion.div
//                   whileHover={{ rotate: 10, scale: 1.1 }}
//                   className="mb-4"
//                 >
//                   {/* {project.icon} */}
//                   <FaGlobe className="text-5xl text-orange-600" />
//                 </motion.div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
//                 <p className="text-gray-600 text-sm mb-6 flex-grow">{project.description}</p>
//                 <motion.a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   variants={buttonVariants}
//                   whileHover="hover"
//                   whileTap="tap"
//                   className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium w-full max-w-xs"
//                 >
//                   View on GitHub
//                 </motion.a>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>


//       </div>
//     </section>
//   );
// }



import { FaLaptopCode, FaBook, FaNewspaper, FaGlobe, FaGraduationCap, FaCode, FaCloudSun, FaUtensils, FaPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
  const academicProjects = [
    {
      title: "Health Insurance Price Prediction (2022-2023)",
      icon: <FaLaptopCode className="text-5xl text-blue-600" />,
      description: "Built an advanced Machine Learning model to predict health insurance premiums...",
      github: "https://github.com/Dhirajpatil7721/College_Projects/blob/main/Health%20Insurence%20Price%20Prediction.zip",
    },
    {
      title: "Shivaji University Research Papers Portal (2022-2023)",
      icon: <FaBook className="text-5xl text-green-600" />,
      description: "Developed a platform to access academic research papers, books, and university resources...",
      github: "https://github.com/Dhirajpatil7721/College_Projects/blob/main/Text%20to%20SQL%20LLM%20App%20main.zip",
    },
    {
      title: "Online News Portal (2021-2022)",
      icon: <FaNewspaper className="text-5xl text-yellow-600" />,
      description: "Created a modern news platform offering real-time updates in multiple categories...",
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
  }, []);

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
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="projects" className="bg-gradient-to-b from-white to-slate-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto mt-10">

        {/* Client Projects Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 relative"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -left-10 w-20 h-20 border border-green-200/30 rounded-full hidden md:block"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -right-10 w-32 h-32 border border-green-200/30 rounded-full hidden md:block"
          />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 mb-2 px-2">
            Hosted / Client Projects
          </h2>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full mb-3"
          />

          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
            Professional projects developed for clients and personal portfolio
          </p>
        </motion.div>

        {/* Client Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 mb-12 sm:mb-16"
          >
            {[...projects].reverse().map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 
                           hover:shadow-2xl hover:border-green-300 transition-all duration-500 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500/10 to-emerald-500/10 
                              rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>

                <div className="flex flex-col items-center text-center h-full relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mb-3 sm:mb-4 p-3 sm:p-4 bg-gradient-to-br from-green-50 to-emerald-50 
                              rounded-xl sm:rounded-2xl shadow-md group-hover:shadow-green-500/30 
                              transition-all duration-300"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      <FaGlobe className="text-3xl sm:text-4xl md:text-5xl text-orange-600" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-2 sm:mb-3
                                 group-hover:text-transparent group-hover:bg-clip-text 
                                 group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600
                                 transition-all duration-300 px-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm mb-4 sm:mb-5 flex-grow
                              group-hover:text-slate-700 transition-colors duration-300 px-1">
                    {project.description}
                  </p>

                  {/* Buttons - Only render if URLs exist */}
                  <div className="flex gap-2 sm:gap-3 w-full justify-center">
                    {isValidUrl(project.git) && (
                      <motion.a
                        href={project.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="bg-gradient-to-r from-green-600 to-emerald-600 text-white 
                                   px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm 
                                   flex-1 max-w-[100px] sm:max-w-[120px] shadow-md hover:shadow-lg
                                   transition-all duration-300"
                      >
                        GitHub
                      </motion.a>
                    )}

                    {isValidUrl(project.host) && (
                      <motion.a
                        href={project.host}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white 
                                   px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm 
                                   flex-1 max-w-[100px] sm:max-w-[120px] shadow-md hover:shadow-lg
                                   transition-all duration-300"
                      >
                        Live Demo
                      </motion.a>
                    )}

                    {/* Optional: Show message when no links available */}
                    {!isValidUrl(project.git) && !isValidUrl(project.host) && (
                      <div className="text-xs sm:text-sm text-slate-400 italic py-2">
                        No links available
                      </div>
                    )}
                  </div>
                </div>

                {/* Floating glow effect */}
                <div className="absolute -bottom-10 -right-10 w-16 h-16 md:w-20 md:h-20 bg-green-400 rounded-full 
                              opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 hidden sm:block"></div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-[80%] sm:w-[70%] md:w-[60%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-purple-400 via-blue-400 to-transparent my-12 sm:my-16
                    relative overflow-hidden"
        >
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />
        </motion.div>

        {/* Academic Projects Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12 mt-4 relative"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -left-10 w-20 h-20 border border-blue-200/30 rounded-full hidden md:block"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -right-10 w-32 h-32 border border-purple-200/30 rounded-full hidden md:block"
          />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2 px-2">
            Academic Projects
          </h2>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-3"
          />

          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
            Research and academic projects developed during my studies
          </p>
        </motion.div>

        {/* Academic Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 mb-16 sm:mb-20"
        >
          {academicProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 
                         hover:shadow-2xl hover:border-blue-300 transition-all duration-500 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                            rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>

              <div className="flex flex-col items-center text-center h-full relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-3 sm:mb-4 p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-purple-50 
                            rounded-xl sm:rounded-2xl shadow-md group-hover:shadow-blue-500/30 
                            transition-all duration-300"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {project.icon || <FaCode className="text-3xl sm:text-4xl md:text-5xl text-blue-600" />}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-2 sm:mb-3
                               group-hover:text-transparent group-hover:bg-clip-text 
                               group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600
                               transition-all duration-300 px-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm mb-4 sm:mb-5 flex-grow
                            group-hover:text-slate-700 transition-colors duration-300 px-1">
                  {project.description}
                </p>

                {/* GitHub Button - Only render if GitHub URL exists */}
                {isValidUrl(project.github) ? (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                               px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm 
                               shadow-md hover:shadow-lg transition-all duration-300
                               w-full max-w-[180px] sm:max-w-[200px]"
                  >
                    View on GitHub
                  </motion.a>
                ) : (
                  // Optional: Show message when no GitHub link
                  <div className="text-xs sm:text-sm text-slate-400 italic py-2 w-full max-w-[180px] sm:max-w-[200px]">
                    No GitHub link
                  </div>
                )}
              </div>

              {/* Floating glow effect */}
              <div className="absolute -bottom-10 -right-10 w-16 h-16 md:w-20 md:h-20 bg-blue-400 rounded-full 
                            opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 hidden sm:block"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}