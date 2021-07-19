const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");
const gamesRoutes = require("./routes/games.js")
require('dotenv').config()
const PORT = 8080;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'api'
});
db.connect((error) =>{
    if(error){
        console.log(error);

    }else{
        console.log('connected');
    }
})
app.use(cors());
app.use(express.json());
app.use("/games", gamesRoutes)







app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});