// import { FaLaptopCode, FaBook, FaNewspaper, FaGlobe, FaGraduationCap, FaCode, FaCloudSun, FaUtensils, FaPlane, FaAndroid, FaApple } from "react-icons/fa";
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



import {
  FaLaptopCode,
  FaBook,
  FaNewspaper,
  FaCode,
  FaAndroid,
  FaApple,
  FaGithub,
} from "react-icons/fa";
import { Laptop, Smartphone, ArrowUpRight, Sparkles, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const cardThemes = [
  {
    bar: "from-emerald-500 via-teal-400 to-cyan-500",
    glow: "from-emerald-400/25 to-teal-400/20",
    surfaceHover: "from-emerald-50/40 via-transparent to-teal-50/30",
    iconBg: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10 ring-emerald-300/60",
    iconColor: "text-emerald-600",
    borderHover: "hover:border-emerald-300/90 hover:shadow-emerald-500/10",
    titleHover: "group-hover:from-emerald-600 group-hover:to-teal-600",
    badge: "bg-emerald-50/90 text-emerald-700 border-emerald-200/80",
    dot: "bg-emerald-500",
    toggle: "text-emerald-600 hover:text-emerald-700",
  },
  {
    bar: "from-blue-500 via-cyan-400 to-sky-500",
    glow: "from-blue-400/25 to-cyan-400/20",
    surfaceHover: "from-blue-50/40 via-transparent to-cyan-50/30",
    iconBg: "from-blue-500/10 via-cyan-500/10 to-sky-500/10 ring-blue-300/60",
    iconColor: "text-blue-600",
    borderHover: "hover:border-blue-300/90 hover:shadow-blue-500/10",
    titleHover: "group-hover:from-blue-600 group-hover:to-cyan-600",
    badge: "bg-blue-50/90 text-blue-700 border-blue-200/80",
    dot: "bg-blue-500",
    toggle: "text-blue-600 hover:text-blue-700",
  },
  {
    bar: "from-violet-500 via-purple-400 to-fuchsia-500",
    glow: "from-violet-400/25 to-purple-400/20",
    surfaceHover: "from-violet-50/40 via-transparent to-fuchsia-50/30",
    iconBg: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 ring-violet-300/60",
    iconColor: "text-violet-600",
    borderHover: "hover:border-violet-300/90 hover:shadow-violet-500/10",
    titleHover: "group-hover:from-violet-600 group-hover:to-fuchsia-600",
    badge: "bg-violet-50/90 text-violet-700 border-violet-200/80",
    dot: "bg-violet-500",
    toggle: "text-violet-600 hover:text-violet-700",
  },
  {
    bar: "from-amber-500 via-orange-400 to-rose-500",
    glow: "from-amber-400/25 to-orange-400/20",
    surfaceHover: "from-amber-50/40 via-transparent to-orange-50/30",
    iconBg: "from-amber-500/10 via-orange-500/10 to-rose-500/10 ring-orange-300/60",
    iconColor: "text-orange-600",
    borderHover: "hover:border-orange-300/90 hover:shadow-orange-500/10",
    titleHover: "group-hover:from-amber-600 group-hover:to-rose-600",
    badge: "bg-amber-50/90 text-amber-700 border-amber-200/80",
    dot: "bg-orange-500",
    toggle: "text-orange-600 hover:text-orange-700",
  },
];

const isValidUrl = (url) =>
  Boolean(url && url !== "" && url !== "#" && url !== null && url !== undefined);

const getProjectMeta = (project, theme) => {
  const hasWeb = isValidUrl(project.host);
  const hasMobile = isValidUrl(project.android) || isValidUrl(project.ios);

  if (hasWeb && hasMobile) {
    return {
      label: "Web & Mobile",
      isDual: true,
      icon: (
        <span className={`inline-flex items-center gap-1.5 ${theme.iconColor}`}>
          <Laptop className="w-4 h-4 stroke-[2.2]" />
          <span className="w-px h-3.5 bg-current opacity-30" />
          <Smartphone className="w-3.5 h-3.5 stroke-[2.2]" />
        </span>
      ),
    };
  }
  if (hasMobile) {
    return {
      label: "Mobile App",
      isDual: false,
      icon: <Smartphone className={`w-4 h-4 stroke-[2.2] ${theme.iconColor}`} />,
    };
  }
  return {
    label: "Web App",
    isDual: false,
    icon: <Laptop className={`w-4 h-4 stroke-[2.2] ${theme.iconColor}`} />,
  };
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 14,
    },
  },
};

