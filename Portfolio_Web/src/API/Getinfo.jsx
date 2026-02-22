// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // function Getinfo() {
// //   const [getdata, setGetdata] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const res = await axios.get(`${API_BASE_URL}/contact`);
// //         setGetdata(res.data.data);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //         setGetdata([]); 
// //         toast.error("Failed to fetch data");
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const deleteItem = async (email) => {
// //     try {
// //       const response = await fetch(
// //         `${API_BASE_URL}/contact/email/${email}`,
// //         { method: "DELETE" }
// //       );

// //       if (response.ok) {
// //         toast.success("Message deleted successfully!");
// //         setGetdata(getdata.filter((item) => item.email !== email));
// //       } else {
// //         toast.error("Failed to delete message.");
// //       }
// //     } catch (err) {
// //       console.error("Delete failed", err);
// //       toast.error("Error deleting message.");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
// //       <ToastContainer
// //         position="top-right"
// //         autoClose={3000}
// //         hideProgressBar={false}
// //         newestOnTop
// //         closeOnClick
// //         rtl={false}
// //         pauseOnFocusLoss
// //         draggable
// //         pauseOnHover
// //       />

// //       <div className="max-w-7xl mx-auto">
// //         <div className="flex justify-between items-center mb-8">
// //           <h1 className="text-3xl font-extrabold text-gray-900">
// //             Contact Messages
// //           </h1>
// //           <button
// //             onClick={() => window.location.reload()}
// //             className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
// //           >
// //             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// //               <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
// //             </svg>
// //             Refresh
// //           </button>
// //         </div>

// //         {isLoading ? (
// //           <div className="flex justify-center items-center h-64">
// //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// //           </div>
// //         ) : getdata.length === 0 ? (
// //           <div className="text-center py-12 bg-white rounded-lg shadow">
// //             <p className="text-gray-500 text-lg mb-4">No contact messages found</p>
// //             <button
// //               onClick={() => window.location.reload()}
// //               className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
// //             >
// //               Retry
// //             </button>
// //           </div>
// //         ) : (
// //           <div className="bg-white shadow-md rounded-lg overflow-hidden">
// //             <div className="overflow-x-auto">
// //               <table className="min-w-full divide-y divide-gray-200">
// //                 <thead className="bg-gray-800">
// //                   <tr>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">ID</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Email</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Subject</th>
// //                     <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Message</th>
// //                     <th className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">Actions</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="bg-white divide-y divide-gray-200">
// //                   {getdata.map((item, index) => (
// //                     <tr key={index} className="hover:bg-gray-50 transition-colors">
// //                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
// //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.name}</td>
// //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
// //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.subject}</td>
// //                       <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{item.message}</td>
// //                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// //                         <button
// //                           onClick={() => deleteItem(item.email)}
// //                           className="text-red-600 hover:text-red-900 transition-colors flex items-center gap-1"
// //                         >
// //                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// //                             <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
// //                           </svg>
// //                           Delete
// //                         </button>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Getinfo;



// import { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { 
//   FaEnvelope, 
//   FaUser, 
//   FaTag, 
//   FaComment, 
//   FaTrash, 
//   FaSyncAlt,
//   FaInbox,
//   FaRegEnvelope,
//   FaExclamationCircle,
//   FaCheckCircle
// } from "react-icons/fa";

// function Getinfo() {
//   const [getdata, setGetdata] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [hoveredRow, setHoveredRow] = useState(null);
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`${API_BASE_URL}/contact`);
//         setGetdata(res.data.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setGetdata([]); 
//         toast.error("Failed to fetch data");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const deleteItem = async (email) => {
//     try {
//       const response = await fetch(
//         `${API_BASE_URL}/contact/email/${email}`,
//         { method: "DELETE" }
//       );

//       if (response.ok) {
//         toast.success("Message deleted successfully!");
//         setGetdata(getdata.filter((item) => item.email !== email));
//       } else {
//         toast.error("Failed to delete message.");
//       }
//     } catch (err) {
//       console.error("Delete failed", err);
//       toast.error("Error deleting message.");
//     }
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />

