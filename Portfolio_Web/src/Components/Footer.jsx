// import { useNavigate } from "react-router-dom";
// import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaCertificate, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
// import { FiArrowUp } from "react-icons/fi";
// import logo from "../assets/logo1.png";

// export default function Footer() {
//   const navigate = useNavigate();

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   const navItems = [
//     { path: "/", name: "Home", icon: <FaHome className="mr-2" /> },
//     { path: "/about", name: "About", icon: <FaUser className="mr-2" /> },
//     { path: "/skills", name: "Skills", icon: <FaCode className="mr-2" /> },
//     { path: "/projects", name: "Projects", icon: <FaProjectDiagram className="mr-2" /> },
//     { path: "/experience", name: "Experience", icon: <FaBriefcase className="mr-2" /> },
//     { path: "/certifications", name: "Certifications", icon: <FaCertificate className="mr-2" /> },
//     { path: "/contact", name: "Contact", icon: <FaEnvelope className="mr-2" /> }
//   ];

//   const socialLinks = [
//     { url: "https://www.linkedin.com/in/dhiraj-patil-046646230/", icon: <FaLinkedin size={20} />, name: "LinkedIn" },
//     { url: "https://github.com/Dhirajpatil7721", icon: <FaGithub size={20} />, name: "GitHub" },
//     { url: "https://www.instagram.com/dhiraj._.patil_/profilecard/?igsh=emdwaHU5a2p2bmds", icon: <FaInstagram size={20} />, name: "Instagram" },
//     { url: "https://www.facebook.com/share/1DL1unsKjW/", icon: <FaFacebook size={20} />, name: "Facebook" }
//   ];

//   return (
    
//     <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4">
//     {/* // <footer className="bg-gray-300 text-white py-12 px-4"> */}
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//           {/* Logo Section */}
//           <div className="flex flex-col items-center md:items-start">
//             <img 
//               src={logo} 
//               alt="Logo" 
//               className="w-20 h-auto cursor-pointer mb-4 hover:opacity-80 transition-opacity"
//               onClick={() => {
//                 scrollToTop();
//                 navigate('/');
//               }}
//             />
//             <p className="text-white-900">MERN Stack Developer</p>
//           </div>

//           {/* Navigation Links */}
//           <div className="flex flex-col items-center">
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
//               {navItems.map((item) => (
//                 <li key={item.path}>
//                   <button
//                     onClick={() => {
//                       scrollToTop();
//                       navigate(item.path);
//                     }}
//                     className="flex items-center text-gray-400 hover:text-white transition-colors"
//                   >
//                     {item.icon}
//                     {item.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Social Links */}
//           <div className="flex flex-col items-center md:items-end">
//             <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-700 my-6"></div>

//         {/* Copyright and Back to Top */}
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm text-gray-400 mb-4 md:mb-0">
//             &copy; {new Date().getFullYear()} Dhiraj Patil. All rights reserved.
//           </p>
//           <button
//             onClick={scrollToTop}
//             className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
//           >
//             Back to top <FiArrowUp className="ml-1" />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }




import { useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaBriefcase, FaCertificate, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiArrowUp, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import logo2 from "../assets/logo2.png";

export default function Footer() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navigateAndScroll = (path) => {
    scrollToTop();
    navigate(path);
  };

  const navItems = [
    { path: "/", name: "Home", icon: <FaHome className="w-3.5 h-3.5" /> },
    { path: "/about", name: "About", icon: <FaUser className="w-3.5 h-3.5" /> },
    { path: "/projects", name: "Projects", icon: <FaProjectDiagram className="w-3.5 h-3.5" /> },
    { path: "/experience", name: "Experience", icon: <FaBriefcase className="w-3.5 h-3.5" /> },
    { path: "/certifications", name: "Certifications", icon: <FaCertificate className="w-3.5 h-3.5" /> },
    { path: "/contact", name: "Contact", icon: <FaEnvelope className="w-3.5 h-3.5" /> }
  ];

  const socialLinks = [
    {
      url: "https://www.linkedin.com/in/dhiraj-patil-046646230/",
      icon: <FaLinkedin size={18} />,
      name: "LinkedIn",
      hoverClass: "hover:from-blue-600 hover:to-cyan-500 hover:shadow-blue-500/30 hover:border-blue-400/50"
    },
    {
      url: "https://github.com/Dhirajpatil7721",
      icon: <FaGithub size={18} />,
      name: "GitHub",
      hoverClass: "hover:from-slate-600 hover:to-slate-800 hover:shadow-slate-400/20 hover:border-slate-400/50"
    },
    {
      url: "https://www.instagram.com/dhiraj._.patil_/profilecard/?igsh=emdwaHU5a2p2bmds",
      icon: <FaInstagram size={18} />,
      name: "Instagram",
      hoverClass: "hover:from-pink-500 hover:to-purple-600 hover:shadow-pink-500/30 hover:border-pink-400/50"
    },
    {
      url: "https://www.facebook.com/share/1DL1unsKjW/",
      icon: <FaFacebook size={18} />,
      name: "Facebook",
      hoverClass: "hover:from-blue-600 hover:to-indigo-600 hover:shadow-indigo-500/30 hover:border-blue-400/50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
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
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative bg-slate-950 text-white pt-14 pb-8 px-4 sm:px-6 overflow-hidden border-t border-white/10"
    >
      {/* Glowing top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent blur-sm" />

      {/* Subtle ambient background glows & grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-36 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "24px 24px"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10"
        >
          {/* Brand & Status Column */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-4"
          >
            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              src={logo2}
              alt="Dhiraj Patil Logo"
              className="w-28 h-auto cursor-pointer hover:opacity-90 transition-all duration-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.25)]"
              onClick={() => navigateAndScroll("/")}
            />

            <p className="text-sm font-medium bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              MERN Stack &amp; Mobile App Developer
            </p>

            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Building scalable web platforms, cross-platform mobile apps, and production-ready cloud architectures.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs text-slate-300 font-medium">Available for new opportunities</span>
            </div>
          </motion.div>

          {/* Navigation Links Column */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 flex flex-col items-center md:items-start"
          >
            <div className="mb-4 text-center md:text-left">
              <h3 className="text-sm uppercase tracking-wider font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <div className="h-0.5 w-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-1.5 mx-auto md:mx-0" />
            </div>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 w-full max-w-xs md:max-w-none">
              {navItems.map((item) => (
                <motion.li
                  key={item.path}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <button
                    onClick={() => navigateAndScroll(item.path)}
                    className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all duration-300 group text-left"
                  >
                    <span className="text-cyan-400/80 group-hover:text-cyan-300 transition-colors">
                      {item.icon}
                    </span>
                    <span className="truncate">{item.name}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect & CTA Column */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 flex flex-col items-center md:items-end"
          >
            <div className="mb-4 text-center md:text-right">
              <h3 className="text-sm uppercase tracking-wider font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Connect With Me
              </h3>
              <div className="h-0.5 w-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-1.5 mx-auto md:ml-auto md:mr-0" />
            </div>

            <div className="flex items-center gap-3 mb-5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-white/[0.05] backdrop-blur-md border border-white/10 bg-gradient-to-br p-3 rounded-xl text-slate-300 hover:text-white transition-all duration-300 shadow-lg relative group ${social.hoverClass}`}
                  aria-label={social.name}
                >
                  {social.icon}
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/10 text-white text-xs py-1 px-2.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-xl">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigateAndScroll("/contact")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500 hover:to-blue-600 text-cyan-300 hover:text-white border border-cyan-400/30 hover:border-transparent transition-all duration-300 shadow-md hover:shadow-cyan-500/25 group"
            >
              <span>Let&apos;s Work Together</span>
              <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Gradient Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6"
        />

        {/* Bottom Copyright & Back to Top */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs sm:text-sm text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} <span className="text-slate-300 font-medium">Dhiraj Patil</span>. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group"
          >
            <span>Back to top</span>
            <motion.span
              animate={{ y: [0, -2.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-cyan-400"
            >
              <FiArrowUp className="w-3.5 h-3.5" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
}