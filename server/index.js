const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const connectdb = require("./src/config/db")

const app = express()

app.use(express.json());
app.use(cors());
app.use(body_parser.urlencoded ({extended: false}));

app.use("/", require("./src/controller/photoupload.controller"));
app.use("/uploads" , express.static("./uploads"))



const PORT = 3005;
app.listen(PORT, ()=>{
    connectdb.sequalize.authenticate().then(() => {
        console.log('Yep! you connected to database');
    }).catch(err => {
        console.error('Sorry! unable to connect', err);
    }
    );
    console.log(`server runing on port${PORT}`)
})