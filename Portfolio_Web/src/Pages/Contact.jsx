// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
//   const [error, setError] = useState({
//     name: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//     // Clear the error as the user types
//     if (e.target.name === "name") {
//       setError((prev) => ({ ...prev, name: "" }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Name validation
//     if (!formData.name.trim()) {
//       setError({ name: "Name is required" });
//       return;
//     } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
//       setError({ name: "Name can contain only letters and spaces" });
//       return;
//     }

//     // Clear previous errors
//     setError({ name: "" });

//     try {

//       const response = await axios.post(`${API_BASE_URL}/contact`, formData);
//       toast.success(`${formData.name} Message Sent Successfully!`);
//       setFormData({ name: "", email: "", subject: "", message: "" });
//       setFormData({ name: "", email: "", subject: "", message: "" });
//     } catch (error) {
//       toast.error("Failed to send message. Try again!");
//       console.error("Error submitting form:", error.response?.data || error.message);
//     }

//     // setFormData({ name: "", email: "", subject: "", message: "" });
//   };

//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         when: "beforeChildren"
//       }
//     }
//   };

//   const item = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.5
//       }
//     },
//     hover: {
//       y: -5,
//       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
//       transition: { duration: 0.3 }
//     }
//   };

//   const formItem = {
//     hidden: { opacity: 0, x: 30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//         duration: 0.5
//       }
//     }
//   };

//   return (
//     <section id="contact" className="py-16 mt-8 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-gray-50 to-white">
//       <div className="max-w-6xl mx-auto">
//         <ToastContainer position="top-right" autoClose={3000} />

//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-3">
//             Get In Touch
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
//             Have a project in mind or want to collaborate? Let's connect!
//           </p>
//         </motion.div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12"
//         >
//           <div className="flex flex-col gap-4 sm:gap-6">
//             <motion.div
//               variants={item}
//               whileHover="hover"
//               className="p-6 bg-white rounded-xl shadow-md border border-gray-200"
//             >
//               <div className="flex items-start gap-4">
//                 <motion.div
//                   whileHover={{ rotate: 10, scale: 1.1 }}
//                   className="p-3 bg-red-100 rounded-full flex-shrink-0"
//                 >
//                   <FaMapMarkerAlt className="text-red-500 text-xl" />
//                 </motion.div>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Location</h3>
//                   <Link
//                     to="https://www.google.com/maps/place/Kolhapur,+Maharashtra,+India"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-600 hover:text-blue-500 transition text-sm sm:text-base"
//                   >
//                     Kolhapur, Maharashtra, India
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//               <motion.div
//                 variants={item}
//                 whileHover="hover"
//                 className="p-6 bg-white rounded-xl shadow-md border border-gray-200"
//               >
//                 <div className="flex items-start gap-4">
//                   <motion.div
//                     whileHover={{ rotate: 10, scale: 1.1 }}
//                     className="p-3 bg-yellow-100 rounded-full flex-shrink-0"
//                   >
//                     <FaEnvelope className="text-yellow-500 text-xl" />
//                   </motion.div>
//                   <div>
//                     <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Email</h3>
//                     <Link
//                       to="mailto:dhirajpatiltech@gmail.com"
//                       className="text-gray-600 hover:text-blue-500 transition text-sm sm:text-base break-all"
//                     >
//                       dhirajpatiltech@gmail.com
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 variants={item}
//                 whileHover="hover"
//                 className="p-6 bg-white rounded-xl shadow-md border border-gray-200"
//               >
//                 <div className="flex items-start gap-4">
//                   <motion.div
//                     whileHover={{ rotate: 10, scale: 1.1 }}
//                     className="p-3 bg-green-100 rounded-full flex-shrink-0"
//                   >
//                     <FaPhone className="text-green-500 text-xl" />
//                   </motion.div>
//                   <div>
//                     <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Phone</h3>
//                     <Link
//                       to="tel:+917721888623"
//                       className="text-gray-600 hover:text-blue-500 transition text-sm sm:text-base"
//                     >
//                       +91 7721888623
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>

//             <motion.div
//               variants={item}
//               className="bg-white p-4 rounded-xl shadow-md border border-gray-200"
//             >
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7644.234376411984!2d74.20667763821218!3d16.6710182143157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc05553c2cfa107%3A0x3dc77ec6d78a0fc4!2sMohite%20Colony%2C%20Salokhe%20Nagar%2C%20Kolhapur%2C%20Maharashtra%20416001!5e0!3m2!1sen!2sin!4v1743588909173!5m2!1sen!2sin"
//                 className="w-full h-64 sm:h-80 rounded-lg"
//                 allowFullScreen
//                 loading="lazy"
//                 title="Kolhapur Location"
//               ></iframe>
//             </motion.div>
//           </div>

//           {/* Contact Form */}
//           <motion.div
//             variants={container}
//             className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-200"
//           >
//             <h3 className="text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Send Me a Message</h3>
//             <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//               <motion.div variants={formItem}>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="abc xyz"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3 rounded-lg border ${error.name ? "border-red-500" : "border-gray-300"
//                     } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base`}
//                 />
//                 {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
//               </motion.div>

//               {/* Rest of the fields stay the same */}
//               <motion.div variants={formItem}>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="xyz@example.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
//                 />
//               </motion.div>

//               <motion.div variants={formItem}>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   placeholder="Subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
//                 />
//               </motion.div>

//               <motion.div variants={formItem}>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   placeholder="Type your message here..."
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
//                 ></textarea>
//               </motion.div>

//               <motion.div variants={formItem}>
//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-2 text-sm sm:text-base"
//                 >
//                   <FaPaperPlane className="text-lg" />
//                   Send Message
//                 </motion.button>
//               </motion.div>
//             </form>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Contact;


