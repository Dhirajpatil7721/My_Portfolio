// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db.js");
// const apiRoutes = require("./routes/Routeall.js"); 

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Connect to Database
// connectDB();

// // Use Merged API Routes
// app.use("/api", apiRoutes); // Handles /contact, /experience, /project

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const apiRoutes = require("./routes/Routeall.js"); 

const app = express();

// CORS configuration
const allowedOrigins = [
  "https://dhirajpatilv.vercel.app", // Vercel frontend
  "http://localhost:5173",           // Local development frontend
  "http://localhost:3000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman or server-to-server proxies)
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.indexOf(origin) !== -1 ||
        origin.endsWith(".vercel.app")
      ) {
        return callback(null, true);
      }
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

connectDB(); // connect to MongoDB

app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
