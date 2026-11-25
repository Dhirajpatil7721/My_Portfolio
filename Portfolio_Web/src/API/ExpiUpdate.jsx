// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ExpiUpdate = ({ isOpen, onClose, existingData, onUpdate }) => {
//     const [updatedExperience, setUpdatedExperience] = useState({ ...existingData });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errors, setErrors] = useState({});
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
//     useEffect(() => {
//         setUpdatedExperience({ ...existingData });
//         setErrors({});
//     }, [existingData]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUpdatedExperience((prev) => ({ ...prev, [name]: value }));
//         // Clear error when user types
//         if (errors[name]) {
//             setErrors(prev => ({ ...prev, [name]: '' }));
//         }
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!updatedExperience.company.trim()) newErrors.company = 'Company is required';
//         if (!updatedExperience.position.trim()) newErrors.position = 'Position is required';
//         if (!updatedExperience.startDate.trim()) newErrors.startDate = 'Start date is required';
//         if (!updatedExperience.endDate.trim()) newErrors.endDate = 'End date is required';
//         // if (!updatedExperience.exp.trim()) newErrors.exp = 'Experience duration is required';
//         if (!updatedExperience.description.trim()) newErrors.description = 'Description is required';

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!validateForm()) return;

//         setIsSubmitting(true);
//         try {
//             const encodedCompany = encodeURIComponent(existingData.company);
//             const res = await axios.put(
//                 `${API_BASE_URL}/experience/company/${encodedCompany}`,
//                 updatedExperience
//             );
//             onUpdate(res.data.data);
//             onClose();
//         } catch (err) {
//             console.error("Error updating experience:", err);
//             setErrors({ submit: 'Failed to update experience. Please try again.' });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50 backdrop-blur-sm transition-opacity duration-300">
//             <div className="relative w-full max-w-md p-4">
//                 <div className="relative transform overflow-hidden rounded-xl bg-white shadow-2xl transition-all duration-300 sm:my-8 sm:w-full sm:max-w-lg">
//                     {/* Modal header */}
//                     <div className="flex items-center justify-between rounded-t-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
//                         <h3 className="text-xl font-semibold text-white">Update Experience</h3>
//                         <button
//                             onClick={onClose}
//                             className="rounded-md p-1 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
//                         >
//                             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Modal body */}
//                     <div className="bg-white px-6 py-5">
//                         <form onSubmit={handleSubmit} className="space-y-5">
//                             {['company', 'position', 'startDate', 'endDate', 'exp'].map((field) => (
//                                 <div key={field}>
//                                     <label className="block text-sm font-medium text-gray-700 capitalize mb-1">
//                                         {field === 'exp' ? 'Experience Duration' : field.replace(/([A-Z])/g, ' $1')}
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name={field}
//                                         value={updatedExperience[field] || ''}
//                                         onChange={handleChange}
//                                         className={`block w-full rounded-lg border ${errors[field] ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} shadow-sm sm:text-sm`}
//                                         placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
//                                     />
//                                     {errors[field] && (
//                                         <p className="mt-1 text-sm text-red-600">{errors[field]}</p>
//                                     )}
//                                 </div>
//                             ))}

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                                 <textarea
//                                     name="description"
//                                     rows={4}
//                                     value={updatedExperience.description || ''}
//                                     onChange={handleChange}
//                                     className={`block w-full rounded-lg border ${errors.description ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} shadow-sm sm:text-sm`}
//                                     placeholder="Describe your responsibilities and achievements"
//                                 />
//                                 {errors.description && (
//                                     <p className="mt-1 text-sm text-red-600">{errors.description}</p>
//                                 )}
//                             </div>

//                             {errors.submit && (
//                                 <div className="rounded-md bg-red-50 p-3">
//                                     <p className="text-sm text-red-700">{errors.submit}</p>
//                                 </div>
//                             )}
//                         </form>
//                     </div>

//                     {/* Modal footer */}
//                     <div className="rounded-b-xl bg-gray-50 px-6 py-4 sm:flex sm:flex-row-reverse">
//                         <button
//                             type="button"
//                             onClick={handleSubmit}
//                             disabled={isSubmitting}
//                             className={`inline-flex w-full justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 sm:ml-3 sm:w-auto
//                             ${isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
//                         >
//                             {isSubmitting ? (
//                                 <>
//                                     <svg className="-ml-1 mr-2 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                     </svg>
//                                     Updating...
//                                 </>
//                             ) : (
//                                 'Update Experience'
//                             )}
//                         </button>
//                         <button
//                             type="button"
//                             onClick={onClose}
//                             className="mt-3 inline-flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ExpiUpdate;



import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBuilding, 
  FaGlobe,
  FaUserTie, 
  FaCalendarAlt, 
  FaClock, 
  FaFileAlt, 
  FaTimes,
  FaSave,
  FaBriefcase,
  FaExclamationCircle,
  FaCheckCircle
} from "react-icons/fa";
import {
  MONTH_OPTIONS,
  getYearOptions,
  parseMonthYear,
  formatMonthYear,
  calculateDuration,
} from "../utils/experienceUtils";