import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaUser, FaRegEnvelope, FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
  const [error, setError] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear the error as the user types
    if (e.target.name === "name") {
      setError((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Name validation
    if (!formData.name.trim()) {
      setError({ name: "Name is required" });
      return;
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      setError({ name: "Name can contain only letters and spaces" });
      return;
    }

    // Clear previous errors
    setError({ name: "" });

    try {
      const response = await axios.post(`${API_BASE_URL}/contact`, formData);
      toast.success(`${formData.name} Message Sent Successfully!`);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Try again!");
      console.error("Error submitting form:", error.response?.data || error.message);
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
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
        stiffness: 100,
        damping: 10
      }
    }
  };

  const formItem = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      value: "Kolhapur, Maharashtra, India",
      link: "https://www.google.com/maps/place/Kolhapur,+Maharashtra,+India",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
      iconColor: "text-red-500"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email",
      value: "dhirajpatiltech@gmail.com",
      link: "mailto:dhirajpatiltech@gmail.com",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500"
    },
    {
      icon: <FaPhone className="text-xl" />,
      title: "Phone",
      value: "+91 7721888623",
      link: "tel:+917721888623",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-500"
    }
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ToastContainer 
        className="!mt-20"
          position="top-right" 
          autoClose={2000}
          theme="colored"
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

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

       

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mt-5">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Get In Touch
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
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12"
        >
          {/* Left Column - Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            {/* Location Card - Full Width */}
            <motion.div
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 
                         hover:shadow-2xl hover:shadow-red-500/10 hover:border-red-200 
                         transition-all duration-500 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl text-white shadow-lg
                            group-hover:shadow-red-500/30 transition-all duration-300"
                >
                  <FaMapMarkerAlt className="text-xl" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1">Location</h3>
                  <Link
                    to="https://www.google.com/maps/place/Kolhapur,+Maharashtra,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-600 transition text-sm sm:text-base inline-flex items-center gap-1 group/link"
                  >
                    Kolhapur, Maharashtra, India
                    <motion.span
                      whileHover={{ x: 3 }}
                      className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </div>

              {/* Floating glow */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-red-400/20 rounded-full 
                            opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
            </motion.div>

            {/* Email and Phone - Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.slice(1).map((info, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 
                             hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  style={{
                    background: `linear-gradient(to bottom right, white, ${info.bgColor}30)`
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 
                                  group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="flex items-start gap-3 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className={`p-3 ${info.iconBg} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className={info.iconColor}>
                        {info.icon}
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-1">{info.title}</h3>
                      <Link
                        to={info.link}
                        className="text-slate-600 hover:text-blue-600 transition text-xs sm:text-sm break-all inline-flex items-center gap-1 group/link"
                      >
                        {info.value}
                        <motion.span
                          whileHover={{ x: 3 }}
                          className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                        >
                          →
                        </motion.span>
                      </Link>
                    </div>
                  </div>

                  {/* Floating glow */}
                  <div className={`absolute -bottom-10 -right-10 w-16 h-16 ${info.iconColor.replace('text', 'bg')} 
                                  rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              variants={item}
              className="group relative bg-white p-2 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 
                         hover:shadow-2xl hover:border-blue-200 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7644.234376411984!2d74.20667763821218!3d16.6710182143157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc05553c2cfa107%3A0x3dc77ec6d78a0fc4!2sMohite%20Colony%2C%20Salokhe%20Nagar%2C%20Kolhapur%2C%20Maharashtra%20416001!5e0!3m2!1sen!2sin!4v1743588909173!5m2!1sen!2sin"
                className="w-full h-56 sm:h-64 rounded-lg relative z-10"
                allowFullScreen
                loading="lazy"
                title="Kolhapur Location"
              ></iframe>

              {/* Map overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={item}
            className="group relative bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 
                       hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 
                       transition-all duration-500 overflow-hidden"
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 
                          rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 sm:mb-8
                           group-hover:text-transparent group-hover:bg-clip-text 
                           group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600
                           transition-all duration-300">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name Field */}
                <motion.div variants={formItem} className="space-y-1.5">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                      <FaUser className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="abc"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border ${
                        error.name ? "border-red-500" : "border-slate-200"
                      } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
                      transition text-sm sm:text-base bg-white/50 `}
                    />
                  </div>
                  {error.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs sm:text-sm mt-1"
                    >
                      {error.name}
                    </motion.p>
                  )}
                </motion.div>

                {/* Email Field */}
                <motion.div variants={formItem} className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                      <FaRegEnvelope className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="abc@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
                               transition text-sm sm:text-base bg-white/50 "
                    />
                  </div>
                </motion.div>

                {/* Subject Field */}
                <motion.div variants={formItem} className="space-y-1.5">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
                             transition text-sm sm:text-base bg-white/50 backdrop-blur-sm"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div variants={formItem} className="space-y-1.5">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none 
                             transition text-sm sm:text-base bg-white/50 backdrop-blur-sm resize-none"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={formItem} className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
                               py-3 sm:py-3.5 px-6 rounded-lg font-semibold shadow-md 
                               hover:shadow-lg hover:shadow-blue-500/30 transition-all 
                               flex items-center justify-center gap-2 text-sm sm:text-base
                               group/btn relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                   -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                    <FaPaperPlane className="text-lg group-hover/btn:rotate-12 transition-transform" />
                    Send Message
                  </motion.button>
                </motion.div>
              </form>
            </div>

            {/* Floating glow */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400/20 rounded-full 
                          opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500"></div>
          </motion.div>
        </motion.div>

        {/* Interactive Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs sm:text-sm text-slate-400 mt-10 sm:mt-12"
        >
          ✨ I'll get back to you within 24 hours
        </motion.p>
      </div>

      {/* Add custom keyframes for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default Contact;