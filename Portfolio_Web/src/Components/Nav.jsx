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
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isTransparent = isHome && !scrolled;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close mobile menu on Escape or when resizing to desktop width
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent py-2.5 sm:py-3"
            : scrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
              : "bg-white shadow-md py-2.5"
        }`}
      >
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 box-border">
          <div className="flex justify-between items-center gap-2 min-w-0">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer relative group shrink-0 w-24 sm:w-28 md:w-32 h-9 sm:h-10 md:h-11 flex items-center"
              onClick={() => handleNavClick('/')}
            >
              <img 
                className={`w-full h-auto transition-all duration-300 filter drop-shadow-md group-hover:drop-shadow-lg pointer-events-none ${
                  isTransparent ? "" : "scale-[1.02] -translate-x-[1.5px] -translate-y-[1px]"
                }`}
                src={isTransparent ? logo2 : logo1} 
                alt="Logo" 
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1.5 xl:gap-2">
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
                    className={`whitespace-nowrap flex items-center px-2 lg:px-3.5 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-300 ${
                      isTransparent
                        ? location.pathname === item.path
                          ? "text-cyan-300"
                          : "text-white hover:text-cyan-300"
                        : location.pathname === item.path
                          ? "text-blue-600"
                          : "text-black hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                  
                  {/* Active indicator */}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute -bottom-1 left-2 right-2 h-0.5 rounded-full ${
                        isTransparent
                          ? "bg-gradient-to-r from-cyan-400 to-white"
                          : "bg-gradient-to-r from-blue-600 to-cyan-500"
                      }`}
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className="md:hidden shrink-0 relative w-10 h-10 flex items-center justify-center bg-transparent border-0 transition-opacity duration-300 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
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
                    <X className={`w-5 h-5 ${isTransparent ? "text-white" : "text-slate-800"}`} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className={`w-5 h-5 ${isTransparent ? "text-white" : "text-slate-800"}`} />
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
                className={`md:hidden absolute left-4 right-4 top-full mt-2 rounded-2xl shadow-2xl border overflow-hidden z-50 backdrop-blur-xl ${
                  isTransparent
                    ? "bg-slate-900/95 border-white/15"
                    : "bg-white/95 border-slate-200"
                }`}
              >
                <div className="py-2 max-h-[calc(100dvh-5.5rem)] overflow-y-auto">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.div
                        key={item.path}
                        variants={mobileItemVariants}
                        className="px-2 py-0.5"
                      >
                        <button
                          onClick={() => handleNavClick(item.path)}
                          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition-all duration-200 ${
                            isTransparent
                              ? isActive
                                ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-400/30 font-semibold"
                                : "text-slate-200 hover:bg-white/10"
                              : isActive
                                ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 border border-blue-200/60 font-semibold"
                                : "text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          <span className="text-sm sm:text-base">{item.label}</span>
                          {isActive && (
                            <span
                              className={`w-2 h-2 rounded-full ${
                                isTransparent ? "bg-cyan-400" : "bg-blue-600"
                              }`}
                            />
                          )}
                        </button>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile menu footer */}
                <div
                  className={`border-t p-3 ${
                    isTransparent
                      ? "border-white/10 bg-slate-950/60"
                      : "border-slate-100 bg-slate-50"
                  }`}
                >
                  <p className={`text-xs text-center ${isTransparent ? "text-slate-400" : "text-slate-500"}`}>
                    © {new Date().getFullYear()} Dhiraj Patil
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Background overlay for mobile menu (kept outside nav so fixed covers full viewport) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}