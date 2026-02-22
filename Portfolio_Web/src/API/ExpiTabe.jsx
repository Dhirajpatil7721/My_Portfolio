// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ExpiAdd from "../API/ExpiAdd";
// import ExpiUpdate from "../API/ExpiUpdate";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ExpiTabe = () => {
//     const [experienceData, setExperienceData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
//     const [selectedExperience, setSelectedExperience] = useState(null);
//     const [hoveredRow, setHoveredRow] = useState(null);
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
//     useEffect(() => {
//         const fetchExperience = async () => {
//             try {
//                 const response = await axios.get(`${API_BASE_URL}/experience`);
//                 setExperienceData(response.data.data || response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError(err.message);
//                 setLoading(false);
//             }
//         };

//         fetchExperience();
//     }, []);

//     const handleDeleteByCompany = async (companyName) => {
//         try {
//             const encodedCompany = encodeURIComponent(companyName);
//             await axios.delete(`${API_BASE_URL}/experience/company/${encodedCompany}`);
//             setExperienceData((prevData) => prevData.filter((exp) => exp.company !== companyName));
//             toast.warn("Message deleted successfully!");
//         } catch (err) {
//             console.error("Error deleting experience by company:", err);
//         }
//     };

//     const handleAddExperience = (newExperience) => {
//         setExperienceData([...experienceData, newExperience]);
//     };

//     const handleUpdateClick = (exp) => {
//         setSelectedExperience(exp);
//         setIsUpdateModalOpen(true);
//     };

//     const handleUpdateExperience = (updatedExp) => {
//         setExperienceData((prevData) =>
//             prevData.map((exp) =>
//                 exp.company === updatedExp.company ? updatedExp : exp
//             )
//         );
//     };

//     if (loading) return (
//         <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//     );

//     if (error) return (
//         <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
//             <p className="font-bold">Error</p>
//             <p>{error}</p>
//         </div>
//     );

//     return (
//         <div className="container mx-auto px-4 py-8 max-w-7xl mt-20">
//             <ToastContainer
//                 position="top-right"
//                 autoClose={3000}
//                 hideProgressBar={false}
//                 newestOnTop
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//             />
//             <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-3xl font-bold text-gray-800">Work Experience</h2>
//                 <div className="flex space-x-4">
//                     <button
//                         onClick={() => window.location.reload()}
//                         className="flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-200 transition-all duration-300 shadow-sm"
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
//                         </svg>
//                         <span>Refresh</span>
//                     </button>

//                     <button
//                         onClick={() => setIsModalOpen(true)}
//                         className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-300 shadow-sm"
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
//                         </svg>
//                         <span>Add Experience</span>
//                     </button>
//                 </div>
//             </div>

//             {experienceData.length > 0 ? (
//                 <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//                     <div className="overflow-x-auto">
//                         <table className="min-w-full divide-y divide-gray-200">
//                             <thead className="bg-gray-50">
//                                 <tr>
//                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
//                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
//                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
//                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
//                                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//                                     <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="bg-white divide-y divide-gray-200">
//                                 {/* {experienceData.map((exp) => (
//                                     <tr
//                                         key={exp._id}
//                                         className={`transition-all duration-200 ${hoveredRow === exp._id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
//                                         onMouseEnter={() => setHoveredRow(exp._id)}
//                                         onMouseLeave={() => setHoveredRow(null)}
//                                     >
//                                         <td className="px-6 py-4 whitespace-nowrap">
//                                             <div className="text-sm font-medium text-gray-900">{exp.company}</div>
//                                         </td>
//                                         <td className="px-6 py-4 whitespace-nowrap">
//                                             <div className="text-sm text-gray-900">{exp.position}</div>
//                                         </td>
//                                         <td className="px-6 py-4 whitespace-nowrap">
//                                             <div className="text-sm text-gray-500">
//                                                 {exp.startDate} - {exp.endDate}
//                                             </div>
//                                         </td>
//                                         <td className="px-6 py-4 whitespace-nowrap">
//                                             <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                                                 {exp.exp} years
//                                             </span>
//                                         </td>
//                                         <td className="px-6 py-4">
//                                             <div className="text-sm text-gray-500 line-clamp-2">{exp.description}</div>
//                                         </td>
//                                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                             <div className="flex justify-end space-x-2">
//                                                 <button
//                                                     onClick={() => handleUpdateClick(exp)}
//                                                     className="text-indigo-600 hover:text-indigo-900 transition-colors duration-200"
//                                                     title="Edit"
//                                                 >
//                                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                                         <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
//                                                     </svg>
//                                                 </button>
//                                                 <button
//                                                     onClick={() => handleDeleteByCompany(exp.company)}
//                                                     className="text-red-600 hover:text-red-900 transition-colors duration-200"
//                                                     title="Delete"
//                                                 >
//                                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                                         <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                                                     </svg>
//                                                 </button>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))} */}
//                                 {[...experienceData]
//                                     .reverse()
//                                     .map((exp) => (
//                                         <tr
//                                             key={exp._id}
//                                             className={`transition-all duration-200 ${hoveredRow === exp._id
//                                                     ? 'bg-blue-50'
//                                                     : 'hover:bg-gray-50'
//                                                 }`}
//                                             onMouseEnter={() => setHoveredRow(exp._id)}
//                                             onMouseLeave={() => setHoveredRow(null)}
//                                         >
//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 <div className="text-sm font-medium text-gray-900">
//                                                     {exp.company}
//                                                 </div>
//                                             </td>

