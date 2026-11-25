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
import { Briefcase, Laptop, GraduationCap, Calendar, Clock, Award, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  calculateDuration,
  calculateTotalExperience,
  formatDisplayDate,
  normalizeWebsiteUrl,
} from "../utils/experienceUtils";

const SECTION_THEMES = {
  work: {
    bar: "from-emerald-500 via-teal-400 to-cyan-500",
    glow: "from-emerald-500/15 to-teal-500/15",
    surfaceHover: "from-emerald-50/40 via-transparent to-teal-50/30",
    borderHover: "hover:border-emerald-300/80 hover:shadow-emerald-500/10",
    iconBg: "from-emerald-500/15 to-teal-500/15 ring-emerald-300/60",
    iconColor: "text-emerald-600",
    titleGradient: "from-emerald-600 to-teal-600",
    lineGradient: "from-emerald-400 via-teal-300 to-emerald-100/20",
    nodeRing: "border-emerald-500 ring-emerald-100",
    nodeDot: "bg-emerald-500",
    itemBorderHover: "hover:border-emerald-200/90 hover:shadow-emerald-500/5",
    itemTitleHover: "group-hover/item:text-emerald-700",
    rolePill: "bg-emerald-50/90 text-emerald-700 border-emerald-200/80",
    roleDot: "bg-emerald-500",
    durationPill: "bg-teal-50/90 text-teal-700 border-teal-200/80",
    spinner: "border-emerald-600",
  },
  internship: {
    bar: "from-blue-600 via-indigo-500 to-violet-500",
    glow: "from-blue-500/15 to-indigo-500/15",
    surfaceHover: "from-blue-50/40 via-transparent to-indigo-50/30",
    borderHover: "hover:border-blue-300/80 hover:shadow-blue-500/10",
    iconBg: "from-blue-500/15 to-indigo-500/15 ring-blue-300/60",
    iconColor: "text-blue-600",
    titleGradient: "from-blue-600 to-indigo-600",
    lineGradient: "from-blue-400 via-indigo-300 to-blue-100/20",
    nodeRing: "border-blue-500 ring-blue-100",
    nodeDot: "bg-blue-500",
    itemBorderHover: "hover:border-blue-200/90 hover:shadow-blue-500/5",
    itemTitleHover: "group-hover/item:text-blue-700",
    rolePill: "bg-blue-50/90 text-blue-700 border-blue-200/80",
    roleDot: "bg-blue-500",
    durationPill: "bg-indigo-50/90 text-indigo-700 border-indigo-200/80",
    spinner: "border-blue-600",
  },
  workshop: {
    bar: "from-amber-500 via-orange-400 to-yellow-500",
    glow: "from-amber-500/15 to-orange-500/15",
    surfaceHover: "from-amber-50/40 via-transparent to-yellow-50/30",
    borderHover: "hover:border-amber-300/80 hover:shadow-amber-500/10",
    iconBg: "from-amber-500/15 to-orange-500/15 ring-amber-300/60",
    iconColor: "text-amber-600",
    titleGradient: "from-amber-600 to-orange-500",
    lineGradient: "from-amber-400 via-orange-300 to-amber-100/20",
    nodeRing: "border-amber-500 ring-amber-100",
    nodeDot: "bg-amber-500",
    itemBorderHover: "hover:border-amber-200/90 hover:shadow-amber-500/5",
    itemTitleHover: "group-hover/item:text-amber-700",
    rolePill: "bg-amber-50/90 text-amber-700 border-amber-200/80",
    roleDot: "bg-amber-500",
    durationPill: "bg-orange-50/90 text-orange-700 border-orange-200/80",
    spinner: "border-amber-600",
  },
};

/**
 * Renders a single timeline entry inside an ExperienceSectionCard.
 */
