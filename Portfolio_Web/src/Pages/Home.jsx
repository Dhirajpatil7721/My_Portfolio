import { motion } from "framer-motion";
import video from '../assets/Bgvideo/bgvideo2.mp4';
import Dhiraj_Patil from '../../public/Dhiraj_Patil.pdf';
import { Download, ArrowRight } from "lucide-react";
import dhiraj from '../assets/dhiraj3.jpeg';
import { useTotalExperience } from '../hooks/useTotalExperience';
import TechStackSection from '../Components/TechStackSection';

export default function Home() {
  const totalExperienceText = useTotalExperience();

  return (
    <div className="w-full min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <video autoPlay loop muted className="w-full h-full object-cover scale-105">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-20"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-14 pb-16"
        >
          <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
            {/* Floating badge */}


            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-400">
                Dhiraj Patil
              </span>
            </motion.h1>

            <motion.h2
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-lg md:text-xl font-medium"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                MERN Stack & Mobile App Developer
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs sm:text-sm md:text-sm lg:text-base max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4 text-center text-slate-300 leading-relaxed"
            >
              Building scalable web applications and cross-platform mobile apps for Android and iOS. Experienced in full-stack development, REST APIs, database management, cloud deployment, Docker, and CI/CD automation. Focused on delivering high-performance, secure, and production-ready solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 sm:pt-3"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={Dhiraj_Patil}
                download="Dhiraj_Patil_Resume.pdf"
                className="w-auto flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold 
                         hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Download Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#about"
                className="w-auto flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold 
                         hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:gap-2.5"
              >
                Explore My Work
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.a>
            </motion.div>

            {/* Social links */}

          </div>
        </motion.div>
      </div>
      {/* About Section */}
      <section id="about" className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 overflow-x-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-6 lg:gap-8">
          {/* Profile Card - Enhanced Hover */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative w-full md:w-80 lg:w-96 flex-shrink-0 bg-white flex flex-col items-center justify-center 
                text-center rounded-2xl overflow-hidden shadow-xl border border-slate-200 p-6 sm:p-8
                hover:shadow-2xl hover:shadow-cyan-500/30 hover:border-cyan-400 hover:-translate-y-2 
                transition-all duration-500 ease-out"
          >
            {/* Animated background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Profile Image with enhanced hover */}
            <div className="relative w-24 sm:w-32 h-24 sm:h-32 rounded-full border-4 border-white z-10 
                    group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-500
                    shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.6)]">
              <img
                className="rounded-full w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={dhiraj}
                alt="Dhiraj Patil"
              />
            </div>

            {/* Profile Details with enhanced hover */}
            <div className="relative z-10 mt-4 sm:mt-6 px-2 space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-cyan-600 
                     transition-colors duration-300">
                Dhiraj Patil
              </h3>
              <p className="text-cyan-600 text-sm sm:text-base font-medium group-hover:scale-105 
                     transition-transform duration-300">
                MERN Stack Developer
              </p>

              {/* Animated divider */}
              <div className="h-px w-12 sm:w-16 mx-auto bg-slate-200 my-2 sm:my-3 
                      group-hover:w-20 group-hover:bg-cyan-400 transition-all duration-500"></div>

              {/* Tech stack with staggered hover */}
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-slate-500 text-xs sm:text-sm group-hover:text-slate-700 transition-colors duration-300">
                <span className="inline-block group-hover:translate-x-0.5 transition-transform duration-300">React.js</span>
                <span className="text-slate-300">|</span>
                <span className="inline-block group-hover:translate-x-0.5 transition-transform duration-300 delay-75">Node.js</span>
                <span className="text-slate-300">|</span>
                <span className="inline-block group-hover:translate-x-0.5 transition-transform duration-300 delay-150">Express.js</span>
                <span className="text-slate-300">|</span>
                <span className="inline-block group-hover:translate-x-0.5 transition-transform duration-300 delay-200">MongoDB</span>
              </div>
            </div>

            {/* Floating glow effect on hover */}
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-cyan-400 rounded-full 
                    opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-400 rounded-full 
                    opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
          </motion.div>

          {/* About Content - Enhanced Hover */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative w-full md:flex-1 flex flex-col justify-center p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xl
                hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400 hover:-translate-y-1
                transition-all duration-500 ease-out overflow-hidden"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] 
                    border-t-transparent border-r-cyan-400/20 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500"></div>

            <h2 className="relative text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 
                   group-hover:translate-x-1 transition-transform duration-300">
              About <span className="text-cyan-600 group-hover:text-cyan-500 
                            group-hover:underline decoration-cyan-400/30 underline-offset-4 
                            transition-all duration-300">Me</span>
            </h2>

            <div className="relative space-y-3 sm:space-y-4 text-slate-600 text-sm sm:text-base">
              <p className="group-hover:translate-x-1 transition-transform duration-300 delay-75">
                I'm a passionate <span className="text-cyan-600 font-semibold group-hover:text-cyan-500 transition-all duration-300">
                  Full Stack & Mobile App Developer
                </span> with {totalExperienceText} of experience building scalable web, mobile, and backend applications.
              </p>

              <p className="group-hover:translate-x-1 transition-transform duration-300 delay-100">
                Skilled in <span className="text-slate-800 font-semibold group-hover:text-cyan-600 transition-colors duration-300">
                  MERN Stack (MongoDB, Express.js, React.js, Node.js)
                </span> and <span className="text-slate-800 font-semibold group-hover:text-cyan-600 transition-colors duration-300">
                  React Native
                </span>, developing end-to-end solutions with responsive interfaces and RESTful APIs.
              </p>

              <p className="group-hover:translate-x-1 transition-transform duration-300 delay-150">
                Experienced in <span className="text-slate-800 font-semibold group-hover:text-cyan-600 transition-colors duration-300">
                  AWS, Docker, CI/CD, Git, and production deployment
                </span>, delivering reliable, scalable applications while continuously exploring new technologies and solving complex problems.
              </p>
            </div>

            {/* Interactive hover hint */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-2 right-2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 
                   transition-opacity duration-300"
            >

            </motion.div>
          </motion.div>
        </div>
      </section>


      <TechStackSection />


    </div>
  );
}