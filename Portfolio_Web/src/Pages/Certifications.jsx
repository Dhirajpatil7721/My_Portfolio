// import { useState } from "react";
// import { motion } from "framer-motion";
// import nasscom from '../assets/Certificates/NASSCOM.png';
// import jshero from '../assets/Certificates/js_Zero_hero.png';
// import react from '../assets/Certificates/React_JS.jpg'; 
// import web from '../assets/Certificates/WebDevlopment.jpg'; 
// import frontend from '../assets/Certificates/FrontendCSS.jpg';
// import html from '../assets/Certificates/HTML.jpg';
// import css from '../assets/Certificates/CSS.jpg';
// import sql from '../assets/Certificates/SQL_Project_Beginers.jpg'; 
// import mongo from '../assets/Certificates/MongoDB.jpg';

// export default function Certifications() {
//   const certifications = [
//     { title: "Java Full Stack Development (Accenture)", image: nasscom },
//     { title: "JavaScript Zero to Hero", image: jshero },
//     { title: "React.js", image: react },
//     { title: "Web Development", image: web },
//     { title: "Front-End Development", image: frontend },
//     { title: "HTML", image: html },
//     { title: "CSS", image: css },
//     { title: "SQL", image: sql },
//     { title: "MongoDB", image: mongo },
//   ];

//   const [selectedImage, setSelectedImage] = useState(null);

//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const item = {
//     hidden: { y: 20, opacity: 0 },
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
//       scale: 1.05,
//       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
//       transition: { duration: 0.3 }
//     }
//   };

//   const modal = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { duration: 0.3 }
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       transition: { duration: 0.2 }
//     }
//   };

//   return (
//     <section id="certifications" className="bg-white py-16 px-4 mt-8 sm:px-6 lg:px-8 xl:px-12">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-3">
//             My Certifications
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
//             Recognized achievements and completed training programs
//           </p>
//         </motion.div>

//         {/* Certificates Grid */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
//         >
//           {certifications.map((cert, index) => (
//             <motion.div
//               key={index}
//               variants={item}
//               whileHover="hover"
//               className="bg-white p-4 rounded-xl shadow-md border border-gray-200 cursor-pointer"
//               onClick={() => setSelectedImage(cert.image)}
//             >
//               <div className="w-full h-48 sm:h-56 flex items-center justify-center overflow-hidden">
//                 <motion.img 
//                   src={cert.image} 
//                   alt={cert.title}
//                   className="w-full h-full object-contain rounded-lg"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mt-4 text-center">
//                 {cert.title}
//               </h3>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Image Preview Modal */}
//         {selectedImage && (
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={modal}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
//             onClick={() => setSelectedImage(null)}
//           >
//             <div className="relative max-w-4xl w-full">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="absolute -top-12 right-0 text-white text-3xl bg-red-600 hover:bg-red-700 w-10 h-10 flex items-center justify-center rounded-full"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setSelectedImage(null);
//                 }}
//               >
//                 &times;
//               </motion.button>
//               <motion.img 
//                 src={selectedImage} 
//                 alt="Certificate Preview" 
//                 className="w-full max-h-[80vh] object-contain rounded-lg"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               />
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }




import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Award, ExternalLink, Download } from 'lucide-react';
import nasscom from '../assets/Certificates/NASSCOM.png';
import jshero from '../assets/Certificates/js_Zero_hero.png';
import react from '../assets/Certificates/React_JS.jpg';
import web from '../assets/Certificates/WebDevlopment.jpg';
import frontend from '../assets/Certificates/FrontendCSS.jpg';
import html from '../assets/Certificates/HTML.jpg';
import css from '../assets/Certificates/CSS.jpg';
import sql from '../assets/Certificates/SQL_Project_Beginers.jpg';
import mongo from '../assets/Certificates/MongoDB.jpg';

export default function Certifications() {
  const certifications = [
    { title: "Java Full Stack Development (Accenture)", image: nasscom, issuer: "NASSCOM", date: "2024" },
    { title: "JavaScript Zero to Hero", image: jshero, issuer: "Online Course", date: "2024" },
    { title: "React.js", image: react, issuer: "Certification", date: "2024" },
    { title: "Web Development", image: web, issuer: "Certification", date: "2024" },
    { title: "Front-End Development", image: frontend, issuer: "Certification", date: "2024" },
    { title: "HTML", image: html, issuer: "Certification", date: "2024" },
    { title: "CSS", image: css, issuer: "Certification", date: "2024" },
    { title: "SQL", image: sql, issuer: "Project Based", date: "2024" },
    { title: "MongoDB", image: mongo, issuer: "Certification", date: "2024" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
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

  const modal = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  const handleCardClick = (cert) => {
    setSelectedCert(cert);
    setSelectedImage(cert.image);
  };

  return (
    <section id="certifications" className="bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
            className="absolute -top-10 -left-10 w-24 h-24 border border-blue-200/30 rounded-full hidden lg:block"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -right-10 w-32 h-32 border border-cyan-200/30 rounded-full hidden lg:block"
          />



          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4  mt-5">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              My Certifications
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
            Recognized achievements and completed training programs
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 
                         hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 
                         transition-all duration-500 cursor-pointer overflow-hidden"
              onClick={() => handleCardClick(cert)}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 
                            rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Zoom indicator */}
              <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                  <ZoomIn className="w-4 h-4 text-blue-600" />
                </div>
              </div>

              {/* Image Container */}
              <div className="relative w-full h-44 sm:h-48 md:h-52 mb-3 sm:mb-4 overflow-hidden rounded-lg">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain bg-slate-50 p-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1.5
                               group-hover:text-transparent group-hover:bg-clip-text 
                               group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600
                               transition-all duration-300 line-clamp-2">
                  {cert.title}
                </h3>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-500 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {cert.issuer}
                  </span>
                  <span className="text-cyan-600 font-medium bg-cyan-50 px-2 py-0.5 rounded-full">
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Floating glow effect */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-400/20 rounded-full 
                            opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Preview Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modal}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
              onClick={() => {
                setSelectedImage(null);
                setSelectedCert(null);
              }}
            >
              <div className="relative max-w-5xl w-full">
                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute -top-12 right-0 text-white bg-red-500/20 hover:bg-red-500/40 
                           backdrop-blur-md w-10 h-10 flex items-center justify-center rounded-full 
                           border border-white/20 transition-all duration-300 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                    setSelectedCert(null);
                  }}
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Certificate Info Bar */}
                {selectedCert && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -bottom-16 left-0 right-0 flex justify-center"
                  >
                    <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                      <h3 className="text-white font-semibold text-sm sm:text-base">
                        {selectedCert.title}
                      </h3>
                      <p className="text-white/70 text-xs text-center">
                        {selectedCert.issuer} • {selectedCert.date}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Certificate Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="relative rounded-xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={selectedImage}
                    alt="Certificate Preview"
                    className="w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
                  />
                </motion.div>


              </div>
            </motion.div>
          )}
        </AnimatePresence>


      </div>
    </section>
  );
}