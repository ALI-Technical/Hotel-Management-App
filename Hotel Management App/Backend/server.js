const express = require("express");
const cors = require("cors");


const router = require("./Routes/routes");
const Database_Connection = require("./Config/database");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

//Allow body
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


// Database Connection
Database_Connection();


///all routes
app.use(router);

app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));