//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 <div className="text-sm text-gray-900">
//                                                     {exp.position}
//                                                 </div>
//                                             </td>

//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 <div className="text-sm text-gray-500">
//                                                     {exp.startDate} - {exp.endDate}
//                                                 </div>
//                                             </td>

//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                                                     {exp.exp} 
//                                                 </span>
//                                             </td>

//                                             <td className="px-6 py-4">
//                                                 <div className="text-sm text-gray-500 line-clamp-2">
//                                                     {exp.description}
//                                                 </div>
//                                             </td>

//                                             <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                                 <div className="flex justify-end space-x-2">
//                                                     <button
//                                                         onClick={() => handleUpdateClick(exp)}
//                                                         className="text-indigo-600 hover:text-indigo-900 transition-colors duration-200"
//                                                         title="Edit"
//                                                     >
//                                                         ✏️
//                                                     </button>

//                                                     <button
//                                                         onClick={() => handleDeleteByCompany(exp.company)}
//                                                         className="text-red-600 hover:text-red-900 transition-colors duration-200"
//                                                         title="Delete"
//                                                     >
//                                                         🗑️
//                                                     </button>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8 text-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <h3 className="mt-2 text-lg font-medium text-gray-900">No experience added yet</h3>
//                     <p className="mt-1 text-sm text-gray-500">Get started by adding your first work experience.</p>
//                     <div className="mt-6">
//                         <button
//                             onClick={() => setIsModalOpen(true)}
//                             className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
//                             </svg>
//                             Add Experience
//                         </button>
//                     </div>
//                 </div>
//             )}

//             {/* Add Modal */}
//             <ExpiAdd
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//                 onAddExperience={handleAddExperience}
//             />

//             {/* Update Modal */}
//             <ExpiUpdate
//                 isOpen={isUpdateModalOpen}
//                 onClose={() => setIsUpdateModalOpen(false)}
//                 existingData={selectedExperience}
//                 onUpdate={handleUpdateExperience}
//             />
//         </div>
//     );
// };

// export default ExpiTabe;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpiAdd from "../API/ExpiAdd";
import ExpiUpdate from "../API/ExpiUpdate";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaBriefcase,
    FaCalendarAlt,
    FaTrash,
    FaEdit,
    FaPlus,
    FaSyncAlt,
    FaBuilding,
    FaUserTie,
    FaClock,
    FaFileAlt
} from "react-icons/fa";