//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
//         >
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
//               <FaInbox className="text-white text-xl" />
//             </div>
//             <div>
//               <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 Contact Messages
//               </h1>
//               <p className="text-gray-500 text-sm mt-1">
//                 You have {getdata.length} message{getdata.length !== 1 ? 's' : ''} in your inbox
//               </p>
//             </div>
//           </div>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => window.location.reload()}
//             className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
//           >
//             <FaSyncAlt className="group-hover:rotate-180 transition-transform duration-500" />
//             Refresh
//           </motion.button>
//         </motion.div>

//         {/* Stats Cards */}
//         {!isLoading && getdata.length > 0 && (
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
//           >
//             <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-sm">Total Messages</p>
//                   <p className="text-2xl font-bold text-gray-800">{getdata.length}</p>
//                 </div>
//                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                   <FaEnvelope className="text-blue-600" />
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-sm">Unique Senders</p>
//                   <p className="text-2xl font-bold text-gray-800">
//                     {new Set(getdata.map(item => item.email)).size}
//                   </p>
//                 </div>
//                 <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
//                   <FaUser className="text-green-600" />
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-sm">Subjects</p>
//                   <p className="text-2xl font-bold text-gray-800">
//                     {new Set(getdata.map(item => item.subject)).size}
//                   </p>
//                 </div>
//                 <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
//                   <FaTag className="text-purple-600" />
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-sm">Latest</p>
//                   <p className="text-sm font-bold text-gray-800">
//                     {new Date().toLocaleDateString()}
//                   </p>
//                 </div>
//                 <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
//                   <FaRegEnvelope className="text-orange-600" />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}

//         {isLoading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="relative">
//               <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <FaEnvelope className="text-blue-600 text-2xl animate-pulse" />
//               </div>
//             </div>
//           </div>
//         ) : getdata.length === 0 ? (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-white rounded-2xl shadow-xl overflow-hidden p-16 text-center border border-gray-200"
//           >
//             <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
//               <FaRegEnvelope className="text-4xl text-blue-600" />
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-900 mb-3">No messages yet</h3>
//             <p className="text-gray-500 mb-8 max-w-md mx-auto">
//               Your inbox is empty. When users contact you through the website, their messages will appear here.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => window.location.reload()}
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-8 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
//             >
//               <FaSyncAlt className="group-hover:rotate-180 transition-transform duration-500" />
//               Refresh
//             </motion.button>
//           </motion.div>
//         ) : (
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
//           >
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gradient-to-r from-gray-800 to-gray-900">
//                   <tr>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">#</th>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                       <div className="flex items-center gap-2">
//                         <FaUser className="text-sm" />
//                         Name
//                       </div>
//                     </th>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                       <div className="flex items-center gap-2">
//                         <FaEnvelope className="text-sm" />
//                         Email
//                       </div>
//                     </th>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                       <div className="flex items-center gap-2">
//                         <FaTag className="text-sm" />
//                         Subject
//                       </div>
//                     </th>
//                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
//                       <div className="flex items-center gap-2">
//                         <FaComment className="text-sm" />
//                         Message
//                       </div>
//                     </th>
//                     <th className="px-6 py-4 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {getdata.map((item, index) => (
//                     <motion.tr
//                       key={index}
//                       variants={itemVariants}
//                       whileHover={{ scale: 1.01 }}
//                       className={`transition-all duration-300 ${
//                         hoveredRow === index 
//                           ? 'bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md' 
//                           : 'hover:bg-gray-50'
//                       }`}
//                       onMouseEnter={() => setHoveredRow(index)}
//                       onMouseLeave={() => setHoveredRow(null)}
//                     >
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className="text-sm font-medium text-gray-900 bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center">
//                           {index + 1}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-3 shadow-md">
//                             <FaUser className="text-white text-xs" />
//                           </div>
//                           <div className="text-sm font-semibold text-gray-900">{item.name}</div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <a 
//                           href={`mailto:${item.email}`} 
//                           className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
//                         >
//                           <FaEnvelope className="text-xs" />
//                           {item.email}
//                         </a>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 border border-blue-200">
//                           {item.subject}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="text-sm text-gray-600 max-w-xs line-clamp-2 bg-gray-50 p-2 rounded-lg">
//                           {item.message}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => deleteItem(item.email)}
//                           className="text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition-all duration-200 inline-flex items-center gap-1"
//                           title="Delete"
//                         >
//                           <FaTrash className="text-lg" />
//                         </motion.button>
//                       </td>
//                     </motion.tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
            
