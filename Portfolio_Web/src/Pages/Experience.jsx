// import axios from "axios";
// import { motion } from "framer-motion";
// import { Briefcase, Laptop, GraduationCap } from 'lucide-react';
// import { useEffect, useState } from "react";


// export default function Experience() {
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
//   const [workExperiences, setWorkExperiences] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchExperience = async () => {
//       try {
//         // const response = await axios.get("http://localhost:5000/api/experience");
//         const response = await axios.get(`${API_BASE_URL}/experience`);
//         console.log("API response:", response.data);

//         // Ensure to access the 'data' field from the response
//         if (response.data.success && Array.isArray(response.data.data)) {
//           setWorkExperiences(response.data.data); // Set the array of experiences
//         } else {
//           console.error("Unexpected data format", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching experience:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExperience();
//   }, );




//   return (
//     <section id="experience" className="bg-white mt-5 py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-5"
//         >
//           <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
//             Professional Journey
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             My career path, learning experiences, and professional growth
//           </p>
//         </motion.div>

//         {/* Experience Timeline */}
//         <div className="space-y-16">
//           {/* Work Experience */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             <div className="flex items-start">
//               <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg mr-6 mt-1 flex-shrink-0">
//                 <Briefcase className="h-6 w-6 text-white" />
//               </div>
//               <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full hover:shadow-xl transition-shadow duration-300">
//                 <div className="flex items-center mb-4">
//                   <div className="sm:hidden flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg mr-4">
//                     <Briefcase className="h-5 w-5 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-800">
//                     <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
//                       Work Experience
//                     </span>
//                   </h3>
//                 </div>

//                 <div className="space-y-6 pl-2 sm:pl-0">
//                   {/* {loading ? (
//                     <p>Loading...</p>
//                   ) : (
//                     workExperiences.map.((exp, idx) => (
//                       <div key={idx} className="border-l-4 border-emerald-400 pl-4 py-1">
//                         <h4 className="text-xl font-bold text-gray-800">{exp.company}</h4>
//                         <p className="text-emerald-600 text-sm font-semibold">{exp.position}</p>

//                         <p className="text-gray-600 text-sm italic mb-2">{exp.startDate} – {exp.endDate} <span className="text-gray-500 text-sm">     {exp.exp}  </span></p>
//                         <p className="text-gray-700 text-sm">{exp.description}</p>
//                       </div>
//                     ))
//                   )} */}
// {loading ? (
//   <p>Loading...</p>
// ) : (
//   [...workExperiences]  
//     .reverse()         
//     .map((exp, idx) => (
//       <div
//         key={idx}
//         className="border-l-4 border-emerald-400 pl-4 py-1"
//       >
//         <h4 className="text-xl font-bold text-gray-800">
//           {exp.company}
//         </h4>

//         <p className="text-emerald-600 text-sm font-semibold">
//           {exp.position}
//         </p>

//         <p className="text-gray-600 text-sm italic mb-2">
//           {exp.startDate} – {exp.endDate}
//           <span className="text-gray-500 text-sm ml-2">
//             {exp.exp}
//           </span>
//         </p>

//         <p className="text-gray-700 text-sm">
//           {exp.description}
//         </p>
//       </div>
//     ))
// )}

//                   {/* <div className="border-l-4 border-emerald-400 pl-4 py-1">
//                     <h4 className="text-xl font-semibold text-gray-800">Einfratech Systems, Bengaluru</h4>
//                     <p className="text-emerald-600 mb-2 text-sm font-medium">3 months</p>
//                     <p className="text-gray-600">React Developer - Developed responsive UIs and integrated REST APIs</p>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Internships */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             <div className="flex items-start">
//               <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg mr-6 mt-1 flex-shrink-0">
//                 <Laptop className="h-6 w-6 text-white" />
//               </div>
//               <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full hover:shadow-xl transition-shadow duration-300">
//                 <div className="flex items-center mb-4">
//                   <div className="sm:hidden flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg mr-4">
//                     <Laptop className="h-5 w-5 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-800">
//                     <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">
//                       Internships
//                     </span>
//                   </h3>
//                 </div>

//                 <div className="space-y-6 pl-2 sm:pl-0">
//                   <div className="border-l-4 border-indigo-400 pl-4 py-1">
//                     <h4 className="text-xl font-semibold text-gray-800">Prodigy InfoTech</h4>
//                     <p className="text-indigo-600 mb-2 text-sm font-medium">Mar 2024 (4 weeks)</p>
//                     <p className="text-gray-600">Virtual internship focused on modern web development practices</p>
//                   </div>

