// import { FaLaptopCode, FaTools, FaLightbulb, FaProjectDiagram, FaUserFriends, FaRocket, FaGraduationCap } from "react-icons/fa";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";


// export default function AboutMe() {
//   const refEdu = useRef(null);
//   const refFeatures = useRef(null);

//   const isInViewEdu = useInView(refEdu, { triggerOnce: false });
//   const isInViewFeatures = useInView(refFeatures, { triggerOnce: false });
//   const edus = [
//     {
//       degree: "Master in Computer Application (MCA)",
//       year: "2022-2024",
//       university: "Shivaji University, Kolhapur",
//       percentage: "CGPA 8.28"
//     },
//     {
//       degree: "Bachelor of Computer Science (BCS)",
//       year: "2019-2022",
//       university: "The New College, Shivaji University, Kolhapur",
//       percentage: "CGPA 8.75"
//     }
//   ];

//   return (
//     <section id="about" className="bg-white text-gray-900 py-12 px-4  mt-10   sm:px-6 lg:px-12">
//       <div className="container mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl sm:text-4xl font-bold mb-6"
//         >
//           About Me
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4"
//         >
//           I am <span className="text-blue-500 font-semibold">Dhiraj Patil</span>, a passionate <span className="text-blue-600">MERN Stack Developer</span> dedicated to exploring
//           new technologies and building impactful applications. With a strong foundation in <span className="text-green-600">React.js ,Express.js ,Node.js ,MongoDB 
//             and Web Development</span>, I thrive on solving challenges and crafting efficient, scalable, and user-friendly solutions.
//           My goal is to create high-performance applications that enhance user experiences and drive innovation.
//         </motion.p>

//         {/* Education Section */}
//         <div ref={refEdu} className="flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center mt-8">
//           {edus.map((edu, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInViewEdu ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="flex flex-col gap-2 max-w-md w-full bg-white p-5 rounded-md shadow-md hover:scale-105 hover:duration-150 duration-150 mx-2 sm:mx-0"
//             >
//               <div className="flex flex-row justify-between w-full">
//                 <p className="text-xs">{edu.year}</p>
//               </div>

//               <div className="flex flex-row justify-between w-full">
//                 <h3 className="text-lg sm:text-xl font-bold">{edu.degree}</h3>
//                 <div className="text-xs">
//                   <div className="flex flex-row">
//                     {[...Array(4)].map((_, i) => (
//                       <svg
//                         key={i}
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4 text-yellow-400"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
//                         ></path>
//                       </svg>
//                     ))}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-yellow-200"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
//                       ></path>
//                     </svg>
//                   </div>
//                 </div>
//               </div>

//               <div className="text-sm">
//                 <span>{edu.university}</span> <span className="font-bold" >{edu.percentage}</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
        
//         {/* Features Section */}
//         <div ref={refFeatures} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-10 mb-10 px-4 sm:px-0">
//           {[
//             { icon: FaLaptopCode, title: "Full-Stack Development", color: "text-blue-600", desc: "Proficient in both frontend & backend development, creating seamless and responsive user experiences." },
//             { icon: FaTools, title: "Problem-Solving", color: "text-green-600", desc: "Passionate about tackling complex challenges, optimizing performance, and writing clean, efficient code." },
//             { icon: FaLightbulb, title: "Continuous Learning", color: "text-yellow-600", desc: "Always eager to learn new technologies, frameworks, and best practices to stay ahead in the industry." },
//             { icon: FaProjectDiagram, title: "Project Management", color: "text-purple-600", desc: "Experienced in handling end-to-end project development, from planning to deployment." },
//             { icon: FaUserFriends, title: "Team Collaboration", color: "text-red-600", desc: "Strong communication and teamwork skills, ensuring smooth collaboration in development projects." },
//             { icon: FaRocket, title: "Innovation & Growth", color: "text-teal-600", desc: "Passionate about building impactful solutions that drive growth and innovation in the tech industry." }
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInViewFeatures ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="flex flex-col items-center p-4 sm:p-6 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition-transform mx-2 sm:mx-0"
//             >
//               {<feature.icon className={`text-3xl sm:text-4xl ${feature.color} mb-3 sm:mb-4`} />}
//               <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">{feature.title}</h3>
//               <p className="text-gray-700 text-xs sm:text-sm text-center">{feature.desc}</p>
//             </motion.div>
//           ))}
//         </div>

       
//       </div>
//     </section>
//   );
// }


import { FaLaptopCode, FaTools, FaLightbulb, FaProjectDiagram, FaUserFriends, FaRocket, FaGraduationCap, FaStar, FaCalendarAlt, FaUniversity } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, ArrowRight, Award, BookOpen, Code, Users, Target, Zap, Heart, Coffee } from "lucide-react";