const ExpiTabe = () => {
    const navigate = useNavigate();
    const [experienceData, setExperienceData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/experience`);
                setExperienceData(response.data.data || response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchExperience();
    }, []);

    const handleDeleteByCompany = async (companyName) => {
        try {
            const encodedCompany = encodeURIComponent(companyName);
            await axios.delete(`${API_BASE_URL}/experience/company/${encodedCompany}`);
            setExperienceData((prevData) => prevData.filter((exp) => exp.company !== companyName));
            toast.success("Experience deleted successfully!");
        } catch (err) {
            console.error("Error deleting experience by company:", err);
            toast.error("Failed to delete experience");
        }
    };

    const handleAddExperience = (newExperience) => {
        setExperienceData([...experienceData, newExperience]);
        toast.success("Experience added successfully!");
    };

    const handleUpdateClick = (exp) => {
        setSelectedExperience(exp);
        setIsUpdateModalOpen(true);
    };

    const handleUpdateExperience = (updatedExp) => {
        setExperienceData((prevData) =>
            prevData.map((exp) =>
                exp._id === updatedExp._id ? updatedExp : exp
            )
        );
        toast.success("Experience updated successfully!");
    };

    const handleLogout = () => {
        navigate('/');
    };

    // Filter data based on search
    const filteredData = experienceData.filter(exp =>
        exp.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.position?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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

    if (loading) return (
        <div className="flex justify-center items-center h-64 mt-32">
            <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <FaBriefcase className="text-blue-600 text-2xl animate-pulse" />
                </div>
            </div>
        </div>
    );

    if (error) return (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mt-32 max-w-4xl mx-auto" role="alert">
            <p className="font-bold">Error</p>
            <p>{error}</p>
        </div>
    );

    return (
        <>
            {/* Original Navbar - Your existing navbar component would go here */}
            {/* This is where your original navbar component should be placed */}

            {/* Admin Sub Navbar */}
            <div className="fixed top-16 left-0 right-0 z-40">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex items-center justify-center h-12 mt-8">
                        {/* Navigation with dots - Centered */}
                        <div className="flex items-center space-x-10 ">
                            <Link
                                to="/getinfo"
                                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-300 group"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300"></span>
                                <span className="text-xs font-medium uppercase tracking-wider">Get Info</span>
                            </Link>

                            <Link
                                to="/expitable"
                                className="flex items-center space-x-2 text-blue-600 font-medium relative"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                                <span className="text-xs font-medium uppercase tracking-wider">Experience</span>
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
                            </Link>

                            <Link
                                to="/projecttable"
                                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-300 group"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300"></span>
                                <span className="text-xs font-medium uppercase tracking-wider">Projects</span>
                            </Link>


                        </div>
                    </div>

                    {/* Only HR Line - No box, just a line */}
                    <hr className="border-t border-gray-200 w-full" />
                </div>
            </div>

            {/* Main content with padding for both navbars */}
            <div className="container mx-auto px-4 py-8 max-w-7xl mt-32">
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />

                {/* Header Section with Stats */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Work Experience
                            </h2>
                            <p className="text-gray-500 mt-1">Manage your professional journey</p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {/* Search Bar */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search by company or position..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all w-full md:w-64"
                                />
                                <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <button
                                onClick={() => window.location.reload()}
                                className="flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-200 transition-all duration-300 shadow-sm group"
                            >
                                <FaSyncAlt className="group-hover:rotate-180 transition-transform duration-500" />
                                <span>Refresh</span>
                            </button>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                            >
                                <FaPlus className="group-hover:scale-110 transition-transform" />
                                <span>Add Experience</span>
                            </button>
                        </div>
                    </div>

                </motion.div>

                {/* Table Section */}
                {filteredData.length > 0 ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200"
                    >
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Company</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Position</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Duration</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Experience</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Description</th>
                                        <th className="px-6 py-4 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {[...filteredData]
                                        .reverse()
                                        .map((exp, index) => (
                                            <motion.tr
                                                key={exp._id}
                                                variants={itemVariants}
                                                whileHover={{ scale: 1.01 }}
                                                className={`transition-all duration-300 ${hoveredRow === exp._id
                                                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md'
                                                    : 'hover:bg-gray-50'
                                                    }`}
                                                onMouseEnter={() => setHoveredRow(exp._id)}
                                                onMouseLeave={() => setHoveredRow(null)}
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                                            <FaBuilding className="text-blue-600 text-sm" />
                                                        </div>
                                                        <div className="text-sm font-semibold text-gray-900">
                                                            {exp.company}
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <FaUserTie className="text-gray-400 mr-2 text-sm" />
                                                        <div className="text-sm text-gray-700">
                                                            {exp.position}
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <FaCalendarAlt className="text-gray-400 mr-2 text-xs" />
                                                        {exp.startDate} - {exp.endDate}
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200">
                                                        {exp.exp}
                                                    </span>
                                                </td>

                                                <td className="px-6 py-4">
                                                    <div className="flex items-start">
                                                        <FaFileAlt className="text-gray-400 mr-2 mt-1 text-xs flex-shrink-0" />
                                                        <div className="text-sm text-gray-600 line-clamp-2">
                                                            {exp.description}
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex justify-end space-x-3">
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            onClick={() => handleUpdateClick(exp)}
                                                            className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 p-2 rounded-lg transition-all duration-200"
                                                            title="Edit"
                                                        >
                                                            <FaEdit className="text-lg" />
                                                        </motion.button>

                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            onClick={() => handleDeleteByCompany(exp.company)}
                                                            className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition-all duration-200"
                                                            title="Delete"
                                                        >
                                                            <FaTrash className="text-lg" />
                                                        </motion.button>
                                                    </div>
                                                </td>
                                            </motion.tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Table Footer */}
                        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                            <p className="text-sm text-gray-500">
                                Showing {filteredData.length} of {experienceData.length} experiences
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white shadow-xl rounded-xl overflow-hidden p-12 text-center border border-gray-200"
                    >
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaBriefcase className="text-4xl text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No experience added yet</h3>
                        <p className="text-gray-500 mb-6">Get started by adding your first work experience.</p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center px-6 py-3 border border-transparent shadow-lg text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                        >
                            <FaPlus className="mr-2" />
                            Add Experience
                        </button>
                    </motion.div>
                )}

                {/* Add Modal */}
                <ExpiAdd
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onAddExperience={handleAddExperience}
                />

                {/* Update Modal */}
                <ExpiUpdate
                    isOpen={isUpdateModalOpen}
                    onClose={() => setIsUpdateModalOpen(false)}
                    existingData={selectedExperience}
                    onUpdate={handleUpdateExperience}
                />
            </div>
        </>
    );
};

export default ExpiTabe;