//                   <div className="border-l-4 border-indigo-400 pl-4 py-1">
//                     <h4 className="text-xl font-semibold text-gray-800">Codsoft</h4>
//                     <p className="text-indigo-600 mb-2 text-sm font-medium">Feb-Mar 2024 (4 weeks)</p>
//                     <p className="text-gray-600">Hands-on experience building web applications from scratch</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Workshops & Conferences */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             <div className="flex items-start">
//               <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 shadow-lg mr-6 mt-1 flex-shrink-0">
//                 <GraduationCap className="h-6 w-6 text-white" />
//               </div>
//               <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full hover:shadow-xl transition-shadow duration-300">
//                 <div className="flex items-center mb-4">
//                   <div className="sm:hidden flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 shadow-lg mr-4">
//                     <GraduationCap className="h-5 w-5 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-800">
//                     <span className="bg-gradient-to-r from-amber-600 to-yellow-500 text-transparent bg-clip-text">
//                       Workshops & Conferences
//                     </span>
//                   </h3>
//                 </div>

//                 <div className="space-y-6 pl-2 sm:pl-0">
//                   <div className="border-l-4 border-amber-400 pl-4 py-1">
//                     <h4 className="text-xl font-semibold text-gray-800">Machine Learning Session</h4>
//                     <p className="text-amber-600 mb-2 text-sm font-medium">Dec 2023</p>
//                     <p className="text-gray-600">Insightful session with Dr. D. T. Shirke, Vice-Chancellor of Shivaji University</p>
//                   </div>

//                   <div className="border-l-4 border-amber-400 pl-4 py-1">
//                     <h4 className="text-xl font-semibold text-gray-800">ICFAST-2023</h4>
//                     <p className="text-amber-600 mb-2 text-sm font-medium">Sept 2023</p>
//                     <p className="text-gray-600">International Conference on Science & Technology with Japan Society</p>
//                   </div>

//                   <div className="border-l-4 border-amber-400 pl-4 py-1">
//                     <h4 className="text-xl font-semibold text-gray-800">Poster Presentation</h4>
//                     <p className="text-amber-600 mb-2 text-sm font-medium">Feb 2022</p>
//                     <p className="text-gray-600">Research on Fastag cashless toll payments awareness</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


