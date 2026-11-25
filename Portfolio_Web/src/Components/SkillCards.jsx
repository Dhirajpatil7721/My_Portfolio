import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaCloud, FaRobot } from "react-icons/fa";

const skillsData = [
  {
    category: "Programming Languages",
    icon: FaCode,
    skills: ["React.js", "React Native", "Node.js", "JavaScript", "Express.js", "Tailwind"],
    description: "Proficient in modern languages and frameworks for building scalable web and mobile apps.",
    theme: {
      bar: "from-blue-500 to-cyan-400",
      iconBg: "from-blue-50 to-cyan-50 ring-blue-200/70",
      iconColor: "text-blue-600",
      glow: "from-blue-500/15 to-cyan-500/15",
      borderHover: "hover:border-blue-300/90 hover:shadow-blue-500/10",
      titleHover: "group-hover:from-blue-600 group-hover:to-cyan-600",
      tagHover: "hover:from-blue-600 hover:to-cyan-500",
    },
  },
  {
    category: "Databases",
    icon: FaDatabase,
    skills: ["MongoDB", "PostgreSQL", "SQL"],
    description: "Expertise in relational and NoSQL databases, optimized for performance and security.",
    theme: {
      bar: "from-rose-500 to-orange-400",
      iconBg: "from-rose-50 to-orange-50 ring-rose-200/70",
      iconColor: "text-rose-600",
      glow: "from-rose-500/15 to-orange-500/15",
      borderHover: "hover:border-rose-300/90 hover:shadow-rose-500/10",
      titleHover: "group-hover:from-rose-600 group-hover:to-orange-500",
      tagHover: "hover:from-rose-600 hover:to-orange-500",
    },
  },
  {
    category: "Cloud & DevOps",
    icon: FaCloud,
    skills: ["AWS", "Docker", "CI/CD", "Git", "GitHub Actions"],
    description: "Deploying, containerizing, and automating scalable production applications in the cloud.",
    theme: {
      bar: "from-emerald-500 to-teal-400",
      iconBg: "from-emerald-50 to-teal-50 ring-emerald-200/70",
      iconColor: "text-emerald-600",
      glow: "from-emerald-500/15 to-teal-500/15",
      borderHover: "hover:border-emerald-300/90 hover:shadow-emerald-500/10",
      titleHover: "group-hover:from-emerald-600 group-hover:to-teal-500",
      tagHover: "hover:from-emerald-600 hover:to-teal-500",
    },
  },
  {
    category: "AI-Assisted Development",
    icon: FaRobot,
    skills: ["Cursor AI", "Claude Code", "AI Agents", "Prompt Engineering"],
    description: "Accelerating architecture, coding, and debugging through modern AI workflows and agents.",
    theme: {
      bar: "from-purple-600 to-fuchsia-500",
      iconBg: "from-purple-50 to-fuchsia-50 ring-purple-200/70",
      iconColor: "text-purple-600",
      glow: "from-purple-500/15 to-fuchsia-500/15",
      borderHover: "hover:border-purple-300/90 hover:shadow-purple-500/10",
      titleHover: "group-hover:from-purple-600 group-hover:to-fuchsia-600",
      tagHover: "hover:from-purple-600 hover:to-fuchsia-500",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
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

export default function SkillCards({ className = "" }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 ${className}`}
    >
      {skillsData.map((skill) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={skill.category}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className={`group relative bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-200/80
                       shadow-md hover:shadow-2xl transition-all duration-300 h-full overflow-hidden flex flex-col
                       ${skill.theme.borderHover}`}
          >
            {/* Top gradient accent bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${skill.theme.bar} opacity-80 group-hover:opacity-100 transition-opacity`} />

            {/* Soft corner glow */}
            <div
              className={`absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br ${skill.theme.glow}
                         rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            <div className="flex flex-col flex-1 p-5 relative z-10">
              {/* Icon & Category */}
              <div className="flex flex-col items-center mb-3">
                <div
                  className={`p-3 bg-gradient-to-br ${skill.theme.iconBg} ring-1 rounded-xl mb-2.5
                             shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  <Icon className={`text-2xl sm:text-3xl ${skill.theme.iconColor}`} />
                </div>

                <h3
                  className={`text-sm sm:text-base font-bold text-slate-800 text-center leading-snug
                             group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r
                             ${skill.theme.titleHover} transition-all duration-300`}
                >
                  {skill.category}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed text-center mb-4 flex-grow">
                {skill.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
                {skill.skills.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className={`inline-block px-2.5 py-1 bg-slate-100/90 text-slate-700
                               rounded-full text-[11px] sm:text-xs font-medium border border-slate-200/80
                               hover:bg-gradient-to-r ${skill.theme.tagHover} hover:text-white hover:border-transparent
                               hover:shadow-sm transition-all duration-200 cursor-default`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
