// import { FaCode, FaTools, FaLaptopCode, FaDatabase } from "react-icons/fa";
// import { motion } from "framer-motion";
// import html from '../assets/html.png';
// import css from '../assets/css.png';
// import tailwind from '../assets/tailwind.png';
// import javascript from '../assets/javascript.png';
// import react from '../assets/react.png';
// import github from '../assets/Github.png';
// import mongo from '../assets/mongo.png';
// import express from '../assets/express.png';
// import node from '../assets/node.png';
// import aws from '../assets/AWS.png';



// export default function Skills() {

//   const skillsData = [
//     {
//       category: "Programming Languages",
//       icon: <FaCode className="text-4xl md:text-5xl text-blue-600" />,
//       skills: [ "React.js","Node.js", "JavaScript",  "Express.js", "HTML", "CSS", "Tailwind"],
//       description: "Proficient in modern programming languages, ensuring clean and efficient code.",
//     },
//     {
//       category: "Databases & Backend",
//       icon: <FaDatabase className="text-4xl md:text-5xl text-red-600" />,
//       skills: ["MongoDB", "SQL",  "SQL Server"],
//       description: "Expertise in relational and NoSQL databases, optimized for performance and security.",
//     },
//     {
//       category: "Web Development",
//       icon: <FaLaptopCode className="text-4xl md:text-5xl text-yellow-600" />,
//       skills: ["MERN ","Frontend & Backend", "API Integration", "GraphQL"],
//       description: "Developing responsive and efficient web applications with seamless user experiences.",
//     },
//     {
//       category: "Technologies & Tools",
//       icon: <FaTools className="text-4xl md:text-5xl text-green-600" />,
//       skills: ["AWS", "Docker", "Git", "GoDaddy", "Visual Studio"],
//       description: "Familiar with cloud computing, DevOps tools, and version control for scalable applications.",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3
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
//     }
//   };

//   const tagVariants = {
//     hover: {
//       scale: 1.05,
//       backgroundColor: "#3b82f6",
//       color: "#ffffff",
//       transition: { duration: 0.2 }
//     }
//   };

//   return (
//     <section id="skills" className="bg-white py-16 px-4 mt-5 sm:px-6 lg:px-8 xl:px-12">
//       <div className="max-w-7xl mx-auto">
//         {/* Header with Gradient Text */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-2 md:mb-3">
//             My Skills
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
//             Technologies and tools I work with to create exceptional digital experiences
//           </p>
//         </motion.div>

//         {/* Skills Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
//         >
//           {skillsData.map((skill, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//               className="bg-white p-5 sm:p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 h-full"
//             >
//               <div className="flex flex-col h-full">
//                 {/* Icon and Category */}
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="flex flex-col items-center mb-4"
//                 >
//                   <motion.div
//                     whileHover={{ rotate: 10, scale: 1.1 }}
//                     className="p-3 bg-blue-50 rounded-full mb-3"
//                   >
//                     {skill.icon}
//                   </motion.div>
//                   <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
//                     {skill.category}
//                   </h3>
//                 </motion.div>

//                 {/* Description */}
//                 <motion.p
//                   className="text-gray-600 text-xs sm:text-sm mb-5 text-center flex-grow"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   {skill.description}
//                 </motion.p>

//                 {/* Skills Tags */}
//                 <motion.div
//                   className="flex flex-wrap justify-center gap-2"
//                   layout
//                 >
//                   {skill.skills.map((item, i) => (
//                     <motion.span
//                       key={i}
//                       variants={tagVariants}
//                       whileHover="hover"
//                       className="inline-block px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium transition-colors"
//                     >
//                       {item}
//                     </motion.span>
//                   ))}
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//           <div className="max-w-4xl mx-auto">
//                 {/* Decorative divider - Enhanced */}
//                 <motion.div
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   viewport={{ once: true }}
//                   className="w-[90%] sm:w-[80%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-purple-400 via-cyan-400 to-transparent mb-12
//                       relative overflow-hidden"
//                 >
//                   {/* Animated shimmer effect */}
//                   <motion.div
//                     animate={{ x: ['-100%', '100%'] }}
//                     transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
//                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
//                   />
//                 </motion.div>
        