function ProjectCard({ project, theme, icon, isDual = false, badgeLabel, links }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = (project.description?.length || 0) > 130;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className={`group relative bg-white/95 backdrop-blur-md rounded-2xl shadow-sm border border-slate-200/80
                 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full ${theme.borderHover}`}
    >
      {/* Top gradient accent bar */}
      <div className="relative h-[3px] w-full overflow-hidden">
        <div className={`h-full w-full bg-gradient-to-r ${theme.bar} opacity-85 group-hover:opacity-100 transition-opacity`} />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent
                     -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        />
      </div>

      {/* Subtle hover surface wash */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${theme.surfaceHover} opacity-0 group-hover:opacity-100
                   transition-opacity duration-500 pointer-events-none`}
      />

      {/* Soft ambient corner glow */}
      <div
        className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${theme.glow}
                   rounded-full blur-2xl opacity-45 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Subtle top-right dot pattern */}
      <div
        className="absolute top-2 right-2 w-14 h-14 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "6px 6px",
        }}
      />

      <div className="flex flex-col flex-1 p-4 relative z-10">
        {/* Compact Header: Device Icon Badge + Title + Platform Badge */}
        <div className="flex items-start gap-2.5 mb-2.5">
          <div
            className={`shrink-0 ${isDual ? "px-2.5" : "w-9"} h-9 rounded-xl bg-gradient-to-br ${theme.iconBg}
                       ring-1 flex items-center justify-center shadow-sm
                       group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-300`}
          >
            {icon}
          </div>

          <div className="min-w-0 flex-1">
            <h3
              className={`text-sm sm:text-[15px] font-bold text-slate-800 leading-snug truncate
                         group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r
                         ${theme.titleHover} transition-all duration-300`}
              title={project.title}
            >
              {project.title}
            </h3>

            {badgeLabel && (
              <span
                className={`inline-flex items-center gap-1.5 mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide border ${theme.badge}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                {badgeLabel}
              </span>
            )}
          </div>
        </div>

        {/* Compact Description */}
        <div className="mb-3 flex-grow">
          <p
            className={`text-slate-600 text-xs leading-[1.6] ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            {project.description}
          </p>
          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className={`mt-1 text-[11px] font-semibold transition-colors ${theme.toggle}`}
            >
              {expanded ? "Show less" : "Read more..."}
            </button>
          )}
        </div>

        {/* Stylish Action Pills */}
        <div className="pt-2.5 mt-auto border-t border-slate-100/90 flex flex-wrap items-center gap-1.5">
          {links.length > 0 ? (
            links.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -1.5, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className={`group/btn ${link.className} px-2.5 py-1 rounded-full font-semibold text-[11px]
                           shadow-sm hover:shadow-md ring-1 ring-inset ring-white/15
                           transition-all duration-200 inline-flex items-center gap-1.5`}
              >
                {link.icon}
                <span>{link.label}</span>
                <ArrowUpRight className="w-3 h-3 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </motion.a>
            ))
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 italic py-0.5">
              <Sparkles className="w-3 h-3" />
              No links available
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const academicProjects = [
    {
      title: "Health Insurance Price Prediction",
      period: "2022-2023",
      icon: FaLaptopCode,
      description:
        "Built an advanced Machine Learning model to predict health insurance premiums accurately based on demographic and health factors.",
      github:
        "https://github.com/Dhirajpatil7721/College_Projects/blob/main/Health%20Insurence%20Price%20Prediction.zip",
    },
    {
      title: "Shivaji University Research Portal",
      period: "2022-2023",
      icon: FaBook,
      description:
        "Developed a platform to access academic research papers, books, and university resources seamlessly.",
      github:
        "https://github.com/Dhirajpatil7721/College_Projects/blob/main/Text%20to%20SQL%20LLM%20App%20main.zip",
    },
    {
      title: "Online News Portal",
      period: "2021-2022",
      icon: FaNewspaper,
      description:
        "Created a modern news platform offering real-time updates across multiple categories with clean navigation.",
      github:
        "https://github.com/Dhirajpatil7721/College_Projects/blob/main/Online%20News%20Portal.zip",
    },
  ];

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/project`);
        setProjects(response.data.data || []);
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [API_BASE_URL]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-white to-slate-50 pt-16 pb-12 sm:pt-[76px] sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Client Projects Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-3 sm:mb-4 relative"
        >
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

          <h2 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 mb-2 px-2">
            Projects
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full mb-3"
          />

          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
            Professional projects developed for clients 
          </p>
        </motion.div>

        {/* Client Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-600" />
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-14"
          >
            {[...projects].reverse().map((project, index) => {
              const theme = cardThemes[index % cardThemes.length];
              const meta = getProjectMeta(project, theme);
              const links = [
                isValidUrl(project.git) && {
                  label: "GitHub",
                  url: project.git,
                  icon: <FaGithub className="text-xs" />,
                  className: "bg-slate-800 hover:bg-slate-900 text-white",
                },
                isValidUrl(project.host) && {
                  label: "Live Demo",
                  url: project.host,
                  icon: <Globe className="w-3 h-3" />,
                  className: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white",
                },
                isValidUrl(project.android) && {
                  label: "Android",
                  url: project.android,
                  icon: <FaAndroid className="text-xs" />,
                  className: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white",
                },
                isValidUrl(project.ios) && {
                  label: "iOS",
                  url: project.ios,
                  icon: <FaApple className="text-xs" />,
                  className: "bg-gradient-to-r from-slate-700 to-slate-900 text-white",
                },
              ].filter(Boolean);

              return (
                <ProjectCard
                  key={project._id || project.title || index}
                  project={project}
                  theme={theme}
                  icon={meta.icon}
                  isDual={meta.isDual}
                  badgeLabel={meta.label}
                  links={links}
                />
              );
            })}
          </motion.div>
        )}

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-[80%] sm:w-[70%] md:w-[60%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent my-10 sm:my-14 relative overflow-hidden"
        >
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />
        </motion.div>

        {/* Academic Projects Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-3 sm:mb-4 mt-2 relative"
        >
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

          <h2 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2 px-2">
            Academic Projects
          </h2>

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16"
        >
          {academicProjects.map((project, index) => {
            const theme = cardThemes[(index + 1) % cardThemes.length];
            const IconComponent = project.icon || FaCode;
            const links = isValidUrl(project.github)
              ? [
                  {
                    label: "View on GitHub",
                    url: project.github,
                    icon: <FaGithub className="text-xs" />,
                    className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
                  },
                ]
              : [];

            return (
              <ProjectCard
                key={project.title}
                project={project}
                theme={theme}
                icon={<IconComponent className={`text-base ${theme.iconColor}`} />}
                badgeLabel={project.period}
                links={links}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}