function TimelineEntryCard({
  title,
  subtitle,
  period,
  duration,
  websiteUrl,
  description,
  isCurrent = false,
  isLast = false,
  index = 0,
  theme,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`relative pl-6 sm:pl-8 ${isLast ? "" : "pb-4 sm:pb-5"} group/item`}
    >
      {/* Gradient vertical spine */}
      {!isLast && (
        <span
          aria-hidden="true"
          className={`absolute left-[7px] top-4 bottom-0 w-[2px] bg-gradient-to-b ${theme.lineGradient}`}
        />
      )}

      {/* Timeline marker node */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-3.5 w-4 h-4 rounded-full bg-white border-2 ${theme.nodeRing}
                   ring-4 flex items-center justify-center shadow-sm
                   group-hover/item:scale-110 transition-transform duration-300`}
      >
        {isCurrent ? (
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme.nodeDot} opacity-75`} />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${theme.nodeDot}`} />
          </span>
        ) : (
          <span className={`w-1.5 h-1.5 rounded-full ${theme.nodeDot}`} />
        )}
      </span>

      {/* Elevated inner entry card */}
      <div
        className={`rounded-xl bg-slate-50/70 hover:bg-white border border-slate-200/75
                   p-3.5 sm:p-4 transition-all duration-300 hover:shadow-md ${theme.itemBorderHover}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
          <div className="space-y-1.5 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h4
                className={`text-sm sm:text-base font-bold text-slate-800 transition-colors duration-300 ${theme.itemTitleHover}`}
              >
                {title}
              </h4>

              {websiteUrl && (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 border border-blue-200/80 hover:border-blue-600 px-2.5 py-0.5 rounded-full transition-all duration-200"
                  title={`Visit ${title} website`}
                >
                  <span>Website</span>
                  <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>

            {subtitle && (
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold border ${theme.rolePill}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${theme.roleDot}`} />
                {subtitle}
              </span>
            )}
          </div>

          {/* Date & duration pills */}
          <div className="flex flex-wrap items-center gap-1.5 shrink-0">
            {period && (
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-slate-600 bg-white border border-slate-200/80 px-2.5 py-0.5 rounded-full font-medium shadow-sm">
                <Calendar className="w-3 h-3 text-slate-400" />
                {period}
              </span>
            )}

            {duration && (
              <span
                className={`inline-flex items-center gap-1 text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full font-semibold border ${theme.durationPill}`}
              >
                <Clock className="w-3 h-3" />
                {duration}
              </span>
            )}
          </div>
        </div>

        {description && (
          <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

/**
 * Glass-styled section card wrapper for timeline groups on the Experience page.
 */
function ExperienceSectionCard({ title, icon: Icon, badge, theme, variants, children }) {
  return (
    <motion.div
      variants={variants}
      className={`group relative bg-white/95 backdrop-blur-md rounded-2xl shadow-sm border border-slate-200/80
                 hover:shadow-xl transition-all duration-300 overflow-hidden ${theme.borderHover}`}
    >
      {/* Top gradient shimmer accent bar */}
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

      {/* Ambient corner glow */}
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${theme.glow}
                   rounded-full blur-2xl opacity-45 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Subtle top-right dot matrix */}
      <div
        className="absolute top-3 right-3 w-16 h-16 opacity-[0.06] group-hover:opacity-[0.11] transition-opacity pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "6px 6px",
        }}
      />

      <div className="relative z-10 p-4 sm:p-6">
        {/* Integrated section header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${theme.iconBg} ring-1
                         flex items-center justify-center shadow-sm
                         group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-300`}
            >
              <Icon className={`w-5 h-5 ${theme.iconColor}`} />
            </div>

            <h3 className="text-lg sm:text-xl font-bold">
              <span className={`bg-gradient-to-r ${theme.titleGradient} text-transparent bg-clip-text`}>
                {title}
              </span>
            </h3>
          </div>

          {badge}
        </div>

        {/* Timeline entries */}
        <div>{children}</div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [workExperiences, setWorkExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const totalExperience = calculateTotalExperience(workExperiences);

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
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 95,
        damping: 14,
      },
    },
  };

  const internships = [
    {
      title: "Prodigy InfoTech",
      role: "Web Development Intern",
      period: "Mar 2024",
      duration: "4 weeks",
      description: "Virtual internship focused on modern web development practices",
    },
    {
      title: "Codsoft",
      role: "Web Development Intern",
      period: "Feb – Mar 2024",
      duration: "4 weeks",
      description: "Hands-on experience building web applications from scratch",
    },
  ];

  const workshops = [
    {
      title: "Machine Learning Session",
      organizer: "Dr. D. T. Shirke, Vice-Chancellor",
      period: "Dec 2023",
      description: "Insightful session on Machine Learning applications",
    },
    {
      title: "ICFAST-2023",
      organizer: "International Conference",
      period: "Sept 2023",
      description: "International Conference on Science & Technology with Japan Society",
    },
    {
      title: "Poster Presentation",
      organizer: "Research Presentation",
      period: "Feb 2022",
      description: "Research on Fastag cashless toll payments awareness",
    },
  ];

  const orderedWorkExperiences = [...workExperiences].reverse();

  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-white to-slate-50 pt-16 pb-16 sm:pt-[76px] sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-6 relative"
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

          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mx-auto rounded-full mb-3"
          />

          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
            My career path, learning experiences, and professional growth
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Work Experience */}
          <ExperienceSectionCard
            title="Work Experience"
            icon={Briefcase}
            theme={SECTION_THEMES.work}
            variants={itemVariants}
            badge={
              totalExperience.totalMonths > 0 && (
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/90 px-3 py-1 rounded-full shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  Total: {totalExperience.formatted}
                </span>
              )
            }
          >
            {loading ? (
              <div className="flex justify-center items-center py-8">
                <div className={`animate-spin rounded-full h-8 w-8 border-2 ${SECTION_THEMES.work.spinner} border-t-transparent`} />
              </div>
            ) : (
              orderedWorkExperiences.map((exp, idx) => {
                const websiteUrl = normalizeWebsiteUrl(exp.companyWebsite);
                const calculated = calculateDuration(exp.startDate, exp.endDate);
                const displayDuration = calculated?.isValidOrder ? calculated.formatted : exp.exp;
                const formattedEnd = formatDisplayDate(exp.endDate);
                const periodText = `${formatDisplayDate(exp.startDate)} – ${formattedEnd}`;

                return (
                  <TimelineEntryCard
                    key={exp._id || idx}
                    title={exp.company}
                    subtitle={exp.position}
                    period={periodText}
                    duration={displayDuration}
                    websiteUrl={websiteUrl}
                    description={exp.description}
                    isCurrent={formattedEnd === "Present"}
                    isLast={idx === orderedWorkExperiences.length - 1}
                    index={idx}
                    theme={SECTION_THEMES.work}
                  />
                );
              })
            )}
          </ExperienceSectionCard>

          {/* Internships */}
          <ExperienceSectionCard
            title="Internships"
            icon={Laptop}
            theme={SECTION_THEMES.internship}
            variants={itemVariants}
            badge={
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50/90 border border-blue-200/80 px-3 py-1 rounded-full">
                {internships.length} Completed
              </span>
            }
          >
            {internships.map((intern, idx) => (
              <TimelineEntryCard
                key={intern.title}
                title={intern.title}
                subtitle={intern.role}
                period={intern.period}
                duration={intern.duration}
                description={intern.description}
                isLast={idx === internships.length - 1}
                index={idx}
                theme={SECTION_THEMES.internship}
              />
            ))}
          </ExperienceSectionCard>

          {/* Workshops & Conferences */}
          <ExperienceSectionCard
            title="Workshops & Conferences"
            icon={GraduationCap}
            theme={SECTION_THEMES.workshop}
            variants={itemVariants}
            badge={
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50/90 border border-amber-200/80 px-3 py-1 rounded-full">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                {workshops.length} Highlights
              </span>
            }
          >
            {workshops.map((workshop, idx) => (
              <TimelineEntryCard
                key={workshop.title}
                title={workshop.title}
                subtitle={workshop.organizer}
                period={workshop.period}
                description={workshop.description}
                isLast={idx === workshops.length - 1}
                index={idx}
                theme={SECTION_THEMES.workshop}
              />
            ))}
          </ExperienceSectionCard>
        </motion.div>
      </div>
    </section>
  );
}