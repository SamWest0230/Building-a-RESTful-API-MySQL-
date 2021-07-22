const { Router } = require("express");
const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
require('dotenv').config()
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.USER,
  password: process.env.USER_PASS,
  database: process.env.DATABASE
});
db.connect((error) =>{
  if(error){
      console.log(error);

  }else{
      console.log('connected');
  }
})

router.get("/", (req, res) => {
db.query("SELECT * FROM games", (err, results, fields) => {
  if(err) throw err;
  res.send(results)
})
  });
  
 
  router.get("/:name", (req, res) => {
    const name = req.params.name;
    db.query("SELECT * FROM games WHERE name=?", req.params.name, (err, results, fields) => {
      if(err) throw err;
      res.send(results)
    })
  });

  router.post("/add", (req, res) => {
    const game = {
      id: 5,
      name:req.body.name,
      platforms: req.body.platform,
      genere: req.body.genere
    }
    db.query("INSERT INTO games SET ?", game, (err, results, fields) => {
      if(err) throw err;
      res.send(results)
    })
  })
  
  router.delete("", (req, res) => {
  
    res.send();
  })

module.exports = router;