
// import React, { useState } from "react";
// import axios from "axios";


// const ExpiAdd = ({ isOpen, onClose, onAddExperience }) => {
//     const [newExperience, setNewExperience] = useState({
//         company: "",
//         position: "",
//         startDate: "",
//         endDate: "",
//         exp: "",
//         description: "",
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewExperience((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         try {
//             const response = await axios.post(`${API_BASE_URL}/experience`, newExperience);
//             onAddExperience(response.data);
//             onClose();
//             // Reset form after successful submission
//             setNewExperience({
//                 company: "",
//                 position: "",
//                 startDate: "",
//                 endDate: "",
//                 exp: "",
//                 description: "",
//             });

//         } catch (err) {
//             console.error("Error adding experience:", err);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 transition-opacity duration-300">

//             <div className="relative w-full max-w-md p-4">
//                 {/* Modal content */}
//                 <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-300 sm:my-8 sm:w-full sm:max-w-lg">
//                     {/* Modal header */}
//                     <div className="flex items-center justify-between rounded-t-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3 sm:px-6">
//                         <h3 className="text-lg font-semibold text-white">Add New Experience</h3>
//                         <button
//                             onClick={onClose}
//                             className="ml-1 rounded-md p-1 text-white hover:bg-indigo-800 focus:outline-none"
//                         >
//                             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Modal body */}
//                     <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                         <form onSubmit={handleSubmit} className="space-y-4">
//                             <div>
//                                 <label htmlFor="company" className="block text-sm font-medium text-gray-700">
//                                     Company Name
//                                 </label>
//                                 <div className="mt-1">
//                                     <input
//                                         id="company"
//                                         type="text"
//                                         name="company"
//                                         value={newExperience.company}
//                                         onChange={handleChange}
//                                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//                                         placeholder="e.g. Google"
//                                         required
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label htmlFor="position" className="block text-sm font-medium text-gray-700">
//                                     Position
//                                 </label>
//                                 <div className="mt-1">
//                                     <input
//                                         id="position"
//                                         type="text"
//                                         name="position"
//                                         value={newExperience.position}
//                                         onChange={handleChange}
//                                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//                                         placeholder="e.g. Software Engineer"
//                                         required
//                                     />
//                                 </div>
//                             </div>

//                             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                                 <div>
//                                     <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
//                                         Start Date
//                                     </label>
//                                     <div className="mt-1">
//                                         <input
//                                             id="startDate"
//                                             type="text"
//                                             name="startDate"
//                                             value={newExperience.startDate}
//                                             onChange={handleChange}
//                                             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//                                             placeholder="MM/YYYY"
//                                             required
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
//                                         End Date
//                                     </label>
//                                     <div className="mt-1">
//                                         <input
//                                             id="endDate"
//                                             type="text"
//                                             name="endDate"
//                                             value={newExperience.endDate}
//                                             onChange={handleChange}
//                                             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//                                             placeholder="MM/YYYY or Present"
//                                             required
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <label htmlFor="exp" className="block text-sm font-medium text-gray-700">
//                                     Duration
//                                 </label>
//                                 <div className="mt-1">
//                                     <input
//                                         id="exp"
//                                         type="text"
//                                         name="exp"
//                                         value={newExperience.exp}
//                                         onChange={handleChange}
//                                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//                                         placeholder="e.g. 2 years"
//                                         required
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                                     Description
//                                 </label>
//                                 <div className="mt-1">
//                                     <textarea
//                                         id="description"
//                                         name="description"
//                                         rows={3}
//                                         value={newExperience.description}
//                                         onChange={handleChange}
//                                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//                                         placeholder="Describe your responsibilities and achievements"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         </form>
//                     </div>

//                     {/* Modal footer */}
//                     <div className="rounded-b-lg bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//                         <button
//                             type="button"
//                             onClick={handleSubmit}
//                             disabled={isSubmitting}
//                             className={`inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm transition-colors duration-200 sm:ml-3 sm:w-auto sm:text-sm 
//                             ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
//                         >
//                             {isSubmitting ? (
//                                 <>
//                                     <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                     </svg>
//                                     Adding...
//                                 </>
//                             ) : (
//                                 'Add Experience'
//                             )}
//                         </button>
//                         <button
//                             type="button"
//                             onClick={onClose}
//                             className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ExpiAdd;


import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBuilding, 
  FaUserTie, 
  FaCalendarAlt, 
  FaClock, 
  FaFileAlt, 
  FaTimes,
  FaSave,
  FaBriefcase
} from "react-icons/fa";

const ExpiAdd = ({ isOpen, onClose, onAddExperience }) => {
    const [newExperience, setNewExperience] = useState({
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        exp: "",
        description: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewExperience((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/experience`, newExperience);
            onAddExperience(response.data);
            onClose();
            // Reset form after successful submission
            setNewExperience({
                company: "",
                position: "",
                startDate: "",
                endDate: "",
                exp: "",
                description: "",
            });

        } catch (err) {
            console.error("Error adding experience:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

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

    return (
        <AnimatePresence>
            {isOpen && (
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
                        {/* Modal content */}
                        <div className="relative transform overflow-hidden rounded-2xl bg-white shadow-2xl">
                            {/* Modal header with gradient and pattern */}
                            <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-5 overflow-hidden">
                                {/* Decorative pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="2" />
                                    </svg>
                                </div>
                                
                                <div className="flex items-center justify-between relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                            <FaBriefcase className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Add New Experience</h3>
                                            <p className="text-white/80 text-xs mt-0.5">Fill in the details below</p>
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
                            <div className="bg-white px-6 py-5 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Company Name */}
                                    <motion.div variants={formItemVariants} initial="hidden" animate="visible">
                                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            <span className="flex items-center gap-2">
                                                <FaBuilding className="text-blue-600" />
                                                Company Name
                                            </span>
                                        </label>
                                        <input
                                            id="company"
                                            type="text"
                                            name="company"
                                            value={newExperience.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
                                            placeholder="e.g. Google"
                                            required
                                        />
                                    </motion.div>

                                    {/* Position */}
                                    <motion.div variants={formItemVariants} initial="hidden" animate="visible">
                                        <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            <span className="flex items-center gap-2">
                                                <FaUserTie className="text-indigo-600" />
                                                Position
                                            </span>
                                        </label>
                                        <input
                                            id="position"
                                            type="text"
                                            name="position"
                                            value={newExperience.position}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-sm"
                                            placeholder="e.g. Software Engineer"
                                            required
                                        />
                                    </motion.div>

                                    {/* Start Date and End Date */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <motion.div variants={formItemVariants} initial="hidden" animate="visible">
                                            <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-1.5">
                                                <span className="flex items-center gap-2">
                                                    <FaCalendarAlt className="text-green-600" />
                                                    Start Date
                                                </span>
                                            </label>
                                            <input
                                                id="startDate"
                                                type="text"
                                                name="startDate"
                                                value={newExperience.startDate}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-sm"
                                                placeholder="MM/YYYY"
                                                required
                                            />
                                        </motion.div>

                                        <motion.div variants={formItemVariants} initial="hidden" animate="visible">
                                            <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700 mb-1.5">
                                                <span className="flex items-center gap-2">
                                                    <FaCalendarAlt className="text-orange-600" />
                                                    End Date
                                                </span>
                                            </label>
                                            <input
                                                id="endDate"
                                                type="text"
                                                name="endDate"
                                                value={newExperience.endDate}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm"
                                                placeholder="MM/YYYY or Present"
                                                required
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Duration */}
                                    <motion.div variants={formItemVariants} initial="hidden" animate="visible">
                                        <label htmlFor="exp" className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            <span className="flex items-center gap-2">
                                                <FaClock className="text-purple-600" />
                                                Duration
                                            </span>
                                        </label>
                                        <input
                                            id="exp"
                                            type="text"
                                            name="exp"
                                            value={newExperience.exp}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-sm"
                                            placeholder="e.g. 2 years"
                                            required
                                        />
                                    </motion.div>

                                    {/* Description */}
                                    <motion.div variants={formItemVariants} initial="hidden" animate="visible">
                                        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            <span className="flex items-center gap-2">
                                                <FaFileAlt className="text-pink-600" />
                                                Description
                                            </span>
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={4}
                                            value={newExperience.description}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all text-sm resize-none"
                                            placeholder="Describe your responsibilities and achievements"
                                            required
                                        />
                                    </motion.div>
                                </form>
                            </div>

                            {/* Modal footer */}
                            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                                <div className="flex flex-col sm:flex-row-reverse gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className={`flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-semibold text-white shadow-lg transition-all duration-200 ${
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
                                                <span>Adding...</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaSave />
                                                <span>Save Experience</span>
                                            </>
                                        )}
                                    </motion.button>
                                    
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="button"
                                        onClick={onClose}
                                        className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-semibold text-gray-700 bg-white border border-gray-300 shadow-md hover:bg-gray-50 hover:shadow-lg transition-all duration-200"
                                    >
                                        <FaTimes />
                                        <span>Cancel</span>
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ExpiAdd;