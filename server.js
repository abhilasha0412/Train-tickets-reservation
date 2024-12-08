const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const tickets = require("./routes/api/tickets"); // Import ticket routes
const path = require("path");
require("dotenv").config({ path: "./config.env" });

// CONNECT TO DB
connectDB();

// INITIATE APP
const app = express();

// HANDLE MIDDLEWARE
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use("/api/tickets", tickets); // Use ticket routes

// SERVE STATIC FILES
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

// START SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));