//                 {/* Section title - Enhanced */}
//                 <motion.h3
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   className="text-2xl sm:text-3xl font-bold text-center mb-10 relative"
//                 >
//                   <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
//                     Technologies I Work With
//                   </span>
//                   {/* Animated underline */}
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: '60px' }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.3, duration: 0.6 }}
//                     className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-2 rounded-full"
//                   />
//                 </motion.h3>
        
//                 {/* First row of tech icons - Enhanced */}
//                 <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 md:gap-8 mb-8">
//                   {[react, node, mongo, express, javascript].map((img, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: index * 0.1 }}
//                       whileHover={{ scale: 1.2, rotate: 5 }}
//                       className="group relative flex justify-center items-center p-4 rounded-2xl
//                            hover:bg-gradient-to-br from-cyan-50 to-transparent
//                            transition-all duration-300 cursor-pointer"
//                     >
//                       {/* Glow effect on hover */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full 
//                               blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 
//                               group-hover:scale-150"></div>
        
//                       {/* Tooltip on hover */}
//                       <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 
//                                bg-slate-800 text-white text-xs px-2 py-1 rounded
//                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
//                                whitespace-nowrap pointer-events-none">
//                         {img === react ? 'React.js' :
//                           img === node ? 'Node.js' :
//                             img === mongo ? 'MongoDB' :
//                               img === express ? 'Express.js' : 'JavaScript'}
//                       </span>
        
//                       {/* Icon with enhanced effects */}
//                       <img
//                         className="w-10 sm:w-12 md:w-16 lg:w-20 relative z-10 
//                              grayscale group-hover:grayscale-0 
//                              drop-shadow-lg group-hover:drop-shadow-2xl
//                              transition-all duration-500 ease-out
//                              group-hover:scale-110"
//                         src={img}
//                         alt="Tech logo"
//                       />
        
//                       {/* Floating particles on hover */}
//                       <motion.div
//                         animate={{}}
//                         whileHover={{
//                           boxShadow: [
//                             '0 0 0 0px rgba(34,211,238,0)',
//                             '0 0 0 10px rgba(34,211,238,0.1)',
//                             '0 0 0 20px rgba(34,211,238,0)'
//                           ]
//                         }}
//                         transition={{ duration: 1, repeat: Infinity }}
//                         className="absolute inset-0 rounded-full"
//                       />
//                     </motion.div>
//                   ))}
//                 </div>
        
//                 {/* Second row of tech icons - Enhanced */}
//                 <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 md:gap-8">
//                   {[tailwind, html, css, aws, github].map((img, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: (index + 5) * 0.1 }}
//                       whileHover={{ scale: 1.2, rotate: -5 }}
//                       className="group relative flex justify-center items-center p-4 rounded-2xl
//                            hover:bg-gradient-to-br from-purple-50 to-transparent
//                            transition-all duration-300 cursor-pointer"
//                     >
//                       {/* Glow effect on hover */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full 
//                               blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 
//                               group-hover:scale-150"></div>
        
//                       {/* Tooltip on hover */}
//                       <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 
//                                bg-slate-800 text-white text-xs px-2 py-1 rounded
//                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
//                                whitespace-nowrap pointer-events-none">
//                         {img === tailwind ? 'Tailwind CSS' :
//                           img === html ? 'HTML5' :
//                             img === css ? 'CSS3' :
//                               img === aws ? 'AWS' : 'GitHub'}
//                       </span>
        
//                       {/* Icon with enhanced effects */}
//                       <img
//                         className="w-10 sm:w-12 md:w-16 lg:w-20 relative z-10 
//                              grayscale group-hover:grayscale-0 
//                              drop-shadow-lg group-hover:drop-shadow-2xl
//                              transition-all duration-500 ease-out
//                              group-hover:scale-110"
//                         src={img}
//                         alt="Tech logo"
//                       />
        
//                       {/* Bounce animation on hover */}
//                       <motion.div
//                         animate={{}}
//                         whileHover={{ y: [0, -5, 0] }}
//                         transition={{ duration: 0.5, repeat: Infinity }}
//                         className="absolute -bottom-1 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
//                       />
//                     </motion.div>
//                   ))}
//                 </div>
        
