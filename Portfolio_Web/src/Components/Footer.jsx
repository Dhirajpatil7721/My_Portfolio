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
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaCertificate, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../assets/logo1.png";

export default function Footer() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navItems = [
    { path: "/", name: "Home", icon: <FaHome className="mr-2" /> },
    { path: "/about", name: "About", icon: <FaUser className="mr-2" /> },
    { path: "/skills", name: "Skills", icon: <FaCode className="mr-2" /> },
    { path: "/projects", name: "Projects", icon: <FaProjectDiagram className="mr-2" /> },
    { path: "/experience", name: "Experience", icon: <FaBriefcase className="mr-2" /> },
    { path: "/certifications", name: "Certifications", icon: <FaCertificate className="mr-2" /> },
    { path: "/contact", name: "Contact", icon: <FaEnvelope className="mr-2" /> }
  ];

  const socialLinks = [
    { url: "https://www.linkedin.com/in/dhiraj-patil-046646230/", icon: <FaLinkedin size={20} />, name: "LinkedIn" },
    { url: "https://github.com/Dhirajpatil7721", icon: <FaGithub size={20} />, name: "GitHub" },
    { url: "https://www.instagram.com/dhiraj._.patil_/profilecard/?igsh=emdwaHU5a2p2bmds", icon: <FaInstagram size={20} />, name: "Instagram" },
    { url: "https://www.facebook.com/share/1DL1unsKjW/", icon: <FaFacebook size={20} />, name: "Facebook" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
        damping: 10
      }
    }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {/* Logo Section */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center md:items-start"
          >
            <motion.img 
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              src={logo} 
              alt="Logo" 
              className="w-20 h-auto cursor-pointer mb-4 hover:opacity-80 transition-all duration-300 filter drop-shadow-lg"
              onClick={() => {
                scrollToTop();
                navigate('/');
              }}
            />
            <p className="text-gray-400 text-sm text-center md:text-left">MERN Stack Developer</p>
            
            {/* Decorative line */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mt-3 rounded-full hidden md:block"
            />
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.path}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <button
                    onClick={() => {
                      scrollToTop();
                      navigate(item.path);
                    }}
                    className="flex items-center text-gray-400 hover:text-white transition-all duration-300 group"
                  >
                    <span className="mr-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                      {item.icon}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center md:items-end"
          >
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect With Me</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl relative group"
                  aria-label={social.name}
                >
                  {social.icon}
                  
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Decorative line for mobile/tablet */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mt-3 rounded-full md:hidden"
            />
          </motion.div>
        </motion.div>

        {/* Divider with animation */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-800 my-6"
        ></motion.div>

        {/* Copyright and Back to Top */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dhiraj Patil. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-sm text-gray-500 hover:text-white transition-all duration-300 group"
          >
            <span>Back to top</span>
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiArrowUp className="ml-1 group-hover:translate-y-[-2px] transition-transform" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
}