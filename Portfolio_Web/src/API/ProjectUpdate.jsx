// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ProjectUpdate = ({ project, onClose, onProjectUpdated }) => {
//     const [updatedProject, setUpdatedProject] = useState({
//         title: "",
//         description: "",
//         ico: "",
//         git: "",
//         host: "",
//     });
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
//     useEffect(() => {
//         if (project) {
//             setUpdatedProject({
//                 title: project.title,
//                 description: project.description,
//                 ico: project.ico,
//                 git: project.git,
//                 host: project.host,
//             });
//         }
//     }, [project]);

//     const handleChange = (e) => {
//         setUpdatedProject({
//             ...updatedProject,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios
//             .put(`${API_BASE_URL}/project/title/${project.title}`, updatedProject)
//             .then((response) => {
//                 console.log("Project updated:", response.data);
//                 onProjectUpdated(); // Refresh the project list
//                 onClose(); // Close the modal
//             })
//             .catch((error) => {
//                 console.error("Error updating project:", error);
//             });
//     };

//     return (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-all duration-300">
//             <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md relative border border-gray-100 transform transition-all duration-300">
//                 {/* Close Button (X icon) */}
//                 <button
//                     onClick={onClose}
//                     className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold transition-colors duration-200"
//                     type="button"
//                     aria-label="Close modal"
//                 >
//                     &times;
//                 </button>

//                 <h3 className="text-2xl font-bold text-gray-800 mb-6">Update Project</h3>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">Title</label>
//                         <input
//                             type="text"
//                             name="title"
//                             value={updatedProject.title}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                             required
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">Description</label>
//                         <textarea
//                             name="description"
//                             value={updatedProject.description}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[100px]"
//                             required
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">Icon Class</label>
//                         <input
//                             type="text"
//                             name="ico"
//                             value={updatedProject.ico}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                             placeholder="e.g. FaReact"
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">GitHub URL</label>
//                         <input
//                             type="url"
//                             name="git"
//                             value={updatedProject.git}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <label className="block text-sm font-medium text-gray-700">Live Demo URL</label>
//                         <input
//                             type="url"
//                             name="host"
//                             value={updatedProject.host}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                         />
//                     </div>

//                     <div className="flex justify-end space-x-3 pt-4">
//                         <button
//                             type="button"
//                             onClick={onClose}
//                             className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
//                         >
//                             Cancel
//                         </button>
//                         <button
//                             type="submit"
//                             className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm hover:shadow-md transition-all"
//                         >
//                             Update Project
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ProjectUpdate;








import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaProjectDiagram, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaTimes,
  FaSave,
  FaCode,
  FaHeading,
  FaFileAlt,
  FaGlobe,
  FaEdit,
  FaExclamationCircle,
  FaCheckCircle
} from "react-icons/fa";

const ProjectUpdate = ({ project, onClose, onProjectUpdated }) => {
    const [updatedProject, setUpdatedProject] = useState({
        title: "",
        description: "",
        ico: "",
        git: "",
        host: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

    useEffect(() => {
        if (project) {
            setUpdatedProject({
                title: project.title || "",
                description: project.description || "",
                ico: project.ico || "",
                git: project.git || "",
                host: project.host || "",
            });
            setErrors({});
        }
    }, [project]);

    const handleChange = (e) => {
        setUpdatedProject({
            ...updatedProject,
            [e.target.name]: e.target.value,
        });
        // Clear error when user types
        if (errors[e.target.name]) {
            setErrors(prev => ({ ...prev, [e.target.name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!updatedProject.title.trim()) newErrors.title = 'Project title is required';
        if (!updatedProject.description.trim()) newErrors.description = 'Description is required';
        
        // Validate URLs if provided
        if (updatedProject.git && !isValidUrl(updatedProject.git)) {
            newErrors.git = 'Please enter a valid URL';
        }
        if (updatedProject.host && !isValidUrl(updatedProject.host)) {
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
            .put(`${API_BASE_URL}/project/title/${project.title}`, updatedProject)
            .then((response) => {
                console.log("Project updated:", response.data);
                if (onProjectUpdated) onProjectUpdated();
                onClose();
            })
            .catch((error) => {
                console.error("Error updating project:", error);
                setErrors({ submit: 'Failed to update project. Please try again.' });
            })
            .finally(() => {
                setIsSubmitting(false);
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
            color: 'blue', 
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
            blue: {
                focus: 'focus:border-blue-500 focus:ring-blue-200',
                icon: 'text-blue-600',
                button: 'from-blue-600 to-indigo-600',
                bg: 'bg-blue-50'
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
        return colors[color] || colors.blue;
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
                        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-5 overflow-hidden">
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
                                        <FaEdit className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Update Project</h3>
                                        <p className="text-white/80 text-xs mt-0.5">Edit project details below</p>
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
                                                    value={updatedProject[field.name]}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-2.5 rounded-lg border ${
                                                        errors[field.name] 
                                                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                                                            : `border-gray-300 ${colors.focus}`
                                                    } focus:ring-2 outline-none transition-all text-sm`}
                                                    placeholder={field.placeholder}
                                                    required={field.required}
                                                />
                                                {updatedProject[field.name] && !errors[field.name] && field.name === 'ico' && (
                                                    <div className="absolute right-3 top-2 text-lg text-gray-500">
                                                        <i className={updatedProject.ico.toLowerCase()} />
                                                    </div>
                                                )}
                                                {updatedProject[field.name] && !errors[field.name] && field.name !== 'ico' && (
                                                    <FaCheckCircle className="absolute right-3 top-3 text-green-500 text-sm" />
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
                                                    <FaExclamationCircle className="text-xs" />
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
                                    <div className="relative">
                                        <textarea
                                            name="description"
                                            value={updatedProject.description}
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
                                        {updatedProject.description && !errors.description && (
                                            <FaCheckCircle className="absolute right-3 bottom-3 text-green-500 text-sm" />
                                        )}
                                    </div>
                                    {errors.description && (
                                        <motion.p 
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-xs text-red-600 flex items-center gap-1"
                                        >
                                            <FaExclamationCircle className="text-xs" />
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
                                                <div className="relative">
                                                    <input
                                                        type={field.type}
                                                        name={field.name}
                                                        value={updatedProject[field.name]}
                                                        onChange={handleChange}
                                                        className={`w-full px-4 py-2.5 rounded-lg border ${
                                                            errors[field.name] 
                                                                ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                                                                : `border-gray-300 ${colors.focus}`
                                                        } focus:ring-2 outline-none transition-all text-sm`}
                                                        placeholder={field.placeholder}
                                                    />
                                                    {updatedProject[field.name] && !errors[field.name] && (
                                                        <FaCheckCircle className="absolute right-3 top-3 text-green-500 text-sm" />
                                                    )}
                                                </div>
                                                {errors[field.name] && (
                                                    <motion.p 
                                                        initial={{ opacity: 0, y: -5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="mt-1 text-xs text-red-600 flex items-center gap-1"
                                                    >
                                                        <FaExclamationCircle className="text-xs" />
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
                                            <FaExclamationCircle className="text-sm" />
                                            {errors.submit}
                                        </p>
                                    </motion.div>
                                )}

                                {/* Form footer */}
                                <div className="flex gap-3 pt-4">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white shadow-lg transition-all duration-200 ${
                                            isSubmitting 
                                                ? 'bg-gradient-to-r from-blue-400 to-indigo-400 cursor-not-allowed' 
                                                : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl'
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span>Updating...</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaSave />
                                                <span>Update Project</span>
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
};

export default ProjectUpdate;