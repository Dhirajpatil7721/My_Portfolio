import { motion } from "framer-motion";
import video from '../assets/Bgvideo/bgvideo2.mp4';
import Dhiraj_Patil from '../../public/Dhiraj_Patil.pdf';
import { Download, ArrowRight, Github, Linkedin, Twitter, Mail, ExternalLink, Code2, Zap, Award, Users } from "lucide-react";
// import { Download, ArrowRight } from "lucide-react";
// import dhiraj from '../assets/dhiraj.jpg';
import dhiraj from '../assets/dhiraj3.jpeg';
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

export default function Home() {

  return (
    <div className="w-full min-h-screen flex flex-col bg-white mt-8">
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
          className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4"
        >
          <div className="max-w-4xl space-y-6">
            {/* Floating badge */}


            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-400">
                Dhiraj Patil
              </span>
            </motion.h1>

            <motion.h2
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                MERN Stack Developer
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-slate-300 leading-relaxed"
            >
              Developed scalable web applications, handled clients, optimized performance,
              delivered projects on time; reliable performer and strong finisher.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={Dhiraj_Patil}
                download="Dhiraj_Patil_Resume.pdf"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold 
                         hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#about"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold 
                         hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:gap-3"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </motion.div>

            {/* Social links */}

          </div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm"
          >
            <motion.div
              animate={{ height: [4, 16, 4], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
      {/* About Section */}
      <section id="about" className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10">
          {/* Profile Card - Enhanced Hover */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative w-full sm:w-80 h-auto sm:h-96 bg-white flex flex-col items-center justify-center 
                text-center rounded-2xl overflow-hidden shadow-xl border border-slate-200 p-6
                hover:shadow-2xl hover:shadow-cyan-500/30 hover:border-cyan-400 hover:-translate-y-2 
                transition-all duration-500 ease-out"
          >
            {/* Animated background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Profile Image with enhanced hover */}
            <div className="relative w-24 sm:w-32 h-24 sm:h-32 mt-4 sm:mt-8 rounded-full border-4 border-white z-10 
                    group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-500
                    shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.6)]">
              <img
                className="rounded-full w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={dhiraj}
                alt="Dhiraj Patil"
              />
            </div>

            {/* Profile Details with enhanced hover */}
            <div className="relative z-10 mt-4 sm:mt-6 px-4 sm:px-6 space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 group-hover:text-cyan-600 
                     transition-colors duration-300">
                Dhiraj Patil
              </h3>
              <p className="text-cyan-600 text-sm sm:text-base font-medium group-hover:scale-105 
                     transition-transform duration-300">
                Full-Stack Developer
              </p>

              {/* Animated divider */}
              <div className="h-px w-12 sm:w-16 mx-auto bg-slate-200 my-2 sm:my-3 
                      group-hover:w-20 group-hover:bg-cyan-400 transition-all duration-500"></div>

              {/* Tech stack with staggered hover */}
              <p className="text-slate-500 text-xs sm:text-sm group-hover:text-slate-700 
                     transition-colors duration-300">
                <span className="inline-block group-hover:translate-x-0.5 transition-transform duration-300">React.js</span> |
                <span className="inline-block group-hover:translate-x-0.5 transition-transform duration-300 delay-75"> Node.js</span> |
                <span className="inline-block group-hover:translate-x-0.5 transition-transform duration-300 delay-150"> Express.js</span> |
                <span className="inline-block group-hover:translate-x-0.5 transition-transform duration-300 delay-200"> MongoDB</span>
              </p>
            </div>

            {/* Social Links with enhanced hover */}
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6 z-10">
              {[
                { name: 'GitHub', color: 'hover:bg-gray-800 hover:text-white' },
                { name: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white' },
                { name: 'Twitter', color: 'hover:bg-sky-500 hover:text-white' }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-slate-100 rounded-full
                      transition-all duration-300 ${social.color} shadow-md hover:shadow-lg
                      hover:shadow-${social.name === 'GitHub' ? 'gray' : social.name === 'LinkedIn' ? 'blue' : 'sky'}-500/30`}
                >
                  <span className="sr-only">{social.name}</span>
                  {/* You can add icons here if needed */}
                </motion.a>
              ))}
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
            className="group relative w-full md:w-1/2 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xl
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

            <h2 className="relative text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 
                   group-hover:translate-x-1 transition-transform duration-300">
              About <span className="text-cyan-600 group-hover:text-cyan-500 
                            group-hover:underline decoration-cyan-400/30 underline-offset-4 
                            transition-all duration-300">Me</span>
            </h2>

            <div className="relative space-y-3 sm:space-y-4 text-slate-600 text-sm sm:text-base">
              <p className="group-hover:translate-x-1 transition-transform duration-300 delay-75">
                I'm a passionate <span className="text-cyan-600 font-medium group-hover:text-cyan-500 
                                         group-hover:font-semibold transition-all duration-300">
                  MERN Developer
                </span> with expertise in building scalable web applications and solving complex problems through innovative solutions.
              </p>

              <p className="group-hover:translate-x-1 transition-transform duration-300 delay-100">
                My toolkit includes <span className="text-slate-800 font-medium group-hover:text-cyan-600 
                                           transition-colors duration-300">
                  MongoDB, Express.js, React.js, Node.js
                </span> that I leverage to create performant, user-friendly applications.
              </p>

              <p className="group-hover:translate-x-1 transition-transform duration-300 delay-150">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or mentoring aspiring developers.
              </p>
            </div>

            {/* Skills Tags with enhanced hover */}
            <div className="relative mt-6 sm:mt-8 flex flex-wrap gap-2">
              {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind', 'AWS', 'Git', 'GoDaddy'].map((skill, index) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-2 sm:px-3 py-1 bg-slate-100 text-xs sm:text-sm rounded-full text-cyan-600 
                     border border-slate-200 cursor-default relative overflow-hidden
                     hover:bg-cyan-500 hover:text-white hover:border-cyan-400 
                     hover:shadow-md hover:shadow-cyan-500/30
                     transition-all duration-300 group/skill"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Shine effect on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                           -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700"></span>
                  {skill}
                </motion.span>
              ))}
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


      <div className="max-w-4xl mx-auto">
        {/* Decorative divider - Enhanced */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-[90%] sm:w-[80%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-purple-400 via-cyan-400 to-transparent mb-12
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
          className="text-2xl sm:text-3xl font-bold text-center mb-10 relative"
        >
          <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Technologies I Work With
          </span>
          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-2 rounded-full"
          />
        </motion.h3>

        {/* First row of tech icons - Enhanced */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 md:gap-8 mb-8">
          {[react, node, mongo, express, javascript].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="group relative flex justify-center items-center p-4 rounded-2xl
                   hover:bg-gradient-to-br from-cyan-50 to-transparent
                   transition-all duration-300 cursor-pointer"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full 
                      blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 
                      group-hover:scale-150"></div>

              {/* Tooltip on hover */}
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                       bg-slate-800 text-white text-xs px-2 py-1 rounded
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300
                       whitespace-nowrap pointer-events-none">
                {img === react ? 'React.js' :
                  img === node ? 'Node.js' :
                    img === mongo ? 'MongoDB' :
                      img === express ? 'Express.js' : 'JavaScript'}
              </span>

              {/* Icon with enhanced effects */}
              <img
                className="w-10 sm:w-12 md:w-16 lg:w-20 relative z-10 
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
                    '0 0 0 10px rgba(34,211,238,0.1)',
                    '0 0 0 20px rgba(34,211,238,0)'
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute inset-0 rounded-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Second row of tech icons - Enhanced */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 md:gap-8">
          {[tailwind, html, css, aws, github].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 5) * 0.1 }}
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="group relative flex justify-center items-center p-4 rounded-2xl
                   hover:bg-gradient-to-br from-purple-50 to-transparent
                   transition-all duration-300 cursor-pointer"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full 
                      blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 
                      group-hover:scale-150"></div>

              {/* Tooltip on hover */}
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                       bg-slate-800 text-white text-xs px-2 py-1 rounded
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300
                       whitespace-nowrap pointer-events-none">
                {img === tailwind ? 'Tailwind CSS' :
                  img === html ? 'HTML5' :
                    img === css ? 'CSS3' :
                      img === aws ? 'AWS' : 'GitHub'}
              </span>

              {/* Icon with enhanced effects */}
              <img
                className="w-10 sm:w-12 md:w-16 lg:w-20 relative z-10 
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
                whileHover={{ y: [0, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="absolute -bottom-1 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
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
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm relative inline-block mb-2">
            Continuously expanding my toolkit with modern technologies

            {/* Animated dots */}
            <span className="absolute -right-6 bottom-0 flex space-x-1">
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

          {/* Interactive hint */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xs text-slate-400 mt-2"
          >
          </motion.p>
        </motion.div>
      </div>


    </div>
  );
}