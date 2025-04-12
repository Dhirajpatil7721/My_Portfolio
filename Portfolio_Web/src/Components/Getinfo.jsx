import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css";  
import { ToastContainer } from "react-toastify";

function Getinfo() {
  const [getdata, setGetdata] = useState([]);

  // Fetch data from backend on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/contact/form");
        setGetdata(res.data.data); 
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  // Function to delete an item based on email
  const deleteItem = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/api/contact/form/email/${email}`, {
        method: "DELETE",
      });

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

  return (
    
    
    <div className="mt-5 overflow-x-auto px-10">
       <ToastContainer position="top-right" autoClose={3000} />
       <h1 className="text-center mb-5 text-3xl font-bold">Contact Table</h1>
      {/* <button onClick={() => window.location.reload()}>Refresh</button> */}
      <button
  onClick={() => window.location.reload()}
  className="bg-green-600 text-white px-5 py-1 rounded-lg text-lg hover:bg-green-700 transition mb-2 "
>
  🔄 Refresh
</button>
      <table className="min-w-full border border-gray-300 text-left text-sm">

        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Subject</th>
            <th className="px-4 py-2 border">Message</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        
        <tbody>
          {getdata.map((item, index) => (
            <tr key={index} className="even:bg-gray-100 hover:bg-blue-100 transition-all">
              <td className="px-4 py-2 border">{index+1}</td>
              <td className="px-4 py-2 border">{item.name}</td>
              <td className="px-4 py-2 border">{item.email}</td>
              <td className="px-4 py-2 border">{item.subject}</td>
              <td className="px-4 py-2 border">{item.message}</td>
              <td className="px-4 py-2 border">
                <button 
                  onClick={() => deleteItem(item.email)} 
                  className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 transition duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Getinfo;