export default function AboutMe() {
  const refEdu = useRef(null);
  const refFeatures = useRef(null);
  const refTitle = useRef(null);

  const isInViewEdu = useInView(refEdu, { triggerOnce: false, margin: "-100px" });
  const isInViewFeatures = useInView(refFeatures, { triggerOnce: false, margin: "-100px" });
  const isInViewTitle = useInView(refTitle, { triggerOnce: false, margin: "-100px" });

  const edus = [
    {
      degree: "Master in Computer Application (MCA)",
      year: "2022-2024",
      university: "Shivaji University, Kolhapur",
      percentage: "CGPA 8.28",
      achievements: ["Advanced Web Development", "Database Management", "Cloud Computing"]
    },
    {
      degree: "Bachelor of Computer Science (BCS)",
      year: "2019-2022",
      university: "The New College, Shivaji University, Kolhapur",
      percentage: "CGPA 8.75",
      achievements: ["Programming Fundamentals", "Data Structures", "Software Engineering"]
    }
  ];

  const features = [
    { 
      icon: FaLaptopCode, 
      title: "Full-Stack Development", 
      color: "from-blue-500 to-cyan-500", 
      desc: "Proficient in both frontend & backend development, creating seamless and responsive user experiences.",
      bgColor: "bg-blue-50"
    },
    { 
      icon: FaTools, 
      title: "Problem-Solving", 
      color: "from-green-500 to-emerald-500", 
      desc: "Passionate about tackling complex challenges, optimizing performance, and writing clean, efficient code.",
      bgColor: "bg-green-50"
    },
    { 
      icon: FaLightbulb, 
      title: "Continuous Learning", 
      color: "from-yellow-500 to-amber-500", 
      desc: "Always eager to learn new technologies, frameworks, and best practices to stay ahead in the industry.",
      bgColor: "bg-yellow-50"
    },
    { 
      icon: FaProjectDiagram, 
      title: "Project Management", 
      color: "from-purple-500 to-pink-500", 
      desc: "Experienced in handling end-to-end project development, from planning to deployment.",
      bgColor: "bg-purple-50"
    },
    { 
      icon: FaUserFriends, 
      title: "Team Collaboration", 
      color: "from-red-500 to-rose-500", 
      desc: "Strong communication and teamwork skills, ensuring smooth collaboration in development projects.",
      bgColor: "bg-red-50"
    },
    { 
      icon: FaRocket, 
      title: "Innovation & Growth", 
      color: "from-teal-500 to-cyan-500", 
      desc: "Passionate about building impactful solutions that drive growth and innovation in the tech industry.",
      bgColor: "bg-teal-50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="bg-gradient-to-b from-white to-slate-50 text-gray-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title with enhanced styling */}
        <motion.div
          ref={refTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={isInViewTitle ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="relative mb-8 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInViewTitle ? { width: "100px" } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
          />
          
          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-8 -left-8 w-16 h-16 border border-cyan-200/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-8 -right-8 w-24 h-24 border border-purple-200/30 rounded-full"
          />
        </motion.div>

        {/* Description paragraph with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInViewTitle ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto px-4 mb-16"
        >
          <div className="relative">
            {/* Quote marks */}
            <span className="absolute -top-4 -left-2 text-6xl text-cyan-200/30 font-serif">"</span>
            <span className="absolute -bottom-12 -right-2 text-6xl text-purple-200/30 font-serif">"</span>
            
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-700">
              I am <span className="text-cyan-600 font-semibold relative group">
                Dhiraj Patil
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </span>, a passionate <span className="text-blue-600 font-semibold relative group">
                MERN Stack Developer
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </span> dedicated to exploring
              new technologies and building impactful applications. With a strong foundation in <span className="text-emerald-600 font-semibold relative group">
                React.js, Express.js, Node.js, MongoDB and Web Development
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </span>, I thrive on solving challenges and crafting efficient, scalable, and user-friendly solutions.
              My goal is to create high-performance applications that enhance user experiences and drive innovation.
            </p>
          </div>
          
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInViewTitle ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-6"
          />
        </motion.div>

        {/* Education Section */}
        <div ref={refEdu} className="mb-16 sm:mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-10"
          >
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Education
            </span>
          </motion.h3>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-stretch">
            {edus.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={isInViewEdu ? { opacity: 1, x: 0 } : { opacity: 0, x: index === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative flex-1 max-w-md"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="relative h-full bg-white rounded-2xl p-6 shadow-xl border border-slate-200
                              hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2
                              transition-all duration-500 overflow-hidden">
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-bl-full"></div>
                  
                  {/* Header with icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white shadow-lg">
                        <FaGraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 flex items-center gap-1">
                          <FaCalendarAlt className="w-3 h-3" />
                          {edu.year}
                        </p>
                      </div>
                    </div>
                    
                    {/* Rating stars */}
                    <div className="flex gap-0.5">
                      {[...Array(4)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                      <FaStar className="w-4 h-4 text-yellow-200" />
                    </div>
                  </div>

                  {/* Degree and University */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex items-start gap-2 mb-3">
                    <FaUniversity className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-slate-600">{edu.university}</p>
                  </div>

                  {/* Percentage with progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-slate-500">Achievement</span>
                      <span className="text-sm font-bold text-blue-600">{edu.percentage}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInViewEdu ? { width: edu.percentage === "CGPA 8.28" ? "83%" : "88%" } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-700 mb-2">Key Achievements:</p>
                    {edu.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInViewEdu ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.7 + i * 0.1 + index * 0.2 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                        <span className="text-xs text-slate-600">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div ref={refFeatures}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-10"
          >
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              What I Bring to the Table
            </span>
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInViewFeatures ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="relative h-full bg-white rounded-2xl p-6 shadow-xl border border-slate-200
                              hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  
                  {/* Background pattern */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${feature.bgColor} rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                  
                  {/* Icon with gradient */}
                  <div className="relative z-10 mb-4">
                    <div className={`inline-block p-4 bg-gradient-to-r ${feature.color} rounded-2xl text-white shadow-lg
                                    group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-slate-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating dots */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <div className="absolute bottom-6 right-6 w-1 h-1 bg-purple-400 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}