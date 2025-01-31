const express = require("express");
const connectDB = require("./config");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/post"));

app.listen(process.env.PORT, () => console.log("Server running"));