//             {/* Table Footer */}
//             <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-t border-gray-200">
//               <div className="flex items-center justify-between">
//                 <p className="text-sm text-gray-600">
//                   Showing <span className="font-semibold text-gray-900">{getdata.length}</span> messages
//                 </p>
//                 <p className="text-xs text-gray-500">
//                   Last updated: {new Date().toLocaleString()}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Getinfo;




import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { 
  FaEnvelope, 
  FaUser, 
  FaTag, 
  FaComment, 
  FaTrash, 
  FaSyncAlt,
  FaInbox,
  FaRegEnvelope,
  FaExclamationCircle,
  FaCheckCircle
} from "react-icons/fa";

function Getinfo() {
  const [getdata, setGetdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredRow, setHoveredRow] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/contact`);
        setGetdata(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setGetdata([]); 
        toast.error("Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const deleteItem = async (email) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/contact/email/${email}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        toast.success("Message deleted successfully!");
        setGetdata(getdata.filter((item) => item.email !== email));
      } else {
        toast.error("Failed to delete message.");
      }
    } catch (err) {
      console.error("Delete failed", err);
      toast.error("Error deleting message.");
    }
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
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center h-14">
            {/* Navigation with dots - Centered */}
            <div className="flex items-center space-x-12">
              <Link
                to="/getinfo"
                className="flex items-center space-x-2 text-blue-600 font-medium relative group"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-sm font-medium uppercase tracking-wider">Get Info</span>
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
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
                className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-all duration-300 group"
              >
                <span className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300"></span>
                <span className="text-sm font-medium uppercase tracking-wider">Projects</span>
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
          className="!mt-20 !z-[9999]"
        />

        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaInbox className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Contact Messages
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                  You have {getdata.length} message{getdata.length !== 1 ? 's' : ''} in your inbox
                </p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <FaSyncAlt className="group-hover:rotate-180 transition-transform duration-500" />
              Refresh
            </motion.button>
          </motion.div>

          {/* Stats Cards */}
          {!isLoading && getdata.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            >
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Messages</p>
                    <p className="text-2xl font-bold text-gray-800">{getdata.length}</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Unique Senders</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {new Set(getdata.map(item => item.email)).size}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FaUser className="text-green-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Subjects</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {new Set(getdata.map(item => item.subject)).size}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <FaTag className="text-purple-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Latest</p>
                    <p className="text-sm font-bold text-gray-800">
                      {new Date().toLocaleDateString()}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <FaRegEnvelope className="text-orange-600" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaEnvelope className="text-blue-600 text-2xl animate-pulse" />
                </div>
              </div>
            </div>
          ) : getdata.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden p-16 text-center border border-gray-200"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaRegEnvelope className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">No messages yet</h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Your inbox is empty. When users contact you through the website, their messages will appear here.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-8 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaSyncAlt className="group-hover:rotate-180 transition-transform duration-500" />
                Refresh
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gradient-to-r from-gray-800 to-gray-900">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">#</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          <FaUser className="text-sm" />
                          Name
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          <FaEnvelope className="text-sm" />
                          Email
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          <FaTag className="text-sm" />
                          Subject
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          <FaComment className="text-sm" />
                          Message
                        </div>
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {getdata.map((item, index) => (
                      <motion.tr
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.01 }}
                        className={`transition-all duration-300 ${
                          hoveredRow === index 
                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md' 
                            : 'hover:bg-gray-50'
                        }`}
                        onMouseEnter={() => setHoveredRow(index)}
                        onMouseLeave={() => setHoveredRow(null)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-gray-900 bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center">
                            {index + 1}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-3 shadow-md">
                              <FaUser className="text-white text-xs" />
                            </div>
                            <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a 
                            href={`mailto:${item.email}`} 
                            className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                          >
                            <FaEnvelope className="text-xs" />
                            {item.email}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                            {item.subject}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-600 max-w-xs line-clamp-2 bg-gray-50 p-2 rounded-lg">
                            {item.message}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => deleteItem(item.email)}
                            className="text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition-all duration-200 inline-flex items-center gap-1"
                            title="Delete"
                          >
                            <FaTrash className="text-lg" />
                          </motion.button>
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
                    Showing <span className="font-semibold text-gray-900">{getdata.length}</span> messages
                  </p>
                  <p className="text-xs text-gray-500">
                    Last updated: {new Date().toLocaleString()}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}

export default Getinfo;