import axios from "axios";
import { motion } from "framer-motion";
import { Briefcase, Laptop, GraduationCap, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import { useEffect, useState } from "react";

export default function Experience() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
  const [workExperiences, setWorkExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/experience`);
        console.log("API response:", response.data);

        if (response.data.success && Array.isArray(response.data.data)) {
          setWorkExperiences(response.data.data);
        } else {
          console.error("Unexpected data format", response.data);
        }
      } catch (error) {
        console.error("Error fetching experience:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  const internships = [
    {
      title: "Prodigy InfoTech",
      role: "Web Development Intern",
      period: "Mar 2024 (4 weeks)",
      description: "Virtual internship focused on modern web development practices",
      icon: <Laptop className="h-5 w-5" />,
      color: "from-blue-500 to-indigo-500",
      borderColor: "border-indigo-400"
    },
    {
      title: "Codsoft",
      role: "Web Development Intern",
      period: "Feb-Mar 2024 (4 weeks)",
      description: "Hands-on experience building web applications from scratch",
      icon: <Laptop className="h-5 w-5" />,
      color: "from-blue-500 to-indigo-500",
      borderColor: "border-indigo-400"
    }
  ];

  const workshops = [
    {
      title: "Machine Learning Session",
      organizer: "Dr. D. T. Shirke, Vice-Chancellor",
      period: "Dec 2023",
      description: "Insightful session on Machine Learning applications",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "from-amber-500 to-yellow-500",
      borderColor: "border-amber-400"
    },
    {
      title: "ICFAST-2023",
      organizer: "International Conference",
      period: "Sept 2023",
      description: "International Conference on Science & Technology with Japan Society",
      icon: <Award className="h-5 w-5" />,
      color: "from-amber-500 to-yellow-500",
      borderColor: "border-amber-400"
    },
    {
      title: "Poster Presentation",
      organizer: "Research Presentation",
      period: "Feb 2022",
      description: "Research on Fastag cashless toll payments awareness",
      icon: <Award className="h-5 w-5" />,
      color: "from-amber-500 to-yellow-500",
      borderColor: "border-amber-400"
    }
  ];

  return (
    <section id="experience" className="bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 relative"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -left-10 w-24 h-24 border border-blue-200/30 rounded-full hidden lg:block"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -right-10 w-32 h-32 border border-cyan-200/30 rounded-full hidden lg:block"
          />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mt-5">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent ">
              Professional Journey
            </span>
          </h2>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mx-auto rounded-full mb-4"
          />

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            My career path, learning experiences, and professional growth
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8 sm:space-y-10 lg:space-y-12"
        >
          {/* Work Experience */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              {/* Icon - Hidden on mobile, shown on tablet+ */}
              <div className="hidden sm:flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/30 mt-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="h-7 w-7 text-white" />
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 
                            hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-200 
                            transition-all duration-500 relative overflow-hidden group">
                
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500/10 to-emerald-500/10 
                              rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Mobile Icon + Title */}
                <div className="flex items-center gap-3 sm:hidden mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
                      Work Experience
                    </span>
                  </h3>
                </div>

                {/* Desktop Title */}
                <h3 className="hidden sm:block text-2xl md:text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
                    Work Experience
                  </span>
                </h3>

                {/* Experience Items */}
                <div className="space-y-4 sm:space-y-5 relative z-10">
                  {loading ? (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-2 border-green-600 border-t-transparent"></div>
                    </div>
                  ) : (
                    [...workExperiences].reverse().map((exp, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative pl-4 sm:pl-6 border-l-2 border-green-400 hover:border-green-600 
                                 transition-colors duration-300 group/item"
                      >
                        {/* Timeline dot */}
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-green-400 
                                      group-hover/item:border-green-600 group-hover/item:scale-110 transition-all duration-300"></div>
                        
                        <div className="pb-4 sm:pb-5">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                            <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 
                                         group-hover/item:text-green-600 transition-colors duration-300">
                              {exp.company}
                            </h4>
                            <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-emerald-600 bg-emerald-50 
                                           px-2 py-1 rounded-full w-fit mt-1 sm:mt-0">
                              <Calendar className="w-3 h-3" />
                              {exp.exp}
                            </span>
                          </div>
                          
                          <p className="text-emerald-600 text-xs sm:text-sm font-semibold mb-2">
                            {exp.position}
                          </p>

                          <p className="text-gray-600 text-xs sm:text-sm mb-2 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-gray-400" />
                            {exp.startDate} – {exp.endDate}
                          </p>

                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>

                {/* Floating glow */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-green-400/20 rounded-full 
                              opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>

          {/* Internships */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="hidden sm:flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30 mt-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Laptop className="h-7 w-7 text-white" />
              </div>

              <div className="flex-1 bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 
                            hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 
                            transition-all duration-500 relative overflow-hidden group">
                
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 
                              rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center gap-3 sm:hidden mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
                    <Laptop className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">
                      Internships
                    </span>
                  </h3>
                </div>

                <h3 className="hidden sm:block text-2xl md:text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">
                    Internships
                  </span>
                </h3>

                <div className="space-y-4 sm:space-y-5 relative z-10">
                  {internships.map((intern, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative pl-4 sm:pl-6 border-l-2 border-blue-400 hover:border-blue-600 
                               transition-colors duration-300 group/item"
                    >
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blue-400 
                                    group-hover/item:border-blue-600 group-hover/item:scale-110 transition-all duration-300"></div>
                      
                      <div className="pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <h4 className="text-base sm:text-lg font-bold text-slate-800 
                                       group-hover/item:text-blue-600 transition-colors duration-300">
                            {intern.title}
                          </h4>
                        </div>
                        
                        <p className="text-blue-600 text-xs sm:text-sm font-semibold mb-2">
                          {intern.role}
                        </p>

                        <p className="text-gray-600 text-xs sm:text-sm mb-2 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          {intern.period}
                        </p>

                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                          {intern.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-400/20 rounded-full 
                              opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>

          {/* Workshops & Conferences */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="hidden sm:flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 shadow-lg shadow-amber-500/30 mt-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>

              <div className="flex-1 bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 
                            hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-200 
                            transition-all duration-500 relative overflow-hidden group">
                
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 
                              rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center gap-3 sm:hidden mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 shadow-lg">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">
                    <span className="bg-gradient-to-r from-amber-600 to-yellow-500 text-transparent bg-clip-text">
                      Workshops & Conferences
                    </span>
                  </h3>
                </div>

                <h3 className="hidden sm:block text-2xl md:text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-amber-600 to-yellow-500 text-transparent bg-clip-text">
                    Workshops & Conferences
                  </span>
                </h3>

                <div className="space-y-4 sm:space-y-5 relative z-10">
                  {workshops.map((workshop, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative pl-4 sm:pl-6 border-l-2 border-amber-400 hover:border-amber-600 
                               transition-colors duration-300 group/item"
                    >
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-amber-400 
                                    group-hover/item:border-amber-600 group-hover/item:scale-110 transition-all duration-300"></div>
                      
                      <div className="pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <h4 className="text-base sm:text-lg font-bold text-slate-800 
                                       group-hover/item:text-amber-600 transition-colors duration-300">
                            {workshop.title}
                          </h4>
                        </div>
                        
                        <p className="text-amber-600 text-xs sm:text-sm font-semibold mb-2">
                          {workshop.organizer}
                        </p>

                        <p className="text-gray-600 text-xs sm:text-sm mb-2 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          {workshop.period}
                        </p>

                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                          {workshop.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-amber-400/20 rounded-full 
                              opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Hint */}
       
      </div>
    </section>
  );
}