//                 {/* Tech stack description - Enhanced */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.5 }}
//                   className="text-center mt-12"
//                 >
//                   <p className="text-slate-500 text-sm relative inline-block mb-2">
//                     Continuously expanding my toolkit with modern technologies
        
//                     {/* Animated dots */}
//                     <span className="absolute -right-6 bottom-0 flex space-x-1">
//                       <motion.span
//                         animate={{ scale: [1, 1.2, 1] }}
//                         transition={{ duration: 1, repeat: Infinity, delay: 0 }}
//                         className="w-1 h-1 bg-cyan-400 rounded-full"
//                       />
//                       <motion.span
//                         animate={{ scale: [1, 1.2, 1] }}
//                         transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
//                         className="w-1 h-1 bg-purple-400 rounded-full"
//                       />
//                       <motion.span
//                         animate={{ scale: [1, 1.2, 1] }}
//                         transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
//                         className="w-1 h-1 bg-pink-400 rounded-full"
//                       />
//                     </span>
//                   </p>
        
//                   {/* Interactive hint */}
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ delay: 0.8 }}
//                     className="text-xs text-slate-400 mt-2"
//                   >
//                   </motion.p>
//                 </motion.div>
//               </div>
//       </div>
//     </section>
//   );
// }




import { FaCode, FaTools, FaLaptopCode, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";
import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwind from '../assets/tailwind.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import github from '../assets/Github.png';
import mongo from '../assets/Mongo.png';
import aws from '../assets/AWS.png';
import express from '../assets/express.png';
import node from '../assets/node.png';

export default function Skills() {

  const skillsData = [
    {
      category: "Programming Languages",
      icon: <FaCode className="text-4xl md:text-5xl text-blue-600" />,
      skills: [ "React.js","Node.js", "JavaScript",  "Express.js", "HTML", "CSS", "Tailwind"],
      description: "Proficient in modern programming languages, ensuring clean and efficient code.",
    },
    {
      category: "Databases & Backend",
      icon: <FaDatabase className="text-4xl md:text-5xl text-red-600" />,
      skills: ["MongoDB", "SQL",  "SQL Server"],
      description: "Expertise in relational and NoSQL databases, optimized for performance and security.",
    },
    {
      category: "Web Development",
      icon: <FaLaptopCode className="text-4xl md:text-5xl text-yellow-600" />,
      skills: ["MERN ","Frontend & Backend", "API Integration", "GraphQL"],
      description: "Developing responsive and efficient web applications with seamless user experiences.",
    },
    {
      category: "Technologies & Tools",
      icon: <FaTools className="text-4xl md:text-5xl text-green-600" />,
      skills: ["AWS", "Docker", "Git", "GoDaddy", "Visual Studio"],
      description: "Familiar with cloud computing, DevOps tools, and version control for scalable applications.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
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

  const tagVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#3b82f6",
      color: "#ffffff",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="skills" className="bg-gradient-to-b from-white to-slate-50 py-16 px-4 mt-5 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with Gradient Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 relative"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -left-10 w-20 h-20 border border-cyan-200/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -right-10 w-32 h-32 border border-purple-200/30 rounded-full"
          />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 mb-2 md:mb-3">
            My Skills
          </h2>
          
          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-3"
          />
          
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto relative">
            Technologies and tools I work with to create exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white p-6 sm:p-7 rounded-2xl shadow-xl border border-slate-200 
                         hover:shadow-2xl hover:border-blue-300 transition-all duration-500 h-full
                         overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 
                            rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex flex-col h-full relative z-10">
                {/* Icon and Category */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center mb-4"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl mb-3
                              shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 text-center
                                 group-hover:text-transparent group-hover:bg-clip-text 
                                 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600
                                 transition-all duration-300">
                    {skill.category}
                  </h3>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-slate-600 text-xs sm:text-sm mb-5 text-center flex-grow
                            group-hover:text-slate-700 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {skill.description}
                </motion.p>

                {/* Skills Tags */}
                <motion.div
                  className="flex flex-wrap justify-center gap-2"
                  layout
                >
                  {skill.skills.map((item, i) => (
                    <motion.span
                      key={i}
                      variants={tagVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-3 py-1.5 bg-slate-100 text-slate-700 
                               rounded-full text-xs sm:text-sm font-medium
                               hover:shadow-md hover:shadow-blue-500/30
                               transition-all duration-300 cursor-default
                               border border-slate-200 hover:border-blue-400"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Floating glow effect */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-400 rounded-full 
                            opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Section */}
        <div className="max-w-5xl mx-auto px-4">
          {/* Decorative divider - Enhanced */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-[80%] sm:w-[70%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-purple-400 via-cyan-400 to-transparent mb-16
                      relative overflow-hidden"
          >
            {/* Animated shimmer effect */}
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </motion.div>

          {/* Section title - Enhanced */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 relative"
          >
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Technologies I Work With
            </span>
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-3 rounded-full"
            />
          </motion.h3>

          {/* First row of tech icons - Enhanced */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 md:gap-12 lg:gap-16 mb-12">
            {[react, node, mongo, express, javascript].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.25, rotate: 8 }}
                className="group relative flex justify-center items-center p-5 rounded-2xl
                         hover:bg-gradient-to-br from-cyan-50 to-transparent
                         transition-all duration-300 cursor-pointer"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full 
                              blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 
                              group-hover:scale-150"></div>
                
                {/* Tooltip on hover */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                               bg-slate-800 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300
                               whitespace-nowrap pointer-events-none shadow-lg z-20">
                  {img === react ? 'React.js' :
                    img === node ? 'Node.js' :
                      img === mongo ? 'MongoDB' :
                        img === express ? 'Express.js' : 'JavaScript'}
                </span>
                
                {/* Icon with enhanced effects */}
                <img
                  className="w-12 sm:w-16 md:w-20 lg:w-24 relative z-10 
                           grayscale group-hover:grayscale-0 
                           drop-shadow-lg group-hover:drop-shadow-2xl
                           transition-all duration-500 ease-out
                           group-hover:scale-110"
                  src={img}
                  alt="Tech logo"
                />
                
                {/* Floating particles on hover */}
                <motion.div
                  animate={{}}
                  whileHover={{
                    boxShadow: [
                      '0 0 0 0px rgba(34,211,238,0)',
                      '0 0 0 15px rgba(34,211,238,0.1)',
                      '0 0 0 30px rgba(34,211,238,0)'
                    ]
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute inset-0 rounded-full"
                />
              </motion.div>
            ))}
          </div>

          {/* Second row of tech icons - Enhanced */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
            {[tailwind, html, css, aws, github].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 5) * 0.1 }}
                whileHover={{ scale: 1.25, rotate: -8 }}
                className="group relative flex justify-center items-center p-5 rounded-2xl
                         hover:bg-gradient-to-br from-purple-50 to-transparent
                         transition-all duration-300 cursor-pointer"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full 
                              blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 
                              group-hover:scale-150"></div>
                
                {/* Tooltip on hover */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                               bg-slate-800 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300
                               whitespace-nowrap pointer-events-none shadow-lg z-20">
                  {img === tailwind ? 'Tailwind CSS' :
                    img === html ? 'HTML5' :
                      img === css ? 'CSS3' :
                        img === aws ? 'AWS' : 'GitHub'}
                </span>
                
                {/* Icon with enhanced effects */}
                <img
                  className="w-12 sm:w-16 md:w-20 lg:w-24 relative z-10 
                           grayscale group-hover:grayscale-0 
                           drop-shadow-lg group-hover:drop-shadow-2xl
                           transition-all duration-500 ease-out
                           group-hover:scale-110"
                  src={img}
                  alt="Tech logo"
                />
                
                {/* Bounce animation on hover */}
                <motion.div
                  animate={{}}
                  whileHover={{ y: [0, -8, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="absolute -bottom-2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>

          {/* Tech stack description - Enhanced */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-slate-500 text-base relative inline-block">
              Continuously expanding my toolkit with modern technologies
              
              {/* Animated dots */}
              <span className="absolute -right-8 bottom-0 flex space-x-2">
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                  className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                />
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  className="w-1.5 h-1.5 bg-purple-400 rounded-full"
                />
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  className="w-1.5 h-1.5 bg-pink-400 rounded-full"
                />
              </span>
            </p>
            
          
          </motion.div>
        </div>
      </div>
    </section>
  );
}