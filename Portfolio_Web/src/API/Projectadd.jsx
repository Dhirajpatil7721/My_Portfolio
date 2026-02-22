// import axios from 'axios';
// import React, { useState } from 'react';

// function Projectadd({ onClose }) {
//     const [formData, setFormData] = useState({
//         ico: "",
//         title: "",
//         description: "",
//         git: "",
//         host: "",
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         axios
//             .post(`${API_BASE_URL}/project`, formData)
//             .then((response) => {
//                 console.log("Project submitted:", response.data);
//                 setFormData({ ico: "", title: "", description: "", git: "", host: "" });
//                 setIsSubmitting(false);
//                 onClose();
//             })
//             .catch((error) => {
//                 console.error("Error posting data:", error);
//                 setIsSubmitting(false);
//             });
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm transition-opacity duration-300">
//             <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-2xl w-full max-w-md relative transform transition-all duration-300 scale-95 hover:scale-100">
//                 {/* Close Button */}
//                 <button
//                     onClick={onClose}
//                     className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold transition-colors duration-200"
//                     type="button"
//                     aria-label="Close modal"
//                 >
//                     &times;
//                 </button>

//                 {/* Form */}
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                     <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
//                         Add New Project
//                         <div className="w-16 h-1 bg-orange-500 mx-auto mt-2 rounded-full"></div>
//                     </h2>

//                     <div className="space-y-2">
//                         <label htmlFor="title" className="block text-sm font-medium text-gray-700">Project Title</label>
//                         <input
//                             id="title"
//                             type="text"
//                             name="title"
//                             value={formData.title}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
//                             placeholder="My Awesome Project"
//                             required
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <label htmlFor="ico" className="block text-sm font-medium text-gray-700">Icon Class</label>
//                         <div className="relative">
//                             <input
//                                 id="ico"
//                                 type="text"
//                                 name="ico"
//                                 value={formData.ico}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
//                                 placeholder="FaReact, FaCode, etc."
//                             />
//                             {formData.ico && (
//                                 <div className="absolute right-3 top-2 text-lg">
//                                     <i className={formData.ico.toLowerCase()} />
//                                 </div>
//                             )}
//                         </div>
//                     </div>

//                     <div className="space-y-2">
//                         <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//                         <textarea
//                             id="description"
//                             name="description"
//                             value={formData.description}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
//                             rows="3"
//                             placeholder="Describe your project..."
//                             required
//                         />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                             <label htmlFor="git" className="block text-sm font-medium text-gray-700">GitHub URL</label>
//                             <input
//                                 id="git"
//                                 type="url"
//                                 name="git"
//                                 value={formData.git}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
//                                 placeholder="https://github.com/..."
//                             />
//                         </div>

//                         <div className="space-y-2">
//                             <label htmlFor="host" className="block text-sm font-medium text-gray-700">Live Demo</label>
//                             <input
//                                 id="host"
//                                 type="url"
//                                 name="host"
//                                 value={formData.host}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
//                                 placeholder="https://example.com"
//                             />
//                         </div>
//                     </div>

//                     <button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg ${isSubmitting
//                             ? 'bg-orange-400 cursor-not-allowed'
//                             : 'bg-orange-600 hover:bg-orange-700 hover:shadow-xl'
//                             }`}
//                     >
//                         {isSubmitting ? (
//                             <span className="flex items-center justify-center">
//                                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                 </svg>
//                                 Submitting...
//                             </span>
//                         ) : (
//                             'Submit Project'
//                         )}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Projectadd;

import axios from 'axios';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaProjectDiagram, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaTimes,
  FaSave,
  FaCode,
  FaHeading,
  FaFileAlt,
  FaLink,
  FaGlobe
} from 'react-icons/fa';

