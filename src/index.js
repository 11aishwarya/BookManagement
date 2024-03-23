const express = require('express');
const mongoose = require('mongoose')

const app = express();
app.use(express.json());


app.use;

mongoose.connect( "mongodb+srv://sanhil143:raisahab12345@sanhildb.kk3knyj.mongodb.net/group16Database")
.then(() => console.log("My mongoDB is connected"))
.catch((err) => console.error(err))


app.listen(3400 , () =>{
    console.log("Express app running");
})