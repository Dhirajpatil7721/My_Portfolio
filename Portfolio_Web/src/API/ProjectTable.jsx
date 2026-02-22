// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Projectadd from "./Projectadd";
// import ProjectUpdate from "./ProjectUpdate";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ProjectTable = () => {
//     const [projects, setProjects] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [showUpdateModal, setShowUpdateModal] = useState(false);
//     const [currentProject, setCurrentProject] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
//     const fetchProjects = () => {
//         setLoading(true);
//         axios
//             .get(`${API_BASE_URL}/project`)
//             .then((response) => {
//                 setProjects(response.data.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//                 setLoading(false);
//             });
//     };

//     useEffect(() => {
//         fetchProjects();
//     }, []);

//     const handleDelete = (title) => {
//         if (window.confirm("Are you sure you want to delete this project?")) {
//             axios
//                 .delete(`${API_BASE_URL}/project/title/${title}`)
//                 .then((response) => {
//                     fetchProjects();
//                     toast.warn("Message deleted successfully!");
//                 })
//                 .catch((error) => {
//                     console.error("Error deleting project:", error);
//                 });
//         }
//     };

//     const handleUpdate = (project) => {
//         setCurrentProject(project);
//         setShowUpdateModal(true);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
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
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-10">
//                     <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//                         Project Portfolio
//                     </h2>
//                     <p className="mt-3 text-xl text-gray-500">
//                         Manage your development projects
//                     </p>
//                 </div>

//                 <div className="flex justify-center space-x-4 mb-8">
//                     <button
//                         onClick={() => fetchProjects()}
//                         className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
//                     >
//                         <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
//                         </svg>
//                         Refresh Projects
//                     </button>

//                     <button
//                         onClick={() => setShowModal(true)}
//                         className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-200"
//                     >
//                         <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
//                         </svg>
//                         Add Project
//                     </button>
//                 </div>

//                 {showModal && (
//                     <Projectadd
//                         onClose={() => setShowModal(false)}
//                         onProjectAdded={fetchProjects}
//                     />
//                 )}

//                 {showUpdateModal && currentProject && (
//                     <ProjectUpdate
//                         project={currentProject}
//                         onClose={() => setShowUpdateModal(false)}
//                         onProjectUpdated={fetchProjects}
//                     />
//                 )}

//                 {loading ? (
//                     <div className="flex justify-center items-center py-20">
//                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
//                     </div>
//                 ) : projects.length > 0 ? (
//                     <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//                         <div className="overflow-x-auto">
//                             <table className="min-w-full divide-y divide-gray-200">
//                                 <thead className="bg-gray-50">
//                                     <tr>
//                                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Title
//                                         </th>
//                                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Icon
//                                         </th>
//                                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Description
//                                         </th>
//                                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Links
//                                         </th>
//                                         <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Actions
//                                         </th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="bg-white divide-y divide-gray-200">
//                                     {projects.slice().reverse().map((pro, index) => (
//                                         <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 <div className="text-2sm font-medium text-gray-900">{pro.title}</div>
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 <div className="text-sm">{pro.ico}</div>
//                                             </td>
//                                             <td className="px-6 py-4">
//                                                 <div className="text-2sm text-gray-500 line-clamp-2">{pro.description}</div>
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 <div className="flex flex-col space-y-2">
//                                                     {pro.git && (
//                                                         <a href={pro.git} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-center">
//                                                             <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
//                                                                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                                                             </svg>
//                                                             GitHub
//                                                         </a>
//                                                     )}
//                                                     {pro.host && (
//                                                         <a href={pro.host} target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:text-green-800 hover:underline flex items-center">
//                                                             <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
//                                                                 <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.457 3.057h-2.537zm1.5-5.057h-1.5v-1.5h1.5v1.5zm-1.5-3h-1.5v-1.5h1.5v1.5zm3 0h-1.5v-1.5h1.5v1.5zm-6-3h-1.5v-1.5h1.5v1.5zm3 0h-1.5v-1.5h1.5v1.5zm-6 6h-1.5v-1.5h1.5v1.5zm9.464 5.535l-1.414-1.414 2.828-2.828 1.414 1.414-2.828 2.828zm-12.728 0l-2.828-2.828 1.414-1.414 2.828 2.828-1.414 1.414zm9.264-12.728l1.414-1.414 2.828 2.828-1.414 1.414-2.828-2.828zm-12.728 0l-1.414-1.414 2.828-2.828 1.414 1.414-2.828 2.828z" />
//                                                             </svg>
//                                                             Live Demo
//                                                         </a>
//                                                     )}
//                                                 </div>
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                                 <div className="flex justify-end space-x-3">
//                                                     <button
//                                                         onClick={() => handleUpdate(pro)}
//                                                         className="text-indigo-600 hover:text-indigo-900 transition-colors duration-200"
//                                                         title="Edit"
//                                                     >
//                                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                                             <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
//                                                         </svg>
//                                                     </button>
//                                                     <button
//                                                         onClick={() => handleDelete(pro.title)}
//                                                         className="text-red-600 hover:text-red-900 transition-colors duration-200"
//                                                         title="Delete"
//                                                     >
//                                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                                                             <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                                                         </svg>
//                                                     </button>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="bg-white shadow overflow-hidden sm:rounded-lg p-8 text-center">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                         <h3 className="mt-3 text-lg font-medium text-gray-900">No projects found</h3>
//                         <p className="mt-1 text-sm text-gray-500">Get started by adding your first project.</p>
//                         <div className="mt-6">
//                             <button
//                                 onClick={() => setShowModal(true)}
//                                 className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
//                             >
//                                 <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                     <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
//                                 </svg>
//                                 Add Project
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProjectTable;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Projectadd from "./Projectadd";
import ProjectUpdate from "./ProjectUpdate";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { 
  FaProjectDiagram, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaEdit, 
  FaTrash, 
  FaSyncAlt, 
  FaPlus,
  FaCode,
  FaFolderOpen
} from "react-icons/fa";