function Projectadd({ onClose, onProjectAdded }) {
    const [formData, setFormData] = useState({
        ico: "",
        title: "",
        description: "",
        git: "",
        host: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = 'Project title is required';
        if (!formData.description.trim()) newErrors.description = 'Description is required';
        
        // Validate URLs if provided
        if (formData.git && !isValidUrl(formData.git)) {
            newErrors.git = 'Please enter a valid URL';
        }
        if (formData.host && !isValidUrl(formData.host)) {
            newErrors.host = 'Please enter a valid URL';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        axios
            .post(`${API_BASE_URL}/project`, formData)
            .then((response) => {
                console.log("Project submitted:", response.data);
                setFormData({ ico: "", title: "", description: "", git: "", host: "" });
                setIsSubmitting(false);
                if (onProjectAdded) onProjectAdded();
                onClose();
            })
            .catch((error) => {
                console.error("Error posting data:", error);
                setIsSubmitting(false);
                setErrors({ submit: 'Failed to add project. Please try again.' });
            });
    };

    // Animation variants
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.2 } }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
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
            y: 20,
            transition: { duration: 0.2 }
        }
    };

    const formItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const fieldConfigs = [
        { 
            name: 'title', 
            label: 'Project Title', 
            icon: FaHeading, 
            color: 'orange', 
            placeholder: 'e.g. My Awesome Project',
            type: 'text',
            required: true
        },
        { 
            name: 'ico', 
            label: 'Icon Class', 
            icon: FaCode, 
            color: 'purple', 
            placeholder: 'e.g. FaReact, FaCode',
            type: 'text',
            required: false,
            helper: 'Enter React Icon component name'
        },
        { 
            name: 'git', 
            label: 'GitHub URL', 
            icon: FaGithub, 
            color: 'gray', 
            placeholder: 'https://github.com/...',
            type: 'url',
            required: false
        },
        { 
            name: 'host', 
            label: 'Live Demo URL', 
            icon: FaGlobe, 
            color: 'green', 
            placeholder: 'https://example.com',
            type: 'url',
            required: false
        },
    ];

    const getColorClasses = (color) => {
        const colors = {
            orange: {
                focus: 'focus:border-orange-500 focus:ring-orange-200',
                icon: 'text-orange-600',
                button: 'from-orange-600 to-red-600',
                bg: 'bg-orange-50'
            },
            purple: {
                focus: 'focus:border-purple-500 focus:ring-purple-200',
                icon: 'text-purple-600',
                button: 'from-purple-600 to-pink-600',
                bg: 'bg-purple-50'
            },
            gray: {
                focus: 'focus:border-gray-500 focus:ring-gray-200',
                icon: 'text-gray-600',
                button: 'from-gray-600 to-gray-800',
                bg: 'bg-gray-50'
            },
            green: {
                focus: 'focus:border-green-500 focus:ring-green-200',
                icon: 'text-green-600',
                button: 'from-green-600 to-emerald-600',
                bg: 'bg-green-50'
            },
        };
        return colors[color] || colors.orange;
    };

    return (
        <AnimatePresence>
            <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/60 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <motion.div
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative w-full max-w-md"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative transform overflow-hidden rounded-2xl bg-white shadow-2xl">
                        {/* Modal header with gradient */}
                        <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 px-6 py-5 overflow-hidden">
                            {/* Decorative pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <rect x="0" y="0" width="100" height="100" fill="white" />
                                    <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                            
                            <div className="flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                        <FaProjectDiagram className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Add New Project</h3>
                                        <p className="text-white/80 text-xs mt-0.5">Fill in the project details below</p>
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ rotate: 90, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onClose}
                                    className="rounded-lg p-1.5 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200"
                                >
                                    <FaTimes className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Modal body */}
                        <div className="bg-white px-6 py-5 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Title and Icon fields */}
                                {fieldConfigs.slice(0, 2).map((field) => {
                                    const colors = getColorClasses(field.color);
                                    return (
                                        <motion.div
                                            key={field.name}
                                            variants={formItemVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                                <span className="flex items-center gap-2">
                                                    <field.icon className={colors.icon} />
                                                    {field.label}
                                                    {field.required && <span className="text-red-500">*</span>}
                                                </span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={field.type}
                                                    name={field.name}
                                                    value={formData[field.name]}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-2.5 rounded-lg border ${
                                                        errors[field.name] 
                                                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                                                            : `border-gray-300 ${colors.focus}`
                                                    } focus:ring-2 outline-none transition-all text-sm`}
                                                    placeholder={field.placeholder}
                                                    required={field.required}
                                                />
                                                {formData[field.name] && !errors[field.name] && field.name === 'ico' && (
                                                    <div className="absolute right-3 top-2 text-lg text-gray-500">
                                                        <i className={formData.ico.toLowerCase()} />
                                                    </div>
                                                )}
                                            </div>
                                            {field.helper && !errors[field.name] && (
                                                <p className="mt-1 text-xs text-gray-500">{field.helper}</p>
                                            )}
                                            {errors[field.name] && (
                                                <motion.p 
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="mt-1 text-xs text-red-600 flex items-center gap-1"
                                                >
                                                    <FaTimes className="text-xs" />
                                                    {errors[field.name]}
                                                </motion.p>
                                            )}
                                        </motion.div>
                                    );
                                })}

                                {/* Description field */}
                                <motion.div variants={formItemVariants} initial="hidden" animate="visible">
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                        <span className="flex items-center gap-2">
                                            <FaFileAlt className="text-pink-600" />
                                            Description <span className="text-red-500">*</span>
                                        </span>
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows={4}
                                        className={`w-full px-4 py-2.5 rounded-lg border ${
                                            errors.description 
                                                ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                                                : 'border-gray-300 focus:border-pink-500 focus:ring-pink-200'
                                        } focus:ring-2 outline-none transition-all text-sm resize-none`}
                                        placeholder="Describe your project, its features, and technologies used..."
                                        required
                                    />
                                    {errors.description && (
                                        <motion.p 
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-xs text-red-600 flex items-center gap-1"
                                        >
                                            <FaTimes className="text-xs" />
                                            {errors.description}
                                        </motion.p>
                                    )}
                                </motion.div>

                                {/* URL fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {fieldConfigs.slice(2).map((field) => {
                                        const colors = getColorClasses(field.color);
                                        return (
                                            <motion.div
                                                key={field.name}
                                                variants={formItemVariants}
                                                initial="hidden"
                                                animate="visible"
                                            >
                                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                                    <span className="flex items-center gap-2">
                                                        <field.icon className={colors.icon} />
                                                        {field.label}
                                                    </span>
                                                </label>
                                                <input
                                                    type={field.type}
                                                    name={field.name}
                                                    value={formData[field.name]}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-2.5 rounded-lg border ${
                                                        errors[field.name] 
                                                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                                                            : `border-gray-300 ${colors.focus}`
                                                    } focus:ring-2 outline-none transition-all text-sm`}
                                                    placeholder={field.placeholder}
                                                />
                                                {errors[field.name] && (
                                                    <motion.p 
                                                        initial={{ opacity: 0, y: -5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="mt-1 text-xs text-red-600 flex items-center gap-1"
                                                    >
                                                        <FaTimes className="text-xs" />
                                                        {errors[field.name]}
                                                    </motion.p>
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Submit Error */}
                                {errors.submit && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="rounded-lg bg-red-50 p-3 border border-red-200"
                                    >
                                        <p className="text-xs text-red-700 flex items-center gap-2">
                                            <FaTimes className="text-sm" />
                                            {errors.submit}
                                        </p>
                                    </motion.div>
                                )}

                                {/* Form footer */}
                                <div className="flex gap-3 pt-2">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white shadow-lg transition-all duration-200 ${
                                            isSubmitting 
                                                ? 'bg-gradient-to-r from-orange-400 to-red-400 cursor-not-allowed' 
                                                : 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 hover:shadow-xl'
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span>Adding...</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaSave />
                                                <span>Add Project</span>
                                            </>
                                        )}
                                    </motion.button>
                                    
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="button"
                                        onClick={onClose}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-gray-700 bg-white border border-gray-300 shadow-md hover:bg-gray-50 hover:shadow-lg transition-all duration-200"
                                    >
                                        <FaTimes />
                                        <span>Cancel</span>
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Projectadd;