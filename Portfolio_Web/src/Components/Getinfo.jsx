import { useEffect, useState } from "react";
import axios from "axios";

function Getinfo() {
  const [getdata, setGetdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/contact/form");
        setGetdata(res.data.data); // assuming backend returns { success, data: [...] }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-10 overflow-x-auto">
    <table className="min-w-full border border-gray-300 text-left text-sm">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="px-4 py-2 border">Name</th>
          <th className="px-4 py-2 border">Email</th>
          <th className="px-4 py-2 border">Subject</th>
          <th className="px-4 py-2 border">Message</th>
        </tr>
      </thead>
      <tbody>
        {getdata.map((item, index) => (
          <tr key={index} className="even:bg-gray-100 hover:bg-blue-100 transition-all">
            <td className="px-4 py-2 border">{item.name}</td>
            <td className="px-4 py-2 border">{item.email}</td>
            <td className="px-4 py-2 border">{item.subject}</td>
            <td className="px-4 py-2 border">{item.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
}

export default Getinfo;
