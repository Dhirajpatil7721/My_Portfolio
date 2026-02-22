// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo1.png";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <nav className="bg-white text-black p-4 fixed w-full top-0 shadow-md z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <img className="w-20 h-auto cursor-pointer" onClick={() => navigate('/')} src={logo} alt="Logo" />

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-3xl focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           &#9776;
//         </button>

//         {/* Navigation Links */}
//         <ul
//           className={`md:flex md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 ${
//             isOpen ? "block" : "hidden"
//           }`}
//         >
//           {[
//             { path: "/", label: "Home" },
//             { path: "/about", label: "About Me" },
//             { path: "/skills", label: "Skills" },
//             { path: "/projects", label: "Projects" },
//             { path: "/experience", label: "Experience" },
//             { path: "/certifications", label: "Certifications" },
//             { path: "/contact", label: "Contact" }
//           ].map((item) => (
//             <li key={item.path}>
//               <Link
//                 to={item.path}
//                 className="block py-2 px-3 hover:text-gray-500"
//                 onClick={() => {
//                   setIsOpen(false); // Close menu on small devices
//                   window.scrollTo(0, 0); // Ensure page loads from top
//                 }}
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }



import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/certifications", label: "Certifications" },
    { path: "/contact", label: "Contact" }
  ];

  const handleNavClick = (path) => {
    setIsOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-white shadow-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Made Bigger */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer relative group"
            onClick={() => handleNavClick('/')}
          >
            <img 
              className="w-28 sm:w-32 h-auto transition-all duration-300 filter drop-shadow-md group-hover:drop-shadow-lg" 
              src={logo} 
              alt="Logo" 
            />
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className={`flex items-center px-4 py-2.5 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-blue-600 bg-blue-50 shadow-sm"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
                
                {/* Active indicator */}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 shadow-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-blue-600" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-blue-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden absolute left-0 right-0 top-full mt-2 mx-4 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
            >
              <div className="py-2 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={mobileItemVariants}
                    whileHover={{ x: 5 }}
                    className="px-2"
                  >
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className={`w-full text-left px-4 py-3.5 rounded-lg transition-all duration-300 ${
                        location.pathname === item.path
                          ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-base font-medium">{item.label}</span>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Mobile menu footer */}
              <div className="border-t border-gray-100 p-4 bg-gradient-to-r from-gray-50 to-slate-50">
                <p className="text-xs text-center text-gray-500">
                  © {new Date().getFullYear()} Dhiraj Patil
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background overlay for mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}