const ExpiUpdate = ({ isOpen, onClose, existingData, onUpdate }) => {
    const currentYear = String(new Date().getFullYear());
    const currentMonth = String(new Date().getMonth() + 1).padStart(2, "0");
    const yearOptions = useMemo(() => getYearOptions(2000), []);

    const buildInitialState = (data) => {
        const parsedStart = parseMonthYear(data?.startDate);
        const parsedEnd = parseMonthYear(data?.endDate);
        return {
            company: data?.company || "",
            companyWebsite: data?.companyWebsite || "",
            position: data?.position || "",
            startMonth: parsedStart?.month || currentMonth,
            startYear: parsedStart?.year || currentYear,
            endMonth: parsedEnd?.month || currentMonth,
            endYear: parsedEnd?.year || currentYear,
            isPresent: Boolean(parsedEnd?.isPresent),
            description: data?.description || "",
        };
    };

    const [formState, setFormState] = useState(() => buildInitialState(existingData));
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        setFormState(buildInitialState(existingData));
        setErrors({});
    }, [existingData]);

    const startDate = formatMonthYear(formState.startMonth, formState.startYear);
    const endDate = formState.isPresent
        ? "Present"
        : formatMonthYear(formState.endMonth, formState.endYear);
    const durationInfo = calculateDuration(startDate, endDate);
    const calculatedExp = durationInfo?.isValidOrder ? durationInfo.formatted : "";

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        if (errors[name] || errors.dateRange || errors.submit) {
            setErrors((prev) => ({ ...prev, [name]: "", dateRange: "", submit: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formState.company?.trim()) newErrors.company = "Company is required";
        if (!formState.position?.trim()) newErrors.position = "Position is required";
        if (!durationInfo || !durationInfo.isValidOrder) {
            newErrors.dateRange = "End date cannot be earlier than start date";
        }
        if (!formState.description?.trim()) newErrors.description = "Description is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const payload = {
            company: formState.company.trim(),
            companyWebsite: formState.companyWebsite.trim(),
            position: formState.position.trim(),
            startDate,
            endDate,
            exp: calculatedExp,
            description: formState.description.trim(),
        };

        setIsSubmitting(true);
        try {
            const encodedCompany = encodeURIComponent(existingData.company);
            const res = await axios.put(
                `${API_BASE_URL}/experience/company/${encodedCompany}`,
                payload
            );
            onUpdate(res.data?.data || res.data);
            onClose();
        } catch (err) {
            console.error("Error updating experience:", err);
            setErrors({
                submit: err.response?.data?.message || "Failed to update experience. Please try again.",
            });
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
                        className="relative w-full max-w-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative transform overflow-hidden rounded-2xl bg-white shadow-2xl">
                            {/* Modal header with gradient and pattern */}
                            <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-5 overflow-hidden">
                                {/* Decorative pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
                                        <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>
                                
                                <div className="flex items-center justify-between relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                            <FaBriefcase className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Update Experience</h3>
                                            <p className="text-white/80 text-xs mt-0.5">Edit the details below</p>
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
                            <div className="bg-white px-5 sm:px-6 py-5 max-h-[65vh] overflow-y-auto">
                                <form id="update-experience-form" onSubmit={handleSubmit} className="space-y-4">
                                    {/* Company Name */}
                                    <motion.div variants={formItemVariants} initial="hidden" animate="visible">
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            <span className="flex items-center gap-2">
                                                <FaBuilding className="text-blue-600" />
                                                Company Name
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="company"
                                                value={formState.company}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-2.5 rounded-lg border ${
                                                    errors.company
                                                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                                                } focus:ring-2 outline-none transition-all text-sm`}
                                                placeholder="e.g. Google"
                                            />
                                            {formState.company && !errors.company && (
                                                <FaCheckCircle className="absolute right-3 top-3 text-green-500 text-sm" />
                                            )}
                                        </div>
                                        {errors.company && (
                                            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                                                <FaExclamationCircle className="text-xs" />
                                                {errors.company}
                                            </p>
                                        )}
                                    </motion.div>

                                    {/* Company Website (Optional) */}
                                    <motion.div variants={formItemVariants} initial="hidden" animate="visible">
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            <span className="flex items-center gap-2">
                                                <FaGlobe className="text-cyan-600" />
                                                Company Website
                                                <span className="text-xs font-normal text-gray-400">(Optional)</span>
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="companyWebsite"
                                            value={formState.companyWebsite}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-cyan-200 focus:ring-2 outline-none transition-all text-sm"
                                            placeholder="e.g. https://company.com"
                                        />
                                    </motion.div>

                                    {/* Position */}
                                    <motion.div variants={formItemVariants} initial="hidden" animate="visible">
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            <span className="flex items-center gap-2">
                                                <FaUserTie className="text-indigo-600" />
                                                Position
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="position"
                                                value={formState.position}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-2.5 rounded-lg border ${
                                                    errors.position
                                                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                                        : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
                                                } focus:ring-2 outline-none transition-all text-sm`}
                                                placeholder="e.g. Software Engineer"
                                            />
                                            {formState.position && !errors.position && (
                                                <FaCheckCircle className="absolute right-3 top-3 text-green-500 text-sm" />
                                            )}
                                        </div>
                                        {errors.position && (
                                            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                                                <FaExclamationCircle className="text-xs" />
                                                {errors.position}
                                            </p>
                                        )}
                                    </motion.div>

                                    {/* Start Date (Month & Year) */}
                                    <motion.div variants={formItemVariants} initial="hidden" animate="visible">
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            <span className="flex items-center gap-2">
                                                <FaCalendarAlt className="text-green-600" />
                                                Start Date
                                            </span>
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <select
                                                aria-label="Start Month"
                                                name="startMonth"
                                                value={formState.startMonth}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-sm bg-white"
                                            >
                                                {MONTH_OPTIONS.map((m) => (
                                                    <option key={m.value} value={m.value}>
                                                        {m.label}
                                                    </option>
                                                ))}
                                            </select>
                                            <select
                                                aria-label="Start Year"
                                                name="startYear"
                                                value={formState.startYear}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-sm bg-white"
                                            >
                                                {yearOptions.map((year) => (
                                                    <option key={year} value={year}>
                                                        {year}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </motion.div>

                                    {/* End Date (Month & Year or Present) */}
                                    <motion.div variants={formItemVariants} initial="hidden" animate="visible">
                                        <div className="flex items-center justify-between mb-1.5">
                                            <label className="block text-sm font-semibold text-gray-700">
                                                <span className="flex items-center gap-2">
                                                    <FaCalendarAlt className="text-orange-600" />
                                                    End Date
                                                </span>
                                            </label>
                                            <label className="inline-flex items-center gap-2 text-xs font-medium text-gray-700 cursor-pointer select-none">
                                                <input
                                                    type="checkbox"
                                                    name="isPresent"
                                                    checked={formState.isPresent}
                                                    onChange={handleChange}
                                                    className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                Currently working here (Present)
                                            </label>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <select
                                                aria-label="End Month"
                                                name="endMonth"
                                                value={formState.endMonth}
                                                onChange={handleChange}
                                                disabled={formState.isPresent}
                                                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm bg-white disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                                            >
                                                {MONTH_OPTIONS.map((m) => (
                                                    <option key={m.value} value={m.value}>
                                                        {m.label}
                                                    </option>
                                                ))}
                                            </select>
                                            <select
                                                aria-label="End Year"
                                                name="endYear"
                                                value={formState.endYear}
                                                onChange={handleChange}
                                                disabled={formState.isPresent}
                                                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm bg-white disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                                            >
                                                {yearOptions.map((year) => (
                                                    <option key={year} value={year}>
                                                        {year}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        {errors.dateRange && (
                                            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                                                <FaExclamationCircle className="text-xs" />
                                                {errors.dateRange}
                                            </p>
                                        )}
                                    </motion.div>

                                    {/* Auto-calculated Duration */}
                                    <motion.div variants={formItemVariants} initial="hidden" animate="visible">
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            <span className="flex items-center justify-between">
                                                <span className="flex items-center gap-2">
                                                    <FaClock className="text-purple-600" />
                                                    Duration
                                                </span>
                                                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                                                    Auto-calculated
                                                </span>
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="exp"
                                            value={calculatedExp || "Invalid date range"}
                                            readOnly
                                            className={`w-full px-4 py-2.5 rounded-lg border text-sm font-medium outline-none ${
                                                durationInfo?.isValidOrder
                                                    ? "border-purple-200 bg-purple-50/60 text-purple-800"
                                                    : "border-red-300 bg-red-50 text-red-600"
                                            }`}
                                        />
                                    </motion.div>

                                    {/* Description Field */}
                                    <motion.div variants={formItemVariants} initial="hidden" animate="visible">
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                            <span className="flex items-center gap-2">
                                                <FaFileAlt className="text-pink-600" />
                                                Description
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <textarea
                                                name="description"
                                                rows={4}
                                                value={formState.description}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-2.5 rounded-lg border ${
                                                    errors.description 
                                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                                                        : 'border-gray-300 focus:border-pink-500 focus:ring-pink-200'
                                                } focus:ring-2 outline-none transition-all text-sm resize-none`}
                                                placeholder="Describe your responsibilities and achievements"
                                            />
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
                                </form>
                            </div>

                            {/* Modal footer */}
                            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                                <div className="flex flex-col sm:flex-row-reverse gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        form="update-experience-form"
                                        disabled={isSubmitting || !durationInfo?.isValidOrder}
                                        className={`flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-semibold text-white shadow-lg transition-all duration-200 ${
                                            isSubmitting || !durationInfo?.isValidOrder
                                                ? 'bg-gradient-to-r from-indigo-400 to-purple-400 cursor-not-allowed' 
                                                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl'
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
                                                <span>Update Experience</span>
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

export default ExpiUpdate;