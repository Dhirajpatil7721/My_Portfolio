import { motion } from "framer-motion";
import { Briefcase, Laptop, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="bg-white mt-5 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My career path, learning experiences, and professional growth
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-16">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-start">
              <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg mr-6 mt-1 flex-shrink-0">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="sm:hidden flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg mr-4">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">
                      Work Experience
                    </span>
                  </h3>
                </div>
                
                <div className="space-y-6 pl-2 sm:pl-0">
                  <div className="border-l-4 border-emerald-400 pl-4 py-1">
                    <h4 className="text-xl font-semibold text-gray-800">Saksham Softtech</h4>
                    <p className="text-emerald-600 mb-2 text-sm font-medium">Current</p>
                    <p className="text-gray-600">Fullstack Developer - Building modern web applications</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-400 pl-4 py-1">
                    <h4 className="text-xl font-semibold text-gray-800">Einfratech Systems, Bengaluru</h4>
                    <p className="text-emerald-600 mb-2 text-sm font-medium">3 months</p>
                    <p className="text-gray-600">React Developer - Developed responsive UIs and integrated REST APIs</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Internships */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-start">
              <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg mr-6 mt-1 flex-shrink-0">
                <Laptop className="h-6 w-6 text-white" />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="sm:hidden flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg mr-4">
                    <Laptop className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">
                      Internships
                    </span>
                  </h3>
                </div>
                
                <div className="space-y-6 pl-2 sm:pl-0">
                  <div className="border-l-4 border-indigo-400 pl-4 py-1">
                    <h4 className="text-xl font-semibold text-gray-800">Prodigy InfoTech</h4>
                    <p className="text-indigo-600 mb-2 text-sm font-medium">Mar 2024 (4 weeks)</p>
                    <p className="text-gray-600">Virtual internship focused on modern web development practices</p>
                  </div>
                  
                  <div className="border-l-4 border-indigo-400 pl-4 py-1">
                    <h4 className="text-xl font-semibold text-gray-800">Codsoft</h4>
                    <p className="text-indigo-600 mb-2 text-sm font-medium">Feb-Mar 2024 (4 weeks)</p>
                    <p className="text-gray-600">Hands-on experience building web applications from scratch</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Workshops & Conferences */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-start">
              <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 shadow-lg mr-6 mt-1 flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="sm:hidden flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 shadow-lg mr-4">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    <span className="bg-gradient-to-r from-amber-600 to-yellow-500 text-transparent bg-clip-text">
                      Workshops & Conferences
                    </span>
                  </h3>
                </div>
                
                <div className="space-y-6 pl-2 sm:pl-0">
                  <div className="border-l-4 border-amber-400 pl-4 py-1">
                    <h4 className="text-xl font-semibold text-gray-800">Machine Learning Session</h4>
                    <p className="text-amber-600 mb-2 text-sm font-medium">Dec 2023</p>
                    <p className="text-gray-600">Insightful session with Dr. D. T. Shirke, Vice-Chancellor of Shivaji University</p>
                  </div>
                  
                  <div className="border-l-4 border-amber-400 pl-4 py-1">
                    <h4 className="text-xl font-semibold text-gray-800">ICFAST-2023</h4>
                    <p className="text-amber-600 mb-2 text-sm font-medium">Sept 2023</p>
                    <p className="text-gray-600">International Conference on Science & Technology with Japan Society</p>
                  </div>
                  
                  <div className="border-l-4 border-amber-400 pl-4 py-1">
                    <h4 className="text-xl font-semibold text-gray-800">Poster Presentation</h4>
                    <p className="text-amber-600 mb-2 text-sm font-medium">Feb 2022</p>
                    <p className="text-gray-600">Research on Fastag cashless toll payments awareness</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}