const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
require ('./middleware/passport');
// Connect Database
connectDB();

// Init Middileware
app.use(express.json({ extended: false })); // for taking data from post request(body-parser)
app.use(cors());

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/", require("./routes/login"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
