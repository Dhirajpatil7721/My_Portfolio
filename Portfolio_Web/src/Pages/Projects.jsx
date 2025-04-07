import { FaLaptopCode, FaBook, FaNewspaper, FaGlobe, FaGraduationCap, FaCode, FaCloudSun, FaUtensils, FaPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
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

  const clientProjects = [
    {
      title: "Saksham Softech",
      icon: <FaGlobe className="text-5xl text-purple-600" />,
      description: "Developed a professional company website with modern UI/UX and responsive design.",
      github: "https://github.com/Dhirajpatil7721/Saksham_Softech",
      liveDemo: "https://sakshamsoftech.com/",
    },
    {
      title: "S2J Academy",
      icon: <FaGraduationCap className="text-5xl text-orange-600" />,
      description: "Designed and deployed an academy website with interactive features.",
      github: "https://github.com/Dhirajpatil7721/S2J_Academy",
      liveDemo: "https://s2jacademy.vercel.app/",
    },
    {
      title: "Einfratech Systems",
      icon: <FaCode className="text-5xl text-orange-600" />,
      description: "Developed and launched a company website, improving performance and accessibility.",
      github: "https://github.com/Dhirajpatil7721/EInfratech_Systems_Official",
      liveDemo: "https://einfratechproject.vercel.app/",
    },
    {
      title: "IT Company",
      icon: <FaGlobe className="text-5xl text-orange-600" />,
      description: "Designed and deployed a personal IT company website with a service inquiry module.",
      github: "https://github.com/Dhirajpatil7721/It_Company_Portfolio",
      liveDemo: "http://52.66.244.93:3000/",
    },
    {
      title: "Traveler",
      icon: <FaPlane className="text-5xl text-orange-600" />,
      description: "Developed a travel website featuring booking functionality and destination guides.",
      github: "https://github.com/Dhirajpatil7721/Einfratech_Systems_Task/tree/main/Travel_Webpage",
      liveDemo: "http://13.233.101.176:3001/",
    },
    {
      title: "Weather App",
      icon: <FaCloudSun className="text-5xl text-orange-600" />,
      description: "Built a real-time weather application with API integration and location tracking.",
      github: "https://github.com/Dhirajpatil7721/Weather_App",
      liveDemo: "https://weather-app-five-steel-34.vercel.app/",
    },
    {
      title: "Food Webpages",
      icon: <FaUtensils className="text-5xl text-orange-600" />,
      description: "Designed and deployed a food website with an interactive menu and ordering system.",
      github: "https://github.com/Dhirajpatil7721/food",
      liveDemo: "https://food-theta-two.vercel.app/",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
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
    <section id="projects" className="bg-white mt-5 py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Academic Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-2">
            Academic Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Research and academic projects developed during my studies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          {academicProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center text-center h-full">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="mb-4"
                >
                  {project.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{project.description}</p>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium w-full max-w-xs"
                >
                  View on GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 mb-2">
            Hosted / Client Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional projects developed for clients and personal portfolio
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {clientProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col items-center text-center h-full">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="mb-4"
                >
                  {project.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{project.description}</p>
                <div className="flex gap-3 w-full justify-center">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm flex-grow max-w-[120px]"
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm flex-grow max-w-[120px]"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}