const ProjectTable = () => {
    const [projects, setProjects] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [loading, setLoading] = useState(false);
    const [hoveredRow, setHoveredRow] = useState(null);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

    const fetchProjects = () => {
        setLoading(true);
        axios
            .get(`${API_BASE_URL}/project`)
            .then((response) => {
                setProjects(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleDelete = (title) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            axios
                .delete(`${API_BASE_URL}/project/title/${title}`)
                .then((response) => {
                    fetchProjects();
                    toast.warn("Message deleted successfully!");
                })
                .catch((error) => {
                    console.error("Error deleting project:", error);
                });
        }
    };

    const handleUpdate = (project) => {
        setCurrentProject(project);
        setShowUpdateModal(true);
    };

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

    return (
        <>
            {/* Admin Sub Navbar */}
            <div className="fixed top-16 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto px-4 mt-4">
                    <div className="flex items-center justify-center h-14">
                        {/* Navigation with dots - Centered */}
                        <div className="flex items-center space-x-12">
                            <Link
                                to="/getinfo"
                                className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-all duration-300 group"
                            >
                                <span className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300"></span>
                                <span className="text-sm font-medium uppercase tracking-wider">Get Info</span>
                            </Link>

                            <Link
                                to="/expitable"
                                className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-all duration-300 group"
                            >
                                <span className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300"></span>
                                <span className="text-sm font-medium uppercase tracking-wider">Experience</span>
                            </Link>

                            <Link
                                to="/projecttable"
                                className="flex items-center space-x-2 text-blue-600 font-medium relative"
                            >
                                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                                <span className="text-sm font-medium uppercase tracking-wider">Projects</span>
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
                            </Link>
                        </div>
                    </div>

                    {/* Only HR Line - No box, just a line */}
                    <hr className="border-t border-gray-200 w-full" />
                </div>
            </div>

            {/* Main Content */}
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-28">
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
                
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-10"
                    >
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                                <FaProjectDiagram className="text-white text-xl" />
                            </div>
                            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent sm:text-4xl">
                                Project Portfolio
                            </h2>
                        </div>
                        <p className="text-xl text-gray-500">
                            Manage your development projects
                        </p>
                        
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
                            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-500 text-sm">Total Projects</p>
                                        <p className="text-2xl font-bold text-gray-800">{projects.length}</p>
                                    </div>
                                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                        <FaFolderOpen className="text-yellow-600" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-500 text-sm">With GitHub</p>
                                        <p className="text-2xl font-bold text-gray-800">
                                            {projects.filter(p => p.git).length}
                                        </p>
                                    </div>
                                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                                        <FaGithub className="text-white" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-500 text-sm">With Live Demo</p>
                                        <p className="text-2xl font-bold text-gray-800">
                                            {projects.filter(p => p.host).length}
                                        </p>
                                    </div>
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <FaExternalLinkAlt className="text-green-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <div className="flex justify-center space-x-4 mb-8">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => fetchProjects()}
                            className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 group"
                        >
                            <FaSyncAlt className="mr-2 group-hover:rotate-180 transition-transform duration-500" />
                            Refresh Projects
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowModal(true)}
                            className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-md text-white bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-200 group"
                        >
                            <FaPlus className="mr-2 group-hover:scale-110 transition-transform" />
                            Add Project
                        </motion.button>
                    </div>

                    {/* Modals */}
                    {showModal && (
                        <Projectadd
                            onClose={() => setShowModal(false)}
                            onProjectAdded={fetchProjects}
                        />
                    )}

                    {showUpdateModal && currentProject && (
                        <ProjectUpdate
                            project={currentProject}
                            onClose={() => setShowUpdateModal(false)}
                            onProjectUpdated={fetchProjects}
                        />
                    )}

                    {/* Loading State */}
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="relative">
                                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-600"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FaCode className="text-yellow-600 text-2xl animate-pulse" />
                                </div>
                            </div>
                        </div>
                    ) : projects.length > 0 ? (
                        // Projects Table
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200"
                        >
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gradient-to-r from-gray-800 to-gray-900">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Icon</th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Links</th>
                                            <th className="px-6 py-4 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {projects.slice().reverse().map((pro, index) => (
                                            <motion.tr
                                                key={index}
                                                variants={itemVariants}
                                                whileHover={{ scale: 1.01 }}
                                                className={`transition-all duration-300 ${
                                                    hoveredRow === index 
                                                        ? 'bg-gradient-to-r from-yellow-50 to-orange-50 shadow-md' 
                                                        : 'hover:bg-gray-50'
                                                }`}
                                                onMouseEnter={() => setHoveredRow(index)}
                                                onMouseLeave={() => setHoveredRow(null)}
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                                                            <FaProjectDiagram className="text-white text-sm" />
                                                        </div>
                                                        <div className="text-sm font-semibold text-gray-900">{pro.title}</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-2xl">{pro.ico}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-600 line-clamp-2 bg-gray-50 p-2 rounded-lg">
                                                        {pro.description}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex flex-col space-y-2">
                                                        {pro.git && (
                                                            <a 
                                                                href={pro.git} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer" 
                                                                className="text-sm text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center group"
                                                            >
                                                                <FaGithub className="mr-2 text-gray-700 group-hover:scale-110 transition-transform" />
                                                                <span>GitHub</span>
                                                            </a>
                                                        )}
                                                        {pro.host && (
                                                            <a 
                                                                href={pro.host} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer" 
                                                                className="text-sm text-green-700 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center group"
                                                            >
                                                                <FaExternalLinkAlt className="mr-2 text-green-600 group-hover:scale-110 transition-transform" />
                                                                <span>Live Demo</span>
                                                            </a>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex justify-end space-x-3">
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            onClick={() => handleUpdate(pro)}
                                                            className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 p-2 rounded-lg transition-all duration-200"
                                                            title="Edit"
                                                        >
                                                            <FaEdit className="text-lg" />
                                                        </motion.button>

                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            onClick={() => handleDelete(pro.title)}
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
                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-gray-600">
                                        Showing <span className="font-semibold text-gray-900">{projects.length}</span> projects
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Last updated: {new Date().toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        // Empty State
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white shadow-xl rounded-xl overflow-hidden p-16 text-center border border-gray-200"
                        >
                            <div className="w-24 h-24 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaProjectDiagram className="text-4xl text-yellow-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-3">No projects found</h3>
                            <p className="text-gray-500 mb-8 max-w-md mx-auto">
                                Get started by adding your first project to showcase your work.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowModal(true)}
                                className="inline-flex items-center px-6 py-3 border border-transparent shadow-lg text-base font-medium rounded-lg text-white bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-300"
                            >
                                <FaPlus className="mr-2" />
                                Add Project
                            </motion.button>
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProjectTable;