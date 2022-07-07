const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');

const uuidv1 = require('uuid').v1;




const config = require('./database');

// -----------------------------
dotenv.config()
app = express()


app.use(express.static(path.resolve(__dirname,'public')));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({
    extended:true,
})
);

// ----------Constants----------

PORT = process.env.PORT || 5678;
const dbname = 'candy';
const tablename = 'users';
// -----------------------------


const connection = mysql.createConnection(config.db);


// -----------Routes------------

app.get('/', (req,res)=>{
        res.sendFile('index.html') //route for dummy ui to test everything
    })


app.post('/login', (req,res)=>{

    uname = req.body.username;
    pword = req.body.password;


    connection.query((`INSERT INTO ${tablename} (username,password,id) VALUES ('${uname}','${pword}','${id}');`), (err, results, fields) => {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    })


    })

app.post('/register',(req,res)=>{
    console.log(req.body);

    uname = req.body.username;
    pword = req.body.password;
    id = uuidv1();

    connection.query((`INSERT INTO ${tablename} (username,password,id) VALUES ("${uname}","${pword}","${id}");`), (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        if(results){
            console.log("saved into db's table")
        }
    })
    // INSERT INTO USERS (username,password) VALUES ("testy","passy");
    console.log(` got the req with ${uname} and ${pword} and id as ${id}`)

    res.json({"message":"helo"})
})


app.route('/users')
    .get((req,res)=>{
        connection.query(`SELECT * FROM ${tablename};`)
})
    .post((req,res)=>{
        //get 1 user id and return its data
})

app.post('/deleteuser',(req,res)=>{
    id2delete = req.body.id;

    connection.query(`DELETE FROM ${tablename} WHERE id="${id2delete}";`, (err, results, fields) => {
        if(err){
            console.log(err);
            return
        }
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    } )
})


// -----------------------------

app.listen(PORT , console.log(`port is running on ${PORT}`))