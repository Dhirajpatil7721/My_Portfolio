import { motion } from "framer-motion";
import { TbBrandReactNative, TbInfinity } from "react-icons/tb";
import {
  SiAndroid,
  SiClaude,
  SiDocker,
  SiGit,
  SiIos,
  SiMui,
  SiPostgresql,
} from "react-icons/si";
import reactImg from "../assets/react.png";
import javascriptImg from "../assets/javascript.png";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import tailwindImg from "../assets/tailwind.png";
import nodeImg from "../assets/node.png";
import expressImg from "../assets/express.png";
import mongoImg from "../assets/Mongo.png";
import awsImg from "../assets/AWS.png";
import githubImg from "../assets/Github.png";

function CursorIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      role="img"
      aria-label="Cursor AI"
    >
      <path d="M12 1.5L21 6.75v10.5L12 22.5l-9-5.25V6.75L12 1.5zm0 2.02L5.05 7.57 12 11.62l6.95-4.05L12 3.52zm-7.5 5.4v7.16l6.75 3.94v-7.16L4.5 8.92zm15 0l-6.75 3.94v7.16l6.75-3.94V8.92z" />
    </svg>
  );
}

const TECH_STACK = [
  { name: "React.js", img: reactImg },
  { name: "JavaScript", img: javascriptImg },
  { name: "HTML5", img: htmlImg },
  { name: "CSS3", img: cssImg },
  { name: "Tailwind CSS", img: tailwindImg },
  { name: "Material UI", Icon: SiMui, iconClassName: "text-[#007FFF]" },
  { name: "React Native", Icon: TbBrandReactNative, iconClassName: "text-[#61DAFB]" },
  { name: "Android", Icon: SiAndroid, iconClassName: "text-[#3DDC84]" },
  { name: "iOS", Icon: SiIos, iconClassName: "text-slate-900" },
  { name: "Node.js", img: nodeImg },
  { name: "Express.js", img: expressImg },
  { name: "MongoDB", img: mongoImg },
  { name: "PostgreSQL", Icon: SiPostgresql, iconClassName: "text-[#4169E1]" },
  { name: "AWS", img: awsImg },
  { name: "Docker", Icon: SiDocker, iconClassName: "text-[#2496ED]" },
  { name: "CI/CD", Icon: TbInfinity, iconClassName: "text-cyan-600" },
  { name: "Git", Icon: SiGit, iconClassName: "text-[#F05032]" },
  { name: "GitHub", img: githubImg },
  { name: "Cursor AI", Icon: CursorIcon, iconClassName: "text-slate-900" },
  { name: "Claude Code", Icon: SiClaude, iconClassName: "text-[#D97757]" },
];

/**
 * Compact, auto-scrolling marquee showcasing the core technology stack.
 */
export default function TechStackSection() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 pb-10 sm:pb-12">
      {/* Decorative divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        className="w-[85%] sm:w-[75%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-purple-400 to-transparent mb-8 relative overflow-hidden"
      >
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        />
      </motion.div>

      {/* Section title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl font-bold text-center mb-6 relative"
      >
        <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Technologies I Work With
        </span>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "56px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-2 rounded-full"
        />
      </motion.h3>

      {/* Auto-scrolling marquee */}
      <div className="relative overflow-hidden py-2">
        {/* Soft left/right fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-tech-marquee">
          {[0, 1].map((dupIndex) => (
            <div
              key={dupIndex}
              aria-hidden={dupIndex === 1}
              className="flex items-center gap-5 sm:gap-7 pr-5 sm:pr-7 shrink-0"
            >
              {TECH_STACK.map((tech) => (
                <div
                  key={`${dupIndex}-${tech.name}`}
                  className="group relative flex flex-col items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-pointer shrink-0 min-w-[68px] sm:min-w-[78px]"
                  title={tech.name}
                >
                  {tech.img ? (
                    <img
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain grayscale group-hover:grayscale-0 drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300 group-hover:scale-110"
                      src={tech.img}
                      alt={tech.name}
                    />
                  ) : (
                    <tech.Icon
                      className={`w-8 h-8 sm:w-10 sm:h-10 grayscale group-hover:grayscale-0 drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300 group-hover:scale-110 ${tech.iconClassName}`}
                      aria-label={tech.name}
                    />
                  )}
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 group-hover:text-slate-800 transition-colors whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Tech stack description */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-5"
      >
        <p className="text-slate-500 text-xs sm:text-sm relative inline-block">
          Continuously expanding my toolkit with modern technologies
          <span className="inline-flex space-x-1 ml-2 align-middle">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              className="w-1 h-1 bg-cyan-400 rounded-full"
            />
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              className="w-1 h-1 bg-purple-400 rounded-full"
            />
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              className="w-1 h-1 bg-pink-400 rounded-full"
            />
          </span>
        </p>
      </motion.div>
    </div>
  );
}
