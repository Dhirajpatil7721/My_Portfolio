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


import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  User,
  Building2,
  Briefcase,
  MessageSquare,
  ChevronDown,
  Lock,
  Check,
  ArrowRight,
} from "lucide-react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const SUBJECT_OPTIONS = [
  "Job Opportunity",
  "Freelance / Project Inquiry",
  "Full-Stack / Mobile Development",
  "Technical Collaboration",
  "General Inquiry",
];

const CONTACT_CHANNELS = [
  {
    icon: MapPin,
    label: "Location",
    value: "Kolhapur, Maharashtra, India",
    href: "https://www.google.com/maps/place/Kolhapur,+Maharashtra,+India",
    isExternal: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "dhirajpatiltech@gmail.com",
    href: "mailto:dhirajpatiltech@gmail.com",
    isExternal: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7721888623",
    href: "tel:+917721888623",
    isExternal: false,
  },
];

const SOCIAL_PROFILES = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dhiraj-patil-046646230/",
    icon: FaLinkedinIn,
    hoverClass: "hover:bg-blue-600 hover:border-blue-600",
  },
  {
    label: "GitHub",
    href: "https://github.com/Dhirajpatil7721",
    icon: FaGithub,
    hoverClass: "hover:bg-slate-800 hover:border-slate-800",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dhiraj._.patil_/profilecard/?igsh=emdwaHU5a2p2bmds",
    icon: FaInstagram,
    hoverClass: "hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:border-pink-500",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: SUBJECT_OPTIONS[0],
    message: "",
  });
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [error, setError] = useState({ name: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "name") {
      setError((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError({ name: "Name is required" });
      return;
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      setError({ name: "Name can contain only letters and spaces" });
      return;
    }

    setError({ name: "" });
    setSubmitting(true);

    try {
      await axios.post(`${API_BASE_URL}/contact`, formData);
      toast.success(`${formData.name} Message Sent Successfully!`);
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: SUBJECT_OPTIONS[0],
        message: "",
      });
    } catch (err) {
      toast.error("Failed to send message. Try again!");
      console.error("Error submitting form:", err.response?.data || err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        when: "beforeChildren",
      },
    },
  };

  const cardVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 14,
      },
    },
  };

  const inputBaseClass =
    "w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-200/90 bg-slate-50/80 hover:bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400";

  return (
    <section
      id="contact"
      className="relative pt-16 pb-6 sm:pt-[68px] sm:pb-6 lg:min-h-screen lg:flex lg:items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/35 to-cyan-50/40"
    >
      {/* Subtle decorative background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div
          className="hidden md:block absolute top-14 left-8 w-20 h-20 opacity-[0.14] text-blue-500"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1.2px, transparent 1.2px)",
            backgroundSize: "10px 10px",
          }}
        />
        <div
          className="hidden md:block absolute top-28 right-8 w-20 h-20 opacity-[0.14] text-blue-500"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1.2px, transparent 1.2px)",
            backgroundSize: "10px 10px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-3.5 sm:mb-4 relative"
        >
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[11px] font-semibold mb-1.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open to Work
          </span>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto px-4 leading-snug">
            I&apos;m currently exploring new career opportunities. Feel free to reach out for
            relevant roles or professional discussions.
          </p>
        </motion.div>

        {/* Main 2-Column Layout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch"
        >
          {/* Left Column - Unified Contact Information Card */}
          <motion.div
            variants={cardVariant}
            className="lg:col-span-4 relative bg-white/95 backdrop-blur-md rounded-2xl shadow-lg shadow-slate-200/60
                       border border-slate-200/80 p-4 sm:p-5 flex flex-col justify-between overflow-hidden"
          >
            {/* Top-right soft blue corner accent */}
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-200/55 via-sky-100/35 to-transparent rounded-bl-[100px] pointer-events-none"
            />

            <div className="relative z-10">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-0.5">
                Contact Information
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 mb-3.5">
                Feel free to reach out via any of the channels below.
              </p>

              {/* Contact Channels */}
              <div className="space-y-2.5">
                {CONTACT_CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target={channel.isExternal ? "_blank" : undefined}
                      rel={channel.isExternal ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 p-1.5 -mx-1.5 rounded-xl hover:bg-blue-50/50 transition-colors duration-200"
                    >
                      <div
                        className="shrink-0 w-9 h-9 rounded-full bg-blue-50 border border-blue-100 text-blue-600
                                   flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white
                                   group-hover:border-blue-600 transition-all duration-200"
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold text-slate-800">{channel.label}</p>
                        <p className="text-xs sm:text-[13px] text-slate-600 group-hover:text-blue-600 transition-colors truncate">
                          {channel.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 mt-4 space-y-3.5">
              {/* Open to Work Banner */}
              <div className="flex items-center justify-between gap-2.5 p-2.5 rounded-xl bg-gradient-to-r from-emerald-50 via-emerald-50/80 to-teal-50 border border-emerald-200/80">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-800 leading-tight">
                      Open to Work
                    </p>
                    <p className="text-[11px] text-emerald-700 truncate">
                      Available for new opportunities
                    </p>
                  </div>
                </div>

                <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-2.5">
                {SOCIAL_PROFILES.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      aria-label={social.label}
                      className={`w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:text-white border border-slate-200/80
                                  flex items-center justify-center shadow-sm hover:-translate-y-0.5 transition-all duration-200 ${social.hoverClass}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Send Me a Message Form Card */}
          <motion.div
            variants={cardVariant}
            className="lg:col-span-8 relative bg-white/95 backdrop-blur-md rounded-2xl shadow-lg shadow-slate-200/60
                       border border-slate-200/80 p-4 sm:p-5 flex flex-col overflow-hidden"
          >
            {/* Form Header */}
            <div className="flex items-center gap-3 mb-3.5">
              <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shadow-sm">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                  Send Me a Message
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  Have an opportunity that matches my skills? I&apos;d love to hear from you.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5 flex flex-col flex-1">
              {/* Your Name & Email Address Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-[11px] sm:text-xs font-semibold text-slate-700">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${inputBaseClass} ${error.name ? "!border-rose-400 focus:!ring-rose-500/20 focus:!border-rose-500" : ""}`}
                    />
                  </div>
                  {error.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-rose-500 text-[11px]"
                    >
                      {error.name}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-[11px] sm:text-xs font-semibold text-slate-700">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputBaseClass}
                    />
                  </div>
                </div>
              </div>

              {/* Company Name & Subject Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="company" className="block text-[11px] sm:text-xs font-semibold text-slate-700">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Enter company name"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputBaseClass}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="block text-[11px] sm:text-xs font-semibold text-slate-700">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`${inputBaseClass} appearance-none pr-9 cursor-pointer`}
                    >
                      {SUBJECT_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-1 flex-1 flex flex-col">
                <label htmlFor="message" className="block text-[11px] sm:text-xs font-semibold text-slate-700">
                  Message <span className="text-rose-500">*</span>
                </label>
                <div className="relative flex-1 flex">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Tell me about the opportunity, your requirements, or anything else..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`${inputBaseClass} resize-y min-h-[82px] flex-1`}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-0.5">
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.01 }}
                  whileTap={{ scale: submitting ? 1 : 0.99 }}
                  className="w-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white
                             py-2.5 px-6 rounded-xl font-semibold shadow-md shadow-blue-500/25
                             hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-300
                             flex items-center justify-center gap-2 text-xs sm:text-sm
                             group/btn relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent
                               -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
                  />
                  <Send className="w-4 h-4" />
                  <span>{submitting ? "Sending..." : "Send Message"}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </motion.button>
              </div>

              {/* Reply time note */}
              <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>I usually reply within 24–48 hours</span>
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom keyframes for blob animation */}
      <style>{`
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
      `}</style>
    </section>
  );
}

export default Contact;